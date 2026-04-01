import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ArrowLeft,
  Search,
  User,
  Scissors,
  Clock,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  X,
  Loader2,
  MessageCircle,
  Bell,
  DollarSign,
  Star,
  Plus,
  AlertTriangle,
  Zap,
} from "lucide-react";
import {
  SERVICOS,
  PROFISSIONAIS,
  CLIENTES_RECENTES,
  HORARIOS_COMERCIAIS,
  AGENDAMENTOS,
  MESES,
  DIAS_SEMANA_SHORT,
  getStatusConfig,
  formatCurrency,
  todayStr,
  addMinutes,
  SERVICO_CORES,
} from "./agendaMockData";

const HOJE = todayStr();

function getMiniCalDays(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  let startOffset = first.getDay() - 1;
  if (startOffset < 0) startOffset = 6;
  return {
    startOffset,
    daysInMonth: last.getDate(),
  };
}

export function NovoAgendamentoPage() {
  const navigate = useNavigate();

  // Step
  const [step, setStep] = useState(1);
  const STEPS = ["Cliente", "Serviço", "Data & Hora", "Confirmar"];

  // Cliente
  const [buscaCliente, setBuscaCliente] = useState("");
  const [clienteSelecionado, setClienteSelecionado] = useState<typeof CLIENTES_RECENTES[0] | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Serviço
  const [servicoSelecionado, setServicoSelecionado] = useState<typeof SERVICOS[0] | null>(null);

  // Profissional
  const [profSelecionado, setProfSelecionado] = useState(PROFISSIONAIS[0]);

  // Data
  const [selectedDate, setSelectedDate] = useState(HOJE);
  const [calViewMonth, setCalViewMonth] = useState(() => {
    const [y, m] = HOJE.split("-").map(Number);
    return { year: y, month: m - 1 };
  });

  // Hora
  const [selectedHora, setSelectedHora] = useState("");

  // Extras
  const [obs, setObs] = useState("");
  const [sendWhatsapp, setSendWhatsapp] = useState(true);
  const [sendLembrete, setSendLembrete] = useState(true);

  // Submit
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  // Busca cliente
  const clientesFiltrados = CLIENTES_RECENTES.filter(
    (c) =>
      c.nome.toLowerCase().includes(buscaCliente.toLowerCase()) ||
      c.telefone.includes(buscaCliente)
  );

  // Check if hora is busy
  const horaOcupada = (hora: string) => {
    if (!servicoSelecionado) return false;
    return AGENDAMENTOS.some(
      (a) =>
        a.data === selectedDate &&
        a.profissionalId === profSelecionado.id &&
        a.status !== "cancelado" &&
        a.horaInicio <= hora &&
        hora < a.horaFim
    );
  };

  const horaFim = selectedHora && servicoSelecionado
    ? addMinutes(selectedHora, servicoSelecionado.duracao)
    : "";

  const canNext = () => {
    if (step === 1) return !!clienteSelecionado;
    if (step === 2) return !!servicoSelecionado;
    if (step === 3) return !!selectedDate && !!selectedHora;
    return true;
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setDone(true);
  };

  // Mini calendar
  const { startOffset, daysInMonth } = getMiniCalDays(calViewMonth.year, calViewMonth.month);
  const calCells: (number | null)[] = [
    ...Array(startOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  const dateForCalDay = (day: number) =>
    `${calViewMonth.year}-${String(calViewMonth.month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  if (done) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-sm w-full text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 size={40} className="text-emerald-600" />
          </div>
          <h2 className="text-slate-900 mb-2" style={{ fontWeight: 800, fontSize: "1.2rem" }}>
            Agendamento criado! 🎉
          </h2>
          <p className="text-slate-500 text-sm mb-1">
            {clienteSelecionado?.nome} · {servicoSelecionado?.nome}
          </p>
          <p className="text-slate-700 text-sm mb-6" style={{ fontWeight: 600 }}>
            {selectedDate.split("-").reverse().join("/")} às {selectedHora}
          </p>
          {sendWhatsapp && (
            <div className="flex items-center gap-2 p-3 bg-green-50 rounded-xl mb-5 border border-green-100">
              <MessageCircle size={15} className="text-green-600 shrink-0" />
              <p className="text-green-700 text-xs" style={{ fontWeight: 500 }}>
                Confirmação enviada via WhatsApp para {clienteSelecionado?.telefone}
              </p>
            </div>
          )}
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/agenda")}
              className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm"
              style={{ fontWeight: 600 }}
            >
              Ver agenda
            </button>
            <button
              onClick={() => {
                setDone(false);
                setStep(1);
                setClienteSelecionado(null);
                setServicoSelecionado(null);
                setSelectedHora("");
                setObs("");
              }}
              className="flex-1 py-3 rounded-xl text-white text-sm"
              style={{ background: "linear-gradient(135deg, #1B6B3A, #15803d)", fontWeight: 600 }}
            >
              Novo agendamento
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate("/agenda")}
          className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft size={16} className="text-slate-600" />
        </button>
        <div>
          <h1 className="text-slate-900" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
            Novo Agendamento
          </h1>
          <p className="text-slate-500 text-xs">Passo {step} de {STEPS.length}</p>
        </div>
      </div>

      {/* Steps indicator */}
      <div className="flex items-center gap-0 mb-8 bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
        {STEPS.map((s, i) => {
          const isCompleted = i + 1 < step;
          const isActive = i + 1 === step;
          return (
            <div key={s} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs mb-1 transition-all"
                  style={{
                    background: isCompleted ? "#1B6B3A" : isActive ? "#F0FDF4" : "#F8FAFC",
                    color: isCompleted ? "white" : isActive ? "#1B6B3A" : "#CBD5E1",
                    border: isActive ? "2px solid #1B6B3A" : "2px solid transparent",
                    fontWeight: 700,
                  }}
                >
                  {isCompleted ? <CheckCircle2 size={14} /> : i + 1}
                </div>
                <span
                  className="text-[10px] whitespace-nowrap hidden sm:block"
                  style={{ color: isActive ? "#1B6B3A" : isCompleted ? "#64748B" : "#CBD5E1", fontWeight: isActive ? 600 : 400 }}
                >
                  {s}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className="h-0.5 flex-1 mx-1 rounded-full transition-all"
                  style={{ background: isCompleted ? "#1B6B3A" : "#E2E8F0" }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">

        {/* STEP 1: CLIENTE */}
        {step === 1 && (
          <div className="p-6">
            <h2 className="text-slate-900 mb-1" style={{ fontWeight: 700 }}>Selecionar Cliente</h2>
            <p className="text-slate-500 text-sm mb-5">Busque por nome ou telefone</p>

            {clienteSelecionado ? (
              <div className="flex items-center gap-4 p-4 rounded-2xl border-2 mb-6" style={{ borderColor: "#1B6B3A", background: "#F0FDF4" }}>
                <div className="w-12 h-12 rounded-2xl bg-emerald-200 flex items-center justify-center">
                  <User size={22} className="text-emerald-700" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-900" style={{ fontWeight: 700 }}>{clienteSelecionado.nome}</p>
                  <p className="text-slate-500 text-sm">{clienteSelecionado.telefone}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={10} className="text-amber-500" fill="#F59E0B" />
                    <span className="text-slate-400 text-[11px]">{clienteSelecionado.visitas} visitas anteriores</span>
                  </div>
                </div>
                <button
                  onClick={() => setClienteSelecionado(null)}
                  className="w-8 h-8 rounded-xl bg-white flex items-center justify-center hover:bg-slate-100 border border-slate-200"
                >
                  <X size={14} className="text-slate-500" />
                </button>
              </div>
            ) : (
              <div className="relative mb-6">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={buscaCliente}
                  onChange={(e) => { setBuscaCliente(e.target.value); setShowDropdown(true); }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="Buscar cliente por nome ou telefone..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 text-slate-900 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-slate-50"
                  autoFocus
                />
                {showDropdown && buscaCliente && (
                  <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl border border-slate-200 shadow-xl z-50 overflow-hidden">
                    {clientesFiltrados.length === 0 ? (
                      <div className="p-4 text-center text-slate-400 text-sm">Nenhum cliente encontrado</div>
                    ) : (
                      clientesFiltrados.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => { setClienteSelecionado(c); setBuscaCliente(""); setShowDropdown(false); }}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left border-b border-slate-50 last:border-b-0"
                        >
                          <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                            <User size={16} className="text-slate-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-slate-900 text-sm" style={{ fontWeight: 600 }}>{c.nome}</p>
                            <p className="text-slate-400 text-xs">{c.telefone}</p>
                          </div>
                          <span className="text-slate-400 text-[10px]">{c.visitas} visitas</span>
                        </button>
                      ))
                    )}
                    <div className="p-3 border-t border-slate-100 bg-slate-50">
                      <button className="flex items-center gap-2 text-emerald-700 text-xs w-full" style={{ fontWeight: 600 }}>
                        <Plus size={14} />
                        Cadastrar novo cliente
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Recentes */}
            {!clienteSelecionado && (
              <div>
                <p className="text-slate-500 text-xs mb-3" style={{ fontWeight: 600 }}>CLIENTES RECENTES</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {CLIENTES_RECENTES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setClienteSelecionado(c)}
                      className="flex flex-col items-center p-3 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all text-center group"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-emerald-200 flex items-center justify-center mb-2 transition-colors">
                        <User size={18} className="text-slate-500 group-hover:text-emerald-700" />
                      </div>
                      <p className="text-slate-800 text-xs truncate w-full" style={{ fontWeight: 600 }}>
                        {c.nome.split(" ")[0]}
                      </p>
                      <p className="text-slate-400 text-[10px]">{c.visitas}x</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 2: SERVIÇO */}
        {step === 2 && (
          <div className="p-6">
            <h2 className="text-slate-900 mb-1" style={{ fontWeight: 700 }}>Escolher Serviço</h2>
            <p className="text-slate-500 text-sm mb-5">Selecione o serviço desejado</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {SERVICOS.map((s) => {
                const isSelected = servicoSelecionado?.id === s.id;
                const cor = SERVICO_CORES[s.categoria] || "#8B5CF6";
                return (
                  <button
                    key={s.id}
                    onClick={() => setServicoSelecionado(s)}
                    className="flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left"
                    style={{
                      borderColor: isSelected ? cor : "#E2E8F0",
                      background: isSelected ? `${cor}10` : "white",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${cor}20` }}
                    >
                      <Scissors size={20} style={{ color: cor }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-900 text-sm" style={{ fontWeight: 700 }}>
                        {s.nome}
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-slate-500 text-xs">
                          <Clock size={11} />
                          {s.duracao}min
                        </span>
                        <span className="text-slate-700 text-xs" style={{ fontWeight: 600 }}>
                          {formatCurrency(s.valor)}
                        </span>
                      </div>
                    </div>
                    {isSelected && (
                      <CheckCircle2 size={18} style={{ color: cor }} className="shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Profissional */}
            {servicoSelecionado && (
              <div>
                <p className="text-slate-700 text-sm mb-3" style={{ fontWeight: 600 }}>Profissional</p>
                <div className="flex gap-3 flex-wrap">
                  {PROFISSIONAIS.map((p) => {
                    const isSelected = profSelecionado.id === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setProfSelecionado(p)}
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border-2 transition-all"
                        style={{
                          borderColor: isSelected ? p.cor : "#E2E8F0",
                          background: isSelected ? `${p.cor}10` : "white",
                        }}
                      >
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs shrink-0"
                          style={{ background: p.cor, fontWeight: 700 }}
                        >
                          {p.nome.charAt(0)}
                        </div>
                        <div className="text-left">
                          <p className="text-slate-900 text-xs" style={{ fontWeight: 600 }}>{p.nome.split(" ")[0]}</p>
                          <p className="text-slate-400 text-[10px]">{p.especialidade}</p>
                        </div>
                        {isSelected && <CheckCircle2 size={14} style={{ color: p.cor }} />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 3: DATA & HORA */}
        {step === 3 && (
          <div className="p-6">
            <h2 className="text-slate-900 mb-1" style={{ fontWeight: 700 }}>Data e Horário</h2>
            <p className="text-slate-500 text-sm mb-5">Escolha data e horário disponível</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Calendar */}
              <div>
                <p className="text-slate-700 text-xs mb-3" style={{ fontWeight: 600 }}>DATA</p>
                <div className="border border-slate-200 rounded-2xl p-4">
                  {/* Month nav */}
                  <div className="flex items-center justify-between mb-3">
                    <button
                      onClick={() => setCalViewMonth((v) => { const d = new Date(v.year, v.month - 1); return { year: d.getFullYear(), month: d.getMonth() }; })}
                      className="w-7 h-7 rounded-lg hover:bg-slate-100 flex items-center justify-center"
                    >
                      <ChevronLeft size={14} className="text-slate-500" />
                    </button>
                    <p className="text-slate-800 text-xs" style={{ fontWeight: 700 }}>
                      {MESES[calViewMonth.month]} {calViewMonth.year}
                    </p>
                    <button
                      onClick={() => setCalViewMonth((v) => { const d = new Date(v.year, v.month + 1); return { year: d.getFullYear(), month: d.getMonth() }; })}
                      className="w-7 h-7 rounded-lg hover:bg-slate-100 flex items-center justify-center"
                    >
                      <ChevronRight size={14} className="text-slate-500" />
                    </button>
                  </div>
                  <div className="grid grid-cols-7 mb-1">
                    {DIAS_SEMANA_SHORT.map((d) => (
                      <div key={d} className="text-center text-[9px] text-slate-400 py-1" style={{ fontWeight: 600 }}>{d}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-0.5">
                    {calCells.map((day, i) => {
                      if (!day) return <div key={`e${i}`} />;
                      const dStr = dateForCalDay(day);
                      const isToday = dStr === HOJE;
                      const isPast = dStr < HOJE;
                      const isSelected = dStr === selectedDate;
                      return (
                        <button
                          key={dStr}
                          onClick={() => { if (!isPast) { setSelectedDate(dStr); setSelectedHora(""); } }}
                          disabled={isPast}
                          className="w-full aspect-square rounded-lg text-[11px] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                          style={{
                            background: isSelected ? "#1B6B3A" : isToday ? "#F0FDF4" : "transparent",
                            color: isSelected ? "white" : isToday ? "#1B6B3A" : "#475569",
                            fontWeight: isToday || isSelected ? 700 : 400,
                            border: isToday && !isSelected ? "1.5px solid #1B6B3A" : "1.5px solid transparent",
                          }}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Time slots */}
              <div>
                <p className="text-slate-700 text-xs mb-3" style={{ fontWeight: 600 }}>
                  HORÁRIOS DISPONÍVEIS · {selectedDate.split("-").reverse().join("/")}
                </p>
                <div className="grid grid-cols-3 gap-2 max-h-80 overflow-y-auto pr-1">
                  {HORARIOS_COMERCIAIS.map((hora) => {
                    const ocupado = horaOcupada(hora);
                    const isSelected = selectedHora === hora;
                    return (
                      <button
                        key={hora}
                        onClick={() => !ocupado && setSelectedHora(hora)}
                        disabled={ocupado}
                        className="py-2.5 rounded-xl text-xs transition-all border"
                        style={{
                          background: isSelected ? "#1B6B3A" : ocupado ? "#F8FAFC" : "white",
                          color: isSelected ? "white" : ocupado ? "#CBD5E1" : "#475569",
                          borderColor: isSelected ? "#1B6B3A" : ocupado ? "#F1F5F9" : "#E2E8F0",
                          fontWeight: isSelected ? 700 : 400,
                          cursor: ocupado ? "not-allowed" : "pointer",
                          textDecoration: ocupado ? "line-through" : "none",
                        }}
                      >
                        {hora}
                      </button>
                    );
                  })}
                </div>

                {/* Preview */}
                {selectedHora && servicoSelecionado && (
                  <div
                    className="mt-4 p-3.5 rounded-xl border"
                    style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}
                  >
                    <p className="text-emerald-800 text-xs mb-2" style={{ fontWeight: 700 }}>
                      ✅ Horário disponível!
                    </p>
                    <div className="flex items-center gap-4 text-emerald-700 text-xs">
                      <div>
                        <p className="text-emerald-600 text-[10px]">Início</p>
                        <p style={{ fontWeight: 700 }}>{selectedHora}</p>
                      </div>
                      <div className="flex-1 h-px bg-emerald-200" />
                      <div>
                        <p className="text-emerald-600 text-[10px]">Fim estimado</p>
                        <p style={{ fontWeight: 700 }}>{horaFim}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: CONFIRMAR */}
        {step === 4 && (
          <div className="p-6">
            <h2 className="text-slate-900 mb-1" style={{ fontWeight: 700 }}>Confirmar Agendamento</h2>
            <p className="text-slate-500 text-sm mb-5">Revise e confirme os detalhes</p>

            {/* Summary card */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden mb-5">
              {/* Header */}
              <div className="px-5 py-4 flex items-center gap-4"
                style={{ background: "linear-gradient(135deg, #0B1D2E, #0F3460)" }}>
                <div className="w-12 h-12 rounded-2xl bg-emerald-900/50 flex items-center justify-center">
                  <Calendar size={22} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-white/60 text-xs">Agendamento</p>
                  <p className="text-white" style={{ fontWeight: 700 }}>
                    {selectedDate.split("-").reverse().join("/")} às {selectedHora}
                  </p>
                  <p className="text-emerald-400 text-xs">{selectedHora} – {horaFim} · {servicoSelecionado?.duracao}min</p>
                </div>
              </div>

              {/* Details */}
              <div className="divide-y divide-slate-100">
                {[
                  {
                    icon: User,
                    label: "Cliente",
                    value: clienteSelecionado?.nome,
                    sub: clienteSelecionado?.telefone,
                    color: "#8B5CF6",
                  },
                  {
                    icon: Scissors,
                    label: "Serviço",
                    value: servicoSelecionado?.nome,
                    sub: `${servicoSelecionado?.duracao}min · ${formatCurrency(servicoSelecionado?.valor || 0)}`,
                    color: SERVICO_CORES[servicoSelecionado?.categoria || ""] || "#8B5CF6",
                  },
                  {
                    icon: User,
                    label: "Profissional",
                    value: profSelecionado.nome,
                    sub: profSelecionado.especialidade,
                    color: profSelecionado.cor,
                  },
                  {
                    icon: DollarSign,
                    label: "Valor",
                    value: formatCurrency(servicoSelecionado?.valor || 0),
                    sub: "Preço estimado",
                    color: "#10B981",
                  },
                ].map((row) => {
                  const Icon = row.icon;
                  return (
                    <div key={row.label} className="flex items-center gap-4 px-5 py-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${row.color}15` }}
                      >
                        <Icon size={16} style={{ color: row.color }} />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-400 text-[10px]">{row.label}</p>
                        <p className="text-slate-900 text-sm" style={{ fontWeight: 600 }}>{row.value}</p>
                      </div>
                      <p className="text-slate-400 text-xs">{row.sub}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Observações */}
            <div className="mb-5">
              <label className="block text-slate-700 text-xs mb-2" style={{ fontWeight: 500 }}>
                Observações (opcional)
              </label>
              <textarea
                value={obs}
                onChange={(e) => setObs(e.target.value)}
                placeholder="Preferências do cliente, alergias, informações importantes..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm outline-none focus:border-emerald-500 resize-none"
              />
            </div>

            {/* Notificações */}
            <div className="space-y-3">
              <p className="text-slate-700 text-xs" style={{ fontWeight: 600 }}>NOTIFICAÇÕES</p>
              {[
                { label: "Enviar confirmação por WhatsApp", sub: `Para ${clienteSelecionado?.telefone}`, icon: MessageCircle, val: sendWhatsapp, set: setSendWhatsapp },
                { label: "Lembrete 24h antes", sub: "Enviado automaticamente pelo sistema", icon: Bell, val: sendLembrete, set: setSendLembrete },
              ].map((n) => {
                const Icon = n.icon;
                return (
                  <div key={n.label} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50">
                    <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <Icon size={16} className={n.val ? "text-emerald-600" : "text-slate-400"} />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-800 text-xs" style={{ fontWeight: 600 }}>{n.label}</p>
                      <p className="text-slate-400 text-[10px]">{n.sub}</p>
                    </div>
                    <button
                      onClick={() => n.set(!n.val)}
                      className="w-10 h-6 rounded-full transition-all relative"
                      style={{ background: n.val ? "#1B6B3A" : "#E2E8F0" }}
                    >
                      <div
                        className="absolute w-4 h-4 bg-white rounded-full top-1 transition-all shadow-sm"
                        style={{ left: n.val ? "calc(100% - 20px)" : "4px" }}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex gap-3">
          {step > 1 && (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm"
              style={{ fontWeight: 500 }}
            >
              <ChevronLeft size={15} />
              Voltar
            </button>
          )}
          {step === 1 && (
            <button
              onClick={() => navigate("/agenda")}
              className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm"
              style={{ fontWeight: 500 }}
            >
              Cancelar
            </button>
          )}

          {step < 4 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext()}
              className="flex-1 py-3 rounded-xl text-white text-sm disabled:opacity-40 flex items-center justify-center gap-2"
              style={{ background: "linear-gradient(135deg, #1B6B3A, #15803d)", fontWeight: 600 }}
            >
              Próximo
              <ChevronRight size={15} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex-1 py-3 rounded-xl text-white text-sm disabled:opacity-70 flex items-center justify-center gap-2"
              style={{ background: "linear-gradient(135deg, #1B6B3A, #15803d)", fontWeight: 600 }}
            >
              {loading ? (
                <><Loader2 size={15} className="animate-spin" />Criando agendamento...</>
              ) : (
                <><Zap size={15} />Confirmar Agendamento</>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
