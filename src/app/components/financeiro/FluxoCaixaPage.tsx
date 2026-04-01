import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  Plus,
  Filter,
  Download,
  Search,
  Calendar,
  Edit,
  Trash2,
} from "lucide-react";
import { CardKPI, BadgeStatus, EmptyState, AlertaAmigavel } from "./components";
import {
  movimentacoesMock,
  formatarMoeda,
  calcularDiasVencimento,
  Movimentacao,
  TipoMovimentacao,
  Categoria,
} from "./mockData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function FluxoCaixaPage() {
  const [periodo, setPeriodo] = useState("2025-03");
  const [filtroTipo, setFiltroTipo] = useState<TipoMovimentacao | "todos">("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  // Filtrar movimentações
  const movimentacoesFiltradas = movimentacoesMock.filter((mov) => {
    const dentroMes = mov.data.startsWith(periodo);
    const tipoMatch = filtroTipo === "todos" || mov.tipo === filtroTipo;
    const searchMatch =
      searchQuery === "" ||
      mov.descricao.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mov.pessoa?.toLowerCase().includes(searchQuery.toLowerCase());
    return dentroMes && tipoMatch && searchMatch;
  });

  // Calcular totais
  const totalEntradas = movimentacoesFiltradas
    .filter((m) => m.tipo === "entrada")
    .reduce((sum, m) => sum + m.valor, 0);
  const totalSaidas = movimentacoesFiltradas
    .filter((m) => m.tipo === "saida")
    .reduce((sum, m) => sum + m.valor, 0);
  const saldoInicial = 3500.0; // Mock
  const saldoFinal = saldoInicial + totalEntradas - totalSaidas;

  // Dados para o gráfico (agrupados por dia)
  const dadosGrafico = movimentacoesFiltradas
    .reduce((acc: any[], mov) => {
      const dia = new Date(mov.data).getDate();
      const diaStr = `${dia.toString().padStart(2, "0")}/${periodo.substring(5)}`;
      const existing = acc.find((d) => d.dia === diaStr);

      if (existing) {
        if (mov.tipo === "entrada") existing.entradas += mov.valor;
        else existing.saidas += mov.valor;
      } else {
        acc.push({
          dia: diaStr,
          entradas: mov.tipo === "entrada" ? mov.valor : 0,
          saidas: mov.tipo === "saida" ? mov.valor : 0,
        });
      }
      return acc;
    }, [])
    .sort((a, b) => parseInt(a.dia) - parseInt(b.dia))
    .slice(0, 15); // Primeiros 15 dias

  const saldoNegativo = saldoFinal < 0;

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-slate-900 mb-1">Fluxo de Caixa</h1>
          <p className="text-sm text-slate-600">Visualize todo o dinheiro que entrou e saiu do seu negócio</p>
        </div>
        <button
          onClick={() => setMostrarModal(true)}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors"
        >
          <Plus size={18} />
          <span className="text-sm" style={{ fontWeight: 500 }}>
            Nova Movimentação
          </span>
        </button>
      </div>

      {/* Alerta Saldo Negativo */}
      {saldoNegativo && (
        <div className="mb-6">
          <AlertaAmigavel
            tipo="warning"
            titulo="Atenção: seu saldo está negativo neste período"
            mensagem="Que tal revisar suas despesas? Clique abaixo para ver apenas as saídas."
            ctaLabel="Ver Despesas"
            ctaAction={() => setFiltroTipo("saida")}
          />
        </div>
      )}

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <CardKPI label="Saldo Inicial" valor={saldoInicial} icon={Wallet} tipo="neutro" />
        <CardKPI label="Total de Entradas" valor={totalEntradas} icon={TrendingUp} tipo="positivo" comparativo={12.5} />
        <CardKPI label="Total de Saídas" valor={totalSaidas} icon={TrendingDown} tipo="negativo" comparativo={-5.2} />
        <CardKPI
          label="Saldo Final"
          valor={saldoFinal}
          icon={Wallet}
          tipo={saldoFinal >= 0 ? "positivo" : "negativo"}
        />
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

          {/* Tipo */}
          <div>
            <label className="block text-sm text-slate-700 mb-1.5" style={{ fontWeight: 500 }}>
              <Filter size={14} className="inline mr-1" />
              Tipo
            </label>
            <select
              value={filtroTipo}
              onChange={(e) => setFiltroTipo(e.target.value as TipoMovimentacao | "todos")}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="todos">Todos</option>
              <option value="entrada">Entradas</option>
              <option value="saida">Saídas</option>
            </select>
          </div>

          {/* Busca */}
          <div className="sm:col-span-2">
            <label className="block text-sm text-slate-700 mb-1.5" style={{ fontWeight: 500 }}>
              <Search size={14} className="inline mr-1" />
              Buscar
            </label>
            <input
              type="text"
              placeholder="Buscar por descrição ou pessoa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Gráfico */}
      {dadosGrafico.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <h3 className="text-slate-900 mb-4">Entradas vs Saídas</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dadosGrafico}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="dia" tick={{ fontSize: 12 }} stroke="#64748b" />
              <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
              <Tooltip
                formatter={(value: number) => formatarMoeda(value)}
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" }}
              />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Line type="monotone" dataKey="entradas" stroke="#10b981" strokeWidth={2} name="Entradas" />
              <Line type="monotone" dataKey="saidas" stroke="#ef4444" strokeWidth={2} name="Saídas" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Lista de Movimentações */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-slate-900">Movimentações</h3>
          <button className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
            <Download size={16} />
            Exportar
          </button>
        </div>

        {movimentacoesFiltradas.length === 0 ? (
          <EmptyState
            titulo="Nenhuma movimentação neste período"
            descricao="Comece registrando sua primeira entrada ou saída de dinheiro"
            ctaLabel="Adicionar movimentação"
            ctaAction={() => setMostrarModal(true)}
            dica="Você pode registrar vendas, pagamentos de fornecedores, contas fixas..."
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs text-slate-600" style={{ fontWeight: 600 }}>
                    Data
                  </th>
                  <th className="px-4 py-3 text-left text-xs text-slate-600" style={{ fontWeight: 600 }}>
                    Descrição
                  </th>
                  <th className="px-4 py-3 text-left text-xs text-slate-600" style={{ fontWeight: 600 }}>
                    Categoria
                  </th>
                  <th className="px-4 py-3 text-left text-xs text-slate-600" style={{ fontWeight: 600 }}>
                    Tipo
                  </th>
                  <th className="px-4 py-3 text-right text-xs text-slate-600" style={{ fontWeight: 600 }}>
                    Valor
                  </th>
                  <th className="px-4 py-3 text-center text-xs text-slate-600" style={{ fontWeight: 600 }}>
                    Status
                  </th>
                  <th className="px-4 py-3 text-center text-xs text-slate-600" style={{ fontWeight: 600 }}>
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {movimentacoesFiltradas.map((mov) => (
                  <tr key={mov.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-sm text-slate-600">
                      {new Date(mov.data).toLocaleDateString("pt-BR")}
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-sm text-slate-900" style={{ fontWeight: 500 }}>
                        {mov.descricao}
                      </p>
                      {mov.pessoa && <p className="text-xs text-slate-500">{mov.pessoa}</p>}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">{mov.categoria}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${
                          mov.tipo === "entrada"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {mov.tipo === "entrada" ? "↑ Entrada" : "↓ Saída"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span
                        className={`text-sm ${
                          mov.tipo === "entrada" ? "text-emerald-700" : "text-red-700"
                        }`}
                        style={{ fontWeight: 600 }}
                      >
                        {mov.tipo === "entrada" ? "+" : "-"} {formatarMoeda(mov.valor)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <BadgeStatus status={mov.status} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded transition-colors"
                          title="Editar"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Excluir"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal de Nova Movimentação (placeholder) */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-lg text-slate-900 mb-4">Nova Movimentação</h3>
            <p className="text-sm text-slate-600 mb-4">Funcionalidade em desenvolvimento...</p>
            <button
              onClick={() => setMostrarModal(false)}
              className="w-full px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
