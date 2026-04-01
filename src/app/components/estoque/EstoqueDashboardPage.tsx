import { useNavigate } from "react-router";
import {
  Package,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  DollarSign,
  ArrowRight,
  ShoppingBag,
  Zap,
  BarChart2,
  RefreshCw,
} from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import melPortrait from "../../../assets/78ea19d3f884e1598dfb94e5cc05dab06dd59ad2.png";
import {
  PRODUTOS,
  MOVIMENTACOES,
  formatCurrency,
  getEstoqueStatusConfig,
  CATEGORIA_COLORS,
} from "./estoqueMockData";