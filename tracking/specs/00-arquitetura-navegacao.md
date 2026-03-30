# Arquitetura de Navegação - UNIQ Empresas

## 1. Introdução

Este documento define a arquitetura de navegação completa da plataforma **UNIQ Empresas**, um sistema ERP completo com múltiplos módulos integrados (CRM, Financeiro, Estoque, PDV, Marketplace, Loja Virtual, Agendamentos, IA Proativa, entre outros).

### Objetivo
Fornecer um guia técnico completo sobre a estrutura de rotas, fluxos de navegação e organização de diretórios do frontend, garantindo:
- Consistência na nomenclatura de rotas
- Separação clara entre áreas públicas e autenticadas
- Facilidade de manutenção e escalabilidade
- Documentação viva para desenvolvedores

---

## 2. Diagrama Hierárquico de Rotas

```
📍 RAIZ
│
├── 🌐 ROTAS PÚBLICAS
│   ├── /                    → LandingPage
│   ├── /login               → LoginPage
│   ├── /register            → RegisterPage
│   └── /forgot-password     → ForgotPasswordPage
│
└── 🔒 ÁREA AUTENTICADA (Dashboard Layout)
    ├── /dashboard           → DashboardPage
    │
    ├── 📊 CRM (Clientes)
    │   ├── /clientes                    → ClientesListPage
    │   ├── /clientes/novo               → ClientesCreatePage
    │   ├── /clientes/:id                → ClientesDetailPage
    │   ├── /clientes/:id/editar         → ClientesEditPage
    │   └── /pipeline                    → PipelinePage
    │
    ├── 💰 FINANCEIRO
    │   ├── /financeiro                  → FinanceiroDashboardPage
    │   ├── /financeiro/contas-pagar     → ContasPagarPage
    │   ├── /financeiro/contas-receber   → ContasReceberPage
    │   ├── /financeiro/fluxo-caixa      → FluxoCaixaPage
    │   └── /financeiro/dre              → DREPage
    │
    ├── 📦 ESTOQUE
    │   ├── /estoque                     → EstoqueDashboardPage
    │   ├── /estoque/produtos            → ProdutosListPage
    │   ├── /estoque/produtos/novo       → ProdutosCreatePage
    │   ├── /estoque/produtos/:id/editar → ProdutosEditPage
    │   ├── /estoque/movimentacoes       → MovimentacoesPage
    │   └── /estoque/etiquetas           → EtiquetasPage
    │
    ├── 🛒 VENDAS PDV
    │   ├── /pdv                         → PDVDashboardPage
    │   ├── /pdv/caixa                   → PDVCaixaPage
    │   ├── /pdv/sangria                 → PDVSangriaPage
    │   ├── /pdv/suprimento              → PDVSuprimentoPage
    │   └── /pdv/relatorios              → PDVRelatoriosPage
    │
    ├── 🏪 MARKETPLACE
    │   ├── /marketplace                 → MarketplaceDashboardPage
    │   ├── /marketplace/produtos        → MarketplaceProdutosPage
    │   └── /marketplace/pedidos         → MarketplacePedidosPage
    │
    ├── 🛍️ LOJA VIRTUAL
    │   ├── /loja                        → LojaDashboardPage
    │   ├── /loja/configuracoes          → LojaConfiguracoesPage
    │   ├── /loja/catalogo               → LojaCatalogoPage
    │   ├── /loja/pedidos                → LojaPedidosPage
    │   └── /loja/checkout               → LojaCheckoutPage
    │
    ├── 📅 AGENDAMENTOS
    │   ├── /agendamentos                → AgendamentosDashboardPage
    │   ├── /agendamentos/horarios       → AgendamentosHorariosPage
    │   ├── /agendamentos/servicos       → AgendamentosServicosPage
    │   └── /agendamentos/clientes       → AgendamentosClientesPage
    │
    ├── 🤖 MEL - IA PROATIVA
    │   ├── /mel                         → MelDashboardPage
    │   ├── /mel/insights                → MelInsightsPage
    │   └── /mel/configuracoes           → MelConfiguracoesPage
    │
    ├── 🔧 CATÁLOGO DE SERVIÇOS
    │   ├── /servicos                    → ServicosListPage
    │   ├── /servicos/novo               → ServicosCreatePage
    │   └── /servicos/:id/editar         → ServicosEditPage
    │
    ├── 🏭 FORNECEDORES
    │   ├── /fornecedores                → FornecedoresListPage
    │   ├── /fornecedores/novo           → FornecedoresCreatePage
    │   └── /fornecedores/:id/editar     → FornecedoresEditPage
    │
    ├── 👥 COLABORADORES
    │   ├── /colaboradores               → ColaboradoresListPage
    │   ├── /colaboradores/novo          → ColaboradoresCreatePage
    │   ├── /colaboradores/:id/editar    → ColaboradoresEditPage
    │   └── /colaboradores/permissoes    → ColaboradoresPermissoesPage
    │
    ├── 📈 MÉTRICAS E ANALYTICS
    │   ├── /metricas                    → MetricasDashboardPage
    │   ├── /metricas/dashboard          → MetricasDetalhadoPage
    │   └── /metricas/relatorios         → MetricasRelatoriosPage
    │
    └── ⚙️ CONFIGURAÇÕES
        ├── /configuracoes               → ConfiguracoesDashboardPage
        ├── /configuracoes/empresa       → ConfiguracoesEmpresaPage
        ├── /configuracoes/integracoes   → ConfiguracoesIntegracoesPage
        ├── /configuracoes/notificacoes  → ConfiguracoesNotificacoesPage
        └── /configuracoes/plano         → ConfiguracoesPlanoPage
```

---

## 3. Tabela de Rotas Consolidada

### 3.1 Rotas Públicas

| Método | Rota | Descrição | Componente |
|--------|------|-----------|------------|
| GET | `/` | Landing page institucional | `LandingPage` |
| GET | `/login` | Página de autenticação | `LoginPage` |
| GET | `/register` | Cadastro de nova empresa | `RegisterPage` |
| GET | `/forgot-password` | Recuperação de senha | `ForgotPasswordPage` |

### 3.2 Dashboard

| Método | Rota | Descrição | Componente |
|--------|------|-----------|------------|
| GET | `/dashboard` | Painel principal com visão geral | `DashboardPage` |

### 3.3 CRM (Gestão de Clientes)

| Método | Rota | Descrição | Componente |
|--------|------|-----------|------------|
| GET | `/clientes` | Lista de clientes | `ClientesListPage` |
| GET | `/clientes/novo` | Formulário de cadastro | `ClientesCreatePage` |
| GET | `/clientes/:id` | Detalhes do cliente | `ClientesDetailPage` |
| GET | `/clientes/:id/editar` | Edição de cliente | `ClientesEditPage` |
| GET | `/pipeline` | Funil de vendas Kanban | `PipelinePage` |

### 3.4 Financeiro

| Método | Rota | Descrição | Componente |
|--------|------|-----------|------------|
| GET | `/financeiro` | Dashboard financeiro | `FinanceiroDashboardPage` |
| GET | `/financeiro/contas-pagar` | Gestão de contas a pagar | `ContasPagarPage` |
| GET | `/financeiro/contas-receber` | Gestão de contas a receber | `ContasReceberPage` |
| GET | `/financeiro/fluxo-caixa` | Projeção de fluxo de caixa | `FluxoCaixaPage` |
| GET | `/financeiro/dre` | Demonstração de resultados | `DREPage` |

### 3.5 Estoque

| Método | Rota | Descrição | Componente |
|--------|------|-----------|------------|
| GET | `/estoque` | Visão geral do estoque | `EstoqueDashboardPage` |
| GET | `/estoque/produtos` | Lista de produtos | `ProdutosListPage` |
| GET | `/estoque/produtos/novo` | Cadastro de produto | `ProdutosCreatePage` |
| GET | `/estoque/produtos/:id/editar` | Edição de produto | `ProdutosEditPage` |
| GET | `/estoque/movimentacoes` | Histórico de movimentações | `MovimentacoesPage` |
| GET | `/estoque/etiquetas` | Geração de etiquetas | `EtiquetasPage` |

### 3.6 Vendas PDV

| Método | Rota | Descrição | Componente |
|--------|------|-----------|------------|
| GET | `/pdv` | Dashboard do PDV | `PDVDashboardPage` |
| GET | `/pdv/caixa` | Operações de caixa | `PDVCaixaPage` |
| GET | `/pdv/sangria` | Registro de sangria | `PDVSangriaPage` |
| GET | `/pdv/suprimento` | Registro de suprimento | `PDVSuprimentoPage` |
| GET | `/pdv/relatorios` | Relatórios de vendas | `PDVRelatoriosPage` |

### 3.7 Marketplace

| Método | Rota | Descrição | Componente |
|--------|------|-----------|------------|
| GET | `/marketplace` | Dashboard do marketplace | `MarketplaceDashboardPage` |
| GET | `/marketplace/produtos` | Produtos publicados | `MarketplaceProdutosPage` |
| GET | `/marketplace/pedidos` | Pedidos do marketplace | `MarketplacePedidosPage` |

### 3.8 Loja Virtual

| Método | Rota | Descrição | Componente |
|--------|------|-----------|------------|
| GET | `/loja` | Dashboard da loja virtual | `LojaDashboardPage` |
| GET | `/loja/configuracoes` | Configurações da loja | `LojaConfiguracoesPage` |
| GET | `/loja/catalogo` | Gerenciamento de catálogo | `LojaCatalogoPage` |
| GET | `/loja/pedidos` | Pedidos da loja virtual | `LojaPedidosPage` |
| GET | `/loja/checkout` | Configurações de checkout | `LojaCheckoutPage` |

### 3.9 Agendamentos

| Método | Rota | Descrição | Componente |
|--------|------|-----------|------------|
| GET | `/agendamentos` | Dashboard de agendamentos | `AgendamentosDashboardPage` |
| GET | `/agendamentos/horarios` | Gestão de horários | `AgendamentosHorariosPage` |
| GET | `/agendamentos/servicos` | Serviços agendáveis | `AgendamentosServicosPage` |
| GET | `/agendamentos/clientes` | Clientes e histórico | `AgendamentosClientesPage` |

### 3.10 MEL - IA Proativa

| Método | Rota | Descrição | Componente |
|--------|------|-----------|------------|
| GET | `/mel` | Dashboard da MEL | `MelDashboardPage` |
| GET | `/mel/insights` | Insights gerados pela IA | `MelInsightsPage` |
| GET | `/mel/configuracoes` | Configurações da IA | `MelConfiguracoesPage` |

### 3.11 Catálogo de Serviços

| Método | Rota | Descrição | Componente |
|--------|------|-----------|------------|
| GET | `/servicos` | Lista de serviços | `ServicosListPage` |
| GET | `/servicos/novo` | Cadastro de serviço | `ServicosCreatePage` |
| GET | `/servicos/:id/editar` | Edição de serviço | `ServicosEditPage` |

### 3.12 Fornecedores

| Método | Rota | Descrição | Componente |
|--------|------|-----------|------------|
| GET | `/fornecedores` | Lista de fornecedores | `FornecedoresListPage` |
| GET | `/fornecedores/novo` | Cadastro de fornecedor | `FornecedoresCreatePage` |
| GET | `/fornecedores/:id/editar` | Edição de fornecedor | `FornecedoresEditPage` |

### 3.13 Colaboradores

| Método | Rota | Descrição | Componente |
|--------|------|-----------|------------|
| GET | `/colaboradores` | Lista de colaboradores | `ColaboradoresListPage` |
| GET | `/colaboradores/novo` | Cadastro de colaborador | `ColaboradoresCreatePage` |
| GET | `/colaboradores/:id/editar` | Edição de colaborador | `ColaboradoresEditPage` |
| GET | `/colaboradores/permissoes` | Gestão de permissões | `ColaboradoresPermissoesPage` |

### 3.14 Métricas e Analytics

| Método | Rota | Descrição | Componente |
|--------|------|-----------|------------|
| GET | `/metricas` | Dashboard de métricas | `MetricasDashboardPage` |
| GET | `/metricas/dashboard` | Métricas detalhadas | `MetricasDetalhadoPage` |
| GET | `/metricas/relatorios` | Relatórios avançados | `MetricasRelatoriosPage` |

### 3.15 Configurações

| Método | Rota | Descrição | Componente |
|--------|------|-----------|------------|
| GET | `/configuracoes` | Dashboard de configurações | `ConfiguracoesDashboardPage` |
| GET | `/configuracoes/empresa` | Dados da empresa | `ConfiguracoesEmpresaPage` |
| GET | `/configuracoes/integracoes` | Integrações externas | `ConfiguracoesIntegracoesPage` |
| GET | `/configuracoes/notificacoes` | Preferências de notificação | `ConfiguracoesNotificacoesPage` |
| GET | `/configuracoes/plano` | Gerenciamento de plano | `ConfiguracoesPlanoPage` |

---

## 4. Fluxo de Navegação Principal

### 4.1 Primeiro Acesso

```
┌─────────────────────────────────────────────────────────────┐
│                        PRIMEIRO ACESSO                      │
└─────────────────────────────────────────────────────────────┘

    ┌─────────────┐
    │   Landing   │
    │    Page     │
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │    Login    │◄─────────────────────────────────────────┐
    │    Page     │                                          │
    └──────┬──────┘                                          │
           │                                                 │
           │ Não tem conta?                                  │
           ▼                                                 │
    ┌─────────────┐     ┌─────────────┐                      │
    │  Register   │────►│  Verificação│──────────────────────┘
    │    Page     │     │    Email    │
    └─────────────┘     └─────────────┘
           │
           │ Esqueceu senha?
           ▼
    ┌─────────────┐
    │   Forgot    │
    │  Password   │
    └─────────────┘
           │
           ▼
    ┌─────────────┐
    │   Reset     │
    │  Password   │
    └─────────────┘
```

### 4.2 Navegação Completa (Autenticado)

```
┌─────────────────────────────────────────────────────────────┐
│                    NAVEGAÇÃO AUTENTICADA                    │
└─────────────────────────────────────────────────────────────┘

                         ┌─────────────┐
                         │  Dashboard  │
                         │   Layout    │
                         └──────┬──────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        │                       │                       │
        ▼                       ▼                       ▼
 ┌─────────────┐        ┌─────────────┐        ┌─────────────┐
 │   Sidebar   │        │   Header    │        │   Main      │
 │ Navigation  │        │  (User/    │        │   Content   │
 │             │        │   Actions)  │        │             │
 └──────┬──────┘        └─────────────┘        └─────────────┘
        │
        ├────────────────────────────────────────────────────────┐
        │                                                        │
        ▼                                                        ▼
┌──────────────────┐                                   ┌──────────────────┐
│  MÓDULOS NEGÓCIO │                                   │  MÓDULOS ADMIN   │
├──────────────────┤                                   ├──────────────────┤
│ • Dashboard      │                                   │ • Colaboradores  │
│ • CRM (Clientes) │                                   │ • Configurações  │
│ • Financeiro     │                                   │ • Métricas       │
│ • Estoque        │                                   └──────────────────┘
│ • PDV            │
│ • Marketplace    │
│ • Loja Virtual   │
│ • Agendamentos   │
│ • Serviços       │
│ • Fornecedores   │
│ • MEL (IA)       │
└──────────────────┘

CADA MÓDULO SEGUE O PADRÃO:
┌────────────────────────────────────────┐
│  /modulo           → Dashboard/Lista  │
│  /modulo/novo      → Criar            │
│  /modulo/:id       → Detalhes         │
│  /modulo/:id/editar→ Editar           │
│  /modulo/sub-rota  → Funcionalidades  │
└────────────────────────────────────────┘
```

---

## 5. Rotas Públicas vs. Protegidas

### 5.1 Resumo

| Tipo | Quantidade | Prefixo | Autenticação |
|------|------------|---------|--------------|
| **Públicas** | 4 | `/` | Não necessária |
| **Protegidas** | 64+ | `/dashboard`, `/clientes`, etc. | Obrigatória |

### 5.2 Lista de Rotas Públicas

```typescript
// Rotas que NÃO requerem autenticação
const publicRoutes = [
  '/',
  '/login',
  '/register',
  '/forgot-password'
];

// Comportamento:
// - Usuários autenticados são redirecionados para /dashboard
// - Middleware permite acesso livre
```

### 5.3 Lista de Rotas Protegidas

```typescript
// Todas as rotas dentro do DashboardLayout requerem autenticação
const protectedRoutePatterns = [
  '/dashboard/*',
  '/clientes/*',
  '/financeiro/*',
  '/estoque/*',
  '/pdv/*',
  '/marketplace/*',
  '/loja/*',
  '/agendamentos/*',
  '/mel/*',
  '/servicos/*',
  '/fornecedores/*',
  '/colaboradores/*',
  '/metricas/*',
  '/configuracoes/*'
];

// Comportamento:
// - Token JWT validado em cada requisição
// - Usuários não autenticados redirecionados para /login
// - Permissões verificadas para rotas sensíveis
```

### 5.4 Estrutura de Proteção

```
┌─────────────────────────────────────────────────────────────┐
│                    ESTRUTURA DE PROTEÇÃO                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      AuthProvider                           │
│              (Contexto de Autenticação)                     │
└─────────────────────────────────────────────────────────────┘
                              │
           ┌──────────────────┼──────────────────┐
           │                  │                  │
           ▼                  ▼                  ▼
    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
    │  Protected  │    │   Public    │    │  Permission │
    │   Route     │    │   Route     │    │    Guard    │
    │  Wrapper    │    │   Wrapper   │    │             │
    └─────────────┘    └─────────────┘    └─────────────┘
           │                  │                  │
           ▼                  ▼                  ▼
    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
    │  Dashboard  │    │   Login/    │    │  Rotas por  │
    │   Layout    │    │   Register  │    │   Permissão │
    │  (Private)  │    │   (Public)  │    │  (RBAC)     │
    └─────────────┘    └─────────────┘    └─────────────┘
```

---

## 6. Grupos de Rotas por Módulo

### 6.1 Estrutura de Layouts

```typescript
// Definição hierárquica de layouts
const routeConfig = {
  // Layout público (sem sidebar)
  public: {
    path: '/',
    layout: 'PublicLayout',
    children: ['/', '/login', '/register', '/forgot-password']
  },
  
  // Layout autenticado (com sidebar e header)
  private: {
    path: '/',
    layout: 'DashboardLayout',
    children: [
      '/dashboard',
      '/clientes/*',
      '/financeiro/*',
      '/estoque/*',
      '/pdv/*',
      '/marketplace/*',
      '/loja/*',
      '/agendamentos/*',
      '/mel/*',
      '/servicos/*',
      '/fornecedores/*',
      '/colaboradores/*',
      '/metricas/*',
      '/configuracoes/*'
    ]
  }
};
```

### 6.2 Grupos de Módulos

#### Grupo 1: Core (Navegação Principal)
```typescript
const coreRoutes = {
  dashboard: {
    path: '/dashboard',
    icon: 'LayoutDashboard',
    label: 'Dashboard',
    component: 'DashboardPage'
  }
};
```

#### Grupo 2: Gestão Comercial
```typescript
const commercialRoutes = {
  crm: {
    path: '/clientes',
    icon: 'Users',
    label: 'Clientes',
    component: 'ClientesListPage',
    children: {
      list: '/clientes',
      create: '/clientes/novo',
      detail: '/clientes/:id',
      edit: '/clientes/:id/editar',
      pipeline: '/pipeline'
    }
  },
  
  pdv: {
    path: '/pdv',
    icon: 'ShoppingCart',
    label: 'PDV',
    component: 'PDVDashboardPage',
    children: {
      dashboard: '/pdv',
      caixa: '/pdv/caixa',
      sangria: '/pdv/sangria',
      suprimento: '/pdv/suprimento',
      relatorios: '/pdv/relatorios'
    }
  }
};
```

#### Grupo 3: Gestão Financeira
```typescript
const financialRoutes = {
  financeiro: {
    path: '/financeiro',
    icon: 'DollarSign',
    label: 'Financeiro',
    component: 'FinanceiroDashboardPage',
    children: {
      dashboard: '/financeiro',
      contasPagar: '/financeiro/contas-pagar',
      contasReceber: '/financeiro/contas-receber',
      fluxoCaixa: '/financeiro/fluxo-caixa',
      dre: '/financeiro/dre'
    }
  }
};
```

#### Grupo 4: Gestão de Estoque
```typescript
const inventoryRoutes = {
  estoque: {
    path: '/estoque',
    icon: 'Package',
    label: 'Estoque',
    component: 'EstoqueDashboardPage',
    children: {
      dashboard: '/estoque',
      produtos: '/estoque/produtos',
      create: '/estoque/produtos/novo',
      edit: '/estoque/produtos/:id/editar',
      movimentacoes: '/estoque/movimentacoes',
      etiquetas: '/estoque/etiquetas'
    }
  }
};
```

#### Grupo 5: Canais de Venda (Marketplace & Loja)
```typescript
const salesChannelRoutes = {
  marketplace: {
    path: '/marketplace',
    icon: 'Store',
    label: 'Marketplace',
    component: 'MarketplaceDashboardPage',
    children: {
      dashboard: '/marketplace',
      produtos: '/marketplace/produtos',
      pedidos: '/marketplace/pedidos'
    }
  },
  
  lojaVirtual: {
    path: '/loja',
    icon: 'Globe',
    label: 'Loja Virtual',
    component: 'LojaDashboardPage',
    children: {
      dashboard: '/loja',
      configuracoes: '/loja/configuracoes',
      catalogo: '/loja/catalogo',
      pedidos: '/loja/pedidos',
      checkout: '/loja/checkout'
    }
  }
};
```

#### Grupo 6: Serviços e Agendamentos
```typescript
const serviceRoutes = {
  agendamentos: {
    path: '/agendamentos',
    icon: 'Calendar',
    label: 'Agendamentos',
    component: 'AgendamentosDashboardPage',
    children: {
      dashboard: '/agendamentos',
      horarios: '/agendamentos/horarios',
      servicos: '/agendamentos/servicos',
      clientes: '/agendamentos/clientes'
    }
  },
  
  servicos: {
    path: '/servicos',
    icon: 'Wrench',
    label: 'Serviços',
    component: 'ServicosListPage',
    children: {
      list: '/servicos',
      create: '/servicos/novo',
      edit: '/servicos/:id/editar'
    }
  }
};
```

#### Grupo 7: Fornecedores
```typescript
const supplierRoutes = {
  fornecedores: {
    path: '/fornecedores',
    icon: 'Truck',
    label: 'Fornecedores',
    component: 'FornecedoresListPage',
    children: {
      list: '/fornecedores',
      create: '/fornecedores/novo',
      edit: '/fornecedores/:id/editar'
    }
  }
};
```

#### Grupo 8: Inteligência Artificial
```typescript
const aiRoutes = {
  mel: {
    path: '/mel',
    icon: 'Sparkles',
    label: 'MEL - IA',
    component: 'MelDashboardPage',
    children: {
      dashboard: '/mel',
      insights: '/mel/insights',
      configuracoes: '/mel/configuracoes'
    }
  }
};
```

#### Grupo 9: Administração
```typescript
const adminRoutes = {
  colaboradores: {
    path: '/colaboradores',
    icon: 'UserCog',
    label: 'Colaboradores',
    component: 'ColaboradoresListPage',
    children: {
      list: '/colaboradores',
      create: '/colaboradores/novo',
      edit: '/colaboradores/:id/editar',
      permissoes: '/colaboradores/permissoes'
    }
  },
  
  metricas: {
    path: '/metricas',
    icon: 'BarChart3',
    label: 'Métricas',
    component: 'MetricasDashboardPage',
    children: {
      dashboard: '/metricas',
      detalhado: '/metricas/dashboard',
      relatorios: '/metricas/relatorios'
    }
  },
  
  configuracoes: {
    path: '/configuracoes',
    icon: 'Settings',
    label: 'Configurações',
    component: 'ConfiguracoesDashboardPage',
    children: {
      dashboard: '/configuracoes',
      empresa: '/configuracoes/empresa',
      integracoes: '/configuracoes/integracoes',
      notificacoes: '/configuracoes/notificacoes',
      plano: '/configuracoes/plano'
    }
  }
};
```

---

## 7. Parâmetros de URL

### 7.1 Parâmetros de Rota (Route Parameters)

| Padrão | Tipo | Uso | Exemplo |
|--------|------|-----|---------|
| `:id` | UUID/Number | Identificador único | `/clientes/123e4567...` |
| `:slug` | String | URL amigável | `/produtos/camiseta-preta` |
| `:action` | Enum | Ação específica | `/pdv/:action (caixa, sangria)` |

### 7.2 Query Parameters (Opcionais)

| Parâmetro | Tipo | Descrição | Exemplo |
|-----------|------|-----------|---------|
| `?page` | Number | Paginação | `/clientes?page=2` |
| `?limit` | Number | Itens por página | `/clientes?limit=50` |
| `?search` | String | Busca textual | `/clientes?search=joao` |
| `?status` | Enum | Filtro por status | `/financeiro/contas-pagar?status=pending` |
| `?startDate` | ISO Date | Data inicial | `/metricas?startDate=2024-01-01` |
| `?endDate` | ISO Date | Data final | `/metricas?endDate=2024-12-31` |
| `?sort` | String | Ordenação | `/produtos?sort=price_asc` |
| `?category` | String | Filtro categoria | `/estoque/produtos?category=eletronicos` |
| `?tab` | String | Aba ativa | `/clientes/:id?tab=historico` |
| `?modal` | String | Modal aberto | `/dashboard?modal=nova-venda` |

### 7.3 Exemplos Completos

```typescript
// URL com múltiplos parâmetros
`/financeiro/contas-pagar?page=2&limit=25&status=overdue&startDate=2024-01-01`

`/clientes/123e4567-e89b-12d3-a456-426614174000?tab=pedidos&modal=novo-pedido`

`/estoque/produtos?search=iphone&category=smartphones&sort=created_desc`
```

### 7.4 Validação de Parâmetros

```typescript
// Schema de validação para rotas
const routeParamsSchema = {
  ':id': {
    type: 'uuid',
    required: true,
    validate: (value) => isValidUUID(value)
  },
  
  'query': {
    page: {
      type: 'number',
      default: 1,
      min: 1,
      max: 1000
    },
    limit: {
      type: 'number',
      default: 25,
      options: [10, 25, 50, 100]
    },
    status: {
      type: 'enum',
      options: ['active', 'inactive', 'pending', 'all'],
      default: 'all'
    }
  }
};
```

---

## 8. Estrutura de Diretórios Sugerida

### 8.1 Estrutura de Pastas (React Router v7)

```
src/
├── app/
│   ├── routes/
│   │   ├── _public.tsx           # Layout para rotas públicas
│   │   ├── _auth.tsx             # Layout autenticado (dashboard)
│   │   │
│   │   ├── _public._index.tsx    # Landing Page (/) - Público
│   │   ├── _public.login.tsx     # Login (/login) - Público
│   │   ├── _public.register.tsx  # Register (/register) - Público
│   │   ├── _public.forgot-password.tsx # Forgot Password - Público
│   │   │
│   │   ├── _auth.dashboard.tsx   # Dashboard (/dashboard) - Autenticado
│   │   │
│   │   ├── _auth.clientes.tsx              # /clientes
│   │   ├── _auth.clientes.novo.tsx         # /clientes/novo
│   │   ├── _auth.clientes.$id.tsx          # /clientes/:id
│   │   ├── _auth.clientes.$id.editar.tsx   # /clientes/:id/editar
│   │   ├── _auth.pipeline.tsx              # /pipeline
│   │   │
│   │   ├── _auth.financeiro._index.tsx           # /financeiro
│   │   ├── _auth.financeiro.contas-pagar.tsx     # /financeiro/contas-pagar
│   │   ├── _auth.financeiro.contas-receber.tsx   # /financeiro/contas-receber
│   │   ├── _auth.financeiro.fluxo-caixa.tsx      # /financeiro/fluxo-caixa
│   │   ├── _auth.financeiro.dre.tsx              # /financeiro/dre
│   │   │
│   │   ├── _auth.estoque._index.tsx              # /estoque
│   │   ├── _auth.estoque.produtos._index.tsx     # /estoque/produtos
│   │   ├── _auth.estoque.produtos.novo.tsx       # /estoque/produtos/novo
│   │   ├── _auth.estoque.produtos.$id.editar.tsx # /estoque/produtos/:id/editar
│   │   ├── _auth.estoque.movimentacoes.tsx       # /estoque/movimentacoes
│   │   ├── _auth.estoque.etiquetas.tsx           # /estoque/etiquetas
│   │   │
│   │   ├── _auth.pdv._index.tsx                  # /pdv
│   │   ├── _auth.pdv.caixa.tsx                   # /pdv/caixa
│   │   ├── _auth.pdv.sangria.tsx                 # /pdv/sangria
│   │   ├── _auth.pdv.suprimento.tsx              # /pdv/suprimento
│   │   ├── _auth.pdv.relatorios.tsx              # /pdv/relatorios
│   │   │
│   │   ├── _auth.marketplace._index.tsx          # /marketplace
│   │   ├── _auth.marketplace.produtos.tsx        # /marketplace/produtos
│   │   ├── _auth.marketplace.pedidos.tsx         # /marketplace/pedidos
│   │   │
│   │   ├── _auth.loja._index.tsx                 # /loja
│   │   ├── _auth.loja.configuracoes.tsx          # /loja/configuracoes
│   │   ├── _auth.loja.catalogo.tsx               # /loja/catalogo
│   │   ├── _auth.loja.pedidos.tsx                # /loja/pedidos
│   │   ├── _auth.loja.checkout.tsx               # /loja/checkout
│   │   │
│   │   ├── _auth.agendamentos._index.tsx         # /agendamentos
│   │   ├── _auth.agendamentos.horarios.tsx       # /agendamentos/horarios
│   │   ├── _auth.agendamentos.servicos.tsx       # /agendamentos/servicos
│   │   ├── _auth.agendamentos.clientes.tsx       # /agendamentos/clientes
│   │   │
│   │   ├── _auth.mel._index.tsx                  # /mel
│   │   ├── _auth.mel.insights.tsx                # /mel/insights
│   │   ├── _auth.mel.configuracoes.tsx           # /mel/configuracoes
│   │   │
│   │   ├── _auth.servicos._index.tsx             # /servicos
│   │   ├── _auth.servicos.novo.tsx               # /servicos/novo
│   │   ├── _auth.servicos.$id.editar.tsx         # /servicos/:id/editar
│   │   │
│   │   ├── _auth.fornecedores._index.tsx         # /fornecedores
│   │   ├── _auth.fornecedores.novo.tsx           # /fornecedores/novo
│   │   ├── _auth.fornecedores.$id.editar.tsx     # /fornecedores/:id/editar
│   │   │
│   │   ├── _auth.colaboradores._index.tsx        # /colaboradores
│   │   ├── _auth.colaboradores.novo.tsx          # /colaboradores/novo
│   │   ├── _auth.colaboradores.$id.editar.tsx    # /colaboradores/:id/editar
│   │   ├── _auth.colaboradores.permissoes.tsx    # /colaboradores/permissoes
│   │   │
│   │   ├── _auth.metricas._index.tsx             # /metricas
│   │   ├── _auth.metricas.dashboard.tsx          # /metricas/dashboard
│   │   ├── _auth.metricas.relatorios.tsx         # /metricas/relatorios
│   │   │
│   │   ├── _auth.configuracoes._index.tsx        # /configuracoes
│   │   ├── _auth.configuracoes.empresa.tsx       # /configuracoes/empresa
│   │   ├── _auth.configuracoes.integracoes.tsx   # /configuracoes/integracoes
│   │   ├── _auth.configuracoes.notificacoes.tsx  # /configuracoes/notificacoes
│   │   └── _auth.configuracoes.plano.tsx         # /configuracoes/plano
│
├── components/
│   ├── layouts/
│   │   ├── PublicLayout.tsx      # Layout para páginas públicas
│   │   └── DashboardLayout.tsx   # Layout com sidebar/header
│   │
│   ├── ui/                       # Componentes base (shadcn/ui)
│   ├── forms/                    # Formulários reutilizáveis
│   ├── tables/                   # Tabelas e data grids
│   ├── charts/                   # Gráficos e visualizações
│   └── modals/                   # Modais e dialogs
│
├── features/
│   ├── auth/                     # Autenticação e autorização
│   ├── clientes/                 # Módulo CRM
│   ├── financeiro/               # Módulo Financeiro
│   ├── estoque/                  # Módulo Estoque
│   ├── pdv/                      # Módulo PDV
│   ├── marketplace/              # Módulo Marketplace
│   ├── loja/                     # Módulo Loja Virtual
│   ├── agendamentos/             # Módulo Agendamentos
│   ├── mel/                      # Módulo IA (MEL)
│   ├── servicos/                 # Módulo Serviços
│   ├── fornecedores/             # Módulo Fornecedores
│   ├── colaboradores/            # Módulo Colaboradores
│   ├── metricas/                 # Módulo Métricas
│   └── configuracoes/            # Módulo Configurações
│
├── hooks/
│   ├── useAuth.ts
│   ├── usePermissions.ts
│   ├── useQueryParams.ts
│   └── useLocalStorage.ts
│
├── lib/
│   ├── utils.ts                  # Utilitários gerais
│   ├── api.ts                    # Configuração de API
│   └── constants.ts              # Constantes da aplicação
│
├── types/
│   ├── auth.ts
│   ├── cliente.ts
│   ├── financeiro.ts
│   └── index.ts
│
└── styles/
    └── globals.css
```

### 8.2 Convenção de Nomenclatura

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| **Arquivos de Rota** | kebab-case + `$` para parâmetros | `_auth.clientes.$id.editar.tsx` |
| **Componentes de Página** | PascalCase + Sufixo Page | `ClientesListPage.tsx` |
| **Componentes Reutilizáveis** | PascalCase | `DataTable.tsx`, `UserCard.tsx` |
| **Hooks Customizados** | camelCase + prefixo `use` | `useAuth.ts`, `useQueryParams.ts` |
| **Utilitários** | camelCase | `formatCurrency.ts`, `validateCPF.ts` |
| **Tipos/Interfaces** | PascalCase | `Cliente`, `ContaPagar`, `UserRole` |

---

## 9. Considerações Finais

### 9.1 Resumo da Arquitetura

| Aspecto | Decisão |
|---------|---------|
| **Framework de Roteamento** | React Router v7 (File-based routing) |
| **Total de Rotas** | 68+ rotas documentadas |
| **Estrutura de Layout** | 2 layouts: Public + Dashboard |
| **Autenticação** | JWT-based com refresh token |
| **Autorização** | RBAC (Role-Based Access Control) |
| **Organização** | Módulos por domínio de negócio |
| **Padrão de Rotas** | RESTful + flat hierarchy |

### 9.2 Boas Práticas Adotadas

1. **Consistência de Nomenclatura**
   - Rotas sempre em minúsculo e kebab-case
   - Componentes em PascalCase com sufixo descritivo
   - Parâmetros dinâmicos precedidos por `:` ou `$`

2. **Separação de Responsabilidades**
   - Rotas públicas isoladas das protegidas
   - Cada módulo com suas próprias sub-rotas
   - Layouts compartilhados onde apropriado

3. **UX e Navegação**
   - URLs descritivas e amigáveis
   - Estrutura hierárquica clara
   - Query params para filtros e estado de UI

4. **Manutenibilidade**
   - Estrutura de pastas por feature/module
   - Componentes de página co-localizados
   - Tipagem TypeScript em toda a aplicação

5. **Escalabilidade**
   - Padrão consistente para CRUD (list, new, :id, edit)
   - Facilidade para adicionar novos módulos
   - Separação clara entre domain logic e UI

### 9.3 Checklist de Implementação

- [ ] Configurar React Router v7 com file-based routing
- [ ] Implementar `PublicLayout` e `DashboardLayout`
- [ ] Criar middleware de autenticação
- [ ] Implementar sistema de permissões (RBAC)
- [ ] Configurar lazy loading para módulos pesados
- [ ] Implementar tratamento de erros (404, 403)
- [ ] Adicionar breadcrumbs dinâmicos
- [ ] Configurar navegação ativa no sidebar
- [ ] Implementar histórico de navegação
- [ ] Adicionar transições entre páginas

### 9.4 Próximos Passos

1. **Validação Técnica**: Revisar com equipe de desenvolvimento
2. **Prototipagem**: Criar navegação funcional em alta fidelidade
3. **Testes**: Validar fluxos de navegação com usuários
4. **Documentação**: Manter este documento atualizado conforme evolução

---

**Documento Versionado**
- **Versão**: 1.0
- **Data**: 28 de Março de 2025
- **Autor**: Equipe UNIQ
- **Status**: Em revisão técnica

---

*Este documento deve ser atualizado sempre que houver alterações na estrutura de navegação da aplicação.*
