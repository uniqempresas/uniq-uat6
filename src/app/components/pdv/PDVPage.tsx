import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router";
import {
  Search, X, Plus, Minus, Trash2, Tag, Clock, Pause,
  PlayCircle, AlertTriangle, CheckCircle2, BarChart3,
  Loader2, ShoppingBag, QrCode, CreditCard, Banknote,
  Zap, ChevronDown, User, ArrowLeft, Printer, MessageCircle,
  Star, Package, ArrowUpDown, Lock, Unlock,
} from "lucide-react";
import {
  PRODUTOS, CATEGORIAS, VENDAS_DIA, MOVIMENTACOES_DIA,
  MOTIVOS_SANGRIA, MOTIVOS_SUPRIMENTO, PAGAMENTO_CONFIG,
  formatCurrency, calcSubtotal, calcDescontoTotal, calcSaldoCaixaDinheiro,
  type Produto, type ItemCarrinho, type Pagamento, type PagamentoTipo,
} from "./pdvMockData";

// Usar placeholder até ter a imagem real
const melPortrait = "https://api.dicebear.com/7.x/avataaars/svg?seed=MEL";

export function PDVPage() {
  const navigate = useNavigate();
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  const [showPagamento, setShowPagamento] = useState(false);
  const [pagamentos, setPagamentos] = useState<Pagamento[]>([]);
  const [desconto, setDesconto] = useState(0);
  const [loading, setLoading] = useState(false);
  const [vendaConcluida, setVendaConcluida] = useState(false);
  const [showSangria, setShowSangria] = useState(false);
  const [showSuprimento, setShowSuprimento] = useState(false);
  const [valorOperacao, setValorOperacao] = useState("");
  const [motivoOperacao, setMotivoOperacao] = useState("");

  const produtosFiltrados = PRODUTOS.filter(p => {
    const matchBusca = p.nome.toLowerCase().includes(busca.toLowerCase()) || 
                      p.codigo.includes(busca);
    const matchCategoria = categoriaAtiva === "todos" || p.categoria === categoriaAtiva;
    return matchBusca && matchCategoria;
  });

  const addAoCarrinho = (produto: Produto) => {
    setCarrinho(prev => {
      const existente = prev.find(item => item.produto.id === produto.id);
      if (existente) {
        return prev.map(item => 
          item.produto.id === produto.id 
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prev, { produto, quantidade: 1 }];
    });
  };

  const removerDoCarrinho = (produtoId: string) => {
    setCarrinho(prev => prev.filter(item => item.produto.id !== produtoId));
  };

  const atualizarQuantidade = (produtoId: string, quantidade: number) => {
    if (quantidade <= 0) {
      removerDoCarrinho(produtoId);
      return;
    }
    setCarrinho(prev => prev.map(item => 
      item.produto.id === produtoId ? { ...item, quantidade } : item
    ));
  };

  const subtotal = calcSubtotal(carrinho);
  const totalDesconto = calcDescontoTotal(subtotal, desconto);
  const total = subtotal - totalDesconto;
  const totalPago = pagamentos.reduce((acc, p) => acc + p.valor, 0);
  const troco = Math.max(0, totalPago - total);
  const falta = Math.max(0, total - totalPago);

  const addPagamento = (tipo: PagamentoTipo) => {
    const valorRestante = falta > 0 ? falta : total;
    setPagamentos(prev => [...prev, { tipo, valor: valorRestante }]);
  };

  const removerPagamento = (index: number) => {
    setPagamentos(prev => prev.filter((_, i) => i !== index));
  };

  const finalizarVenda = async () => {
    if (falta > 0) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setVendaConcluida(true);
  };

  const novaVenda = () => {
    setCarrinho([]);
    setPagamentos([]);
    setDesconto(0);
    setShowPagamento(false);
    setVendaConcluida(false);
  };

  if (vendaConcluida) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-xl max-w-sm w-full p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={40} className="text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Venda Concluída!</h2>
          <p className="text-slate-500 mb-6">Pagamento processado com sucesso</p>
          <div className="space-y-3">
            <p className="text-3xl font-bold text-emerald-600">{formatCurrency(total)}</p>
            <p className="text-sm text-slate-400">Troco: {formatCurrency(troco)}</p>
          </div>
          <div className="flex gap-3 mt-8">
            <button 
              onClick={() => navigate("/vendas/pdv/fechamento")}
              className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 font-medium"
            >
              Fechar Caixa
            </button>
            <button 
              onClick={novaVenda}
              className="flex-1 py-3 rounded-xl bg-emerald-600 text-white font-medium"
            >
              Nova Venda
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar - Produtos */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 px-5 py-3 flex items-center gap-4">
          <button 
            onClick={() => navigate("/dashboard")}
            className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
          >
            <ArrowLeft size={20} className="text-slate-600" />
          </button>
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar produto por nome ou código..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 text-slate-900"
            />
          </div>
          <button 
            onClick={() => setShowSangria(true)}
            className="px-4 py-2 rounded-xl bg-red-50 text-red-600 font-medium hover:bg-red-100 transition-colors"
          >
            Sangria
          </button>
          <button 
            onClick={() => setShowSuprimento(true)}
            className="px-4 py-2 rounded-xl bg-emerald-50 text-emerald-600 font-medium hover:bg-emerald-100 transition-colors"
          >
            Suprimento
          </button>
          <button 
            onClick={() => navigate("/vendas/pdv/fechamento")}
            className="px-4 py-2 rounded-xl bg-slate-800 text-white font-medium hover:bg-slate-900 transition-colors"
          >
            Fechar Caixa
          </button>
        </div>

        {/* Categorias */}
        <div className="bg-white border-b border-slate-200 px-5 py-3 flex gap-2 overflow-x-auto">
          <button
            onClick={() => setCategoriaAtiva("todos")}
            className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-colors ${
              categoriaAtiva === "todos" 
                ? "bg-emerald-600 text-white" 
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Todos
          </button>
          {CATEGORIAS.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategoriaAtiva(cat.id)}
              className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-colors ${
                categoriaAtiva === cat.id 
                  ? "bg-emerald-600 text-white" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.nome}
            </button>
          ))}
        </div>

        {/* Grid de Produtos */}
        <div className="flex-1 p-5 overflow-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {produtosFiltrados.map(produto => (
              <button
                key={produto.id}
                onClick={() => addAoCarrinho(produto)}
                className="bg-white rounded-2xl border border-slate-200 p-4 text-left hover:border-emerald-500 hover:shadow-lg transition-all group"
              >
                <div className="aspect-square bg-slate-100 rounded-xl mb-3 flex items-center justify-center">
                  <Package size={32} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
                </div>
                <p className="font-semibold text-slate-900 text-sm line-clamp-2">{produto.nome}</p>
                <p className="text-emerald-600 font-bold mt-1">{formatCurrency(produto.preco)}</p>
                <p className="text-xs text-slate-400 mt-1">Estoque: {produto.estoque}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Carrinho Sidebar */}
      <div className="w-96 bg-white border-l border-slate-200 flex flex-col">
        {/* Header Carrinho */}
        <div className="p-5 border-b border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <ShoppingBag size={20} className="text-emerald-600" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">Carrinho</h2>
              <p className="text-sm text-slate-500">{carrinho.length} itens</p>
            </div>
          </div>
        </div>

        {/* Itens */}
        <div className="flex-1 overflow-auto p-4 space-y-3">
          {carrinho.length === 0 ? (
            <div className="text-center py-10">
              <ShoppingBag size={48} className="text-slate-200 mx-auto mb-3" />
              <p className="text-slate-400">Carrinho vazio</p>
              <p className="text-sm text-slate-300">Adicione produtos para iniciar</p>
            </div>
          ) : (
            carrinho.map((item, index) => (
              <div key={item.produto.id} className="bg-slate-50 rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <Package size={20} className="text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 text-sm">{item.produto.nome}</p>
                    <p className="text-emerald-600 font-semibold">{formatCurrency(item.produto.preco * item.quantidade)}</p>
                  </div>
                  <button 
                    onClick={() => removerDoCarrinho(item.produto.id)}
                    className="text-red-400 hover:text-red-600"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <button 
                    onClick={() => atualizarQuantidade(item.produto.id, item.quantidade - 1)}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 text-center font-semibold">{item.quantidade}</span>
                  <button 
                    onClick={() => atualizarQuantidade(item.produto.id, item.quantidade + 1)}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Resumo */}
        <div className="p-5 border-t border-slate-200 bg-slate-50">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Subtotal</span>
              <span className="font-medium">{formatCurrency(subtotal)}</span>
            </div>
            {desconto > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Desconto</span>
                <span className="font-medium text-red-500">-{formatCurrency(totalDesconto)}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Tag size={16} className="text-slate-400" />
              <input
                type="number"
                value={desconto}
                onChange={(e) => setDesconto(Number(e.target.value))}
                placeholder="Desconto %"
                className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-emerald-500"
              />
              <span className="text-slate-400 text-sm">%</span>
            </div>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-slate-200 mb-4">
            <span className="text-lg font-bold text-slate-900">Total</span>
            <span className="text-2xl font-bold text-emerald-600">{formatCurrency(total)}</span>
          </div>
          <button 
            onClick={() => setShowPagamento(true)}
            disabled={carrinho.length === 0}
            className="w-full py-4 rounded-xl bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Finalizar Venda
          </button>
        </div>
      </div>

      {/* Modal Pagamento */}
      {showPagamento && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Pagamento</h3>
              <button 
                onClick={() => setShowPagamento(false)}
                className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200"
              >
                <X size={20} />
              </button>
            </div>

            <div className="text-center mb-6">
              <p className="text-slate-500">Total a pagar</p>
              <p className="text-4xl font-bold text-emerald-600">{formatCurrency(total)}</p>
            </div>

            {/* Formas de Pagamento */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {(Object.keys(PAGAMENTO_CONFIG) as PagamentoTipo[]).map(tipo => {
                const config = PAGAMENTO_CONFIG[tipo];
                return (
                  <button
                    key={tipo}
                    onClick={() => addPagamento(tipo)}
                    className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all text-center"
                  >
                    <span className="text-2xl mb-2 block">{config.emoji}</span>
                    <span className="font-medium text-slate-700">{config.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Pagamentos Adicionados */}
            {pagamentos.length > 0 && (
              <div className="space-y-2 mb-6">
                {pagamentos.map((pag, index) => (
                  <div key={index} className="flex items-center justify-between bg-slate-50 p-3 rounded-xl">
                    <div className="flex items-center gap-2">
                      <span>{PAGAMENTO_CONFIG[pag.tipo].emoji}</span>
                      <span className="font-medium">{PAGAMENTO_CONFIG[pag.tipo].label}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold">{formatCurrency(pag.valor)}</span>
                      <button 
                        onClick={() => removerPagamento(index)}
                        className="text-red-400 hover:text-red-600"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Troco/Falta */}
            {totalPago > 0 && (
              <div className={`p-4 rounded-xl mb-6 ${troco > 0 ? 'bg-emerald-50' : falta > 0 ? 'bg-amber-50' : 'bg-emerald-50'}`}>
                <div className="flex justify-between items-center">
                  <span className="font-medium">{troco > 0 ? 'Troco' : falta > 0 ? 'Falta' : 'Pago'}</span>
                  <span className={`text-xl font-bold ${troco > 0 ? 'text-emerald-600' : falta > 0 ? 'text-amber-600' : 'text-emerald-600'}`}>
                    {formatCurrency(troco > 0 ? troco : falta > 0 ? falta : total)}
                  </span>
                </div>
              </div>
            )}

            <button 
              onClick={finalizarVenda}
              disabled={falta > 0 || carrinho.length === 0 || loading}
              className="w-full py-4 rounded-xl bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {loading ? <><Loader2 size={20} className="animate-spin" /> Processando...</> : 'Confirmar Pagamento'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
