import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router";
import {
  Search, X, Plus, Minus, Trash2, Tag, Clock, Pause,
  PlayCircle, AlertTriangle, CheckCircle2, BarChart3,
  Loader2, ShoppingBag, QrCode, CreditCard, Banknote,
  Zap, ChevronDown, User, ArrowLeft, Printer, MessageCircle,
  Star, Package, ArrowUpDown, Lock, Unlock,
} from "lucide-react";
import melPortrait from "../../../assets/78ea19d3f884e1598dfb94e5cc05dab06dd59ad2.png";
import {
  PRODUTOS, CATEGORIAS, VENDAS_DIA, MOVIMENTACOES_DIA,
  MOTIVOS_SANGRIA, MOTIVOS_SUPRIMENTO, PAGAMENTO_CONFIG,
  formatCurrency, calcSubtotal, calcDescontoTotal, calcSaldoCaixaDinheiro,
  type Produto, type ItemCarrinho, type Pagamento, type PagamentoTipo,
} from "./pdvMockData";