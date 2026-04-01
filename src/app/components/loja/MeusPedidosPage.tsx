import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ArrowLeft, Package, Search, ChevronDown, ChevronRight,
  ChevronUp, MapPin, CreditCard, Truck, RefreshCw,
  MessageCircle, Star, ExternalLink, ShoppingBag,
  CheckCircle2, Clock, X, Filter,
} from "lucide-react";
import {
  PEDIDOS_MOCK, STATUS_CONFIG_PEDIDO, PAGAMENTO_LOJA_CONFIG,
  formatCurrencyLoja, type PedidoStatus, type Pedido,
} from "./lojaMockData";

const TIMELINE_STATUS: PedidoStatus[] = [
  "aguardando_pagamento",
  "pago",
  "em_separacao",
  "enviado",
  "entregue",
];

function StatusBadge({ status }: { status: PedidoStatus }) {
  const cfg = STATUS_CONFIG_PEDIDO[status];
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs border"
      style={{ background: cfg.bg, color: cfg.color, borderColor: cfg.border, fontWeight: 700 }}>
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: cfg.dot }} />
      {cfg.label}
    </span>
  );
}

function PedidoTimeline({ status }: { status: PedidoStatus }) {
  if (status === "cancelado") {
    return (
      <div className="p-3 rounded-xl text-center" style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}>
        <p className="text-red-700 text-sm" style={{ fontWeight: 600 }}>✖️ Pedido Cancelado</p>
      </div>
    );
  }

  const activeIdx = TIMELINE_STATUS.indexOf(status);

  return (
    <div className="flex items-center justify-between relative">
      {/* Line */}
      <div className="absolute left-4 right-4 top-5 h-0.5 bg-slate-100" />
      <div className="absolute left-4 top-5 h-0.5 bg-emerald-400 transition-all"
        style={{ right: `${100 - (activeIdx / (TIMELINE_STATUS.length - 1)) * 100}%` }} />

      {TIMELINE_STATUS.map((s, i) => {
        const cfg = STATUS_CONFIG_PEDIDO[s];
        const isDone = i <= activeIdx;
        const isActive = i === activeIdx;
        return (
          <div key={s} className="flex flex-col items-center z-10 flex-1">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-base mb-2 transition-all"
              style={{
                background: isDone ? "#F0FDF4" : "white",
                border: isDone ? "2px solid #1B6B3A" : "2px solid #E2E8F0",
                boxShadow: isActive ? "0 0 0 4px rgba(27,107,58,0.15)" : "none",
              }}>
              {cfg.icon}
            </div>
            <span className="text-[10px] text-center leading-tight"
              style={{ color: isDone ? "#1B6B3A" : "#94A3B8", fontWeight: isActive ? 700 : 400, maxWidth: "60px" }}>
              {cfg.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function PedidoCard({ pedido, expanded, onToggle }: { pedido: Pedido; expanded: boolean; onToggle: () => void }) {
  const cfg = STATUS_CONFIG_PEDIDO[pedido.status];
  const [, m, d] = pedido.data.split("-").map(Number);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all"
      style={{ boxShadow: expanded ? "0 4px 16px rgba(0,0,0,0.08)" : "0 1px 4px rgba(0,0,0,0.04)" }}>
      {/* Card header - always visible */}
      <button onClick={onToggle} className="w-full flex items-start gap-4 p-4 text-left hover:bg-slate-50 transition-colors">
        {/* Products preview */}
        <div className="flex -space-x-2 shrink-0">
          {pedido.itens.slice(0, 3).map((item, i) => (
            <img key={item.id} src={item.produto.imagem} alt={item.produto.nome}
              className="w-12 h-12 rounded-xl object-cover border-2 border-white"
              style={{ zIndex: pedido.itens.length - i }} />
          ))}
          {pedido.itens.length > 3 && (
            <div className="w-12 h-12 rounded-xl bg-slate-100 border-2 border-white flex items-center justify-center text-slate-500 text-xs" style={{ fontWeight: 700 }}>
              +{pedido.itens.length - 3}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div>
              <p className="text-slate-900 text-sm" style={{ fontWeight: 700 }}>{pedido.numero}</p>
              <p className="text-slate-400 text-xs">{d}/{m}/{pedido.data.split("-")[0]} às {pedido.hora}</p>
            </div>
            <StatusBadge status={pedido.status} />
          </div>
          <p className="text-slate-500 text-xs line-clamp-1 mb-2">
            {pedido.itens.map(i => i.produto.nome.split(" ").slice(0, 2).join(" ")).join(", ")}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-emerald-700 text-base" style={{ fontWeight: 800 }}>{formatCurrencyLoja(pedido.total)}</p>
            <div className="flex items-center gap-1 text-slate-400 text-xs">
              <span>{PAGAMENTO_LOJA_CONFIG[pedido.pagamento].emoji}</span>
              <span>{PAGAMENTO_LOJA_CONFIG[pedido.pagamento].label}</span>
              {pedido.parcelas && pedido.parcelas > 1 && <span>({pedido.parcelas}x)</span>}
            </div>
          </div>
        </div>

        <div className="shrink-0 pt-1">
          {expanded ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
        </div>
      </button>

      {/* Status description strip */}
      <div className="px-4 py-2 text-xs flex items-center gap-2"
        style={{ background: cfg.bg, borderTop: `1px solid ${cfg.border}` }}>
        <span>{cfg.icon}</span>
        <span style={{ color: cfg.color, fontWeight: 500 }}>{cfg.desc}</span>
        {pedido.rastreio && (
          <button className="ml-auto flex items-center gap-1" style={{ color: cfg.color, fontWeight: 600 }}>
            Rastrear <ExternalLink size={11} />
          </button>
        )}
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="border-t border-slate-100">
          {/* Timeline */}
          <div className="p-5 border-b border-slate-100">
            <p className="text-slate-700 text-xs mb-4" style={{ fontWeight: 600 }}>Acompanhamento do Pedido</p>
            <PedidoTimeline status={pedido.status} />
            {pedido.previsaoEntrega && pedido.status !== "cancelado" && pedido.status !== "entregue" && (
              <p className="text-center text-slate-500 text-xs mt-4">
                <Truck size={12} className="inline mr-1" />
                Previsão de entrega: <strong className="text-slate-700">{pedido.previsaoEntrega}</strong>
              </p>
            )}
          </div>

          {/* Items */}
          <div className="p-5 border-b border-slate-100">
            <p className="text-slate-700 text-xs mb-3" style={{ fontWeight: 600 }}>Itens do Pedido</p>
            <div className="space-y-3">
              {pedido.itens.map(item => (
                <div key={item.id} className="flex items-center gap-3">
                  <img src={item.produto.imagem} alt={item.produto.nome}
                    className="w-14 h-14 rounded-xl object-cover bg-slate-50 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-900 text-sm leading-tight" style={{ fontWeight: 600 }}>{item.produto.nome}</p>
                    {item.variacao && <p className="text-slate-400 text-xs">{item.variacao}</p>}
                    <p className="text-slate-500 text-xs mt-0.5">Qtd: {item.quantidade} × {formatCurrencyLoja(item.produto.preco)}</p>
                  </div>
                  <p className="text-slate-900 text-sm shrink-0" style={{ fontWeight: 700 }}>
                    {formatCurrencyLoja(item.produto.preco * item.quantidade)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Financial + Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* Endereço */}
            <div className="p-5">
              <p className="text-slate-700 text-xs mb-3 flex items-center gap-1.5" style={{ fontWeight: 600 }}>
                <MapPin size={12} className="text-slate-400" />Endereço de Entrega
              </p>
              <div className="text-slate-600 text-sm space-y-0.5">
                <p style={{ fontWeight: 600 }}>{pedido.enderecoEntrega.nome}</p>
                <p>{pedido.enderecoEntrega.logradouro}, {pedido.enderecoEntrega.numero}</p>
                <p>{pedido.enderecoEntrega.bairro} — {pedido.enderecoEntrega.cidade}/{pedido.enderecoEntrega.estado}</p>
                <p className="text-slate-400">CEP: {pedido.enderecoEntrega.cep}</p>
              </div>
              {pedido.rastreio && (
                <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-slate-500 text-[10px] mb-0.5">Código de Rastreio</p>
                  <p className="text-slate-900 text-sm" style={{ fontWeight: 700 }}>{pedido.rastreio}</p>
                  <button className="text-emerald-700 text-xs flex items-center gap-1 mt-1" style={{ fontWeight: 500 }}>
                    Rastrear no Correios <ExternalLink size={10} />
                  </button>
                </div>
              )}
            </div>

            {/* Financeiro */}
            <div className="p-5">
              <p className="text-slate-700 text-xs mb-3 flex items-center gap-1.5" style={{ fontWeight: 600 }}>
                <CreditCard size={12} className="text-slate-400" />Resumo Financeiro
              </p>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Subtotal</span>
                  <span className="text-slate-700">{formatCurrencyLoja(pedido.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Frete</span>
                  <span className="text-slate-700">{pedido.frete === 0 ? "Grátis" : formatCurrencyLoja(pedido.frete)}</span>
                </div>
                {pedido.desconto > 0 && (
                  <div className="flex justify-between">
                    <span className="text-emerald-600">Desconto</span>
                    <span className="text-emerald-600" style={{ fontWeight: 600 }}>-{formatCurrencyLoja(pedido.desconto)}</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-slate-100">
                  <span className="text-slate-900" style={{ fontWeight: 700 }}>Total</span>
                  <span className="text-emerald-700 text-base" style={{ fontWeight: 800 }}>{formatCurrencyLoja(pedido.total)}</span>
                </div>
                <div className="flex items-center gap-1.5 pt-1 text-slate-500 text-xs">
                  <span>{PAGAMENTO_LOJA_CONFIG[pedido.pagamento].emoji}</span>
                  <span>{PAGAMENTO_LOJA_CONFIG[pedido.pagamento].label}</span>
                  {pedido.parcelas && pedido.parcelas > 1 && (
                    <span>({pedido.parcelas}x de {formatCurrencyLoja(pedido.total / pedido.parcelas)})</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="px-5 py-4 border-t border-slate-100 bg-slate-50 flex flex-wrap gap-2">
            {pedido.status === "entregue" && (
              <>
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-50 border border-amber-100 text-amber-700 text-xs" style={{ fontWeight: 600 }}>
                  <Star size={13} />Avaliar
                </button>
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs" style={{ fontWeight: 600 }}>
                  <RefreshCw size={13} />Comprar novamente
                </button>
              </>
            )}
            {(pedido.status === "enviado" || pedido.status === "entregue") && pedido.rastreio && (
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 text-xs" style={{ fontWeight: 600 }}>
                <Truck size={13} />Rastrear entrega
              </button>
            )}
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-green-50 border border-green-100 text-green-700 text-xs" style={{ fontWeight: 600 }}>
              <MessageCircle size={13} />Falar com atendimento
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function MeusPedidosPage() {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState<string | null>(PEDIDOS_MOCK[0]?.id || null);
  const [statusFiltro, setStatusFiltro] = useState<PedidoStatus | "todos">("todos");
  const [busca, setBusca] = useState("");

  const filtered = PEDIDOS_MOCK.filter(p => {
    if (statusFiltro !== "todos" && p.status !== statusFiltro) return false;
    if (busca && !p.numero.toLowerCase().includes(busca.toLowerCase()) &&
      !p.itens.some(i => i.produto.nome.toLowerCase().includes(busca.toLowerCase()))) return false;
    return true;
  });

  const STATUS_OPTIONS: (PedidoStatus | "todos")[] = ["todos", "aguardando_pagamento", "pago", "em_separacao", "enviado", "entregue", "cancelado"];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={() => navigate("/loja")}
            className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
            <ArrowLeft size={16} className="text-slate-600" />
          </button>
          <div>
            <h1 className="text-slate-900 text-sm" style={{ fontWeight: 700 }}>Meus Pedidos</h1>
            <p className="text-slate-400 text-xs">{PEDIDOS_MOCK.length} pedido(s) encontrado(s)</p>
          </div>
          <div className="flex-1" />
          <button onClick={() => navigate("/loja/checkout")}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-white text-xs"
            style={{ background: "linear-gradient(135deg,#1B6B3A,#15803d)", fontWeight: 600 }}>
            <ShoppingBag size={13} />Nova compra
          </button>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-5">
        {/* Search */}
        <div className="relative mb-4">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input value={busca} onChange={e => setBusca(e.target.value)}
            placeholder="Buscar por número ou produto..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm outline-none focus:border-emerald-500 bg-white" />
        </div>

        {/* Status filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-5 -mx-4 px-4">
          {STATUS_OPTIONS.map(s => {
            const cfg = s !== "todos" ? STATUS_CONFIG_PEDIDO[s] : null;
            const isActive = statusFiltro === s;
            return (
              <button key={s} onClick={() => setStatusFiltro(s)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all shrink-0"
                style={{
                  background: isActive ? (cfg?.bg || "#F0FDF4") : "white",
                  color: isActive ? (cfg?.color || "#1B6B3A") : "#64748B",
                  border: isActive ? `1.5px solid ${cfg?.border || "#86EFAC"}` : "1.5px solid #E2E8F0",
                  fontWeight: isActive ? 700 : 400,
                }}>
                {s === "todos" ? "Todos" : <>{cfg?.icon} {cfg?.label}</>}
                {s !== "todos" && (
                  <span className="ml-0.5 px-1.5 py-0.5 rounded-full text-[9px]"
                    style={{ background: `${cfg?.dot}25`, color: cfg?.color, fontWeight: 700 }}>
                    {PEDIDOS_MOCK.filter(p => p.status === s).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Pedidos list */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center">
            <Package size={40} className="text-slate-100 mx-auto mb-3" />
            <p className="text-slate-600 mb-1" style={{ fontWeight: 600 }}>Nenhum pedido encontrado</p>
            <p className="text-slate-400 text-sm mb-5">Experimente outros filtros</p>
            <button onClick={() => navigate("/loja")}
              className="px-6 py-2.5 rounded-xl text-white text-sm"
              style={{ background: "linear-gradient(135deg,#1B6B3A,#15803d)", fontWeight: 600 }}>
              Fazer primeira compra
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map(pedido => (
              <PedidoCard
                key={pedido.id} pedido={pedido}
                expanded={expandedId === pedido.id}
                onToggle={() => setExpandedId(expandedId === pedido.id ? null : pedido.id)}
              />
            ))}
          </div>
        )}

        {/* WhatsApp support */}
        <div className="mt-8 p-4 rounded-2xl border border-slate-100 bg-white text-center">
          <MessageCircle size={24} className="text-green-500 mx-auto mb-2" />
          <p className="text-slate-700 text-sm mb-1" style={{ fontWeight: 600 }}>Precisa de ajuda com seu pedido?</p>
          <p className="text-slate-400 text-xs mb-3">Nossa equipe está pronta para te ajudar</p>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm"
            style={{ background: "#25D366", color: "white", fontWeight: 600 }}>
            <MessageCircle size={15} />Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
