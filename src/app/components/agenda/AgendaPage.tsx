import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  User,
  Scissors,
  Filter,
  Calendar,
  LayoutList,
  Grid3x3,
  MessageCircle,
  Zap,
  AlertCircle,
} from "lucide-react";
import melPortrait from "../../../assets/78ea19d3f884e1598dfb94e5cc05dab06dd59ad2.png";
import {
  AGENDAMENTOS,
  PROFISSIONAIS,
  DIAS_SEMANA_SHORT,
  DIAS_SEMANA_FULL,
  MESES,
  getAgendamentosDia,
  getStatusConfig,
  getPrioridadeConfig,
} from "./agendaMockData";