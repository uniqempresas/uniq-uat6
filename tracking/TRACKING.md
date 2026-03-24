# 🎯 Tracking de Desenvolvimento - UNIQ Empresas

**Última atualização:** 18/03/2026  
**Sprint Atual:** SPRINT_01 - Design System 🎨  
**Status:** 🟢 PRONTA PARA INICIAR  
**Abordagem:** 🎨 Frontend First (Interface primeiro, Backend depois)

> 📁 **Documentação:**
> - [ROADMAP Completo](../docs/ROADMAP.md) - Todas as 37 sprints
> - [CONTEXTO DO PROJETO](../docs/CONTEXTO_PROJETO.md) - Visão completa
> - [Metodologia Vibe Coding](../docs/Metodologia_vibe-coding.md) - SDD

---

## 🚀 Plano Macro: "UNIQ Empresas - O Norte para Empreendedores"

### Estratégia
Plataforma SaaS modular que combina **Consultoria de Growth** + **Ferramentas de Gestão** + **Métricas**. MVP com abordagem Frontend First.

### Pilares do Produto
1. 🤖 **Consultor Ativo** (MEL - Mentora Empresarial Lucy)
2. 🚫 **Anti-ERP** (Sem burocracia fiscal no MVP)
3. 📈 **Viralidade** (Sistema de indicações)

### Stack Tecnológica
- ✅ **Frontend:** Next.js 14 + React 18 + TypeScript
- ✅ **Estilização:** Tailwind CSS 3.4 + shadcn/ui
- ✅ **Banco de Dados:** Supabase (PostgreSQL)
- ✅ **Deploy:** Vercel
- ✅ **Automação:** n8n
- 🔲 **Email:** Resend (SMTP configurado)

### Infraestrutura Já Configurada
- ✅ Conta GitHub
- ✅ Conta Vercel
- ✅ Projeto Supabase: `uniq_uat_05`
- ✅ MCP do Supabase conectado
- ✅ SMTP Resend configurado
- ✅ Dashboard inicial implementado

---

## 🏃 SPRINT_01: Design System 🎨 (Frontend Only)

**Tipo:** 🎨 Frontend (F)  
**Duração:** 1 semana  
**Período:** Março/2026 (Semana 1)  
**Responsável:** @vibe-implementer / @frontend-specialist  
**Objetivo:** Base visual sólida — tokens, componentes e layouts

### 🎯 Objetivos Principais
1. [ ] Consolidar Design Tokens (cores, tipografia, espaçamento)
2. [ ] Finalizar componentes base do Design System
3. [ ] Documentar componentes (Storybook ou MD)
4. [ ] Criar layout base responsivo (App Shell)
5. [ ] Implementar estados de loading e erro visuais

---

### 🎨 Entregáveis de Frontend

#### 1.1 Design Tokens
| ID | Componente | Descrição | Status | Notas |
|----|------------|-----------|--------|-------|
| TOKEN-01 | Cores UNIQ | Paleta primária (#13b9a5), secundária, semântica | 🟡 | Tailwind config existente, revisar |
| TOKEN-02 | Tipografia | Fontes Inter, tamanhos, pesos | ✅ | Configurado no globals.css |
| TOKEN-03 | Espaçamento | Grid 4px/8px, padding, margin scale | ✅ | Tailwind padrão + custom |
| TOKEN-04 | Breakpoints | Mobile (sm), tablet (md), desktop (lg/xl) | ✅ | Tailwind padrão |
| TOKEN-05 | Sombras & Borders | Efeitos visuais consistentes | 🟡 | Revisar tokens customizados |

#### 1.2 Componentes Base
| ID | Componente | Descrição | Props Esperadas | Status | Arquivo |
|----|------------|-----------|-----------------|--------|---------|
| COMP-01 | Button | Botões (primary, secondary, ghost, outline) | variant, size, disabled, loading | ✅ | `components/ui/button.tsx` |
| COMP-02 | Input | Campos de texto | type, placeholder, error, icon | 🟡 | Adicionar variantes |
| COMP-03 | Card | Container de conteúdo | title, children, actions, variant | ✅ | `components/ui/card.tsx` |
| COMP-04 | Modal | Dialogs e overlays | isOpen, onClose, title, size | 🔴 | Criar Dialog |
| COMP-05 | Table | Tabelas de dados | columns, data, actions, pagination | 🔴 | Criar Table |
| COMP-06 | Form | Wrapper de formulários | onSubmit, validation, layout | 🟡 | Usar react-hook-form |
| COMP-07 | Loading | Estados de carregamento | type (spinner/skeleton), size | 🟡 | Criar Skeleton |
| COMP-08 | Toast | Notificações | type, message, duration, position | 🔴 | Criar Toaster |
| COMP-09 | Select | Dropdown de seleção | options, value, onChange, placeholder | 🔴 | `components/ui/select.tsx` |
| COMP-10 | Checkbox | Caixas de seleção | checked, onChange, label | ✅ | `components/ui/checkbox.tsx` |
| COMP-11 | Badge | Tags e status | variant, size, children | ✅ | `components/ui/badge.tsx` |
| COMP-12 | Avatar | Fotos de perfil | src, fallback, size | ✅ | `components/ui/avatar.tsx` |

#### 1.3 Layout Base
| ID | Layout | Descrição | Status | Arquivo |
|----|--------|-----------|--------|---------|
| LAYOUT-01 | App Shell | Estrutura principal (header, sidebar, content) | ✅ | `app/layout.tsx` |
| LAYOUT-02 | Sidebar Navigation | Menu lateral com navegação | ✅ | `components/sidebar.tsx` |
| LAYOUT-03 | Header | Cabeçalho com logo, usuário, notificações | ✅ | `components/header.tsx` |
| LAYOUT-04 | Mobile Layout | Versão mobile (hamburger menu) | 🟡 | Revisar responsividade |

---

### 📋 Componentes Específicos UNIQ

#### Métricas e Dashboard
| ID | Componente | Descrição | Status | Arquivo |
|----|------------|-----------|--------|---------|
| UNIQ-01 | MetricCard | Cards de métricas com trend | ✅ | `components/metric-card.tsx` |
| UNIQ-02 | SalesTable | Tabela de vendas recentes | 🔴 | Criar |
| UNIQ-03 | TopProducts | Lista de produtos com barras | 🔴 | Criar |
| UNIQ-04 | AgendaWidget | Widget de agenda do dia | 🔴 | Criar |
| UNIQ-05 | MELWidget | Widget do consultor IA | 🔴 | Criar |

#### Formulários
| ID | Componente | Descrição | Status |
|----|------------|-----------|--------|
| FORM-01 | FormInput | Input com label e error | 🔴 |
| FORM-02 | FormSelect | Select com label | 🔴 |
| FORM-03 | FormTextarea | Textarea com label | 🔴 |
| FORM-04 | FormDatePicker | Seletor de data | 🔴 |
| FORM-05 | FormCurrency | Input monetário | 🔴 |

---

### 📝 Checklist de Implementação

#### Semana 1 - Dias 1-2: Análise e Consolidação
- [ ] Analisar componentes existentes no `components/ui/`
- [ ] Revisar `tailwind.config.ts` e `globals.css`
- [ ] Identificar gaps entre o existente e o necessário
- [ ] Criar/adicionar componentes faltantes (Modal, Table, Toast)

#### Semana 1 - Dias 3-4: Novos Componentes
- [ ] Criar componente `Dialog` (Modal)
- [ ] Criar componente `Table` (tabela de dados)
- [ ] Criar componente `Toast` (notificações)
- [ ] Criar componente `Skeleton` (loading states)
- [ ] Criar componente `Select` completo
- [ ] Criar componente `Textarea`

#### Semana 1 - Dias 5-6: Layout e Responsividade
- [ ] Revisar responsividade mobile do Sidebar
- [ ] Implementar hamburger menu para mobile
- [ ] Testar em 3 breakpoints (mobile, tablet, desktop)
- [ ] Ajustar espaçamentos e tipografia

#### Semana 1 - Dia 7: Documentação e Testes
- [ ] Documentar todos os componentes
- [ ] Criar página de showcase/storybook simples
- [ ] Testar todos os estados (hover, focus, disabled, loading)
- [ ] Revisar acessibilidade (ARIA labels, keyboard)

---

### ✅ Checklist de Aceitação (Definition of Done)
- [ ] Todos os componentes da tabela renderizam corretamente
- [ ] Estados de loading e erro visuais implementados
- [ ] Layout responsivo testado em 3 breakpoints
- [ ] Paleta de cores UNIQ aplicada consistentemente
- [ ] Documentação dos componentes criada
- [ ] Todos os componentes com dados mock/fake funcionando
- [ ] Interatividade: Estados de hover, focus, disabled implementados
- [ ] Mobile-first em todos os componentes
- [ ] Acessibilidade: ARIA labels, keyboard navigation

---

### 📦 Mock Data para Testes

```typescript
// Dados fake para teste visual dos componentes
export const mockUser = {
  name: "João Silva",
  email: "joao@otica.com",
  company: "Ótica Visão",
  avatar: null
};

export const mockStats = {
  sales: { value: 12500, change: 12.5, trend: 'up' },
  customers: { value: 45, change: 5, trend: 'up' },
  orders: { value: 23, change: -2, trend: 'down' },
  inventory: { value: 156, change: 0, trend: 'neutral' }
};

export const mockModules = [
  { id: 'crm', name: 'CRM', icon: 'Users', path: '/crm', color: 'blue' },
  { id: 'finance', name: 'Financeiro', icon: 'DollarSign', path: '/financeiro', color: 'green' },
  { id: 'store', name: 'Loja Virtual', icon: 'Store', path: '/loja', color: 'purple' },
  { id: 'stock', name: 'Estoque', icon: 'Package', path: '/estoque', color: 'orange' },
  { id: 'pdv', name: 'Vendas PDV', icon: 'ShoppingCart', path: '/pdv', color: 'pink' },
  { id: 'services', name: 'Serviços', icon: 'Scissors', path: '/servicos', color: 'cyan' },
];
```

---

## 📊 Status dos Componentes Existentes

### ✅ Já Implementados (do projeto base)
| Componente | Localização | Status |
|------------|-------------|--------|
| Button | `components/ui/button.tsx` | ✅ Funcional |
| Card | `components/ui/card.tsx` | ✅ Funcional |
| Badge | `components/ui/badge.tsx` | ✅ Funcional |
| Avatar | `components/ui/avatar.tsx` | ✅ Funcional |
| DropdownMenu | `components/ui/dropdown-menu.tsx` | ✅ Funcional |
| Sidebar | `components/sidebar.tsx` | ✅ Funcional |
| Header | `components/header.tsx` | ✅ Funcional |
| MetricCard | `components/metric-card.tsx` | ✅ Funcional |

### 🔴 Necessários (não existem)
| Componente | Prioridade | Complexidade |
|------------|------------|--------------|
| Dialog/Modal | Alta | Média |
| Table | Alta | Média |
| Toast/Notification | Alta | Baixa |
| Skeleton | Alta | Baixa |
| Select | Média | Média |
| Textarea | Média | Baixa |
| DatePicker | Média | Alta |
| Input com ícone | Média | Baixa |

---

## 🎯 Próximas Sprints

| Sprint | Nome | Tipo | Foco | Status |
|--------|------|------|------|--------|
| **SPRINT_01** | Design System 🎨 | Frontend | Componentes base | 🟢 **ATUAL** |
| **SPRINT_02** | Auth UI 🎨 | Frontend | Telas de login/cadastro | ⚪ Próxima |
| **SPRINT_03** | Dashboard UI 🎨 | Frontend | Dashboard principal | ⚪ Planejada |
| **SPRINT_04** | CRM UI 🎨 | Frontend | Gestão de clientes | ⚪ Planejada |
| **SPRINT_05** | Storefront UI 🎨 | Frontend | Loja virtual | ⚪ Planejada |

---

## 🛠️ Comandos Úteis

```bash
# Executar projeto em desenvolvimento
npm run dev

# Build de produção
npm run build

# Adicionar componente shadcn/ui
npx shadcn add [componente]

# Verificar lint
npm run lint
```

---

## 🔗 Links Importantes

- **Projeto Supabase:** https://jvcesjrhzqzlmbzfrwxw.supabase.co
- **Repositório GitHub:** (configurar)
- **Deploy Vercel:** (configurar)
- **Documentação:** `/docs/`
- **Roadmap Completo:** `/docs/ROADMAP.md`

---

## 📝 Notas da Sprint

### Dia 1 - 18/03/2026
- 🚀 Sprint oficialmente iniciada
- ✅ MCP Supabase configurado e funcionando
- ✅ Projeto Supabase `uniq_uat_05` acessível
- 📝 Próximo passo: Análise detalhada dos componentes existentes

---

**Este documento serve como controle diário da SPRINT_01 do UNIQ Empresas.**

> **Lembrete:** Seguimos a metodologia **Vibe Coding (SDD)** - Specification-Driven Development. Cada sprint segue: Research → Spec → Implement.
