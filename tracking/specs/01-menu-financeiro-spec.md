# SPEC - Menu de Contexto do Módulo Financeiro

## 1. Visão Geral

O **Menu de Contexto do Financeiro** é um componente de navegação localizado no header da página `/financeiro/dashboard`. Seu objetivo é oferecer atalhos rápidos para as sub-funcionalidades críticas do módulo financeiro, reduzindo a necessidade de digitação de URLs e melhorando a experiência do usuário.

**Página Alvo:** `src/app/components/financeiro/FinanceiroDashboardPage.tsx`
**Rota:** `/financeiro/dashboard`

---

## 2. Layout

### 2.1 Posicionamento
- **Localização:** Imediatamente após o título "Resumo Financeiro" e antes da seção de Alertas/KPIs.
- **Layout Horizontal:** Itens organizados em linha (row), com distribuição uniforme.

### 2.2 Estrutura Visual
```
┌─────────────────────────────────────────────────────────────────┐
│  Resumo Financeiro                                             │
│  Visão geral da saúde financeira...                            │
├─────────────────────────────────────────────────────────────────┤
│  [Fluxo de Caixa] [Contas Pagar] [Contas Receber] [DRE]        │
└─────────────────────────────────────────────────────────────────┘
```

### 2.3 Dimensões
- **Largura:** 100% do container pai (max-w-7xl).
- **Altura:** Aproximadamente 40-48px.
- **Espaçamento (Gap):** 16px (gap-4) entre os itens.
- **Responsividade:** 
  - **Desktop (>1024px):** 4 itens em linha.
  - **Tablet (768px - 1024px):** 2 itens por linha (grid-cols-2).
  - **Mobile (<768px):** 1 item por linha (grid-cols-1) - *Melhorar accessibilidade em telas pequenas*.

---

## 3. Componentes shadcn/ui

| Componente | Uso | Referência |
|------------|-----|------------|
| `Button` (variant:outline) | Base para os itens de menu | `components/ui/button` |
| `Lucide Icons` | Ícones representativos de cada seção | Ícones específicos por item |
| `Card` (opcional) | Para envolver os grupos de itens se necessário | `components/ui/card` |
| `Tooltip` (opcional) | Para mostrar texto completo em itens truncados | `components/ui/tooltip` |

**Decisão de Implementação:** Usar `Button` estilizado como "nav-link" (outline/subtle) ao invés de `Tabs`, pois a interação é **navegação** (mudança de rota), não alteração de visualização na mesma página.

---

## 4. Itens de Menu

Cada item deve ter: **Ícone + Rótulo + Link**.

| # | Ícone (Lucide) | Rótulo | Rota de Destino | Descrição |
|---|----------------|--------|-----------------|------------|
| 1 | `Wallet` | Fluxo de Caixa | `/financeiro/fluxo-de-caixa` | Visao geral de entradas e saidas |
| 2 | `FileText` (ou `CreditCard`) | Contas a Pagar | `/financeiro/contas-pagar` | Gerenciar despesas e pagamentos |
| 3 | `Receive` (ou `TrendingUp`) | Contas a Receber | `/financeiro/contas-receber` | Gerenciar recebimentos |
| 4 | `BarChart3` | DRE | `/financeiro/dre` | Demonstrativo de resultados |

*Nota: Se os ícones `Receive` ou `FileText` não existirem em `lucide-react`, usar equivalentes como `ArrowDownLeft` ou `FileText`.*

---

## 5. Estados

Cada item do menu deve suportar os seguintes estados visuais:

| Estado | Comportamento Visual |
|--------|----------------------|
| **Default** | Fundo transparente, texto `text-slate-600`, borda sutil `border-slate-200`. |
| **Hover** | Fundo `bg-slate-50`, texto `text-slate-900`, cursor `pointer`. |
| **Active** (Opcional) | Se a rota atual for filha, destaque com `border-emerald-500` e texto `text-emerald-700`. |
| **Focus** | Outline visível para acessibilidade (`ring-2`). |

---

## 6. Responsividade

### Estratégia Mobile-First
1. **Containers de Grid:**
   - Mobile: `grid grid-cols-1 sm:grid-cols-2`
   - Desktop: `lg:grid-cols-4`
2. **Tamanho dos botões:**
   - Mobile: `w-full` (ocupar toda a largura disponível).
   - Desktop: `w-auto` (ajuste ao conteúdo).
3. **Textos:**
   - Manter labels curtos. Se necessário, usar Tooltip para descrição completa no hover.

---

## 7. Integração com Código Existente

O componente será injetado **APÓS** o Header atual (título + descrição) e **ANTES** da seção de Alertas.

**Trecho atual (Linha 70-76):**
```tsx
return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-slate-900 mb-1">Resumo Financeiro</h1>
        <p className="text-sm text-slate-600">Visão geral da saúde financeira do seu negócio</p>
      </div>

      {/* ALERTA: Inserir Menu de Contexto aqui */}
```

---

## 8. Critérios de Aceitação

- [ ] O menu é renderizado no topo da página, abaixo do título.
- [ ] Os 4 links (Fluxo de Caixa, Contas Pagar, Contas Receber, DRE) estão presentes.
- [ ] Os ícones lucide-react estão corretos para cada seção.
- [ ] Ao clicar em um item, o usuário é redirecionado para a rota correta.
- [ ] O layout é responsivo: 4 colunas em desktop, empilhado em mobile.
- [ ] O design segue o padrão visual UNIQ (cores verde/ardo, fontes, espaçamento).
- [ ] O menu não quebra com o restante do conteúdo da página.

---

## 9. Tarefas de Implementação

1. **Criar componente `FinanceiroContextMenu.tsx`** (opcionalmente dentro de `src/app/components/financeiro/components/`).
2. **Importar ícones necessários** (`Wallet`, `FileText`, `ArrowDownLeft`, `BarChart3` ou similares).
3. **Inserir componente** no `FinanceiroDashboardPage.tsx`.
4. **Ajustar estilos** (Tailwind) para corresponder ao design system UNIQ.

---

*SPEC gerado em: 2026-04-15*
*Projeto: UNIQ Empresas - Context Menu Financeiro*
*Versão: 1.0*