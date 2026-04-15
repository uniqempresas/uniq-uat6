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
  LayoutDashboard,
  Kanban,
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
import { CLIENTES, NEGOCIACOES, formatCurrency } from "./crmMockData";

// Usar placeholder até ter a imagem real
const melPortrait = "https://api.dicebear.com/7.x/avataaars/svg?seed=MEL";

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

export function CRMDashboardPage() {
  const navigate = useNavigate();

  const totalClientes = CLIENTES.length;
  const totalNegociacoes = NEGOCIACOES.length;
  const valorTotal = NEGOCIACOES.reduce((acc, n) => acc + n.valor, 0);
  const taxaConversao = Math.round((NEGOCIACOES.filter(n => n.status === "ganho").length / totalNegociacoes) * 100);

  const clientesRecentes = CLIENTES.slice(0, 5);
  const negociacoesAtivas = NEGOCIACOES.filter(n => n.status === "aberta").slice(0, 5);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">CRM Dashboard</h1>
          <p className="text-slate-500 mt-1">Visão geral do relacionamento com clientes</p>
        </div>
      </div>

      {/* Menu de Contexto */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => navigate("/crm/dashboard")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all"
          >
            <LayoutDashboard size={18} className="text-emerald-600" />
            <span className="text-sm font-medium text-slate-700">Dashboard</span>
          </button>

          <button
            onClick={() => navigate("/crm/clientes")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all"
          >
            <Users size={18} className="text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Clientes</span>
          </button>

          <button
            onClick={() => navigate("/crm/pipeline")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all"
          >
            <Kanban size={18} className="text-violet-600" />
            <span className="text-sm font-medium text-slate-700">Pipeline</span>
          </button>

          <button
            onClick={() => navigate("/crm/clientes")}
            className="ml-auto flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Users size={18} />
            <span className="text-sm font-medium">Novo Cliente</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="text-blue-600" size={24} />
            </div>
            <span className="text-sm text-emerald-600 font-medium flex items-center gap-1">
              <TrendingUp size={14} /> +12%
            </span>
          </div>
          <p className="text-3xl font-bold text-slate-900">{totalClientes}</p>
          <p className="text-slate-500 text-sm">Total de Clientes</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <Target className="text-amber-600" size={24} />
            </div>
            <span className="text-sm text-emerald-600 font-medium flex items-center gap-1">
              <TrendingUp size={14} /> +5%
            </span>
          </div>
          <p className="text-3xl font-bold text-slate-900">{totalNegociacoes}</p>
          <p className="text-slate-500 text-sm">Negociações Ativas</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <DollarSign className="text-emerald-600" size={24} />
            </div>
            <span className="text-sm text-emerald-600 font-medium flex items-center gap-1">
              <TrendingUp size={14} /> +23%
            </span>
          </div>
          <p className="text-3xl font-bold text-slate-900">{formatCurrency(valorTotal)}</p>
          <p className="text-slate-500 text-sm">Valor em Negociações</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="text-purple-600" size={24} />
            </div>
            <span className="text-sm text-slate-500 font-medium">
              {taxaConversao}%
            </span>
          </div>
          <p className="text-3xl font-bold text-slate-900">{NEGOCIACOES.filter(n => n.status === "ganho").length}</p>
          <p className="text-slate-500 text-sm">Negociações Ganhas</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Funil de Vendas */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-6">Funil de Vendas</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={FUNIL_DATA} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" />
                <YAxis dataKey="etapa" type="category" width={100} />
                <Tooltip 
                  formatter={(value: number) => [value, "Quantidade"]}
                  contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                />
                <Bar dataKey="qtd" radius={[0, 4, 4, 0]}>
                  {FUNIL_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.cor} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* MEL Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-5 rounded-xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400">
                <img src={melPortrait} alt="MEL" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-semibold text-sm">MEL · Análise</p>
                <p className="text-xs text-slate-400">Assistente IA</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              📊 Você tem {totalNegociacoes} negociações em aberto com potencial de {formatCurrency(valorTotal)}. 
              Foque nas negociações em etapa de fechamento!
            </p>
          </div>

          {/* Conversão */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">Taxa de Conversão</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CONVERSAO_DATA}>
                  <XAxis dataKey="mes" />
                  <Tooltip 
                    contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  />
                  <Bar dataKey="ganhos" fill="#22C55E" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="perdidos" fill="#EF4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Clientes Recentes */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Clientes Recentes</h3>
            <button 
              onClick={() => navigate("/crm/clientes")}
              className="text-emerald-600 text-sm font-medium flex items-center gap-1 hover:underline"
            >
              Ver todos <ArrowRight size={16} />
            </button>
          </div>
          <div className="space-y-3">
            {clientesRecentes.map((cliente) => (
              <div 
                key={cliente.id} 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
                onClick={() => navigate(`/crm/clientes/${cliente.id}`)}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <span className="text-slate-600 font-semibold">{cliente.nome.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900 text-sm">{cliente.nome}</p>
                  <p className="text-slate-500 text-xs">{cliente.email}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  cliente.tipo === "vip" 
                    ? "bg-amber-100 text-amber-700" 
                    : "bg-slate-100 text-slate-600"
                }`}>
                  {cliente.tipo === "vip" && <Star size={12} className="inline mr-1" />}
                  {cliente.tipo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Negociações Ativas */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Negociações Ativas</h3>
            <button className="text-emerald-600 text-sm font-medium flex items-center gap-1 hover:underline">
              Ver pipeline <ArrowRight size={16} />
            </button>
          </div>
          <div className="space-y-3">
            {negociacoesAtivas.map((neg) => (
              <div key={neg.id} className="p-4 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-slate-900 text-sm">{neg.titulo}</p>
                  <span className="text-emerald-600 font-semibold text-sm">{formatCurrency(neg.valor)}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Users size={12} /> {neg.cliente}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {neg.etapa}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
