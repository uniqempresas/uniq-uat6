# SPEC - Sprint 14: Módulo Métricas e Analytics

**Versão:** 1.0  
**Data:** 2026-04-14  
**Responsável:** Vibe Planner  
**Módulo:** Métricas e Analytics (UNIQ Empresas)  
**Status:** Especificação Técnica  

---

## 1. Visão Geral do Módulo

### 1.1 Objetivo
Criar o módulo de **Métricas e Analytics** do UNIQ Empresas, permitindo que proprietários, gerentes e administradores visualizem dados de desempenho e tomem decisões baseadas em dados consolidados do sistema.

### 1.2 Escopo MVP
- Dashboard consolidado com KPIs principais
- 5 relatórios detalhados (Vendas, Financeiro, Grão de Clientes, Agendamentos, Produtos)
- Componentes de visualização usando Tremor (@tremor/react)
- Filtros e período configurável
- Exportação básica de dados

### 1.3 Stack Tecnológico
- **Frontend:** React 19 + TypeScript + Vite
- **Estilização:** Tailwind CSS + shadcn/ui
- **Gráficos:** Tremor (@tremor/react)
- **Roteamento:** React Router v7
- **Bibliotecas Utility:** date-fns (datas), numeral.js (formatação de números)

---

## 2. Estrutura de Arquivos Final

### 2.1 Diretórios a Criar

```
src/app/components/metricas/
├── pages/
│   ├── MetricasDashboardPage.tsx      # Dashboard principal (rota: /metricas/dashboard)
│   ├── VendasPage.tsx               # Relatório de vendas (rota: /metricas/vendas)
│   ├── FinanceiroPage.tsx          # Relatório financeiro (rota: /metricas/financeiro)
│   ├── ClientesPage.tsx             # Relatório de clientes (rota: /metricas/clientes)
│   ├── AgendamentosPage.tsx        # Relatório de agendamentos (rota: /metricas/agendamentos)
│   └── ProdutosPage.tsx             # Relatório de produtos (rota: /metricas/produtos)
├── components/
│   ├── KPICard.tsx                 # Card de KPI individual
│   ├── KPIGrid.tsx                 # Grid de 4 KPIs principais
│   ├── DateRangePicker.tsx         # Seletor de período
│   ├── FiltrosAvancados.tsx         # Painel de filtros
│   ├── VendasChart.tsx             # Gráfico de vendas (área/linha)
│   ├── ProdutosChart.tsx           # Gráfico de produtos (barras)
│   ├── ClientesDistribution.tsx    # Gráfico de distribuição (pizza/donut)
│   ├── AgendamentosHeatmap.tsx      # Heatmap de agendamentos
│   ├── MetricasTable.tsx            # Tabela de dados
│   └── ExportButton.tsx             # Botão de exportação
├── hooks/
│   ├── useMetricas.ts              # Hook principal de busca de métricas
│   └── useDateRange.ts            # Hook de gerenciamento de período
├── types/
│   └── metricas.ts               # Tipos TypeScript
├── data/
│   └── mockData.ts               # Dados mockados para desenvolvimento
└── styles/
    └── metricas.css              # Estilos específicos (se necessário)
```

### 2.2 Arquivos de Rotas (routes.tsx)

```typescript
// Novas rotas a adicionar em src/app/routes.tsx
'/metricas' -> layout com sidebar
  '/metricas/dashboard' -> MetricasDashboardPage
  '/metricas/vendas' -> VendasPage
  '/metricas/financeiro' -> FinanceiroPage
  '/metricas/clientes' -> ClientesPage
  '/metricas/agendamentos' -> AgendamentosPage
  '/metricas/produtos' -> ProdutosPage
```

---

## 3. Tipos e Interfaces TypeScript

### 3.1 Tipos Principais (src/app/components/metricas/types/metricas.ts)

```typescript
// ===========================================
// TIPOS BASE
// ===========================================

/**Período para filtragem de dados*/
export type Periodo = 
  | 'hoje' 
  | 'ontem' 
  | 'ultimos-7-dias' 
  | 'este-mes' 
  | 'mes-passado' 
  | 'este-ano' 
  | 'ano-passado' 
  | 'personalizado';

/**Tipo de período para comparação*/
export type TipoComparacao = 
  | 'periodo-anterior' 
  | 'mesmo-periodo-ano-anterior' 
  | 'nenhuma';

/**Intervalo de datas*/
export interface IntervaloData {
  inicio: Date;
  fim: Date;
}

/**Valor com tendência*/
export interface ValorTendencia {
  valor: number;
  tendencia: number; // Porcentagem (-100 a +100)
  direcao: 'up' | 'down' | 'stable';
}

// ===========================================
// KPI
// ===========================================

/**Tipos de KPI suportados*/
export type TipoKPI = 
  | 'faturamento' 
  | 'vendas' 
  | 'ticket-medio' 
  | 'novos-clientes' 
  | 'taxa-conversao' 
  | 'receitas' 
  | 'despesas' 
  | 'lucro'
  | 'saldo'
  | 'agendamentos'
  | 'taxa-comparecimento'
  | 'taxa-cancelamento'
  | 'tempo-medio-espera'
  | 'ocupacao'
  | 'clientes-ativos'
  | 'churn-rate'
  | 'produtos-vendidos'
  | 'estoque-atual';

/**KPI individual*/
export interface KPI {
  id: string;
  tipo: TipoKPI;
  label: string;
  valor: number;
  formato: 'currency' | 'number' | 'percent';
  tendencia: number;
  periodoAnterior?: number;
  meta?: number;
  icon?: string;
}

// ===========================================
// DADOS DE VENDAS
// ===========================================

/**Venda individual*/
export interface DadoVenda {
  id: string;
  data: Date;
  cliente: {
    id: string;
    nome: string;
  };
  produtos: Array<{
    id: string;
    nome: string;
    quantidade: number;
    valorUnitario: number;
  }>;
  valorTotal: number;
  desconto: number;
  formaPagamento: 'dinheiro' | 'cartao' | 'pix' | 'boleto';
  status: 'pendente' | 'pago' | 'cancelado';
  colaborador: {
    id: string;
    nome: string;
  };
}

/**Resumo de vendas por período*/
export interface ResumoVendas {
  total: number;
  quantidade: number;
  ticketMedio: number;
  porCategoria: Array<{
    categoria: string;
    valor: number;
    quantidade: number;
  }>;
  porCanal: Array<{
    canal: string;
    valor: number;
  }>;
  tendencia: number;
}

// ===========================================
// DADOS FINANCEIROS
// ===========================================

/**Movimentação financeira*/
export interface MovimentacaoFinanceira {
  id: string;
  data: Date;
  descricao: string;
  categoria: string;
  tipo: 'entrada' | 'saida';
  valor: number;
  status: 'confirmado' | 'pendente';
}

/**Resumo financeiro*/
export interface ResumoFinanceiro {
  receitas: number;
  despesas: number;
  lucro: number;
  saldo: number;
  porCategoria: Array<{
    categoria: string;
    valor: number;
    tipo: 'entrada' | 'saida';
  }>;
}

// ===========================================
// DADOS DE CLIENTES
// ===========================================

/**Cliente cadastrado*/
export interface DadoCliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  dataCadastro: Date;
  totalGasto: number;
  ultimaCompra?: Date;
  frequencia: number;
  status: 'ativo' | 'inativo' | 'inativo-30-dias' | 'inativo-90-dias';
}

/**Resumo de clientes*/
export interface ResumoClientes {
  totalClientes: number;
  novosClientes: number;
  clientesAtivos: number;
  churnRate: number;
  ticketMedio: number;
  porFaixaEtaria: Array<{
    faixa: string;
    quantidade: number;
  }>;
  porGenero: Array<{
    genero: string;
    quantidade: number;
  }>;
  porBairro: Array<{
    bairro: string;
    quantidade: number;
  }>;
  porCanal: Array<{
    canal: string;
    quantidade: number;
  }>;
}

// ===========================================
// DADOS DE AGENDAMENTOS
// ===========================================

/**Agendamento realizado*/
export interface DadoAgendamento {
  id: string;
  data: Date;
  hora: string;
  cliente: {
    id: string;
    nome: string;
  };
  servico: {
    id: string;
    nome: string;
    duracao: number;
  };
  colaborador: {
    id: string;
    nome: string;
  };
  valor: number;
  status: 'realizado' | 'cancelado' | 'faltoso';
  duracaoReal?: number;
}

/**Resumo de agendamentos*/
export interface ResumoAgendamentos {
  total: number;
  realizados: number;
  comparecimento: number;
  cancelamentos: number;
  faltosos: number;
  receita: number;
  ocupacao: number;
  porDiaSemana: Array<{
    dia: string;
    quantidade: number;
  }>;
  porHora: Array<{
    hora: string;
    quantidade: number;
  }>;
  porColaborador: Array<{
    colaborador: string;
    quantidade: number;
    receita: number;
  }>;
}

// ===========================================
// DADOS DE PRODUTOS
// ===========================================

/**Produto vendido*/
export interface DadoProduto {
  id: string;
  sku: string;
  nome: string;
  categoria: string;
  quantidadeVendida: number;
  estoqueAtual: number;
  valorEstoque: number;
  valorUnitario: number;
  margem: number;
  diasEstoque: number;
  status: 'disponivel' | 'baixo-estoque' | 'esgotado';
}

/**Resumo de produtos*/
export interface ResumoProdutos {
  maisVendidos: Array<{
    id: string;
    nome: string;
    quantidade: number;
    valor: number;
  }>;
  maiorMargem: Array<{
    id: string;
    nome: string;
    margem: number;
  }>;
  giro: number;
  parados: number;
  emFalta: number;
  valorTotalEstoque: number;
  porCategoria: Array<{
    categoria: string;
    quantidade: number;
    valor: number;
  }>;
}

// ===========================================
// FILTROS
// ===========================================

/**Filtros avançados para relatórios*/
export interface FiltrosMetricas {
  periodo: Periodo;
  intervaloData?: IntervaloData;
  compararCom?: TipoComparacao;
  categoria?: string[];
  canal?: string[];
  colaborador?: string[];
  cliente?: string[];
  formaPagamento?: string[];
  status?: string[];
}
```

---

## 4. Componentes - Especificação Detalhada

### 4.1 KPICard

**Arquivo:** `src/app/components/metricas/components/KPICard.tsx`  
**Props:**
```typescript
interface KPICardProps {
  tipo: TipoKPI;
  label: string;
  valor: number;
  formato: 'currency' | 'number' | 'percent';
  tendencia: number;
  periodoAnterior?: number;
  meta?: number;
  variant?: 'default' | 'with-progress' | 'with-sparkline' | 'compact';
  className?: string;
}
```

**Especificação Visual:**
- Container com borda arredondada (border-radius: 12px)
- Padding interno: 24px
- Fundo: card-background (shadcn)
- Sombra sutil em hover

**Conteúdo:**
- Ícone opcional no topo (24x24px)
- Label: text-sm, text-muted-foreground
- Valor principal: text-2xl font-bold
- Indicador de tendência: badge verde (↑) ou vermelho (↓)
- Comparativo "vs período anterior": text-sm, text-muted-foreground
- Progress bar (se variant='with-progress'): 8px altura, border-radius 4px
- Mini sparkline (se variant='with-sparkline'): 80x30px

**Cores por tendência:**
- Positiva (> 0): text-green-500, bg-green-50
- Negativa (< 0): text-red-500, bg-red-50
- Estável (0): text-gray-500, bg-gray-50

**Formatos de valor:**
- currency: R$ 1.234,56
- number: 1.234
- percent: 12,34%

**Estados:**
- Default: estado normal
- Loading: skeleton animation
- Error: mensagem de erro inline

---

### 4.2 KPIGrid

**Arquivo:** `src/app/components/metricas/components/KPIGrid.tsx`  
**Props:**
```typescript
interface KPIGridProps {
  kpis: KPI[];
  variant?: 'default' | 'compact';
  loading?: boolean;
}
```

**Especificação Visual:**
- Grid: 4 colunas em desktop, 2 em tablet, 1 em mobile
- Gap: 16px entre cards
- Layout automaticamente responsivo

**4 KPIs Principais (Dashboard):**
1. Faturamento (currency)
2. Total de Vendas (number)
3. Ticket Médio (currency)
4. Novos Clientes (number)

---

### 4.3 DateRangePicker

**Arquivo:** `src/app/components/metricas/components/DateRangePicker.tsx`  
**Props:**
```typescript
interface DateRangePickerProps {
  value: IntervaloData;
  onChange: (date: IntervaloData) => void;
  preset?: Periodo;
  onPresetChange?: (preset: Periodo) => void;
  showCompare?: boolean;
  compareValue?: TipoComparacao;
  onCompareChange?: (compare: TipoComparacao) => void;
}
```

**Especificação Visual:**
- Dropdown com input de período
- Ícone de calendário (Lucide)
- Formato: dd/MM/yyyy - dd/MM/yyyy
- Botão de dropdown à direita

**Presets disponíveis:**
- Hoje
- Ontem
- Últimos 7 dias
- Este mês
- Mês passado
- Este ano
- Ano passado
- Personalizado

**Comportamento:**
- Clique abre Popover com calendário
- Seleção de data de início e fim
- Botão "Aplicar" confirma
- Botão "Limpar" reset

---

### 4.4 FiltrosAvancados

**Arquivo:** `src/app/components/metricas/components/FiltrosAvancados.tsx`  
**Props:**
```typescript
interface FiltrosAvancadosProps {
  filtros: FiltrosMetricas;
  onChange: (filtros: FiltrosMetricas) => void;
  opcoes?: {
    categorias?: Array<{ value: string; label: string }>;
    canais?: Array<{ value: string; label: string }>;
    colaboradores?: Array<{ value: string; label: string }>;
    formasPagamento?: Array<{ value: string; label: string }>;
  };
}
```

**Especificação Visual:**
- Painel colapsável
- Badge com quantidade de filtros ativos
- Lista de filtros selecionados
- Botão "Limpar tudo"
- Botão "Aplicar"

**Tipos de filtro:**
- Categoria (multi-select)
- Canal (multi-select)
- Colaborador (multi-select)
- Cliente (search)
- Forma de pagamento (multi-select)
- Status (multi-select)

---

### 4.5 VendasChart (Área/Linha)

**Arquivo:** `src/app/components/metricas/components/VendasChart.tsx`  
**Props:**
```typescript
interface VendasChartProps {
  dados: Array<{
    data: string;
    valor: number;
    quantidade?: number;
  }>;
  tipo: 'area' | 'line';
  titulo?: string;
  mostrarComparativo?: boolean;
  dadosComparativo?: Array<{
    data: string;
    valor: number;
  }>;
}
```

**Configurações do Tremor:**
```typescript
// Área
<AreaChart
  data={dados}
  index="data"
  categories={["valor"]}
  colors={["blue"]}
  valueFormatter={(v) => formatCurrency(v)}
  showLegend={true}
  showGridLines={true}
  showYAxis={true}
  showXAxis={true}
  className="h-72"
/>

// Linha
<LineChart
  data={dados}
  index="data"
  categories={["valor", "quantidade"]}
  colors={["blue", "cyan"]}
  valueFormatter={formatCurrency}
  showLegend={true}
  showGridLines={true}
  className="h-72"
/>
```

**Cores (Tremor palette):**
- Primary: blue-500
- Secondary: cyan-500
- Accent: indigo-500
- Success: emerald-500
- Warning: amber-500

**Features:**
- Tooltip com valor formatado
- Legenda interativa
- Zoom/pan (opcional)
- Exportar como imagem (opcional)

---

### 4.6 ProdutosChart (Barras)

**Arquivo:** `src/app/components/metricas/components/ProdutosChart.tsx`  
**Props:**
```typescript
interface ProdutosChartProps {
  dados: Array<{
    produto: string;
    quantidade: number;
    valor?: number;
  }>;
  tipo: 'vertical' | 'horizontal';
  ordenarPor?: 'quantidade' | 'valor';
  top?: number; // Default: 10
  titulo?: string;
}
```

**Configurações do Tremor:**
```typescript
// Barras verticais (nome abaixo do eixo)
<BarChart
  data={dados}
  index="produto"
  categories={["quantidade"]}
  colors={["blue"]}
  valueFormatter={(v) => v.toLocaleString()}
  showLegend={false}
  layout="vertical" // para barras horizontais
  className="h-72"
/>

// Barras horizontais (bom para nomes longos)
<BarChart
  data={top10}
  index="produto"
  categories={["quantidade"]}
  colors={["rose"]}
  layout="horizontal"
  className="h-72"
/>
```

**Features:**
- Rótulos de valor nas barras
- Sort by quantidade ou valor
- Limite de itens (top 10)
- Tooltip com detalhes

---

### 4.7 ClientesDistribution (Pizza/Donut)

**Arquivo:** `src/app/components/metricas/components/ClientesDistribution.tsx`  
**Props:**
```typescript
interface ClientesDistributionProps {
  dados: Array<{
    name: string;
    value: number;
  }>;
  tipo: 'pie' | 'donut';
  mostrarPorcentagem?: boolean;
  centroLabel?: string;
  centroValor?: string | number;
  titulo?: string;
}
```

**Configurações do Tremor:**
```typescript
// Pizza tradicional
<PieChart
  data={dados}
  category="name"
  value="value"
  colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
  className="h-72"
/>

// Donut (com espaço no centro)
<DonutChart
  data={dados}
  category="name"
  value="value"
  colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
  showLabel={true}
  className="h-72"
/>
```

**Features:**
- Legenda com porcentagens
- Destaque ao hover
- Cores configuráveis
- Limite de fatias (outros = agrupar resto)
- Centro com total (donut)

---

### 4.8 AgendamentosHeatmap

**Arquivo:** `src/app/components/metricas/components/AgendamentosHeatmap.tsx`  
**Props:**
```typescript
interface AgendamentosHeatmapProps {
  dados: Array<{
    diaSemana: string;
    hora: string;
    quantidade: number;
  }>;
  titulo?: string;
}
```

**Nota:** Tremor não tem Heatmap nativo. Usar implementaç��o Custom com:
- Grid de 7 colunas (dias) x 12 linhas (horas)
- Cores por intensidade (bg-opacity)
- Tooltip com quantidade

**Cores (gradiente):**
```css
/* Intensidade baixa */
.bg-blue-100

/* Intensidade média */
.bg-blue-300

/* Intensidade alta */
.bg-blue-500

/* Intensidade crítica */
.bg-blue-700
```

**Layout:**
```
         Seg  Ter  Qua  Qui  Sex  Sáb  Dom
09:00    █    ██   ██   █    █    ░
10:00    ██   █    ██   ██   █    ░
11:00    █    ██   █    █    ██   ░
... (até 18:00 ou 20:00)
```

---

### 4.9 MetricasTable

**Arquivo:** `src/app/components/metricas/components/MetricasTable.tsx`  
**Props:**
```typescript
interface MetricasTableProps<T> {
  data: T[];
  colunas: Array<{
    key: string;
    label: string;
    sortable?: boolean;
    width?: string;
    render?: (value: any, row: T) => ReactNode;
  }>;
  ordenacao?: {
    coluna: string;
    direcao: 'asc' | 'desc';
  };
  onOrdenacaoChange?: (coluna: string) => void;
  busca?: string;
  onBuscaChange?: (busca: string) => void;
  paginacao?: {
    pagina: number;
    totalPaginas: number;
    onPaginaChange: (pagina: number) => void;
  };
  exportar?: boolean;
  onExportar?: (formato: 'csv' | 'xlsx' | 'pdf') => void;
}
```

**Features:**
- Ordenação por coluna (click no header)
- Busca/filtro
- Paginação
- Linhas expansíveis (collapsible)
- Seleção múltipla
- Exportar (CSV/Excel/PDF)
- Ações por linha (Menu)

---

### 4.10 ExportButton

**Arquivo:** `src/app/components/metricas/components/ExportButton.tsx`  
**Props:**
```typescript
interface ExportButtonProps {
  formatos: Array<'csv' | 'xlsx' | 'pdf'>;
  onExport: (formato: string) => void;
  label?: string;
}
```

**Specified States:**
- Default: ícone + "Exportar"
- Hover: menu dropdown com formatos
- Loading: spinner

---

## 5. Páginas - Especificação

### 5.1 MetricasDashboardPage

**Rota:** `/metricas/dashboard`  
**Arquivo:** `src/app/components/metricas/pages/MetricasDashboardPage.tsx`

**Layout:**

```tsx
<Layout>
  <PageHeader
    title="Dashboard"
    description="Visão geral dos principais indicadores"
    actions={<DateRangePicker />}
  />

  <KPIGrid
    kpis={[
      { tipo: 'faturamento', label: 'Faturamento', ... },
      { tipo: 'vendas', label: 'Total de Vendas', ... },
      { tipo: 'ticket-medio', label: 'Ticket Médio', ... },
      { tipo: 'novos-clientes', label: 'Novos Clientes', ... }
    ]}
  />

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <VendasChart tipo="area" />
    <ProdutosChart tipo="horizontal" />
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <ClientesDistribution tipo="donut" />
    <MetricasTable data={ultimasVendas} />
  </div>
</Layout>
```

**Responsivo:**
- Desktop: 4 KPIs em linha + 2 gráficos por linha
- Tablet: 2 KPIs por linha + 1 gráfico por linha
- Mobile: 1 KPI por linha + gráficos empilhados

---

### 5.2 VendasPage

**Rota:** `/metricas/vendas`  
**Arquivo:** `src/app/components/metricas/pages/VendasPage.tsx`

**Seções:**
1. FiltrosAvancados
2. KPIGrid (faturamento, vendas, ticket médio, tendências)
3. VendasChart (linha: evolução temporal)
4. ProdutosChart (barras: por categoria)
5. ClientesDistribution (pizza: por canal)
6. MetricasTable (dados detalhados)

---

### 5.3 FinanceiroPage

**Rota:** `/metricas/financeiro`  
**Arquivo:** `src/app/components/metricas/pages/FinanceiroPage.tsx`

**KPIs Específicos:**
- Receitas do período
- Despesas do período
- Lucro/Prejuízo
- Saldo atual

**Gráficos:**
- Fluxo de caixa (linha: receitas vs despesas)
- Distribuição de despesas (pizza)
- Evolução do saldo (linha)

---

### 5.4 ClientesPage

**Rota:** `/metricas/clientes`  
**Arquivo:** `src/app/components/metricas/pages/ClientesPage.tsx`

**KPIs Específicos:**
- Total de clientes ativos
- Novos clientes no período
- Taxa de retenção
- Churn rate
- Ticket médio por cliente

**Gráficos:**
- Evolução da base (linha)
- Por faixa etária (barras)
- Por gênero (pizza)
- Por bairro (barras horizontais)

---

### 5.5 AgendamentosPage

**Rota:** `/metricas/agendamentos`  
**Arquivo:** `src/app/components/metricas/pages/AgendamentosPage.tsx`

**KPIs Específicos:**
- Total de agendamentos
- Taxa de comparecimento
- Taxa de cancelamento
- Tempo médio de espera
- Ocupação da agenda

**Gráficos:**
- Agendamentos por dia da semana (barras)
- Heatmap de horários
- Comparecimento vs faltas (pizza)
- Por colaborador (barras)

---

### 5.6 ProdutosPage

**Rota:** `/metricas/produtos`  
**Arquivo:** `src/app/components/metricas/pages/ProdutosPage.tsx`

**KPIs Específicos:**
- Produtos mais vendidos
- Productos com maior margem
- Giro de estoque
- Produtos parados
- Valor total em estoque

**Gráficos:**
- Top 10 produtos (barras)
- Curva ABC (pizza)
- Estoque mínimo vs atual (barras)
- Por categoria (pizza)

---

## 6. Hooks Customizados

### 6.1 useMetricas

**Arquivo:** `src/app/components/metricas/hooks/useMetricas.ts`

```typescript
interface UseMetricasProps {
  tipo: 'dashboard' | 'vendas' | 'financeiro' | 'clientes' | 'agendamentos' | 'produtos';
  filtros: FiltrosMetricas;
}

interface UseMetricasReturn {
  data: DashboardData | VendasData | FinanceiroData | ClientesData | AgendamentosData | ProdutosData | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

function useMetricas({ tipo, filtros }: UseMetricasProps): UseMetricasReturn
```

**Comportamento:**
- Busca dados baseados no tipo e filtros
- Loading states para cada seção
- Error handling
- Cache de 5 minutos

---

### 6.2 useDateRange

**Arquivo:** `src/app/components/metricas/hooks/useDateRange.ts`

```typescript
interface UseDateRangeProps {
  defaultPreset?: Periodo;
}

interface UseDateRangeReturn {
  preset: Periodo;
  setPreset: (preset: Periodo) => void;
  dateRange: IntervaloData;
  setDateRange: (range: IntervaloData) => void;
  compare: TipoComparacao;
  setCompare: (compare: TipoComparacao) => void;
  compararData?: IntervaloData;
}

function useDateRange({ defaultPreset = 'este-mes' }: UseDateRangeProps): UseDateRangeReturn
```

**Comportamento:**
- Gerencia preset e período customizado
- Calcula compararData automaticamente
- Persiste no localStorage

---

## 7. Mock Data

### 7.1 Estrutura (mockData.ts)

```typescript
// Dados exportados para desenvolvimento
export const mockDashboardData = { ... }
export const mockVendasData = { ... }
export const mockFinanceiroData = { ... }
export const mockClientesData = { ... }
export const mockAgendamentosData = { ... }
export const mockProdutosData = { ... }

// Helpers para gerar dados dinâmicos
export function generateVendasData(periodo: Periodo): DadoVenda[]
export function generateKPIs(periodo: Periodo): KPI[]
```

### 7.2 Volumes Sugeridos

- 100+ vendas simuladas
- 50+ clientes simulados
- 200+ movimentações financieras
- 500+ agendamentos simulados
- 30+ produtos simulados

---

## 8. Rotas (routes.tsx)

### 8.1 Estrutura de Rotas

```tsx
// Adicionar em routes.tsx dentro do path '/metricas'
{
  path: 'metricas',
  element: <AppLayout />,
  children: [
    {
      path: 'dashboard',
      element: <MetricasDashboardPage />
    },
    {
      path: 'vendas',
      element: <VendasPage />
    },
    {
      path: 'financeiro',
      element: <FinanceiroPage />
    },
    {
      path: 'clientes',
      element: <ClientesPage />
    },
    {
      path: 'agendamentos',
      element: <AgendamentosPage />
    },
    {
      path: 'produtos',
      element: <ProdutosPage />
    }
  ]
}
```

### 8.2 Navegação (Sidebar)

**Itens do menu Metricass:**
- Dashboard (DashboardOutlined)
- Vendas (ShoppingCart)
- Financeiro (DollarSign)
- Clientes (Users)
- Agendamentos (Calendar)
- Produtos (Package)

**Agrupamento:** "Métricas"

---

## 9. Checklist de Implementação

### Fase 1: Foundation (3h)
- [ ] Criar diretório src/app/components/metricas/
- [ ] Criar tipos em types/metricas.ts
- [ ] Criar mock data em data/mockData.ts
- [ ] Configurar rotas em routes.tsx
- [ ] Adicionar itens na sidebar

### Fase 2: Componentes Base (4h)
- [ ] Implementar KPICard
- [ ] Implementar KPIGrid
- [ ] Implementar DateRangePicker
- [ ] Implementar FiltrosAvancados
- [ ] Implementar MetricasTable
- [ ] Implementar ExportButton

### Fase 3: Gráficos (4h)
- [ ] Implementar VendasChart (área/linha)
- [ ] Implementar ProdutosChart (barras)
- [ ] Implementar ClientesDistribution (pizza/donut)
- [ ] Implementar AgendamentosHeatmap (custom)
- [ ] Testar responsividade dos gráficos

### Fase 4: Páginas (6h)
- [ ] Implementar MetricasDashboardPage
- [ ] Implementar VendasPage
- [ ] Implementar FinanceiroPage
- [ ] Implementar ClientesPage
- [ ] Implementar AgendamentosPage
- [ ] Implementar ProdutosPage

### Fase 5: Hooks e Integração (2h)
- [ ] Implementar useMetricas hook
- [ ] Implementar useDateRange hook
- [ ] Conectar dados mockados às páginas
- [ ] Testar filtros e período

### Fase 6: Polish (1h)
- [ ] Ajustar responsive layouts
- [ ] Testar loading states
- [ ] Testar empty states
- [ ] Ajustar cores e tipografia
- [ ] Testar performance

---

## 10. Dependências

### 10.1 Instaladas (verificar package.json)
```json
"@tremor/react": "^3.x.x",
"date-fns": "^4.x.x",
"date-fns-tz": "^3.x.x",
"numeral": "^2.x.x",
"lucide-react": "latest",
"react-router": "latest"
```

### 10.2 Necessárias (adicionar)
```bash
# nenhuma nova dependência necessária para MVP
# Tremor já deve estar instalado
```

---

## 11. Configurações de Estilo

### 11.1 Cores shadcn para Métricas
```css
/* KPI Cards */
.kpi-card {
  @apply bg-card border border-border rounded-xl p-6;
  @apply transition-all duration-200;
}

.kpi-card:hover {
  @apply shadow-lg;
}

/* Tendências */
.trend-up {
  @apply text-green-600 bg-green-50;
}

.trend-down {
  @apply text-red-600 bg-red-50;
}

.trend-stable {
  @apply text-gray-600 bg-gray-50;
}

/* Charts */
.chart-container {
  @apply bg-card border border-border rounded-xl p-6;
}
```

### 11.2 Cores Tremor
```typescript
// Paleta de cores para gráficos
const colors = {
  blue: '#3b82f6',
  cyan: '#06b6d4',
  indigo: '#6366f1',
  violet: '#8b5cf6',
  fuchsia: '#d946ef',
  rose: '#f43f5e',
  emerald: '#10b981',
  amber: '#f59e0b',
}
```

---

## 12. Considerações de Performance

### 12.1 Otimizações
- Lazy loading de gráficos (use lazy + Suspense)
- Virtualização de tabelas grandes (> 100 rows)
- Memoização de dados 计算ados
- Cache de 5 minutos para dados

### 12.2 Limites Recomendados
- Chart max: 1000 pontos de dados
- Table max: 1000 rows antes de paginação
- Sparkline max: 30 dias

---

## 13. Testes Recomendados

### 13.1 Unit Tests
- KPICard renderização com diferentes formatos
- DateRangePicker cálculo de datas
- FiltrosAvancados aplicação de filtros

### 13.2 Integration Tests
- Navegação entre páginas
- Filtros atualizam dados
- Exportação gera arquivos

### 13.3 E2E Tests
- Fluxo completo do Dashboard
- Aplicar filtros e comparar resultados
- Exportar relatório

---

## 14. Referências

### UI Map
- Seção 12: Telas de Métricas
- Seção 13: Formulários/Modais de Métricas
- Seção 14: Componentes de Gráficos

### Docs Tremor
- https://www.tremor.so/docs/getting-started/installation

### Padrões Existentes
- src/app/components/financeiro/ (padrão de layout)
- src/app/components/employees/ (padrão de tabela)

---

**SPEC Concluída.**  
A implementação deve seguir este documento fielmente.  
Dúvidas devem ser esclarecidas antes do início da sprint.