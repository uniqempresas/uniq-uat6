# SPEC Técnica — Módulo Fornecedores

**Projeto:** UNIQ Empresas  
**Sprint:** 10 (implementação frontend do módulo Fornecedores)  
**Baseado em:** `tracking/modelos/PRD-Sprint08-Fornecedores.md`  
**Data da SPEC:** 2026-04-14  
**Status:** Pronto para implementação  

---

## 1. Visão Geral e Metas

### 1.1 Objetivo
Implementar o módulo completo de **Gestão de Fornecedores** no frontend do UNIQ Empresas, seguindo a filosofia "frontend first com dados mockados". Todas as operações de CRUD devem ser realizadas em memória, com delays simulados para reproduzir a experiência de uma API real.

### 1.2 Metas
- Criar uma listagem rica de fornecedores com filtros, busca e visualização em grid.
- Implementar formulário completo de cadastro/edição com abas (Tabs).
- Desenvolver drawer de detalhes usando `Sheet` do shadcn/ui.
- Suportar múltiplos contatos, múltiplas contas bancárias e busca de CEP simulada.
- Garantir preview em tempo real do card do fornecedor durante o cadastro.
- Manter 100% de consistência com o design system e padrões de código existentes no projeto.

### 1.3 Fora de Escopo
- Integração com backend real (será Sprint 25).
- Validação de CNPJ via API externa (ReceitaWS).
- Upload real de imagens para storage (usar `URL.createObjectURL` para preview local).

---

## 2. Estrutura de Arquivos Final

Todos os caminhos são relativos à pasta `src/`.

### 2.1 Páginas (Route Components)
```
src/app/components/fornecedores/
├── FornecedoresPage.tsx              # /fornecedores — listagem principal
├── FornecedorNovoPage.tsx            # /fornecedores/novo — cadastro
├── FornecedorDetalhePage.tsx         # /fornecedores/:id — detalhes (fallback se drawer não for usado)
└── FornecedorEditarPage.tsx          # /fornecedores/:id/editar — edição
```

### 2.2 Componentes do Módulo
```
src/app/components/fornecedores/
├── SupplierGrid.tsx                  # Grid responsivo de cards
├── SupplierCard.tsx                  # Card individual do fornecedor
├── SupplierFilters.tsx               # Barra de filtros, tabs de status e busca
├── SupplierForm.tsx                  # Formulário completo (wrapper com Tabs + preview)
├── SupplierDetailsDrawer.tsx         # Drawer lateral de detalhes (Sheet)
├── SupplierRating.tsx                # Componente de estrelas (interativo e readonly)
├── SupplierStats.tsx                 # Cards de métricas do fornecedor
├── ContactList.tsx                   # Gerenciamento de lista de contatos
├── ContactCard.tsx                   # Card individual de contato
├── BankAccountList.tsx               # Gerenciamento de lista de contas bancárias
├── BankAccountCard.tsx               # Card individual de conta bancária
├── CEPSearch.tsx                     # Input de CEP com busca simulada
└── PurchaseHistory.tsx               # Tabela de histórico de compras
```

### 2.3 Hooks Customizados
```
src/app/hooks/
├── useSuppliers.ts                   # CRUD mock de fornecedores
├── useSupplierForm.ts                # Gerenciamento de estado do formulário multi-aba
└── useCEPSearch.ts                   # Busca ViaCEP simulada
```

> **Nota:** O projeto atualmente não possui pasta `src/app/hooks/`. Criar essa pasta é necessário para centralizar hooks reutilizáveis. Caso o implementer prefira seguir o padrão mais monolítico do projeto, os hooks podem ficar em `src/app/components/fornecedores/hooks/`, mas a recomendação é `src/app/hooks/` para iniciar a padronização.

### 2.4 Dados Mockados e Tipos
```
src/app/lib/mocks/
├── suppliers.ts                      # mockSuppliers, mockCategories, mockCEPData
└── banks.ts                          # Lista de bancos para select (opcional, pode ser inline)

src/app/types/
└── suppliers.ts                      # Todos os tipos TypeScript do módulo
```

> **Nota:** O projeto atualmente coloca tipos e mocks juntos no mesmo arquivo do módulo (ex: `crmMockData.ts`). Para o módulo Fornecedores, separar em `types/suppliers.ts` e `lib/mocks/suppliers.ts` é a recomendação do PRD. O implementer pode optar por manter tudo em um único arquivo `fornecedoresMockData.ts` dentro de `src/app/components/fornecedores/` se quiser seguir estritamente o padrão existente. **A SPEC assume a separação recomendada.**

### 2.5 Utilitários
```
src/app/lib/
├── document-mask.ts                  # Funções de máscara: CNPJ, CPF, CEP, telefone
└── validators.ts                     # Funções auxiliares de validação (CNPJ, CPF)
```

### 2.6 Arquivos a Modificar
```
src/app/routes.tsx                    # Adicionar rotas do módulo
src/app/components/layout/AppLayout.tsx # Adicionar item "Fornecedores" no NAV_ITEMS
```

---

## 3. Componentes — Especificação Detalhada

### 3.1 `FornecedoresPage` (Página `/fornecedores`)

**Responsabilidade:** Página principal de listagem. Controla estado de filtros, visualização selecionada, paginação e abertura do drawer de detalhes.

**Props:** Nenhuma (route component).

**Estados internos:**
- `viewMode: 'grid' | 'list'` — alternar entre grid e tabela (grid como padrão).
- `searchQuery: string` — texto da busca.
- `selectedCategory: string` — filtro por categoria ("todas" como padrão).
- `selectedStatus: 'all' | 'active' | 'inactive' | 'pending'` — filtro por status.
- `currentPage: number` — página atual da paginação.
- `itemsPerPage: number` — itens por página (padrão: 9).
- `selectedSupplierId: string | null` — controla abertura do drawer.
- `isDeleteDialogOpen: boolean` — controla modal de confirmação de exclusão.
- `supplierToDelete: Supplier | null` — fornecedor selecionado para exclusão.
- `sortBy: 'name' | 'rating' | 'totalSpent'` — critério de ordenação.
- `sortOrder: 'asc' | 'desc'` — direção da ordenação.

**Handlers:**
- `handleSearchChange(value: string)` — atualiza `searchQuery` e reseta página.
- `handleCategoryChange(categoryId: string)` — atualiza categoria e reseta página.
- `handleStatusChange(status)` — atualiza status e reseta página.
- `handleSortChange(field)` — alterna ordenação.
- `handlePageChange(page)` — atualiza página atual.
- `handleViewSupplier(id)` — abre drawer com fornecedor selecionado.
- `handleEditSupplier(id)` — navega para `/fornecedores/${id}/editar`.
- `handleDeleteClick(supplier)` — abre diálogo de confirmação.
- `handleConfirmDelete()` — chama `deleteSupplier` do hook `useSuppliers`.

**Efeitos colaterais:**
- `useEffect` para resetar `currentPage` para 1 sempre que filtros ou busca mudarem.
- `useEffect` para fechar o drawer ao mudar de rota (caso necessário).

**Dependências:**
- `useSuppliers`
- `SupplierFilters`
- `SupplierGrid`
- `SupplierDetailsDrawer`
- `Dialog` (shadcn) para confirmação de exclusão
- Componentes shadcn: `Button`, `Tabs`, `Dialog`, `Skeleton`

**Observações técnicas:**
- Usar o padrão de container `p-4 sm:p-6 max-w-7xl mx-auto`.
- Header da página deve ter título "Fornecedores" com contador de resultados ao lado.
- Botão "Novo Fornecedor" no canto superior direito, com gradiente emerald (`linear-gradient(135deg, #1B6B3A, #15803d)`), navegando para `/fornecedores/novo`.
- Implementar empty state customizado quando não houver resultados (ícone + texto "Nenhum fornecedor encontrado").
- Implementar skeleton loading enquanto `useSuppliers` estiver no estado `isLoading`.

---

### 3.2 `SupplierGrid`

**Responsabilidade:** Renderizar o grid responsivo de cards ou a visualização em tabela/lista.

**Props Interface:**
```typescript
interface SupplierGridProps {
  suppliers: Supplier[];
  viewMode: 'grid' | 'list';
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (supplier: Supplier) => void;
  isLoading?: boolean;
}
```

**Estados internos:** Nenhum (componente puramente apresentacional).

**Efeitos colaterais:** Nenhum.

**Handlers:** Nenhum (delega via props).

**Dependências:**
- `SupplierCard`
- `Table` (shadcn) para visualização em lista
- `Skeleton` (shadcn) para loading

**Observações técnicas:**
- Grid responsivo: `grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4`.
- Se `isLoading` for true, renderizar 6 skeleton cards com a mesma estrutura do card.
- Visualização em lista: usar `Table` do shadcn com colunas: Nome, CNPJ, Categoria, Status, Rating, Ações.

---

### 3.3 `SupplierCard`

**Responsabilidade:** Card individual exibindo resumo do fornecedor.

**Props Interface:**
```typescript
interface SupplierCardProps {
  supplier: Supplier;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (supplier: Supplier) => void;
}
```

**Estados internos:**
- `isHovered: boolean` — controla exibição de ações rápidas e elevação do card.

**Efeitos colaterais:** Nenhum.

**Handlers:**
- `handleCardClick()` — chama `onView(supplier.id)`.
- `handleEditClick(e)` — `e.stopPropagation()` + `onEdit(supplier.id)`.
- `handleDeleteClick(e)` — `e.stopPropagation()` + `onDelete(supplier)`.

**Dependências:**
- `SupplierRating` (readonly)
- Ícones do Lucide: `Building2`, `Mail`, `Phone`, `MapPin`, `Eye`, `Edit2`, `Trash2`
- `Badge` (shadcn) para categoria e status

**Observações técnicas:**
- Estrutura visual conforme wireframe do PRD (seção 5.1).
- Avatar/logo: usar `Avatar` do shadcn. Se não houver logo, mostrar ícone `Building2` ou iniciais.
- Status mapeado para cores:
  - `active`: `bg-green-100 text-green-700`
  - `inactive`: `bg-red-100 text-red-700`
  - `pending`: `bg-yellow-100 text-yellow-700`
- Exibir métricas resumidas: `totalSpent` (formatado como moeda) e `totalPurchases`.
- Ações rápidas (Ver, Editar, Excluir) devem aparecer apenas no hover (desktop) ou sempre visíveis (mobile).
- Animação sutil de hover: `hover:shadow-md hover:-translate-y-0.5 transition-all`.

---

### 3.4 `SupplierFilters`

**Responsabilidade:** Barra de filtros, busca, tabs de status e controle de ordenação.

**Props Interface:**
```typescript
interface SupplierFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  selectedStatus: 'all' | 'active' | 'inactive' | 'pending';
  onStatusChange: (status: 'all' | 'active' | 'inactive' | 'pending') => void;
  sortBy: 'name' | 'rating' | 'totalSpent';
  onSortChange: (field: 'name' | 'rating' | 'totalSpent') => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  resultCount: number;
  categories: Category[];
}
```

**Estados internos:** Nenhum.

**Efeitos colaterais:** Nenhum.

**Handlers:**
- Cada input/select chama seu respectivo callback via props.
- Botão de limpar filtros: reseta todos os filtros para o padrão.

**Dependências:**
- Componentes shadcn: `Input`, `Select`, `Tabs`, `Button`, `Badge`
- Ícones: `Search`, `Filter`, `LayoutGrid`, `List`, `X`, `ArrowUpDown`

**Observações técnicas:**
- Tabs de status devem mostrar contadores: `Todos (45)`, `Ativos (38)`, etc. (os contadores são calculados externamente e passados via `categories` ou computados na página).
- Campo de busca deve ter ícone `Search` e placeholder "Buscar por nome, CNPJ ou razão social...".
- Select de categoria deve listar todas as categorias disponíveis + "Todas".
- Select de ordenação: "Nome A-Z", "Maior avaliação", "Maior volume de compras".
- Toggle de visualização: ícones `LayoutGrid` / `List`.

---

### 3.5 `SupplierForm` (Usado em `/fornecedores/novo` e `/fornecedores/:id/editar`)

**Responsabilidade:** Formulário completo de cadastro/edição com abas e preview em tempo real do card.

**Props Interface:**
```typescript
interface SupplierFormProps {
  supplier?: Supplier;          // undefined para modo criação
  mode: 'create' | 'edit';
  onSubmit: (data: SupplierFormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}
```

> **Nota:** `SupplierFormData` é um tipo derivado do schema Zod (sem `id`, `createdAt`, `updatedAt`, `totalPurchases`, `totalSpent`, `averageTicket`, `lastPurchase`).

**Estados internos:**
- `activeTab: 'basic' | 'address' | 'contacts' | 'bank' | 'settings'` — aba ativa.
- `formData: SupplierFormData` — dados do formulário (controlado).
- `previewSupplier: Partial<Supplier>` — dados combinados para renderizar o preview do card.

**Efeitos colaterais:**
- `useEffect` para inicializar `formData` quando `supplier` prop mudar (modo edição).
- `useEffect` para atualizar `previewSupplier` sempre que `formData` mudar.

**Handlers:**
- `handleTabChange(tab)` — muda aba ativa.
- `handleBasicChange(field, value)` — atualiza campos da aba básica.
- `handleAddressChange(field, value)` — atualiza campos de endereço.
- `handleContactsChange(contacts)` — recebe array atualizado de contatos.
- `handleBankAccountsChange(accounts)` — recebe array atualizado de contas.
- `handleSettingsChange(field, value)` — atualiza campos de configurações.
- `handleSubmit(e)` — previne default, monta objeto final e chama `onSubmit`.
- `handleCancel()` — chama `onCancel`.

**Dependências:**
- `SupplierRating` (modo interativo)
- `ContactList`
- `BankAccountList`
- `CEPSearch`
- `SupplierCard` (para preview)
- Componentes shadcn: `Tabs`, `TabList`, `TabTrigger`, `TabContent`, `Input`, `Label`, `Select`, `Textarea`, `Checkbox`, `RadioGroup`, `Button`, `Separator`

**Observações técnicas:**
- **OBRIGATÓRIO:** Usar `react-hook-form` + `zod` para validação. O estado local pode ser sincronizado com RHF via `watch()` para alimentar o preview.
- Layout em 2 colunas no desktop: coluna esquerda com o formulário (ocupa 2/3), coluna direita com preview do card (ocupa 1/3).
- No mobile, o preview pode ficar acima do formulário ou ser ocultado.
- Aba **Dados Básicos**: tipo (PJ/PF radio), documento (CNPJ/CPF com máscara dinâmica), razão social, nome fantasia, categoria (select), rating (interativo), upload de logo (input file com preview via `URL.createObjectURL`).
- Aba **Endereço**: CEP com busca, logradouro, número, complemento, bairro, cidade, estado (select de UF).
- Aba **Contatos**: componente `ContactList` com adição/remoção dinâmica.
- Aba **Dados Bncários**: componente `BankAccountList` com adição/remoção dinâmica.
- Aba **Configurações**: condição de pagamento (select), observações (textarea), checkbox "Fornecedor ativo".
- Botões de navegação entre abas no rodapé de cada aba: "Próxima" / "Anterior".
- Botões principais no topo da página: "Cancelar" (outline) e "Salvar Fornecedor" (primário).

---

### 3.6 `SupplierDetailsDrawer`

**Responsabilidade:** Drawer lateral (Sheet) para visualização completa dos detalhes do fornecedor.

**Props Interface:**
```typescript
interface SupplierDetailsDrawerProps {
  supplier: Supplier | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (id: string) => void;
  onInactivate: (id: string) => void;
}
```

**Estados internos:**
- `activeTab: 'overview' | 'contacts' | 'history'` — abas internas do drawer.

**Efeitos colaterais:**
- `useEffect` para resetar `activeTab` para `'overview'` sempre que `isOpen` mudar para true.

**Handlers:**
- `handleEdit()` — `onEdit(supplier.id)`.
- `handleInactivate()` — `onInactivate(supplier.id)`.
- `handleWhatsApp(phone)` — abre `https://wa.me/55{phoneLimpo}`.
- `handleCopy(text)` — `navigator.clipboard.writeText(text)` + toast de sucesso.

**Dependências:**
- `Sheet` (shadcn) — **OBRIGATÓRIO**
- `SupplierRating` (readonly)
- `SupplierStats`
- `ContactCard`
- `PurchaseHistory`
- Componentes shadcn: `Tabs`, `Button`, `Badge`, `Avatar`, `Separator`, `ScrollArea`
- Ícones: `X`, `Edit2`, `FileText`, `Power`, `Mail`, `Phone`, `MapPin`, `Copy`, `MessageCircle`

**Observações técnicas:**
- O drawer deve abrir pela direita (`side="right"`).
- Largura: `sm:max-w-lg md:max-w-2xl` (customizar via `className` no `SheetContent`).
- No mobile, deve ocupar quase toda a tela.
- Header do drawer: logo/nome do fornecedor, rating, botão de fechar e botão "Editar".
- Corpo dividido em abas: **Resumo**, **Contatos**, **Histórico**.
- Aba Resumo: exibe `SupplierStats` + endereço formatado + dados bancários resumidos.
- Aba Contatos: lista de `ContactCard` com ações de copiar/email/WhatsApp.
- Aba Histórico: `PurchaseHistory` com paginação interna (últimas 5 compras + link "Ver todas").
- Footer do drawer: ações de "Inativar Fornecedor", "Gerar Relatório" (mock), "Editar Fornecedor".

---

### 3.7 `SupplierRating`

**Responsabilidade:** Sistema de avaliação por estrelas.

**Props Interface:**
```typescript
interface SupplierRatingProps {
  value: number;        // 0.0 a 5.0
  onChange?: (value: number) => void;
  readonly?: boolean;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  reviewCount?: number;
}
```

**Estados internos:**
- `hoverValue: number | null` — valor temporário no hover (apenas quando não readonly).

**Efeitos colaterais:** Nenhum.

**Handlers:**
- `handleStarClick(starIndex)` — `onChange?.(starIndex)`.
- `handleStarEnter(starIndex)` — seta `hoverValue`.
- `handleStarLeave()` — limpa `hoverValue`.

**Dependências:**
- Ícone `Star` do Lucide (preenchido ou vazio).

**Observações técnicas:**
- Suportar meias estrelas? **Não para a interação por click** (simplificar: estrelas inteiras de 1 a 5). O valor pode ser decimal (ex: 4.5) e deve ser renderizado visualmente.
- Para valores decimais, preencher a estrela parcialmente ou usar estrela "half-filled". Implementação sugerida: usar `fill` com `clipPath` ou aceitar apenas estrelas inteiras no click e manter a exibição arredondada para a mais próxima (ex: 4.5 mostra 4.5 visualmente usando `width` percentual em uma estrela).
- Cor das estrelas: `#fbbf24` (amber-400).
- Texto ao lado: "4.5" ou "4.5 (23 avaliações)" quando `showValue` e `reviewCount` estiverem presentes.

---

### 3.8 `ContactList` / `ContactCard`

**Responsabilidade:** Gerenciamento e exibição de contatos.

#### `ContactList`

**Props Interface:**
```typescript
interface ContactListProps {
  contacts: Contact[];
  onChange: (contacts: Contact[]) => void;
  maxContacts?: number;
}
```

**Estados internos:**
- `editingContactId: string | null` — ID do contato sendo editado inline.

**Handlers:**
- `handleAddContact()` — adiciona novo contato vazio ao array.
- `handleRemoveContact(id)` — remove contato do array.
- `handleUpdateContact(id, field, value)` — atualiza campo do contato.
- `handleSetPrimary(id)` — define um contato como principal e os demais como não-principais.

**Dependências:**
- `ContactCard`
- `Button`, `Input`, `Label` (shadcn)
- Ícones: `Plus`, `X`, `Star`, `User`

**Observações técnicas:**
- Botão "+ Adicionar Contato" no topo.
- Máximo de contatos: padrão ilimitado (`maxContacts` opcional).
- Validar que apenas um contato tenha `isPrimary = true`.
- Ao adicionar, o primeiro contato deve ser automaticamente `isPrimary = true`.

#### `ContactCard`

**Props Interface:**
```typescript
interface ContactCardProps {
  contact: Contact;
  onUpdate: (updated: Contact) => void;
  onRemove: () => void;
  onSetPrimary: () => void;
  isEditing?: boolean;
}
```

**Observações técnicas:**
- Estrutura conforme wireframe do PRD (seção 5.3).
- Campos editáveis inline (nome, cargo, email, telefone, celular).
- Checkbox/toggle para marcar como principal.
- Ícone `Star` preenchido para contato principal.
- Máscaras de telefone e email aplicadas durante digitação.

---

### 3.9 `BankAccountList` / `BankAccountCard`

**Responsabilidade:** Gerenciamento e exibição de contas bancárias.

#### `BankAccountList`

**Props Interface:**
```typescript
interface BankAccountListProps {
  accounts: BankAccount[];
  onChange: (accounts: BankAccount[]) => void;
}
```

**Handlers:**
- `handleAddAccount()` — adiciona conta vazia.
- `handleRemoveAccount(id)` — remove conta.
- `handleUpdateAccount(id, field, value)` — atualiza campo.
- `handleSetPrimary(id)` — define conta principal.

**Dependências:**
- `BankAccountCard`
- `Button`, `Select`, `Input` (shadcn)
- Ícones: `Plus`, `X`, `Landmark`, `Star`

#### `BankAccountCard`

**Props Interface:**
```typescript
interface BankAccountCardProps {
  account: BankAccount;
  onUpdate: (updated: BankAccount) => void;
  onRemove: () => void;
  onSetPrimary: () => void;
}
```

**Observações técnicas:**
- Campos: Banco (select com nome + código), Agência, Conta, Tipo (Corrente/Poupança — radio), Pix Tipo (select), Pix Chave.
- O select de banco pode usar uma lista estática dos principais bancos brasileiros.
- Quando o usuário selecionar um tipo de Pix `cnpj` ou `cpf`, preencher automaticamente com o documento do fornecedor (se disponível no contexto). Passar o documento via prop opcional `supplierDocument?: string`.
- Máscaras: agência e conta podem ser alfanuméricas (não aplicar máscara rígida, apenas limitar caracteres).

---

### 3.10 `CEPSearch`

**Responsabilidade:** Input de CEP com botão de busca e preenchimento automático de endereço.

**Props Interface:**
```typescript
interface CEPSearchProps {
  value: string;
  onChange: (value: string) => void;
  onAddressFound: (address: { cep: string; logradouro: string; bairro: string; cidade: string; estado: string }) => void;
  onError: (error: string) => void;
  disabled?: boolean;
}
```

**Estados internos:**
- `isLoading: boolean` — estado de busca.

**Efeitos colaterais:**
- `useEffect` para disparar busca automaticamente quando o CEP atingir 8 dígitos (com debounce de 400ms).

**Handlers:**
- `handleInputChange(e)` — aplica máscara de CEP e chama `onChange`.
- `handleSearchClick()` — dispara busca manualmente.
- `performSearch(cep)` — limpa caracteres não numéricos, consulta mock, simula delay.

**Dependências:**
- `Input`, `Button` (shadcn)
- Ícones: `Search`, `MapPin`, `Loader2`
- `useCEPSearch` (hook)

**Observações técnicas:**
- Máscara automática: `00000-000`.
- Botão de busca com ícone de lupa ao lado do input.
- Estados visuais: input normal, loading (spinner no botão), sucesso (borda verde sutil ou ícone de check), erro (mensagem abaixo do input).
- Mock de CEPs: suportar pelo menos os 3 CEPs do mock data (`01310-100`, `20040-001`, `30130-000`). Para CEPs desconhecidos, retornar erro amigável: "CEP não encontrado. Verifique o número digitado."

---

### 3.11 `PurchaseHistory`

**Responsabilidade:** Tabela de histórico de compras do fornecedor.

**Props Interface:**
```typescript
interface Purchase {
  id: string;
  orderNumber: string;
  date: string;
  items: number;
  total: number;
  status: 'received' | 'pending' | 'cancelled';
}

interface PurchaseHistoryProps {
  purchases: Purchase[];
  maxItems?: number;
  showPagination?: boolean;
}
```

**Estados internos:**
- `currentPage: number` (se `showPagination` for true).

**Dependências:**
- `Table`, `Badge`, `Button` (shadcn)
- Ícones: `Eye`, `FileText`, `Package`, `CheckCircle2`, `Clock`, `XCircle`

**Observações técnicas:**
- Colunas: Pedido, Data, Produtos, Valor, Status, Ações.
- Status mapeado para badge colorido:
  - `received`: verde (`bg-green-100 text-green-700`)
  - `pending`: âmbar (`bg-yellow-100 text-yellow-700`)
  - `cancelled`: vermelho (`bg-red-100 text-red-700`)
- Formatação de data: `dd/MM/yyyy` usando `date-fns`.
- Formatação de moeda: `formatCurrency` helper.
- Ações: ícones de "visualizar" e "nota fiscal" (mock, sem funcionalidade real).

---

### 3.12 `SupplierStats`

**Responsabilidade:** Cards de estatísticas do fornecedor para o drawer de detalhes.

**Props Interface:**
```typescript
interface SupplierStatsProps {
  totalPurchases: number;
  totalSpent: number;
  averageTicket: number;
  lastPurchase: string | null;
}
```

**Estados internos:** Nenhum.

**Dependências:**
- Ícones: `Package`, `DollarSign`, `TrendingUp`, `Calendar`

**Observações técnicas:**
- Grid de 2 colunas (`grid-cols-2 gap-3`).
- 4 cards:
  1. Total de Pedidos (ícone `Package`)
  2. Valor Total Comprado (ícone `DollarSign`)
  3. Ticket Médio (ícone `TrendingUp`)
  4. Última Compra (ícone `Calendar`)
- Estilo: `bg-slate-50 rounded-xl p-3`.
- Valores nulos devem ser exibidos como "—".

---

## 4. Mock Data e Tipos

### 4.1 Tipos TypeScript

Salvar em `src/app/types/suppliers.ts`:

```typescript
export type SupplierStatus = 'active' | 'inactive' | 'pending';
export type DocumentType = 'cnpj' | 'cpf';
export type BankAccountType = 'checking' | 'savings';
export type PixType = 'cnpj' | 'cpf' | 'email' | 'phone' | 'random';

export interface Address {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface Contact {
  id: string;
  name: string;
  role?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  isPrimary: boolean;
}

export interface BankAccount {
  id: string;
  bank: string;
  bankName: string;
  agency: string;
  account: string;
  accountType: BankAccountType;
  pixKey?: string;
  pixType?: PixType;
  isPrimary: boolean;
}

export interface Supplier {
  id: string;
  name: string;
  legalName: string;
  document: string;
  documentType: DocumentType;
  category: string;
  rating: number;
  ratingCount: number;
  status: SupplierStatus;
  email?: string;
  phone?: string;
  address: Address;
  contacts: Contact[];
  bankAccounts: BankAccount[];
  paymentTerms?: string;
  notes?: string;
  logo?: string | null;
  totalPurchases: number;
  totalSpent: number;
  lastPurchase: string | null;
  averageTicket: number;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface Purchase {
  id: string;
  orderNumber: string;
  date: string;
  items: number;
  total: number;
  status: 'received' | 'pending' | 'cancelled';
}
```

### 4.2 Mock Data

Salvar em `src/app/lib/mocks/suppliers.ts`:

- Exportar `mockSuppliers: Supplier[]` com pelo menos 8 fornecedores variados (ativos, inativos, pendentes, diferentes categorias).
- Exportar `mockCategories: Category[]` com as categorias do PRD.
- Exportar `mockCEPData: Record<string, { cep, logradouro, bairro, cidade, estado }>` com os 3 CEPs do PRD.
- Exportar `mockPurchases: Record<string, Purchase[]>` — histórico de compras por `supplierId`.
- Exportar `BANKS_LIST: { code: string; name: string }[]` — lista dos 10 principais bancos brasileiros para selects.

### 4.3 Hooks Mock — Simulação de Delay

Todos os hooks que simulam API devem usar uma função utilitária de delay:

```typescript
// src/app/lib/mocks/delay.ts
export const mockDelay = (ms: number = 600) => 
  new Promise((resolve) => setTimeout(resolve, ms));
```

**Regras de delay:**
- Listagem: 400ms
- Busca por ID: 300ms
- Criação: 800ms
- Atualização: 800ms
- Exclusão: 600ms
- Busca CEP: 500ms

---

## 5. Rotas

### 5.1 Alterações em `src/app/routes.tsx`

Adicionar os imports no topo:
```typescript
// Fornecedores
import { FornecedoresPage } from "./components/fornecedores/FornecedoresPage";
import { FornecedorNovoPage } from "./components/fornecedores/FornecedorNovoPage";
import { FornecedorDetalhePage } from "./components/fornecedores/FornecedorDetalhePage";
import { FornecedorEditarPage } from "./components/fornecedores/FornecedorEditarPage";
```

Adicionar dentro do `children` do `AppLayout`:
```typescript
{ path: "/fornecedores", Component: FornecedoresPage },
{ path: "/fornecedores/novo", Component: FornecedorNovoPage },
{ path: "/fornecedores/:id", Component: FornecedorDetalhePage },
{ path: "/fornecedores/:id/editar", Component: FornecedorEditarPage },
```

### 5.2 Alterações em `src/app/components/layout/AppLayout.tsx`

Adicionar ícone `Truck` (ou `Package`) ao import do Lucide.

Inserir novo item no array `NAV_ITEMS`:
```typescript
{
  id: "fornecedores",
  label: "Fornecedores",
  icon: Truck, // ou Package
  path: "/fornecedores",
  badge: 0,
},
```

Posição sugerida: após "Estoque" e antes de "Agenda".

---

## 6. Hooks Customizados

### 6.1 `useSuppliers`

**Localização:** `src/app/hooks/useSuppliers.ts`

**Retorno:**
```typescript
interface UseSuppliersReturn {
  suppliers: Supplier[];
  isLoading: boolean;
  error: string | null;
  getSupplierById: (id: string) => Supplier | undefined;
  createSupplier: (data: SupplierFormData) => Promise<Supplier>;
  updateSupplier: (id: string, data: Partial<SupplierFormData>) => Promise<Supplier>;
  deleteSupplier: (id: string) => Promise<void>;
  refresh: () => Promise<void>;
}
```

**Comportamento:**
- Inicializar estado `suppliers` com `mockSuppliers`.
- `isLoading` true apenas durante operações assíncronas.
- `getSupplierById`: busca síncrona no array (pode ter delay opcional).
- `createSupplier`: gera UUID (`crypto.randomUUID()` ou `Date.now()` string), adiciona timestamps, campos calculados (`totalPurchases: 0`, `totalSpent: 0`, `averageTicket: 0`), insere no início do array.
- `updateSupplier`: mescla dados, atualiza `updatedAt`.
- `deleteSupplier`: remove do array após delay.
- Todas as operações devem usar `mockDelay` e `toast.success()` / `toast.error()` da lib `sonner` para feedback.

### 6.2 `useSupplierForm`

**Localização:** `src/app/hooks/useSupplierForm.ts`

**Retorno:**
```typescript
interface UseSupplierFormReturn {
  form: UseFormReturn<SupplierFormData>;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  contacts: Contact[];
  setContacts: (contacts: Contact[]) => void;
  bankAccounts: BankAccount[];
  setBankAccounts: (accounts: BankAccount[]) => void;
  previewData: Partial<Supplier>;
}
```

**Comportamento:**
- Wrapper sobre `useForm` do react-hook-form com resolver Zod.
- Inicializar valores padrão:
  ```typescript
  {
    documentType: 'cnpj',
    status: 'active',
    rating: 0,
    contacts: [],
    bankAccounts: [],
    address: { cep: '', street: '', number: '', neighborhood: '', city: '', state: '' },
    category: '',
    paymentTerms: '',
    notes: '',
  }
  ```
- Sincronizar `contacts` e `bankAccounts` como campos controlados do formulário (usar `useFieldArray` ou simplesmente sincronizar estado externo com `setValue`).
- `previewData`: combinar valores atuais do `watch()` do RHF com defaults de fornecedor para alimentar o `SupplierCard` de preview.

### 6.3 `useCEPSearch`

**Localização:** `src/app/hooks/useCEPSearch.ts`

**Retorno:**
```typescript
interface UseCEPSearchReturn {
  searchCEP: (cep: string) => Promise<{ success: boolean; data?: AddressData; error?: string }>;
  isLoading: boolean;
}
```

**Comportamento:**
- Limpa caracteres não numéricos do CEP.
- Valida se possui 8 dígitos.
- Simula delay de 500ms.
- Consulta `mockCEPData`.
- Retorna erro padronizado se não encontrado.

---

## 7. Integrações com Componentes Existentes

### 7.1 `AppLayout`
- Adicionar item "Fornecedores" no `NAV_ITEMS` conforme seção 5.2.
- O `AppLayout` já envolve todas as rotas internas, então as páginas do módulo herdarão sidebar, header e container de scroll automaticamente.

### 7.2 Componentes shadcn/ui
Lista completa de componentes shadcn que **devem ser usados** no módulo:

| Componente | Uso |
|------------|-----|
| `Button` | Botões de ação em todas as telas |
| `Input` | Campos de texto |
| `Label` | Labels de formulário |
| `Select` | Dropdowns de categoria, banco, estado, condição pagamento |
| `Textarea` | Observações internas |
| `Checkbox` | Status ativo/inativo |
| `RadioGroup` | Seleção PJ/PF, tipo de conta bancária |
| `Badge` | Status, categorias, tags |
| `Avatar` | Logo do fornecedor |
| `Dialog` | Confirmação de exclusão |
| `Sheet` | Drawer de detalhes (**OBRIGATÓRIO**) |
| `Tabs` | Abas do formulário e do drawer |
| `Table` | Histórico de compras e visualização em lista |
| `Skeleton` | Estados de loading |
| `Separator` | Divisores visuais |
| `ScrollArea` | Scroll em listas longas dentro do drawer |
| `Tooltip` | Tooltips informativos (opcional) |

### 7.3 Padrões de Estilo a Seguir
- Container das páginas: `p-4 sm:p-6 max-w-7xl mx-auto`.
- Cards: `bg-white rounded-2xl border border-slate-100 shadow-sm p-5`.
- Botão primário: gradiente emerald, texto branco, `rounded-xl`.
- Botão secundário: `bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-xl`.
- Títulos de página: `text-slate-900 font-bold text-lg` (ou `text-2xl` se preferir maior, seguindo PRD).
- Cores de status conforme PRD seção 2.1 e 9.5.

### 7.4 Notificações
- Usar `sonner` para todos os feedbacks de ação:
  - Sucesso ao salvar: `toast.success("Fornecedor salvo com sucesso!")`
  - Erro na busca de CEP: `toast.error("CEP não encontrado")`
  - Sucesso ao excluir: `toast.success("Fornecedor excluído")`

---

## 8. Checklist Técnico de Implementação (Ordenado)

1. **Setup de Estrutura**
   - [ ] Criar pastas `src/app/components/fornecedores/`, `src/app/hooks/`, `src/app/types/`, `src/app/lib/mocks/`.
   - [ ] Copiar/adaptar tipos TypeScript para `src/app/types/suppliers.ts`.
   - [ ] Criar arquivo de mocks `src/app/lib/mocks/suppliers.ts` com dados completos.
   - [ ] Criar utilitários `src/app/lib/document-mask.ts` e `src/app/lib/validators.ts`.

2. **Hooks Base**
   - [ ] Implementar `useCEPSearch` com delay simulado.
   - [ ] Implementar `useSuppliers` com CRUD em memória e delays.
   - [ ] Implementar `useSupplierForm` integrando react-hook-form + Zod.

3. **Componentes Atômicos**
   - [ ] Implementar `SupplierRating` (interativo e readonly).
   - [ ] Implementar `CEPSearch` com busca automática.
   - [ ] Implementar `ContactCard` e `ContactList`.
   - [ ] Implementar `BankAccountCard` e `BankAccountList`.
   - [ ] Implementar `SupplierStats`.
   - [ ] Implementar `PurchaseHistory`.

4. **Componentes Compostos**
   - [ ] Implementar `SupplierCard` com hover actions.
   - [ ] Implementar `SupplierGrid` com modos grid/lista + skeletons.
   - [ ] Implementar `SupplierFilters` com tabs, busca e ordenação.
   - [ ] Implementar `SupplierDetailsDrawer` usando `Sheet` do shadcn.

5. **Formulário Principal**
   - [ ] Implementar `SupplierForm` com Tabs (básicos, endereço, contatos, bancários, configurações).
   - [ ] Garantir preview em tempo real do `SupplierCard` no lado direito.
   - [ ] Integrar validação Zod em todas as abas.

6. **Páginas e Rotas**
   - [ ] Criar `FornecedoresPage` com listagem completa, filtros e drawer.
   - [ ] Criar `FornecedorNovoPage` renderizando `SupplierForm` em modo create.
   - [ ] Criar `FornecedorEditarPage` renderizando `SupplierForm` em modo edit.
   - [ ] Criar `FornecedorDetalhePage` como fallback (ou redirecionar para listagem + drawer).
   - [ ] Registrar todas as rotas em `src/app/routes.tsx`.
   - [ ] Adicionar "Fornecedores" no `NAV_ITEMS` de `AppLayout.tsx`.

7. **Validação e Máscaras**
   - [ ] Implementar máscara dinâmica CNPJ/CPF no formulário.
   - [ ] Implementar máscaras de CEP e telefone.
   - [ ] Configurar schema Zod com todas as regras de validação (seção 9).
   - [ ] Testar navegação entre abas do formulário com erros de validação.

8. **Estados Visuais e Polish**
   - [ ] Adicionar skeleton loading na listagem.
   - [ ] Adicionar empty state quando não houver fornecedores.
   - [ ] Adicionar loading states nos botões de salvar/excluir.
   - [ ] Garantir responsividade (grid 3 colunas → 1 coluna, drawer fullscreen mobile).
   - [ ] Verificar contraste e labels ARIA básicos.

9. **Testes Manuais de Fluxo**
   - [ ] Fluxo: listagem → novo fornecedor → salvar → voltar para listagem.
   - [ ] Fluxo: listagem → abrir drawer → editar → salvar → drawer atualizado.
   - [ ] Fluxo: listagem → excluir fornecedor → confirmar → sumir da listagem.
   - [ ] Fluxo: formulário → buscar CEP → preencher endereço → adicionar contato → salvar.

---

## 9. Regras de Validação (Zod)

### 9.1 Schema Principal

```typescript
const contactSchema = z.object({
  id: z.string(),
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  role: z.string().optional(),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  phone: z.string().optional(),
  mobile: z.string().optional(),
  isPrimary: z.boolean(),
});

const bankAccountSchema = z.object({
  id: z.string(),
  bank: z.string().min(1, "Banco é obrigatório"),
  bankName: z.string(),
  agency: z.string().min(1, "Agência é obrigatória"),
  account: z.string().min(1, "Conta é obrigatória"),
  accountType: z.enum(["checking", "savings"]),
  pixKey: z.string().optional(),
  pixType: z.enum(["cnpj", "cpf", "email", "phone", "random"]).optional(),
  isPrimary: z.boolean(),
});

const addressSchema = z.object({
  cep: z.string().min(8, "CEP inválido"),
  street: z.string().min(1, "Logradouro é obrigatório"),
  number: z.string().min(1, "Número é obrigatório"),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, "Bairro é obrigatório"),
  city: z.string().min(1, "Cidade é obrigatória"),
  state: z.string().length(2, "Estado inválido"),
});

export const supplierFormSchema = z.object({
  documentType: z.enum(["cnpj", "cpf"]),
  document: z.string().min(1, "Documento é obrigatório"),
  legalName: z.string().min(2, "Razão social é obrigatória"),
  name: z.string().min(1, "Nome fantasia é obrigatório"),
  category: z.string().min(1, "Categoria é obrigatória"),
  rating: z.number().min(0).max(5).default(0),
  status: z.enum(["active", "inactive", "pending"]).default("active"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  phone: z.string().optional(),
  address: addressSchema,
  contacts: z.array(contactSchema).default([]),
  bankAccounts: z.array(bankAccountSchema).default([]),
  paymentTerms: z.string().optional(),
  notes: z.string().optional(),
  logo: z.string().optional().nullable(),
});
```

### 9.2 Validações Condicionais
- **Documento**: se `documentType === 'cnpj'`, validar que possui 14 dígitos numéricos. Se `documentType === 'cpf'`, validar 11 dígitos numéricos.
- **Contatos**: se o array não estiver vazio, cada contato deve ter `name` preenchido.
- **Contas Bancárias**: se o array não estiver vazio, cada conta deve ter `bank`, `agency` e `account` preenchidos.
- **Email do fornecedor**: opcional, mas se preenchido deve ser válido.

### 9.3 Máscaras de Input

Implementar em `src/app/lib/document-mask.ts`:

```typescript
export const maskCNPJ = (value: string) =>
  value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .slice(0, 18);

export const maskCPF = (value: string) =>
  value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .slice(0, 14);

export const maskCEP = (value: string) =>
  value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 9);

export const maskPhone = (value: string) => {
  const nums = value.replace(/\D/g, "").slice(0, 11);
  if (nums.length <= 2) return nums;
  if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;
  return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`;
};

export const maskDocument = (value: string, type: "cnpj" | "cpf") => {
  if (type === "cnpj") return maskCNPJ(value);
  return maskCPF(value);
};
```

**Regras de aplicação:**
- Aplicar máscara no evento `onChange` do input.
- Nunca enviar a máscara para a validação Zod — usar `.replace(/\D/g, "")` antes de validar ou armazenar.
- O campo pode ser exibido com máscara, mas o valor subjacente do formulário (RHF) pode ser com ou sem máscara. **Recomendação**: armazenar sem máscada no estado e aplicar máscara apenas na renderização via `Controller` do RHF.

---

## 10. Considerações Finais

### 10.1 Decisões de Arquitetura
- **Separação de tipos/mocks:** A SPEC recomenda separar em `src/app/types/` e `src/app/lib/mocks/` para iniciar uma padronização. O implementer pode optar por manter tudo junto em `fornecedoresMockData.ts` dentro da pasta do módulo se preferir alinhamento total com o código legado.
- **Hooks customizados:** A criação de `src/app/hooks/` é intencional para começar a desacoplar lógica das páginas. Se houver resistência, os hooks podem ficar em `src/app/components/fornecedores/hooks/`.
- **Drawer vs Página de Detalhes:** A rota `/fornecedores/:id` deve renderizar `FornecedorDetalhePage`, mas o fluxo principal de visualização será via drawer a partir da listagem. A página de detalhes pode ser um wrapper que renderiza o drawer em tela cheia ou simplesmente redireciona para `/fornecedores` com algum state. **Recomendação:** fazer a página de detalhes renderizar o mesmo conteúdo do drawer, mas em layout de página completa, como fallback.

### 10.2 Bibliotecas a Instalar (se ainda não estiverem)
Verificar `package.json`. Se faltarem, instalar:
```bash
npm install react-hook-form @hookform/resolvers zod date-fns
```

### 10.3 Padrão de Commits
Seguir o padrão do repositório (não especificado, mas manter mensagens claras em português ou inglês conforme histórico).

---

**Fim da SPEC**
