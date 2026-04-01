import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
  ArrowLeft,
  User,
  Phone,
  MessageCircle,
  Scissors,
  Clock,
  Calendar,
  DollarSign,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Edit2,
  Copy,
  MoreVertical,
  Star,
  ExternalLink,
  Zap,
  AlertTriangle,
  MapPin,
  Loader2,
  X,
  Plus,
  FileText,
  LogIn,
  LogOut,
} from "lucide-react";
import melPortrait from "../../../assets/78ea19d3f884e1598dfb94e5cc05dab06dd59ad2.png";
import {
  AGENDAMENTOS,
  PROFISSIONAIS,
  getStatusConfig,
  getOrigemConfig,
} from "./agendaMockData";