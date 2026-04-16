# Mapa de UI - Módulo Meus Módulos

## 1. Resumo do Módulo

### 1.1 Objetivo Principal
O módulo **Meus Módulos** é a central de gestão de assinaturas e módulos do UNIQ Empresas. Ele permite que o parceiro (dono da empresa) visualize, adquira e gerencie os módulos que deseja utilizar na plataforma, controlando o que aparece na sidebar e quais funcionalidades estão disponíveis.

### 1.2 User Stories Principais

| ID | User Story | Prioridade |
|----|-----------|------------|
| MOD-001 | Como parceiro, quero ver todos os módulos disponíveis para adquirir novas funcionalidades | Essencial |
| MOD-002 | Como parceiro, quero ver apenas os módulos que contratei organizados em um só lugar | Essencial |
| MOD-003 | Como parceiro, quero testar um módulo por 14 dias antes de pagar para avaliar o valor | Essencial |
| MOD-004 | Como parceiro, quero saber quanto pago por cada módulo para controlar meus gastos | Essencial |
| MOD-005 | Como parceiro, quero cancelar um módulo que não uso mais | Importante |
| MOD-006 | Como parceiro, quero ver sugestões de planos pré-montados para economizar | Importante |
| MOD-007 | Como parceiro, quero ser alertado quando um trial estiver próximo do fim | Desejável |
| MOD-008 | Como parceiro, quero comparar planos para escolher o melhor para meu negócio | Desejável |

### 1.3 Integrações com Outros Módulos

```
┌─────────────────────────────────────────────────────────────────┐
│                    MÓDULO MEUS MÓDULOS                          │
├─────────────────────────────────────────────────────────────────┤
│  ↓ Integrações                                                  │
├─────────────────────────────────────────────────────────────────┤
│  • Sidebar/Menu de Navegação                                    │
│    - Controla visibilidade dos itens de menu                    │
│    - Atualiza em tempo real após aquisição/cancelamento         │
│                                                                 │
│  • Sistema de Permissões (Colaboradores)                        │
│    - Módulos adquiridos definem o escopo de permissões          │
│    - Apenas módulos ativos aparecem na matriz de permissões     │
│                                                                 │
│  • Configurações → Planos e Cobrança                            │
│    - Histórico de faturas                                       │
│    - Próximas cobranças                                         │
│    - Método de pagamento                                        │
│                                                                 │
│  • Dashboard                                                    │
│    - Card resumo de módulos ativos                              │
│    - Alertas de trial próximo do vencimento                     │
│                                                                 │
│  • n8n / WhatsApp                                               │
│    - Notificação de fim de trial (3 dias antes)                 │
│    - Confirmação de aquisição de módulo                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Telas/Páginas Principais

### 2.1 Página Meus Módulos

| Campo | Valor |
|-------|-------|
| **Nome** | Meus Módulos |
| **Rota** | `/meus-modulos` |
| **Objetivo** | Centralizar a gestão de todos os módulos da empresa: ativos, em trial e disponíveis para aquisição |
| **Permissões** | Apenas proprietário/admin da empresa |

**Componentes Principais:**
- **Header da página:**
  - Título "Meus Módulos"
  - Subtítulo dinâmico: "Você tem X módulos ativos"
  - Resumo financeiro mensal: "Sua fatura atual: R$ XXX/mês"
  - Botão "Ver faturas" (link para `/configuracoes/cobranca`)

- **Tabs de navegação:**
  1. **"Meus Módulos"** — lista de módulos ativos, trials e core
  2. **"Loja de Módulos"** — catálogo completo de módulos disponíveis
  3. **"Meu Plano"** — detalhes do plano atual e opções de upgrade/downgrade

- **Filtros rápidos (tab Meus):**
  - Todos
  - Ativos
  - Em trial
  - Cancelados (aparecem até o fim do ciclo)

- **Grid de cards:**
  - Cada card representa um módulo
  - Ícone, nome, descrição curta
  - Badge de status (`Ativo`, `Trial`, `Core`, `Cancelado`)
  - Preço mensal
  - Data de renovação ou fim do trial
  - Botão de ação principal

**Ações Disponíveis:**
- Adquirir novo módulo (vai para tab Loja)
- Usar módulo (navega para a rota do módulo)
- Cancelar módulo (com confirmação)
- Ver detalhes do módulo (modal)

**MVP:** ✅ Essencial

---

### 2.2 Tab "Loja de Módulos"

| Campo | Valor |
|-------|-------|
| **Nome** | Loja de Módulos |
| **Localização** | Aba dentro de `/meus-modulos` |
| **Objetivo** | Permitir que o parceiro descubra e adquira novos módulos avulsos ou planos |

**Componentes Principais:**
- **Banner de planos ( topo):**
  - Cards comparativos dos 3 planos: Starter, Business, Pro
  - Destaque do plano atual (se houver)
  - Botão "Ver detalhes do plano" ou "Mudar de plano"

- **Seção "Módulos Avulsos":**
  - Filtros por categoria: Todos, Operacional, Premium, Core
  - Busca por nome do módulo
  - Grid de cards de módulos não adquiridos

- **Card de Módulo na Loja:**
  - Ícone grande (48px)
  - Nome do módulo
  - Descrição curta (1-2 linhas)
  - Badge de categoria
  - Preço: "R$ XX/mês"
  - Tag de trial: "14 dias grátis"
  - Botão "Adquirir" (primário)
  - Link "Saiba mais" (abre modal de detalhes)

- **Seção "Sugestões para você":**
  - Baseado nos módulos já adquiridos
  - Ex: "Clientes que usam CRM também adquirem Vendas"

**Ações Disponíveis:**
- Adquirir módulo (inicia trial de 14 dias)
- Ver detalhes do módulo
- Comparar planos

**MVP:** ✅ Essencial

---

### 2.3 Tab "Meu Plano"

| Campo | Valor |
|-------|-------|
| **Nome** | Meu Plano |
| **Localização** | Aba dentro de `/meus-modulos` |
| **Objetivo** | Mostrar o plano contratado e permitir upgrade/downgrade |

**Componentes Principais:**
- **Plano atual destacado:**
  - Nome do plano
  - Valor mensal
  - Módulos inclusos (lista com ícones)
  - Data da próxima cobrança
  - Badge "Plano atual"

- **Comparação de planos:**
  - Tabela comparativa Starter vs Business vs Pro
  - Colunas: Módulos inclusos, Preço, Economia
  - Destaque da coluna do plano atual

- **Cards de ação:**
  - "Fazer upgrade" (se aplicável)
  - "Fazer downgrade" (se aplicável)
  - "Falar com suporte" (sobre planos customizados)

**Ações Disponíveis:**
- Upgrade de plano
- Downgrade de plano
- Ver termos de cada plano

**MVP:** ⚠️ Importante (pode ser simplificado inicialmente)

---

### 2.4 Página de Escolha de Plano (Onboarding)

| Campo | Valor |
|-------|-------|
| **Nome** | Escolha seu Plano |
| **Rota** | `/onboarding/plano` (ou `/meus-modulos/planos`) |
| **Objetivo** | Durante o cadastro, permitir que o novo parceiro escolha entre os 3 planos ou comece só com os módulos core |
| **Permissões** | Usuário logado, empresa recém-criada |

**Componentes Principais:**
- **Progresso do onboarding** (stepper)
- **3 cards de planos lado a lado:**
  - Starter: gratuito / apenas core
  - Business: bundle intermediário
  - Pro: bundle completo
- Cada card lista módulos inclusos com checkmarks
- Preço destacado
- CTA principal por card: "Escolher [Plano]"
- Link abaixo: "Quero começar só com o gratuito e escolher depois"

**Ações Disponíveis:**
- Selecionar plano
- Pular (apenas core)
- Comparar planos detalhadamente

**MVP:** ✅ Essencial

---

## 3. Formulários

### 3.1 Filtro de Módulos (Tab Meus / Loja)

| Campo | Valor |
|-------|-------|
| **Nome** | Filtro de Módulos |
| **Localização** | Topo das abas Meus e Loja |
| **Objetivo** | Facilitar a busca por módulos |

**Campos do Formulário:**

| Campo | Tipo | Obrigatório | Validações | MVP |
|-------|------|-------------|------------|-----|
| Buscar módulo | Text | Não | Busca por nome/descricao | ✅ |
| Categoria | Select | Não | Todas, Core, Operacional, Premium | ✅ |
| Status | Select | Não | Todas, Ativo, Trial, Cancelado | ✅ |

**Ações:**
- Aplicar filtros
- Limpar filtros

---

## 4. Modais/Dialogs

### 4.1 Adquirir Módulo (Iniciar Trial)

| Campo | Valor |
|-------|-------|
| **Nome** | Iniciar Trial do Módulo |
| **Gatilho** | Clique em "Adquirir" na Loja de Módulos |
| **Permissão** | Proprietário, Admin |

**Conteúdo/UI:**
- Ícone do módulo (grande)
- Título: "Iniciar trial de [Nome do Módulo]?"
- Texto: "Você terá **14 dias grátis** para testar o módulo [Nome]. Após o trial, o valor de **R$ [preco]/mês** será adicionado à sua próxima fatura."
- Lista de benefícios rápidos (3 bullets)
- Resumo:
  - Valor após trial: R$ XX/mês
  - Início do trial: hoje
  - Fim do trial: dd/mm/aaaa

**Ações:**
- Iniciar trial agora (primário)
- Cancelar

**MVP:** ✅ Essencial

---

### 4.2 Cancelar Módulo

| Campo | Valor |
|-------|-------|
| **Nome** | Cancelar Módulo |
| **Gatilho** | Clique em "Cancelar" no card de um módulo ativo |
| **Permissão** | Proprietário, Admin |

**Conteúdo/UI:**
- Ícone de alerta (triângulo laranja)
- Título: "Cancelar [Nome do Módulo]?"
- Texto: "O módulo deixará de aparecer no menu e não estará mais disponível a partir do dia **dd/mm/aaaa** (fim do ciclo atual)."
- Checkbox: "Entendo que os dados do módulo ficarão inacessíveis após essa data"
- Alerta: "Você não será reembolsado do valor já pago neste ciclo."

**Ações:**
- Confirmar cancelamento (desabilitado até checkbox marcado)
- Voltar

**MVP:** ✅ Essencial

---

### 4.3 Detalhes do Módulo

| Campo | Valor |
|-------|-------|
| **Nome** | Detalhes do Módulo |
| **Gatilho** | Clique em "Saiba mais" na Loja ou no card do módulo |
| **Permissão** | Todos |

**Conteúdo/UI:**
- Header com ícone e nome do módulo
- Descrição completa (3-4 linhas)
- Lista de funcionalidades principais (com checkmarks)
- Screenshots/ilustrações do módulo (futuro)
- Preço e informações de trial
- Se já adquirido: badge de status + data de renovação

**Ações:**
- Adquirir/Iniciar trial (se não tiver)
- Usar módulo (se já tiver)
- Fechar

**MVP:** ⚠️ Importante

---

### 4.4 Upgrade/Downgrade de Plano

| Campo | Valor |
|-------|-------|
| **Nome** | Alterar Plano |
| **Gatilho** | Clique em "Fazer upgrade" ou "Fazer downgrade" |
| **Permissão** | Proprietário, Admin |

**Conteúdo/UI:**
- Título: "Mudar para o plano [Nome]?"
- Comparação resumida: plano atual vs novo plano
- Texto sobre prorata: "A diferença será calculada proporcionalmente e adicionada à sua próxima fatura."
- Lista de módulos que serão adicionados/removidos

**Ações:**
- Confirmar mudança
- Cancelar

**MVP:** ❌ Futuro

---

## 5. Componentes Reutilizáveis Específicos

### 5.1 Card de Módulo

**Uso:** Exibido nas grids da tab "Meus Módulos" e "Loja de Módulos".

**Estrutura:**
- Container com borda sutil e sombra leve
- Ícone do módulo (40px, cor do tema ou cinza)
- Nome do módulo (fonte semibold)
- Descrição curta (text-sm, text-muted)
- Badge de status (posicionado no topo direito)
- Preço (text-sm, tab Loja)
- Data de renovação/trial (text-xs, tab Meus)
- Botão de ação alinhado à direita

**Variantes:**
- `default` — Loja, não adquirido
- `active` — Adquirido, ativo
- `trial` — Em período de teste (borda laranja sutil)
- `core` — Gratuito/fixos (sem badge de preço)
- `cancelled` — Cancelado, mas ainda visível até fim do ciclo (opacidade reduzida)

**MVP:** ✅ Essencial

---

### 5.2 Badge de Status do Módulo

**Variantes de Badge:**

| Status | Cor | Texto |
|--------|-----|-------|
| `ativo` | Verde | "Ativo" |
| `trial` | Laranja | "Trial (X dias)" |
| `core` | Cinza/Azul | "Incluso" |
| `cancelado` | Vermelho | "Cancelado" |
| `nao_adquirido` | Neutro | — (não exibe) |

**MVP:** ✅ Essencial

---

### 5.3 Comparador de Planos

**Uso:** Tab "Meu Plano" e página de escolha de plano.

**Estrutura:**
- Tabela com 4 colunas: Recurso, Starter, Business, Pro
- Cada linha compara a presença/ausência de um módulo
- Checkmark verde para incluso
- Traço cinza para não incluso
- Preço destacado no rodapé de cada coluna
- Botão CTA no rodapé

**MVP:** ⚠️ Importante

---

### 5.4 Resumo Financeiro do Módulo

**Uso:** Header da página Meus Módulos.

**Estrutura:**
- Card compacto horizontal
- Label: "Sua assinatura atual"
- Valor total: "R$ XXX/mês"
- Breakdown em tooltip: plano + módulos avulsos
- Link "Ver faturas"

**MVP:** ✅ Essencial

---

## 6. Estados de UI

### 6.1 Empty States

#### Loja de Módulos Vazia (todos adquiridos)
**Quando:** Empresa já possui todos os módulos disponíveis
**UI:**
- Ícone: Pacote de presente ou troféu
- Título: "Você tem todos os módulos!"
- Descrição: "Parabéns, sua empresa está aproveitando tudo que a UNIQ oferece."
- CTA: "Ver meus módulos ativos"

#### Meus Módulos Vazio (apenas core)
**Quando:** Empresa nova, ainda não adquiriu nenhum módulo avulso
**UI:**
- Ícone: Loja/Storefront
- Título: "Comece a expandir sua UNIQ"
- Descrição: "Você tem acesso aos módulos básicos. Adquira novos módulos para potencializar seu negócio."
- CTA primário: "Explorar loja de módulos"

#### Sem Resultados na Busca
**Quando:** Filtro/busca não retorna módulos
**UI:**
- Ícone: Lupa com X
- Título: "Nenhum módulo encontrado"
- Descrição: "Tente ajustar seus filtros ou termos de busca"
- CTA: "Limpar filtros"

### 6.2 Loading States

**Grid de módulos:**
- Skeleton cards em grid (3 colunas)
- Cada skeleton: retângulo de ícone, 2 linhas de texto, botão
- shimmer effect padrão do projeto

**Sidebar:**
- Itens de menu piscam levemente enquanto carrega permissões
- Fallback: mostrar apenas core + ícone de loading

### 6.3 Error States

**Falha ao carregar módulos:**
- Toast de erro: "Não foi possível carregar seus módulos. Tente novamente."
- Botão "Tentar novamente" no centro da página
- Fallback seguro: exibe todos os módulos (modo degredado) para não travar a navegação

**Falha ao adquirir módulo:**
- Modal de erro com mensagem amigável
- CTA "Tentar novamente" ou "Falar com suporte"

### 6.4 Success States

**Módulo adquirido com sucesso:**
- Toast de sucesso: "[Nome do Módulo] adquirido! Aproveite seus 14 dias de trial."
- Animação sutil no card (highlight/border verde por 2 segundos)
- Sidebar atualiza automaticamente com novo item

**Cancelamento confirmado:**
- Toast informativo: "[Nome do Módulo] será cancelado no fim do ciclo atual (dd/mm)."
- Badge do card muda para "Cancelado"

---

## 7. Outras Considerações

### 7.1 Notificações/Toasts

| Evento | Tipo | Mensagem |
|--------|------|----------|
| Trial iniciado | Success | "Módulo X adquirido. 14 dias de trial começando agora!" |
| Trial expirando (3 dias) | Warning | "Seu trial do módulo X expira em 3 dias." |
| Módulo cancelado | Info | "Módulo X cancelado. Válido até dd/mm." |
| Falha ao adquirir | Error | "Não foi possível adquirir o módulo. Tente novamente." |
| Upgrade de plano | Success | "Plano atualizado com sucesso!" |

### 7.2 Responsividade

- **Desktop:** Grid 3 colunas de cards
- **Tablet:** Grid 2 colunas
- **Mobile:** 1 coluna, cards empilhados. Tabs viram dropdown em telas < 640px.

### 7.3 Sidebar e Menu

**Regra de exibição por módulo:**

| Item Sidebar | Código | Regra de Visibilidade |
|--------------|--------|----------------------|
| Dashboard | `dashboard` | Sempre visível (core) |
| Serviços | `servicos` | Se módulo ativo/trial |
| Chatbot | `chatbot` | Se módulo ativo/trial |
| CRM | `crm` | Se módulo ativo/trial |
| Vendas | `vendas` | Se módulo ativo/trial |
| Marketplace | `marketplace` | Se módulo ativo/trial |
| Estoque | `estoque` | Se módulo ativo/trial |
| Fornecedores | `fornecedores` | Se módulo ativo/trial |
| Agenda | `agenda` | Se módulo ativo/trial |
| Financeiro | `financeiro` | Se módulo ativo/trial |
| Métricas | `metricas` | Se módulo ativo/trial |
| MEL IA | `mel` | Se módulo ativo/trial |
| Colaboradores | `colaboradores` | Se módulo ativo/trial |
| Configurações | `configuracoes` | Sempre visível (core) |
| Minha Empresa | `minha_empresa` | Sempre visível (core) |

**Nota:** Módulos cancelados continuam visíveis na sidebar até o fim do ciclo (`data_renovacao` ou `data_trial_expira`), mas com badge visual indicando o cancelamento.

### 7.4 Proteção de Rotas

Se o usuário acessar diretamente uma URL de módulo não adquirido (ex: `/crm/dashboard`):
- Redireciona para `/meus-modulos`
- Exibe toast informativo: "O módulo CRM não está ativo na sua conta. Adquira-o na loja de módulos."

---

## 8. Priorização MVP vs Futuro

### MVP (Must Have)

| # | Item |
|---|------|
| 1 | Schema de banco: módulos, planos, assinaturas, assinatura_módulos |
| 2 | Seed de módulos e planos (Starter, Business, Pro) |
| 3 | Tela `/meus-modulos` com tabs Meus / Loja |
| 4 | Sidebar filtrando apenas módulos ativos/trial/core |
| 5 | Fluxo de aquisição com trial de 14 dias |
| 6 | Modal de confirmação de adquirir e cancelar |
| 7 | Proteção de rotas por módulo ativo |
| 8 | Resumo financeiro no header da tela |
| 9 | Página de escolha de plano no onboarding |

### Importante (Should Have)

| # | Item |
|---|------|
| 1 | Tab "Meu Plano" com comparador |
| 2 | Modal de detalhes do módulo |
| 3 | Sugestões de módulos na Loja |
| 4 | Filtros por categoria/status |
| 5 | Notificação de fim de trial (3 dias antes) |

### Futuro (Nice to Have)

| # | Item |
|---|------|
| 1 | Upgrade/downgrade de plano com cálculo de prorata |
| 2 | Histórico de alterações de módulos |
| 3 | Analytics de adoção de módulos |
| 4 | Descontos por bundle personalizado |
| 5 | Programa de indicação com créditos para módulos |
| 6 | Marketplace de integrações de terceiros |

---

## 9. Glossário de Códigos de Módulo

Mapeamento oficial entre o nome do módulo na UI e o `codigo` usado no banco de dados e no frontend:

| Nome na UI | Código (`codigo`) | Categoria |
|------------|-------------------|-----------|
| Dashboard | `dashboard` | core |
| Minha Empresa | `minha_empresa` | core |
| Configurações | `configuracoes` | core |
| CRM | `crm` | operacional |
| Estoque | `estoque` | operacional |
| Vendas | `vendas` | operacional |
| Loja Virtual | `loja_virtual` | operacional |
| Agenda | `agenda` | operacional |
| Financeiro | `financeiro` | operacional |
| Métricas | `metricas` | operacional |
| MEL IA | `mel` | premium |
| Chatbot | `chatbot` | premium |
| Marketplace | `marketplace` | premium |
| Fornecedores | `fornecedores` | operacional |
| Catálogo de Serviços | `servicos` | operacional |
| Colaboradores | `colaboradores` | operacional |

---

**Total de Telas:** 3 (`/meus-modulos`, `/meus-modulos/planos`, `/onboarding/plano`)
**Total de Formulários:** 1 (filtros)
**Total de Modais:** 4 (adquirir, cancelar, detalhes, alterar plano)
**Total de Componentes Reutilizáveis:** 4 (card, badge, comparador, resumo)
