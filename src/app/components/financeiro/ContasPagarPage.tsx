import { useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Plus,
  Filter,
  Download,
  Search,
  Calendar,
  Edit,
  Trash2,
  CreditCard,
} from "lucide-react";
import { CardKPI, BadgeStatus, EmptyState, AlertaAmigavel, IndicadorVencimento } from "./components";
import {
  contasPagarMock,
  formatarMoeda,
  calcularDiasVencimento,
  calcularStatus,
  ContaPagar,
  StatusMovimentacao,
} from "./mockData";

export function ContasPagarPage() {
  const [filtroStatus, setFiltroStatus] = useState<StatusMovimentacao | "todos">("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [contaSelecionada, setContaSelecionada] = useState<ContaPagar | null>(null);

  // Atualizar status baseado na data
  const contas = contasPagarMock.map((conta) => ({
    ...conta,
    status: calcularStatus(conta.dataVencimento, conta.status),
  }));

  // Filtrar contas
  const contasFiltradas = contas.filter((conta) => {
    const statusMatch = filtroStatus === "todos" || conta.status === filtroStatus;
    const searchMatch =
      searchQuery === "" ||
      conta.descricao.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conta.fornecedor.toLowerCase().includes(searchQuery.toLowerCase());
    return statusMatch && searchMatch;
  });

  // Calcular totais
  const totalPagar = contas.filter((c) => c.status === "pendente").reduce((sum, c) => sum + c.valor, 0);
  const totalVencido = contas.filter((c) => c.status === "vencido").reduce((sum, c) => sum + c.valor, 0);
  const totalPago = contas.filter((c) => c.status === "pago").reduce((sum, c) => sum + c.valor, 0);
  const qtdPendentes = contas.filter((c) => c.status === "pendente").length;

  const temVencidas = contas.some((c) => c.status === "vencido");
  const tudoEmDia = !contas.some((c) => c.status === "pendente" || c.status === "vencido");

  const handleRegistrarPagamento = (conta: ContaPagar) => {
    setContaSelecionada(conta);
    setMostrarModal(true);
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-slate-900 mb-1">Contas a Pagar</h1>
          <p className="text-sm text-slate-600">Organize todas as despesas e contas do seu negócio</p>
        </div>
        <button
          onClick={() => setMostrarModal(true)}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors"
        >
          <Plus size={18} />
          <span className="text-sm" style={{ fontWeight: 500 }}>
            Nova Conta
          </span>
        </button>
      </div>

      {/* Alertas */}
      <div className="space-y-3 mb-6">
        {temVencidas && (
          <AlertaAmigavel
            tipo="error"
            titulo={`Você tem ${contas.filter((c) => c.status === "vencido").length} conta(s) vencida(s)`}
            mensagem="Clique para ver as contas em atraso e evitar juros."
            ctaLabel="Ver Vencidas"
            ctaAction={() => setFiltroStatus("vencido")}
          />
        )}

        {tudoEmDia && (
          <AlertaAmigavel tipo="success" titulo="Tudo em dia! ✅ Nenhuma conta pendente." />
        )}
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <CardKPI
          label="Total a Pagar"
          valor={totalPagar}
          icon={Clock}
          tipo="neutro"
        />
        <CardKPI
          label="Total Vencido"
          valor={totalVencido}
          icon={AlertCircle}
          tipo="negativo"
        />
        <CardKPI
          label="Total Pago"
          valor={totalPago}
          icon={CheckCircle}
          tipo="positivo"
        />
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm text-slate-600">Contas Pendentes</p>
            <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
              <Clock size={20} className="text-amber-600" />
            </div>
          </div>
          <p className="text-2xl text-slate-900" style={{ fontWeight: 600 }}>
            {qtdPendentes}
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Status */}
          <div>
            <label className="block text-sm text-slate-700 mb-1.5" style={{ fontWeight: 500 }}>
              <Filter size={14} className="inline mr-1" />
              Status
            </label>
            <select
              value={filtroStatus}
              onChange={(e) => setFiltroStatus(e.target.value as StatusMovimentacao | "todos")}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="todos">Todos</option>
              <option value="pendente">Pendentes</option>
              <option value="pago">Pagas</option>
              <option value="vencido">Vencidas</option>
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
              placeholder="Buscar por descrição ou fornecedor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Lista de Contas */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-slate-900">Contas Cadastradas</h3>
          <button className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
            <Download size={16} />
            Exportar
          </button>
        </div>

        {contasFiltradas.length === 0 ? (
          <EmptyState
            titulo="Nenhuma conta cadastrada"
            descricao="Organize suas despesas cadastrando as contas do mês"
            ctaLabel="Cadastrar primeira conta"
            ctaAction={() => setMostrarModal(true)}
            dica="Cadastre contas recorrentes como aluguel e internet"
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs text-slate-600" style={{ fontWeight: 600 }}>
                    Descrição
                  </th>
                  <th className="px-4 py-3 text-left text-xs text-slate-600" style={{ fontWeight: 600 }}>
                    Fornecedor
                  </th>
                  <th className="px-4 py-3 text-left text-xs text-slate-600" style={{ fontWeight: 600 }}>
                    Categoria
                  </th>
                  <th className="px-4 py-3 text-left text-xs text-slate-600" style={{ fontWeight: 600 }}>
                    Vencimento
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
                {contasFiltradas.map((conta) => {
                  const diasVenc = calcularDiasVencimento(conta.dataVencimento);
                  const urgente = diasVenc <= 3 && conta.status === "pendente";

                  return (
                    <tr
                      key={conta.id}
                      className={`hover:bg-slate-50 transition-colors ${
                        conta.status === "vencido" ? "bg-red-50/30" : urgente ? "bg-amber-50/30" : ""
                      }`}
                    >
                      <td className="px-4 py-3">
                        <p className="text-sm text-slate-900" style={{ fontWeight: 500 }}>
                          {conta.descricao}
                        </p>
                        {conta.recorrente && (
                          <span className="text-xs text-slate-500">🔁 Recorrente</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-600">{conta.fornecedor}</td>
                      <td className="px-4 py-3 text-sm text-slate-600">{conta.categoria}</td>
                      <td className="px-4 py-3">
                        <p className="text-sm text-slate-900">
                          {new Date(conta.dataVencimento).toLocaleDateString("pt-BR")}
                        </p>
                        <IndicadorVencimento
                          dataVencimento={conta.dataVencimento}
                          status={conta.status}
                        />
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className="text-sm text-slate-900" style={{ fontWeight: 600 }}>
                          {formatarMoeda(conta.valor)}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <BadgeStatus status={conta.status} />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-1">
                          {conta.status !== "pago" && (
                            <button
                              onClick={() => handleRegistrarPagamento(conta)}
                              className="px-2 py-1 text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded transition-colors"
                              style={{ fontWeight: 500 }}
                              title="Registrar Pagamento"
                            >
                              <CreditCard size={14} className="inline mr-1" />
                              Pagar
                            </button>
                          )}
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
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal de Pagamento (placeholder) */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-lg text-slate-900 mb-4">
              {contaSelecionada ? "Registrar Pagamento" : "Nova Conta a Pagar"}
            </h3>
            {contaSelecionada && (
              <div className="mb-4 p-3 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">Conta:</p>
                <p className="text-sm text-slate-900" style={{ fontWeight: 600 }}>
                  {contaSelecionada.descricao} - {formatarMoeda(contaSelecionada.valor)}
                </p>
              </div>
            )}
            <p className="text-sm text-slate-600 mb-4">Funcionalidade em desenvolvimento...</p>
            <button
              onClick={() => {
                setMostrarModal(false);
                setContaSelecionada(null);
              }}
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
