import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ArrowLeft, Unlock, ChevronRight, Loader2,
  Clock, User, DollarSign, CheckCircle2, AlertCircle,
} from "lucide-react";
import { formatCurrency } from "./pdvMockData";

const OPERADORES = [
  { id: "op1", nome: "Maria Silva", cargo: "Operadora Principal" },
  { id: "op2", nome: "Ana Beatriz", cargo: "Atendente" },
  { id: "op3", nome: "Carlos Lima", cargo: "Vendedor" },
];

const TURNOS = [
  { id: "manha", nome: "Manhã", horario: "08:00 - 12:00" },
  { id: "tarde", nome: "Tarde", horario: "12:00 - 18:00" },
  { id: "noite", nome: "Noite", horario: "18:00 - 22:00" },
];

export function AberturaCaixaPage() {
  const navigate = useNavigate();
  const [operador, setOperador] = useState("");
  const [turno, setTurno] = useState("");
  const [valorAbertura, setValorAbertura] = useState("200");
  const [loading, setLoading] = useState(false);
  const [concluido, setConcluido] = useState(false);

  const handleAbrirCaixa = async () => {
    if (!operador || !turno) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setConcluido(true);
  };

  if (concluido) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-xl max-w-sm w-full overflow-hidden">
          <div className="px-6 py-8 text-center" style={{ background: "linear-gradient(135deg,#1B6B3A,#15803d)" }}>
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
              <Unlock size={30} className="text-white" />
            </div>
            <h2 className="text-white mb-1" style={{ fontWeight: 800, fontSize: "1.2rem" }}>Caixa Aberto!</h2>
            <p className="text-white/60 text-sm">Pronto para iniciar vendas</p>
          </div>
          <div className="p-6 space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-500 text-sm">Operador</span>
              <span className="text-slate-900 text-sm font-semibold">{OPERADORES.find(o => o.id === operador)?.nome}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 text-sm">Turno</span>
              <span className="text-slate-900 text-sm font-semibold">{TURNOS.find(t => t.id === turno)?.nome}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 text-sm">Valor de abertura</span>
              <span className="text-slate-900 text-sm font-semibold">{formatCurrency(Number(valorAbertura))}</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-slate-100">
              <span className="text-slate-500 text-sm">Horário</span>
              <span className="text-slate-900 text-sm font-semibold">{new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}</span>
            </div>
          </div>
          <div className="px-6 pb-6">
            <button onClick={() => navigate("/vendas/pdv")}
              className="w-full py-3 rounded-xl text-white text-sm font-bold"
              style={{ background: "linear-gradient(135deg,#1B6B3A,#15803d)" }}>
              Ir para o PDV
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-5 py-4 flex items-center gap-3">
        <button onClick={() => navigate("/dashboard")}
          className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
          <ArrowLeft size={16} className="text-slate-600" />
        </button>
        <div>
          <h1 className="text-slate-900" style={{ fontWeight: 700, fontSize: "1rem" }}>Abertura de Caixa</h1>
          <p className="text-slate-400 text-xs">Inicie o turno de vendas</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto p-4 sm:p-6 space-y-5">
        {/* Info Card */}
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-5 text-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-white/60 text-xs">Data e Hora</p>
              <p className="font-bold">{new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}</p>
              <p className="text-sm">{new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}</p>
            </div>
          </div>
        </div>

        {/* Operador */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h3 className="text-slate-900 text-sm mb-4" style={{ fontWeight: 700 }}>
            <User size={16} className="inline mr-2 text-emerald-600" />
            Selecione o Operador
          </h3>
          <div className="space-y-2">
            {OPERADORES.map(op => (
              <button
                key={op.id}
                onClick={() => setOperador(op.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${
                  operador === op.id 
                    ? "border-emerald-500 bg-emerald-50" 
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                  operador === op.id ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600"
                }`}>
                  {op.nome.charAt(0)}
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-slate-900">{op.nome}</p>
                  <p className="text-xs text-slate-500">{op.cargo}</p>
                </div>
                {operador === op.id && <CheckCircle2 size={20} className="text-emerald-600" />}
              </button>
            ))}
          </div>
        </div>

        {/* Turno */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h3 className="text-slate-900 text-sm mb-4" style={{ fontWeight: 700 }}>
            <Clock size={16} className="inline mr-2 text-emerald-600" />
            Selecione o Turno
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {TURNOS.map(t => (
              <button
                key={t.id}
                onClick={() => setTurno(t.id)}
                className={`p-3 rounded-xl border text-center transition-all ${
                  turno === t.id 
                    ? "border-emerald-500 bg-emerald-50" 
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <p className="font-semibold text-slate-900 text-sm">{t.nome}</p>
                <p className="text-xs text-slate-500 mt-1">{t.horario}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Valor de Abertura */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h3 className="text-slate-900 text-sm mb-4" style={{ fontWeight: 700 }}>
            <DollarSign size={16} className="inline mr-2 text-emerald-600" />
            Valor de Abertura (Troco)
          </h3>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">R$</span>
            <input
              type="number"
              value={valorAbertura}
              onChange={(e) => setValorAbertura(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-2xl font-bold text-slate-900 border-2 border-slate-200 rounded-xl outline-none focus:border-emerald-500"
              placeholder="0,00"
            />
          </div>
          <p className="text-xs text-slate-500 mt-2">Valor em dinheiro disponível no caixa para troco</p>
        </div>

        {/* Botão Abrir */}
        <button 
          onClick={handleAbrirCaixa}
          disabled={!operador || !turno || loading}
          className="w-full py-4 rounded-2xl text-white font-bold text-lg disabled:opacity-50 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          style={{ background: "linear-gradient(135deg,#1B6B3A,#15803d)" }}
        >
          {loading ? <><Loader2 size={20} className="animate-spin" /> Abrindo...</> : <><Unlock size={20} /> Abrir Caixa</>}
        </button>
      </div>
    </div>
  );
}
