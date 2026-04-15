# PRD - Menu de Contexto por Módulo

## 1. Visão do Produto

Adicionar menus de contexto em cada página de módulo do sistema UNIQ Empresas, oferecendo atalhos rápidos para sub-funcionalidades que existem mas não são acessíveis pelo menu lateral principal.

## 2. Problema

Atualmente, o sistema UNIQ Empresas possui ~50 rotas, mas apenas ~15 são acessíveis pelo menu lateral. Muitos módulos têm sub-páginas que só podem ser acessadas digitando a URL diretamente, o que prejudica a experiência do usuário.

## 3. Objetivo

Criar menus de contexto em cada página de módulo para:
- Facilitar navegação entre sub-funcionalidades
- Reduzir necessidade de digitar URLs manualmente
- Melhorar UX do sistema

## 4. Escopo

### Módulos Afetados
1. **Financeiro** - Fluxo de Caixa, Contas Pagar, Contas Receber, DRE
2. **Vendas** - PDV, Abertura/Fechamento Caixa, Pedidos, Relatórios
3. **CRM** - Clientes, Pipeline
4. **Estoque** - Produtos, Movimentações
5. **Métricas** - Vendas, Financeiro, Clientes, Agendamentos, Produtos
6. **Agenda** - Novo Agendamento, Compromissos
7. **Serviços** - Novo Serviço, Editar Serviço
8. **Fornecedores** - Novo, Detalhe, Editar
9. **Configurações** - Conta, Novo Colaborador

### Fora do Escopo
- Criar novas páginas (apenas linkar as existentes)
- Modificar layout principal do menu lateral
- Criar funcionalidades nuevas

## 5. Requisitos Funcionais

### RF01 - Menu de Contexto no Financeiro
- Adicionar atalhos no header de `/financeiro/dashboard`
- Links: Fluxo de Caixa, Contas Pagar, Contas Receber, DRE

### RF02 - Menu de Contexto no Vendas
- Adicionar tabs/atalhos no header de `/vendas/pdv`
- Links: PDV, Abertura Caixa, Fechamento Caixa, Pedidos, Relatórios

### RF03 - Menu de Contexto no CRM
- Adicionar sidebar ou tabs no `/crm/dashboard`
- Links: Dashboard, Clientes, Pipeline

### RF04 - Menu de Contexto no Estoque
- Adicionar atalhos no header de `/estoque/dashboard`
- Links: Dashboard, Produtos, Movimentações

### RF05 - Menu de Contexto no Métricas
- Adicionar tabs/cards no header de `/metricas/dashboard`
- Links: Dashboard, Vendas, Financeiro, Clientes, Agendamentos, Produtos

### RF06 - Menu de Contexto na Agenda
- Adicionar atalhos no header de `/agenda`
- Links: Agenda, Novo Agendamento, Compromissos

### RF07 - Menu de Contexto em Serviços
- Adicionar botão "Novo Serviço" no header de `/servicos`
- Adicionar ações nos cards (Editar, Excluir)

### RF08 - Menu de Contexto em Fornecedores
- Adicionar botão "Novo Fornecedor" no header
- Adicionar ações nos cards (Editar, Ver Detalhe)

### RF09 - Menu de Contexto em Configurações
- Adicionar links no header de `/configuracoes/empresa`
- Links: Empresa, Conta, Colaboradores, Novo Colaborador

## 6. Requisitos Não Funcionais

- **RNF01** - Usar componentes shadcn existentes (Tabs, Button, Card)
- **RNF02** - Manter padrão visual UNIQ (cores, fontes)
- **RNF03** - Responsivo - funcionar em mobile e desktop
- **RNF04** - Não afetar performance da página

## 7. Critérios de Aceitação

- [ ] Cada módulo principal tem menu de contexto visível
- [ ] Todos os links apontam para rotas existentes
- [ ] Design consistente em todos os módulos
- [ ] Funciona em mobile e desktop
- [ ] Não quebra navegação existente

---

*PRD gerado em: 2026-04-15*
*Projeto: UNIQ Empresas - Context Menu*
*Versão: 1.0*