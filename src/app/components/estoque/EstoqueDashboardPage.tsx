import { useNavigate } from "react-router";
import {
  Package,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  DollarSign,
  ArrowRight,
  ShoppingBag,
  Zap,
  BarChart2,
  RefreshCw,
} from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import {
  PRODUTOS,
  MOVIMENTACOES,
  formatCurrency,
  getEstoqueStatusConfig,
  CATEGORIA_COLORS,
} from "./estoqueMockData";

// Usar placeholder até ter a imagem real
const melPortrait = "https://api.dicebear.com/7.x/avataaars/svg?seed=MEL";

const MOVIMENTACAO_DATA = [
  { dia: "Seg", entrada: 45, saida: 32 },
  { dia: "Ter", entrada: 52, saida: 38 },
  { dia: "Qua", entrada: 38, saida: 45 },
  { dia: "Qui", entrada: 65, saida: 42 },
  { dia: "Sex", entrada: 48, saida: 55 },
  { dia: "Sáb", entrada: 72, saida: 68 },
  { dia: "Dom", entrada: 35, saida: 28 },
];

const VALOR_ESTOQUE_DATA = [
  { mes: "Jan", valor: 45000 },
  { mes: "Fev", valor: 52000 },
  { mes: "Mar", valor: 48000 },
  { mes: "Abr", valor: 61000 },
  { mes: "Mai", valor: 58000 },
  { mes: "Jun", valor: 67000 },
];

export function EstoqueDashboardPage() {
  const navigate = useNavigate();

  const totalProdutos = PRODUTOS.length;
  const valorTotalEstoque = PRODUTOS.reduce((acc, p) => acc + (p.preco * p.estoque), 0);
  const produtosBaixoEstoque = PRODUTOS.filter(p => p.estoque <= p.estoqueMinimo).length;
  const produtosSemEstoque = PRODUTOS.filter(p => p.estoque === 0).length;

  const movimentacoesRecentes = MOVIMENTACOES.slice(0, 5);
  const produtosCriticos = PRODUTOS.filter(p => p.estoque <= p.estoqueMinimo).slice(0, 5);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Estoque Dashboard</h1>
          <p className="text-slate-500 mt-1">Gestão e controle de inventário</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/estoque/movimentacoes")}
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <RefreshCw size={18} />
            Movimentações
          </button>
          <button
            onClick={() => navigate("/estoque/produtos")}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Package size={18} />
            Ver Produtos
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Package className="text-blue-600" size={24} />
            </div>
            <span className="text-sm text-emerald-600 font-medium flex items-center gap-1">
              <TrendingUp size={14} /> +5%
            </span>
          </div>
          <p className="text-3xl font-bold text-slate-900">{totalProdutos}</p>
          <p className="text-slate-500 text-sm">Total de Produtos</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <DollarSign className="text-emerald-600" size={24} />
            </div>
            <span className="text-sm text-emerald-600 font-medium flex items-center gap-1">
              <TrendingUp size={14} /> +12%
            </span>
          </div>
          <p className="text-3xl font-bold text-slate-900">{formatCurrency(valorTotalEstoque)}</p>
          <p className="text-slate-500 text-sm">Valor em Estoque</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <AlertTriangle className="text-amber-600" size={24} />
            </div>
            <span className="text-sm text-red-600 font-medium flex items-center gap-1">
              <TrendingDown size={14} /> Atenção
            </span>
          </div>
          <p className="text-3xl font-bold text-slate-900">{produtosBaixoEstoque}</p>
          <p className="text-slate-500 text-sm">Produtos com Estoque Baixo</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <ShoppingBag className="text-red-600" size={24} />
            </div>
            <span className="text-sm text-red-600 font-medium">Crítico</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">{produtosSemEstoque}</p>
          <p className="text-slate-500 text-sm">Produtos Sem Estoque</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gráfico de Movimentação */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-6">Movimentação de Estoque</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOVIMENTACAO_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                />
                <Bar dataKey="entrada" fill="#22C55E" radius={[4, 4, 0, 0]} />
                <Bar dataKey="saida" fill="#EF4444" radius={[4, 4, 0, 0]} />
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
              📦 Você tem {produtosBaixoEstoque} produtos com estoque baixo e {produtosSemEstoque} sem estoque. 
              Considere fazer um pedido de reposição!
            </p>
          </div>

          {/* Valor em Estoque */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">Evolução do Valor em Estoque</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={VALOR_ESTOQUE_DATA}>
                  <defs>
                    <linearGradient id="colorValor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="mes" />
                  <Tooltip 
                    formatter={(value: number) => formatCurrency(value)}
                    contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  />
                  <Area type="monotone" dataKey="valor" stroke="#10B981" fillOpacity={1} fill="url(#colorValor)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Produtos Críticos e Movimentações */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Produtos Críticos */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Produtos com Estoque Crítico</h3>
            <button 
              onClick={() => navigate("/estoque/produtos")}
              className="text-emerald-600 text-sm font-medium flex items-center gap-1 hover:underline"
            >
              Ver todos <ArrowRight size={16} />
            </button>
          </div>
          <div className="space-y-3">
            {produtosCriticos.length === 0 ? (
              <p className="text-slate-400 text-center py-6">Nenhum produto com estoque crítico</p>
            ) : (
              produtosCriticos.map((produto) => (
                <div 
                  key={produto.id} 
                  className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border border-red-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Package size={18} className="text-red-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 text-sm">{produto.nome}</p>
                    <p className="text-slate-500 text-xs">Código: {produto.codigo}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-red-600">{produto.estoque} un</p>
                    <p className="text-xs text-red-400">Min: {produto.estoqueMinimo}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Movimentações Recentes */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Movimentações Recentes</h3>
            <button 
              onClick={() => navigate("/estoque/movimentacoes")}
              className="text-emerald-600 text-sm font-medium flex items-center gap-1 hover:underline"
            >
              Ver todas <ArrowRight size={16} />
            </button>
          </div>
          <div className="space-y-3">
            {movimentacoesRecentes.map((mov) => (
              <div key={mov.id} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  mov.tipo === "entrada" ? "bg-emerald-100" : "bg-red-100"
                }`}>
                  {mov.tipo === "entrada" ? (
                    <TrendingUp size={18} className="text-emerald-600" />
                  ) : (
                    <TrendingDown size={18} className="text-red-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900 text-sm">{mov.produto}</p>
                  <p className="text-slate-500 text-xs">{mov.tipo === "entrada" ? "Entrada" : "Saída"} · {mov.data}</p>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${mov.tipo === "entrada" ? "text-emerald-600" : "text-red-600"}`}>
                    {mov.tipo === "entrada" ? "+" : "-"}{mov.quantidade}
                  </p>
                  <p className="text-xs text-slate-400">{mov.motivo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
