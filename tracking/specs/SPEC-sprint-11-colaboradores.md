# SPEC - Sprint 11: Módulo Colaboradores

**Versão:** 1.0  
**Data:** 2026-04-14  
**Status:** PRONTO PARA IMPLEMENTAÇÃO  
**Fase:** Planning (SDD)

---

## 1. Visão Geral do Módulo

### 1.1 Objetivo
Desenvolver a interface completa de gestão de colaboradores e permissões do módulo "Configurações > Colaboradores" para a plataforma UNIQ Empresas.

### 1.2 Stack Técnica
- **Framework:** React 19 + TypeScript 5
- **Build:** Vite 5
- **Estilização:** Tailwind CSS 3.4
- **Componentes:** shadcn/ui (Radix UI) + Lucide Icons
- **Rotas:** React Router v7
- **Estado:** React Hooks (useState, useEffect, useMemo)

---

## 2. Estrutura de Arquivos

Todos os arquivos devem ser criados/modificados dentro de `src/app/`.

### 2.1 Tipos (Types)

**Arquivo:** `src/app/types/employees.ts`
```typescript
// Enumeração de Status
export type EmployeeStatus = 'active' | 'inactive' | 'pending';

// Enumeração de Papéis (Roles)
export type EmployeeRole = 'owner' | 'admin' | 'manager' | 'seller' | 'viewer';

// Enumeração de Tipos de Módulo
export type ModuleType = 'crm' | 'finance' | 'inventory' | 'sales' | 'store' | 'appointments' | 'settings';

// Enumeração de Permissões por Módulo
export type ModulePermission = 'view' | 'create' | 'edit' | 'delete';

// Interface de Acesso a Módulo
export interface ModuleAccess {
  module: ModuleType;
  permissions: ModulePermission[];
}

// Interface de Papel (Role)
export interface Role {
  id: string;
  name: EmployeeRole;
  label: string;
  description: string;
  defaultModules: ModuleType[];
  isSystem: boolean;
}

// Interface Principal de Colaborador
export interface Employee {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: EmployeeRole;
  position?: string;
  avatar?: string;
  status: EmployeeStatus;
  lastAccess?: Date;
  modules: ModuleAccess[];
  createdAt: Date;
  updatedAt: Date;
}
```

### 2.2 Mock Data

**Arquivo:** `src/app/lib/mocks/employees.ts`

Deve exportar:
- `mockEmployees: Employee[]` — Array com 5 colaboradores (Owner, Admin, Manager, Seller, Viewer)
- `mockRoles: Role[]` — Array com 5 papéis do sistema
- `mockModules: ModuleType[]` — Lista de módulos disponíveis

### 2.3 Hooks Customizados

**Arquivo:** `src/app/hooks/useEmployees.ts`
```typescript
// Hook para gerenciar colaboradores (CRUD Mock)
// Retorna: employees, loading, error, addEmployee, updateEmployee, deleteEmployee
```

**Arquivo:** `src/app/hooks/usePermissions.ts`
```typescript
// Hook para gerenciar permissões granulares
// Retorna: permissions, updatePermission, resetToDefault, selectAll, clearAll
```

### 2.4 Componentes de UI

**Pasta:** `src/app/components/employees/`

| Arquivo | Descrição |
|---------|-----------|
| `index.ts` | Barrel export de todos os componentes |
| `EmployeeList.tsx` | Página principal que gerencia visualização (cards/tabela) |
| `EmployeeCard.tsx` | Card individual do colaborador |
| `EmployeeTable.tsx` | Linha de tabela para visualização alternativa |
| `EmployeeHeader.tsx` | Header da página (título, subtítulo, botão adicionar) |
| `EmployeeFilters.tsx` | Barra de filtros e busca |
| `EmployeeDropdown.tsx` | Menu dropdown de ações (editar, permissões, excluir) |
| `ViewToggle.tsx` | Botão toggle Cards/Tabela |
| `EmployeeEmpty.tsx` | Estado vazio |
| `EmployeeSkeleton.tsx` | Skeleton de loading |
| `EmployeeForm.tsx` | Modal/Formulário de cadastro e edição |
| `PermissionMatrix.tsx` | Matriz de toggles para permissões |
| `RoleSelector.tsx` | Seleção visual de papel |
| `ModuleCheckbox.tsx` | Checkbox de seleção de módulo |

### 2.5 Páginas

**Arquivo:** `src/app/components/employees/ColaboradoresPage.tsx`
- Rota principal: `/configuracoes/colaboradores`
- Renderiza `EmployeeList`

---

## 3. Especificação de Componentes

### 3.1 EmployeeList (Página Principal)

**Props Interface:**
```typescript
interface EmployeeListProps {
  // Não requer props externas, gerencia estado internamente
}
```

**Estados Internos (useState):**
- `employees: Employee[]` — Lista de colaboradores
- `filteredEmployees: Employee[]` — Lista filtrada
- `viewMode: 'cards' | 'table'` — Modo de visualização
- `searchQuery: string` — Termo de busca
- `filterStatus: EmployeeStatus | 'all'` — Filtro de status
- `filterRole: EmployeeRole | 'all'` — Filtro de papel
- `isLoading: boolean` — Estado de loading
- `isFormOpen: boolean` — Modal de formulário aberto
- `isPermissionOpen: boolean` — Modal de permissões aberto
- `selectedEmployee: Employee | null` — Colaborador selecionado

**Handlers de Eventos:**
- `handleSearch(query)` — Filtra por nome/email
- `handleStatusFilter(status)` — Aplica filtro de status
- `handleRoleFilter(role)` — Aplica filtro de papel
- `handleViewToggle(mode)` — Alterna cards/tabela
- `handleAddNew()` — Abre modal de adicionar
- `handleEdit(employee)` — Abre modal de edição
- `handleOpenPermissions(employee)` — Abre modal de permissões
- `handleDelete(employee)` — Remove colaborador

**Dependências:**
- `useEmployees` — Hook de dados
- `EmployeeCard` — Renderização em cards
- `EmployeeTable` — Renderização em tabela
- `EmployeeFilters` — Barra de filtros

---

### 3.2 EmployeeCard (Card Individual)

**Props Interface:**
```typescript
interface EmployeeCardProps {
  employee: Employee;
  onEdit: (employee: Employee) => void;
  onPermissions: (employee: Employee) => void;
  onToggleStatus: (employee: Employee) => void;
  onDelete: (employee: Employee) => void;
}
```

**Renderização:**
- Avatar (64px) — Foto ou iniciais
- Badge de Status — Cor por tipo (green/amber/gray)
- Nome e Email
- Badge de Papel — Cor por tipo (purple/blue/green/amber/gray)
- Tags de Módulos — Ícone + Nome dos módulos acessados
- Dropdown de Ações (•••)
- Footer — "Último acesso: [tempo]" ou "Nunca acessou"

**Estilos (Tailwind):**
- Card: `bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow`
- Avatar: `h-16 w-16 rounded-full`
- Badge: `px-2 py-1 rounded-full text-xs font-medium`

---

### 3.3 EmployeeTable (Visualização em Tabela)

**Props Interface:**
```typescript
interface EmployeeTableProps {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onPermissions: (employee: Employee) => void;
  onToggleStatus: (employee: Employee) => void;
  onDelete: (employee: Employee) => void;
}
```

**Colunas:**
1. Colaborador (Avatar + Nome + Email)
2. Cargo (position)
3. Papel (Badge)
4. Módulos (Badges compactos)
5. Último Acesso
6. Status (Badge)
7. Ações (Dropdown)

---

### 3.4 EmployeeForm (Modal de Cadastro/Edição)

**Props Interface:**
```typescript
interface EmployeeFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<Employee>) => void;
  employee?: Employee | null; // Se passado, é modo edição
  isLoading?: boolean;
}
```

**Estados do Formulário:**
1. **Dados Pessoais** (Seção 1)
   - Nome Completo (Input, obrigatório)
   - Email (Input, obrigatório, validação)
   - Telefone (Input, máscara)
   - Cargo/Função (Input)

2. **Permissões** (Seção 2)
   - `RoleSelector` — Cards visuais para seleção de papel
   - `ModuleCheckbox` — Grid de checkboxes para módulos

3. **Configurações Adicionais** (Seção 3)
   - Notificações por Email (Switch)
   - Acesso WhatsApp Business (Switch)

**Validação:**
- Nome: mínimo 2 caracteres
- Email: formato válido + unicidade (mock)
- Campos obrigatórios impedem submit

---

### 3.5 PermissionMatrix (Matriz de Permissões)

**Props Interface:**
```typescript
interface PermissionMatrixProps {
  employee: Employee;
  onSave: (permissions: ModuleAccess[]) => void;
  onCancel: () => void;
  isSaving?: boolean;
}
```

**Estrutura:**
- Header: Avatar + Nome + Badge Papel
- Tabela:
  - Linha por Módulo (7 módulos)
  - Colunas: Módulo | Ver | Criar | Editar | Excluir
- Cada célula: Switch (shadcn/ui)
- Ações Rápidas: "Selecionar Tudo", "Limpar Tudo", "Restaurar Padrão"

**Restrições:**
- Owner: Matriz bloqueada (todos switches disabled)
- Módulos inativos: Toggle "Ver" desabilitado
- Admin: Não pode desabilitar próprio acesso

---

### 3.6 RoleSelector (Seleção de Papel)

**Props Interface:**
```typescript
interface RoleSelectorProps {
  roles: Role[];
  selectedRole: EmployeeRole;
  onChange: (role: EmployeeRole) => void;
  disabled?: boolean;
}
```

**Renderização:**
- Cards visuais para cada papel
- Radio button implícito (seleção única)
- Ícone + Nome + Descrição
- Badge "Recomendado" para Admin

---

### 3.7 ModuleCheckbox (Checkbox de Módulo)

**Props Interface:**
```typescript
interface ModuleCheckboxProps {
  module: ModuleType;
  modules: ModuleType[];
  onChange: (modules: ModuleType[]) => void;
  disabled?: boolean;
}
```

**Renderização:**
- Checkbox com label
- Ícone do módulo (lucide-react)
-Nome do módulo

---

## 4. Rotas

Adicionar em `src/app/routes.tsx`:

```typescript
// Colaboradores
{ path: "/configuracoes/colaboradores", Component: ColaboradoresPage },
```

**Nota:** Os modais de "Novo", "Editar" e "Permissões" serão gerenciados internamente por `EmployeeList` via estado, não como rotas separadas, para manter a experiência fluida (UX pattern).

---

## 5. Integração com shadcn/ui

Os seguintes componentes shadcn/ui devem ser utilizados:

| Componente shadcn | Uso no Módulo |
|-------------------|---------------|
| `Button` | Botões de ação (primário, secundário, ghost) |
| `Card` | Container do EmployeeCard |
| `Badge` | Status, Papel, Módulos |
| `Avatar` | Avatar do colaborador |
| `Dialog` | Modal de formulário e permissões |
| `Input` | Campos de texto, busca |
| `Select` | Filtros de Status e Papel |
| `Checkbox` | Seleção de módulos |
| `Switch` | Toggles de permissão e configurações |
| `Skeleton` | Loading states |
| `DropdownMenu` | Menu de ações do card |
| `Separator` | Divisores de seção no formulário |
| `Toast` (sonner) | Notificações de sucesso/erro |

---

## 6. Checklist de Implementação

### Fase 1: Fundamentos
1. [ ] Criar tipos em `src/app/types/employees.ts`
2. [ ] Criar mock data em `src/app/lib/mocks/employees.ts`
3. [ ] Criar hook `useEmployees.ts`
4. [ ] Criar hook `usePermissions.ts`

### Fase 2: Componentes Base
5. [ ] Criar `EmployeeHeader.tsx`
6. [ ] Criar `EmployeeFilters.tsx`
7. [ ] Criar `ViewToggle.tsx`
8. [ ] Criar `EmployeeEmpty.tsx`
9. [ ] Criar `EmployeeSkeleton.tsx`
10. [ ] Criar `EmployeeDropdown.tsx`

### Fase 3: Componentes de Exibição
11. [ ] Criar `EmployeeCard.tsx`
12. [ ] Criar `EmployeeTable.tsx`
13. [ ] Criar `EmployeeList.tsx` (com integração de estados)

### Fase 4: Componentes de Formulário
14. [ ] Criar `ModuleCheckbox.tsx`
15. [ ] Criar `RoleSelector.tsx`
16. [ ] Criar `PermissionMatrix.tsx`
17. [ ] Criar `EmployeeForm.tsx`

### Fase 5: Integração e Página
18. [ ] Criar `ColaboradoresPage.tsx`
19. [ ] Adicionar rota em `routes.tsx`
20. [ ] Configurar menu lateral (se necessário)

### Fase 6: Testes e Validação
21. [ ] Verificar responsividade (mobile-first)
22. [ ] Testar fluxos de usuário (CRUD)
23. [ ] Testar validações de formulário
24. [ ] Testar matriz de permissões
25. [ ] Aplicar animações e transições

---

## 7. Regras de Negócio (Frontend)

| ID | Regra | Implementação |
|----|-------|---------------|
| RN-01 | Busca case insensitive | Converter para lowercase nos dois lados |
| RN-02 | Filtros aplicados instantaneamente | useEffect com debounce 300ms |
| RN-03 | Toggle Cards/Tabela persiste | Salvar em localStorage ('uniq_employee_view') |
| RN-04 | Máximo 20 colaboradores | Desabilitar botão "Novo" se limite atingido |
| RN-05 | Proprietário não editável | Verificar role === 'owner' antes de permitir |
| RN-06 | Owner não pode ter matriz editada | Desabilitar todos switches se role === 'owner' |

---

## 8. Cores e Estilos

### Status Colors (Tailwind)
- `active`: `bg-green-100 text-green-700 border-green-200`
- `inactive`: `bg-gray-100 text-gray-700 border-gray-200`
- `pending`: `bg-amber-100 text-amber-700 border-amber-200`

### Role Colors (Tailwind)
- `owner`: `bg-purple-100 text-purple-700 border-purple-200`
- `admin`: `bg-blue-100 text-blue-700 border-blue-200`
- `manager`: `bg-green-100 text-green-700 border-green-200`
- `seller`: `bg-amber-100 text-amber-700 border-amber-200`
- `viewer`: `bg-gray-100 text-gray-700 border-gray-200`

---

## 9. Responsividade

- **Mobile (< 640px):**
  - Lista em 1 coluna (cards)
  - Filtros empilhados verticalmente
  - Table ocultada, apenas cards
- **Tablet (640px - 1024px):**
  - Cards em 2 colunas
  - Filtros em linha única
- **Desktop (> 1024px):**
  - Cards em 3 colunas
  - Toggle Cards/Tabela disponível

---

## 10. Validações do Formulário

| Campo | Tipo | Obrigatório | Validação |
|-------|------|-------------|-----------|
| Nome | text | ✅ | Mín 2 caracteres |
| Email | email | ✅ | Regex de email válido |
| Telefone | tel | ❌ | Máscara (00) 00000-0000 |
| Cargo | text | ❌ | Livre |
| Papel | radio | ✅ | selection required |
| Módulos | checkbox | ❌ | Mínimo 1 recomendado |

---

## 11. Acessibilidade (A11y)

- Labels em todos os campos de formulário
-aria-label em botões sem texto
- Focus visível em todos os elementos interativos
- Estados de erro announ ciados
- Navegação por teclado completa

---

## 12. Notas Adicionais

1. **Mock Strategy:** Todos os dados são mockados localmente com delay simulado de 500ms para parecer API real.
2. **Iconography:** Usar exclusivamente `lucide-react` para ícones.
3. **Date Handling:** Usar `Intl.RelativeTimeFormat` para "Há 2h", "Há 3d".
4. **Error Handling:** Todos os erros devem exibir Toast (sonner) com mensagem clara.

---

**Arquivo gerado em:** 2026-04-14  
**Responsável:** @vibe-planner  
**Próximo passo:** Chamar @vibe-implementer para executar a implementação