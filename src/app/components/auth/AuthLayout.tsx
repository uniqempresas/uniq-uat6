import { Outlet } from "react-router";
import melFullBody from "figma:asset/7db66748f5c4cc52732f3eb047a7125fbfd3d86f.png";
import uniqLogo from "figma:asset/4d0a1198556e8983d1b43af0214800b231b56f73.png";

const phrases = [
  "Gerencie seu negócio com inteligência.",
  "Venda mais. Trabalhe menos. Cresça sempre.",
  "Seu consultor digital trabalhando 24h por você.",
  "Do WhatsApp para o mundo — com a UNIQ.",
];

const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

export function AuthLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div
        className="hidden lg:flex lg:w-[48%] xl:w-[44%] flex-col relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0B1D2E 0%, #0F3460 40%, #1B6B3A 100%)",
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #fff 1px, transparent 1px), radial-gradient(circle at 75% 75%, #fff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Logo */}
        <div className="relative z-10 p-8 pt-10">
          <img src={uniqLogo} alt="UNIQ Empresas" className="h-12 brightness-0 invert" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 pb-10">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs text-emerald-300 border border-emerald-500/40 bg-emerald-500/10 mb-4">
              ✨ Plataforma para Empreendedores
            </span>
            <h1 className="text-white mb-3" style={{ fontSize: "2rem", lineHeight: "1.2" }}>
              O Norte para<br />
              <span style={{ color: "#4ADE80" }}>Empreendedores</span>
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              {randomPhrase}
            </p>
          </div>

          {/* MEL Character */}
          <div className="relative flex items-end justify-center mt-4">
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full opacity-20 blur-3xl"
              style={{ background: "#22C55E" }}
            />
            <img
              src={melFullBody}
              alt="MEL - IA da UNIQ"
              className="relative z-10 h-72 object-contain drop-shadow-2xl"
            />
            <div className="absolute bottom-4 right-0 bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-4 py-3 max-w-[200px]">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white text-xs" style={{ fontWeight: 600 }}>MEL - IA Proativa</span>
              </div>
              <p className="text-slate-300 text-xs">
                "Olá! Estou aqui para ajudar seu negócio crescer! 🚀"
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 px-10 pb-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
          {[
            { value: "2.500+", label: "Empresas" },
            { value: "R$ 12M+", label: "Gerenciados" },
            { value: "98%", label: "Satisfação" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-white" style={{ fontSize: "1.1rem", fontWeight: 700, color: "#4ADE80" }}>
                {stat.value}
              </div>
              <div className="text-slate-400 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col bg-slate-50 min-h-screen">
        {/* Mobile logo */}
        <div className="lg:hidden p-6 bg-white border-b border-slate-100">
          <img src={uniqLogo} alt="UNIQ Empresas" className="h-8" />
        </div>

        <div className="flex-1 flex items-center justify-center p-6 py-10">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
