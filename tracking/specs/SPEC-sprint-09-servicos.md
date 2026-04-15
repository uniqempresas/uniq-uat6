# SPEC - Sprint 09: Serviços e Catálogo

## 1. Visão Geral do Módulo

**Nome:** Serviços e Catálogo
**Descrição:** Módulo para gestão completa de serviços oferecidos pelo salão (backend administrativo) e exposição pública para clientes (catálogo).
**Rota Base:** `/servicos` (admin), `/catalogo` (público)

### Objetivos
1. CRUD completo de serviços (cadastro, edição, listagem, detalhes, ativação/desativação).
2. Criação de catálogo público de serviços para clientes.
3. Reutilização de padrões e componentes do módulo de Agendamentos.

---

## 2. Estrutura de Arquivos

Todos os arquivos devem ser criados em `src/app/components/servicos/`.

```
src/app/components/servicos/
├── ServicosPage.tsx              # Listagem admin (redirect or index)
├── ServicosListPage.tsx          # Página principal de listagem admin
├── ServicoDetailsPage.tsx        # Detalhes de um serviço
├── ServicoFormPage.tsx           # Formulário (Novo/Editar)
├── CatalogoPage.tsx              # Catálogo público
├── components/
│   ├── ServicosList.tsx          # Componente de listagem
│   ├── ServicoCard.tsx           # Card para listagem
│   ├── ServicoFilters.tsx        # Filtros da lista
│   ├── DuracaoInput.tsx          # Input de duração (15min, 30min, etc)
│   ├── ProfissionaisSelect.tsx  # Multi-select de colaboradores
│   ├── ServicoForm.tsx           # Formulário reutilizável
│   └── CatalogoServiceCard.tsx   # Card específico para catálogo público
├── hooks/
│   ├── useServicos.ts             # Hook de CRUD para admin
│   └── useCatalogo.ts            # Hook para versão pública
├── lib/
│   ├── servicosMockData.ts       # Dados mockados e tipos
│   └── formatters.ts             # Funções helper (currency, duration)
└── types/
    └── index.ts                  # Exports de tipos
```

**Rotas a adicionar em `src/app/routes.tsx`:**
- `/servicos` -> `ServicosListPage`
- `/servicos/novo` -> `ServicoFormPage` (mode: create)
- `/servicos/:id` -> `ServicoDetailsPage`
- `/servicos/:id/editar` -> `ServicoFormPage` (mode: edit)
- `/catalogo` -> `CatalogoPage` (rota pública, sem layout admin padrão, se houver)

---

## 3. Tipos e Interfaces

Os tipos devem ser definidos em `src/app/components/servicos/lib/servicosMockData.ts`.

### Enum: ServicoStatus
```typescript
export type ServicoStatus = "ativo" | "inativo" | "destaque";
```

### Enum: CategoriaServico
```typescript
export type CategoriaServico = "cabelo" | "unhas" | "estetica" | "barba" | "massagem";
```

### Interface: Servico
```typescript
export interface Servico {
  id: string;
  nome: string;
  descricao: string;
  preco: number; // em centavos ou inteiro
  duracao: number; // em minutos
  categoria: CategoriaServico;
  profissionaisIds: string[]; // IDs dos colaboradores
  status: ServicoStatus;
  imagemUrl?: string;
  destaque?: boolean;
  criadoEm: string;
  atualizadoEm: string;
}
```

### Interface: ServicoFormData
```typescript
export interface ServicoFormData {
  nome: string;
  descricao: string;
  preco: number;
  duracao: number;
  categoria: CategoriaServico;
  profissionaisIds: string[];
  status: ServicoStatus;
  destaque?: boolean;
}
```

---

## 4. Dados Mockados (Mock Data)

Criar 10 serviços de exemplo em `servicosMockData.ts`:

1. **Corte Feminino** | Cabelo | R$ 120,00 | 60min | Ativo
2. **Corte Masculino** | Cabelo | R$ 65,00 | 40min | Ativo
3. **Coloração Completa** | Cabelo | R$ 280,00 | 120min | Ativo
4. **Mechas** | Cabelo | R$ 350,00 | 180min | Destaque
5. **Progressiva** | Cabelo | R$ 320,00 | 150min | Ativo
6. **Manicure** | Unhas | R$ 60,00 | 45min | Ativo
7. **Pedicure** | Unhas | R$ 70,00 | 45min | Ativo
8. **Unhas Gel** | Unhas | R$ 180,00 | 90min | Ativo
9. **Limpeza de Pele** | Estética | R$ 180,00 | 60min | Ativo
10. **Massagem Relaxante** | Massagem | R$ 150,00 | 60min | Inativo

**Reutilizar profissionais de `agendaMockData.ts` (PROFISSIONAIS).**

---

## 5. Componentes de UI (shadcn/ui)

### ServicosList
- Renderiza uma tabela (`Table`, `TableHeader`, `TableRow`, `TableCell`) ou Grid de Cards.
- Koluna: Nome, Categoria (Badge), Preço, Duração, Status (Badge), Ações (DropdownMenu).
- Ação de excluir deve usar `AlertDialog`.

### ServicoCard (Admin)
- Visualização compactada para uso em grids ou tabelas.
- Mostrar: Nome, Categoria (Badge colorida), Preço, Duração, Status.

### ServicoFilters
- Campo de busca (`Input` com ícone).
- Select para Categoria.
- Select para Status.
- Toggle/Dropdown para "Apenas Destaque".

### ServicoForm
- Campos:
  - Nome (`Input`, required)
  - Descrição (`Textarea`)
  - Preço (`Input` type="currency" com máscara)
  - Categoria (`Select` - shadcn Select)
  - Duração (`DuracaoInput` custom)
  - Profissionais (`ProfissionaisSelect` custom com Checkboxs)
  - Status (`Select` ou `Switch` para Ativo/Inativo)
  - Destaque (`Switch` ou `Checkbox`)
- Validação com `zod` (via `react-hook-form` + `zod-resolver`).
- Botões: Salvar (`Button`), Cancelar (`Button variant="outline"`).

### ServicoDetails
- Layout tipo "Hero Header" (参考 `AgendamentoDetalhePage`).
- Exibir detalhes completos.
- Timeline de alterações (criação, edição).
- Botões de ação: Editar, Ativar/Desativar, Voltar.

### CatalogoPage
- Layout público (sem sidebar admin).
- Header com busca e filtros por categoria.
- Grid de `CatalogoServiceCard`.
- `CatalogoServiceCard`: Imagem (opcional), Nome, Preço, Duração, Botão "Agendar".

### DuracaoInput
- Select personalizado ou RadioGroup com opções:
  - 15 min, 30 min, 45 min, 60 min, 90 min, 120 min, 180 min.
- Input numérico customizado também é aceitável, mas Select previne erros.

### ProfissionaisSelect
- Lista de profissionais vindos do hook ou mock.
- Multi-seleção (Checkboxes).
- Indicador visual de quantos selecionados.

---

## 6. Hooks

### useServicos
```typescript
interface UseServicosReturn {
  servicos: Servico[];
  isLoading: boolean;
  error: string | null;
  addServico: (data: ServicoFormData) => Promise<void>;
  updateServico: (id: string, data: ServicoFormData) => Promise<void>;
  deleteServico: (id: string) => Promise<void>;
  toggleStatus: (id: string) => Promise<void>;
}
```
- Implementar delay simulado (ex: 500ms) para_ops.
- Atualização otimista (optimistic updates) para melhor UX.

### useCatalogo
```typescript
interface UseCatalogoReturn {
  servicos: Servico[]; // Apenas ativos
  isLoading: boolean;
  categorias: CategoriaServico[];
  // Funcionalidades de filtro próprias do catálogo
  filterByCategory: (cat: CategoriaServico | null) => void;
}
```
- Retorna apenas serviços com status "ativo" ou "destaque".

---

## 7. Regras de Negócio

1. **Duração**: Múltiplos de 15 minutos. Input deve garantir isso (Stepper ou Select).
2. **Preço**: Formato brasileiro (R$ 1.234,56). Usar máscara no input.
3. **Profissionais**: Um serviço pode ser executado por um ou mais profissionais.
4. **Categorias**: Predefinidas (Cabelo, Unhas, Estética, Barba, Massagem).
5. **Status**:
   - Ativo: Visível no catálogo e agendável.
   - Inativo: Oculto do catálogo, não agendável, visível na listagem admin com badge.
   - Destaque: Aparece em destaque no catálogo (Topo).
6. **Catálogo Público**: Acesso livre, sem necessidade de login. Requisito: Rota `/catalogo` deve estar fora do `RequireAuth` (ou ter exceção).

---

## 8. Tarefas de Implementação

### Fase 1: Fundamentos
- [ ] 1.1 Criar estrutura de pastas `src/app/components/servicos/`
- [ ] 1.2 Definir tipos e interfaces em `lib/servicosMockData.ts`
- [ ] 1.3 Criar mock data com 10 serviços e helpers
- [ ] 1.4 Configurar rotas em `routes.tsx`

### Fase 2: Hooks e Dados
- [ ] 2.1 Implementar `useServicos` (CRUD com delay)
- [ ] 2.2 Implementar `useCatalogo` (filtros)

### Fase 3: Componentes de Formulário
- [ ] 3.1 Criar `DuracaoInput`
- [ ] 3.2 Criar `ProfissionaisSelect`
- [ ] 3.3 Criar `ServicoForm` completo com validação

### Fase 4: Páginas Admin
- [ ] 4.1 Criar `ServicosListPage` com `ServicosList` e `ServicoFilters`
- [ ] 4.2 Criar `ServicoFormPage` (Novo/Editar)
- [ ] 4.3 Criar `ServicoDetailsPage` com timeline

### Fase 5: Catálogo Público
- [ ] 5.1 Criar `CatalogoPage` (layout público)
- [ ] 5.2 Criar `CatalogoServiceCard`
- [ ] 5.3 Implementar filtros visuais no catálogo

---

## 9. Riscos e Pendências

- **Dependência de Imagens**: Decidir se o catálogo terá imagens reais ou placeholders.
- **Perf performance**: Se a lista de serviços crescer muito, considerar paginação ou virtualização (react-window).
- **Conflito de Agendamento**: O sistema de agendamento precisa validar se o profissional escolhido para o serviço está disponível (escopo futuro, não desta sprint).

---

## 10. Critérios de Aceitação

- [ ] Listagem admin exibe todos os serviços com filtros funcionais.
- [ ] Cadastro de novo serviço persiste na memória (mock) e aparece na lista.
- [ ] Edição atualiza os dados corretamente.
- [ ] Exclusão remove o item da lista.
- [ ] Alteração de status (Ativo/Inativo) reflete no comportamento do catálogo público.
- [ ] Catálogo público (`/catalogo`) mostra apenas serviços ativos/destaque.
- [ ] Formulário valida campos obrigatórios e formatos.
- [ ] Interface é responsiva e usa design tokens do projeto (shadcn/ui).