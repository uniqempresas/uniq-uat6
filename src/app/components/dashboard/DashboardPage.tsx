import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Users,
  DollarSign,
  Package,
  Calendar,
  MessageCircle,
  Target,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  Plus,
  RefreshCw,
  ChevronRight,
  Star,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import melPortrait from "../../../assets/78ea19d3f884e1598dfb94e5cc05dab06dd59ad2.png";

// Mock data
const CHART_DATA = [
  { dia: "Seg", valor: 820, vendas: 8 },
  { dia: "Ter", valor: 1240, vendas: 12 },
  { dia: "Qua", valor: 680, vendas: 6 },
  { dia: "Qui", valor: 1580, vendas: 15 },
  { dia: "Sex", valor: 2100, vendas: 19 },
  { dia: "Sáb", valor: 1890, vendas: 17 },
  { dia: "Dom", valor: 940, vendas: 9 },
];