import { useState } from "react";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Eye,
  Edit2,
  Trash2,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SupplierRating } from "./SupplierRating";
import type { Supplier } from "../../types/suppliers";

interface SupplierCardProps {
  supplier: Supplier;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (supplier: Supplier) => void;
}

export function SupplierCard({ supplier, onView, onEdit, onDelete }: SupplierCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const statusMap = {
    active: { label: "Ativo", className: "bg-green-100 text-green-700 hover:bg-green-100" },
    inactive: { label: "Inativo", className: "bg-red-100 text-red-700 hover:bg-red-100" },
    pending: { label: "Em Análise", className: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100" },
  };

  const categoryLabel = supplier.category.charAt(0).toUpperCase() + supplier.category.slice(1);

  return (
    <div
      className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 transition-all cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onView(supplier.id)}
      style={{
        boxShadow: isHovered ? "0 10px 15px -3px rgb(0 0 0 / 0.1)" : undefined,
        transform: isHovered ? "translateY(-2px)" : undefined,
      }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 border border-slate-100">
            <AvatarImage src={supplier.logo || undefined} />
            <AvatarFallback className="bg-emerald-50 text-emerald-700">
              <Building2 size={20} />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-slate-900 font-semibold text-sm line-clamp-1">{supplier.name}</h3>
            <div className="flex items-center gap-1 mt-0.5">
              <SupplierRating value={supplier.rating} readonly size="sm" />
              <span className="text-xs text-slate-500">{supplier.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <Badge className={`text-[10px] ${statusMap[supplier.status].className}`}>
          {statusMap[supplier.status].label}
        </Badge>
      </div>

      <div className="space-y-1.5 mb-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span className="text-slate-400">CNPJ:</span>
          <span className="font-medium">{supplier.document}</span>
        </div>
        {supplier.email && (
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Mail size={14} className="text-slate-400" />
            <span className="truncate">{supplier.email}</span>
          </div>
        )}
        {supplier.phone && (
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Phone size={14} className="text-slate-400" />
            <span>{supplier.phone}</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <MapPin size={14} className="text-slate-400" />
          <span className="truncate">
            {supplier.address.city}, {supplier.address.state}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="secondary" className="text-[10px]">{categoryLabel}</Badge>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <span className="text-slate-400">💰 </span>
            <span className="font-medium text-slate-700">
              {supplier.totalSpent.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </span>
          </div>
          <div className="text-sm">
            <span className="text-slate-400">📋 </span>
            <span className="font-medium text-slate-700">{supplier.totalPurchases} compras</span>
          </div>
        </div>
      </div>

      <div
        className={`flex items-center gap-2 mt-4 transition-opacity ${
          isHovered ? "opacity-100" : "opacity-0 lg:opacity-0"
        }`}
        style={{ opacity: isHovered ? 1 : undefined }}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onView(supplier.id);
          }}
          className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Eye size={12} /> Ver
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(supplier.id);
          }}
          className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
        >
          <Edit2 size={12} /> Editar
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(supplier);
          }}
          className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-medium text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
        >
          <Trash2 size={12} /> Excluir
        </button>
      </div>
    </div>
  );
}
