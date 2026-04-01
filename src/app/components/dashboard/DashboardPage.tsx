import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Users,
  DollarSign,
  Package,
  Calendar,
  MessageCircle,
  Target,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  Plus,
  RefreshCw,
  ChevronRight,
  Star,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import melPortrait from "../../../assets/78ea19d3f884e1598dfb94e5cc05dab06dd59ad2.png";

// Mock data
const CHART_DATA = [
  { dia: "Seg", valor: 820, vendas: 8 },
  { dia: "Ter", valor: 1240, vendas: 12 },
  { dia: "Qua", valor: 680, vendas: 6 },
  { dia: "Qui", valor: 1580, vendas: 15 },
  { dia: "Sex", valor: 2100, vendas: 19 },
  { dia: "Sáb", valor: 1890, vendas: 17 },
  { dia: "Hoje", valor: 1250, vendas: 12 },
];

const TASKS = [
  { id: 1, tipo: "crm", icon: Users, color: "#8B5CF6", label: "3 follow-ups pendentes", detail: "João Silva, Ana Santos, Pedro...", urgent: true },
  { id: 2, tipo: "agenda", icon: Calendar, color: "#0EA5E9", label: "2 agendamentos hoje", detail: "14h - Corte Maria | 16h - Manicure", urgent: false },
  { id: 3, tipo: "estoque", icon: Package, color: "#F59E0B", label: "Estoque baixo: 2 produtos", detail: "Camiseta P (2un) · Calça Preta (1un)", urgent: true },
  { id: 4, tipo: "financeiro", icon: DollarSign, color: "#EF4444", label: "1 conta vencendo hoje", detail: "Aluguel - R$ 1.800,00", urgent: true },
  { id: 5, tipo: "whatsapp", icon: MessageCircle, color: "#22C55E", label: "5 mensagens não lidas", detail: "WhatsApp Business", urgent: false },
];

const MODULES = [
  { id: "crm", label: "CRM", icon: Users, desc: "3 clientes", color: "#8B5CF6", bg: "#F5F3FF", badge: 3 },
  { id: "vendas", label: "Vendas", icon: ShoppingCart, desc: "12 hoje", color: "#0EA5E9", bg: "#F0F9FF", badge: 0 },
  { id: "estoque", label: "Estoque", icon: Package, desc: "2 alertas", color: "#F59E0B", bg: "#FFFBEB", badge: 2 },
  { id: "agenda", label: "Agenda", icon: Calendar, desc: "2 hoje", color: "#EC4899", bg: "#FDF2F8", badge: 1 },
  { id: "financeiro", label: "Financeiro", icon: DollarSign, desc: "Em dia", color: "#10B981", bg: "#F0FDF4", badge: 0 },
  { id: "config", label: "Config.", icon: Star, desc: "Plano Starter", color: "#6366F1", bg: "#EEF2FF", badge: 0 },
];

const MEL_INSIGHTS = [
  { msg: "Você vendeu 20% mais que ontem! Continue assim! 🎉", action: "Ver relatório" },
  { msg: "Não se esqueça de ligar para o João Silva - follow-up pendente às 14h ⏰", action: "Ver CRM" },
  { msg: "Camiseta P está acabando (2 unidades). Hora de reabastecer! 📦", action: "Ver estoque" },
  { msg: "Você está a R$ 750 da sua meta semanal! Vai conseguir! 💪", action: "Ver meta" },
];

const randomInsight = MEL_INSIGHTS[Math.floor(Math.random() * MEL_INSIGHTS.length)];

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function KpiCard({
  title,
  value,
  subtitle,
  trend,
  trendValue,
  icon: Icon,
  color,
  bg,
}: {
  title: string;
  value: string;
  subtitle?: string;
  trend: "up" | "down" | "neutral";
  trendValue: string;
  icon: React.ElementType;
  color: string;
  bg: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: bg }}>
          <Icon size={20} style={{ color }} />
        </div>
        <div
          className="flex items-center gap-1 px-2 py-1 rounded-full text-xs"
          style={{
            background: trend === "up" ? "#F0FDF4" : trend === "down" ? "#FEF2F2" : "#F8FAFC",
            color: trend === "up" ? "#16A34A" : trend === "down" ? "#DC2626" : "#64748B",
          }}
        >
          {trend === "up" ? <TrendingUp size={11} /> : trend === "down" ? <TrendingDown size={11} /> : null}
          <span style={{ fontWeight: 600 }}>{trendValue}</span>
        </div>
      </div>
      <p className="text-slate-500 text-xs mb-1">{title}</p>
      <p className="text-slate-900" style={{ fontSize: "1.4rem", fontWeight: 700, lineHeight: 1 }}>
        {value}
      </p>
      {subtitle && <p className="text-slate-400 text-xs mt-1">{subtitle}</p>}
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-lg rounded-xl px-3 py-2 border border-slate-100">
        <p className="text-slate-500 text-xs">{label}</p>
        <p className="text-slate-900 text-sm" style={{ fontWeight: 700 }}>
          {formatCurrency(payload[0]?.value)}
        </p>
        <p className="text-slate-400 text-xs">{payload[1]?.value} vendas</p>
      </div>
    );
  }
  return null;
};

export function DashboardPage() {
  const [refreshing, setRefreshing] = useState(false);
  const [showQuickSale, setShowQuickSale] = useState(false);

  const getGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Bom dia";
    if (h < 18) return "Boa tarde";
    return "Boa noite";
  };

  const today = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const handleRefresh = async () => {
    setRefreshing(true);
    await new Promise((r) => setTimeout(r, 1200));
    setRefreshing(false);
  };

  const metaValor = 2000;
  const metaAtual = 1250;
  const metaPercent = Math.round((metaAtual / metaValor) * 100);

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header row */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-slate-500 text-sm capitalize">{today}</p>
          <h1 className="text-slate-900" style={{ fontWeight: 700, fontSize: "1.3rem" }}>
            {getGreeting()}, Maria! 👋
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
          >
            <RefreshCw size={15} className={`text-slate-500 ${refreshing ? "animate-spin" : ""}`} />
          </button>
          <button
            onClick={() => setShowQuickSale(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm transition-all active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg, #1B6B3A, #15803d)", fontWeight: 600 }}
          >
            <Plus size={16} />
            <span className="hidden sm:inline">Nova Venda</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <KpiCard
          title="Faturamento hoje"
          value="R$ 1.250"
          subtitle="vs R$ 1.040 ontem"
          trend="up"
          trendValue="+20%"
          icon={DollarSign}
          color="#16A34A"
          bg="#F0FDF4"
        />
        <KpiCard
          title="Vendas hoje"
          value="12 vendas"
          subtitle="vs 8 ontem"
          trend="up"
          trendValue="+50%"
          icon={ShoppingCart}
          color="#0EA5E9"
          bg="#F0F9FF"
        />
        <KpiCard
          title="Clientes novos"
          value="3 clientes"
          subtitle="2 via loja online"
          trend="up"
          trendValue="+1 vs ontem"
          icon={Users}
          color="#8B5CF6"
          bg="#F5F3FF"
        />
      </div>

      {/* Middle row: Chart + MEL */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-slate-900 text-sm" style={{ fontWeight: 600 }}>Faturamento — últimos 7 dias</h3>
              <p className="text-slate-400 text-xs">Comparativo semanal</p>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700" style={{ fontWeight: 600 }}>
              ↑ 12% esta semana
            </span>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={CHART_DATA} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
              <defs>
                <linearGradient id="colorValor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1B6B3A" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#1B6B3A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="dia" tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: "#94A3B8" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="valor"
                stroke="#1B6B3A"
                strokeWidth={2.5}
                fill="url(#colorValor)"
                dot={{ fill: "#1B6B3A", r: 3, strokeWidth: 0 }}
                activeDot={{ r: 5, fill: "#1B6B3A", strokeWidth: 2, stroke: "#fff" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* MEL Card */}
        <div
          className="rounded-2xl p-5 shadow-sm relative overflow-hidden flex flex-col"
          style={{ background: "linear-gradient(160deg, #0B1D2E 0%, #0F3460 60%, #1B6B3A 100%)" }}
        >
          {/* glow */}
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20 blur-2xl" style={{ background: "#4ADE80" }} />

          <div className="flex items-center gap-2 mb-3 relative z-10">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-400">
              <img src={melPortrait} alt="MEL" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-white text-xs" style={{ fontWeight: 700 }}>MEL</p>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-slate-400 text-[10px]">IA Proativa · Online</p>
            </div>
          </div>

          <div className="flex-1 relative z-10">
            <div className="bg-white/10 rounded-xl p-3 mb-3 border border-white/10">
              <p className="text-white text-sm leading-relaxed">{randomInsight.msg}</p>
            </div>
            <button className="flex items-center gap-1.5 text-emerald-400 text-xs hover:text-emerald-300 transition-colors" style={{ fontWeight: 600 }}>
              {randomInsight.action} <ArrowRight size={12} />
            </button>
          </div>

          {/* Meta */}
          <div className="mt-4 pt-4 border-t border-white/10 relative z-10">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <Target size={13} className="text-emerald-400" />
                <p className="text-slate-300 text-xs" style={{ fontWeight: 500 }}>Meta diária</p>
              </div>
              <span className="text-emerald-400 text-xs" style={{ fontWeight: 700 }}>{metaPercent}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${metaPercent}%`, background: "linear-gradient(90deg, #22C55E, #4ADE80)" }}
              />
            </div>
            <p className="text-slate-400 text-[10px] mt-1">
              {formatCurrency(metaAtual)} / {formatCurrency(metaValor)}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom row: Tasks + Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Tasks */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-slate-900 text-sm" style={{ fontWeight: 600 }}>O que precisa de atenção</h3>
              <p className="text-slate-400 text-xs">5 itens pendentes hoje</p>
            </div>
            <span
              className="w-7 h-7 rounded-full text-xs flex items-center justify-center text-white"
              style={{ background: "#EF4444", fontWeight: 700 }}
            >
              5
            </span>
          </div>
          <div className="space-y-2">
            {TASKS.map((task) => {
              const Icon = task.icon;
              return (
                <button
                  key={task.id}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${task.color}15` }}
                  >
                    <Icon size={17} style={{ color: task.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-slate-800 text-xs leading-tight" style={{ fontWeight: 600 }}>
                        {task.label}
                      </p>
                      {task.urgent && (
                        <span className="shrink-0 px-1.5 py-0.5 rounded-full text-[9px] text-red-600 bg-red-50" style={{ fontWeight: 600 }}>
                          Urgente
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-[11px] mt-0.5 truncate">{task.detail}</p>
                  </div>
                  <ChevronRight size={14} className="text-slate-300 group-hover:text-slate-500 shrink-0" />
                </button>
              );
            })}
          </div>
          <button className="w-full mt-3 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs hover:bg-slate-50 transition-colors" style={{ fontWeight: 500 }}>
            Ver todos os alertas
          </button>
        </div>

        {/* Modules */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-slate-900 text-sm" style={{ fontWeight: 600 }}>Acesso Rápido</h3>
              <p className="text-slate-400 text-xs">Módulos do sistema</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {MODULES.map((mod) => {
              const Icon = mod.icon;
              return (
                <button
                  key={mod.id}
                  className="relative flex flex-col items-center gap-2 p-3 rounded-xl transition-all hover:shadow-sm active:scale-[0.97] border border-transparent hover:border-slate-100"
                  style={{ background: mod.bg }}
                >
                  {mod.badge > 0 && (
                    <span
                      className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full text-[9px] flex items-center justify-center text-white"
                      style={{ background: "#EF4444", fontWeight: 700 }}
                    >
                      {mod.badge}
                    </span>
                  )}
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "white" }}>
                    <Icon size={20} style={{ color: mod.color }} />
                  </div>
                  <div className="text-center">
                    <p className="text-slate-800 text-xs" style={{ fontWeight: 600 }}>{mod.label}</p>
                    <p className="text-slate-400 text-[10px]">{mod.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick actions */}
          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
            <button className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center">
                <Zap size={14} className="text-emerald-600" />
              </div>
              <span className="text-slate-700 text-xs" style={{ fontWeight: 500 }}>Venda rápida</span>
            </button>
            <button className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">
                <Users size={14} className="text-blue-600" />
              </div>
              <span className="text-slate-700 text-xs" style={{ fontWeight: 500 }}>Novo cliente</span>
            </button>
          </div>
        </div>
      </div>

      {/* Ticket médio + top produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
            <DollarSign size={18} className="text-amber-500" />
          </div>
          <div>
            <p className="text-slate-400 text-xs">Ticket médio hoje</p>
            <p className="text-slate-900 text-base" style={{ fontWeight: 700 }}>R$ 104,17</p>
            <p className="text-emerald-600 text-[11px]" style={{ fontWeight: 500 }}>↑ vs R$ 97,50 ontem</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
            <Package size={18} className="text-sky-500" />
          </div>
          <div>
            <p className="text-slate-400 text-xs">Produto mais vendido</p>
            <p className="text-slate-900 text-sm" style={{ fontWeight: 700 }}>Camiseta Básica</p>
            <p className="text-slate-500 text-[11px]">8 unidades hoje</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
            <Clock size={18} className="text-purple-500" />
          </div>
          <div>
            <p className="text-slate-400 text-xs">Próximo agendamento</p>
            <p className="text-slate-900 text-sm" style={{ fontWeight: 700 }}>14h00 - Maria</p>
            <p className="text-slate-500 text-[11px]">Corte + Escova</p>
          </div>
        </div>
      </div>

      {/* Onboarding card (shown when new user) */}
      <div
        className="rounded-2xl p-5 border"
        style={{ background: "linear-gradient(135deg, #F0FDF4, #DCFCE7)", borderColor: "#BBF7D0" }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle size={16} className="text-emerald-600" />
              <h3 className="text-emerald-900 text-sm" style={{ fontWeight: 700 }}>Configure sua loja</h3>
            </div>
            <p className="text-emerald-700 text-xs">2 de 5 passos concluídos</p>
          </div>
          <span className="text-emerald-700 text-xs px-2 py-1 rounded-full bg-emerald-100" style={{ fontWeight: 600 }}>
            40%
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-emerald-200 mb-4 overflow-hidden">
          <div className="h-full rounded-full bg-emerald-500" style={{ width: "40%" }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
          {[
            { label: "Primeiro produto", done: true },
            { label: "Loja virtual", done: true },
            { label: "WhatsApp Business", done: false },
            { label: "Pagamento online", done: false },
            { label: "Divulgar loja", done: false },
          ].map((step) => (
            <div key={step.label} className="flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{ background: step.done ? "#16A34A" : "white", border: step.done ? "none" : "2px solid #86EFAC" }}
              >
                {step.done && <CheckCircle size={12} className="text-white" />}
              </div>
              <span className="text-xs" style={{ color: step.done ? "#15803d" : "#4B5563", fontWeight: step.done ? 600 : 400 }}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-emerald-200">
          <button className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs hover:bg-emerald-700 transition-colors" style={{ fontWeight: 600 }}>
            Continuar configuração
          </button>
          <button className="flex items-center gap-1.5 text-emerald-700 text-xs hover:underline" style={{ fontWeight: 500 }}>
            <AlertTriangle size={12} />
            MEL pode configurar por mim!
          </button>
        </div>
      </div>
    </div>
  );
}