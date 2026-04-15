# SPEC - Menu de Contexto do Módulo Vendas

**Projeto:** UNIQ Empresas  
**Módulo:** Vendas PDV (`/vendas/pdv`)  
**Versão:** 1.0  
**Data:** 2026-04-15

---

## 1. Visão Geral

O Menu de Contexto do módulo Vendas é um componente de navegação integrado ao header da página `PDVPage.tsx` que permite ao usuário alternar rapidamente entre as sub-funcionalidades do módulo: PDV (Ponto de Venda), Abertura/Fechamento de Caixa, Lista de Pedidos e Relatórios.

Este componente resolve o problema de usuários precisarem digitar URLs manualmente para acessar sub-páginas do módulo Vendas.

---

## 2. Layout

### 2.1 Posicionamento

- **Localização:** Header da página, abaixo da Top Bar de informações do caixa
- **Posição:** Entre as informações de vendas do dia (faturamento) e os botões de ação (Sangria, Fechar Caixa)
- **Alinhamento:** Esquerda com gap de itens

### 2.2 Estrutura Visual

```
┌─────────────────────────────────────────────────────────────┐
│  Caixa #1 · Maria Silva  10:30         │ Vendas: 5  │ ...
│  ───────────────────────────────────────────────────────────│
│  [PDV] [Abertura] [Fechamento] [Pedidos] [Relatórios]      │
└─────────────────────────────────────────────────────────────┘
```

### 2.3 Dimensões

- **Tab Item:**
  - Padding: `px-3 py-1.5`
  - Gap entre itens: `gap-1`
  - Border radius: `rounded-lg`
- **Mobile:**
  -Itens em linha única com scroll horizontal
  - Ícones + texto compacto

---

## 3. Componentes

### 3.1 Componentes shadcn/ui

| Componente | Uso | Referência |
|------------|-----|------------|
| `Tabs` | Navigation principal entre sub-funcionalidades | shadcn/ui Tabs |
| `TabsTrigger` | Cada item de navegação | shadcn/ui Tabs |
| `TabsList` | Container dos triggers | shadcn/ui Tabs |

### 3.2 Componentes Custom

| Componente | Uso |
|------------|-----|
| `Button` | Botões de ação existentes (Historico, Sangria, Fechar) |

### 3.3 Ícones Lucide React

| Ícone | Uso |
|------|-----|
| `ShoppingCart` | Tab PDV |
| `DoorOpen` | Tab Abertura |
| `DoorClosed` | Tab Fechamento |
| `ShoppingBag` | Tab Pedidos |
| `BarChart3` | Tab Relatórios |

---

## 4. Itens de Menu

### 4.1 Estrutura de Navegação

| Item | Ícone | Rota | Estado Inicial |
|------|------|------|---------------|
| PDV | `ShoppingCart` | `/vendas/pdv` | Ativo (página atual) |
| Abertura | `DoorOpen` | `/vendas/pdv/abertura` | Inativo |
| Fechamento | `DoorClosed` | `/vendas/pdv/fechamento` | Inativo |
| Pedidos | `ShoppingBag` | `/vendas/pedidos` | Inativo |
| Relatórios | `BarChart3` | `/vendas/relatorios` | Inativo |

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
- Container max-width: `max-w-lg`

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

O componente deve ser integrado em `src/app/components/pdv/PDVPage.tsx`:

O menu deve ser posicionado **imediatamente após** a Top Bar de informações (linha ~880) e **antes** da divisão "MAIN SPLIT" (linha ~883).

### 7.2 Imports Necessários

```tsx
import { useLocation } from "react-router";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ShoppingCart,
  DoorOpen,
  DoorClosed,
  ShoppingBag,
  BarChart3,
} from "lucide-react";
```

### 7.3 Código de Integração

O menu deve substituir ou complementar o header atual. Como a página PDV é "cheia" (full-width), o menu deve ser parte da estrutura principal.

```tsx
// Localização: Entre a Top Bar (linha 838-880) e o Main Split (linha 883)
// Adicionar após o fechamento da Top Bar div (linha 880)

<div className="border-b border-slate-200">
  <Tabs
    value={location.pathname}
    onValueChange={(value) => navigate(value)}
    className="w-full"
  >
    <TabsList className="bg-transparent w-full justify-start h-auto p-0 gap-1 px-4 border-b-0">
      <TabsTrigger
        value="/vendas/pdv"
        className={cn(
          "px-3 py-2 rounded-t-lg data-[state=active]:bg-white data-[state=active]:border-t data-[state=active]:border-x data-[state=active]:border-slate-200 data-[state=active]:shadow-none -mb-px",
          location.pathname === "/vendas/pdv" 
            ? "text-emerald-600 bg-white border-t-emerald-600" 
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
        )}
      >
        <ShoppingCart size={16} className="mr-1.5" />
        <span className="text-xs font-medium">PDV</span>
      </TabsTrigger>
      
      <TabsTrigger
        value="/vendas/pdv/abertura"
        className={cn(
          "px-3 py-2 rounded-t-lg -mb-px",
          location.pathname === "/vendas/pdv/abertura" 
            ? "text-emerald-600 bg-white border-t-emerald-600" 
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
        )}
      >
        <DoorOpen size={16} className="mr-1.5" />
        <span className="text-xs font-medium">Abertura</span>
      </TabsTrigger>

      <TabsTrigger
        value="/vendas/pdv/fechamento"
        className={cn(
          "px-3 py-2 rounded-t-lg -mb-px",
          location.pathname === "/vendas/pdv/fechamento" 
            ? "text-emerald-600 bg-white border-t-emerald-600" 
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
        )}
      >
        <DoorClosed size={16} className="mr-1.5" />
        <span className="text-xs font-medium">Fechamento</span>
      </TabsTrigger>

      <TabsTrigger
        value="/vendas/pedidos"
        className={cn(
          "px-3 py-2 rounded-t-lg -mb-px",
          location.pathname === "/vendas/pedidos" 
            ? "text-emerald-600 bg-white border-t-emerald-600" 
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
        )}
      >
        <ShoppingBag size={16} className="mr-1.5" />
        <span className="text-xs font-medium">Pedidos</span>
      </TabsTrigger>

      <TabsTrigger
        value="/vendas/relatorios"
        className={cn(
          "px-3 py-2 rounded-t-lg -mb-px",
          location.pathname === "/vendas/relatorios" 
            ? "text-emerald-600 bg-white border-t-emerald-600" 
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
        )}
      >
        <BarChart3 size={16} className="mr-1.5" />
        <span className="text-xs font-medium">Relatórios</span>
      </TabsTrigger>
    </TabsList>
  </Tabs>
</div>
```

**Nota:** O menu é implementado como uma "sub-navegação" abaixo do header principal, mantendo a identidade visual do PDV (cores verdes). A implementação real deve usar os componentes shadcn/ui corretamente.

---

## 8. Critérios de Aceitação

### 8.1 Checklist de Implementação

- [ ] Menu de contexto visível abaixo do header do PDV
- [ ] Cinco tabs: PDV, Abertura, Fechamento, Pedidos, Relatórios
- [ ] Cada tab redireciona para a rota correta
- [ ] Tab ativa recebe estilo visual diferente
- [ ] Responsivo funciona em mobile (scroll horizontal)
- [ ] Usa componentes shadcn/ui (Tabs)
- [ ] Usa ícones lucide-react
- [ ] Não quebra navegação existente (links existentes)
- [ ] Transições suaves entre estados

### 8.2 Testes Visuais

1. **Acesso Direto:** Ao acessar `/vendas/pdv`, ver o menu com "PDV" ativo
2. **Navegação:** Clicar em "Abertura" deve navegar para `/vendas/pdv/abertura`
3. **Navegação:** Clicar em "Fechamento" deve navegar para `/vendas/pdv/fechamento`
4. **Navegação:** Clicar em "Pedidos" deve navegar para `/vendas/pedidos`
5. **Navegação:** Clicar em "Relatórios" deve navegar para `/vendas/relatorios`
6. **Mobile:** Em viewport mobile, menu deve ter scroll horizontal
7. **Hover:** Passar mouse sobre tabs deve mostrar estado hover

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

```bash
npx shadcn@latest add tabs -y
```

---

## 10. Rotas Relacionadas

- **Arquivo Principal:** `src/app/components/pdv/PDVPage.tsx`
- **Rotas:**
  - `/vendas/pdv` - PDV (atual)
  - `/vendas/pdv/abertura` - Abertura de Caixa
  - `/vendas/pdv/fechamento` - Fechamento de Caixa
  - `/vendas/pedidos` - Lista de Pedidos
  - `/vendas/relatorios` - Relatórios de Vendas

---

## 11. Considerações Adicionais

- O menu deve ser discreto e não competir com a interface principal do PDV (grade de produtos).
- O estilo visual deve harmonizar com o tema verde do PDV.
- O componente deve funcionar mesmo quando o caixa está fechado (estado de "Caixa Fechado" do PDV).

---

*SPEC gerado em: 2026-04-15*
*Planejado para: Fase 1 - Implementação Prioritária*