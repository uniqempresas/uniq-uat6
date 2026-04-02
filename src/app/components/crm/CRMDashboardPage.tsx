import { useNavigate } from "react-router";
import {
  Users,
  TrendingUp,
  DollarSign,
  Target,
  ArrowRight,
  MessageCircle,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Star,
  Gift,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import melPortrait from "@/assets/78ea19d3f884e1598dfb94e5cc05dab06dd59ad2.png";
import { CLIENTES, NEGOCIACOES, formatCurrency } from "./crmMockData";

const FUNIL_DATA = [
  { etapa: "Prospectando", qtd: 2, valor: 5000, cor: "#64748B" },
  { etapa: "1º Contato", qtd: 1, valor: 1800, cor: "#0EA5E9" },
  { etapa: "Proposta", qtd: 2, valor: 6700, cor: "#8B5CF6" },
  { etapa: "Negociação", qtd: 2, valor: 123400, cor: "#F59E0B" },
  { etapa: "Fechamento", qtd: 1, valor: 3200, cor: "#F97316" },
];

const CONVERSAO_DATA = [
  { mes: "Out", ganhos: 4, perdidos: 1 },
  { mes: "Nov", ganhos: 6, perdidos: 2 },
  { mes: "Dez", ganhos: 5, perdidos: 3 },
  { mes: "Jan", ganhos: 8, perdidos: 1 },
  { mes: "Fev", ganhos: 7, perdidos: 2 },
  { mes: "Mar", ganhos: 9, perdidos: 2 },
];

// ... resto do arquivo mantido igual
