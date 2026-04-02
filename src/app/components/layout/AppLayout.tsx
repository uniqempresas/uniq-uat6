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
import uniqLogo from "@/assets/4d0a1198556e8983d1b43af0214800b231b56f73.png";
import melPortrait from "@/assets/78ea19d3f884e1598dfb94e5cc05dab06dd59ad2.png";

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

// ... resto do arquivo mantido igual
