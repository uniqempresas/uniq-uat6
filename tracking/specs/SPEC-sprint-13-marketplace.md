# SPEC - Sprint 13: Marketplace Module

## 1. Overview

### 1.1 Purpose
This specification defines the technical implementation for the **Marketplace** module in the UNIQ Empresas platform. The Marketplace enables a multi-vendor e-commerce ecosystem where customers can browse products from multiple sellers in a unified shopping experience.

### 1.2 Scope
- Complete Marketplace frontend implementation
- Cross-vendor shopping cart
- Checkout flow
- Vendor dashboard (seller panel)
- Public storefront without authentication

### 1.3 Tech Stack
- React 19 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- React Router v7

---

## 2. File Structure

All Marketplace files will be created in `src/app/`.

### 2.1 Directory Structure

```
src/app/
├── components/
│   └── marketplace/
│       ├── LojistaCard.tsx
│       ├── LojistaGrid.tsx
│       ├── ProdutoMarketplaceCard.tsx
│       ├── Carrinho.tsx
│       ├── CarrinhoItem.tsx
│       ├── MarketplaceFilters.tsx
│       ├── CheckoutForm.tsx
│       ├── ResumoPedido.tsx
│       ├── PainelVendedor.tsx
│       ├── EstatisticasVendedor.tsx
│       └── PedidosVendedor.tsx
├── hooks/
│   ├── useMarketplace.ts
│   ├── useCarrinho.ts
│   └── useVendedor.ts
├── lib/
│   └── mocks/
│       └── marketplace.ts
└── types/
    └── marketplace.ts
```

---

## 3. Types & Mock Data

### 3.1 TypeScript Interfaces

```typescript
// Status do pedido
export type PedidoStatus = 'pendente' | 'pago' | 'enviado' | 'entregue' | 'cancelado';

// Tipo de lojista
export type LojistaTipo = 'varejo' | 'atacado' | 'servicos';

// Interface Lojista (Vendedor)
export interface Lojista {
  id: string;
  nome: string;
  slug: string;
  descricao: string;
  logoUrl?: string;
  capaUrl?: string;
  tipo: LojistaTipo;
  nota: number; // 0-5
  totalAvaliacoes: number;
  telefone?: string;
  email?: string;
  endereco?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  createdAt: string;
  atualizadoEm: string;
}

// Interface Produto
export interface Produto {
  id: string;
  lojistaId: string;
  nome: string;
  slug: string;
  descricao: string;
  preco: number; // em centavos
  precoPromocional?: number; // em centavos
  imagemUrl: string;
  imagens?: string[];
  categoria: string;
  subcategoria?: string;
  estoque: number;
  sku?: string;
  peso?: number; // em gramas
  dimensoes?: {
    largura: number;
    altura: number;
    profundidade: number;
  };
  freteGratis: boolean;
 freteValor?: number;
  destaque: boolean;
  status: 'ativo' | 'inativo';
  criadoEm: string;
  atualizadoEm: string;
}

// Interface CarrinhoItem
export interface CarrinhoItem {
  produtoId: string;
  lojistaId: string;
  quantidade: number;
  produto: Produto;
  lojista: Lojista;
}

// Interface PedidoItem
export interface PedidoItem {
  produtoId: string;
  produtoNome: string;
  quantidade: number;
  precoUnitario: number;
  precoTotal: number;
}

// Interface Pedido
export interface Pedido {
  id: string;
  clienteId: string;
  clienteNome: string;
  clienteEmail: string;
  itens: PedidoItem[];
  status: PedidoStatus;
  valorSubtotal: number;
  valorFrete: number;
  valorTotal: number;
  formaPagamento: string;
  enderecoEntrega: {
    logradouro: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  dataPedido: string;
  dataPagamento?: string;
  dataEnvio?: string;
  dataEntrega?: string;
}

// Interface para itens agrupados por lojista no carrinho
export interface CarrinhoAgrupado {
  lojista: Lojista;
  itens: CarrinhoItem[];
  subtotal: number;
  freight: number;
}

// Interface VendedorStats
export interface VendedorStats {
  totalVendas: number;
  pedidosPendentes: number;
  pedidosPagos: number;
  pedidosEnviados: number;
  pedidosEntregues: number;
  receitaTotal: number;
  ticketMedio: number;
  produtosAtivos: number;
  avaliacaoMedia: number;
  graficoVendas: {
    mes: string;
    valor: number;
  }[];
}
```

### 3.2 Mock Data Requirements

#### 3.2.1 Lojistas (5 lojistas)
- Lojista 1: "TechStore" (eletrônicos)
- Lojista 2: "Moda Urbana" (roupas)
- Lojista 3: "Casa & Decor" (decoração)
- Lojista 4: "Beauty Lab" (cosméticos)
- Lojista 5: "Pet Love" (petshop)

#### 3.2.2 Produtos (20 produtos)
- 4 produtos por lojista
- Preços variados (R$ 29,90 a R$ 299,90)
- Mix de produtos em destaque e regulares
- Estoquevariado (0 a 100 unidades)

#### 3.2.3 Pedidos (10 pedidos)
- Distribuídos entre os 5 lojistas
- Estados variados: 2 pendentes, 3 pagos, 2 enviados, 2 entregues, 1 cancelado

---

## 4. Components Specification

### 4.1 LojistaCard
- **Purpose**: Display vendor card in grid
- **Props**: `lojista: Lojista`
- **Content**: Logo, nome, nota (estrelas), tipo, cidade/estado
- **Behavior**: Click navigates to `/marketplace/lojista/:id`

### 4.2 LojistaGrid
- **Purpose**: Grid layout for vendor listing
- **Props**: `lojistas: Lojista[]`
- **Layout**: Responsive grid (1 col mobile, 2 col tablet, 3-4 col desktop)

### 4.3 ProdutoMarketplaceCard
- **Purpose**: Display product in marketplace
- **Props**: `produto: Produto`, `lojista: Lojista`
- **Content**: Image, nome, preço (com promocional), freight info, seller name
- **Behavior**: Add to cart button, click navigates to product detail

### 4.4 Carrinho
- **Purpose**: Unified cart for multi-vendor purchases
- **Props**: None (uses useCarrinho hook)
- **Content**: Grouped by vendor, quantity controls, remove button, subtotal per vendor, total geral
- **Behavior**: Real-time updates, persistência no localStorage

### 4.5 CarrinhoItem
- **Purpose**: Individual cart item
- **Props**: `item: CarrinhoItem`, handlers
- **Content**: Product image, nome, price, quantity selector

### 4.6 MarketplaceFilters
- **Purpose**: Filter products in marketplace
- **Props**: `onFilterChange: (filters) => void`
- **Filters**: Categoria, price range, freight gratis, evaluation

### 4.7 CheckoutPage
- **Purpose**: Checkout flow
- **Props**: None
- **Content**: Resumo do carrinho, dados do cliente, forma de pagamento, endereço
- **Behavior**: Form validation, order creation

### 4.8 ResumoPedido
- **Purpose**: Order summary component
- **Props**: `itens: CarrinhoAgrupado[]`, `frete: number`, `total: number`

### 4.9 CheckoutForm
- **Purpose**: Checkout form
- **Props**: `onSubmit: (data) => void`
- **Fields**: Nome, email, telefone, endereço completo

### 4.10 PainelVendedor
- **Purpose**: Seller dashboard home
- **Props**: None (uses useVendedor hook)
- **Content**: Stats overview, recent orders, quick actions

### 4.11 EstatisticasVendedor
- **Purpose**: Vendor statistics cards
- **Props**: `stats: VendedorStats`
- **Content**: KPIs with trend indicators

### 4.12 PedidosVendedor
- **Purpose**: Orders received list
- **Props**: `pedidos: Pedido[]`
- **Content**: Table with order ID, cliente, valor, status, data
- **Behavior**: Click navigates to order detail, status update

---

## 5. Hooks Specification

### 5.1 useMarketplace

```typescript
interface UseMarketplaceReturn {
  lojistas: Lojista[];
  produtos: Produto[];
  lojistaAtual: Lojista | null;
  produtosLojista: Produto[];
  loading: boolean;
  error: string | null;
  getLojistaById: (id: string) => Lojista | undefined;
  getProdutosByLojista: (lojistaId: string) => Produto[];
  filtrarProdutos: (filtros: FilterOptions) => Produto[];
}
```

### 5.2 useCarrinho

```typescript
interface UseCarrinhoReturn {
  itens: CarrinhoItem[];
  itensAgrupados: CarrinhoAgrupado[];
  quantidadeTotal: number;
  subtotalGeral: number;
  freightGeral: number;
  valorTotal: number;
  adicionarItem: (produto: Produto, quantidade: number) => void;
  removerItem: (produtoId: string) => void;
  atualizarQuantidade: (produtoId: string, quantidade: number) => void;
  limparCarrinho: () => void;
  temItem: (produtoId: string) => boolean;
}
```

### 5.3 useVendedor

```typescript
interface UseVendedorReturn {
  stats: VendedorStats | null;
  pedidos: Pedido[];
  loading: boolean;
  error: string | null;
  atualizarStatusPedido: (pedidoId: string, status: PedidoStatus) => void;
  getPedidosPorStatus: (status: PedidoStatus) => Pedido[];
}
```

---

## 6. Routes Specification

### 6.1 Route Definition

Add to `routes.tsx`:

```typescript
// Marketplace routes (public - no AppLayout)
{ path: "/marketplace", Component: MarketplacePage },
{ path: "/marketplace/lojista/:id", Component: LojistaPerfilPage },
{ path: "/marketplace/carrinho", Component: CarrinhoPage },
{ path: "/marketplace/checkout", Component: CheckoutPage },

// Vendedor routes (protected - AppLayout)
{ path: "/marketplace/vendedor", Component: PainelVendedorPage },
{ path: "/marketplace/vendedor/pedidos", Component: PedidosVendedorPage },
{ path: "/marketplace/vendedor/pedidos/:id", Component: PedidoDetalheVendedorPage },
```

### 6.2 Route Descriptions

| Route | Component | Description |
|-------|-----------|-------------|
| `/marketplace` | MarketplacePage | Grid de lojistas com filtros |
| `/marketplace/lojista/:id` | LojistaPerfilPage | Perfil do lojista + produtos |
| `/marketplace/carrinho` | CarrinhoPage | Carrinho unificado |
| `/marketplace/checkout` | CheckoutPage | Checkout final |
| `/marketplace/vendedor` | PainelVendedorPage | Dashboard do vendedor |
| `/marketplace/vendedor/pedidos` | PedidosVendedorPage | Lista de pedidos |

---

## 7. Business Rules

### 7.1 Cross-Vendor Cart
- Products from multiple vendors can be added to the same cart
- Cart must be grouped by vendor for freight calculation
- Each vendor can have different freight rules

### 7.2 Freight Calculation
- Freight calculated per vendor
- If vendor has "frete_gratis" flag, freight is R$ 0 for that vendor
- Otherwise, freight based on product weight + destination
- Mock: Fixed R$ 15,90 per vendor

### 7.3 Order Status Flow
```
pendente → pago → enviado → entregue
    ↑___________|__________|
              ↓
          cancelado
```

### 7.4 Order Status Descriptions
- **pendente**: Aguardando pagamento
- **pago**: Pagamento confirmado
- **enviado**: Produto enviado ao cliente
- **entregue**: Produto entregue
- **cancelado**: Pedido cancelado

### 7.5 Cart Persistence
- Cart data persisted in localStorage
- Data cleared after successful checkout
- Cart survives page refresh

### 7.6 Price Display
- Prices stored in cents, display in BRL format
- Show promotional price if available
- Show "Frete Grátis" badge when applicable

---

## 8. Acceptance Criteria

### 8.1 Marketplace Page
- [ ] Grid displays all 5 vendors
- [ ] Each vendor card shows: logo, nome, nota, tipo, localização
- [ ] Clicking vendor card navigates to vendor profile

### 8.2 Vendor Profile
- [ ] Shows vendor information (nome, descrição, avaliação)
- [ ] Displays vendor products in grid
- [ ] Add to cart works for any product

### 8.3 Shopping Cart
- [ ] Products from multiple vendors display grouped
- [ ] Quantity can be updated per item
- [ ] Items can be removed
- [ ] Subtotal per vendor is correct
- [ ] Total geral is correct
- [ ] Cart persists after page refresh

### 8.4 Checkout
- [ ] Shows order summary
- [ ] Form validation for required fields
- [ ] Order creation clears cart
- [ ] Success message displayed

### 8.5 Vendor Dashboard
- [ ] Shows statistics: total vendas, pedidos pendentes, receita
- [ ] Lists orders received
- [ ] Can update order status
- [ ] Displays order details

---

## 9. Implementation Notes

### 9.1 State Management
- Use React Context for cart state
- Local component state for forms
- localStorage for cart persistence

### 9.2 UI/UX
- Use shadcn/ui components
- Tailwind for custom styling
- Responsive design mobile-first

### 9.3 Performance
- Lazy load vendor products
- Memoize expensive calculations
- Debounce filter inputs

### 9.4 Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
