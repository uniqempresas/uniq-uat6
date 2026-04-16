import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ArrowLeft, Unlock, ChevronRight, Loader2,
  Clock, User, DollarSign, CheckCircle2, AlertCircle,
} from "lucide-react";
// Usar placeholder até ter a imagem real
const melPortrait = "https://api.dicebear.com/7.x/avataaars/svg?seed=MEL";
import { formatCurrency } from "./pdvMockData";

const OPERADORES = [
  { id: "op1", nome: "Maria Silva", cargo: "Operadora Principal" },
  { id: "op2", nome: "Ana Beatriz", cargo: "Atendente" },
  { id: "op3", nome: "Carlos Lima", cargo: "Vendedor" },
];

const VALORES_RAPIDOS = [50, 100, 150, 200, 250, 300];

function Numpad({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const press = (k: string) => {
    if (k === "C") { onChange("0"); return; }
    if (k === "⌫") { onChange(value.length <= 1 ? "0" : value.slice(0, -1)); return; }
    if (k === "," && value.includes(",")) return;
    if (k === "," && value === "0") { onChange("0,"); return; }
    const next = value === "0" && k !== "," ? k : value + k;
    if (next.length > 10) return;
    onChange(next);
  };
  const keys = ["7","8","9","4","5","6","1","2","3","C","0","⌫"];
  return (
    <div className="grid grid-cols-3 gap-2">
      {keys.map(k => (
        <button key={k} onClick={() => press(k)}
          className="h-14 rounded-xl text-xl transition-all active:scale-95 touch-manipulation"
          style={{
            background: k === "C" ? "#FEF2F2" : k === "⌫" ? "#FFFBEB" : "#F8FAFC",
            color: k === "C" ? "#EF4444" : k === "⌫" ? "#F59E0B" : "#1E293B",
            fontWeight: 700,
          }}>
          {k}
        </button>
      ))}
    </div>
  );
}

export function AberturaCaixaPage() {
  const navigate = useNavigate();
  const [operador, setOperador] = useState(OPERADORES[0]);
  const [valorInicial, setValorInicial] = useState("0");
  const [obs, setObs] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const now = new Date();
  const hora = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  const data = now.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const valNum = parseFloat(valorInicial.replace(",", ".")) || 0;

  const handleAbrir = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-sm w-full text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
            <Unlock size={36} className="text-emerald-600" />
          </div>
          <h2 className="text-slate-900 mb-1" style={{ fontWeight: 800, fontSize: "1.3rem" }}>Caixa Aberto! ✅</h2>
          <p className="text-slate-500 text-sm mb-2">{operador.nome} · {hora}</p>
          <div className="inline-block px-4 py-2 rounded-xl mb-6" style={{ background: "#F0FDF4" }}>
            <p className="text-emerald-700 text-sm">Troco inicial: <span style={{ fontWeight: 800 }}>{formatCurrency(valNum)}</span></p>
          </div>
          <button onClick={() => navigate("/vendas/pdv")}
            className="w-full py-4 rounded-2xl text-white"
            style={{ background: "linear-gradient(135deg,#1B6B3A,#15803d)", fontWeight: 800, fontSize: "1.1rem" }}>
            Iniciar Vendas →
          </button>
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
          <p className="text-slate-400 text-xs capitalize">{data}</p>
        </div>
      </div>

      <div className="max-w-xl mx-auto p-4 sm:p-6">
        {/* MEL card */}
        <div className="rounded-2xl p-4 mb-5 flex items-start gap-3"
          style={{ background: "linear-gradient(135deg,#0B1D2E,#0F3460)" }}>
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-amber-400 shrink-0">
            <img src={melPortrait} alt="MEL" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-white text-xs mb-1" style={{ fontWeight: 700 }}>MEL · Bom dia! 👋</p>
            <p className="text-white/70 text-xs leading-relaxed">
              Ontem você faturou <strong className="text-emerald-300">R$ 580,00</strong> com 7 vendas.
              Hoje o objetivo é <strong className="text-amber-300">R$ 650,00</strong>. Você consegue!
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          {/* Caixa info */}
          <div className="flex items-center gap-4 px-5 py-4 border-b border-slate-100"
            style={{ background: "linear-gradient(135deg,#F0FDF4,#ECFDF5)" }}>
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center">
              <Unlock size={22} className="text-white" />
            </div>
            <div>
              <p className="text-slate-600 text-xs">Caixa #1</p>
              <p className="text-slate-900 text-sm" style={{ fontWeight: 700 }}>Abertura do dia</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Clock size={11} className="text-slate-400" />
                <span className="text-slate-400 text-xs">{hora}</span>
              </div>
            </div>
          </div>

          <div className="p-5 space-y-5">
            {/* Operador */}
            <div>
              <label className="text-slate-700 text-xs mb-2 block" style={{ fontWeight: 600 }}>
                <User size={13} className="inline mr-1" />Operador
              </label>
              <div className="flex gap-2">
                {OPERADORES.map(op => (
                  <button key={op.id} onClick={() => setOperador(op)}
                    className="flex-1 flex flex-col items-center p-3 rounded-xl border-2 transition-all text-center"
                    style={{ borderColor: operador.id === op.id ? "#1B6B3A" : "#E2E8F0", background: operador.id === op.id ? "#F0FDF4" : "white" }}>
                    <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-sm mb-1"
                      style={{ background: operador.id === op.id ? "#D1FAE5" : "#F1F5F9", fontWeight: 700, color: operador.id === op.id ? "#1B6B3A" : "#64748B" }}>
                      {op.nome.charAt(0)}
                    </div>
                    <p className="text-xs leading-tight" style={{ fontWeight: operador.id === op.id ? 700 : 400, color: operador.id === op.id ? "#1B6B3A" : "#64748B" }}>
                      {op.nome.split(" ")[0]}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Valor inicial */}
            <div>
              <label className="text-slate-700 text-xs mb-2 block" style={{ fontWeight: 600 }}>
                <DollarSign size={13} className="inline mr-1" />Troco inicial (dinheiro no caixa)
              </label>

              {/* Display value */}
              <div className="flex items-center justify-center py-4 mb-3 rounded-2xl"
                style={{ background: "linear-gradient(135deg,#0B1D2E,#0F3460)" }}>
                <span className="text-white/50 text-xl mr-2">R$</span>
                <span className="text-white" style={{ fontWeight: 900, fontSize: "2.5rem", lineHeight: 1 }}>{valorInicial}</span>
              </div>

              {/* Quick values */}
              <div className="grid grid-cols-6 gap-1.5 mb-3">
                {VALORES_RAPIDOS.map(v => (
                  <button key={v} onClick={() => setValorInicial(String(v))}
                    className="py-2 rounded-xl text-xs border transition-all"
                    style={{
                      background: valNum === v ? "#F0FDF4" : "#F8FAFC",
                      borderColor: valNum === v ? "#1B6B3A" : "#E2E8F0",
                      color: valNum === v ? "#1B6B3A" : "#64748B",
                      fontWeight: valNum === v ? 700 : 400,
                    }}>
                    {v}
                  </button>
                ))}
              </div>

              {/* Numpad */}
              <Numpad value={valorInicial} onChange={setValorInicial} />
              <button onClick={() => { setValorInicial(prev => prev.includes(",") ? prev : prev + ","); }}
                className="w-full mt-2 py-2 rounded-xl border border-slate-200 text-slate-500 text-sm" style={{ fontWeight: 500 }}>
                , (Centavos)
              </button>
            </div>

            {/* Obs */}
            <div>
              <label className="text-slate-700 text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Observações (opcional)</label>
              <textarea value={obs} onChange={e => setObs(e.target.value)} rows={2}
                placeholder="Anotações sobre o caixa..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm outline-none focus:border-emerald-500 resize-none" />
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 py-4 border-t border-slate-100 bg-slate-50">
            <button onClick={handleAbrir} disabled={loading}
              className="w-full py-4 rounded-2xl text-white flex items-center justify-center gap-2 disabled:opacity-70 active:scale-[0.98] transition-all"
              style={{ background: "linear-gradient(135deg,#1B6B3A,#15803d)", fontWeight: 800, fontSize: "1.1rem", boxShadow: "0 6px 20px rgba(27,107,58,0.35)" }}>
              {loading ? <><Loader2 size={20} className="animate-spin" /> Abrindo...</> : <><Unlock size={20} /> Abrir Caixa</>}
            </button>
            <p className="text-center text-slate-400 text-xs mt-2">
              Troco inicial: <span style={{ fontWeight: 700 }}>{formatCurrency(valNum)}</span> · Operador: {operador.nome}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
