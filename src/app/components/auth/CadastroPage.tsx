import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, Loader2, User, Mail, Phone, Building2, Lock, AlertCircle, CheckCircle2, Check } from "lucide-react";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  senha: string;
  confirmarSenha: string;
  termos: boolean;
}

function PasswordStrength({ senha }: { senha: string }) {
  const checks = [
    { label: "6+ caracteres", ok: senha.length >= 6 },
    { label: "Letra maiúscula", ok: /[A-Z]/.test(senha) },
    { label: "Número", ok: /[0-9]/.test(senha) },
  ];
  const score = checks.filter((c) => c.ok).length;
  const colors = ["bg-red-400", "bg-amber-400", "bg-emerald-500"];
  const labels = ["Fraca", "Média", "Forte"];

  if (!senha) return null;

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all ${i < score ? colors[score - 1] : "bg-slate-200"}`}
          />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500">{score > 0 ? labels[score - 1] : ""}</span>
        <div className="flex gap-2">
          {checks.map((c) => (
            <span key={c.label} className={`text-xs flex items-center gap-0.5 ${c.ok ? "text-emerald-600" : "text-slate-400"}`}>
              {c.ok ? <Check size={10} /> : "·"} {c.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  { title: "Seus dados", desc: "Quem vai usar a plataforma?" },
  { title: "Seu negócio", desc: "Conta pra gente sobre sua empresa" },
  { title: "Segurança", desc: "Crie uma senha forte" },
];

export function CadastroPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    senha: "",
    confirmarSenha: "",
    termos: false,
  });

  const set = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const formatPhone = (v: string) => {
    const nums = v.replace(/\D/g, "").slice(0, 11);
    if (nums.length <= 2) return nums;
    if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;
    return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`;
  };

  const validateStep = () => {
    const newErrors: Partial<FormData> = {};
    if (step === 0) {
      if (form.nome.length < 3) newErrors.nome = "Nome deve ter pelo menos 3 caracteres";
      if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "E-mail inválido";
      if (form.telefone.replace(/\D/g, "").length < 10) newErrors.telefone = "Telefone inválido";
    }
    if (step === 1) {
      if (form.empresa.length < 2) newErrors.empresa = "Nome da empresa deve ter pelo menos 2 caracteres";
    }
    if (step === 2) {
      if (form.senha.length < 6) newErrors.senha = "Senha deve ter mínimo 6 caracteres";
      if (form.senha !== form.confirmarSenha) newErrors.confirmarSenha = "As senhas não coincidem";
      if (!form.termos) newErrors.termos = "Você deve aceitar os termos";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    setStep((s) => s + 1);
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    setSuccess(true);
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h2 className="text-slate-900 mb-2" style={{ fontSize: "1.4rem", fontWeight: 700 }}>
          Conta criada! 🎉
        </h2>
        <p className="text-slate-500 text-sm mb-1">
          Bem-vindo(a) à UNIQ, <strong>{form.nome.split(" ")[0]}</strong>!
        </p>
        <p className="text-slate-400 text-sm">Redirecionando para o dashboard...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-slate-900" style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: 1.2 }}>
          Criar minha conta
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Rápido, simples e sem burocracia 🚀
        </p>
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-0 mb-8">
        {STEPS.map((s, i) => (
          <div key={i} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all"
                style={{
                  background: i < step ? "#1B6B3A" : i === step ? "#1B6B3A" : "#E2E8F0",
                  color: i <= step ? "white" : "#94A3B8",
                  fontWeight: 600,
                }}
              >
                {i < step ? <Check size={14} /> : i + 1}
              </div>
              <span
                className="text-xs mt-1 text-center leading-tight"
                style={{ color: i === step ? "#1B6B3A" : "#94A3B8", fontWeight: i === step ? 600 : 400 }}
              >
                {s.title}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className="flex-1 h-0.5 mx-2 mb-4 transition-all"
                style={{ background: i < step ? "#1B6B3A" : "#E2E8F0" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step description */}
      <p className="text-slate-600 text-sm mb-5" style={{ fontWeight: 500 }}>
        {STEPS[step].desc}
      </p>

      {/* Step 0: Dados pessoais */}
      {step === 0 && (
        <div className="space-y-4">
          <div>
            <label className="block text-slate-700 text-sm mb-1.5" style={{ fontWeight: 500 }}>Nome completo</label>
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={form.nome}
                onChange={(e) => set("nome", e.target.value)}
                placeholder="Seu nome completo"
                autoFocus
                className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white text-slate-900 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 ${errors.nome ? "border-red-400" : "border-slate-200"}`}
              />
            </div>
            {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
          </div>
          <div>
            <label className="block text-slate-700 text-sm mb-1.5" style={{ fontWeight: 500 }}>E-mail</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="seu@email.com"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white text-slate-900 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 ${errors.email ? "border-red-400" : "border-slate-200"}`}
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-slate-700 text-sm mb-1.5" style={{ fontWeight: 500 }}>WhatsApp</label>
            <div className="relative">
              <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="tel"
                value={form.telefone}
                onChange={(e) => set("telefone", formatPhone(e.target.value))}
                placeholder="(11) 99999-9999"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white text-slate-900 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 ${errors.telefone ? "border-red-400" : "border-slate-200"}`}
              />
            </div>
            {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone}</p>}
          </div>
        </div>
      )}

      {/* Step 1: Negócio */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="block text-slate-700 text-sm mb-1.5" style={{ fontWeight: 500 }}>Nome do seu negócio</label>
            <div className="relative">
              <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={form.empresa}
                onChange={(e) => set("empresa", e.target.value)}
                placeholder="Ex: Loja da Maria, Bar do João..."
                autoFocus
                className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white text-slate-900 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 ${errors.empresa ? "border-red-400" : "border-slate-200"}`}
              />
            </div>
            {errors.empresa && <p className="text-red-500 text-xs mt-1">{errors.empresa}</p>}
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <p className="text-emerald-800 text-sm" style={{ fontWeight: 600 }}>Dica da MEL</p>
                <p className="text-emerald-700 text-xs mt-0.5 leading-relaxed">
                  Use o nome que seus clientes já te conhecem! Isso vai aparecer na sua loja virtual e no WhatsApp.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-slate-500 text-xs">Você poderá configurar detalhes adicionais como CNPJ, endereço e segmento depois do cadastro.</p>
          </div>
        </div>
      )}

      {/* Step 2: Segurança */}
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="block text-slate-700 text-sm mb-1.5" style={{ fontWeight: 500 }}>Senha</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type={showSenha ? "text" : "password"}
                value={form.senha}
                onChange={(e) => set("senha", e.target.value)}
                placeholder="••••••••"
                autoFocus
                className={`w-full pl-10 pr-11 py-3 rounded-xl border bg-white text-slate-900 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 ${errors.senha ? "border-red-400" : "border-slate-200"}`}
              />
              <button type="button" onClick={() => setShowSenha(!showSenha)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                {showSenha ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <PasswordStrength senha={form.senha} />
            {errors.senha && <p className="text-red-500 text-xs mt-1">{errors.senha}</p>}
          </div>
          <div>
            <label className="block text-slate-700 text-sm mb-1.5" style={{ fontWeight: 500 }}>Confirmar senha</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type={showConfirmar ? "text" : "password"}
                value={form.confirmarSenha}
                onChange={(e) => set("confirmarSenha", e.target.value)}
                placeholder="••••••••"
                className={`w-full pl-10 pr-11 py-3 rounded-xl border bg-white text-slate-900 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 ${errors.confirmarSenha ? "border-red-400" : "border-slate-200"}`}
              />
              <button type="button" onClick={() => setShowConfirmar(!showConfirmar)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                {showConfirmar ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.confirmarSenha && <p className="text-red-500 text-xs mt-1">{errors.confirmarSenha}</p>}
          </div>
          <div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="termos"
                checked={form.termos}
                onChange={(e) => set("termos", e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 accent-emerald-600 cursor-pointer mt-0.5 shrink-0"
              />
              <label htmlFor="termos" className="text-slate-600 text-sm cursor-pointer leading-relaxed" style={{ fontWeight: 400 }}>
                Li e aceito os{" "}
                <a href="#" className="hover:underline" style={{ color: "#1B6B3A", fontWeight: 600 }}>Termos de Uso</a>
                {" "}e a{" "}
                <a href="#" className="hover:underline" style={{ color: "#1B6B3A", fontWeight: 600 }}>Política de Privacidade</a>
              </label>
            </div>
            {errors.termos && <p className="text-red-500 text-xs mt-1">{errors.termos}</p>}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-3 mt-8">
        {step > 0 && (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="flex-1 py-3.5 rounded-xl border border-slate-200 text-slate-700 text-sm hover:bg-slate-50 transition-colors"
            style={{ fontWeight: 600 }}
          >
            Voltar
          </button>
        )}
        {step < STEPS.length - 1 ? (
          <button
            onClick={handleNext}
            className="flex-1 py-3.5 rounded-xl text-white text-sm transition-all active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg, #1B6B3A, #15803d)", fontWeight: 600 }}
          >
            Próximo →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex-1 py-3.5 rounded-xl text-white text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70"
            style={{ background: "linear-gradient(135deg, #1B6B3A, #15803d)", fontWeight: 600 }}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Criando sua conta...
              </>
            ) : (
              "Criar minha conta 🚀"
            )}
          </button>
        )}
      </div>

      <p className="text-center text-slate-500 text-sm mt-6">
        Já tem conta?{" "}
        <Link to="/auth/login" className="hover:underline" style={{ color: "#1B6B3A", fontWeight: 600 }}>
          Entrar
        </Link>
      </p>
    </div>
  );
}
