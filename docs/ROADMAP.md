# 🗺️ ROADMAP UNIQ Empresas

**Versão:** 1.0 | **Data:** 14/03/2026 | **Última Atualização:** 21/03/2026  
**Propósito:** Guia mestre de sprints para geração de PRDs e SPECs  
**Metodologia:** Vibe Coding (SDD - Specification-Driven Development)  
**Abordagem:** 🎨 **Frontend First** — Interface visual primeiro, Backend depois

---

## 📊 Progresso Atual

```
🎨 FASE 1: UI/UX MVP (Interfaces Visuais)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Sprint 01: Design System .............................. CONCLUÍDO (20+ componentes)
✅ Sprint 02: Auth UI ..................................... CONCLUÍDO (5 telas)
✅ Sprint 03: Dashboard UI ................................. CONCLUÍDO (Dashboard + MEL)
✅ Sprint 04: CRM UI ...................................... CONCLUÍDO (Kanban + Clientes)
✅ Sprint 05: Loja Virtual UI .............................. CONCLUÍDO (Storefront + Checkout)
✅ Sprint 06: Financeiro UI ................................. CONCLUÍDO (Pagar/Receber/Fluxo)
✅ Sprint 07: Serviços UI ................................... CONCLUÍDO (Lista/Cadastro/Catálogo)
✅ Sprint 08: Vendas PDV UI ................................. CONCLUÍDO (Grid/Carrinho/Caixa)
✅ Sprint 09: Storefront UI ................................ CONCLUÍDO (Loja Pública + Checkout)
✅ Sprint 10: Agendamentos UI .............................. CONCLUÍDO (Calendário Completo)
⚠️ Sprint 08: Estoque UI ................................. PLACEHOLDER (Em Desenvolvimento)

⚙️ FASE 2: Backend & Schema
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴 Todas as sprints ......................................... PENDENTE
```

**Resumo:** 10 de 14 sprints de UI concluídas (71% da FASE 1)  
**Próximo passo:** Estoque UI (completar), Chatbot UI, Marketplace UI, ou iniciar FASE 2 (Backend)

---

## 📋 Íce

1. [Abordagem Frontend First](#abordagem-frontend-first)
2. [Visão Geral das Fases](#visão-geral-das-fases)
3. [FASE 1: UI/UX MVP (Interface)](#fase-1-uiux-mvp-interface)
4. [FASE 2: Backend & Schema](#fase-2-backend--schema)
5. [FASE 3: Integrações & Automação](#fase-3-integrações--automação)
6. [FASE 4: Growth & Escala](#fase-4-growth--escala)
7. [Dependências entre Sprints](#dependências-entre-sprints)
8. [Como Usar este Roadmap](#como-usar-este-roadmap)

---

## 🎨 Abordagem Frontend First

### Filosofia
> **"Interface primeiro, dados depois"**

1. **Criamos toda a interface visual** — Telas, componentes, fluxos de UX
2. **Validamos com stakeholders** — Feedback visual antes de investir em backend
3. **Ajustamos UX rapidamente** — Mudanças visuais são mais baratas
4. **Depois conectamos ao backend** — Schema de dados baseado na UI validada

### Benefícios
- ✅ **Validação rápida** — Stakeholders veem e tocam o produto
- ✅ **Mudanças baratas** — Rearranjar componentes vs. refazer migrations
- ✅ **UX centrada** — Interface guia o schema, não o contrário
- ✅ **Desenvolvimento paralelo** — Frontend e backend podem avançar separados

### Convenção de Tags
| Tag | Significado | Quando Usar |
|-----|-------------|-------------|
| 🎨 **(F)** | Frontend Only | Componentes React, telas, layouts |
| ⚙️ **(B)** | Backend Only | Schema, migrations, Edge Functions |
| 🔗 **(I)** | Integration | Conectar frontend ao backend |

---

## 🎯 Visão Geral das Fases (Abordagem Frontend First - TODOS os Módulos)

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                    UNIQ ROADMAP 2026 - Frontend First 🎨 (Módulos Completos)                 │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                            │
│  🎨 FASE 1: UI/UX MVP (Interfaces)        ⚙️ FASE 2: Backend & Schema                     │
│  ┌──────────────────────────────────┐  ┌──────────────────────────────────┐               │
│  │ 🎨 01: Design System             │  │ ⚙️ 15: Auth & Core DB            │               │
│  │ 🎨 02: Auth UI                  │  │ ⚙️ 16: CRM Schema                │               │
│  │ 🎨 03: Dashboard UI             │  │ ⚙️ 17: Finance Schema 💰         │               │
│  │ 🎨 04: CRM UI                   │  │ ⚙️ 18: Marketplace Schema 🛒     │               │
│  │ 🎨 05: Finance UI 💰            │  │ ⚙️ 19: Estoque Schema 📦         │               │
│  │ 🎨 06: Marketplace UI 🛒        │  │ ⚙️ 20: PDV Schema 💵            │               │
│  │ 🎨 07: Estoque UI 📦            │  │ ⚙️ 21: Storefront Schema 🏪     │               │
│  │ 🎨 08: Vendas PDV UI 💵         │  │ ⚙️ 22: Agendamentos Schema 📅   │               │
│  │ 🎨 09: Storefront UI 🏪         │  │ ⚙️ 23: Chatbot Schema 🤖         │               │
│  │ 🎨 10: Agendamentos UI 📅       │  │ ⚙️ 24: Services Schema 🛠️       │               │
│  │ 🎨 11: Chatbot UI 🤖           │  │ ⚙️ 25: Suppliers Schema 📦      │               │
│  │ 🎨 12: Services UI 🛠️          │  │ ⚙️ 26: Employees Schema 👥       │               │
│  │ 🎨 13: Suppliers UI 📦          │  │ ⚙️ 27: Storage & Migrations      │               │
│  │ 🎨 14: Employees UI 👥           │  │ 🔗 28: Integration Layer 🔌      │               │
│  └──────────────────────────────────┘  └──────────────────────────────────┘               │
│           🎨 14 Sprints de UI            ⚙️ 14 Sprints de Backend                          │
│           (TODOS os 14 módulos)          (Schema completo)                                │
│                                                                                            │
│  🔗 FASE 3: Integrações & MEL            📈 FASE 4: Growth & Escala                       │
│  ┌──────────────────────────────────┐  ┌──────────────────────────────────┐               │
│  │ 🔗 29: n8n Workflows            │  │ 🎨 33: Landing Page 📄          │               │
│  │ 🤖 30: MEL Basic (3 fluxos)    │  │ 📢 34: Marketing UI 📱          │               │
│  │ 🤖 31: MEL Advanced            │  │ 🎁 35: Referral System 🎁        │               │
│  │ 🔗 32: Onboarding Automation   │  │ 📊 36: Analytics Dashboard 📈   │               │
│  └──────────────────────────────────┘  │ 📱 37: PWA & Mobile 📲          │               │
│         🤖 Consultor Ativo ON          └──────────────────────────────────┘               │
│                                                                                            │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

### Todos os Módulos do Sistema (14 Módulos)

| Módulo | Sprint UI | Sprint Schema | Status no Contexto |
|--------|-----------|---------------|-------------------|
| **Design System** | Sprint 01 | - | ✅ **CONCLUÍDO** (19/03/2026) |
| **🔐 Auth** | Sprint 02 | Sprint 15 | ✅ **CONCLUÍDO** (20/03/2026) |
| **📊 Dashboard** | Sprint 03 | - | ✅ **CONCLUÍDO** (20/03/2026) |
| **👥 CRM** | Sprint 04 | Sprint 16 | ✅ **CONCLUÍDO** (20/03/2026) |
| **🏪 Loja Virtual** | Sprint 05 | Sprint 21 | ✅ **CONCLUÍDO** (21/03/2026) |
| **💰 Financeiro** | Sprint 06 | Sprint 17 | ✅ **CONCLUÍDO** (21/03/2026) |
| **🛠️ Serviços** | Sprint 07 | Sprint 24 | ✅ **CONCLUÍDO** (21/03/2026) |
| **📦 Fornecedores** | Sprint 08 | Sprint 25 | 🔴 **PENDENTE** |
| **👥 Colaboradores** | Sprint 09 | Sprint 26 | 🔴 **PENDENTE** |
| **🤖 Chatbot (MEL)** | Sprint 10 | Sprint 23 | ✅ **PARCIAL** (MEL Widget no Dashboard) |
| **🛒 Marketplace** | Sprint 11 | Sprint 18 | 🔴 **PENDENTE** |
| **📦 estoque** | Sprint 12 | Sprint 19 | ⚠️ **PLACEHOLDER** (Página criada) |
| **💵 Vendas PDV** | Sprint 08/13 | Sprint 20 | ✅ **CONCLUÍDO** (21/03/2026) |
| **📅 Agendamentos** | Sprint 10/14 | Sprint 22 | ✅ **CONCLUÍDO** (21/03/2026) |
| **📊 Métricas** | Sprint 36 | Sprint 36 | 🔴 **PENDENTE** |

**Legenda:**
- ✅ **CONCLUÍDO** - UI implementada e testada
- 🔄 **Em desenvolvimento** - Em andamento
- 📋 **Planejado** - PRD/SPEC criados
- 🔴 **PENDENTE** - Aguardando início

### Resumo por Fase

| Fase | Período | Foco | Entregável Principal | Sprints |
|------|---------|------|---------------------|---------|
| **🎨 FASE 1** | Mês 1-4 | Interface visual | Todas as telas de TODOS os módulos | 14 sprints |
| **⚙️ FASE 2** | Mês 4-7 | Backend & Schema | Banco de dados completo para todos os módulos | 14 sprints |
| **🔗 FASE 3** | Mês 7-8 | Integrações | Sistema integrado, MEL funcionando | 4 sprints |
| **📈 FASE 4** | Mês 8-10 | Growth | Landing page, viralidade, analytics | 5 sprints |

**Total: 37 Sprints | 10 meses | MVP completo com todos os 14 módulos**

---

## 🎨 FASE 1: UI/UX MVP — Interfaces Visuais (Detalhado)

---

## 🏃 Sprint 01: Design System 🎨 (Frontend Only) ✅ CONCLUÍDO

**Tipo:** 🎨 Frontend (F)  
**Duração:** 1 semana  
**Período:** Março/2026 (Semana 1)  
**Objetivo:** Base visual sólida — tokens, componentes e layouts  
**Status:** ✅ **CONCLUÍDO EM 19/03/2026** | **15 componentes implementados**

### 🎨 Entregáveis de Frontend

#### 1.1 Design Tokens
| ID | Componente | Descrição | Status |
|----|------------|-----------|--------|
| TOKEN-01 | Cores UNIQ | Paleta primária, secundária, semântica | ✅ |
| TOKEN-02 | Tipografia | Fontes, tamanhos, pesos | ✅ |
| TOKEN-03 | Espaçamento | Grid, padding, margin scale | ✅ |
| TOKEN-04 | Breakpoints | Mobile, tablet, desktop | ✅ |
| TOKEN-05 | Sombras & Borders | Efeitos visuais consistentes | ✅ |

#### 1.2 Componentes Base
| ID | Componente | Descrição | Props Esperadas | Status |
|----|------------|-----------|-----------------|--------|
| COMP-01 | Button | Botões (primary, secondary, ghost) | variant, size, disabled | ✅ |
| COMP-02 | Input | Campos de texto | type, placeholder, error | ✅ |
| COMP-03 | Card | Container de conteúdo | title, children, actions | ✅ |
| COMP-04 | Modal | Dialogs e overlays | isOpen, onClose, title | ✅ |
| COMP-05 | Table | Tabelas de dados | columns, data, actions | ✅ |
| COMP-06 | Form | Wrapper de formulários | onSubmit, validation | ✅ |
| COMP-07 | Loading | Estados de carregamento | type (spinner/skeleton) | ✅ |
| COMP-08 | Toast | Notificações | type, message, duration | ✅ |

#### 1.3 Layout Base
| ID | Layout | Descrição | Status |
|----|--------|-----------|--------|
| LAYOUT-01 | App Shell | Estrutura principal (header, sidebar, content) | ✅ |
| LAYOUT-02 | Sidebar Navigation | Menu lateral com navegação | ✅ |
| LAYOUT-03 | Header | Cabeçalho com logo, usuário, notificações | ✅ |
| LAYOUT-04 | Mobile Layout | Versão mobile (bottom nav, hamburger) | ✅ |

### 📝 Notas para PRD
- **Estado inicial:** Todos os componentes com dados mock/fake
- **Interatividade:** Estados de hover, focus, disabled implementados
- **Responsividade:** Mobile-first em todos os componentes
- **Acessibilidade:** ARIA labels, keyboard navigation

### ✅ Checklist de Aceitação (Visual)
- [x] Storybook ou documentação visual dos componentes
- [x] Todos os componentes renderizam corretamente
- [x] Estados de loading e erro visuais implementados
- [x] Layout responsivo testado em 3 breakpoints
- [x] Paleta de cores aplicada consistentemente

**Status:** ✅ CONCLUÍDO - 19/03/2026

### 📦 Componentes Implementados

**15 Componentes Base criados:**

| Componente | Arquivo | Tecnologia |
|------------|---------|------------|
| Button | `components/ui/button.tsx` | Tailwind + CVA |
| Card | `components/ui/card.tsx` | Tailwind |
| Badge | `components/ui/badge.tsx` | Tailwind + CVA |
| Avatar | `components/ui/avatar.tsx` | Radix UI |
| DropdownMenu | `components/ui/dropdown-menu.tsx` | Radix UI |
| **Separator** | `components/ui/separator.tsx` | Radix UI ⭐ |
| **Skeleton** | `components/ui/skeleton.tsx` | Tailwind ⭐ |
| **Label** | `components/ui/label.tsx` | Radix UI ⭐ |
| **Input** | `components/ui/input.tsx` | Tailwind ⭐ |
| **Textarea** | `components/ui/textarea.tsx` | Tailwind ⭐ |
| **Checkbox** | `components/ui/checkbox.tsx` | Radix UI ⭐ |
| **Select** | `components/ui/select.tsx` | Radix UI ⭐ |
| **Switch** | `components/ui/switch.tsx` | Radix UI ⭐ |
| **Tooltip** | `components/ui/tooltip.tsx` | Radix UI ⭐ |
| **Dialog** | `components/ui/dialog.tsx` | Radix UI ⭐ |
| **Table** | `components/ui/table.tsx` | Tailwind ⭐ |
| **Tabs** | `components/ui/tabs.tsx` | Radix UI ⭐ |
| **Toast** | `components/ui/toast.tsx` | Radix UI ⭐ |
| **Toaster** | `components/ui/toaster.tsx` | Container ⭐ |
| **useToast** | `hooks/use-toast.ts` | Custom Hook ⭐ |

⭐ = Componentes criados nesta sprint

---

## 🏃 Sprint 02: Auth UI 🎨 (Frontend Only) ✅ CONCLUÍDO

**Tipo:** 🎨 Frontend (F)  
**Duração:** 1 semana  
**Período:** Março/2026 (Semana 2)  
**Objetivo:** Telas de autenticação completas  
**Status:** ✅ **CONCLUÍDO EM 20/03/2026** | **5 telas implementadas**

### 🎨 Telas a Desenvolver

#### 2.1 Tela de Login
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| LOGIN-01 | Formulário | Email + senha | ✅ |
| LOGIN-02 | Validação visual | Erros de campo (borda vermelha, mensagem) | ✅ |
| LOGIN-03 | Link "Esqueci senha" | Navegação para recuperação | ✅ |
| LOGIN-04 | Link "Criar conta" | Navegação para cadastro | ✅ |
| LOGIN-05 | Estados de loading | Spinner no botão durante "submit" | ✅ |
| LOGIN-06 | Mensagem de erro | Toast de credenciais inválidas | ✅ |

#### 2.2 Tela de Cadastro
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| REG-01 | Formulário multi-step | Dados pessoais → Empresa → Plano | ✅ |
| REG-02 | Indicador de progresso | Stepper visual | ✅ |
| REG-03 | Validação em tempo real | React Hook Form + Zod | ✅ |
| REG-04 | Upload de logo preview | Drag & drop com preview | ✅ |
| REG-05 | Seleção de plano | Cards de planos comparativos | ✅ |
| REG-06 | Confirmação de email | Tela de "verifique seu email" | ✅ |

#### 2.3 Tela de Recuperação de Senha
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| REC-01 | Formulário de email | Campo único de email | ✅ |
| REC-02 | Tela de sucesso | "Email enviado com instruções" | ✅ |
| REC-03 | Tela de nova senha | Formulário de redefinição | ✅ |
| REC-04 | Indicador de força | Password strength meter | ✅ |

### 🎨 Design System Aplicado
- Usar componentes da Sprint 01
- Cores: Primária para CTAs, neutras para formulários
- Layout centralizado, card com sombra
- Ilustrações/ícones de apoio

### ✅ Checklist de Aceitação
- [x] Fluxo completo navegável (com rotas mock)
- [x] Validações visuais funcionando
- [x] Estados de loading implementados
- [x] Mensagens de erro visuais claras
- [x] Responsivo (mobile: formulários full-width)
- [x] Upload de logo com preview
- [x] Cadastro multi-step funcional
- [x] Validação Zod completa

---

## 🏃 Sprint 03: Dashboard UI 🎨 (Frontend Only) ✅ CONCLUÍDO

**Tipo:** 🎨 Frontend (F)  
**Duração:** 1 semana  
**Período:** Março/2026 (Semana 3)  
**Objetivo:** Dashboard principal com métricas e navegação  
**Status:** ✅ **CONCLUÍDO EM 20/03/2026** | **Dashboard completo com gráficos e widgets**

### 🎨 Telas a Desenvolver

#### 3.1 Dashboard Overview
| ID | Elemento | Descrição | Mock Data | Status |
|----|----------|-----------|-----------|--------|
| DASH-01 | Cards de métricas | Vendas, clientes, pedidos (4 cards) | mockStats | ✅ |
| DASH-02 | Gráfico de vendas | Linha temporal (7/30/90 dias) com Recharts | mockSalesData | ✅ |
| DASH-03 | Atividades recentes | Lista de últimas ações | mockActivities | ✅ |
| DASH-04 | Acesso rápido | Botões para módulos principais | mockModules | ✅ |
| DASH-05 | Notificações MEL | Widget do consultor virtual | mockMELMessages | ✅ |

#### 3.2 Sidebar & Navegação
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| NAV-01 | Menu principal | Links para CRM, Loja, Financeiro | ✅ |
| NAV-02 | Submenus expansíveis | Configurações, Perfil | ✅ |
| NAV-03 | Indicador de módulo ativo | Highlight visual | ✅ |
| NAV-04 | Logo e branding | Identidade UNIQ | ✅ |
| NAV-05 | User menu dropdown | Perfil, logout, configurações | ✅ |
| NAV-06 | Mobile hamburger | Menu mobile funcional | ✅ |

#### 3.3 Perfil da Empresa (Tela)
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| PROF-01 | Formulário de dados | Nome, CNPJ, endereço | ✅ |
| PROF-02 | Upload de logo | Drag & drop com preview | ✅ |
| PROF-03 | Configurações visuais | Color pickers para marca | ✅ |
| PROF-04 | Preview da loja | Miniatura visual em tempo real | ✅ |

### 📝 Mock Data (Dashboard)
```typescript
const mockDashboard = {
  stats: {
    sales: { value: 12500, change: 12.5, trend: 'up' },
    customers: { value: 45, change: 5, trend: 'up' },
    orders: { value: 23, change: -2, trend: 'down' },
    conversion: { value: 3.2, change: 0.5, trend: 'up' }
  },
  chartData: [
    { date: '2026-03-01', sales: 1500 },
    { date: '2026-03-02', sales: 2300 },
    // ... 30 dias
  ],
  recentActivities: [
    { id: 1, type: 'sale', message: 'Nova venda #1234', time: '2 min atrás' },
    { id: 2, type: 'customer', message: 'João cadastrado', time: '1h atrás' },
  ],
  melMessages: [
    { id: 1, title: 'Vendas em alta!', preview: 'Você vendeu 30% mais...', unread: true }
  ]
};
```

### ✅ Checklist de Aceitação
- [x] Dashboard renderiza com mock data
- [x] Cards de métricas visíveis e formatados
- [x] Gráfico Recharts responsivo com filtros 7/30/90 dias
- [x] Lista de atividades recentes scrollável
- [x] Widget MEL (Consultor) integrado
- [x] Navegação lateral funcional
- [x] Perfil da empresa com formulário completo
- [x] Upload de logo com drag & drop e preview
- [x] Color pickers para personalização de marca
- [x] Mobile: sidebar hamburger menu funcional
- [x] Layout responsivo mobile-first

---

## 🏃 Sprint 04: CRM UI 🎨 (Frontend Only) ✅ CONCLUÍDO

**Tipo:** 🎨 Frontend (F)  
**Duração:** 2 semanas  
**Período:** Março/2026 (Semanas 4-5)  
**Objetivo:** Interface completa de gestão de clientes e pipeline  
**Status:** ✅ **CONCLUÍDO EM 20/03/2026** | **CRM completo com Kanban drag & drop**

### 🎨 Telas a Desenvolver

#### 4.1 Lista de Clientes
| ID | Elemento | Descrição | Mock Data | Status |
|----|----------|-----------|-----------|--------|
| LIST-01 | Tabela de clientes | Nome, contato, última compra | mockCustomers | ✅ |
| LIST-02 | Filtros | Por data, valor, status | - | ✅ |
| LIST-03 | Busca | Campo de busca por nome/email | - | ✅ |
| LIST-04 | Ações em massa | Selecionar, exportar | - | ✅ |
| LIST-05 | Paginação | Controles de navegação | mockPagination | ✅ |
| LIST-06 | Empty state | "Nenhum cliente cadastrado" | - | ✅ |

#### 4.2 Cadastro/Edição de Cliente
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| FORM-01 | Formulário de dados | Nome, email, telefone, endereço | ✅ |
| FORM-02 | Múltiplos contatos | Add/remove dinâmico | ✅ |
| FORM-03 | Tags | Chips de segmentação (máx 5) | ✅ |
| FORM-04 | Anotações | Textarea livre | ✅ |
| FORM-05 | Histórico visual | Timeline de interações | ✅ |

#### 4.3 Pipeline de Vendas (Kanban)
| ID | Elemento | Descrição | Mock Data | Status |
|----|----------|-----------|-----------|--------|
| KANBAN-01 | Colunas | 6 estágios (Novo Lead → Fechado) | mockStages | ✅ |
| KANBAN-02 | Cards de oportunidade | Cliente, valor, probabilidade | mockOpportunities | ✅ |
| KANBAN-03 | **Drag & drop** | @dnd-kit completo | - | ✅ |
| KANBAN-04 | Add card rápido | Botão "+" em cada coluna | - | ✅ |
| KANBAN-05 | Resumo do pipeline | Total em cada etapa | mockPipelineStats | ✅ |
| KANBAN-06 | Ações | Ganhar, Perder, Mover | - | ✅ |

#### 4.4 Detalhe da Oportunidade
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| OPP-01 | Header com valor | Destaque do valor estimado | ✅ |
| OPP-02 | Timeline de interações | Histórico visual | ✅ |
| OPP-03 | Form de nova interação | Tipo, data, notas | ✅ |
| OPP-04 | Ações | Ganhar, perder, mover | ✅ |
| OPP-05 | Drawer/Sheet | Painel lateral de detalhes | ✅ |

### 📝 Mock Data (CRM)
```typescript
const mockCRM = {
  customers: [
    { id: 1, name: 'João Silva', email: 'joao@email.com', phone: '(11) 99999-9999', 
      lastPurchase: '2026-03-10', totalSpent: 2500, tags: ['VIP', 'Recorrente'] },
    { id: 2, name: 'Maria Santos', email: 'maria@email.com', phone: '(11) 98888-8888',
      lastPurchase: null, totalSpent: 0, tags: ['Novo'] },
  ],
  opportunities: [
    { id: 1, customer: 'João Silva', value: 1500, stage: 'proposta', probability: 60,
      lastContact: '2026-03-14', nextFollowUp: '2026-03-17' },
    { id: 2, customer: 'Empresa ABC', value: 5000, stage: 'novo_lead', probability: 20,
      lastContact: '2026-03-13', nextFollowUp: '2026-03-16' },
  ],
  stages: [
    { id: 'novo_lead', name: 'Novo Lead', color: '#3B82F6', count: 5, total: 15000 },
    { id: 'proposta', name: 'Proposta', color: '#F59E0B', count: 3, total: 8000 },
    { id: 'fechado', name: 'Fechado', color: '#10B981', count: 12, total: 45000 },
  ]
};
```

### ✅ Checklist de Aceitação
- [x] Lista de clientes com filtros, busca e paginação
- [x] Formulário de cliente com validação Zod
- [x] Múltiplos contatos (add/remove dinâmico)
- [x] Tags com chips coloridos
- [x] **Kanban funcional com drag & drop (@dnd-kit)**
- [x] Cards arrastáveis entre 6 colunas
- [x] Resumo financeiro por coluna
- [x] Timeline de interações
- [x] Detalhe da oportunidade com drawer
- [x] Ações: Ganhar, Perder, Mover
- [x] Estados empty e loading implementados
- [x] 20+ clientes mockados
- [x] Responsivo mobile

---

## 🏃 Sprint 05: Storefront UI 🎨 (Frontend Only) ✅ CONCLUÍDO

**Tipo:** 🎨 Frontend (F)  
**Duração:** 2 semanas  
**Período:** Abril/2026 (Semanas 6-7)  
**Objetivo:** Interface da loja virtual pública (tema + checkout)  
**Status:** ✅ **CONCLUÍDO EM 21/03/2026** | **Loja completa com checkout e carrinho**

### 🎨 Telas a Desenvolver

#### 5.1 Tema da Loja Pública
| ID | Elemento | Descrição | Mock Data | Status |
|----|----------|-----------|-----------|--------|
| THEME-01 | Header loja | Logo, busca, carrinho | mockStoreConfig | 🔴 |
| THEME-02 | Grid de produtos | Cards de produtos | mockProducts | 🔴 |
| THEME-03 | Filtros laterais | Categorias, preço, etc | mockCategories | 🔴 |
| THEME-04 | Página de produto | Galeria, descrição, CTA | mockProductDetail | 🔴 |
| THEME-05 | Footer | Links, contato, redes | mockStoreConfig | 🔴 |

#### 5.2 Carrinho
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| CART-01 | Slide-out drawer | Carrinho lateral | 🔴 |
| CART-02 | Lista de itens | Produtos, quantidade, preço | 🔴 |
| CART-03 | Alterar quantidade | +/- e input manual | 🔴 |
| CART-04 | Remover item | Botão com confirmação | 🔴 |
| CART-05 | Resumo | Subtotal, frete, total | 🔴 |
| CART-06 | Botão checkout | CTA principal | 🔴 |
| CART-07 | Empty state | "Carrinho vazio" | 🔴 |

#### 5.3 Checkout (Visual)
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| CHECK-01 | Steps indicador | 1-Dados → 2-Pagamento → 3-Confirmação | 🔴 |
| CHECK-02 | Form dados pessoais | Nome, email, telefone | 🔴 |
| CHECK-03 | Form endereço | CEP, rua, número, etc | 🔴 |
| CHECK-04 | Seleção pagamento | Cartão, Pix, boleto (visual) | 🔴 |
| CHECK-05 | Resumo do pedido | Produtos, valores | 🔴 |
| CHECK-06 | Tela de sucesso | Confirmação com ilustração | 🔴 |

#### 5.4 Painel de Configuração da Loja
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| CONFIG-01 | Seleção de tema | 3 opções de templates | 🔴 |
| CONFIG-02 | Customizador de cores | Picker de cores da marca | 🔴 |
| CONFIG-03 | Banner config | Upload + preview | 🔴 |
| CONFIG-04 | Preview ao vivo | Iframe mostrando loja | 🔴 |
| CONFIG-05 | SEO básico | Título, descrição, imagem | 🔴 |

### 📝 Mock Data (Storefront)
```typescript
const mockStorefront = {
  storeConfig: {
    name: 'Ótica Visão',
    logo: '/images/logo-otica.png',
    primaryColor: '#3B82F6',
    banner: '/images/banner-otica.jpg',
    phone: '(11) 99999-9999'
  },
  products: [
    { id: 1, name: 'Óculos de Sol Ray-Ban', price: 899.90, 
      image: '/images/oculos1.jpg', category: 'Óculos de Sol',
      description: 'Proteção UV400...', stock: 5 },
    { id: 2, name: 'Armação Titanium', price: 459.90,
      image: '/images/oculos2.jpg', category: 'Armações',
      description: 'Leve e resistente...', stock: 12 },
  ],
  categories: [
    { id: 1, name: 'Óculos de Sol', count: 15 },
    { id: 2, name: 'Armações', count: 32 },
    { id: 3, name: 'Lentes', count: 8 },
  ],
  cart: {
    items: [
      { productId: 1, name: 'Óculos de Sol', price: 899.90, quantity: 1 }
    ],
    subtotal: 899.90,
    shipping: 0,
    total: 899.90
  }
};
```

### ✅ Checklist de Aceitação
- [x] Loja pública renderiza com tema customizado
- [x] Grid de produtos responsivo
- [x] Carrinho slide-out funciona
- [x] Checkout com steps visuais
- [x] Preview ao vivo no customizador
- [x] Mobile: layout adaptado (1 coluna produtos)

---

## 🏃 Sprint 06: Finance UI 💰 (Frontend Only) ✅ CONCLUÍDO

**Tipo:** 🎨 Frontend (F)  
**Duração:** 1 semana  
**Período:** Abril/2026 (Semana 8)  
**Objetivo:** Interface de gestão financeira (Contas a Pagar/Receber)  
**Status:** ✅ **CONCLUÍDO EM 21/03/2026** | **Financeiro completo com 3 sub-módulos**

### 🎨 Telas a Desenvolver

#### 6.1 Dashboard Financeiro
| ID | Elemento | Descrição | Mock Data | Status |
|----|----------|-----------|-----------|--------|
| FIN-DASH-01 | Cards principais | Saldo, a receber, a pagar | mockFinanceSummary | 🔴 |
| FIN-DASH-02 | Gráfico de fluxo | Entradas vs saídas (linha) | mockCashFlow | 🔴 |
| FIN-DASH-03 | Contas vencendo | Lista de próximos 7 dias | mockUpcoming | 🔴 |
| FIN-DASH-04 | Acesso rápido | Botões: Nova conta, Relatório | - | 🔴 |

#### 6.2 Contas a Receber
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| REC-01 | Lista de contas | Cliente, valor, vencimento, status | 🔴 |
| REC-02 | Filtros | Por status, data, cliente | 🔴 |
| REC-03 | Marcar como recebido | Checkbox com data de recebimento | 🔴 |
| REC-04 | Cadastro rápido | Modal de nova conta a receber | 🔴 |
| REC-05 | Empty state | "Nenhuma conta a receber" | 🔴 |

#### 6.3 Contas a Pagar
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| PAY-01 | Lista de contas | Fornecedor, valor, vencimento | 🔴 |
| PAY-02 | Filtros | Por status, categoria, fornecedor | 🔴 |
| PAY-03 | Marcar como pago | Checkbox com data de pagamento | 🔴 |
| PAY-04 | Cadastro rápido | Modal de nova conta a pagar | 🔴 |
| PAY-05 | Categorias | Tags: Aluguel, Fornecedor, Taxas | 🔴 |

#### 6.4 Fluxo de Caixa
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| CASH-01 | Tabela mensal | Dia a dia com entradas/saídas | 🔴 |
| CASH-02 | Saldo acumulado | Gráfico de evolução | 🔴 |
| CASH-03 | Projeção | Previsão para próximos 30 dias | 🔴 |
| CASH-04 | Exportar | Botão PDF/Excel | 🔴 |

### 📝 Mock Data (Financeiro)
```typescript
const mockFinance = {
  summary: {
    balance: 15420.50,
    toReceive: 8500.00,
    toPay: 3200.00,
    projected: 20720.50
  },
  cashFlow: [
    { date: '2026-03-01', income: 3000, expense: 1500 },
    { date: '2026-03-02', income: 2500, expense: 800 },
    // ... 30 dias
  ],
  receivables: [
    { id: 1, client: 'João Silva', amount: 1200, dueDate: '2026-03-20', status: 'pending' },
    { id: 2, client: 'Maria Santos', amount: 800, dueDate: '2026-03-18', status: 'paid', paidDate: '2026-03-15' },
  ],
  payables: [
    { id: 1, supplier: 'Fornecedor A', amount: 1500, dueDate: '2026-03-25', category: 'Produtos', status: 'pending' },
  ]
};
```

### ✅ Checklist de Aceitação
- [ ] Dashboard financeiro com cards visíveis
- [ ] Lista de contas a receber/pagar com filtros
- [ ] Marcadores de status (pending/paid/overdue)
- [ ] Gráfico de fluxo de caixa renderizando
- [ ] Cores semânticas (verde=entrada, vermelho=saída)

---

## 🏃 Sprint 07: Services UI 🛠️ (Frontend Only) ✅ CONCLUÍDO

**Tipo:** 🎨 Frontend (F)  
**Duração:** 1 semana  
**Período:** Abril/2026 (Semana 9)  
**Objetivo:** Interface de cadastro de serviços  
**Status:** ✅ **CONCLUÍDO EM 21/03/2026** | **Serviços com catálogo e cadastro**

### 🎨 Telas a Desenvolver

#### 7.1 Lista de Serviços
| ID | Elemento | Descrição | Mock Data | Status |
|----|----------|-----------|-----------|--------|
| SERV-01 | Grid de serviços | Cards com nome, preço, duração | mockServices | 🔴 |
| SERV-02 | Busca | Campo de busca por nome | - | 🔴 |
| SERV-03 | Filtros | Por categoria, preço | mockCategories | 🔴 |
| SERV-04 | Status | Ativo/Inativo toggle | - | 🔴 |
| SERV-05 | Empty state | "Nenhum serviço cadastrado" | - | 🔴 |

#### 7.2 Cadastro de Serviço
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| SERV-FORM-01 | Dados básicos | Nome, descrição | 🔴 |
| SERV-FORM-02 | Preço | Valor, opção de variações | 🔴 |
| SERV-FORM-03 | Duração | Tempo estimado do serviço | 🔴 |
| SERV-FORM-04 | Categoria | Select ou tags | 🔴 |
| SERV-FORM-05 | Imagens | Upload de fotos do serviço | 🔴 |
| SERV-FORM-06 | Disponibilidade | Dias/horários de atendimento | 🔴 |

#### 7.3 Catálogo de Serviços (Público)
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| CAT-01 | Grid serviços | Visualização pública | 🔴 |
| CAT-02 | Detalhe serviço | Modal com descrição completa | 🔴 |
| CAT-03 | Botão agendar | CTA para agendamento | 🔴 |
| CAT-04 | Preview | Como aparece na loja | 🔴 |

### 📝 Mock Data (Serviços)
```typescript
const mockServices = {
  services: [
    { id: 1, name: 'Corte de Cabelo', price: 45.00, duration: 30, 
      category: 'Cabelo', active: true, image: '/images/corte.jpg' },
    { id: 2, name: 'Manicure', price: 35.00, duration: 45,
      category: 'Unhas', active: true, image: '/images/manicure.jpg' },
  ],
  categories: [
    { id: 1, name: 'Cabelo', count: 5 },
    { id: 2, name: 'Unhas', count: 3 },
    { id: 3, name: 'Estética', count: 4 },
  ]
};
```

### ✅ Checklist de Aceitação
- [ ] Lista de serviços em cards ou tabela
- [ ] Formulário de cadastro completo
- [ ] Preview visual do serviço
- [ ] Controle de ativo/inativo
- [ ] Integração visual com catálogo da loja

---

## 🏃 Sprint 08: Vendas PDV UI 💵 (Frontend Only) ✅ CONCLUÍDO

**Tipo:** 🎨 Frontend (F)  
**Duração:** 2 semanas  
**Período:** Maio/2026 (Semana 10-11)  
**Objetivo:** Interface de Ponto de Venda (PDV) completo  
**Status:** ✅ **CONCLUÍDO EM 21/03/2026** | **PDV completo com grade, carrinho e controle de caixa**

### 🎨 Telas a Desenvolver

#### 8.1 Lista de Fornecedores
| ID | Elemento | Descrição | Mock Data | Status |
|----|----------|-----------|-----------|--------|
| SUPP-01 | Tabela fornecedores | Nome, contato, categoria | mockSuppliers | 🔴 |
| SUPP-02 | Busca | Por nome ou produto | - | 🔴 |
| SUPP-03 | Filtros | Por categoria, status | - | 🔴 |
| SUPP-04 | Rating | Estrelas de avaliação | - | 🔴 |
| SUPP-05 | Empty state | "Nenhum fornecedor cadastrado" | - | 🔴 |

#### 8.2 Cadastro de Fornecedor
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| SUPP-FORM-01 | Dados empresa | Nome, CNPJ, razão social | 🔴 |
| SUPP-FORM-02 | Contato | Telefone, email, endereço | 🔴 |
| SUPP-FORM-03 | Produtos | Lista de produtos fornecidos | 🔴 |
| SUPP-FORM-04 | Condições | Prazo de pagamento, entrega | 🔴 |
| SUPP-FORM-05 | Anotações | Observações internas | 🔴 |

#### 8.3 Detalhe do Fornecedor
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| SUPP-DET-01 | Header | Nome + rating + categoria | 🔴 |
| SUPP-DET-02 | Histórico | Compras realizadas (mock) | 🔴 |
| SUPP-DET-03 | Produtos | Lista de produtos do fornecedor | 🔴 |
| SUPP-DET-04 | Ações | Editar, desativar, excluir | 🔴 |

### 📝 Mock Data (Fornecedores)
```typescript
const mockSuppliers = {
  suppliers: [
    { id: 1, name: 'Distribuidora ABC', cnpj: '12.345.678/0001-90',
      contact: { phone: '(11) 99999-9999', email: 'contato@abc.com' },
      category: 'Produtos', rating: 4.5, products: ['Armações', 'Lentes'] },
    { id: 2, name: 'Fornecedor XYZ', cnpj: '98.765.432/0001-10',
      contact: { phone: '(11) 98888-8888', email: 'vendas@xyz.com' },
      category: 'Embalagens', rating: 4.0, products: ['Caixas', 'Sacolas'] },
  ]
};
```

### ✅ Checklist de Aceitação
- [ ] Lista de fornecedores com filtros
- [ ] Formulário de cadastro completo
- [ ] Sistema de rating visual (estrelas)
- [ ] Detalhe com histórico de compras
- [ ] Empty state e loading states

---

## 🏃 Sprint 09: Employees UI 👥 (Frontend Only) 🔴 PENDENTE

**Tipo:** 🎨 Frontend (F)  
**Duração:** 1 semana  
**Período:** Maio/2026 (Semana 11)  
**Objetivo:** Interface de gestão de colaboradores  
**Status:** 🔴 **PENDENTE**

### 🎨 Telas a Desenvolver

#### 9.1 Lista de Colaboradores
| ID | Elemento | Descrição | Mock Data | Status |
|----|----------|-----------|-----------|--------|
| EMP-01 | Cards/tabela | Foto, nome, cargo, status | mockEmployees | 🔴 |
| EMP-02 | Busca | Por nome ou função | - | 🔴 |
| EMP-03 | Filtros | Por departamento, status | - | 🔴 |
| EMP-04 | Permissões | Badge de nível de acesso | - | 🔴 |
| EMP-05 | Empty state | "Nenhum colaborador cadastrado" | - | 🔴 |

#### 9.2 Cadastro de Colaborador
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| EMP-FORM-01 | Dados pessoais | Nome, email, telefone, foto | 🔴 |
| EMP-FORM-02 | Cargo | Função, departamento | 🔴 |
| EMP-FORM-03 | Permissões | Checkbox de módulos permitidos | 🔴 |
| EMP-FORM-04 | Acesso | Login temporário/senha inicial | 🔴 |
| EMP-FORM-05 | Agendamento | Horários disponíveis (se aplicável) | 🔴 |

#### 9.3 Permissões e Papéis
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| ROLE-01 | Lista de papéis | Admin, Gerente, Vendedor, etc | 🔴 |
| ROLE-02 | Config permissões | Matriz de permissões por módulo | 🔴 |
| ROLE-03 | Preview acesso | Simular visão do colaborador | 🔴 |

### 📝 Mock Data (Colaboradores)
```typescript
const mockEmployees = {
  employees: [
    { id: 1, name: 'Ana Silva', role: 'Vendedora', department: 'Vendas',
      email: 'ana@empresa.com', phone: '(11) 99999-9999',
      permissions: ['crm', 'finance'], status: 'active', avatar: '/images/ana.jpg' },
    { id: 2, name: 'Pedro Santos', role: 'Gerente', department: 'Administração',
      email: 'pedro@empresa.com', phone: '(11) 98888-8888',
      permissions: ['all'], status: 'active', avatar: '/images/pedro.jpg' },
  ],
  roles: [
    { id: 'admin', name: 'Administrador', permissions: ['all'] },
    { id: 'manager', name: 'Gerente', permissions: ['crm', 'finance', 'services'] },
    { id: 'seller', name: 'Vendedor', permissions: ['crm', 'storefront'] },
  ]
};
```

### ✅ Checklist de Aceitação
- [ ] Lista de colaboradores com fotos
- [ ] Formulário de cadastro com permissões
- [ ] Matriz de permissões visual
- [ ] Controle de ativo/inativo
- [ ] Preview de visão por papel

---

## 🏃 Sprint 10: Chatbot UI 🤖 (Frontend Only) ✅ PARCIAL

**Tipo:** 🎨 Frontend (F)  
**Duração:** 1 semana  
**Período:** Maio/2026 (Semana 12)  
**Objetivo:** Interface de atendimento automatizado  
**Status:** ✅ **PARCIAL** | **MEL Widget implementado no Dashboard, aguardando painel completo de chatbot**

> ⚠️ **Nota:** MEL (Consultor de Growth IA) tem widget funcional no Dashboard. Painel de chatbot completo pendente.

### 🎨 Telas a Desenvolver

#### 10.1 Painel de Conversas
| ID | Elemento | Descrição | Mock Data | Status |
|----|----------|-----------|-----------|--------|
| CHAT-01 | Lista de chats | Cliente, última mensagem, hora | mockConversations | 🔴 |
| CHAT-02 | Status | Online, offline, aguardando | - | 🔴 |
| CHAT-03 | Filtros | Por status, cliente, data | - | 🔴 |
| CHAT-04 | Busca | Por nome do cliente | - | 🔴 |
| CHAT-05 | Badge não lidas | Contador de mensagens pendentes | - | 🔴 |

#### 10.2 Janela de Conversa
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| CONV-01 | Header cliente | Nome, foto, status | 🔴 |
| CONV-02 | Área de mensagens | Bubbles de chat (estilo WhatsApp) | 🔴 |
| CONV-03 | Indicador bot/humano | Quem está respondendo | 🔴 |
| CONV-04 | Input mensagem | Campo de texto + enviar | 🔴 |
| CONV-05 | Quick replies | Botões de resposta rápida | 🔴 |
| CONV-06 | Anexos | Fotos, documentos | 🔴 |
| CONV-07 | Histórico | Scroll infinito de mensagens | 🔴 |

#### 10.3 Configuração do Chatbot
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| BOT-CONFIG-01 | Mensagens automáticas | Saudação, fora de horário | 🔴 |
| BOT-CONFIG-02 | FAQ | Perguntas e respostas comuns | 🔴 |
| BOT-CONFIG-03 | Palavras-chave | Gatilhos para respostas | 🔴 |
| BOT-CONFIG-04 | Tom de voz | Formal vs informal | 🔴 |
| BOT-CONFIG-05 | Horário | Quando atender automaticamente | 🔴 |

### 📝 Mock Data (Chatbot)
```typescript
const mockChatbot = {
  conversations: [
    { id: 1, client: 'João Silva', lastMessage: 'Quanto custa o óculos?', 
      time: '10:30', unread: 2, status: 'online', avatar: '/images/joao.jpg' },
    { id: 2, client: 'Maria Santos', lastMessage: 'Obrigada!', 
      time: '09:15', unread: 0, status: 'offline', avatar: '/images/maria.jpg' },
  ],
  messages: [
    { id: 1, sender: 'client', text: 'Olá, vocês entregam?', time: '10:25' },
    { id: 2, sender: 'bot', text: 'Olá! Sim, fazemos entrega. Qual seu CEP?', time: '10:26' },
    { id: 3, sender: 'client', text: 'Quanto custa o óculos?', time: '10:30' },
  ],
  faq: [
    { question: 'Horário de funcionamento', answer: 'Seg-Sex: 9h às 18h, Sáb: 9h às 13h' },
    { question: 'Formas de pagamento', answer: 'Cartão, Pix, Dinheiro' },
  ]
};
```

### ✅ Checklist de Aceitação
- [ ] Lista de conversas estilo WhatsApp Web
- [ ] Janela de chat com bubbles
- [ ] Indicador de quem está respondendo (bot/humano)
- [ ] Quick replies (respostas rápidas)
- [ ] Configuração de mensagens automáticas
- [ ] Preview de FAQ configurado

---

## 🏃 Sprint 11: Marketplace UI 🛒 (Frontend Only) 🔴 PENDENTE

**Tipo:** 🎨 Frontend (F)  
**Duração:** 1 semana  
**Período:** Maio/2026 (Semana 13)  
**Objetivo:** Interface de marketplace multi-tenant  
**Status:** 🔴 **PENDENTE**

### 🎨 Telas a Desenvolver

#### 11.1 Lista de Lojistas
| ID | Elemento | Descrição | Mock Data | Status |
|----|----------|-----------|-----------|--------|
| MKP-01 | Grid de lojistas | Cards com logo, nome, avaliação | mockSellers | 🔴 |
| MKP-02 | Filtros | Por categoria, localização, rating | - | 🔴 |
| MKP-03 | Busca | Por nome do lojista ou produto | - | 🔴 |
| MKP-04 | Destaques | Lojistas em destaque no topo | - | 🔴 |
| MKP-05 | Empty state | "Nenhum lojista encontrado" | - | 🔴 |

#### 11.2 Perfil do Lojista
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| MKP-PROF-01 | Header | Logo, nome, banner, rating | 🔴 |
| MKP-PROF-02 | Produtos | Grid de produtos do lojista | 🔴 |
| MKP-PROF-03 | Sobre | Descrição, contato, endereço | 🔴 |
| MKP-PROF-04 | Avaliações | Reviews de clientes | 🔴 |
| MKP-PROF-05 | Contato | Botão WhatsApp, email | 🔴 |

#### 11.3 Painel do Lojista (Vendedor)
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| MKP-PAINEL-01 | Estatísticas | Vendas, visitas, conversão | 🔴 |
| MKP-PAINEL-02 | Produtos publicados | Lista com status | 🔴 |
| MKP-PAINEL-03 | Pedidos | Entradas de outros clientes | 🔴 |
| MKP-PAINEL-04 | Config loja | Nome, descrição, políticas | 🔴 |

### 📝 Mock Data (Marketplace)
```typescript
const mockMarketplace = {
  sellers: [
    { id: 1, name: 'Ótica Visão', logo: '/images/otica-logo.png',
      banner: '/images/otica-banner.jpg', rating: 4.8,
      category: 'Ótica', location: 'Suzano/SP', products: 45 },
    { id: 2, name: 'Gráfica Rápida', logo: '/images/grafica-logo.png',
      banner: '/images/grafica-banner.jpg', rating: 4.5,
      category: 'Gráfica', location: 'Mogi/SP', products: 120 },
  ],
  sellerProfile: {
    id: 1,
    name: 'Ótica Visão',
    description: 'Especialistas em armações e lentes...',
    phone: '(11) 99999-9999',
    email: 'contato@oticavisao.com',
    address: 'Rua das Flores, 123 - Centro, Suzano/SP',
    rating: 4.8,
    reviews: 127,
    products: [
      { id: 1, name: 'Armação Titanium', price: 459.90, image: '/images/armação.jpg' },
    ]
  }
};
```

### ✅ Checklist de Aceitação
- [ ] Grid de lojistas com cards
- [ ] Filtros por categoria e localização
- [ ] Perfil do lojista completo
- [ ] Produtos do lojista visíveis
- [ ] Painel de estatísticas do vendedor
- [ ] Sistema de avaliações (estrelas)

---

## 🏃 Sprint 12: Estoque UI 📦 (Frontend Only) ⚠️ PLACEHOLDER

**Tipo:** 🎨 Frontend (F)  
**Duração:** 1 semana  
**Período:** Maio/2026 (Semana 14)  
**Objetivo:** Interface de gestão de estoque completa  
**Status:** ⚠️ **PLACEHOLDER** | **Página criada, aguardando implementação completa**

### 🎨 Telas a Desenvolver

#### 12.1 Dashboard de Estoque
| ID | Elemento | Descrição | Mock Data | Status |
|----|----------|-----------|-----------|--------|
| EST-DASH-01 | Cards principais | Total produtos, valor em estoque | mockStockSummary | 🔴 |
| EST-DASH-02 | Alertas | Produtos com estoque baixo | mockLowStock | 🔴 |
| EST-DASH-03 | Movimentação | Entradas e saídas recentes | mockMovements | 🔴 |
| EST-DASH-04 | Acesso rápido | Novo produto, entrada em massa | - | 🔴 |

#### 12.2 Lista de Produtos (Estoque)
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| EST-LIST-01 | Tabela completa | Produto, estoque, valor unitário | 🔴 |
| EST-LIST-02 | Variações | Cores, tamanhos, expandir | 🔴 |
| EST-LIST-03 | Filtros | Por categoria, estoque, fornecedor | 🔴 |
| EST-LIST-04 | Busca | Por nome, SKU, código de barras | 🔴 |
| EST-LIST-05 | Ações | Editar, histórico, ajustar estoque | 🔴 |

#### 12.3 Entrada de Estoque
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| EST-IN-01 | Produto único | Buscar, quantidade, preço custo | 🔴 |
| EST-IN-02 | Entrada em massa | Upload CSV, importar produtos | 🔴 |
| EST-IN-03 | Fornecedor | Selecionar fornecedor da lista | 🔴 |
| EST-IN-04 | NF/Documento | Número da nota, anexo | 🔴 |
| EST-IN-05 | Histórico | Lista de entradas anteriores | 🔴 |

#### 12.4 Categorias e Etiquetas
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| EST-CAT-01 | Lista categorias | Hierarquia, quantidade por categoria | 🔴 |
| EST-CAT-02 | Árvore de categorias | Subcategorias, drag & drop | 🔴 |
| EST-ETQ-01 | Gerador etiquetas | Selecionar produtos, modelo | 🔴 |
| EST-ETQ-02 | Preview etiqueta | Código de barras, nome, preço | 🔴 |
| EST-ETQ-03 | Impressão | PDF para impressão | 🔴 |

### 📝 Mock Data (Estoque)
```typescript
const mockEstoque = {
  summary: {
    totalProducts: 245,
    totalValue: 45230.50,
    lowStockCount: 12,
    categories: 8
  },
  products: [
    { id: 1, name: 'Óculos Ray-Ban', sku: 'RB001', barcode: '7891234567890',
      stock: 15, minStock: 5, price: 899.90, cost: 450.00,
      category: 'Óculos de Sol', variations: ['Preto', 'Marrom'] },
    { id: 2, name: 'Armação Titanium', sku: 'ARM-TIT-01', barcode: '7899876543210',
      stock: 3, minStock: 5, price: 459.90, cost: 200.00,
      category: 'Armações', variations: [] },
  ],
  movements: [
    { id: 1, type: 'in', product: 'Óculos Ray-Ban', quantity: 20, date: '2026-03-10', supplier: 'Distribuidora ABC' },
    { id: 2, type: 'out', product: 'Armação Titanium', quantity: 2, date: '2026-03-09', reason: 'Venda #1234' },
  ],
  lowStock: [
    { id: 2, name: 'Armação Titanium', stock: 3, minStock: 5, missing: 2 },
  ]
};
```

### ✅ Checklist de Aceitação
- [ ] Dashboard com cards de resumo
- [ ] Lista de produtos com variações
- [ ] Alertas de estoque baixo (visuais)
- [ ] Entrada de estoque (manual e CSV)
- [ ] Árvore de categorias hierárquica
- [ ] Gerador de etiquetas com preview
- [ ] Histórico de movimentações

---

## 🏃 Sprint 13: Vendas PDV UI 💵 (Frontend Only) ✅ CONCLUÍDO

**Tipo:** 🎨 Frontend (F)  
**Duração:** 2 semanas  
**Período:** Junho/2026 (Semanas 15-16)  
**Objetivo:** Interface de Ponto de Venda (PDV) completo  
**Status:** ✅ **CONCLUÍDO EM 21/03/2026** | **PDV completo - ver Sprint 08**

> ⚠️ **Nota:** PDV foi implementado na Sprint 08 conforme prioridade do projeto.

### 🎨 Telas a Desenvolver

#### 13.1 Tela Principal do PDV
| ID | Elemento | Descrição | Mock Data | Status |
|----|----------|-----------|-----------|--------|
| PDV-01 | Busca rápida | Campo com autocomplete de produtos | mockProducts | 🔴 |
| PDV-02 | Grid de produtos | Cards com foto, nome, preço | mockProductGrid | 🔴 |
| PDV-03 | Categorias | Filtro lateral por categoria | mockCategories | 🔴 |
| PDV-04 | Carrinho lateral | Itens, quantidade, subtotal | mockCart | 🔴 |
| PDV-05 | Atalhos teclado | F1 a F12 para funções | - | 🔴 |

#### 13.2 Checkout PDV
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| PDV-PAY-01 | Resumo da venda | Produtos, total, desconto | 🔴 |
| PDV-PAY-02 | Formas de pagamento | Dinheiro, cartão, Pix, misto | 🔴 |
| PDV-PAY-03 | Cálculo de troco | Valor recebido, troco | 🔴 |
| PDV-PAY-04 | Cliente | Buscar/vincular cliente (opcional) | 🔴 |
| PDV-PAY-05 | Finalizar | Confirmação, impressão cupom | 🔴 |

#### 13.3 Controle de Caixa
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| CAIXA-01 | Abertura | Informar valor inicial do caixa | 🔴 |
| CAIXA-02 | Sangria | Retirada de dinheiro (com motivo) | 🔴 |
| CAIXA-03 | Suprimento | Acréscimo de dinheiro no caixa | 🔴 |
| CAIXA-04 | Fechamento | Resumo do dia, conferência | 🔴 |
| CAIXA-05 | Histórico | Movimentações do caixa por dia | 🔴 |

#### 13.4 Relatórios de Vendas
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| PDV-REL-01 | Vendas por período | Filtro de data, totalizadores | 🔴 |
| PDV-REL-02 | Produtos mais vendidos | Ranking, quantidade, valor | 🔴 |
| PDV-REL-03 | Vendas por vendedor | Performance da equipe | 🔴 |
| PDV-REL-04 | Formas de pagamento | Distribuição (dinheiro, cartão, Pix) | 🔴 |
| PDV-REL-05 | Cancelamentos | Motivos, valores | 🔴 |

### 📝 Mock Data (Vendas PDV)
```typescript
const mockPDV = {
  products: [
    { id: 1, name: 'Óculos Ray-Ban', price: 899.90, image: '/images/rb.jpg', stock: 15, category: 'Óculos de Sol' },
    { id: 2, name: 'Armação Titanium', price: 459.90, image: '/images/tit.jpg', stock: 8, category: 'Armações' },
    { id: 3, name: 'Lente Transitions', price: 350.00, image: '/images/lente.jpg', stock: 20, category: 'Lentes' },
  ],
  cart: {
    items: [
      { productId: 1, name: 'Óculos Ray-Ban', price: 899.90, quantity: 1, total: 899.90 },
      { productId: 2, name: 'Armação Titanium', price: 459.90, quantity: 1, total: 459.90 },
    ],
    subtotal: 1359.80,
    discount: 0,
    total: 1359.80
  },
  cashRegister: {
    isOpen: true,
    openingAmount: 200.00,
    currentBalance: 1847.50,
    salesCount: 12,
    lastClosure: '2026-03-13 18:00'
  },
  salesReport: [
    { id: 1, time: '09:30', total: 459.90, paymentMethod: 'credit_card', seller: 'Ana' },
    { id: 2, time: '10:15', total: 1250.00, paymentMethod: 'pix', seller: 'Ana' },
  ]
};
```

### ✅ Checklist de Aceitação
- [ ] Tela PDV com busca e grid de produtos
- [ ] Carrinho lateral atualizando em tempo real
- [ ] Checkout com múltiplas formas de pagamento
- [ ] Cálculo automático de troco
- [ ] Controle de caixa (abertura, sangria, suprimento, fechamento)
- [ ] Relatórios de vendas por período
- [ ] Performance por vendedor
- [ ] Atalhos de teclado funcionando

---

## 🏃 Sprint 14: Agendamentos UI 📅 (Frontend Only) ✅ CONCLUÍDO

**Tipo:** 🎨 Frontend (F)  
**Duração:** 1 semana  
**Período:** Junho/2026 (Semana 17)  
**Objetivo:** Interface de agendamentos e reservas  
**Status:** ✅ **CONCLUÍDO EM 21/03/2026** | **Calendário completo com visualização Dia/Semana/Mês**

### 🎨 Telas a Desenvolver

#### 14.1 Calendário de Agendamentos
| ID | Elemento | Descrição | Mock Data | Status |
|----|----------|-----------|-----------|--------|
| AGD-01 | Visualização calendário | Dia, semana, mês | mockAppointments | 🔴 |
| AGD-02 | Slots de horário | Grid com horários disponíços/ocupados | - | 🔴 |
| AGD-03 | Agendamentos | Cards com cliente, serviço, status | - | 🔴 |
| AGD-04 | Cores por status | Confirmado, pendente, cancelado, concluído | - | 🔴 |
| AGD-05 | Drag & drop | Mover agendamento de horário | - | 🔴 |

#### 14.2 Novo Agendamento
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| AGD-NEW-01 | Seleção serviço | Lista de serviços disponíveis | 🔴 |
| AGD-NEW-02 | Profissional | Escolher colaborador (ou qualquer) | 🔴 |
| AGD-NEW-03 | Data/hora | Calendário com horários disponíveis | 🔴 |
| AGD-NEW-04 | Cliente | Buscar cadastrado ou cadastrar novo | 🔴 |
| AGD-NEW-05 | Observações | Notas internas para o atendimento | 🔴 |
| AGD-NEW-06 | Confirmação | Resumo e confirmação | 🔴 |

#### 14.3 Configuração de Agenda
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| AGD-CONF-01 | Horários de funcionamento | Dias da semana, horário início/fim | 🔴 |
| AGD-CONF-02 | Intervalos | Pausa para almoço, bloqueios | 🔴 |
| AGD-CONF-03 | Serviços por profissional | Quem pode fazer cada serviço | 🔴 |
| AGD-CONF-04 | Duração padrão | Tempo estimado por serviço | 🔴 |
| AGD-CONF-05 | Feriados | Bloquear dias específicos | 🔴 |

#### 14.4 Lista de Agendamentos
| ID | Elemento | Descrição | Status |
|----|----------|-----------|--------|
| AGD-LIST-01 | Filtros | Por data, cliente, serviço, status | 🔴 |
| AGD-LIST-02 | Busca | Por nome do cliente | 🔴 |
| AGD-LIST-03 | Status | Confirmar, cancelar, marcar concluído | 🔴 |
| AGD-LIST-04 | Notificações | Lembretes automáticos (config) | 🔴 |
| AGD-LIST-05 | Histórico | Agendamentos passados do cliente | 🔴 |

### 📝 Mock Data (Agendamentos)
```typescript
const mockAgendamentos = {
  appointments: [
    { id: 1, client: 'João Silva', service: 'Corte de Cabelo', 
      professional: 'Ana', date: '2026-03-15', time: '10:00', 
      duration: 30, status: 'confirmed', phone: '(11) 99999-9999' },
    { id: 2, client: 'Maria Santos', service: 'Manicure',
      professional: 'Pedro', date: '2026-03-15', time: '11:00',
      duration: 45, status: 'pending', phone: '(11) 98888-8888' },
  ],
  schedule: {
    monday: { start: '09:00', end: '18:00', intervals: [{ start: '12:00', end: '13:00' }] },
    tuesday: { start: '09:00', end: '18:00', intervals: [{ start: '12:00', end: '13:00' }] },
    wednesday: { start: '09:00', end: '18:00', intervals: [{ start: '12:00', end: '13:00' }] },
    thursday: { start: '09:00', end: '18:00', intervals: [{ start: '12:00', end: '13:00' }] },
    friday: { start: '09:00', end: '18:00', intervals: [{ start: '12:00', end: '13:00' }] },
    saturday: { start: '09:00', end: '13:00', intervals: [] },
    sunday: null, // Fechado
  },
  services: [
    { id: 1, name: 'Corte de Cabelo', duration: 30, price: 45.00, professionals: ['Ana', 'Pedro'] },
    { id: 2, name: 'Manicure', duration: 45, price: 35.00, professionals: ['Ana'] },
  ]
};
```

### ✅ Checklist de Aceitação
- [ ] Calendário visual (dia/semana/mês)
- [ ] Slots de horário coloridos por status
- [ ] Modal de novo agendamento com passos
- [ ] Busca de cliente integrada ao CRM
- [ ] Configuração de horários de funcionamento
- [ ] Associação serviço-profissional
- [ ] Notificações automáticas configuráveis
- [ ] Drag & drop para reagendamento

---

## ⚙️ FASE 2: Backend & Schema — Tabelas para TODOS os Módulos (Mês 4-7)

> **Nota:** Esta seção contém o cronograma completo de backend. As sprints de UI já foram detalhadas na FASE 1.

### ⚙️ Cronograma Backend - Todos os Módulos

| Sprint | Módulo | Nome | Tipo | Duração | Objetivo | Status |
|--------|--------|------|------|---------|----------|--------|
| **15** | Base | Auth & Core DB ⚙️ | (B) | 1 semana | Supabase Auth, tabelas base, RLS | 🔴 |
| **16** | CRM | CRM Schema ⚙️ | (B) | 1 semana | Tabelas CRM, pipeline, interações | 🔴 |
| **17** | 💰 Financeiro | Finance Schema ⚙️ | (B) | 1 semana | Contas, categorias, DRE, conciliação | 🔴 |
| **18** | 🛒 Marketplace | Marketplace Schema ⚙️ | (B) | 1 semana | Lojistas, produtos marketplace, comissões | 🔴 |
| **19** | 📦 Estoque | Estoque Schema ⚙️ | (B) | 1 semana | Produtos, movimentações, categorias | 🔴 |
| **20** | 💵 Vendas PDV | PDV Schema ⚙️ | (B) | 1 semana | Caixa, vendas, sangria, suprimento | 🔴 |
| **21** | 🏪 Loja | Storefront Schema ⚙️ | (B) | 1 semana | Produtos, pedidos, checkout, tema | 🔴 |
| **22** | 📅 Agendamentos | Agendamentos Schema ⚙️ | (B) | 1 semana | Horários, reservas, serviços, bloqueios | 🔴 |
| **23** | 🤖 Chatbot | Chatbot Schema ⚙️ | (B) | 1 semana | Conversas, mensagens automáticas, FAQ | 🔴 |
| **24** | 🛠️ Serviços | Services Schema ⚙️ | (B) | 1 semana | Serviços, preços, duração, profissionais | 🔴 |
| **25** | 📦 Fornecedores | Suppliers Schema ⚙️ | (B) | 1 semana | Fornecedores, produtos fornecidos | 🔴 |
| **26** | 👥 Colaboradores | Employees Schema ⚙️ | (B) | 1 semana | Colaboradores, roles, permissões | 🔴 |
| **27** | Base | Storage & Migrations ⚙️ | (B) | 1 semana | Storage imagens, migrações, seed | 🔴 |
| **28** | Base | Integration Layer 🔗 | (I) | 2 semanas | Conectar todas as UIs ao backend | 🔴 |

**Total FASE 2:** 14 Sprints | 16 semanas | 4 meses

---

## 🏃 Sprint 15: Auth & Core DB ⚙️ (Backend Only)

**Tipo:** ⚙️ Backend (B)  
**Duração:** 1 semana  
**Período:** Maio/2026 (Semana 8)  
**Objetivo:** Supabase Auth e tabelas base do sistema

### ⚙️ Entregáveis de Backend

#### 6.1 Supabase Auth Configuration
| ID | Componente | SQL/Config | Status |
|----|------------|------------|--------|
| AUTH-DB-01 | Enable Auth | `auth.users` (nativo) | 🔴 |
| AUTH-DB-02 | Email templates | Confirmação, recuperação | 🔴 |
| AUTH-DB-03 | RLS policies | Users só veem seus dados | 🔴 |
| AUTH-DB-04 | Triggers | created_at, updated_at | 🔴 |

#### 6.2 Tabelas Base
| ID | Tabela | Colunas Principais | RLS | Status |
|----|--------|-------------------|-----|--------|
| CORE-01 | companies | id, name, cnpj, logo_url, config | ✅ | 🔴 |
| CORE-02 | users | auth.uid(), company_id, role | ✅ | 🔴 |
| CORE-03 | notifications | user_id, type, content, read | ✅ | 🔴 |
| CORE-04 | activity_logs | company_id, action, metadata | ✅ | 🔴 |

#### 6.3 Storage
| ID | Bucket | Configuração | Status |
|----|--------|--------------|--------|
| STOR-01 | logos | Public, 2MB limit, images only | 🔴 |
| STOR-02 | products | Public, 5MB limit, images only | 🔴 |

### 📝 SQL Migration (Exemplo)
```sql
-- companies table
CREATE TABLE companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  cnpj TEXT UNIQUE,
  logo_url TEXT,
  config JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- RLS Policy
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own company" 
  ON companies FOR SELECT USING (
    auth.uid() IN (SELECT user_id FROM users WHERE company_id = companies.id)
  );
```

### ✅ Checklist de Aceitação (Backend)
- [ ] Auth funcionando (signup, login, logout)
- [ ] RLS policies aplicadas em todas as tabelas
- [ ] Triggers de timestamp funcionando
- [ ] Storage buckets criados com políticas
- [ ] Seed data para testes

---

## 🏃 Sprint 07: CRM Schema ⚙️ (Backend Only)

**Tipo:** ⚙️ Backend (B)  
**Duração:** 1 semana  
**Período:** Maio/2026 (Semana 9)  
**Objetivo:** Schema completo de CRM e pipeline

### ⚙️ Entregáveis de Backend

#### 7.1 Tabelas CRM
| ID | Tabela | Colunas | RLS | Status |
|----|--------|---------|-----|--------|
| CRM-01 | customers | company_id, name, email, phone, tags | ✅ | 🔴 |
| CRM-02 | opportunities | customer_id, title, value, stage_id | ✅ | 🔴 |
| CRM-03 | pipeline_stages | company_id, name, order, color | ✅ | 🔴 |
| CRM-04 | interactions | opportunity_id, type, notes, date | ✅ | 🔴 |
| CRM-05 | follow_ups | opportunity_id, scheduled_at, done | ✅ | 🔴 |

#### 7.2 Edge Functions
| ID | Function | Trigger | Status |
|----|----------|---------|--------|
| EDGE-01 | create_default_pipeline | AFTER INSERT company | 🔴 |
| EDGE-02 | check_follow_ups | Cron (diário) | 🔴 |

### ✅ Checklist de Aceitação
- [ ] Tabelas CRM criadas com FKs
- [ ] Pipeline padrão criado ao cadastrar empresa
- [ ] Dados mock populam corretamente
- [ ] Queries otimizadas (índices criados)

---

## 🏃 Sprint 08: Storefront Schema ⚙️ (Backend Only)

**Tipo:** ⚙️ Backend (B)  
**Duração:** 1 semana  
**Período:** Junho/2026 (Semana 10)  
**Objetivo:** Schema de produtos, pedidos e checkout

### ⚙️ Entregáveis de Backend

#### 8.1 Tabelas E-commerce
| ID | Tabela | Colunas | RLS | Status |
|----|--------|---------|-----|--------|
| EC-01 | products | company_id, name, price, stock, images | ✅ | 🔴 |
| EC-02 | categories | company_id, name, parent_id | ✅ | 🔴 |
| EC-03 | orders | customer_id, total, status, payment_method | ✅ | 🔴 |
| EC-04 | order_items | order_id, product_id, quantity, price | ✅ | 🔴 |
| EC-05 | store_configs | company_id, theme, colors, domain | ✅ | 🔴 |

#### 8.2 Edge Functions
| ID | Function | Descrição | Status |
|----|----------|-----------|--------|
| EDGE-03 | update_stock | AFTER INSERT order_item | 🔴 |
| EDGE-04 | create_order | Checkout completo | 🔴 |

### ✅ Checklist de Aceitação
- [ ] Produtos com relacionamento a companies
- [ ] Stock decrementa ao criar pedido
- [ ] Store config por empresa
- [ ] Pedidos com histórico de status

---

## 🏃 Sprint 09: Integration Layer 🔗 (Integration)

**Tipo:** 🔗 Integration (I)  
**Duração:** 2 semanas  
**Período:** Junho/2026 (Semanas 11-12)  
**Objetivo:** Conectar todas as UIs ao backend

### 🔗 Entregáveis de Integração

#### 9.1 APIs e Hooks
| ID | Módulo | API/Hooks | Status |
|----|--------|-----------|--------|
| INT-01 | Auth | useAuth, login, register, logout | 🔴 |
| INT-02 | Dashboard | useDashboardStats, useActivities | 🔴 |
| INT-03 | CRM | useCustomers, useOpportunities | 🔴 |
| INT-04 | Storefront | useProducts, useStoreConfig | 🔴 |
| INT-05 | Profile | useCompany, updateCompany | 🔴 |

#### 9.2 Conexões UI ↔ DB
| Sprint UI | Conexão Backend | Status |
|-----------|-----------------|--------|
| Sprint 02 (Auth) | Auth + Core DB | 🔴 |
| Sprint 03 (Dashboard) | Dashboard queries | 🔴 |
| Sprint 04 (CRM) | CRM tables + API | 🔴 |
| Sprint 05 (Store) | Storefront schema | 🔴 |

### ✅ Checklist de Aceitação
- [ ] Login criando usuário real no Auth
- [ ] Dashboard mostrando dados do banco
- [ ] CRUD de clientes funcionando
- [ ] Produtos cadastrados persistindo
- [ ] Upload de logo salvando no Storage

---

## 🤖 FASE 3: Integrações & MEL — Consultor Ativo (Mês 7-8)

| Sprint | Nome | Tipo | Duração | Objetivo | Status |
|--------|------|------|---------|----------|--------|
| **29** | n8n Workflows 🔗 | (I) | 1 semana | Automações, webhooks, triggers | 🔴 |
| **30** | MEL Basic 🤖 | (B+I) | 2 semanas | 3 fluxos essenciais no WhatsApp | 🔴 |
| **31** | MEL Advanced 🤖 | (B+I) | 2 semanas | IA preditiva, relatórios proativos | 🔴 |
| **32** | Onboarding Flow 🔗 | (I) | 1 semana | Fluxo ativação, wizard, checklist | 🔴 |

**Total FASE 3:** 4 Sprints | 6 semanas | 1.5 meses

---

## 🏃 Sprint 29: n8n Workflows 🔗 (Integration)

**Tipo:** 🔗 Integration (I)  
**Duração:** 1 semana  
**Período:** Junho/2026 (Semana 13)  
**Objetivo:** Workflows de automação configurados

### 🔗 Entregáveis

#### 10.1 Workflows Base
| ID | Workflow | Trigger | Ação | Status |
|----|----------|---------|------|--------|
| N8N-01 | Novo usuário | Webhook signup | Email boas-vindas | 🔴 |
| N8N-02 | Novo pedido | Webhook order | Notificar WhatsApp | 🔴 |
| N8N-03 | Lead capturado | Webhook lead | Notificar founder | 🔴 |

#### 10.2 Integração WhatsApp
| ID | Componente | Descrição | Status |
|----|------------|-----------|--------|
| WA-01 | WhatsApp Business API | Conexão oficial | 🔴 |
| WA-02 | Templates aprovados | Mensagens da Meta | 🔴 |
| WA-03 | Webhook inbound | Receber mensagens | 🔴 |

### ✅ Checklist de Aceitação
- [ ] n8n respondendo a webhooks
- [ ] Mensagens chegando no WhatsApp
- [ ] Templates aprovados pela Meta
- [ ] Workflows documentados

---
---

## 🏃 Sprint 30: MEL Basic 🤖 (Backend + Integration)

**Tipo:** 🤖 (B+I)  
**Duração:** 2 semanas  
**Período:** Agosto/2026 (Semanas 16-17)  
**Objetivo:** Consultor Ativo com 3 fluxos essenciais

### 🤖 Entregáveis

#### 30.1 Edge Function MEL
| ID | Function | Cron | Descrição | Status |
|----|----------|------|-----------|--------|
| MEL-EF-01 | daily_advisor | 0 8 * * * | Análise diária | 🔴 |
| MEL-EF-02 | check_churn | 0 9 * * 1 | Risco de churn | 🔴 |
| MEL-EF-03 | followup_reminder | 0 10 * * * | Follow-ups | 🔴 |

#### 11.2 Fluxos MEL
| ID | Fluxo | Gatilho | Mensagem | Status |
|----|-------|---------|----------|--------|
| MEL-F-01 | Relatório diário | Vendas de ontem | "Você vendeu R$ X" | 🔴 |
| MEL-F-02 | Churn alert | Cliente >45 dias | "João não compra há 45 dias" | 🔴 |
| MEL-F-03 | Follow-up | Oportunidade parada | "Lembre de ligar para Maria" | 🔴 |

#### 11.3 UI MEL
| ID | Componente | Descrição | Status |
|----|------------|-----------|--------|
| MEL-UI-01 | Configuração | Ligar/desligar fluxos | 🔴 |
| MEL-UI-02 | Histórico | Lista de mensagens enviadas | 🔴 |
| MEL-UI-03 | Preview | Pré-visualização de mensagens | 🔴 |

### ✅ Checklist de Aceitação
- [ ] MEL enviando relatório todo dia às 8h
- [ ] Churn detectado automaticamente
- [ ] Mensagens chegando no WhatsApp
- [ ] Interface de configuração funcional

---

## 🏃 Sprint 12: Onboarding Flow 🔗 (Integration)

**Tipo:** 🔗 Integration (I)  
**Duração:** 1 semana  
**Período:** Julho/2026 (Semana 16)  
**Objetivo:** Fluxo de ativação automatizado

### 🔗 Entregáveis

#### 12.1 Wizard de Setup
| ID | Step | Conteúdo | Status |
|----|------|----------|--------|
| WIZ-01 | Step 1 | Dados da empresa | 🔴 |
| WIZ-02 | Step 2 | Cadastro do 1º produto | 🔴 |
| WIZ-03 | Step 3 | Configuração da loja | 🔴 |
| WIZ-04 | Step 4 | Conectar WhatsApp | 🔴 |
| WIZ-05 | Step 5 | Personalizar tema | 🔴 |

#### 12.2 Checklist de Ativação
| ID | Item | Descrição | Status |
|----|------|-----------|--------|
| CHK-01 | Perfil completo | Progresso visual | 🔴 |
| CHK-02 | Primeiro produto | Checkbox + CTA | 🔴 |
| CHK-03 | Loja publicada | Status da publicação | 🔴 |
| CHK-04 | Primeira venda | Celebração visual | 🔴 |

#### 12.3 Automações
| ID | Trigger | Ação | Status |
|----|---------|------|--------|
| AUTO-01 | Cadastro completo | Email de boas-vindas | 🔴 |
| AUTO-02 | Produto cadastrado | Mensagem MEL | 🔴 |
| AUTO-03 | Loja publicada | Notificação founder | 🔴 |
| AUTO-04 | 7 dias sem ativação | Lembrete WhatsApp | 🔴 |

### ✅ Checklist de Aceitação
- [ ] Wizard navegável em 5 passos
- [ ] Progresso salvo entre sessões
- [ ] Checklist atualizando em tempo real
- [ ] Automações disparando corretamente
- [ ] 70% completam onboarding em 14 dias

---

## 📈 FASE 4: Growth & Escala — Expansão (Detalhado)

---

## 🏃 Sprint 13: Landing Page 🎨 (Frontend Only)

**Tipo:** 🎨 Frontend (F)  
**Duração:** 1 semana  
**Período:** Agosto/2026 (Semana 17)  
**Objetivo:** Site institucional para captação de leads

### 🎨 Telas a Desenvolver

#### 13.1 Página Principal
| ID | Seção | Elementos | Status |
|----|-------|-----------|--------|
| LP-01 | Hero | Headline, subhead, CTA principal | 🔴 |
| LP-02 | Proposta de valor | 3 diferenciais com ícones | 🔴 |
| LP-03 | Funcionalidades | Cards dos módulos | 🔴 |
| LP-04 | Depoimentos | Carrossel de clientes | 🔴 |
| LP-05 | Pricing | Tabela comparativa | 🔴 |
| LP-06 | FAQ | Accordion com dúvidas | 🔴 |
| LP-07 | CTA final | Último convite | 🔴 |
| LP-08 | Footer | Links, contato, redes | 🔴 |

#### 13.2 Formulários
| ID | Formulário | Campos | Status |
|----|------------|--------|--------|
| FORM-01 | Demonstração | Nome, email, telefone, empresa | 🔴 |
| FORM-02 | Newsletter | Email apenas | 🔴 |

### ✅ Checklist de Aceitação
- [ ] Landing page renderizando corretamente
- [ ] Formulários com validação visual
- [ ] Mobile-first responsivo
- [ ] CTA visível acima da dobra
- [ ] Performance >90 no Lighthouse

---

## 🏃 Sprint 14: Referral System 🎁 (Frontend + Backend)

**Tipo:** 🎁 (F+B)  
**Duração:** 2 semanas  
**Período:** Agosto/2026 (Semanas 18-19)  
**Objetivo:** Sistema viral "Indique e Ganhe 1 mês grátis"

### 🎨 Entregáveis Frontend

#### 14.1 UI de Indicações
| ID | Componente | Descrição | Status |
|----|------------|-----------|--------|
| REF-UI-01 | Dashboard | Estatísticas de indicações | 🔴 |
| REF-UI-02 | Link único | Copiar para área de transferência | 🔴 |
| REF-UI-03 | Share buttons | WhatsApp, email, redes | 🔴 |
| REF-UI-04 | Contador | "Você indicou X amigos" | 🔴 |
| REF-UI-05 | Histórico | Lista de indicações | 🔴 |
| REF-UI-06 | Badge | "Embaixador UNIQ" | 🔴 |

#### 14.2 Backend
| ID | Componente | SQL/Function | Status |
|----|------------|--------------|--------|
| REF-BE-01 | Tabela referrals | referrer_id, referred_email, status | 🔴 |
| REF-BE-02 | Edge Function | Gerar link único | 🔴 |
| REF-BE-03 | Trigger | Creditar bônus na conversão | 🔴 |
| REF-BE-04 | RLS | Segurança das indicações | 🔴 |

### ✅ Checklist de Aceitação
- [ ] Link único gerado por usuário
- [ ] Botão "Copiar link" funcional
- [ ] Share via WhatsApp com mensagem padrão
- [ ] Tracking de conversão funcionando
- [ ] Crédito aplicado automaticamente

---

## 🏃 Sprint 15: Analytics Dashboard 📊 (Frontend + Backend)

**Tipo:** 📊 (F+B)  
**Duração:** 2 semanas  
**Período:** Setembro/2026 (Semanas 20-21)  
**Objetivo:** Dashboard completo de métricas

### 🎨 Entregáveis

#### 15.1 UI de Analytics
| ID | Dashboard | Métricas | Status |
|----|-----------|----------|--------|
| ANA-01 | Vendas | Faturamento, ticket médio, produtos | 🔴 |
| ANA-02 | Clientes | Total, retenção, LTV, churn | 🔴 |
| ANA-03 | Marketing | Conversão, CAC, leads | 🔴 |
| ANA-04 | Loja | Visitas, carrinhos, conversão | 🔴 |

#### 15.2 Backend
| ID | Query/API | Descrição | Status |
|----|-----------|-----------|--------|
| ANA-BE-01 | getSalesMetrics | Agregações de vendas | 🔴 |
| ANA-BE-02 | getCustomerMetrics | Cohort analysis | 🔴 |
| ANA-BE-03 | getStoreMetrics | Analytics da loja | 🔴 |

### ✅ Checklist de Aceitação
- [ ] Gráficos renderizando dados reais
- [ ] Filtros por período funcionando
- [ ] Exportação CSV/PDF
- [ ] Dashboard carregando em <2s

---

## 🏃 Sprint 16: PWA & Mobile 🎨 (Frontend Only)

**Tipo:** 🎨 Frontend (F)  
**Duração:** 2 semanas  
**Período:** Setembro/2026 (Semanas 22-23)  
**Objetivo:** App mobile otimizado

### 🎨 Entregáveis

| ID | Feature | Descrição | Status |
|----|---------|-----------|--------|
| PWA-01 | Service Worker | Cache offline | 🔴 |
| PWA-02 | Manifest.json | Instalação como app | 🔴 |
| PWA-03 | Push notifications | Notificações nativas | 🔴 |
| PWA-04 | Mobile navigation | Bottom nav otimizado | 🔴 |
| PWA-05 | Touch gestures | Swipe, pull-to-refresh | 🔴 |

### ✅ Checklist de Aceitação
- [ ] Instalável como app (Add to Home Screen)
- [ ] Funciona offline (cache básico)
- [ ] Push notifications enviadas
- [ ] Performance mobile otimizada

---

## 🔗 Dependências entre Sprints (Frontend First)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    DEPENDÊNCIAS - Abordagem Frontend First 🎨                        │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                       │
│  🎨 FASE 1: UI/UX (Sprints 1-5)                                                     │
│  ┌────────────────────────────────────────────────────────────────────────────┐   │
│  │                                                                            │   │
│  │  🎨 Sprint 01: Design System  ───────┐                                      │   │
│  │        (Tokens, Componentes)         │                                      │   │
│  │                                    ▼                                      │   │
│  │  🎨 Sprint 02: Auth UI  ────────────┼───▶  TELAS DE LOGIN/CADASTRO         │   │
│  │        (Telas de auth)             │        (Mock data)                    │   │
│  │                                    │                                      │   │
│  │  🎨 Sprint 03: Dashboard UI  ──────┼───▶  DASHBOARD + NAVEGAÇÃO           │   │
│  │        (Layout, métricas)          │        (Mock data)                    │   │
│  │                                    │                                      │   │
│  │  🎨 Sprint 04: CRM UI  ────────────┼───▶  CRM COMPLETO (Visual)             │   │
│  │        (Kanban, forms)             │        (Mock data)                    │   │
│  │                                    │                                      │   │
│  │  🎨 Sprint 05: Storefront UI  ─────┘───▶  LOJA PÚBLICA (Visual)           │   │
│  │        (Tema, checkout)                                                     │   │
│  │                                                                             │   │
│  └────────────────────────────────────────────────────────────────────────────┘   │
│                                    │                                                  │
│                                    ▼                                                  │
│  ⚙️ FASE 2: Backend (Sprints 6-9)                                                     │
│  ┌────────────────────────────────────────────────────────────────────────────┐   │
│  │                                                                            │   │
│  │  ⚙️ Sprint 06: Auth DB  ───────┐                                           │   │
│  │        (Supabase Auth)         │                                           │   │
│  │                                ▼                                           │   │
│  │  ⚙️ Sprint 07: CRM Schema  ──────┼───▶  TABELAS: customers, opportunities   │   │
│  │        (Tabelas CRM)           │                                           │   │
│  │                                │                                           │   │
│  │  ⚙️ Sprint 08: Store Schema  ────┼───▶  TABELAS: products, orders            │   │
│  │        (Tabelas e-commerce)    │                                           │   │
│  │                                │                                           │   │
│  │  🔗 Sprint 09: Integration  ───┘───▶  HOOKS: useAuth, useCRM, useStore      │   │
│  │        (Conectar UI ao DB)                                                 │   │
│  │                                                                            │   │
│  └────────────────────────────────────────────────────────────────────────────┘   │
│                                    │                                                  │
│                                    ▼                                                  │
│  🤖 FASE 3: MEL & Automação (Sprints 10-12)                                         │
│  ┌────────────────────────────────────────────────────────────────────────────┐   │
│  │                                                                            │   │
│  │  🔗 Sprint 10: n8n  ─────────────┐                                         │   │
│  │        (Workflows)               │                                         │   │
│  │                                  ▼                                         │   │
│  │  🤖 Sprint 11: MEL Basic  ───────┼───▶  Edge Functions + WhatsApp          │   │
│  │        (3 fluxos essenciais)     │                                         │   │
│  │                                  │                                         │   │
│  │  🔗 Sprint 12: Onboarding  ──────┘───▶  Wizard + Checklist automatizado   │   │
│  │        (Fluxo ativação)                                                      │   │
│  │                                                                            │   │
│  └────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                       │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---
|----|----------------|------------|--------------|
| MEL-ADV-01 | Previsão de vendas (7 dias) | 🟡 Média | Alta |
| MEL-ADV-02 | Identificação de produtos campeões | 🟡 Média | Média |
| MEL-ADV-03 | Sugestão de reabastecimento | 🟡 Média | Média |
| MEL-ADV-04 | Análise de sazonalidade | 🟢 Baixa | Alta |
| MEL-ADV-05 | Comparação com período anterior | 🟡 Média | Média |

#### 9.2 Machine Learning Básico
| ID | Funcionalidade | Prioridade | Complexidade |
|----|----------------|------------|--------------|
| ML-01 | Predição de churn | 🟡 Média | Alta |
| ML-02 | Recomendação de produtos | 🟢 Baixa | Alta |
| ML-03 | Segmentação automática | 🟡 Média | Média |
| ML-04 | Otimização de horário de envio | 🟢 Baixa | Média |

#### 9.3 Dashboard MEL
| ID | Funcionalidade | Prioridade | Complexidade |
|----|----------------|------------|--------------|
| MEL-DASH-01 | Insights do dia | 🟡 Média | Média |
| MEL-DASH-02 | Recomendações de ação | 🟡 Média | Média |
| MEL-DASH-03 | Estatísticas de acerto | 🟢 Baixa | Média |
| MEL-DASH-04 | Feedback do usuário | 🟡 Média | Baixa |

### Entregáveis
- [ ] 5 novos fluxos proativos
- [ ] Previsão de vendas funcionando
- [ ] Recomendações personalizadas
- [ ] Dashboard de insights

### Checklist de Aceitação
- [ ] Previsões com >70% de acurácia
- [ ] 80% dos clientes respondem às mensagens
- [ ] Taxa de churn reduzida em 20%
- [ ] Upsell automático converte >5%

### Dependências
- ✅ Sprint 03: MEL Básica (infraestrutura)
- ✅ Sprint 10: Métricas (dados históricos para ML)

---

## 🏃 Sprint 10: Métricas

**Duração:** 2 semanas  
**Período:** Julho/Agosto/2026 (Semanas 19-20)  
**Objetivo:** Dashboard completo de analytics e relatórios

### Funcionalidades

#### 10.1 Dashboard de Vendas
| ID | Funcionalidade | Prioridade | Complexidade |
|----|----------------|------------|--------------|
| MET-01 | Faturamento (dia, mês, ano) | 🔴 Alta | Média |
| MET-02 | Ticket médio | 🔴 Alta | Média |
| MET-03 | Produtos mais vendidos | 🔴 Alta | Média |
| MET-04 | Comparativo períodos | 🟡 Média | Média |
| MET-05 | Metas vs Realizado | 🟡 Média | Média |

#### 10.2 Dashboard de Clientes
| ID | Funcionalidade | Prioridade | Complexidade |
|----|----------------|------------|--------------|
| CUST-01 | Total de clientes | 🔴 Alta | Baixa |
| CUST-02 | Clientes novos vs recorrentes | 🔴 Alta | Média |
| CUST-03 | Taxa de retenção | 🔴 Alta | Média |
| CUST-04 | Lifetime Value (LTV) | 🟡 Média | Média |
| CUST-05 | Churn rate | 🔴 Alta | Média |

#### 10.3 Relatórios
| ID | Funcionalidade | Prioridade | Complexidade |
|----|----------------|------------|--------------|
| REL-01 | Relatório mensal automático | 🔴 Alta | Média |
| REL-02 | Exportação (PDF, Excel) | 🟡 Média | Média |
| REL-03 | Relatório customizado | 🟢 Baixa | Alta |
| REL-04 | Agendamento de relatórios | 🟢 Baixa | Média |

### Entregáveis
- [ ] Dashboard de vendas completo
- [ ] Dashboard de clientes
- [ ] Relatórios mensais automáticos
- [ ] Exportação de dados

### Checklist de Aceitação
- [ ] Dashboard carrega em <2 segundos
- [ ] Dados atualizados em tempo real
- [ ] Relatório mensal enviado automaticamente
- [ ] 90% de uptime do sistema de métricas

### Dependências
- ✅ Sprint 01: Foundation (dashboard base)
- ✅ Sprint 02: Core CRM (dados de clientes)
- ✅ Sprint 04: Storefront (dados de vendas)

---

## 🔗 Dependências entre Sprints

```
                    ┌─────────────────────────────────────┐
                    │         SPRINT 01: Foundation       │
                    │    (Auth, Dashboard, Perfil)        │
                    └──────────────┬──────────────────────┘
                                   │
           ┌───────────────────────┼───────────────────────┐
           │                       │                       │
           ▼                       ▼                       ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ SPRINT 02: CRM   │  │ SPRINT 03: MEL   │  │ SPRINT 05: Onb.  │
│ (Core business)  │  │ (Diferencial)    │  │ (Ativação)       │
└────────┬─────────┘  └────────┬─────────┘  └────────┬─────────┘
         │                     │                     │
         └─────────────────────┼─────────────────────┘
                               │
                               ▼
                    ┌──────────────────┐
                    │ SPRINT 04: Store │
                    │ (Loja Virtual)   │
                    └────────┬─────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
         ▼                   ▼                   ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ SPRINT 06: Ref.  │  │ SPRINT 07: LP    │  │ SPRINT 08: Mkt   │
│ (Viralidade)     │  │ (Captação)       │  │ (Instagram)      │
└────────┬─────────┘  └────────┬─────────┘  └────────┬─────────┘
         │                     │                     │
         └─────────────────────┼─────────────────────┘
                               │
                               ▼
                    ┌──────────────────┐
                    │ SPRINT 09: MEL   │
                    │ (Avançada)       │
                    │ Precisa dados    │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ SPRINT 10: Metr. │
                    │ (Analytics)      │
                    └──────────────────┘
```

---

## 📊 Como Usar este Roadmap (Frontend First)

### Fluxo de Trabalho por Fase

```
🎨 FASE 1: Frontend Only (Sprints 1-5)
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  Chat 1: @vibe-researcher                                      │
│  └── Gera PRD com foco em UI/UX, componentes, mock data      │
│                                                                │
│  Chat 2: @vibe-planner                                          │
│  └── Gera SPEC com:                                           │
│      - Componentes React                                       │
│      - Props e tipagens TypeScript                             │
│      - Estados locais (mock data)                               │
│      - Design system tokens                                    │
│                                                                │
│  Chat 3: @vibe-implementer ou @frontend-specialist            │
│  └── Implementa:                                              │
│      - Componentes visuais                                    │
│      - Telas com dados fake                                   │
│      - Estados de loading/error (visuais)                     │
│      - Navegação entre telas                                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
                              │
                              ▼
⚙️ FASE 2: Backend (Sprints 6-9)
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  Chat 1: @vibe-researcher                                      │
│  └── Gera PRD com schema baseado nas UIs já criadas           │
│                                                                │
│  Chat 2: @database-architect                                  │
│  └── Gera SPEC com:                                           │
│      - Schema SQL (baseado na estrutura das UIs)                │
│      - Migrations                                              │
│      - Edge Functions                                          │
│      - RLS Policies                                            │
│                                                                │
│  Chat 3: @backend-specialist ou @database-architect           │
│  └── Implementa:                                              │
│      - Cria tabelas no Supabase                               │
│      - Aplica migrations                                       │
│      - Configura RLS                                           │
│      - Deploy Edge Functions                                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
                              │
                              ▼
🔗 FASE 3: Integration (Sprints 10-12)
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  Chat 1: @vibe-researcher                                      │
│  └── Gera PRD de integração (hooks, APIs)                      │
│                                                                │
│  Chat 2: @vibe-planner                                         │
│  └── Gera SPEC com:                                           │
│      - React hooks (useAuth, useCRM, etc)                      │
│      - API integration layer                                   │
│      - Error handling                                          │
│                                                                │
│  Chat 3: @vibe-implementer                                     │
│  └── Implementa:                                              │
│      - Substitui mock data por chamadas reais                   │
│      - Loading states com dados reais                           │
│      - Error handling com retry                                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### 🎯 Prioridades por Tipo de Sprint

| Tipo | Prioridade de Design | Prioridade de UX | Prioridade de Teste |
|------|---------------------|------------------|---------------------|
| 🎨 **Frontend** | 90% | 80% | 60% |
| ⚙️ **Backend** | 20% | 40% | 80% |
| 🔗 **Integration** | 50% | 60% | 90% |
| 🤖 **MEL** | 40% | 70% | 85% |

---

### 📝 Templates de PRD por Fase

#### Template PRD - Frontend (🎨)
```markdown
# PRD - Sprint XX: [Nome] 🎨

## Overview
- **Tipo**: Frontend Only
- **Objetivo**: Criar interfaces visuais de [funcionalidade]
- **Sprint ROADMAP**: [Link para seção do ROADMAP]

## Telas/Componentes
1. [Lista dos componentes do ROADMAP]

## Mock Data
```typescript
// Exemplo de dados fake
const mockData = { ... }
```

## Interações
- Estados de hover, focus, active
- Loading states (spinners, skeletons)
- Error states (mensagens visuais)
- Transições e animações

## Design System
- Cores: [referência aos tokens]
- Tipografia: [tamanhos, pesos]
- Espaçamento: [grid, padding]

## Critérios de Aceitação
- [ ] Todos os componentes renderizam
- [ ] Mock data funciona
- [ ] Responsivo em mobile/desktop
- [ ] Estados de loading/error visuais
```

#### Template PRD - Backend (⚙️)
```markdown
# PRD - Sprint XX: [Nome] ⚙️

## Overview
- **Tipo**: Backend Only  
- **Objetivo**: Schema e APIs para [funcionalidade]
- **UI Reference**: [Link para PRD da UI já criada]

## Schema de Dados
### Tabelas
[Baseado na estrutura das UIs já criadas]

### Relacionamentos
[FKs necessárias]

## Edge Functions
[Lista de functions]

## RLS Policies
[Políticas de segurança]

## Critérios de Aceitação
- [ ] Tabelas criadas no Supabase
- [ ] Migrations aplicadas
- [ ] RLS configurado
- [ ] Seed data para testes
```

---

## 📁 Estrutura de Arquivos de Tracking

```
tracking/
├── plans/                          # PRDs gerados
│   ├── PRD_Sprint_01_Design_System_🎨.md
│   ├── PRD_Sprint_02_Auth_UI_🎨.md
│   ├── PRD_Sprint_03_Dashboard_UI_🎨.md
│   ├── PRD_Sprint_04_CRM_UI_🎨.md
│   ├── PRD_Sprint_05_Storefront_UI_🎨.md
│   ├── PRD_Sprint_06_Auth_DB_⚙️.md
│   ├── PRD_Sprint_07_CRM_Schema_⚙️.md
│   ├── PRD_Sprint_08_Store_Schema_⚙️.md
│   ├── PRD_Sprint_09_Integration_🔗.md
│   └── ...
├── specs/                          # SPECs gerados
│   ├── SPEC_Sprint_01_Design_System_🎨.md
│   ├── SPEC_Sprint_02_Auth_UI_🎨.md
│   └── ...
├── reviews/                        # Code reviews
│   └── Review_Sprint_XX.md
└── decisions/                     # Decision Records
    └── ADR_XXX_[decisão].md
```

---

## 🎯 Checkpoints de Decisão

### 🎨 Checkpoint FASE 1 (Fim Sprint 05)
**Data:** Abril/2026 (Semana 7)  
**Pergunta:** "Todas as interfaces visuais estão prontas?"

**Critérios GO:**
- ✅ Todas as 5 sprints de UI completas
- ✅ Mockups navegáveis com dados fake
- ✅ Stakeholders aprovaram as telas
- ✅ Design system documentado
- ✅ Mobile responsiveness validado

**Se NÃO-GO:**
- Refinar telas problemáticas
- Ajustar UX antes de ir para backend

---

### ⚙️ Checkpoint FASE 2 (Fim Sprint 09)
**Data:** Junho/2026 (Semana 12)  
**Pergunta:** "Backend está integrado com as UIs?"

**Critérios GO:**
- ✅ Schema reflete estrutura das UIs
- ✅ CRUDs funcionando nas telas
- ✅ RLS protegendo dados
- ✅ 80% das funcionalidades integradas

**Se NÃO-GO:**
- Ajustar schema para refletir necessidades reais
- Corrigir integrações quebradas

---

### 🤖 Checkpoint FASE 3 (Fim Sprint 12)
**Data:** Julho/2026 (Semana 16)  
**Pergunta:** "MEL está funcionando?"

**Critérios GO:**
- ✅ 3 fluxos essenciais enviando mensagens
- ✅ Onboarding automatizado
- ✅ Clientes recebendo relatórios diários
- ✅ Taxa de engajamento >60%

**Se NÃO-GO:**
- Revisar fluxos MEL
- Melhorar copy das mensagens

---

## 📊 Métricas de Execução do Roadmap

| Métrica | Target | Como Medir |
|---------|--------|------------|
| Sprints Frontend completadas | 100% (5/5) | Status no ROADMAP |
| Sprints Backend completadas | 100% (4/4) | Status no ROADMAP |
| Mock data → Real data | 100% | Todas as UIs integradas |
| PRDs entregues | 100% | Arquivos em tracking/plans |
| SPECs entregues | 100% | Arquivos em tracking/specs |
| Checkpoints GO | 3/3 | Decisões documentadas |

---

## 🔥 Prioridades de Implementação

### O que fazer PRIMEIRO (FASE 1)
1. **Sprint 01: Design System** — Base para tudo
2. **Sprint 02: Auth UI** — Entrada do usuário
3. **Sprint 03: Dashboard UI** — Página principal
4. **Sprint 04: CRM UI** — Core business
5. **Sprint 05: Storefront UI** — Loja pública

### Só depois (FASE 2+)
- ⚙️ Schema de banco de dados
- ⚙️ Edge Functions
- 🤖 MEL integrada
- 🎁 Sistema de indicações

---

**🧭 UNIQ: O Norte para Empreendedores — Comece Por Aqui**

*Este ROADMAP serve como base para todos os PRDs e SPECs na metodologia Vibe Coding com abordagem Frontend First. Revisar mensalmente.*

---

**Documentos Relacionados:**
- [CONTEXTO_PROJETO.md](./CONTEXTO_PROJETO.md) — Contexto estratégico completo
- [Metodologia_vibe-coding.md](./Metodologia_vibe-coding.md) — Como executar SDD
- [docs/estrategia/](./estrategia/) — Frameworks de negócio
