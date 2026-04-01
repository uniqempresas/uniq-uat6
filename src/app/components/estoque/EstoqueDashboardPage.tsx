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
import melPortrait from "figma:asset/78ea19d3f884e1598dfb94e5cc05dab06dd59ad2.png";
import {
  PRODUTOS,
  MOVIMENTACOES,
  formatCurrency,
  getEstoqueStatusConfig,
  CATEGORIA_COLORS,
} from "./estoqueMockData";

const MOV_CHART = [
  { dia: "25/03", entradas: 23, saidas: 8 },
  { dia: "26/03", entradas: 0, saidas: 11 },
  { dia: "27/03", entradas: 15, saidas: 5 },
  { dia: "28/03", entradas: 0, saidas: 7 },
  { dia: "29/03", entradas: 0, saidas: 5 },
  { dia: "30/03", entradas: 0, saidas: 3 },
  { dia: "31/03", entradas: 70, saidas: 0 },
];

const TOP_PRODUTOS = PRODUTOS.filter((p) => p.totalVendido > 0)
  .sort((a, b) => b.totalVendido - a.totalVendido)
  .slice(0, 5);

export function EstoqueDashboardPage() {
  const navigate = useNavigate();

  const totalProdutos = PRODUTOS.length;
  const produtosAtivos = PRODUTOS.filter((p) => p.status === "ativo").length;
  const produtosBaixo = PRODUTOS.filter((p) => p.estoqueStatus === "baixo").length;
  const produtosZerado = PRODUTOS.filter((p) => p.estoqueStatus === "zerado").length;
  const valorTotalEstoque = PRODUTOS.reduce((acc, p) => acc + p.estoque * p.precoCusto, 0);
  const categorias = [...new Set(PRODUTOS.map((p) => p.categoria))];

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-slate-900" style={{ fontWeight: 700, fontSize: "1.2rem" }}>
            Estoque
          </h1>
          <p className="text-slate-500 text-sm">Visão geral do seu inventário</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => navigate("/estoque/movimentacoes")}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-600 text-xs hover:bg-slate-50 transition-colors"
            style={{ fontWeight: 500 }}
          >
            <RefreshCw size={13} />
            Movimentações
          </button>
          <button
            onClick={() => navigate("/estoque/produtos")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm"
            style={{ background: "linear-gradient(135deg, #1B6B3A, #15803d)", fontWeight: 600 }}
          >
            <Package size={15} />
            Ver Produtos
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          {
            label: "Total de produtos",
            value: totalProdutos,
            sub: `${produtosAtivos} ativos`,
            icon: Package,
            color: "#8B5CF6",
            bg: "#F5F3FF",
            trendOk: true,
          },
          {
            label: "Valor em estoque",
            value: formatCurrency(valorTotalEstoque),
            sub: "Custo total inventário",
            icon: DollarSign,
            color: "#0EA5E9",
            bg: "#F0F9FF",
            trendOk: true,
          },
          {
            label: "Estoque baixo",
            value: produtosBaixo,
            sub: "Requer atenção",
            icon: AlertTriangle,
            color: "#F59E0B",
            bg: "#FFFBEB",
            trendOk: false,
          },
          {
            label: "Estoque zerado",
            value: produtosZerado,
            sub: "Indisponível p/ venda",
            icon: TrendingDown,
            color: "#EF4444",
            bg: "#FEF2F2",
            trendOk: false,
          },
        ].map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div
              key={kpi.label}
              className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: kpi.bg }}
                >
                  <Icon size={18} style={{ color: kpi.color }} />
                </div>
                {!kpi.trendOk && kpi.value > 0 && (
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: kpi.color }}
                  />
                )}
              </div>
              <p className="text-slate-500 text-xs mb-1">{kpi.label}</p>
              <p
                className="text-slate-900"
                style={{ fontSize: "1.3rem", fontWeight: 700, lineHeight: 1 }}
              >
                {kpi.value}
              </p>
              <p
                className="text-xs mt-1.5"
                style={{ color: kpi.trendOk ? "#16A34A" : kpi.value > 0 ? "#DC2626" : "#16A34A", fontWeight: 500 }}
              >
                {kpi.sub}
              </p>
            </div>
          );
        })}
      </div>

      {/* Middle row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Movimentações chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-slate-900 text-sm" style={{ fontWeight: 600 }}>
                Movimentações (7 dias)
              </h3>
              <p className="text-slate-400 text-xs">Entradas e saídas por dia</p>
            </div>
            <button
              onClick={() => navigate("/estoque/movimentacoes")}
              className="flex items-center gap-1 text-xs hover:underline"
              style={{ color: "#1B6B3A", fontWeight: 600 }}
            >
              Ver tudo <ArrowRight size={12} />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={MOV_CHART} margin={{ top: 0, right: 0, bottom: 0, left: -25 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis
                dataKey="dia"
                tick={{ fontSize: 10, fill: "#94A3B8" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "#94A3B8" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid #F1F5F9",
                  fontSize: "12px",
                }}
                cursor={{ fill: "#F8FAFC" }}
              />
              <Bar
                dataKey="entradas"
                fill="#22C55E"
                radius={[4, 4, 0, 0]}
                name="Entradas"
              />
              <Bar
                dataKey="saidas"
                fill="#FB923C"
                radius={[4, 4, 0, 0]}
                name="Saídas"
              />
            </BarChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="flex items-center gap-5 mt-3 pt-3 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-green-500" />
              <span className="text-xs text-slate-600">Entradas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-orange-400" />
              <span className="text-xs text-slate-600">Saídas</span>
            </div>
            <div className="ml-auto">
              <span className="text-xs text-slate-400">
                {MOVIMENTACOES.filter(
                  (m) => !m.cancelada
                ).length}{" "}
                movimentações no mês
              </span>
            </div>
          </div>
        </div>

        {/* MEL Estoque */}
        <div className="flex flex-col gap-4">
          <div
            className="rounded-2xl p-4 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, #0B1D2E 0%, #0F3460 70%, #1B6B3A 100%)",
            }}
          >
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-2xl"
              style={{ background: "#FBBF24" }}
            />
            <div className="flex items-center gap-2 mb-3 relative z-10">
              <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-amber-400">
                <img
                  src={melPortrait}
                  alt="MEL"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white text-xs" style={{ fontWeight: 700 }}>
                  MEL · Estoque
                </p>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-slate-400 text-[10px]">
                    Alerta detectado
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 relative z-10 border border-white/10 space-y-2">
              <p className="text-white text-xs leading-relaxed">
                ⚠️ <strong>Tênis Running Pro X</strong> com apenas 8 unidades — abaixo do mínimo de 10! Hora de fazer pedido ao fornecedor FastStep.
              </p>
              <p className="text-white/60 text-[10px] border-t border-white/10 pt-2">
                📦 Fone Bluetooth zerado há 7 dias. Perda estimada: R$ 1.300/semana.
              </p>
            </div>
            <button
              onClick={() => navigate("/estoque/produtos")}
              className="mt-2.5 flex items-center gap-1 text-amber-400 text-xs relative z-10 hover:text-amber-300 transition-colors"
              style={{ fontWeight: 600 }}
            >
              Ver produtos críticos <ArrowRight size={11} />
            </button>
          </div>

          {/* Categorias */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <p className="text-slate-900 text-sm mb-3" style={{ fontWeight: 600 }}>
              Por Categoria
            </p>
            <div className="space-y-2">
              {categorias.map((cat) => {
                const qtd = PRODUTOS.filter((p) => p.categoria === cat).length;
                const colors = CATEGORIA_COLORS[cat] || CATEGORIA_COLORS["Outros"];
                return (
                  <div key={cat} className="flex items-center gap-2.5">
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full shrink-0"
                      style={{
                        background: colors.bg,
                        color: colors.text,
                        fontWeight: 600,
                      }}
                    >
                      {cat}
                    </span>
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(qtd / totalProdutos) * 100}%`,
                          background: colors.text,
                        }}
                      />
                    </div>
                    <span
                      className="text-slate-700 text-xs shrink-0"
                      style={{ fontWeight: 700 }}
                    >
                      {qtd}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Alertas de estoque */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" />
              <h3 className="text-slate-900 text-sm" style={{ fontWeight: 600 }}>
                Alertas de Estoque
              </h3>
            </div>
            <span
              className="w-5 h-5 rounded-full bg-red-100 text-red-600 text-[10px] flex items-center justify-center"
              style={{ fontWeight: 700 }}
            >
              {produtosBaixo + produtosZerado}
            </span>
          </div>
          <div className="space-y-2.5">
            {PRODUTOS.filter((p) => p.estoqueStatus !== "ok")
              .slice(0, 5)
              .map((p) => {
                const cfg = getEstoqueStatusConfig(p.estoqueStatus);
                const catColors = CATEGORIA_COLORS[p.categoria] || CATEGORIA_COLORS["Outros"];
                return (
                  <button
                    key={p.id}
                    onClick={() => navigate(`/estoque/produtos/${p.id}`)}
                    className="w-full flex items-center gap-3 hover:bg-slate-50 rounded-xl p-2 -mx-2 transition-colors text-left"
                  >
                    {/* Category icon */}
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: catColors.bg }}
                    >
                      <ShoppingBag size={15} style={{ color: catColors.text }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-slate-900 text-xs truncate"
                        style={{ fontWeight: 600 }}
                      >
                        {p.nome}
                      </p>
                      <p className="text-slate-400 text-[11px]">{p.sku}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p
                        className="text-xs"
                        style={{ fontWeight: 700, color: cfg.dot }}
                      >
                        {p.estoque} un
                      </p>
                      <span
                        className="text-[9px] px-1.5 py-0.5 rounded-full"
                        style={{
                          background: cfg.bg,
                          color: cfg.text,
                          fontWeight: 600,
                        }}
                      >
                        {cfg.label}
                      </span>
                    </div>
                  </button>
                );
              })}
          </div>
          <button
            onClick={() => navigate("/estoque/produtos")}
            className="w-full mt-4 py-2 rounded-xl bg-amber-50 text-amber-700 text-xs hover:bg-amber-100 transition-colors"
            style={{ fontWeight: 500 }}
          >
            Ver todos os alertas →
          </button>
        </div>

        {/* Top produtos */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-emerald-500" />
              <h3 className="text-slate-900 text-sm" style={{ fontWeight: 600 }}>
                Mais Vendidos
              </h3>
            </div>
            <span className="text-slate-400 text-xs">Histórico total</span>
          </div>
          <div className="space-y-3">
            {TOP_PRODUTOS.map((p, i) => {
              const maxVendas = TOP_PRODUTOS[0].totalVendido;
              const pct = (p.totalVendido / maxVendas) * 100;
              const catColors = CATEGORIA_COLORS[p.categoria] || CATEGORIA_COLORS["Outros"];
              return (
                <button
                  key={p.id}
                  onClick={() => navigate(`/estoque/produtos/${p.id}`)}
                  className="w-full text-left"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0"
                      style={{
                        background: i === 0 ? "#FEF9C3" : "#F8FAFC",
                        color: i === 0 ? "#854D0E" : "#64748B",
                        fontWeight: 700,
                      }}
                    >
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-slate-800 text-xs truncate"
                        style={{ fontWeight: 600 }}
                      >
                        {p.nome}
                      </p>
                    </div>
                    <span
                      className="text-xs shrink-0"
                      style={{ fontWeight: 700, color: catColors.text }}
                    >
                      {p.totalVendido} un
                    </span>
                  </div>
                  <div className="ml-8 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${pct}%`, background: catColors.text }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-slate-400 text-xs">
              Total vendido:{" "}
              {PRODUTOS.reduce((acc, p) => acc + p.totalVendido, 0)} unidades
            </span>
            <button
              onClick={() => navigate("/estoque/produtos")}
              className="text-xs"
              style={{ color: "#1B6B3A", fontWeight: 500 }}
            >
              Ver catálogo →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
