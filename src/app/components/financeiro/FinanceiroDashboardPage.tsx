import { useNavigate } from "react-router";
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  AlertCircle,
  Clock,
  DollarSign,
  ChevronRight,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { CardKPI, AlertaAmigavel } from "./components";
import {
  movimentacoesMock,
  contasPagarMock,
  contasReceberMock,
  dreMock,
  formatarMoeda,
  calcularStatus,
  calcularDiasVencimento,
} from "./mockData";

export function FinanceiroDashboardPage() {
  const navigate = useNavigate();

  // Calcular resumos
  const totalEntradas = movimentacoesMock
    .filter((m) => m.tipo === "entrada" && m.data.startsWith("2025-03"))
    .reduce((sum, m) => sum + m.valor, 0);

  const totalSaidas = movimentacoesMock
    .filter((m) => m.tipo === "saida" && m.data.startsWith("2025-03"))
    .reduce((sum, m) => sum + m.valor, 0);

  const saldoProjetado = 3500 + totalEntradas - totalSaidas;

  // Contas a pagar
  const contasPagarAtualizadas = contasPagarMock.map((c) => ({
    ...c,
    status: calcularStatus(c.dataVencimento, c.status),
  }));
  const totalPagar = contasPagarAtualizadas.filter((c) => c.status === "pendente").reduce((s, c) => s + c.valor, 0);
  const qtdVencidas = contasPagarAtualizadas.filter((c) => c.status === "vencido").length;

  // Contas a receber
  const contasReceberAtualizadas = contasReceberMock.map((c) => ({
    ...c,
    status: calcularStatus(c.dataPrevista, c.status),
  }));
  const totalReceber = contasReceberAtualizadas.filter((c) => c.status === "pendente").reduce((s, c) => s + c.valor, 0);
  const qtdAtrasadas = contasReceberAtualizadas.filter((c) => c.status === "vencido").length;

  const isLucro = dreMock.lucroLiquido >= 0;

  // Próximas contas a pagar (próximos 7 dias)
  const proximasContas = contasPagarAtualizadas
    .filter((c) => c.status === "pendente")
    .map((c) => ({ ...c, diasRestantes: calcularDiasVencimento(c.dataVencimento) }))
    .filter((c) => c.diasRestantes >= 0 && c.diasRestantes <= 7)
    .sort((a, b) => a.diasRestantes - b.diasRestantes)
    .slice(0, 5);

  // Últimas movimentações
  const ultimasMovimentacoes = movimentacoesMock
    .filter((m) => m.data.startsWith("2025-03"))
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
    .slice(0, 5);

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-slate-900 mb-1">Resumo Financeiro</h1>
        <p className="text-sm text-slate-600">Visão geral da saúde financeira do seu negócio</p>
      </div>

      {/* Alertas */}
      <div className="space-y-3 mb-6">
        {qtdVencidas > 0 && (
          <AlertaAmigavel
            tipo="error"
            titulo={`Você tem ${qtdVencidas} conta(s) vencida(s)`}
            mensagem="Pague o quanto antes para evitar juros e multas."
            ctaLabel="Ver Contas"
            ctaAction={() => navigate("/financeiro/contas-pagar")}
          />
        )}

        {qtdAtrasadas > 0 && (
          <AlertaAmigavel
            tipo="warning"
            titulo={`${qtdAtrasadas} cliente(s) com pagamento atrasado`}
            mensagem="Envie uma cobrança amigável para receber mais rápido."
            ctaLabel="Ver Clientes"
            ctaAction={() => navigate("/financeiro/contas-receber")}
          />
        )}
      </div>

      {/* KPIs Principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <button
          onClick={() => navigate("/financeiro/fluxo-de-caixa")}
          className="text-left hover:scale-[1.02] transition-transform"
        >
          <CardKPI label="Saldo Projetado" valor={saldoProjetado} icon={Wallet} tipo={saldoProjetado >= 0 ? "positivo" : "negativo"} />
        </button>

        <button
          onClick={() => navigate("/financeiro/fluxo-de-caixa")}
          className="text-left hover:scale-[1.02] transition-transform"
        >
          <CardKPI label="Entradas do Mês" valor={totalEntradas} icon={TrendingUp} tipo="positivo" comparativo={12.5} />
        </button>

        <button
          onClick={() => navigate("/financeiro/fluxo-de-caixa")}
          className="text-left hover:scale-[1.02] transition-transform"
        >
          <CardKPI label="Saídas do Mês" valor={totalSaidas} icon={TrendingDown} tipo="negativo" comparativo={-5.2} />
        </button>

        <button
          onClick={() => navigate("/financeiro/dre")}
          className="text-left hover:scale-[1.02] transition-transform"
        >
          <CardKPI
            label={isLucro ? "Lucro do Mês" : "Prejuízo do Mês"}
            valor={Math.abs(dreMock.lucroLiquido)}
            icon={DollarSign}
            tipo={isLucro ? "positivo" : "negativo"}
          />
        </button>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Contas a Pagar */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-red-600" />
              <h3 className="text-slate-900">Contas a Pagar</h3>
            </div>
            <button
              onClick={() => navigate("/financeiro/contas-pagar")}
              className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
            >
              Ver todas
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-600">Total a pagar:</span>
              <span className="text-lg text-red-700" style={{ fontWeight: 600 }}>
                {formatarMoeda(totalPagar)}
              </span>
            </div>

            {proximasContas.length === 0 ? (
              <div className="text-center py-6">
                <CheckCircle size={32} className="text-emerald-500 mx-auto mb-2" />
                <p className="text-sm text-slate-600">Nenhuma conta vencendo nos próximos 7 dias!</p>
              </div>
            ) : (
              <div className="space-y-2">
                {proximasContas.map((conta) => (
                  <div
                    key={conta.id}
                    className={`p-3 rounded-lg border ${
                      conta.diasRestantes === 0
                        ? "bg-red-50 border-red-200"
                        : conta.diasRestantes <= 3
                        ? "bg-amber-50 border-amber-200"
                        : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-900 truncate" style={{ fontWeight: 500 }}>
                          {conta.descricao}
                        </p>
                        <p className="text-xs text-slate-600">{conta.fornecedor}</p>
                      </div>
                      <div className="text-right ml-3">
                        <p className="text-sm text-slate-900" style={{ fontWeight: 600 }}>
                          {formatarMoeda(conta.valor)}
                        </p>
                        <p
                          className={`text-xs ${
                            conta.diasRestantes === 0
                              ? "text-red-600"
                              : conta.diasRestantes <= 3
                              ? "text-amber-600"
                              : "text-slate-500"
                          }`}
                          style={{ fontWeight: 500 }}
                        >
                          {conta.diasRestantes === 0
                            ? "Vence hoje!"
                            : `${conta.diasRestantes} dia${conta.diasRestantes !== 1 ? "s" : ""}`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Contas a Receber */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp size={18} className="text-emerald-600" />
              <h3 className="text-slate-900">Contas a Receber</h3>
            </div>
            <button
              onClick={() => navigate("/financeiro/contas-receber")}
              className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
            >
              Ver todas
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-600">Total a receber:</span>
              <span className="text-lg text-emerald-700" style={{ fontWeight: 600 }}>
                {formatarMoeda(totalReceber)}
              </span>
            </div>

            {contasReceberAtualizadas.length === 0 ? (
              <div className="text-center py-6">
                <p className="text-sm text-slate-600">Nenhuma conta a receber cadastrada</p>
              </div>
            ) : (
              <div className="space-y-2">
                {contasReceberAtualizadas.slice(0, 5).map((conta) => {
                  const dias = calcularDiasVencimento(conta.dataPrevista);
                  return (
                    <div
                      key={conta.id}
                      className={`p-3 rounded-lg border ${
                        conta.status === "vencido"
                          ? "bg-red-50 border-red-200"
                          : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-slate-900 truncate" style={{ fontWeight: 500 }}>
                            {conta.cliente}
                          </p>
                          <p className="text-xs text-slate-600">{conta.descricao}</p>
                        </div>
                        <div className="text-right ml-3">
                          <p className="text-sm text-emerald-700" style={{ fontWeight: 600 }}>
                            {formatarMoeda(conta.valor)}
                          </p>
                          {conta.status === "vencido" ? (
                            <p className="text-xs text-red-600" style={{ fontWeight: 500 }}>
                              Atrasado
                            </p>
                          ) : (
                            <p className="text-xs text-slate-500">
                              {dias > 0 ? `${dias} dia${dias !== 1 ? "s" : ""}` : "Hoje"}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Últimas Movimentações */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-slate-600" />
            <h3 className="text-slate-900">Últimas Movimentações</h3>
          </div>
          <button
            onClick={() => navigate("/financeiro/fluxo-de-caixa")}
            className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
          >
            Ver todas
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {ultimasMovimentacoes.map((mov) => (
            <div key={mov.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    mov.tipo === "entrada" ? "bg-emerald-50" : "bg-red-50"
                  }`}
                >
                  {mov.tipo === "entrada" ? (
                    <TrendingUp size={18} className="text-emerald-600" />
                  ) : (
                    <TrendingDown size={18} className="text-red-600" />
                  )}
                </div>
                <div>
                  <p className="text-sm text-slate-900" style={{ fontWeight: 500 }}>
                    {mov.descricao}
                  </p>
                  <p className="text-xs text-slate-600">
                    {new Date(mov.data).toLocaleDateString("pt-BR")} • {mov.categoria}
                  </p>
                </div>
              </div>
              <span
                className={`text-sm ${mov.tipo === "entrada" ? "text-emerald-700" : "text-red-700"}`}
                style={{ fontWeight: 600 }}
              >
                {mov.tipo === "entrada" ? "+" : "-"} {formatarMoeda(mov.valor)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
