import { useState } from "react";
import { useNavigate } from "react-router";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Package,
  Users,
  DollarSign,
  ShoppingCart,
  MessageCircle,
  Settings,
  CheckCircle,
  Clock,
  SkipForward,
  Wifi,
  WifiOff,
  Sparkles,
  ChevronRight,
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
  BarChart3,
  Zap,
  BookOpen,
  Send,
} from "lucide-react";
import {
  insightsMock,
  acoesSugeridaMock,
  melStatsMock,
  whatsAppStatusMock,
  Insight,
  AcaoSugerida,
  InsightTipo,
  InsightPrioridade,
  AcaoPrioridade,
} from "./melMockData";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const tipoCfg: Record<InsightTipo, { icon: React.ElementType; bg: string; iconColor: string; label: string }> = {
  vendas: { icon: ShoppingCart, bg: "bg-violet-50", iconColor: "text-violet-600", label: "Vendas" },
  estoque: { icon: Package, bg: "bg-amber-50", iconColor: "text-amber-600", label: "Estoque" },
  clientes: { icon: Users, bg: "bg-sky-50", iconColor: "text-sky-600", label: "Clientes" },
  financeiro: { icon: DollarSign, bg: "bg-emerald-50", iconColor: "text-emerald-600", label: "Financeiro" },
};

const prioridadeCfg: Record<InsightPrioridade, { border: string; badge: string; badgeText: string; label: string }> = {
  critico: { border: "border-l-red-500", badge: "bg-red-100 text-red-700", badgeText: "Crítico", label: "Crítico" },
  urgente: { border: "border-l-amber-500", badge: "bg-amber-100 text-amber-700", badgeText: "Urgente", label: "Urgente" },
  importante: { border: "border-l-violet-500", badge: "bg-violet-100 text-violet-700", badgeText: "Importante", label: "Importante" },
  informativo: { border: "border-l-slate-400", badge: "bg-slate-100 text-slate-600", badgeText: "Info", label: "Informativo" },
};

const acaoPrioridadeCfg: Record<AcaoPrioridade, { dot: string; label: string; badge: string }> = {
  alta: { dot: "bg-red-500", label: "Alta", badge: "bg-red-50 text-red-700 border-red-200" },
  media: { dot: "bg-amber-500", label: "Média", badge: "bg-amber-50 text-amber-700 border-amber-200" },
  baixa: { dot: "bg-slate-400", label: "Baixa", badge: "bg-slate-50 text-slate-600 border-slate-200" },
};

// ─── Insight Card ─────────────────────────────────────────────────────────────

function InsightCard({ insight, onDismiss, onFeedback }: {
  insight: Insight;
  onDismiss: (id: string) => void;
  onFeedback: (id: string, val: "util" | "nao_util") => void;
}) {
  const tipo = tipoCfg[insight.tipo];
  const prio = prioridadeCfg[insight.prioridade];
  const Icon = tipo.icon;
  const navigate = useNavigate();

  return (
    <div
      className={`bg-white rounded-xl border border-slate-200 border-l-4 ${prio.border} p-4 hover:shadow-md transition-all ${insight.lido ? "opacity-75" : ""}`}
    >
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 ${tipo.bg} rounded-xl flex items-center justify-center shrink-0`}>
          <Icon size={20} className={tipo.iconColor} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className={`text-xs px-2 py-0.5 rounded-full ${prio.badge}`}>{prio.badgeText}</span>
            <span className="text-xs text-slate-400">{insight.horario}</span>
            {!insight.lido && (
              <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0" />
            )}
          </div>
          <p className="text-slate-900 text-sm">{insight.titulo}</p>
          <p className="text-slate-500 text-xs mt-1 leading-relaxed">{insight.descricao}</p>
          {insight.valor && (
            <div className="flex items-center gap-2 mt-2">
              <span className="text-slate-900 text-sm" style={{ fontWeight: 700 }}>{insight.valor}</span>
              {insight.variacao !== undefined && (
                <span className={`flex items-center gap-1 text-xs ${insight.tendencia === "crescente" ? "text-emerald-600" : insight.tendencia === "decrescente" ? "text-red-600" : "text-slate-500"}`}>
                  {insight.tendencia === "crescente" ? <TrendingUp size={13} /> : insight.tendencia === "decrescente" ? <TrendingDown size={13} /> : <Minus size={13} />}
                  {insight.variacao}%
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100">
        <button
          onClick={() => navigate(insight.ctaPath)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all"
          style={{ background: "#1B6B3A", color: "#fff" }}
        >
          {insight.cta}
          <ChevronRight size={12} />
        </button>
        <div className="flex-1" />
        {!insight.feedback ? (
          <>
            <button onClick={() => onFeedback(insight.id, "util")} className="p-1.5 rounded-lg hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 transition-colors" title="Útil">
              <ThumbsUp size={14} />
            </button>
            <button onClick={() => onFeedback(insight.id, "nao_util")} className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors" title="Não útil">
              <ThumbsDown size={14} />
            </button>
          </>
        ) : (
          <span className="text-xs text-slate-400">Feedback enviado ✓</span>
        )}
        <button onClick={() => onDismiss(insight.id)} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 transition-colors" title="Dispensar">
          <SkipForward size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── Acao Item ────────────────────────────────────────────────────────────────

function AcaoItem({ acao, onConcluir, onIgnorar }: {
  acao: AcaoSugerida;
  onConcluir: (id: string) => void;
  onIgnorar: (id: string) => void;
}) {
  const cfg = acaoPrioridadeCfg[acao.prioridade];
  if (acao.status !== "pendente") return null;

  return (
    <div className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0">
      <div className={`w-2 h-2 rounded-full ${cfg.dot} mt-1.5 shrink-0`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
          <p className="text-slate-900 text-sm">{acao.titulo}</p>
          <span className={`text-xs px-1.5 py-0.5 rounded-full border ${cfg.badge}`}>{cfg.label}</span>
        </div>
        <p className="text-slate-500 text-xs">{acao.descricao}</p>
        {acao.prazo && (
          <div className="flex items-center gap-1 mt-1">
            <Clock size={11} className="text-slate-400" />
            <span className="text-xs text-slate-400">{acao.prazo} · {acao.modulo}</span>
          </div>
        )}
      </div>
      <div className="flex gap-1.5 shrink-0">
        <button
          onClick={() => onConcluir(acao.id)}
          className="p-1.5 rounded-lg hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 transition-colors"
          title="Concluir"
        >
          <CheckCircle size={16} />
        </button>
        <button
          onClick={() => onIgnorar(acao.id)}
          className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 transition-colors"
          title="Ignorar"
        >
          <SkipForward size={16} />
        </button>
      </div>
    </div>
  );
}

// ─── Toast simples ────────────────────────────────────────────────────────────

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-xl text-white text-sm"
      style={{ background: "#1B6B3A" }}
    >
      <CheckCircle size={16} />
      {message}
      <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100">✕</button>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function MelDashboardPage() {
  const navigate = useNavigate();
  const [insights, setInsights] = useState(insightsMock);
  const [acoes, setAcoes] = useState(acoesSugeridaMock);
  const [toast, setToast] = useState<string | null>(null);
  const [isTestingWA, setIsTestingWA] = useState(false);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const handleDismiss = (id: string) => {
    setInsights((prev) => prev.filter((i) => i.id !== id));
  };

  const handleFeedback = (id: string, val: "util" | "nao_util") => {
    setInsights((prev) => prev.map((i) => i.id === id ? { ...i, feedback: val, lido: true } : i));
    showToast(val === "util" ? "Obrigado pelo feedback! 🙏" : "Entendido! Vou melhorar meus insights.");
  };

  const handleConcluir = (id: string) => {
    setAcoes((prev) => prev.map((a) => a.id === id ? { ...a, status: "concluida" } : a));
    showToast("Tarefa concluída! Você está indo bem 🎉");
  };

  const handleIgnorar = (id: string) => {
    setAcoes((prev) => prev.map((a) => a.id === id ? { ...a, status: "ignorada" } : a));
  };

  const handleTestarWA = () => {
    setIsTestingWA(true);
    setTimeout(() => {
      setIsTestingWA(false);
      showToast("Mensagem de teste enviada! Verifique seu WhatsApp 📱");
    }, 1800);
  };

  const acoesAtivas = acoes.filter((a) => a.status === "pendente");
  const hora = new Date().getHours();
  const saudacao = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}

      {/* ── MEL Header Banner ───────────────────────── */}
      <div
        className="rounded-2xl p-5 sm:p-6 mb-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1B1B3A 0%, #2D1B69 50%, #1B3A2D 100%)" }}
      >
        {/* Decorative circles */}
        <div className="absolute right-0 top-0 w-48 h-48 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #A78BFA, transparent)", transform: "translate(30%, -30%)" }} />
        <div className="absolute right-8 bottom-0 w-32 h-32 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #4ADE80, transparent)", transform: "translate(0, 40%)" }} />

        <div className="relative flex items-center gap-4">
          {/* MEL Avatar */}
          <div className="relative shrink-0">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-xl"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A78BFA)" }}
            >
              🤖
            </div>
            <div
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center"
              style={{ background: "#4ADE80" }}
            >
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-white">MEL — Sua Consultora Virtual</h2>
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs" style={{ background: "rgba(74, 222, 128, 0.2)", color: "#4ADE80" }}>
                <Sparkles size={11} />
                Online
              </span>
            </div>
            <p className="text-white/60 text-sm">
              {saudacao}, Maria! Tenho <span className="text-violet-300" style={{ fontWeight: 600 }}>{insights.filter((i) => !i.lido).length} novidades</span> para você hoje.
            </p>
          </div>

          <button
            onClick={() => navigate("/mel/configuracoes")}
            className="shrink-0 p-2 rounded-xl hover:bg-white/10 text-white/60 hover:text-white transition-all"
            title="Configurar MEL"
          >
            <Settings size={20} />
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10">
          {[
            { label: "Insights hoje", value: melStatsMock.insightsHoje, icon: Zap },
            { label: "Taxa de leitura", value: `${melStatsMock.taxaLeitura}%`, icon: BarChart3 },
            { label: "Aprendizado", value: `${melStatsMock.aprendizadoPct}%`, icon: BookOpen },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Icon size={13} className="text-white/50" />
                  <span className="text-white/50 text-xs">{stat.label}</span>
                </div>
                <p className="text-white text-sm" style={{ fontWeight: 700 }}>{stat.value}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Left/Main column ───────────────── */}
        <div className="lg:col-span-2 space-y-6">

          {/* Insights */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-slate-900">Insights do MEL</h3>
                <p className="text-xs text-slate-500">Atualizado agora há pouco · próxima atualização em 15min</p>
              </div>
              <button className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700 transition-colors px-2 py-1 rounded-lg hover:bg-slate-100">
                <RefreshCw size={13} />
                Atualizar
              </button>
            </div>

            {insights.length === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
                <div className="text-4xl mb-3">✅</div>
                <p className="text-slate-900 mb-1">Tudo em dia!</p>
                <p className="text-slate-500 text-sm">Não tenho alertas urgentes. Continue acompanhando que te aviso quando tiver novidades.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {insights.map((insight) => (
                  <InsightCard
                    key={insight.id}
                    insight={insight}
                    onDismiss={handleDismiss}
                    onFeedback={handleFeedback}
                  />
                ))}
              </div>
            )}
          </section>

          {/* Ações Sugeridas */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-slate-900">Ações Sugeridas</h3>
                <p className="text-xs text-slate-500">{acoesAtivas.length} tarefas pendentes hoje</p>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-violet-100 text-violet-700">
                {melStatsMock.acoesConcluidas}/{melStatsMock.acoesSugeridas} concluídas
              </span>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
              {acoesAtivas.length === 0 ? (
                <div className="p-6 text-center">
                  <div className="text-3xl mb-2">🎉</div>
                  <p className="text-slate-700 text-sm">Todas as tarefas concluídas!</p>
                </div>
              ) : (
                <div className="p-4">
                  {acoesAtivas.map((acao) => (
                    <AcaoItem
                      key={acao.id}
                      acao={acao}
                      onConcluir={handleConcluir}
                      onIgnorar={handleIgnorar}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>

        {/* ── Right sidebar ─────────────────── */}
        <div className="space-y-4">

          {/* WhatsApp Status */}
          <div className={`bg-white rounded-xl border p-4 ${whatsAppStatusMock.conectado ? "border-emerald-200" : "border-red-200"}`}>
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${whatsAppStatusMock.conectado ? "bg-emerald-100" : "bg-red-100"}`}>
                {whatsAppStatusMock.conectado ? (
                  <Wifi size={16} className="text-emerald-600" />
                ) : (
                  <WifiOff size={16} className="text-red-600" />
                )}
              </div>
              <div>
                <p className="text-slate-900 text-sm" style={{ fontWeight: 600 }}>WhatsApp</p>
                <p className={`text-xs ${whatsAppStatusMock.conectado ? "text-emerald-600" : "text-red-500"}`}>
                  {whatsAppStatusMock.conectado ? "Conectado" : "Desconectado"}
                </p>
              </div>
            </div>
            {whatsAppStatusMock.conectado && (
              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Número</span>
                  <span className="text-slate-700">{whatsAppStatusMock.numero}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Última sync</span>
                  <span className="text-slate-700">{whatsAppStatusMock.ultimaSincronizacao}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Msgs enviadas</span>
                  <span className="text-slate-700">{whatsAppStatusMock.mensagensEnviadas} este mês</span>
                </div>
              </div>
            )}
            <div className="flex gap-2">
              <button
                onClick={handleTestarWA}
                disabled={isTestingWA}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs border border-slate-200 hover:bg-slate-50 text-slate-700 transition-all disabled:opacity-50"
              >
                {isTestingWA ? (
                  <RefreshCw size={13} className="animate-spin" />
                ) : (
                  <Send size={13} />
                )}
                {isTestingWA ? "Enviando..." : "Testar"}
              </button>
              <button
                onClick={() => navigate("/mel/configuracoes")}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs border border-slate-200 hover:bg-slate-50 text-slate-700 transition-all"
              >
                <Settings size={13} />
                Gerenciar
              </button>
            </div>
          </div>

          {/* Ações rápidas */}
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-slate-900 text-sm mb-3" style={{ fontWeight: 600 }}>Ações Rápidas</p>
            <div className="space-y-2">
              {[
                { label: "Histórico de insights", icon: BookOpen, action: () => {} },
                { label: "Falar com MEL no WhatsApp", icon: MessageCircle, action: () => showToast("Abrindo WhatsApp... 📱") },
                { label: "Ajustar preferências", icon: Settings, action: () => navigate("/mel/configuracoes") },
              ].map((btn) => {
                const Icon = btn.icon;
                return (
                  <button
                    key={btn.label}
                    onClick={btn.action}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-slate-50 text-left transition-colors group"
                  >
                    <Icon size={16} className="text-slate-400 group-hover:text-violet-600 transition-colors" />
                    <span className="text-slate-700 text-xs group-hover:text-slate-900 transition-colors">{btn.label}</span>
                    <ChevronRight size={13} className="ml-auto text-slate-300 group-hover:text-slate-400 transition-colors" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Previsão do MEL */}
          <div
            className="rounded-xl p-4"
            style={{ background: "linear-gradient(135deg, #F5F3FF, #EDE9FE)" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={15} className="text-violet-600" />
              <p className="text-violet-900 text-sm" style={{ fontWeight: 600 }}>Previsão do MEL</p>
            </div>
            <p className="text-violet-800 text-xs leading-relaxed">
              Baseado nos seus últimos 30 dias, você deve vender em torno de <span style={{ fontWeight: 700 }}>R$ 1.350 amanhã</span>. Quinta-feira costuma ser seu melhor dia! 📈
            </p>
          </div>

          {/* Dica do dia */}
          <div className="bg-white rounded-xl border border-amber-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center">
                <Zap size={13} className="text-amber-600" />
              </div>
              <p className="text-slate-900 text-xs" style={{ fontWeight: 600 }}>Dica do dia</p>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Clientes que compram 3+ vezes têm 5x mais chance de fidelização. Identifique seus compradores frequentes e ofereça algo especial! 🎁
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
