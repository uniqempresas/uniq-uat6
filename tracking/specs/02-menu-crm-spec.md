# SPEC - Menu de Contexto do Módulo CRM

**Projeto:** UNIQ Empresas  
**Módulo:** CRM Dashboard (`/crm/dashboard`)  
**Versão:** 1.0  
**Data:** 2026-04-15

---

## 1. Visão Geral

O Menu de Contexto do CRM é um componente de navegação integrado ao header da página `CRMDashboardPage.tsx` que permite ao usuário alternar rapidamente entre as sub-funcionalidades do módulo: Dashboard CRM, Lista de Clientes e Pipeline de Vendas.

Este componente resolve o problema de usuários precisarem digitar URLs manualmente para acessar sub-páginas do CRM.

---

## 2. Layout

### 2.1 Posicionamento

- **Localização:** Header da página, abaixo do título principal
- **Posição:** Entre o título "CRM Dashboard" e os botões de ação existentes
- **Alinhamento:** Esquerda com gap de itens

### 2.2 Estrutura Visual

```
┌─────────────────────────────────────────────────────────────┐
│  CRM Dashboard                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                   │
│  │Dashboard │ │ Clientes │ │ Pipeline │     [+ Novo Client] │
│  └──────────┘ └──────────┘ └──────────┘                   │
│  Visão geral do relacionamento com clientes                    │
└─────────────────────────────────────────────────────────────┘
```

### 2.3 Dimensões

- **Tab Item:**
  - Padding: `px-4 py-2`
  - Gap entre itens: `gap-2`
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
| `Button` | Botão flutuante "Novo Cliente" (já existe no código) |

### 3.3 Ícones Lucide React

| Ícone | Uso |
|------|-----|
| `LayoutDashboard` | Tab Dashboard |
| `Users` | Tab Clientes |
| `Kanban` / `Workflow` | Tab Pipeline |
| `UserPlus` | Botão Novo Cliente (já existe) |

---

## 4. Itens de Menu

### 4.1 Estrutura de Navegação

| Item | Ícone | Rota | Estado Inicial |
|------|------|------|---------------|
| Dashboard | `LayoutDashboard` | `/crm/dashboard` | Ativo (página atual) |
| Clientes | `Users` | `/crm/clientes` | Inativo |
| Pipeline | `Kanban` | `/crm/pipeline` | Inativo |

### 4.2 Regras de Ativo

- O estado "ativo" é determinado pela rota atual usando `useLocation()`
- A tab correspondente à rota atual deve estar com estilo visual diferente (cor de fundo, borda)

---

## 5. Estados

### 5.1 States dos Tabs

| Estado | Estilo |
|--------|--------|
| **Default** | Texto `text-slate-600`, fundo `bg-transparent`, hover `bg-slate-100` |
| **Hover** | Texto `text-slate-900`, fundo `bg-slate-100` |
| **Active/Selected** | Texto `text-emerald-600`, fundo `bg-emerald-50`, borda `border-b-2 border-emerald-600` |
| **Disabled** | Texto `text-slate-400`, cursor `not-allowed` |

### 5.2 Transições

- `transition-colors` com `duration-200`
- Easing: `ease-in-out`

---

## 6. Responsividade

### 6.1 Desktop (≥768px)

- Exibe: Ícone + Texto completo
- Layout: Horizontal, sem scroll
- Container max-width: `max-w-md`

### 6.2 Mobile (<768px)

- Exibe: Apenas ícone ou texto truncado
- Layout: Horizontal com scrolloverflow-x
- Container: `overflow-x-auto`
- Padding bottom: `pb-2` para garantir scroll visível

### 6.3 Breakpoints

- `md` (768px): Transição de layout compacto para completo
- Toque alveolar: Indicador visual de swipe para navegação horizontal

---

## 7. Integração com Código Existente

### 7.1 Localização no Arquivo

O componente deve ser integrado em `src/app/components/crm/CRMDashboardPage.tsx`:

```tsx
// Localização recomendada: Linha 62-77 (após o header, antes do Stats Grid)
// Substituir o header atual:

<div className="flex items-center justify-between mb-8">
  <div>
    <h1 className="text-2xl font-bold text-slate-900">CRM Dashboard</h1>
    <p className="text-slate-500 mt-1">Visão geral do relacionamento com clientes</p>
  </div>
  {/* O botão "Ver Clientes" existente será substituído pelo menu de contexto */}
</div>
```

### 7.2 Imports Necessários

```tsx
import { useLocation } from "react-router";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  LayoutDashboard,
  Users,
  Kanban,
  UserPlus,
} from "lucide-react";
```

### 7.3 Código de Integração

```tsx
export function CRMDashboardPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determina qual tab está ativa
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header com Menu de Contexto */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">CRM Dashboard</h1>
          <p className="text-slate-500 mt-1">Visão geral do relacionamento com clientes</p>
        </div>

        {/* Menu de Contexto CRM */}
        <Tabs
          value={location.pathname}
          onValueChange={(value) => navigate(value)}
          className="w-full md:w-auto"
        >
          <TabsList className="bg-slate-100 p-1">
            <TabsTrigger
              value="/crm/dashboard"
              className={cn(
                "flex items-center gap-2",
                isActive("/crm/dashboard") && "bg-white shadow-sm"
              )}
            >
              <LayoutDashboard size={18} />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger
              value="/crm/clientes"
              className={cn(
                "flex items-center gap-2",
                isActive("/crm/clientes") && "bg-white shadow-sm"
              )}
            >
              <Users size={18} />
              <span className="hidden sm:inline">Clientes</span>
            </TabsTrigger>
            <TabsTrigger
              value="/crm/pipeline"
              className={cn(
                "flex items-center gap-2",
                isActive("/crm/pipeline") && "bg-white shadow-sm"
              )}
            >
              <Kanban size={18} />
              <span className="hidden sm:inline">Pipeline</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Botão Novo Cliente (movido para o header direito) */}
        <button
          onClick={() => navigate("/crm/clientes/novo")}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <UserPlus size={18} />
          Novo Cliente
        </button>
      </div>

      {/* ... resto do conteúdo */}
    </div>
  );
}
```

**Nota:** O código acima mostra a estrutura de integração. A implementação real deve usar os componentes shadcn/ui corretamente.

---

## 8. Critérios de Aceitação

### 8.1 Checklist de Implementação

- [ ] Menu de contexto visível no header da página CRM Dashboard
- [ ] Three tabs: Dashboard, Clientes, Pipeline
- [ ] Cada tab redireciona para a rota correta
- [ ] Tab ativa recebe estilo visual diferente
- [ ] Botão "Novo Cliente"也存在 no header
- [ ] Responsivo funciona em mobile (scroll horizontal)
- [ ] Usa componentes shadcn/ui (Tabs)
- [ ] Usa ícones lucide-react
- [ ] Não quebra navegação existente
- [ ] Transições suaves entre estados

### 8.2 Testes Visuais

1. **Acesso Directo:** Ao acessar `/crm/dashboard`, ver o menu com "Dashboard" ativo
2. **Navegação:** Clicar em "Clientes" deve navegar para `/crm/clientes`
3. **Navegação:** Clicar em "Pipeline" deve navegar para `/crm/pipeline`
4. **Mobile:** Em viewport mobile, menu deve ter scroll horizontal
5. **Hover:** Passar mouse sobre tabs deve mostrar estado hover

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

## 10. Fornecedores Relacionados

- **Arquivo Principal:** `src/app/components/crm/CRMDashboardPage.tsx`
- **Rotas:**
  - `/crm/dashboard` - Dashboard CRM (atual)
  - `/crm/clientes` - Lista de Clientes
  - `/crm/pipeline` - Pipeline de Vendas

---

*SPEC gerado em: 2026-04-15*
*Planejado para: Fase 1 - Implementação Prioritária*