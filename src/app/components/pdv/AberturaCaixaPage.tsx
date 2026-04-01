import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ArrowLeft, Unlock, ChevronRight, Loader2,
  Clock, User, DollarSign, CheckCircle2, AlertCircle,
} from "lucide-react";
import melPortrait from "../../../assets/78ea19d3f884e1598dfb94e5cc05dab06dd59ad2.png";
import { formatCurrency } from "./pdvMockData";

const OPERADORES = [
  { id: "op1", nome: "Maria Silva", cargo: "Operadora Principal" },
  { id: "op2", nome: "Ana Beatriz", cargo: "Atendente" },
  { id: "op3", nome: "Carlos Lima", cargo: "Vendedor" },
];