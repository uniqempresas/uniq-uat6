# Fases de Implementação - Menu de Contexto por Módulo

Este documento organiza a implementação das 9 SPECs em 3 fases, seguindo a priorização definida no plano.

---

## Visão Geral

| Fase | Módulos | Qtd SPECs | Status |
|------|---------|-----------|--------|
| **Fase 1** | Financeiro, Vendas, CRM | 3 | ⏳ Pendente |
| **Fase 2** | Estoque, Métricas, Agenda | 3 | ⏳ Pendente |
| **Fase 3** | Serviços, Fornecedores, Configurações | 3 | ⏳ Pendente |

---

## Fase 1 - Módulos Críticos

**Prioridade:** 🔴 ALTA
**Justificativa:** Estes são os módulos mais usados no dia a dia do empreendedor.

### SPEC 01 - Menu Financeiro
- **Arquivo:** `tracking/specs/01-menu-financeiro-spec.md`
- **Rotas:** `/financeiro/dashboard`, `/financeiro/fluxo-de-caixa`, `/financeiro/contas-pagar`, `/financeiro/contas-receber`, `/financeiro/dre`
- **Arquivo a modificar:** `src/app/components/financeiro/FinanceiroDashboardPage.tsx`
- **Responsável:** @vibe-implementer

### SPEC 02 - Menu CRM
- **Arquivo:** `tracking/specs/02-menu-crm-spec.md`
- **Rotas:** `/crm/dashboard`, `/crm/clientes`, `/crm/pipeline`
- **Arquivo a modificar:** `src/app/components/crm/CRMDashboardPage.tsx`
- **Responsável:** @vibe-implementer

### SPEC 03 - Menu Vendas
- **Arquivo:** `tracking/specs/03-menu-vendas-spec.md`
- **Rotas:** `/vendas/pdv`, `/vendas/pdv/abertura`, `/vendas/pdv/fechamento`, `/vendas/pedidos`, `/vendas/relatorios`
- **Arquivo a modificar:** `src/app/components/pdv/PDVPage.tsx`
- **Responsável:** @vibe-implementer

---

## Fase 2 - Módulos de Gestão

**Prioridade:** 🟡 MÉDIA
**Justificativa:** Módulos importantes para gestão operacional.

### SPEC 04 - Menu Estoque
- **Arquivo:** `tracking/specs/04-menu-estoque-spec.md`
- **Rotas:** `/estoque/dashboard`, `/estoque/produtos`, `/estoque/movimentacoes`
- **Arquivo a modificar:** `src/app/components/estoque/EstoqueDashboardPage.tsx`
- **Responsável:** @vibe-implementer

### SPEC 05 - Menu Métricas
- **Arquivo:** `tracking/specs/05-menu-metricas-spec.md`
- **Rotas:** `/metricas/dashboard`, `/metricas/vendas`, `/metricas/financeiro`, `/metricas/clientes`, `/metricas/agendamentos`, `/metricas/produtos`
- **Arquivo a modificar:** `src/app/components/metricas/MetricasDashboardPage.tsx`
- **Responsável:** @vibe-implementer

### SPEC 06 - Menu Agenda
- **Arquivo:** `tracking/specs/06-menu-agenda-spec.md`
- **Rotas:** `/agenda`, `/agenda/novo`, `/agenda/compromissos`
- **Arquivo a modificar:** `src/app/components/agenda/AgendaPage.tsx`
- **Responsável:** @vibe-implementer

---

## Fase 3 - Módulos de Suporte

**Prioridade:** 🟢 BAIXA
**Justificativa:** Módulos de suporte administrativo.

### SPEC 07 - Menu Serviços
- **Arquivo:** `tracking/specs/07-menu-servicos-spec.md`
- **Rotas:** `/servicos`, `/servicos/novo`
- **Arquivo a modificar:** `src/app/components/servicos/ServicosPage.tsx`
- **Responsável:** @vibe-implementer

### SPEC 08 - Menu Fornecedores
- **Arquivo:** `tracking/specs/08-menu-fornecedores-spec.md`
- **Rotas:** `/fornecedores`, `/fornecedores/novo`
- **Arquivo a modificar:** `src/app/components/fornecedores/FornecedoresPage.tsx`
- **Responsável:** @vibe-implementer

### SPEC 09 - Menu Configurações
- **Arquivo:** `tracking/specs/09-menu-configuracoes-spec.md`
- **Rotas:** `/configuracoes/empresa`, `/configuracoes/conta`, `/configuracoes/colaboradores`, `/configuracoes/colaboradores/novo`
- **Arquivo a modificar:** `src/app/components/configuracoes/EmpresaPage.tsx` (+ novo componente)
- **Responsável:** @vibe-implementer

---

## Fluxo de Implementação

### Passo 1: Executar Fase 1
- Ler as SPECs 01, 02, 03
- Implementar os 3 menus
- Testar cada um via Chrome DevTools

### Passo 2: Executar Fase 2
- Ler as SPECs 04, 05, 06
- Implementar os 3 menus
- Testar cada um via Chrome DevTools

### Passo 3: Executar Fase 3
- Ler as SPECs 07, 08, 09
- Implementar os 3 menus
- Testar cada um via Chrome DevTools

---

## checklist de Validação

Para cada módulo implementado:
- [ ] Menu de contexto visível no header
- [ ] Todos os links funcionam
- [ ] Estilo visual consistente
- [ ] Responsivo em mobile
- [ ] Não quebra outras funcionalidades

---

*Documento gerado em: 2026-04-15*
*Projeto: UNIQ Empresas - Context Menu*
*Versão: 1.0*