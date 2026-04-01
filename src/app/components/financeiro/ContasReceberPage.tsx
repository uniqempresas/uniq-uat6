import { useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Plus,
  Filter,
  Download,
  Search,
  Edit,
  Trash2,
  CreditCard,
  MessageCircle,
} from "lucide-react";
import { CardKPI, BadgeStatus, EmptyState, AlertaAmigavel, IndicadorVencimento } from "./components";
import {
  contasReceberMock,
  formatarMoeda,
  calcularDiasVencimento,
  calcularStatus,
  ContaReceber,
  StatusMovimentacao,
} from "./mockData";

export function ContasReceberPage() {
  const [filtroStatus, setFiltroStatus] = useState<StatusMovimentacao | "todos">("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [contaSelecionada, setContaSelecionada] = useState<ContaReceber | null>(null);
  const [modalTipo, setModalTipo] = useState<"nova" | "receber" | "cobranca">("nova");

  // Atualizar status baseado na data
  const contas = contasReceberMock.map((conta) => ({
    ...conta,
    status: calcularStatus(conta.dataPrevista, conta.status),
  }));

  // Filtrar contas
  const contasFiltradas = contas.filter((conta) => {
    const statusMatch = filtroStatus === "todos" || conta.status === filtroStatus;
    const searchMatch =
      searchQuery === "" ||
      conta.descricao.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conta.cliente.toLowerCase().includes(searchQuery.toLowerCase());
    return statusMatch && searchMatch;
  });

  // Calcular totais
  const totalReceber = contas.filter((c) => c.status === "pendente").reduce((sum, c) => sum + c.valor, 0);
  const totalAtrasado = contas.filter((c) => c.status === "vencido").reduce((sum, c) => sum + c.valor, 0);
  const totalRecebido = contas.filter((c) => c.status === "pago").reduce((sum, c) => sum + c.valor, 0);
  const previsaoReceita = totalReceber + totalAtrasado;

  const temAtrasadas = contas.some((c) => c.status === "vencido");

  const handleRegistrarRecebimento = (conta: ContaReceber) => {
    setContaSelecionada(conta);
    setModalTipo("receber");
    setMostrarModal(true);
  };

  const handleEnviarCobranca = (conta: ContaReceber) => {
    setContaSelecionada(conta);
    setModalTipo("cobranca");
    setMostrarModal(true);
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-slate-900 mb-1">Contas a Receber</h1>
          <p className="text-sm text-slate-600">Acompanhe pagamentos de clientes e parcelas pendentes</p>
        </div>
        <button
          onClick={() => {
            setModalTipo("nova");
            setContaSelecionada(null);
            setMostrarModal(true);
          }}
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
        {temAtrasadas && (
          <AlertaAmigavel
            tipo="warning"
            titulo={`Você tem ${contas.filter((c) => c.status === "vencido").length} cliente(s) com pagamento atrasado`}
            mensagem="Envie uma cobrança amigável pelo WhatsApp para receber mais rápido."
            ctaLabel="Ver Atrasadas"
            ctaAction={() => setFiltroStatus("vencido")}
          />
        )}
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <CardKPI
          label="Total a Receber"
          valor={totalReceber}
          icon={Clock}
          tipo="positivo"
        />
        <CardKPI
          label="Total em Atraso"
          valor={totalAtrasado}
          icon={AlertCircle}
          tipo="negativo"
        />
        <CardKPI
          label="Total Recebido"
          valor={totalRecebido}
          icon={CheckCircle}
          tipo="positivo"
        />
        <CardKPI
          label="Previsão de Receita"
          valor={previsaoReceita}
          icon={Clock}
          tipo="neutro"
        />
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
              <option value="pendente">A Receber</option>
              <option value="pago">Recebido</option>
              <option value="vencido">Atrasado</option>
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
              placeholder="Buscar por descrição ou cliente..."
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
            titulo="Nenhuma conta a receber cadastrada"
            descricao="Cadastre parcelas, fiados ou recebimentos futuros"
            ctaLabel="Cadastrar primeira conta"
            ctaAction={() => setMostrarModal(true)}
            dica="Contas a receber aparecem automaticamente quando você vende no boleto ou parcelado"
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs text-slate-600" style={{ fontWeight: 600 }}>
                    Cliente
                  </th>
                  <th className="px-4 py-3 text-left text-xs text-slate-600" style={{ fontWeight: 600 }}>
                    Descrição
                  </th>
                  <th className="px-4 py-3 text-left text-xs text-slate-600" style={{ fontWeight: 600 }}>
                    Data Prevista
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
                  const diasVenc = calcularDiasVencimento(conta.dataPrevista);
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
                          {conta.cliente}
                        </p>
                        {conta.formaPagamento && (
                          <span className="text-xs text-slate-500">{conta.formaPagamento}</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-sm text-slate-900">{conta.descricao}</p>
                        {conta.parcela && (
                          <span className="text-xs text-slate-500">Parcela {conta.parcela}</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-sm text-slate-900">
                          {new Date(conta.dataPrevista).toLocaleDateString("pt-BR")}
                        </p>
                        <IndicadorVencimento
                          dataVencimento={conta.dataPrevista}
                          status={conta.status}
                        />
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className="text-sm text-emerald-700" style={{ fontWeight: 600 }}>
                          {formatarMoeda(conta.valor)}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <BadgeStatus status={conta.status} />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-1 flex-wrap">
                          {conta.status !== "pago" && (
                            <>
                              <button
                                onClick={() => handleRegistrarRecebimento(conta)}
                                className="px-2 py-1 text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded transition-colors"
                                style={{ fontWeight: 500 }}
                                title="Registrar Recebimento"
                              >
                                <CreditCard size={12} className="inline mr-1" />
                                Receber
                              </button>
                              {conta.status === "vencido" && (
                                <button
                                  onClick={() => handleEnviarCobranca(conta)}
                                  className="px-2 py-1 text-xs text-blue-700 bg-blue-50 hover:bg-blue-100 rounded transition-colors"
                                  style={{ fontWeight: 500 }}
                                  title="Enviar Cobrança"
                                >
                                  <MessageCircle size={12} className="inline mr-1" />
                                  Cobrar
                                </button>
                              )}
                            </>
                          )}
                          <button
                            className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded transition-colors"
                            title="Editar"
                          >
                            <Edit size={14} />
                          </button>
                          <button
                            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="Excluir"
                          >
                            <Trash2 size={14} />
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

      {/* Modal */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            {modalTipo === "nova" && (
              <>
                <h3 className="text-lg text-slate-900 mb-4">Nova Conta a Receber</h3>
                <p className="text-sm text-slate-600 mb-4">Funcionalidade em desenvolvimento...</p>
              </>
            )}

            {modalTipo === "receber" && contaSelecionada && (
              <>
                <h3 className="text-lg text-slate-900 mb-4">Registrar Recebimento</h3>
                <div className="mb-4 p-3 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-600">Cliente:</p>
                  <p className="text-sm text-slate-900" style={{ fontWeight: 600 }}>
                    {contaSelecionada.cliente}
                  </p>
                  <p className="text-sm text-slate-600 mt-2">Valor:</p>
                  <p className="text-sm text-emerald-700" style={{ fontWeight: 600 }}>
                    {formatarMoeda(contaSelecionada.valor)}
                  </p>
                </div>
                <p className="text-sm text-slate-600 mb-4">Funcionalidade em desenvolvimento...</p>
              </>
            )}

            {modalTipo === "cobranca" && contaSelecionada && (
              <>
                <h3 className="text-lg text-slate-900 mb-4">Enviar Cobrança</h3>
                <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-xs text-blue-600 mb-2">Preview da Mensagem:</p>
                  <p className="text-sm text-slate-900">
                    Olá {contaSelecionada.cliente}! 😊
                    <br />
                    <br />
                    Estamos entrando em contato para lembrar que o pagamento de{" "}
                    <strong>{formatarMoeda(contaSelecionada.valor)}</strong> referente a{" "}
                    {contaSelecionada.descricao} está em atraso.
                    <br />
                    <br />
                    Podemos contar com você? Caso já tenha efetuado o pagamento, por favor desconsidere esta
                    mensagem.
                  </p>
                </div>
                <p className="text-xs text-slate-600 mb-4">
                  📱 Esta mensagem será enviada pelo WhatsApp
                </p>
              </>
            )}

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
