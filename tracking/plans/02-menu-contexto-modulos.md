# Plano de Menu de Contexto por Módulo - UNIQ Empresas

Este documento define a estrutura de menus de contexto para cada módulo do sistema UNIQ Empresas.

---

## 1. Visão Geral

O objetivo é adicionar menus de contexto em cada página de módulo, oferecendo atalhos rápidos para as sub-funcionalidades que existem mas não são acessíveis pelo menu lateral principal.

---

## 2. Menu de Contexto por Módulo

### 2.1 Dashboard (`/dashboard`)
**Posição:** Cards de atalho no topo da página
**Itens:**
- 📊 Ver métricas de vendas
- 💰 Acessar financeiro
- 👥 Ver novos clientes
- 📅 Próximos agendamentos

### 2.2 Serviços (`/servicos`)
**Posição:** Header da página (ação principal) + Cards de serviço
**Itens:**
- ➕ Novo Serviço (header)
- 📝 Editar Serviço (card)
- 🗑️ Excluir Serviço (card)
- 👁️ Ver Detalhes (card)

### 2.3 CRM (`/crm/dashboard`)
**Posição:** Sidebar lateral direita ou header
**Itens:**
- 👥 Lista de Clientes → `/crm/clientes`
- 🔥 Pipeline de Vendas → `/crm/pipeline`
- 📊 Ver Dashboard CRM
- ➕ Novo Cliente (botão flutuante)

### 2.4 Vendas (`/vendas/pdv`)
**Posição:** Header + Abas
**Itens:**
- 🛒 Abrir PDV
- 📦 Abrir Caixa → `/vendas/pdv/abertura`
- 📦 Fechar Caixa → `/vendas/pdv/fechamento`
- 📋 Lista de Pedidos → `/vendas/pedidos`
- 📈 Relatórios → `/vendas/relatorios`

### 2.5 Estoque (`/estoque/dashboard`)
**Posição:** Header + Sidebar
**Itens:**
- 📦 Lista de Produtos → `/estoque/produtos`
- 🔄 Movimentações → `/estoque/movimentacoes`
- ➕ Novo Produto
- 📊 Ver Dashboard Estoque

### 2.6 Fornecedores (`/fornecedores`)
**Posição:** Header + Cards
**Itens:**
- ➕ Novo Fornecedor → `/fornecedores/novo`
- 📝 Editar Fornecedor (card)
- 📞 Ver Contatos (card)
- 📦 Histórico de Compras (card)

### 2.7 Agenda (`/agenda`)
**Posição:** Header + Toolbar
**Itens:**
- ➕ Novo Agendamento → `/agenda/novo`
- 📅 Lista de Compromissos → `/agenda/compromissos`
- 👥 Ver Clientes
- 📅 Ver Agenda do Dia

### 2.8 Financeiro (`/financeiro/dashboard`)
**Posição:** Header + Cards de atalho
**Itens:**
- 💰 Fluxo de Caixa → `/financeiro/fluxo-de-caixa`
- 📥 Contas a Pagar → `/financeiro/contas-pagar`
- 📤 Contas a Receber → `/financeiro/contas-receber`
- 📊 DRE → `/financeiro/dre`

### 2.9 MEL IA (`/mel`)
**Posição:** Header
**Itens:**
- ⚙️ Configurações → `/mel/configuracoes`
- 📊 Ver Insights
- 💬 Configurar Mensagens

### 2.10 Métricas (`/metricas/dashboard`)
**Posição:** Header + Cards de navegação
**Itens:**
- 📈 Vendas → `/metricas/vendas`
- 💰 Financeiro → `/metricas/financeiro`
- 👥 Clientes → `/metricas/clientes`
- 📅 Agendamentos → `/metricas/agendamentos`
- 📦 Produtos → `/metricas/produtos`

### 2.11 Configurações (`/configuracoes/empresa`)
**Posição:** Header
**Itens:**
- 🏢 Dados da Empresa
- 👤 Minha Conta → `/configuracoes/conta`
- 👥 Colaboradores → `/configuracoes/colaboradores`
- ➕ Novo Colaborador → `/configuracoes/colaboradores/novo`

---

## 3. Priorização de Implementação

### Fase 1 - Módulos Críticos (Mais usadas)
1. **Financeiro** - 4 sub-rotas críticas (fluxo, pagar, receber, DRE)
2. **Vendas** - 5 sub-rotas (pdv, abertura, fechamento, pedidos, relatórios)
3. **CRM** - 3 sub-rotas (dashboard, clientes, pipeline)

### Fase 2 - Módulos de Gestão
4. **Estoque** - 3 sub-rotas (produtos, movimentações, detalhe)
5. **Métricas** - 5 sub-rotas (todas)
6. **Agenda** - 3 sub-rotas (novo, compromissos, detalhe)

### Fase 3 - Módulos de Suporte
7. **Serviços** - 2 sub-rotas (novo, editar)
8. **Fornecedores** - 3 sub-rotas (novo, detalhe, editar)
9. **Configurações** - 2 sub-rotas (conta, novo colaborador)

---

## 4. Padrão de Implementação

Cada menu de contexto deve seguir o padrão:
1. **Sempre visível no header** da página do módulo
2. **Ícones lucide-react** para reconhecimento rápido
3. **Links para rotas existentes** (não criar novas páginas)
4. **Botões de ação primária** destacados em verde UNIQ
5. **Responsivo** - funcionar em mobile e desktop

---

## 5. Arquitetura Técnica

**Abordagem:** Criar componente `<ContextMenu />` reutilizável ou usar `<Tabs />` shadcn para navegação entre sub-páginas dentro do mesmo módulo.

**Localização:** Cada módulo terá seu próprio componente de menu de contexto em seu arquivo de página (ex: `FinanceiroDashboardPage.tsx`).

---

*Documento gerado em: 2026-04-15*