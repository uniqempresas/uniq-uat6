import { useState, useRef } from "react";
import {
  Building2,
  MapPin,
  Phone,
  Globe,
  Settings,
  Save,
  RefreshCw,
  Upload,
  X,
  CheckCircle,
  MessageCircle,
  Instagram,
  Wifi,
  ChevronDown,
  AlertCircle,
} from "lucide-react";

// ─── Toast ────────────────────────────────────────────────────────────────────

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

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
      <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center">
        <Icon size={18} className="text-emerald-700" />
      </div>
      <div>
        <h3 className="text-slate-900">{title}</h3>
        {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
      </div>
    </div>
  );
}

// ─── Form Field ───────────────────────────────────────────────────────────────

function FormField({
  label, required, children, hint,
}: { label: string; required?: boolean; children: React.ReactNode; hint?: string }) {
  return (
    <div>
      <label className="text-sm text-slate-700 block mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-slate-400 mt-1">{hint}</p>}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full text-sm border border-slate-200 rounded-lg px-3 py-2.5 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-300 placeholder-slate-400 ${props.className || ""}`}
    />
  );
}

function Select({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        {...props}
        className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2.5 pr-8 appearance-none bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
      >
        {children}
      </select>
      <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const ESTADOS_BR = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];

export function EmpresaPage() {
  const fileRef = useRef<HTMLInputElement>(null);

  // Dados empresa
  const [razaoSocial, setRazaoSocial] = useState("Loja da Maria Comércio LTDA");
  const [nomeFantasia, setNomeFantasia] = useState("Loja da Maria");
  const [cnpj, setCnpj] = useState("12.345.678/0001-90");
  const [ie, setIe] = useState("");
  const [im, setIm] = useState("");
  const [logo, setLogo] = useState<string | null>(null);

  // Contato
  const [telefone, setTelefone] = useState("(11) 3456-7890");
  const [celular, setCelular] = useState("(11) 99876-5432");
  const [email, setEmail] = useState("contato@lojadamaria.com");
  const [site, setSite] = useState("www.lojadamaria.com");
  const [instagram, setInstagram] = useState("@lojadamaria");
  const [facebook, setFacebook] = useState("");

  // Endereço
  const [cep, setCep] = useState("01310-100");
  const [logradouro, setLogradouro] = useState("Av. Paulista");
  const [numero, setNumero] = useState("1000");
  const [complemento, setComplemento] = useState("Sala 42");
  const [bairro, setBairro] = useState("Bela Vista");
  const [cidade, setCidade] = useState("São Paulo");
  const [estado, setEstado] = useState("SP");

  // Preferências
  const [moeda, setMoeda] = useState("BRL");
  const [idioma, setIdioma] = useState("pt-BR");
  const [fusoHorario, setFusoHorario] = useState("America/Sao_Paulo");
  const [formatoData, setFormatoData] = useState("DD/MM/AAAA");

  // Notificações gerais
  const [notifSistema, setNotifSistema] = useState(true);
  const [resumoDiario, setResumoDiario] = useState(true);
  const [alertasSeguranca, setAlertasSeguranca] = useState(true);

  // UI
  const [saving, setSaving] = useState(false);
  const [loadingCep, setLoadingCep] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const handleSalvar = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      showToast("Dados da empresa atualizados! ✅");
    }, 1500);
  };

  const handleCepBlur = () => {
    if (cep.replace(/\D/g, "").length === 8) {
      setLoadingCep(true);
      setTimeout(() => {
        setLoadingCep(false);
        // Simula autocompletar
        setLogradouro("Av. Paulista");
        setBairro("Bela Vista");
        setCidade("São Paulo");
        setEstado("SP");
        showToast("Endereço encontrado! 📍");
      }, 1200);
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogo(url);
      showToast("Logo atualizado com sucesso! 🖼️");
    }
  };

  const Toggle = ({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) => (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className="relative w-11 h-6 rounded-full transition-all duration-200"
      style={{ background: value ? "#1B6B3A" : "#CBD5E1" }}
    >
      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${value ? "translate-x-6" : "translate-x-1"}`} />
    </button>
  );

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}

      {/* Header */}
      <div className="mb-6 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-slate-900 mb-1">Configurações da Empresa</h1>
          <p className="text-sm text-slate-600">Dados cadastrais, contato e preferências da plataforma</p>
        </div>
        <button
          onClick={handleSalvar}
          disabled={saving}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-white transition-all disabled:opacity-70 shrink-0"
          style={{ background: "#1B6B3A" }}
        >
          {saving ? <RefreshCw size={15} className="animate-spin" /> : <Save size={15} />}
          {saving ? "Salvando..." : "Salvar alterações"}
        </button>
      </div>

      <div className="space-y-6">

        {/* ── Dados da Empresa ── */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <SectionHeader icon={Building2} title="Dados da Empresa" subtitle="Informações legais e de identificação" />

          {/* Logo Upload */}
          <div className="mb-5">
            <label className="text-sm text-slate-700 block mb-2">Logo da Empresa</label>
            <div className="flex items-center gap-4">
              <div
                className="w-20 h-20 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center bg-slate-50 overflow-hidden cursor-pointer hover:border-emerald-300 transition-colors"
                onClick={() => fileRef.current?.click()}
              >
                {logo ? (
                  <img src={logo} alt="Logo" className="w-full h-full object-contain p-1" />
                ) : (
                  <div className="text-center">
                    <Upload size={20} className="text-slate-300 mx-auto mb-1" />
                    <span className="text-xs text-slate-400">Upload</span>
                  </div>
                )}
              </div>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
              <div>
                <button
                  onClick={() => fileRef.current?.click()}
                  className="text-sm px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 transition-all block mb-2"
                >
                  Escolher arquivo
                </button>
                {logo && (
                  <button
                    onClick={() => setLogo(null)}
                    className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1"
                  >
                    <X size={12} /> Remover logo
                  </button>
                )}
                <p className="text-xs text-slate-400 mt-1">JPG ou PNG · máximo 2MB</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <FormField label="Razão Social" required>
                <Input value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} placeholder="Nome jurídico completo" />
              </FormField>
            </div>
            <FormField label="Nome Fantasia" required>
              <Input value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} placeholder="Como aparece para clientes" />
            </FormField>
            <FormField label="CNPJ" required>
              <Input value={cnpj} onChange={(e) => setCnpj(e.target.value)} placeholder="00.000.000/0000-00" />
            </FormField>
            <FormField label="Inscrição Estadual">
              <Input value={ie} onChange={(e) => setIe(e.target.value)} placeholder="Opcional" />
            </FormField>
            <FormField label="Inscrição Municipal">
              <Input value={im} onChange={(e) => setIm(e.target.value)} placeholder="Opcional" />
            </FormField>
          </div>
        </div>

        {/* ── Informações de Contato ── */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <SectionHeader icon={Phone} title="Informações de Contato" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField label="Telefone Comercial" required>
              <Input value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="(00) 0000-0000" />
            </FormField>
            <FormField label="Celular / WhatsApp" required>
              <Input value={celular} onChange={(e) => setCelular(e.target.value)} placeholder="(00) 00000-0000" />
            </FormField>
            <FormField label="Email Comercial" required>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="contato@suaempresa.com" />
            </FormField>
            <FormField label="Site">
              <Input value={site} onChange={(e) => setSite(e.target.value)} placeholder="www.suaempresa.com" />
            </FormField>
            <FormField label="Instagram">
              <div className="relative">
                <Instagram size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="@suaempresa" className="pl-9" />
              </div>
            </FormField>
            <FormField label="Facebook">
              <Input value={facebook} onChange={(e) => setFacebook(e.target.value)} placeholder="facebook.com/suaempresa" />
            </FormField>
          </div>
        </div>

        {/* ── Endereço ── */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <SectionHeader icon={MapPin} title="Endereço" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField label="CEP" required hint="Digite o CEP para preencher automaticamente">
              <div className="relative">
                <Input
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  onBlur={handleCepBlur}
                  placeholder="00000-000"
                />
                {loadingCep && (
                  <RefreshCw size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 animate-spin" />
                )}
              </div>
            </FormField>
            <FormField label="Estado" required>
              <Select value={estado} onChange={(e) => setEstado(e.target.value)}>
                {ESTADOS_BR.map((uf) => <option key={uf} value={uf}>{uf}</option>)}
              </Select>
            </FormField>
            <div className="sm:col-span-2">
              <FormField label="Logradouro" required>
                <Input value={logradouro} onChange={(e) => setLogradouro(e.target.value)} placeholder="Rua, Avenida, etc." />
              </FormField>
            </div>
            <FormField label="Número" required>
              <Input value={numero} onChange={(e) => setNumero(e.target.value)} placeholder="Nº" />
            </FormField>
            <FormField label="Complemento">
              <Input value={complemento} onChange={(e) => setComplemento(e.target.value)} placeholder="Sala, Apto, etc." />
            </FormField>
            <FormField label="Bairro" required>
              <Input value={bairro} onChange={(e) => setBairro(e.target.value)} placeholder="Bairro" />
            </FormField>
            <FormField label="Cidade" required>
              <Input value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder="Cidade" />
            </FormField>
          </div>
        </div>

        {/* ── Preferências da Plataforma ── */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <SectionHeader icon={Settings} title="Preferências da Plataforma" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField label="Moeda" required>
              <Select value={moeda} onChange={(e) => setMoeda(e.target.value)}>
                <option value="BRL">Real (R$)</option>
                <option value="USD">Dólar (US$)</option>
                <option value="EUR">Euro (€)</option>
              </Select>
            </FormField>
            <FormField label="Idioma" required>
              <Select value={idioma} onChange={(e) => setIdioma(e.target.value)}>
                <option value="pt-BR">Português (Brasil)</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </Select>
            </FormField>
            <FormField label="Fuso Horário" required>
              <Select value={fusoHorario} onChange={(e) => setFusoHorario(e.target.value)}>
                <option value="America/Sao_Paulo">Brasília (GMT-3)</option>
                <option value="America/Manaus">Manaus (GMT-4)</option>
                <option value="America/Belem">Belém (GMT-3)</option>
                <option value="America/Fortaleza">Fortaleza (GMT-3)</option>
              </Select>
            </FormField>
            <FormField label="Formato de Data" required>
              <Select value={formatoData} onChange={(e) => setFormatoData(e.target.value)}>
                <option value="DD/MM/AAAA">DD/MM/AAAA (padrão BR)</option>
                <option value="MM/DD/AAAA">MM/DD/AAAA (padrão US)</option>
                <option value="AAAA-MM-DD">AAAA-MM-DD (ISO)</option>
              </Select>
            </FormField>
          </div>

          <div className="mt-5 space-y-3 pt-4 border-t border-slate-100">
            {[
              { label: "Notificações no sistema", desc: "Alertas dentro da plataforma", value: notifSistema, onChange: setNotifSistema },
              { label: "Resumo diário", desc: "Receber resumo do dia por email", value: resumoDiario, onChange: setResumoDiario },
              { label: "Alertas de segurança", desc: "Login de novo dispositivo, etc.", value: alertasSeguranca, onChange: setAlertasSeguranca },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-700">{row.label}</p>
                  <p className="text-xs text-slate-400">{row.desc}</p>
                </div>
                <Toggle value={row.value} onChange={row.onChange} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Integrações ── */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <SectionHeader icon={Globe} title="Integrações" subtitle="Conecte ferramentas externas" />

          {/* WhatsApp */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
              <MessageCircle size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-900" style={{ fontWeight: 600 }}>WhatsApp Business</p>
              <div className="flex items-center gap-1">
                <Wifi size={11} className="text-emerald-600" />
                <p className="text-xs text-emerald-700">Conectado · (11) 9****-8742</p>
              </div>
            </div>
            <button className="text-xs px-3 py-1.5 rounded-lg border border-emerald-300 text-emerald-700 hover:bg-emerald-100 transition-colors">
              Gerenciar
            </button>
          </div>

          {/* Futuras integrações */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { name: "Google Calendar", status: "Em breve", emoji: "📅" },
              { name: "Mercado Pago", status: "Em breve", emoji: "💳" },
              { name: "Stripe", status: "Em breve", emoji: "💰" },
            ].map((integ) => (
              <div key={integ.name} className="flex items-center gap-3 p-3 rounded-xl border border-dashed border-slate-200 bg-slate-50">
                <span className="text-2xl">{integ.emoji}</span>
                <div>
                  <p className="text-xs text-slate-700" style={{ fontWeight: 600 }}>{integ.name}</p>
                  <span className="text-xs px-1.5 py-0.5 rounded-full bg-slate-200 text-slate-500">{integ.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-between items-center">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <AlertCircle size={13} />
          <span>Campos com * são obrigatórios</span>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Cancelar
          </button>
          <button
            onClick={handleSalvar}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2 rounded-xl text-sm text-white transition-all disabled:opacity-70"
            style={{ background: "#1B6B3A" }}
          >
            {saving ? <RefreshCw size={15} className="animate-spin" /> : <Save size={15} />}
            {saving ? "Salvando..." : "Salvar alterações"}
          </button>
        </div>
      </div>
    </div>
  );
}
