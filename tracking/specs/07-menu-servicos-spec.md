# SPEC - Menu de Contexto do Módulo Serviços

**Projeto:** UNIQ Empresas  
**Módulo:** Serviços (`/servicos`)  
**Versão:** 1.0  
**Data:** 2026-04-15

---

## 1. Visão Geral

O Menu de Contexto do módulo Serviços é um componente de navegação integrado ao header da página `ServicosPage.tsx` que permite ao usuário alternar rapidamente entre as sub-funcionalidades do módulo: Lista de Serviços e Novo Serviço.

Este componente resolve o problema de navegação entre as sub-páginas do módulo Serviços.

**Nota:** O botão "Novo Serviço" já existe no código atual. Esta especificação padroniza o menu de navegação seguindo o padrão estabelecido no módulo Vendas.

---

## 2. Layout

### 2.1 Posicionamento

- **Localização:** Header da página de Serviços, abaixo do título "Serviços"
- **Posição:** Alinhado à direita do título, antes ou depois dos botões de ação
- **Alinhamento:** Direita com gap de itens

### 2.2 Estrutura Visual

```
┌─────────────────────────────────────────────────────────────┐
│  Serviços                                              [+] │
│  Gerencie os serviços...                                     │
│  ───────────────────────────────────────────────────────────│
│  [Lista de Serviços] [Novo Serviço]                         │
└─────────────────────────────────────────────────────────────┘
```

### 2.3 Dimensões

- **Tab Item:**
  - Padding: `px-4 py-2`
  - Gap entre itens: `gap-1`
  - Border radius: `rounded-md`
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

### 3.2 Ícones Lucide React

| Ícone | Uso |
|------|-----|
| `List` | Tab Lista de Serviços |
| `Plus` | Tab Novo Serviço |

---

## 4. Itens de Menu

### 4.1 Estrutura de Navegação

| Item | Ícone | Rota | Estado Inicial |
|------|------|------|---------------|
| Lista de Serviços | `List` | `/servicos` | Ativo (página atual) |
| Novo Serviço | `Plus` | `/servicos/novo` | Inativo |

### 4.2 Regras de Ativo

- O estado "ativo" é determinado pela rota atual usando `useLocation()`
- O item correspondente à rota atual deve estar com estilo visual diferente (cor de fundo, borda)

---

## 5. Estados

### 5.1 States dos Tabs

| Estado | Estilo |
|--------|--------|
| **Default** | Texto `text-slate-500`, fundo `bg-transparent`, hover `bg-slate-100` |
| **Hover** | Texto `text-slate-700`, fundo `bg-slate-100` |
| **Active/Selected** | Texto `text-violet-600`, fundo `bg-violet-50`, borda `border-b-2 border-violet-600` |
| **Disabled** | Texto `text-slate-300`, cursor `not-allowed` |

### 5.2 Transições

- `transition-colors` com `duration-200`
- Easing: `ease-in-out`

---

## 6. Responsividade

### 6.1 Desktop (≥768px)

- Exibe: Ícone + Texto completo
- Layout: Horizontal, sem scroll

### 6.2 Mobile (<768px)

- Exibe: Ícone + texto truncado
- Layout: Horizontal com `overflow-x-auto`

### 6.3 Breakpoints

- `md` (768px): Transição de layout compacto para completo

---

## 7. Integração com Código Existente

### 7.1 Localização no Arquivo

O componente deve ser integrado em `src/app/components/servicos/ServicosPage.tsx`:

O menu deve ser posicionado **após** o header de título (linha ~98) e **antes** dos filtros (linha ~111).

### 7.2 Imports Necessários

```tsx
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  List,
  Plus,
} from "lucide-react";
```

### 7.3 Código de Integração

O menu deve substituir ou complementar a estrutura existente de header.

```tsx
// Localização: Após o header de título (linha ~104) e antes dos filtros (linha ~111)

// Menu de Contexto
<div className="border-b border-slate-200 mb-6">
  <Tabs
    value={location.pathname}
    onValueChange={(value) => navigate(value)}
    className="w-full"
  >
    <TabsList className="bg-transparent w-full justify-start h-auto p-0 gap-1 px-4 border-b-0">
      <TabsTrigger
        value="/servicos"
        className={cn(
          "px-4 py-2 rounded-t-lg data-[state=active]:bg-white data-[state=active]:border-t data-[state=active]:border-x data-[state=active]:border-slate-200 data-[state=active]:shadow-none -mb-px",
          location.pathname === "/servicos" 
            ? "text-violet-600 bg-white border-t-violet-600" 
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
        )}
      >
        <List size={16} className="mr-1.5" />
        <span className="text-sm font-medium">Lista de Serviços</span>
      </TabsTrigger>
      
      <TabsTrigger
        value="/servicos/novo"
        className={cn(
          "px-4 py-2 rounded-t-lg -mb-px",
          location.pathname === "/servicos/novo" 
            ? "text-violet-600 bg-white border-t-violet-600" 
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
        )}
      >
        <Plus size={16} className="mr-1.5" />
        <span className="text-sm font-medium">Novo Serviço</span>
      </TabsTrigger>
    </TabsList>
  </Tabs>
</div>
```

**Nota:** O menu usa a cor violeta (padrão do módulo Serviços) diferente do verde usado no módulo Vendas. A implementação usa tabs shadcn/ui para consistência com outros módulos.

---

## 8. Critérios de Aceitação

### 8.1 Checklist de Implementação

- [ ] Menu de contexto visível no header da página de Serviços
- [ ] Dois itens: "Lista de Serviços" e "Novo Serviço"
- [ ] Cada item redireciona para a rota correta
- [ ] Item ativo recebe estilo visual diferente
- [ ] Responsivo funciona em mobile (scroll horizontal)
- [ ] Usa componentes shadcn/ui (Tabs)
- [ ] Usa ícones lucide-react
- [ ] Não quebra navegação existente (links existentes)
- [ ] Transições suaves entre estados

### 8.2 Testes Visuais

1. **Acesso Direto:** Ao acessar `/servicos`, ver o menu com "Lista de Serviços" ativo
2. **Navegação:** Clicar em "Novo Serviço" deve navegar para `/servicos/novo`
3. **Navegação:** Clicar em "Lista de Serviços" deve navegar para `/servicos`
4. **Mobile:** Em viewport mobile, menu deve ter scroll horizontal
5. **Hover:** Passar mouse sobre itens deve mostrar estado hover

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

- **Arquivo Principal:** `src/app/components/servicos/ServicosPage.tsx`
- **Rotas:**
  - `/servicos` - Lista de Serviços (atual)
  - `/servicos/novo` - Novo Serviço
  - `/servicos/:id/editar` - Editar Serviço

---

## 11. Considerações Adicionais

- O menu deve ser discreto e não competir com a interface principal da lista de serviços.
- O estilo visual deve harmonizar com o tema violeta do módulo Serviços.
- O botão "Novo Serviço" existente pode coexistir com o menu de navegação ou ser removido em favor do menu tab.
- A rota `/servicos/novo` já está implementada em `ServicoNovoPage.tsx`.

---

*SPEC gerado em: 2026-04-15*
*Planejado para: Fase 1 - Implementação Prioritária*
