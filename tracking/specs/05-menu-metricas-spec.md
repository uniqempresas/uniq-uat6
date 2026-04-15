# SPEC - Menu de Contexto do Módulo Métricas

**Projeto:** UNIQ Empresas  
**Módulo:** Métricas (`/metricas/dashboard`)  
**Versão:** 1.0  
**Data:** 2026-04-15

---

## 1. Visão Geral

O Menu de Contexto do módulo Métricas é um componente de navegação integrado ao header da página de Metrics Dashboard que permite ao usuário alternar rapidamente entre os diferentes dashboards analíticos: Dashboard Geral, Vendas, Financeiro, Clientes, Agendamentos e Produtos.

Este componente resolve o problema de usuários precisarem digitar URLs manualmente para acessar sub-páginas de métricas específicas dentro do módulo.

---

## 2. Layout

### 2.1 Posicionamento

- **Localização:** Header da página de Métricas, como barra de navegação secundária
- **Posição:** Abaixo do título principal "Métricas" e antes do conteúdo do dashboard
- **Alinhamento:** Esquerda com gap de itens

### 2.2 Estrutura Visual

```
┌─────────────────────────────────────────────────────────────┐
│  Métricas                                                 │
│  ────────────────────────────────────────────────────────│
│  [Dashboard] [Vendas] [Financeiro] [Clientes] [Agendamentos] [Produtos]
│  ────────────────────────────────────────────────────────│
│  [Gráfico/Conteúdo do Dashboard]                          │
└─────────────────────────────────────────────────────────────┘
```

### 2.3 Dimensões

- **Tab Item:**
  - Padding: `px-4 py-2`
  - Gap entre itens: `gap-1`
  - Border radius: `rounded-md`
- **Mobile:**
  - Itens em linha única com scroll horizontal
  - Texto compacto (text-sm)

---

## 3. Componentes

### 3.1 Componentes shadcn/ui

| Componente | Uso | Referência |
|------------|-----|------------|
| `Tabs` | Navigation principal entre sub-dashboards | shadcn/ui Tabs |
| `TabsTrigger` | Cada item de navegação | shadcn/ui Tabs |
| `TabsList` | Container dos triggers | shadcn/ui Tabs |

### 3.2 Ícones Lucide React

| Ícone | Uso |
|------|-----|
| `LayoutDashboard` | Tab Dashboard |
| `ShoppingCart` | Tab Vendas |
| `Wallet` | Tab Financeiro |
| `Users` | Tab Clientes |
| `CalendarClock` | Tab Agendamentos |
| `Package` | Tab Produtos |

---

## 4. Itens de Menu

### 4.1 Estrutura de Navegação

| Item | Ícone | Rota | Estado Inicial |
|------|------|------|---------------|
| Dashboard | `LayoutDashboard` | `/metricas/dashboard` | Ativo (página atual) |
| Vendas | `ShoppingCart` | `/metricas/vendas` | Inativo |
| Financeiro | `Wallet` | `/metricas/financeiro` | Inativo |
| Clientes | `Users` | `/metricas/clientes` | Inativo |
| Agendamentos | `CalendarClock` | `/metricas/agendamentos` | Inativo |
| Produtos | `Package` | `/metricas/produtos` | Inativo |

### 4.2 Regras de Ativo

- O estado "ativo" é determinado pela rota atual usando `useLocation()`
- A tab correspondente à rota atual deve estar com estilo visual diferente (cor de fundo, borda inferior)

---

## 5. Estados

### 5.1 States dos Tabs

| Estado | Estilo |
|--------|--------|
| **Default** | Texto `text-slate-500`, fundo `bg-transparent`, hover `bg-slate-100` |
| **Hover** | Texto `text-slate-700`, fundo `bg-slate-100` |
| **Active/Selected** | Texto `text-slate-900`, fundo `bg-white`, borda inferior `border-b-2 border-slate-800` |
| **Disabled** | Texto `text-slate-300`, cursor `not-allowed` |

### 5.2 Transições

- `transition-colors` com `duration-200`
- Easing: `ease-in-out`

---

## 6. Responsividade

### 6.1 Desktop (≥768px)

- Exibe: Ícone + Texto completo
- Layout: Horizontal, sem scroll
- Container max-width: `max-w-4xl`

### 6.2 Mobile (<768px)

- Exibe: Ícone + texto truncado
- Layout: Horizontal com `overflow-x-auto`
- Container: `overflow-x-auto`
- Padding bottom: `pb-2` para garantir scroll visível

### 6.3 Breakpoints

- `md` (768px): Transição de layout compacto para completo

---

## 7. Integração com Código Existente

### 7.1 Localização no Arquivo

O componente deve ser integrado em `src/app/pages/metricas/MetricsDashboard.tsx` (ou arquivo equivalente da página de métricas):

O menu deve ser posicionado **imediatamente após** o título/header da página e **antes** do conteúdo do dashboard.

### 7.2 Imports Necessários

```tsx
import { useLocation, useNavigate } from "react-router";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  ShoppingCart,
  Wallet,
  Users,
  CalendarClock,
  Package,
} from "lucide-react";
```

### 7.3 Código de Integração

```tsx
// Localização: Header da página de métricas
// Adicionar após o título "Métricas"

<div className="border-b border-slate-200">
  <Tabs
    value={location.pathname}
    onValueChange={(value) => navigate(value)}
    className="w-full"
  >
    <TabsList className="bg-transparent w-full justify-start h-auto p-0 gap-1 px-4">
      <TabsTrigger
        value="/metricas/dashboard"
        className={cn(
          "px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-none",
          location.pathname === "/metricas/dashboard"
            ? "text-slate-900 border-b-2 border-slate-800"
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
        )}
      >
        <LayoutDashboard size={16} className="mr-2" />
        <span className="text-sm font-medium">Dashboard</span>
      </TabsTrigger>

      <TabsTrigger
        value="/metricas/vendas"
        className={cn(
          "px-4 py-2 rounded-md",
          location.pathname === "/metricas/vendas"
            ? "text-slate-900 border-b-2 border-slate-800"
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
        )}
      >
        <ShoppingCart size={16} className="mr-2" />
        <span className="text-sm font-medium">Vendas</span>
      </TabsTrigger>

      <TabsTrigger
        value="/metricas/financeiro"
        className={cn(
          "px-4 py-2 rounded-md",
          location.pathname === "/metricas/financeiro"
            ? "text-slate-900 border-b-2 border-slate-800"
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
        )}
      >
        <Wallet size={16} className="mr-2" />
        <span className="text-sm font-medium">Financeiro</span>
      </TabsTrigger>

      <TabsTrigger
        value="/metricas/clientes"
        className={cn(
          "px-4 py-2 rounded-md",
          location.pathname === "/metricas/clientes"
            ? "text-slate-900 border-b-2 border-slate-800"
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
        )}
      >
        <Users size={16} className="mr-2" />
        <span className="text-sm font-medium">Clientes</span>
      </TabsTrigger>

      <TabsTrigger
        value="/metricas/agendamentos"
        className={cn(
          "px-4 py-2 rounded-md",
          location.pathname === "/metricas/agendamentos"
            ? "text-slate-900 border-b-2 border-slate-800"
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
        )}
      >
        <CalendarClock size={16} className="mr-2" />
        <span className="text-sm font-medium">Agendamentos</span>
      </TabsTrigger>

      <TabsTrigger
        value="/metricas/produtos"
        className={cn(
          "px-4 py-2 rounded-md",
          location.pathname === "/metricas/produtos"
            ? "text-slate-900 border-b-2 border-slate-800"
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
        )}
      >
        <Package size={16} className="mr-2" />
        <span className="text-sm font-medium">Produtos</span>
      </TabsTrigger>
    </TabsList>
  </Tabs>
</div>
```

---

## 8. Critérios de Aceitação

### 8.1 Checklist de Implementação

- [ ] Menu de contexto visível no header de Métricas
- [ ] Seis tabs: Dashboard, Vendas, Financeiro, Clientes, Agendamentos, Produtos
- [ ] Cada tab redireciona para a rota correta
- [ ] Tab ativa recebe estilo visual diferente (borda inferior)
- [ ] Responsivo funciona em mobile (scroll horizontal)
- [ ] Usa componentes shadcn/ui (Tabs)
- [ ] Usa ícones lucide-react
- [ ] Não quebra navegação existente (links existentes)
- [ ] Transições suaves entre estados
- [ ] Estilo visual neutro (não verde como Vendas)

### 8.2 Testes Visuais

1. **Acesso Direto:** Ao acessar `/metricas/dashboard`, ver o menu com "Dashboard" ativo
2. **Navegação:** Clicar em "Vendas" deve navegar para `/metricas/vendas`
3. **Navegação:** Clicar em "Financeiro" deve navegar para `/metricas/financeiro`
4. **Navegação:** Clicar em "Clientes" deve navegar para `/metricas/clientes`
5. **Navegação:** Clicar em "Agendamentos" deve navegar para `/metricas/agendamentos`
6. **Navegação:** Clicar em "Produtos" deve navegar para `/metricas/produtos`
7. **Mobile:** Em viewport mobile, menu deve ter scroll horizontal
8. **Hover:** Passar mouse sobre tabs deve mostrar estado hover

---

## 9. Dependencies

### 9.1 Pacotes Necessários

```json
{
  "dependencies": [
    "@radix-ui/react-tabs": "^1.1.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0"
  ]
}
```

### 9.2 Componentes shadcn/ui

Já deve estar instalado no projeto:
```bash
npx shadcn@latest add tabs -y
```

---

## 10. Rotas Relacionadas

- **Arquivo Principal:** `src/app/pages/metricas/MetricsDashboard.tsx`
- **Rotas:**
  - `/metricas/dashboard` - Dashboard Geral (atual)
  - `/metricas/vendas` - Métricas de Vendas
  - `/metricas/financeiro` - Métricas Financeiro
  - `/metricas/clientes` - Métricas de Clientes
  - `/metricas/agendamentos` - Métricas de Agendamentos
  - `/metricas/produtos` - Métricas de Produtos

---

## 11. Considerações Adicionais

- O menu deve ser discreto e não competir com os gráficos do dashboard.
- O estilo visual deve ser neutro (tons de cinza/slate) para diferenciar do módulo Vendas (verde) e manter profissionalismo.
- O componente deve funcionar mesmo quando os dados estão carregando ( skeleton state opcionalmas menu não deve ser afetado).

---

*SPEC gerado em: 2026-04-15*
*Planejado para: Fase 1 - Implementação Prioritária*