import { useState } from "react";
import { TrendingUp, TrendingDown, DollarSign, Calendar, Download } from "lucide-react";
import { CardKPI, EmptyState, AlertaAmigavel } from "./components";
import { dreMock, formatarMoeda } from "./mockData";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

export function DREPage() {
  const [periodo, setPeriodo] = useState("2025-03");
  const [mostrarComparativo, setMostrarComparativo] = useState(false);

  const dre = dreMock;
  const isLucro = dre.lucroLiquido >= 0;

  // Dados para gráfico de pizza (Despesas)
  const dadosDespesas = dre.categoriasDespesas.map((cat) => ({
    nome: cat.nome,
    valor: cat.valor,
  }));

  // Dados para gráfico de barras (Receitas vs Despesas)
  const dadosComparativo = [
    { nome: "Receitas", valor: dre.receitaBruta },
    { nome: "Despesas", valor: dre.despesasOperacionais + dre.custos },
    { nome: "Lucro/Prejuízo", valor: Math.abs(dre.lucroLiquido) },
  ];

  const COLORS = ["#1B6B3A", "#10b981", "#4ADE80", "#6ee7b7", "#a7f3d0"];
  const COLORS_BAR = ["#10b981", "#ef4444", isLucro ? "#10b981" : "#ef4444"];

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-slate-900 mb-1">DRE Simples</h1>
          <p className="text-sm text-slate-600">Demonstrativo de Resultados do seu negócio de forma simples</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors text-sm">
          <Download size={18} />
          <span style={{ fontWeight: 500 }}>Exportar PDF</span>
        </button>
      </div>

      {/* Alerta Lucro/Prejuízo */}
      <div className="mb-6">
        {isLucro ? (
          <AlertaAmigavel tipo="success" titulo="Parabéns! Seu negócio teve lucro este mês. 🎉" />
        ) : (
          <AlertaAmigavel
            tipo="warning"
            titulo="Seu resultado foi negativo este mês"
            mensagem="Que tal revisar suas despesas? Veja abaixo onde seu dinheiro está sendo gasto."
          />
        )}
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Período */}
          <div>
            <label className="block text-sm text-slate-700 mb-1.5" style={{ fontWeight: 500 }}>
              <Calendar size={14} className="inline mr-1" />
              Período
            </label>
            <input
              type="month"
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Comparativo */}
          <div className="flex items-end">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={mostrarComparativo}
                onChange={(e) => setMostrarComparativo(e.target.checked)}
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 rounded"
              />
              <span className="text-sm text-slate-700">Comparar com mês anterior</span>
            </label>
          </div>
        </div>
      </div>

      {/* KPIs Principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <CardKPI
          label="Receitas Totais"
          valor={dre.receitaBruta}
          icon={TrendingUp}
          tipo="positivo"
          comparativo={mostrarComparativo ? 8.3 : undefined}
        />
        <CardKPI
          label="Despesas Totais"
          valor={dre.despesasOperacionais + dre.custos}
          icon={TrendingDown}
          tipo="negativo"
          comparativo={mostrarComparativo ? -3.1 : undefined}
        />
        <CardKPI
          label={isLucro ? "Lucro Líquido" : "Prejuízo"}
          valor={Math.abs(dre.lucroLiquido)}
          icon={DollarSign}
          tipo={isLucro ? "positivo" : "negativo"}
        />
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm text-slate-600">Margem de Lucro</p>
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isLucro ? "bg-emerald-50" : "bg-red-50"
              }`}
            >
              <DollarSign size={20} className={isLucro ? "text-emerald-600" : "text-red-600"} />
            </div>
          </div>
          <p className={`text-2xl ${isLucro ? "text-emerald-900" : "text-red-900"}`} style={{ fontWeight: 600 }}>
            {dre.margemLucro.toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Estrutura DRE Simplificada */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
        <h3 className="text-slate-900 mb-4">Demonstrativo do Período</h3>

        <div className="space-y-3">
          {/* Receita Bruta */}
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <span className="text-sm text-slate-900" style={{ fontWeight: 600 }}>
              Receita Bruta
            </span>
            <span className="text-sm text-emerald-700" style={{ fontWeight: 600 }}>
              {formatarMoeda(dre.receitaBruta)}
            </span>
          </div>

          {/* Impostos */}
          <div className="flex items-center justify-between py-2 pl-4 border-b border-slate-100">
            <span className="text-sm text-slate-600">(-) Impostos</span>
            <span className="text-sm text-red-600">{formatarMoeda(dre.impostos)}</span>
          </div>

          {/* Receita Líquida */}
          <div className="flex items-center justify-between py-2 bg-slate-50 px-2 rounded">
            <span className="text-sm text-slate-900" style={{ fontWeight: 600 }}>
              (=) Receita Líquida
            </span>
            <span className="text-sm text-slate-900" style={{ fontWeight: 600 }}>
              {formatarMoeda(dre.receitaLiquida)}
            </span>
          </div>

          {/* Custos */}
          <div className="flex items-center justify-between py-2 pl-4 border-b border-slate-100">
            <span className="text-sm text-slate-600">(-) Custos (mercadorias vendidas)</span>
            <span className="text-sm text-red-600">{formatarMoeda(dre.custos)}</span>
          </div>

          {/* Lucro Bruto */}
          <div className="flex items-center justify-between py-2 bg-slate-50 px-2 rounded">
            <span className="text-sm text-slate-900" style={{ fontWeight: 600 }}>
              (=) Lucro Bruto
            </span>
            <span className="text-sm text-slate-900" style={{ fontWeight: 600 }}>
              {formatarMoeda(dre.lucroBruto)}
            </span>
          </div>

          {/* Despesas Operacionais */}
          <div className="flex items-center justify-between py-2 pl-4 border-b border-slate-100">
            <span className="text-sm text-slate-600">(-) Despesas Operacionais</span>
            <span className="text-sm text-red-600">{formatarMoeda(dre.despesasOperacionais)}</span>
          </div>

          {/* Lucro Líquido */}
          <div
            className={`flex items-center justify-between py-3 px-2 rounded ${
              isLucro ? "bg-emerald-50 border border-emerald-200" : "bg-red-50 border border-red-200"
            }`}
          >
            <span className={`text-sm ${isLucro ? "text-emerald-900" : "text-red-900"}`} style={{ fontWeight: 600 }}>
              (=) {isLucro ? "Lucro Líquido" : "Prejuízo"}
            </span>
            <span className={`text-lg ${isLucro ? "text-emerald-700" : "text-red-700"}`} style={{ fontWeight: 700 }}>
              {formatarMoeda(Math.abs(dre.lucroLiquido))}
            </span>
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de Despesas por Categoria */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-slate-900 mb-4">Despesas por Categoria</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dadosDespesas}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ nome, percent }) => `${nome} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="valor"
              >
                {dadosDespesas.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => formatarMoeda(value)} />
            </PieChart>
          </ResponsiveContainer>

          {/* Lista de categorias */}
          <div className="mt-4 space-y-2">
            {dre.categoriasDespesas.map((cat, i) => (
              <div key={cat.nome} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: COLORS[i % COLORS.length] }}></div>
                  <span className="text-slate-700">{cat.nome}</span>
                </div>
                <span className="text-slate-900" style={{ fontWeight: 500 }}>
                  {formatarMoeda(cat.valor)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gráfico Comparativo */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-slate-900 mb-4">Visão Geral</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dadosComparativo}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="nome" tick={{ fontSize: 12 }} stroke="#64748b" />
              <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
              <Tooltip
                formatter={(value: number) => formatarMoeda(value)}
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" }}
              />
              <Bar dataKey="valor" radius={[8, 8, 0, 0]}>
                {dadosComparativo.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS_BAR[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* Explicação didática */}
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs text-blue-900">
              <strong>💡 Como entender este gráfico:</strong>
              <br />
              Quanto maior a barra verde (Receitas) em relação à vermelha (Despesas), melhor! A terceira barra mostra
              seu resultado final.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
