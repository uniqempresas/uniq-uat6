# SPEC - Menu de Contexto do Módulo Agenda

**Projeto:** UNIQ Empresas  
**Módulo:** Agenda (`/agenda`)  
**Versão:** 1.0  
**Data:** 2026-04-15

---

## 1. Visão Geral

O Menu de Contexto da Agenda é um componente de navegação integrado ao header da página `AgendaPage.tsx` que permite ao usuário alternar rapidamente entre as sub-funcionalidades do módulo: Agenda principal, Novo Agendamento e Compromissos.

Este componente resolve o problema de usuários precisarem digitar URLs manualmente para acessar sub-páginas da Agenda.

---

## 2. Layout

### 2.1 Posicionamento

- **Localização:** Header da página, abaixo do título principal
- **Posição:** Entre o título "Agenda" e os botões de ação existentes
- **Alinhamento:** Esquerda com gap de itens

### 2.2 Estrutura Visual

```
┌─────────────────────────────────────────────────────────────┐
│  Agenda                                               │
│  ┌──────────┐ ┌────────────────┐ ┌──────────────┐         │
│  │ Agenda  │ │Novo Agendam.│ │Compromissos│   [+ Novo]   │
│  └──────────┘ └────────────────┘ └──────────────┘         │
│  Gerencie seus agendamentos e compromissos                  │
└─────────────────────────────────────────────────────┘
```

### 2.3 Dimensões

- **Tab Item:**
  - Padding: `px-4 py-2`
  - Gap entre itens: `gap-2`
  - Border radius: `rounded-lg`
- **Mobile:**
  - Itens em linha única com scroll horizontal
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
| `Button` | Botão flutuante "Novo Agendamento" (já existe no código) |

### 3.3 Ícones Lucide React

| Ícone | Uso |
|------|-----|
| `Calendar` | Tab Agenda |
| `Plus` | Tab Novo Agendamento |
| `FileText` | Tab Compromissos |

---

## 4. Itens de Menu

### 4.1 Estrutura de Navegação

| Item | Ícone | Rota | Estado Inicial |
|------|------|------|---------------|
| Agenda | `Calendar` | `/agenda` | Ativo (página atual) |
| Novo Agendamento | `Plus` | `/agenda/novo` | Inativo |
| Compromissos | `FileText` | `/agenda/compromissos` | Inativo |

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

O componente deve ser integrado em `src/app/components/agenda/AgendaPage.tsx`:

```tsx
// Localização recomendada: Linha 62-77 (após o header, antes do Calendar Grid)
// Substituir o header atual:

<div className="flex items-center justify-between mb-8">
  <div>
    <h1 className="text-2xl font-bold text-slate-900">Agenda</h1>
    <p className="text-slate-500 mt-1">Gerencie seus agendamentos e compromissos</p>
  </div>
  {/* O botão "Novo Agendamento" existente será substituído pelo menu de contexto */}
</div>
```

### 7.2 Imports Necessários

```tsx
import { useLocation } from "react-router";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Calendar,
  Plus,
  FileText,
} from "lucide-react";
```

### 7.3 Código de Integração

```tsx
export function AgendaPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determina qual tab está ativa
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header com Menu de Contexto */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Agenda</h1>
          <p className="text-slate-500 mt-1">Gerencie seus agendamentos e compromissos</p>
        </div>

        {/* Menu de Contexto Agenda */}
        <Tabs
          value={location.pathname}
          onValueChange={(value) => navigate(value)}
          className="w-full md:w-auto"
        >
          <TabsList className="bg-slate-100 p-1">
            <TabsTrigger
              value="/agenda"
              className={cn(
                "flex items-center gap-2",
                isActive("/agenda") && "bg-white shadow-sm"
              )}
            >
              <Calendar size={18} />
              <span className="hidden sm:inline">Agenda</span>
            </TabsTrigger>
            <TabsTrigger
              value="/agenda/novo"
              className={cn(
                "flex items-center gap-2",
                isActive("/agenda/novo") && "bg-white shadow-sm"
              )}
            >
              <Plus size={18} />
              <span className="hidden sm:inline">Novo Agendamento</span>
            </TabsTrigger>
            <TabsTrigger
              value="/agenda/compromissos"
              className={cn(
                "flex items-center gap-2",
                isActive("/agenda/compromissos") && "bg-white shadow-sm"
              )}
            >
              <FileText size={18} />
              <span className="hidden sm:inline">Compromissos</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Botão Novo Agendamento (movido para o header direito) */}
        <button
          onClick={() => navigate("/agenda/novo")}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <Plus size={18} />
          Novo Agendamento
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

- [ ] Menu de contexto visível no header da página Agenda
- [ ] Three tabs: Agenda, Novo Agendamento, Compromissos
- [ ] Cada tab redireciona para a rota correta
- [ ] Tab ativa recebe estilo visual diferente
- [ ] Botão "Novo Agendamento" também existe no header
- [ ] Responsivo funciona em mobile (scroll horizontal)
- [ ] Usa componentes shadcn/ui (Tabs)
- [ ] Usa ícones lucide-react
- [ ] Não quebra navegação existente
- [ ] Transições suaves entre estados

### 8.2 Testes Visuais

1. **Acesso Directo:** Ao acessar `/agenda`, ver o menu com "Agenda" ativo
2. **Navegação:** Clicar em "Novo Agendamento" deve navegar para `/agenda/novo`
3. **Navegação:** Clicar em "Compromissos" deve navegar para `/agenda/compromissos`
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

- **Arquivo Principal:** `src/app/components/agenda/AgendaPage.tsx`
- **Rotas:**
  - `/agenda` - Agenda principal (atual)
  - `/agenda/novo` - Novo Agendamento
  - `/agenda/compromissos` - Lista de Compromissos

---

*SPEC gerado em: 2026-04-15*
*Planejado para: Fase 1 - Implementação Prioritária*