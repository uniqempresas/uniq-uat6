import { useState, useMemo } from "react";
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
  Truck,
  TrendingUp,
  Scissors,
  MessageCircle,
  Store,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";

type ModuloStatus = 'ativo' | 'trial' | 'core' | 'cancelado';

interface ModuloAtivo {
  codigo: string;
  status: ModuloStatus;
  diasTrialRestantes?: number;
  dataExpiracao?: string;
}

interface NavModuleItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
  moduloCodigo: string;
  badge: number;
}

const NAV_MODULE_MAP: NavModuleItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/dashboard", moduloCodigo: "dashboard", badge: 0 },
  { id: "meus-modulos", label: "Meus Módulos", icon: LayoutGrid, path: "/meus-modulos", moduloCodigo: "meus-modulos", badge: 0 },
  { id: "servicos", label: "Serviços", icon: Scissors, path: "/servicos", moduloCodigo: "servicos", badge: 0 },
  { id: "chatbot", label: "Chatbot", icon: MessageCircle, path: "/chatbot", moduloCodigo: "chatbot", badge: 2 },
  { id: "crm", label: "CRM", icon: Users, path: "/crm/dashboard", moduloCodigo: "crm", badge: 3 },
  { id: "vendas", label: "Vendas", icon: ShoppingCart, path: "/vendas", moduloCodigo: "vendas", badge: 0 },
  { id: "marketplace", label: "Marketplace", icon: Store, path: "/marketplace", moduloCodigo: "marketplace", badge: 0 },
  { id: "estoque", label: "Estoque", icon: Package, path: "/estoque/dashboard", moduloCodigo: "estoque", badge: 2 },
  { id: "fornecedores", label: "Fornecedores", icon: Truck, path: "/fornecedores", moduloCodigo: "fornecedores", badge: 0 },
  { id: "agenda", label: "Agenda", icon: Calendar, path: "/agenda", moduloCodigo: "agenda", badge: 1 },
  { id: "financeiro", label: "Financeiro", icon: DollarSign, path: "/financeiro", moduloCodigo: "financeiro", badge: 0 },
  { id: "metricas", label: "Métricas", icon: TrendingUp, path: "/metricas/dashboard", moduloCodigo: "metricas", badge: 0 },
  { id: "mel", label: "MEL IA", icon: Sparkles, path: "/mel", moduloCodigo: "mel", badge: 4 },
  { id: "colaboradores", label: "Colaboradores", icon: Users, path: "/configuracoes/colaboradores", moduloCodigo: "colaboradores", badge: 0 },
  { id: "configuracoes", label: "Config.", icon: Settings, path: "/configuracoes/empresa", moduloCodigo: "configuracoes", badge: 0 },
];

const CORE_MODULES = new Set(['dashboard', 'configuracoes']);

export function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock local de módulos ativos do parceiro
  const [modulosAtivos] = useState<ModuloAtivo[]>([
    { codigo: 'dashboard', status: 'core' },
    { codigo: 'configuracoes', status: 'core' },
    { codigo: 'meus-modulos', status: 'core' },
    { codigo: 'crm', status: 'ativo' },
    { codigo: 'estoque', status: 'trial', diasTrialRestantes: 12 },
    { codigo: 'vendas', status: 'cancelado', dataExpiracao: '2026-05-15' },
    { codigo: 'agenda', status: 'ativo' },
    { codigo: 'financeiro', status: 'trial', diasTrialRestantes: 7 },
    { codigo: 'metricas', status: 'cancelado', dataExpiracao: '2026-04-20' },
    { codigo: 'mel', status: 'ativo' },
  ]);

  const currentPath = location.pathname;

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    navigate("/auth/login");
  };

  const visibleNavItems = useMemo(() => {
    return NAV_MODULE_MAP.filter(item => {
      if (CORE_MODULES.has(item.moduloCodigo)) return true;
      const modulo = modulosAtivos.find(m => m.codigo === item.moduloCodigo);
      return modulo && (modulo.status === 'ativo' || modulo.status === 'trial' || modulo.status === 'cancelado');
    });
  }, [modulosAtivos]);

  // Fallback de segurança: garante que os core sempre apareçam mesmo se o mock falhar
  const safeNavItems = useMemo(() => {
    const hasCore = visibleNavItems.some(i => CORE_MODULES.has(i.moduloCodigo));
    if (hasCore) return visibleNavItems;
    return [
      ...NAV_MODULE_MAP.filter(i => CORE_MODULES.has(i.moduloCodigo)),
      ...visibleNavItems,
    ];
  }, [visibleNavItems]);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#1f2937] border-r border-slate-700">
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-700">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">U</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">UNIQ</h1>
            <p className="text-slate-400 text-xs">Sistema de Gestão</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {safeNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath.startsWith(item.path) || 
              (item.path === "/dashboard" && currentPath === "/dashboard");
            const modulo = modulosAtivos.find(m => m.codigo === item.moduloCodigo);
            const isTrial = modulo?.status === 'trial';
            const isCanceled = modulo?.status === 'cancelado';
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-emerald-600 text-white"
                    : isCanceled
                      ? "text-slate-300/60 hover:bg-slate-700 hover:text-white"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                <Icon size={18} className={isActive ? "text-white" : "text-slate-400"} />
                <span className="flex-1 text-left flex items-center gap-2">
                  {item.label}
                  {isTrial && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300">
                      Trial
                    </span>
                  )}
                </span>
                {item.badge > 0 && (
                  <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-slate-600 flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">Administrador</p>
              <p className="text-slate-400 text-xs truncate">admin@uniq.com</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-red-400 hover:bg-slate-700 rounded-lg text-sm transition-colors"
          >
            <LogOut size={16} />
            Sair
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center">
              <span className="text-white font-bold">U</span>
            </div>
            <h1 className="text-slate-900 font-bold">UNIQ</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white">
            <nav className="p-3 space-y-1">
              {safeNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPath.startsWith(item.path);
                const modulo = modulosAtivos.find(m => m.codigo === item.moduloCodigo);
                const isTrial = modulo?.status === 'trial';
                const isCanceled = modulo?.status === 'cancelado';
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-emerald-50 text-emerald-700"
                        : isCanceled
                          ? "text-slate-600/60 hover:bg-slate-50"
                          : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="flex-1 text-left flex items-center gap-2">
                      {item.label}
                      {isTrial && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-600">
                          Trial
                        </span>
                      )}
                    </span>
                    {item.badge > 0 && (
                      <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
            <div className="p-3 border-t border-slate-100">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg text-sm transition-colors"
              >
                <LogOut size={16} />
                Sair
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:ml-0 mt-14 lg:mt-0 overflow-hidden">
        {/* Desktop Header */}
        <header className="hidden lg:flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Home</span>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-medium capitalize">
              {currentPath.split("/")[1] || "Dashboard"}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
              <span className="text-slate-600 font-bold text-sm">A</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
