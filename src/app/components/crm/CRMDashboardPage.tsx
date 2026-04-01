import { useNavigate } from "react-router";
import {
  Users,
  TrendingUp,
  DollarSign,
  Target,
  ArrowRight,
  MessageCircle,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Star,
  Gift,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import melPortrait from "figma:asset/78ea19d3f884e1598dfb94e5cc05dab06dd59ad2.png";
import { CLIENTES, NEGOCIACOES, formatCurrency } from "./crmMockData";

const FUNIL_DATA = [
  { etapa: "Prospectando", qtd: 2, valor: 5000, cor: "#64748B" },
  { etapa: "1º Contato", qtd: 1, valor: 1800, cor: "#0EA5E9" },
  { etapa: "Proposta", qtd: 2, valor: 6700, cor: "#8B5CF6" },
  { etapa: "Negociação", qtd: 2, valor: 123400, cor: "#F59E0B" },
  { etapa: "Fechamento", qtd: 1, valor: 3200, cor: "#F97316" },
];

const CONVERSAO_DATA = [
  { mes: "Out", ganhos: 4, perdidos: 1 },
  { mes: "Nov", ganhos: 6, perdidos: 2 },
  { mes: "Dez", ganhos: 5, perdidos: 3 },
  { mes: "Jan", ganhos: 8, perdidos: 1 },
  { mes: "Fev", ganhos: 7, perdidos: 2 },
  { mes: "Mar", ganhos: 9, perdidos: 2 },
];

const PIE_DATA = [
  { name: "PF", value: CLIENTES.filter((c) => c.tipo === "PF").length, color: "#8B5CF6" },
  { name: "PJ", value: CLIENTES.filter((c) => c.tipo === "PJ").length, color: "#0EA5E9" },
];

export function CRMDashboardPage() {
  const navigate = useNavigate();

  const clientesAtivos = CLIENTES.filter((c) => c.status === "ativo").length;
  const novosEsteMes = 3;
  const negAtivas = NEGOCIACOES.filter((n) => n.etapa !== "ganho" && n.etapa !== "perdido");
  const valorPipeline = negAtivas.reduce((acc, n) => acc + n.valor, 0);
  const taxaConversao = 78;
  const aniversariantes = CLIENTES.filter((c) => c.aniversario);
  const followupsPendentes = 3;

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Page header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-slate-900" style={{ fontWeight: 700, fontSize: "1.2rem" }}>
            Dashboard CRM
          </h1>
          <p className="text-slate-500 text-sm">Visão geral do seu funil de vendas</p>
        </div>
        <button
          onClick={() => navigate("/crm/clientes")}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm"
          style={{ background: "linear-gradient(135deg, #1B6B3A, #15803d)", fontWeight: 600 }}
        >
          <Users size={15} />
          Ver Clientes
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Clientes ativos", value: clientesAtivos, icon: Users, color: "#8B5CF6", bg: "#F5F3FF", trend: `+${novosEsteMes} este mês`, trendOk: true },
          { label: "Pipeline em aberto", value: formatCurrency(valorPipeline), icon: DollarSign, color: "#F59E0B", bg: "#FFFBEB", trend: `${negAtivas.length} negociações`, trendOk: true },
          { label: "Taxa de conversão", value: `${taxaConversao}%`, icon: Target, color: "#10B981", bg: "#F0FDF4", trend: "↑ 5% vs mês anterior", trendOk: true },
          { label: "Follow-ups pendentes", value: followupsPendentes, icon: Clock, color: "#EF4444", bg: "#FEF2F2", trend: "Atenção necessária!", trendOk: false },
        ].map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.label} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: kpi.bg }}>
                  <Icon size={18} style={{ color: kpi.color }} />
                </div>
              </div>
              <p className="text-slate-500 text-xs mb-1">{kpi.label}</p>
              <p className="text-slate-900" style={{ fontSize: "1.3rem", fontWeight: 700, lineHeight: 1 }}>
                {kpi.value}
              </p>
              <p className="text-xs mt-1.5" style={{ color: kpi.trendOk ? "#16A34A" : "#DC2626", fontWeight: 500 }}>
                {kpi.trend}
              </p>
            </div>
          );
        })}
      </div>

      {/* Middle: Funil + Clientes por tipo + MEL */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Funil */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-slate-900 text-sm" style={{ fontWeight: 600 }}>Funil de Vendas</h3>
              <p className="text-slate-400 text-xs">Negociações em aberto por etapa</p>
            </div>
            <button
              onClick={() => navigate("/crm/pipeline")}
              className="flex items-center gap-1 text-xs hover:underline"
              style={{ color: "#1B6B3A", fontWeight: 600 }}
            >
              Ver Pipeline <ArrowRight size={12} />
            </button>
          </div>
          <div className="space-y-2.5">
            {FUNIL_DATA.map((item, i) => {
              const maxQtd = Math.max(...FUNIL_DATA.map((f) => f.qtd));
              const width = Math.max(15, (item.qtd / maxQtd) * 100);
              return (
                <div key={item.etapa} className="flex items-center gap-3">
                  <div className="w-28 text-xs text-slate-500 shrink-0 text-right">{item.etapa}</div>
                  <div className="flex-1 h-8 bg-slate-50 rounded-lg overflow-hidden relative">
                    <div
                      className="h-full rounded-lg flex items-center px-3 transition-all"
                      style={{ width: `${width}%`, background: `${item.cor}20`, borderLeft: `3px solid ${item.cor}` }}
                    >
                      <span className="text-xs" style={{ color: item.cor, fontWeight: 700 }}>
                        {item.qtd}
                      </span>
                    </div>
                  </div>
                  <div className="w-24 text-xs text-slate-600 text-right shrink-0" style={{ fontWeight: 500 }}>
                    {formatCurrency(item.valor)}
                  </div>
                </div>
              );
            })}
          </div>
          {/* Conversão chart */}
          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-slate-700 text-xs mb-3" style={{ fontWeight: 600 }}>Ganhos vs Perdidos (6 meses)</p>
            <ResponsiveContainer width="100%" height={100}>
              <BarChart data={CONVERSAO_DATA} margin={{ top: 0, right: 0, bottom: 0, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="mes" tick={{ fontSize: 10, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: "12px", border: "1px solid #F1F5F9", fontSize: "12px" }}
                  cursor={{ fill: "#F8FAFC" }}
                />
                <Bar dataKey="ganhos" fill="#22C55E" radius={[4, 4, 0, 0]} name="Ganhos" />
                <Bar dataKey="perdidos" fill="#FCA5A5" radius={[4, 4, 0, 0]} name="Perdidos" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right column: PF/PJ + MEL */}
        <div className="flex flex-col gap-4">
          {/* PF vs PJ */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <p className="text-slate-900 text-sm mb-3" style={{ fontWeight: 600 }}>Perfil da Base</p>
            <div className="flex items-center gap-4">
              <ResponsiveContainer width={80} height={80}>
                <PieChart>
                  <Pie data={PIE_DATA} cx="50%" cy="50%" innerRadius={25} outerRadius={38} dataKey="value" strokeWidth={0}>
                    {PIE_DATA.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1">
                {PIE_DATA.map((item) => (
                  <div key={item.name} className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                      <span className="text-xs text-slate-600">Pessoa {item.name === "PF" ? "Física" : "Jurídica"}</span>
                    </div>
                    <span className="text-xs text-slate-900" style={{ fontWeight: 700 }}>{item.value}</span>
                  </div>
                ))}
                <div className="mt-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Total</span>
                    <span className="text-xs text-slate-900" style={{ fontWeight: 700 }}>{CLIENTES.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MEL CRM Card */}
          <div
            className="rounded-2xl p-4 flex-1 relative overflow-hidden"
            style={{ background: "linear-gradient(160deg, #0B1D2E 0%, #0F3460 70%, #1B6B3A 100%)" }}
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-2xl" style={{ background: "#4ADE80" }} />
            <div className="flex items-center gap-2 mb-3 relative z-10">
              <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-emerald-400">
                <img src={melPortrait} alt="MEL" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white text-xs" style={{ fontWeight: 700 }}>MEL · CRM</p>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-400 text-[10px]">Analisando...</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 relative z-10 border border-white/10">
              <p className="text-white text-xs leading-relaxed">
                📊 Tech Solutions está há 5 dias em negociação! Hora de fazer um follow-up para acelerar o fechamento de R$ 120k.
              </p>
            </div>
            <button
              onClick={() => navigate("/crm/clientes/2")}
              className="mt-2 flex items-center gap-1 text-emerald-400 text-xs relative z-10 hover:text-emerald-300 transition-colors"
              style={{ fontWeight: 600 }}
            >
              Ver cliente <ArrowRight size={11} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom: Aniversariantes + Follow-ups + Recentes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Aniversariantes */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <Gift size={16} className="text-purple-500" />
            <h3 className="text-slate-900 text-sm" style={{ fontWeight: 600 }}>Aniversariantes</h3>
          </div>
          {aniversariantes.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-4">Nenhum aniversariante hoje 🎂</p>
          ) : (
            <div className="space-y-3">
              {aniversariantes.map((c) => (
                <div key={c.id} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs shrink-0"
                    style={{ background: c.avatarColor, fontWeight: 700 }}
                  >
                    {c.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-800 text-xs truncate" style={{ fontWeight: 600 }}>{c.nome}</p>
                    <p className="text-slate-400 text-[11px]">🎂 {c.aniversario}</p>
                  </div>
                  <button
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] text-white shrink-0"
                    style={{ background: "#25D366", fontWeight: 600 }}
                  >
                    <MessageCircle size={11} />
                    Parabenizar
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 pt-3 border-t border-slate-100">
            <p className="text-slate-400 text-xs">🎉 Próximos: Confeitaria Doce Mel (15/04)</p>
          </div>
        </div>

        {/* Follow-ups pendentes */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" />
              <h3 className="text-slate-900 text-sm" style={{ fontWeight: 600 }}>Follow-ups Pendentes</h3>
            </div>
            <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 text-[10px] flex items-center justify-center" style={{ fontWeight: 700 }}>
              3
            </span>
          </div>
          <div className="space-y-3">
            {[
              { cliente: "Maria Fernanda Souza", data: "Hoje, 14h", tipo: "Ligação", urgente: true },
              { cliente: "Pedro Alves", data: "Amanhã, 10h", tipo: "WhatsApp", urgente: false },
              { cliente: "João Roberto Santos", data: "02/04, 09h", tipo: "Negociação", urgente: false },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full shrink-0 ${f.urgente ? "bg-red-500" : "bg-amber-400"}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-slate-800 text-xs truncate" style={{ fontWeight: 600 }}>{f.cliente}</p>
                  <p className="text-slate-400 text-[11px]">{f.tipo} · {f.data}</p>
                </div>
                {f.urgente && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-red-50 text-red-600 shrink-0" style={{ fontWeight: 600 }}>
                    Hoje!
                  </span>
                )}
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 rounded-xl bg-slate-50 text-slate-600 text-xs hover:bg-slate-100 transition-colors" style={{ fontWeight: 500 }}>
            Ver todos os follow-ups
          </button>
        </div>

        {/* Clientes recentes */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-emerald-500" />
              <h3 className="text-slate-900 text-sm" style={{ fontWeight: 600 }}>Melhores Clientes</h3>
            </div>
          </div>
          <div className="space-y-3">
            {CLIENTES.filter((c) => c.totalCompras > 0)
              .sort((a, b) => b.totalCompras - a.totalCompras)
              .slice(0, 4)
              .map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => navigate(`/crm/clientes/${c.id}`)}
                  className="w-full flex items-center gap-3 hover:bg-slate-50 rounded-xl p-1.5 transition-colors -mx-1.5 text-left"
                >
                  <div className="flex items-center justify-center w-6 text-xs text-slate-400 shrink-0" style={{ fontWeight: 700 }}>
                    {i + 1}
                  </div>
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs shrink-0"
                    style={{ background: c.avatarColor, fontWeight: 700 }}
                  >
                    {c.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-800 text-xs truncate" style={{ fontWeight: 600 }}>{c.nome}</p>
                    <p className="text-slate-400 text-[11px]">{c.tipo}</p>
                  </div>
                  <p className="text-emerald-700 text-xs shrink-0" style={{ fontWeight: 700 }}>{formatCurrency(c.totalCompras)}</p>
                </button>
              ))}
          </div>
          <button
            onClick={() => navigate("/crm/clientes")}
            className="w-full mt-3 py-2 rounded-xl bg-slate-50 text-slate-600 text-xs hover:bg-slate-100 transition-colors"
            style={{ fontWeight: 500 }}
          >
            Ver todos os clientes
          </button>
        </div>
      </div>
    </div>
  );
}