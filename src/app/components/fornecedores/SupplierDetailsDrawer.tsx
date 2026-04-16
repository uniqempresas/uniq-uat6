import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  X,
  Edit2,
  FileText,
  Power,
  Mail,
  Phone,
  MapPin,
  Copy,
  MessageCircle,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { SupplierRating } from "./SupplierRating";
import { SupplierStats } from "./SupplierStats";
import { PurchaseHistory } from "./PurchaseHistory";
import type { Supplier } from "../../types/suppliers";
import { mockPurchases } from "../../lib/mocks/suppliers";
import { toast } from "sonner";

interface SupplierDetailsDrawerProps {
  supplier: Supplier | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (id: string) => void;
  onInactivate: (id: string) => void;
}

export function SupplierDetailsDrawer({
  supplier,
  isOpen,
  onClose,
  onEdit,
  onInactivate,
}: SupplierDetailsDrawerProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "contacts" | "history">("overview");
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) setActiveTab("overview");
  }, [isOpen]);

  if (!supplier) return null;

  const statusMap = {
    active: { label: "Ativo", className: "bg-green-100 text-green-700" },
    inactive: { label: "Inativo", className: "bg-red-100 text-red-700" },
    pending: { label: "Em Análise", className: "bg-yellow-100 text-yellow-700" },
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copiado para a área de transferência");
  };

  const handleWhatsApp = (phone?: string) => {
    if (!phone) return;
    const clean = phone.replace(/\D/g, "");
    window.open(`https://wa.me/55${clean}`, "_blank");
  };

  const purchases = mockPurchases[supplier.id] || [];

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="right" className="w-full sm:max-w-lg md:max-w-2xl p-0 flex flex-col">
        <SheetHeader className="px-6 py-4 border-b border-slate-100">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-14 h-14 border border-slate-100">
                <AvatarImage src={supplier.logo || undefined} />
                <AvatarFallback className="bg-emerald-50 text-emerald-700 text-lg">
                  {supplier.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <SheetTitle className="text-lg">{supplier.name}</SheetTitle>
                <div className="flex items-center gap-2 mt-1">
                  <SupplierRating value={supplier.rating} readonly size="sm" />
                  <span className="text-xs text-slate-500">
                    {supplier.rating.toFixed(1)} ({supplier.ratingCount} avaliações)
                  </span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={onClose}
            >
              <X size={18} />
            </Button>
          </div>
        </SheetHeader>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof activeTab)} className="flex-1 flex flex-col min-h-0">
          <TabsList className="mx-6 mt-4 bg-slate-50 border border-slate-100 p-1">
            <TabsTrigger value="overview" className="text-xs data-[state=active]:bg-white">Resumo</TabsTrigger>
            <TabsTrigger value="contacts" className="text-xs data-[state=active]:bg-white">Contatos</TabsTrigger>
            <TabsTrigger value="history" className="text-xs data-[state=active]:bg-white">Histórico</TabsTrigger>
          </TabsList>

          <ScrollArea className="flex-1 px-6 py-4">
            <TabsContent value="overview" className="mt-0 space-y-5">
              <SupplierStats
                totalPurchases={supplier.totalPurchases}
                totalSpent={supplier.totalSpent}
                averageTicket={supplier.averageTicket}
                lastPurchase={supplier.lastPurchase}
              />

              <div className="bg-white rounded-xl border border-slate-100 p-4">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Informações</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Documento</span>
                    <span className="font-medium text-slate-900">{supplier.document}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Razão Social</span>
                    <span className="font-medium text-slate-900 text-right max-w-[60%]">{supplier.legalName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Categoria</span>
                    <span className="font-medium text-slate-900 capitalize">{supplier.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status</span>
                    <Badge className={`text-[10px] ${statusMap[supplier.status].className}`}>
                      {statusMap[supplier.status].label}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-100 p-4">
                <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <MapPin size={14} /> Endereço
                </h4>
                <p className="text-sm text-slate-700">
                  {supplier.address.street}, {supplier.address.number}
                  {supplier.address.complement && ` - ${supplier.address.complement}`}
                  <br />
                  {supplier.address.neighborhood} - {supplier.address.city}/{supplier.address.state}
                  <br />
                  CEP: {supplier.address.cep}
                </p>
              </div>

              {supplier.bankAccounts.length > 0 && (
                <div className="bg-white rounded-xl border border-slate-100 p-4">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Dados Bancários</h4>
                  <div className="space-y-3">
                    {supplier.bankAccounts.map((acc) => (
                      <div key={acc.id} className="text-sm">
                        <p className="font-medium text-slate-900">
                          {acc.bankName} (Ag: {acc.agency} / Cc: {acc.account})
                        </p>
                        <p className="text-slate-500">
                          Tipo: {acc.accountType === "checking" ? "Corrente" : "Poupança"}
                          {acc.pixKey && ` | Pix: ${acc.pixKey}`}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="contacts" className="mt-0 space-y-3">
              {supplier.contacts.length === 0 ? (
                <p className="text-sm text-slate-500">Nenhum contato cadastrado.</p>
              ) : (
                supplier.contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="bg-white rounded-xl border border-slate-100 p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-slate-900 flex items-center gap-1">
                          {contact.isPrimary && (
                            <span className="text-amber-400">★</span>
                          )}
                          {contact.name}
                        </p>
                        {contact.role && (
                          <p className="text-xs text-slate-500">{contact.role}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {contact.email && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 text-xs"
                          onClick={() => handleCopy(contact.email!)}
                        >
                          <Copy size={12} className="mr-1" /> Copiar email
                        </Button>
                      )}
                      {contact.mobile && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 text-xs"
                            onClick={() => handleWhatsApp(contact.mobile)}
                          >
                            <MessageCircle size={12} className="mr-1" /> WhatsApp
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 text-xs"
                            onClick={() => handleCopy(contact.mobile!)}
                          >
                            <Phone size={12} className="mr-1" /> Copiar
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                ))
              )}
            </TabsContent>

            <TabsContent value="history" className="mt-0">
              <PurchaseHistory purchases={purchases} maxItems={5} />
            </TabsContent>
          </ScrollArea>
        </Tabs>

        <div className="border-t border-slate-100 p-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => onInactivate(supplier.id)}
            >
              <Power size={16} className="mr-2" />
              {supplier.status === "active" ? "Inativar" : "Reativar"} Fornecedor
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => toast.info("Relatório em desenvolvimento")}
            >
              <FileText size={16} className="mr-2" />
              Gerar Relatório
            </Button>
            <Button
              className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white"
              onClick={() => onEdit(supplier.id)}
            >
              <Edit2 size={16} className="mr-2" />
              Editar Fornecedor
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
