# SPEC - Menu de Contexto do Módulo Estoque

**Projeto:** UNIQ Empresas  
**Módulo:** Estoque (`/estoque/dashboard`)  
**Versão:** 1.0  
**Data:** 2026-04-15

---

## 1. Visão Geral

O Menu de Contexto do módulo Estoque é um componente de navegação integrado ao header da página `EstoqueDashboardPage.tsx` que permite ao usuário alternar rapidamente entre as sub-funcionalidades do módulo: Dashboard, Produtos e Movimentações.

Este componente resolve o problema de usuários precisarem digitar URLs manualmente para acessar sub-páginas do módulo Estoque.

---

## 2. Layout

### 2.1 Posicionamento

- **Localização:** Header da página, abaixo do título "Estoque"
- **Posição:** Entre o título principal e as métricas/cards do dashboard
- **Alinhamento:** Esquerda com gap de itens

### 2.2 Estrutura Visual

```
┌─────────────────────────────────────────────────────────────┐
│  Estoque                                                    │
│  ───────────────────────────────────────────────────────────│
│  [Dashboard] [Produtos] [Movimentações]                     │
│  ───────────────────────────────────────────────────────────│
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │ Total   │ │ Estoque │ │ Mínimos │ │ Valor   │          │
│  │Produtos │ │   Mín.  │ │  Below  │ │  Total  │          │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
└─────────────────────────────────────────────────────────────┘
```

### 2.3 Dimensões

- **Tab Item:**
  - Padding: `px-3 py-2`
  - Gap entre itens: `gap-1`
  - Border radius: `rounded-md`
- **Mobile:**
  - Itens em linha única com scroll horizontal
  - Texto compacto sem ícones

---

## 3. Componentes

### 3.1 Componentes shadcn/ui

| Componente | Uso | Referência |
|------------|-----|------------|
| `Tabs` | Navigation principal entre sub-funcionalidades | shadcn/ui Tabs |
| `TabsTrigger` | Cada item de navegação | shadcn/ui Tabs |
| `TabsList` | Container dos triggers | shadcn/ui Tabs |

### 3.2 Ícones Lucide React

| Ícone | Uso |
|------|-----|
| `LayoutDashboard` | Tab Dashboard |
| `Package` | Tab Produtos |
| `ArrowLeftRight` | Tab Movimentações |

---

## 4. Itens de Menu

### 4.1 Estrutura de Navegação

| Item | Ícone | Rota | Estado Inicial |
|------|------|------|---------------|
| Dashboard | `LayoutDashboard` | `/estoque/dashboard` | Ativo (página atual) |
| Produtos | `Package` | `/estoque/produtos` | Inativo |
| Movimentações | `ArrowLeftRight` | `/estoque/movimentacoes` | Inativo |

### 4.2 Regras de Ativo

- O estado "ativo" é determinado pela rota atual usando `useLocation()`
- A tab correspondente à rota atual deve estar com estilo visual diferente (cor de fundo, borda)

---

## 5. Estados

### 5.1 States dos Tabs

| Estado | Estilo |
|--------|--------|
| **Default** | Texto `text-slate-500`, fundo `bg-transparent`, hover `bg-slate-100` |
| **Hover** | Texto `text-slate-700`, fundo `bg-slate-100` |
| **Active/Selected** | Texto `text-emerald-600`, fundo `bg-emerald-50`, borda `border-b-2 border-emerald-600` |
| **Disabled** | Texto `text-slate-300`, cursor `not-allowed` |

### 5.2 Transições

- `transition-colors` com `duration-200`
- Easing: `ease-in-out`

---

## 6. Responsividade

### 6.1 Desktop (≥768px)

- Exibe: Ícone + Texto completo
- Layout: Horizontal, sem scroll
- Container: `max-w-md`

### 6.2 Mobile (<768px)

- Exibe: Apenas texto (sem ícones para poupar espaço)
- Layout: Horizontal com `overflow-x-auto`
- Container: `overflow-x-auto`
- Padding bottom: `pb-2` para garantir scroll visível

### 6.3 Breakpoints

- `md` (768px): Transição de layout compacto para completo

---

## 7. Integração com Código Existente

### 7.1 Localização no Arquivo

O componente deve ser integrado em `src/app/components/estoque/EstoqueDashboardPage.tsx`:

O menu deve ser posicionado **imediatamente após** o título "Estoque" (h1) e **antes** da seção de métricas/cards do dashboard.

### 7.2 Imports Necessários

```tsx
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  ArrowLeftRight,
} from "lucide-react";
```

### 7.3 Código de Integração

O menu deve substituir ou complementar o header atual. Deve ficar abaixo do título principal e ser consistente com o estilo visual do módulo (cores verdes do tema UNIQ).

```tsx
// Localização: Após o título <h1> e antes da seção de métricas
// Exemplo de implementação:

<div className="space-y-4">
  <div>
    <h1 className="text-2xl font-bold text-slate-900">Estoque</h1>
    <p className="text-sm text-slate-500">Gerencie seu estoque e produtos</p>
  </div>

  {/* Menu de Contexto */}
  <div className="border-b border-slate-200">
    <Tabs
      value={location.pathname}
      onValueChange={(value) => navigate(value)}
      className="w-full"
    >
      <TabsList className="bg-transparent w-full justify-start h-auto p-0 gap-1 px-4 border-b-0">
        <TabsTrigger
          value="/estoque/dashboard"
          className={cn(
            "px-3 py-2 rounded-t-lg data-[state=active]:bg-white data-[state=active]:border-t data-[state=active]:border-x data-[state=active]:border-slate-200 data-[state=active]:shadow-none -mb-px",
            location.pathname === "/estoque/dashboard" 
              ? "text-emerald-600 bg-white border-t-emerald-600" 
              : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
          )}
        >
          <LayoutDashboard size={16} className="mr-1.5" />
          <span className="text-sm font-medium">Dashboard</span>
        </TabsTrigger>
        
        <TabsTrigger
          value="/estoque/produtos"
          className={cn(
            "px-3 py-2 rounded-t-lg -mb-px",
            location.pathname === "/estoque/produtos" 
              ? "text-emerald-600 bg-white border-t-emerald-600" 
              : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
          )}
        >
          <Package size={16} className="mr-1.5" />
          <span className="text-sm font-medium">Produtos</span>
        </TabsTrigger>

        <TabsTrigger
          value="/estoque/movimentacoes"
          className={cn(
            "px-3 py-2 rounded-t-lg -mb-px",
            location.pathname === "/estoque/movimentacoes" 
              ? "text-emerald-600 bg-white border-t-emerald-600" 
              : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
          )}
        >
          <ArrowLeftRight size={16} className="mr-1.5" />
          <span className="text-sm font-medium">Movimentações</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </div>

  {/* Conteúdo do Dashboard - Métricas e Cards */}
</div>
```

**Nota:** O menu é implementado como uma "sub-navegação" abaixo do título principal, mantendo a identidade visual do módulo Estoque (cores verdes). A implementação real deve usar os componentes shadcn/ui corretamente.

---

## 8. Critérios de Aceitação

### 8.1 Checklist de Implementação

- [ ] Menu de contexto visível abaixo do título do Estoque
- [ ] Três tabs: Dashboard, Produtos, Movimentações
- [ ] Cada tab redireciona para a rota correta
- [ ] Tab ativa recebe estilo visual diferente
- [ ] Responsivo funciona em mobile (scroll horizontal)
- [ ] Usa componentes shadcn/ui (Tabs)
- [ ] Usa ícones lucide-react
- [ ] Não quebra navegação existente (links existentes)
- [ ] Transições suaves entre estados

### 8.2 Testes Visuais

1. **Acesso Direto:** Ao acessar `/estoque/dashboard`, ver o menu com "Dashboard" ativo
2. **Navegação:** Clicar em "Produtos" deve navegar para `/estoque/produtos`
3. **Navegação:** Clicar em "Movimentações" deve navegar para `/estoque/movimentacoes`
4. **Mobile:** Em viewport mobile, menu deve ter scroll horizontal
5. **Hover:** Passar mouse sobre tabs deve mostrar estado hover

---

## 9. Dependências

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

```bash
npx shadcn@latest add tabs -y
```

---

## 10. Rotas Relacionadas

- **Arquivo Principal:** `src/app/components/estoque/EstoqueDashboardPage.tsx`
- **Rotas:**
  - `/estoque/dashboard` - Dashboard (atual)
  - `/estoque/produtos` - Lista de Produtos
  - `/estoque/movimentacoes` - Movimentações de Estoque

---

## 11. Considerações Adicionais

- O menu deve ser discreto e não competir com as métricas e informações principais do dashboard.
- O estilo visual deve harmonizar com o tema verde do módulo Estoque.
- O componente deve funcionar independentemente do estado de其他 funcionalidades.

---

*SPEC gerado em: 2026-04-15*
*Planejado para: Fase 1 - Implementação Prioritária*