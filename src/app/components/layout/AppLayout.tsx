import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Package,
  Calendar,
  DollarSign,
  Settings,
  Bell,
  ChevronRight,
  LogOut,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import uniqLogo from "../../../assets/4d0a1198556e8983d1b43af0214800b231b56f73.png";
import melPortrait from "../../../assets/78ea19d3f884e1598dfb94e5cc05dab06dd59ad2.png";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/dashboard", badge: 0 },
  { id: "crm", label: "CRM", icon: Users, path: "/crm/dashboard", badge: 3 },
  { id: "vendas", label: "Vendas", icon: ShoppingCart, path: "/vendas", badge: 0 },
  { id: "estoque", label: "Estoque", icon: Package, path: "/estoque/dashboard", badge: 2 },
  { id: "agenda", label: "Agenda", icon: Calendar, path: "/agenda", badge: 1 },
  { id: "financeiro", label: "Financeiro", icon: DollarSign, path: "/financeiro", badge: 0 },
  { id: "mel", label: "MEL IA", icon: Sparkles, path: "/mel", badge: 4 },
  { id: "configuracoes", label: "Config.", icon: Settings, path: "/configuracoes/empresa", badge: 0 },
];

const CONTEXT_BARS: Record<string, { label: string; path: string }[]> = {
  dashboard: [
    { label: "Home", path: "/dashboard" },
    { label: "Resumo", path: "/dashboard" },
    { label: "Configurar Widgets", path: "/dashboard" },
  ],
  crm: [
    { label: "Dashboard CRM", path: "/crm/dashboard" },
    { label: "Clientes", path: "/crm/clientes" },
    { label: "Pipeline", path: "/crm/pipeline" },
    { label: "Relatórios", path: "/crm/relatorios" },
  ],
  vendas: [
    { label: "PDV", path: "/vendas/pdv" },
    { label: "Abrir Caixa", path: "/vendas/pdv/abertura" },
    { label: "Fechar Caixa", path: "/vendas/pdv/fechamento" },
  ],
  estoque: [
    { label: "Dashboard", path: "/estoque/dashboard" },
    { label: "Produtos", path: "/estoque/produtos" },
    { label: "Movimentações", path: "/estoque/movimentacoes" },
    { label: "Categorias", path: "/estoque/categorias" },
  ],
  agenda: [
    { label: "Calendário", path: "/agenda" },
    { label: "Compromissos", path: "/agenda/compromissos" },
    { label: "Novo Agendamento", path: "/agenda/novo" },
  ],
  financeiro: [
    { label: "Dashboard", path: "/financeiro/dashboard" },
    { label: "Fluxo de Caixa", path: "/financeiro/fluxo-de-caixa" },
    { label: "Contas a Pagar", path: "/financeiro/contas-pagar" },
    { label: "Contas a Receber", path: "/financeiro/contas-receber" },
    { label: "DRE Simples", path: "/financeiro/dre" },
  ],
  mel: [
    { label: "Dashboard MEL", path: "/mel" },
    { label: "Configurações MEL", path: "/mel/configuracoes" },
  ],
  configuracoes: [
    { label: "Empresa", path: "/configuracoes/empresa" },
    { label: "Minha Conta", path: "/configuracoes/conta" },
  ],
};

function getActiveModule(pathname: string): string {
  if (pathname.startsWith("/crm")) return "crm";
  if (pathname.startsWith("/vendas")) return "vendas";
  if (pathname.startsWith("/estoque")) return "estoque";
  if (pathname.startsWith("/agenda")) return "agenda";
  if (pathname.startsWith("/financeiro")) return "financeiro";
  if (pathname.startsWith("/mel")) return "mel";
  if (pathname.startsWith("/configuracoes")) return "configuracoes";
  return "dashboard";
}

export function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications] = useState(4);

  const activeModule = getActiveModule(location.pathname);
  const contextItems = CONTEXT_BARS[activeModule] || [];

  const activeContextIdx = contextItems.reduce((best, item, i) => {
    if (item.path !== "#" && location.pathname === item.path) return i;
    if (item.path !== "#" && location.pathname.startsWith(item.path) && item.path.length > (contextItems[best]?.path?.length || 0)) return i;
    return best;
  }, 0);

  const handleNavClick = (item: (typeof NAV_ITEMS)[0]) => {
    navigate(item.path);
    setSidebarOpen(false);
  };

  const handleContextClick = (path: string) => {
    if (path && path !== "#") navigate(path);
  };

  const moduleName = NAV_ITEMS.find((n) => n.id === activeModule)?.label || "Dashboard";

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:relative z-40 flex flex-col h-full transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ width: "72px", background: "#0B1D2E", minHeight: "100vh" }}
      >
        <div className="flex items-center justify-center h-16 px-2 border-b border-white/5">
          <img src={uniqLogo} alt="UNIQ" className="h-7 brightness-0 invert" />
        </div>

        <nav className="flex-1 flex flex-col items-center py-4 gap-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="relative flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all group"
                style={{
                  background: isActive ? (item.id === "mel" ? "rgba(124, 58, 237, 0.25)" : "rgba(27, 107, 58, 0.3)") : "transparent",
                  border: isActive ? (item.id === "mel" ? "1px solid rgba(124, 58, 237, 0.5)" : "1px solid rgba(27, 107, 58, 0.5)") : "1px solid transparent",
                }}
                title={item.label}
              >
                {isActive && (
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 rounded-r-full"
                    style={{ background: item.id === "mel" ? "#A78BFA" : "#4ADE80" }}
                  />
                )}
                <Icon
                  size={20}
                  style={{ color: isActive ? (item.id === "mel" ? "#A78BFA" : "#4ADE80") : "#64748B" }}
                  className="transition-colors group-hover:text-slate-300"
                />
                <span
                  className="text-[9px] mt-1 transition-colors"
                  style={{ color: isActive ? (item.id === "mel" ? "#A78BFA" : "#4ADE80") : "#64748B" }}
                >
                  {item.label}
                </span>
                {item.badge > 0 && (
                  <span
                    className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full text-[9px] flex items-center justify-center text-white"
                    style={{ background: "#EF4444" }}
                  >
                    {item.badge}
                  </span>
                )}
                <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-50">
                  {item.label}
                </div>
              </button>
            );
          })}
        </nav>

        <div className="border-t border-white/5 p-2 flex flex-col items-center gap-2">
          <button
            onClick={() => navigate("/auth/login")}
            className="flex flex-col items-center justify-center w-14 h-10 rounded-xl text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-all"
            title="Sair"
          >
            <LogOut size={16} />
            <span className="text-[9px] mt-0.5">Sair</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-slate-200 h-14 flex items-center px-4 gap-4 shrink-0">
          <button
            className="lg:hidden text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="hidden sm:inline">UNIQ Empresas</span>
            <ChevronRight size={14} className="hidden sm:inline" />
            <span className="text-slate-900" style={{ fontWeight: 600 }}>
              {moduleName}
            </span>
            {location.pathname !== `/${activeModule}` && activeModule !== "dashboard" && (
              <>
                <ChevronRight size={14} />
                <span className="text-slate-500 text-sm capitalize">
                  {contextItems.find((c) => location.pathname === c.path)?.label ||
                    contextItems.find((c) => location.pathname.startsWith(c.path) && c.path !== `/${activeModule}`)?.label || ""}
                </span>
              </>
            )}
          </div>

          <div className="flex-1" />

          <button className="relative w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
            <Bell size={17} className="text-slate-600" />
            {notifications > 0 && (
              <span
                className="absolute top-1 right-1 w-4 h-4 rounded-full text-[9px] flex items-center justify-center text-white"
                style={{ background: "#EF4444" }}
              >
                {notifications}
              </span>
            )}
          </button>

          <button className="flex items-center gap-2 hover:bg-slate-50 rounded-xl px-2 py-1.5 transition-colors">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-200">
              <img src={melPortrait} alt="Usuário" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-slate-900 text-xs leading-tight" style={{ fontWeight: 600 }}>Maria Silva</p>
              <p className="text-slate-500 text-[11px] leading-tight">Loja da Maria</p>
            </div>
          </button>
        </header>

        <div className="bg-white border-b border-slate-200 px-4 h-10 flex items-center gap-1 overflow-x-auto shrink-0">
          {contextItems.map((item, i) => {
            const isActive = i === activeContextIdx;
            return (
              <button
                key={item.label}
                onClick={() => handleContextClick(item.path)}
                className="px-3 py-1.5 rounded-t-lg text-xs whitespace-nowrap transition-all relative"
                style={{
                  color: isActive ? "#1B6B3A" : "#64748B",
                  fontWeight: isActive ? 600 : 400,
                  background: isActive ? "#F0FDF4" : "transparent",
                }}
              >
                {item.label}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full" style={{ background: "#1B6B3A" }} />
                )}
              </button>
            );
          })}
        </div>

        <main className="flex-1 overflow-y-auto bg-slate-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}