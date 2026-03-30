# Mapa de UI - Módulos Agendamentos + Serviços

**Documento de Especificação de Interface**  
**Versão:** 1.0  
**Última Atualização:** Março 2026  
**Status:** Documento de Planejamento

---

## PARTE 1: CATÁLOGO DE SERVIÇOS

### 1. Resumo do Módulo

O módulo de Catálogo de Serviços é responsável pelo cadastro, organização e gestão de todos os serviços oferecidos pela empresa. Este módulo serve como base para o sistema de agendamentos, definindo o que pode ser agendado, por quem, por quanto tempo e a que custo.

**Objetivos:**
- Cadastrar e manter serviços oferecidos
- Definir duração, preço e recursos necessários
- Vincular profissionais competentes a cada serviço
- Organizar serviços em categorias
- Criar pacotes e combos de serviços

**Integrações:**
- Módulo de Agendamentos (obrigatório)
- Módulo de Profissionais/Colaboradores
- Módulo de Financeiro (precificação)
- Módulo de Estoque (recursos consumíveis)

---

### 2. Telas de Serviços

#### 2.1 Lista de Serviços (TELA-SRV-001)
**Status:** MVP | **Prioridade:** Alta

**Descrição:** Tela principal para visualização e gestão de todos os serviços cadastrados.

**Layout:**
- Header com título "Catálogo de Serviços" + botão "Novo Serviço"
- Barra de filtros e busca
- Grid/Lista de cards de serviços
- Paginação ou scroll infinito
- Resumo estatístico (total de serviços, ativos, inativos)

**Funcionalidades:**
- Busca por nome do serviço
- Filtros por categoria, status (ativo/inativo), profissional
- Ordenação por nome, preço, duração
- Toggle visualização: Grid × Lista
- Ações em massa (ativar/desativar, excluir)
- Exportar lista (CSV, PDF)

**Colunas na Visualização em Lista:**
- Nome do serviço
- Categoria
- Duração estimada
- Preço
- Profissionais vinculados (contagem)
- Status
- Ações (editar, duplicar, excluir)

**Estados Vazios:**
- Nenhum serviço cadastrado
- Nenhum resultado na busca
- Todos os serviços inativos

---

#### 2.2 Detalhes do Serviço (TELA-SRV-002)
**Status:** MVP | **Prioridade:** Alta

**Descrição:** Visualização completa de um serviço específico com todas as suas informações.

**Layout:**
- Header com nome do serviço + badge de status + ações (editar, excluir, duplicar)
- Tabs de navegação: Visão Geral | Profissionais | Histórico de Agendamentos | Configurações

**Conteúdo da Aba "Visão Geral":**
- Card com informações básicas:
  - Nome do serviço
  - Descrição completa
  - Categoria
  - Código interno (SKU)
  - Tags/keywords
- Card de duração e preço:
  - Duração padrão (em minutos)
  - Duração mínima e máxima (se variável)
  - Preço padrão
  - Variações de preço (se houver)
- Card de recursos necessários:
  - Equipamentos
  - Produtos/sala
  - Consumíveis
- Card de observações:
  - Instruções para o cliente
  - Observações internas
  - Contraindicações

**Conteúdo da Aba "Profissionais" (TELA-SRV-002-A):**
- Lista de profissionais habilitados
- Foto, nome e especialidade de cada um
- Toggle para habilitar/desabilitar profissional
- Indicador de "profissional preferencial"
- Data de habilitação

**Conteúdo da Aba "Histórico de Agendamentos" (TELA-SRV-002-B):**
- Gráfico de volume de agendamentos (últimos 6 meses)
- Lista dos últimos agendamentos
- Estatísticas: total realizado, taxa de cancelamento, ticket médio

**Conteúdo da Aba "Configurações" (TELA-SRV-002-C):**
- Configurações de agendamento online
- Configurações de notificações
- Regras de cancelamento
- Prazos mínimos de agendamento

**Ações Disponíveis:**
- Editar serviço
- Duplicar serviço
- Desativar/Ativar
- Excluir permanentemente
- Ver relatório de desempenho

---

#### 2.3 Cadastro de Novo Serviço (TELA-SRV-003)
**Status:** MVP | **Prioridade:** Alta

**Descrição:** Fluxo de criação de um novo serviço, dividido em etapas para melhor usabilidade.

**Layout:**
- Wizard de passos (Stepper horizontal)
- Área do formulário principal
- Barra lateral com resumo
- Botões de navegação (voltar/próximo/salvar)

**Etapas do Wizard:**

**Passo 1: Informações Básicas**
- Nome do serviço* (input text)
- Descrição* (textarea)
- Categoria* (select)
- Subcategoria (select - opcional)
- Código interno/SKU (input text)
- Tags (multi-select chips)
- Foto/imagem do serviço (upload)

**Passo 2: Duração e Preço**
- Tipo de duração* (radio: Fixa | Variável | Por profissional)
- Duração padrão* (time picker em minutos)
- Duração mínima (se variável)
- Duração máxima (se variável)
- Tipo de preço* (radio: Fixo | Variável | Por profissional)
- Preço padrão* (currency input)
- Variações de preço (botão "+ Adicionar variação")
- Intervalo entre agendamentos (buffer time)

**Passo 3: Profissionais**
- Seleção de profissionais habilitados (checkbox list com fotos)
- Definir profissional preferencial
- Duração específica por profissional (opcional)
- Preço específico por profissional (opcional)

**Passo 4: Recursos e Configurações**
- Recursos necessários (multi-select)
- Sala/ambiente específico (select)
- Produtos consumíveis (listagem)
- Configurações avançadas (accordion)

**Passo 5: Revisão e Confirmação**
- Preview de como o serviço aparecerá
- Resumo de todas as informações
- Checkbox "Disponível para agendamento online"
- Botão "Criar Serviço"

**Validações:**
- Nome único (ou permitir duplicados com código diferente)
- Duração mínima < duração máxima
- Preço não negativo
- Pelo menos um profissional habilitado

**Indicadores de Progresso:**
- Barra de progresso do preenchimento
- Validação em tempo real
- Avisos de campos obrigatórios

---

#### 2.4 Edição de Serviço (TELA-SRV-004)
**Status:** MVP | **Prioridade:** Alta

**Descrição:** Tela para edição de um serviço existente, com interface similar ao cadastro mas carregando dados existentes.

**Diferenças do Cadastro:**
- Header mostrando "Editando: [Nome do Serviço]"
- Alerta se o serviço tiver agendamentos futuros
- Indicador de última edição e por quem
- Botão "Ver histórico de alterações"
- Opção "Salvar como novo" (criar cópia)

**Seção de Histórico de Alterações:**
- Timeline de edições
- Quem alterou, quando e o que mudou
- Opção de restaurar versão anterior

**Atenções Especiais:**
- Alterar preço: perguntar se afeta agendamentos futuros
- Alterar duração: verificar conflitos no calendário
- Desativar profissional: verificar agendamentos futuros vinculados

---

#### 2.5 Categorias de Serviço (TELA-SRV-005)
**Status:** MVP | **Prioridade:** Média

**Descrição:** Gestão de categorias para organização do catálogo de serviços.

**Layout:**
- Visualização em árvore (tree view) ou lista hierárquica
- Drag & drop para reordenar
- Preview de como fica no catálogo

**Funcionalidades:**
- Criar categoria
- Criar subcategoria
- Editar nome, descrição, cor, ícone
- Reordenar categorias
- Mover serviços entre categorias
- Arquivar categoria (não excluir se tiver serviços)

**Campos por Categoria:**
- Nome da categoria*
- Descrição
- Cor identificadora (color picker)
- Ícone (icon picker)
- Ordem de exibição
- Categoria pai (para subcategorias)
- Visibilidade (pública/interna)

---

#### 2.6 Pacotes e Combos de Serviços (TELA-SRV-006)
**Status:** Futuro | **Prioridade:** Média

**Descrição:** Criação e gestão de pacotes que combinam múltiplos serviços com desconto.

**Layout:**
- Lista de pacotes criados
- Visualização de detalhes de um pacote

**Funcionalidades:**
- Criar novo pacote
- Adicionar serviços ao pacote
- Definir ordem de execução
- Configurar desconto (percentual ou valor fixo)
- Definir validade do pacote
- Configurar política de uso (todos de uma vez ou separados)

**Campos do Pacote:**
- Nome do pacote*
- Descrição
- Serviços incluídos (listagem com ordem)
- Preço total do pacote*
- Preço sem desconto (calculado automaticamente)
- Percentual de desconto
- Validade (em dias ou data específica)
- Regras de agendamento (agendar tudo junto ou separado)
- Limite de uso por cliente
- Disponibilidade (data início/fim)

---

#### 2.7 Galeria de Serviços (TELA-SRV-007)
**Status:** Futuro | **Prioridade:** Baixa

**Descrição:** Visualização em galeria/grid com fotos dos serviços, ideal para apresentação ao cliente.

**Layout:**
- Grid responsivo de cards
- Foto principal do serviço
- Hover com informações básicas
- Filtros visuais por categoria

**Funcionalidades:**
- Visualização em grade
- Visualização em lista detalhada
- Comparar serviços lado a lado
- Compartilhar link do serviço

---

### 3. Formulários de Serviços

#### 3.1 Formulário: Cadastrar Serviço (FRM-SRV-001)
**Status:** MVP

**Campos do Formulário:**

**Seção: Informações Básicas**
| Campo | Tipo | Obrigatório | Validações | Placeholder |
|-------|------|-------------|------------|-------------|
| Nome do serviço | Text | Sim | 3-100 caracteres, único | "Ex: Corte de Cabelo Masculino" |
| Descrição | Textarea | Sim | 10-1000 caracteres | "Descreva o serviço em detalhes..." |
| Descrição curta | Text | Não | 0-150 caracteres | "Resumo para listagens" |
| Categoria | Select | Sim | Selecionar existente | "Selecione uma categoria" |
| Subcategoria | Select | Não | Dependente da categoria | "Selecione uma subcategoria" |
| Código interno (SKU) | Text | Não | Alfanumérico, único | "Ex: SRV-001" |
| Tags | Multi-select | Não | Chips editáveis | "Adicione tags..." |
| Imagem principal | File | Não | JPG, PNG, max 5MB | Upload de imagem |
| Galeria de imagens | File (múltiplo) | Não | Até 5 imagens | Upload múltiplo |

**Seção: Duração e Tempo**
| Campo | Tipo | Obrigatório | Validações | Observações |
|-------|------|-------------|------------|-------------|
| Tipo de duração | Radio | Sim | Fixa/Variável/Por profissional | Define os próximos campos |
| Duração padrão | Time/Duration | Sim | 5-480 minutos | Slider ou input numérico |
| Duração mínima | Time/Duration | Condicional | ≤ duração padrão | Apenas se tipo = variável |
| Duração máxima | Time/Duration | Condicional | ≥ duração padrão | Apenas se tipo = variável |
| Tempo de buffer antes | Number | Não | 0-60 minutos | Intervalo antes do serviço |
| Tempo de buffer depois | Number | Não | 0-60 minutos | Intervalo depois do serviço |
| Pausa para descanso | Toggle | Não | On/Off | Se o profissional precisa de intervalo |

**Seção: Preço e Pagamento**
| Campo | Tipo | Obrigatório | Validações | Observações |
|-------|------|-------------|------------|-------------|
| Tipo de preço | Radio | Sim | Fixo/Variável/Por profissional | Define os próximos campos |
| Preço padrão | Currency | Sim | ≥ 0 | Valor base do serviço |
| Preço promocional | Currency | Não | < preço padrão | Valor com desconto |
| Período da promoção | Date Range | Condicional | Data válida | Início e fim da promoção |
| Aceita pagamento parcial | Toggle | Não | On/Off | Sinal/entrada |
| Percentual do sinal | Percent | Condicional | 0-100% | Valor mínimo para reserva |

**Seção: Variações de Preço/Duração (Tabela Dinâmica)**
| Coluna | Tipo | Descrição |
|--------|------|-----------|
| Nome da variação | Text | Ex: "Cabelo curto", "Cabelo longo" |
| Preço | Currency | Valor específico |
| Duração | Duration | Tempo específico |
| Descrição | Text | Detalhes da variação |
| Ativo | Toggle | Se está disponível |

**Seção: Profissionais**
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| Profissionais habilitados | Checkbox list | Sim (mín 1) | Lista com foto e nome |
| Profissional preferencial | Radio | Não | Apenas um pode ser preferencial |
| Duração por profissional | Tabela | Não | Se tipo duração = "Por profissional" |
| Preço por profissional | Tabela | Não | Se tipo preço = "Por profissional" |

**Seção: Recursos Necessários**
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| Sala/ambiente | Select | Não | Se precisa de sala específica |
| Equipamentos | Multi-select | Não | Lista de equipamentos necessários |
| Produtos consumíveis | Listagem dinâmica | Não | Produtos e quantidades |
| Quantidade mínima de profissionais | Number | Não | Se precisa de mais de um |

**Seção: Configurações de Agendamento**
| Campo | Tipo | Obrigatório | Valiações |
|-------|------|-------------|-----------|
| Disponível para agendamento online | Toggle | Não | Default: ON |
| Antecedência mínima | Number | Não | Em horas |
| Antecedência máxima | Number | Não | Em dias |
| Permite agendamento recorrente | Toggle | Não | Default: OFF |
| Bloquear em feriados | Toggle | Não | Default: OFF |
| Requer confirmação manual | Toggle | Não | Default: OFF |

**Seção: Políticas e Observações**
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| Instruções para o cliente | Textarea | Não | O que o cliente precisa saber |
| Observações internas | Textarea | Não | Visível apenas internamente |
| Contraindicações | Textarea | Não | Quem não pode fazer |
| Política de cancelamento | Textarea | Não | Regras específicas deste serviço |
| O que está incluído | Textarea | Não | Lista de itens inclusos |
| O que não está incluído | Textarea | Não | Lista de itens não inclusos |

**Validações Cruzadas:**
- Se "Por profissional" selecionado, cada profissional deve ter preço/duração definidos
- Se serviço estiver em pacotes ativos, alterações devem ter confirmação
- Se houver agendamentos futuros, alterações de duração devem verificar conflitos

---

#### 3.2 Formulário: Configurar Variações de Serviço (FRM-SRV-002)
**Status:** MVP

**Uso:** Definir variações de um mesmo serviço (ex: corte masculino/feminino, tamanho P/M/G)

**Campos:**
- Nome da variação*
- Preço adicional ou preço total
- Duração adicional ou duração total
- Descrição específica
- Disponibilidade
- Profissionais que realizam esta variação

**Interface:** Tabela editável inline com botão "+ Adicionar variação"

---

#### 3.3 Formulário: Vincular Profissionais (FRM-SRV-003)
**Status:** MVP

**Uso:** Associar profissionais ao serviço com configurações específicas

**Campos:**
- Lista de profissionais disponíveis (com foto, nome, especialidade)
- Checkbox para selecionar/desselecionar
- Para cada profissional selecionado:
  - Duração específica (opcional, herdada do padrão)
  - Preço específico (opcional, herdado do padrão)
  - Comissão percentual
  - Toggle "Profissional preferencial"
  - Data de início de atuação neste serviço
  - Data de término (se temporário)

**Validações:**
- Pelo menos um profissional deve estar habilitado
- Não permitir duplicar vínculo

---

#### 3.4 Formulário: Cadastrar Categoria (FRM-SRV-004)
**Status:** MVP

**Campos:**
- Nome da categoria* (input text)
- Descrição (textarea)
- Categoria pai (select - para subcategorias)
- Cor identificadora* (color picker)
- Ícone* (icon picker)
- Ordem de exibição (number)
- Visibilidade (radio: Pública/Interna)
- Imagem de capa (file upload)
- SEO: Meta título (text)
- SEO: Meta descrição (textarea)

---

#### 3.5 Formulário: Criar Pacote de Serviços (FRM-SRV-005)
**Status:** Futuro

**Campos:**
- Nome do pacote*
- Descrição
- Serviços incluídos* (multi-select ordenável)
- Ordem de execução dos serviços (drag & drop)
- Preço do pacote*
- Tipo de desconto (radio: Percentual/Valor fixo/Preço manual)
- Valor do desconto
- Validade do pacote (em dias ou data específica)
- Regras de uso:
  - Usar todos de uma vez vs. separados
  - Intervalo mínimo entre serviços
  - Ordem obrigatória vs. flexível
- Limite de compra por cliente
- Disponibilidade (data início/fim)
- Disponível para venda online
- Imagem do pacote

---

#### 3.6 Formulário: Configurar Recursos do Serviço (FRM-SRV-006)
**Status:** Futuro

**Uso:** Definir equipamentos, produtos e recursos necessários

**Campos:**
- Sala/ambiente necessário (select)
- Equipamentos obrigatórios (multi-select)
- Produtos consumíveis (listagem dinâmica):
  - Produto (select do estoque)
  - Quantidade necessária
  - Unidade de medida
  - Obrigatório ou opcional
- Tempo de preparação do ambiente
- Tempo de limpeza do ambiente
- Reserva automática de recursos (toggle)

---

### 4. Modais de Serviços

#### 4.1 Quick View do Serviço (MDL-SRV-001)
**Status:** MVP | **Tipo:** Modal lateral (drawer) ou central

**Conteúdo:**
- Imagem do serviço
- Nome e categoria
- Badge de disponibilidade
- Preço destacado
- Duração
- Descrição resumida
- Lista de profissionais que realizam
- Botões de ação:
  - "Agendar este serviço"
  - "Ver detalhes completos"
  - "Editar serviço" (se admin)
  - "Compartilhar"

**Dimensões:** 500px de largura (drawer) ou 600px (modal central)

---

#### 4.2 Confirmar Exclusão de Serviço (MDL-SRV-002)
**Status:** MVP

**Conteúdo:**
- Ícone de alerta (warning)
- Título: "Excluir serviço?"
- Nome do serviço em destaque
- Lista de impactos:
  - X agendamentos futuros serão afetados
  - X pacotes incluem este serviço
  - Histórico será mantido mas não poderá ser reagendado
- Checkbox: "Entendo as consequências e desejo prosseguir"
- Campo: "Digite o nome do serviço para confirmar"
- Botões: "Cancelar" / "Excluir permanentemente" (desabilitado até confirmação)

**Variação - Desativação:**
- Se houver agendamentos futuros, oferecer "Desativar" em vez de excluir
- Explicar diferença entre desativar e excluir

---

#### 4.3 Duplicar Serviço (MDL-SRV-003)
**Status:** MVP

**Conteúdo:**
- Nome do novo serviço* (pré-preenchido: "[Nome] - Cópia")
- Opções de cópia (checkboxes):
  - [x] Copiar configurações de duração e preço
  - [x] Copiar profissionais vinculados
  - [x] Copiar recursos necessários
  - [x] Copiar configurações de agendamento
  - [x] Copiar imagens
- Botões: "Cancelar" / "Criar cópia"

---

#### 4.4 Selecionar Profissional para Serviço (MDL-SRV-004)
**Status:** MVP

**Uso:** Modal para escolha de profissional ao criar/editar serviço ou ao agendar

**Conteúdo:**
- Busca/filtro de profissionais
- Lista de cards com:
  - Foto do profissional
  - Nome
  - Especialidade
  - Rating/avaliação
  - Próxima disponibilidade
  - Badge "Preferencial"
- Toggle para selecionar múltiplos ou radio para único
- Preview de duração/preço específico do profissional
- Botões: "Cancelar" / "Confirmar seleção"

---

#### 4.5 Adicionar Variação de Serviço (MDL-SRV-005)
**Status:** MVP

**Conteúdo:**
- Nome da variação* (input)
- Descrição (textarea)
- Preço (currency input)
- Duração (time picker)
- Profissionais que realizam (checkbox list)
- Botões: "Cancelar" / "Salvar variação"

---

#### 4.6 Preview de Serviço no Cliente (MDL-SRV-006)
**Status:** Futuro

**Uso:** Ver como o serviço aparecerá para o cliente no app/site

**Conteúdo:**
- Simulação de visualização mobile/web
- Foto, nome, preço, duração
- Botão "Agendar" (não funcional, apenas visual)
- Toggle entre temas (claro/escuro)

---

#### 4.7 Configurar Comissão por Serviço (MDL-SRV-007)
**Status:** Futuro

**Conteúdo:**
- Tabela de profissionais
- Percentual de comissão por profissional
- Valor fixo alternativo
- Regras de comissão (sobre valor total, sobre valor líquido, etc.)
- Data de vigência

---

### 5. Componentes Específicos de Serviços

#### 5.1 Card de Serviço (CMP-SRV-001)
**Status:** MVP

**Variações:**
- **Compacto:** Nome, duração, preço, ícone de categoria
- **Completo:** + imagem, descrição, profissionais, badge de disponibilidade
- **Lista:** Visualização em linha para tabelas

**Estados:**
- Default
- Hover (elevação + shadow)
- Selecionado (borda destacada)
- Indisponível (opacity reduzida)
- Promoção (badge de desconto)

**Elementos:**
- Thumbnail/imagem
- Nome do serviço
- Categoria (badge colorido)
- Duração (ícone de relógio + tempo)
- Preço (destacado, com preço antigo tachado se promoção)
- Rating (se aplicável)
- Profissionais (stack de avatares)
- Ações rápidas (menu ou botões)

---

#### 5.2 Badge de Disponibilidade (CMP-SRV-002)
**Status:** MVP

**Variações:**
- **Disponível:** Verde + ícone check
- **Indisponível:** Vermelho + ícone X
- **Agendamento online:** Ícone globo/wifi
- **Apenas presencial:** Ícone loja
- **Promoção:** Laranja/vermelho + percentual
- **Novo:** Badge "Novo"
- **Popular:** Badge "Mais pedido"

---

#### 5.3 Indicador de Duração (CMP-SRV-003)
**Status:** MVP

**Formatos:**
- **Texto:** "45 min", "1h 30min"
- **Visual:** Barra proporcional ou ícone de relógio
- **Timeline:** Slot visual representando a duração

**Cores por duração:**
- < 30min: Verde
- 30-60min: Amarelo
- 60-120min: Laranja
- > 120min: Vermelho

---

#### 5.4 Seletor de Variação (CMP-SRV-004)
**Status:** MVP

**Interface:**
- Chips clicáveis ou dropdown
- Mostra nome + preço adicional/total
- Destaque na opção selecionada
- Preview de duração atualizada

**Comportamento:**
- Atualiza preço total dinamicamente
- Atualiza duração total
- Filtra profissionais disponíveis

---

#### 5.5 Lista de Profissionais Vinculados (CMP-SRV-005)
**Status:** MVP

**Formatos:**
- **Stack de avatares:** Mostra até 3 fotos + "+X"
- **Lista horizontal:** Fotos + nomes
- **Lista vertical:** Completa com detalhes

**Interações:**
- Hover: tooltip com nome
- Click: abre modal de detalhes
- "+X": mostra todos em modal

---

#### 5.6 Tabela de Preços/Durações (CMP-SRV-006)
**Status:** MVP

**Uso:** Comparar variações ou profissionais

**Colunas:**
- Variação/Profissional
- Duração
- Preço
- Disponibilidade
- Ações

**Features:**
- Ordenação por coluna
- Edição inline
- Destaque de diferenças

---

#### 5.7 Galeria de Imagens do Serviço (CMP-SRV-007)
**Status:** Futuro

**Funcionalidades:**
- Thumbnails clicáveis
- Lightbox para visualização ampliada
- Zoom
- Navegação com setas
- Contador (1/5)

---

#### 5.8 Comparador de Serviços (CMP-SRV-008)
**Status:** Futuro

**Uso:** Comparar 2-3 serviços lado a lado

**Layout:**
- Tabela comparativa
- Linhas: preço, duração, profissionais, recursos, incluído
- Destaque das diferenças
- Botão de agendar direto da comparação

---

#### 5.9 Indicador de Recursos Necessários (CMP-SRV-009)
**Status:** Futuro

**Interface:**
- Ícones de recursos necessários
- Tooltip com detalhes
- Alerta se recurso indisponível

---

---

## PARTE 2: AGENDAMENTOS

### 6. Resumo do Módulo

O módulo de Agendamentos é o núcleo operacional do sistema, permitindo o agendamento de clientes, gestão de disponibilidade de profissionais, controle de horários e comunicação com clientes.

**Objetivos:**
- Permitir agendamentos de clientes
- Gerenciar disponibilidade de profissionais
- Visualizar calendários (diário, semanal, mensal)
- Enviar lembretes e notificações
- Controlar histórico de atendimentos
- Gerenciar fila de espera

**Integrações:**
- Catálogo de Serviços (obrigatório)
- Cadastro de Clientes
- Profissionais/Colaboradores
- Notificações (WhatsApp, Email, SMS)
- Financeiro (pagamentos, comissões)
- Estoque (consumo de produtos)

**Papéis de Usuário:**
- **Administrador:** Acesso total, configurações
- **Recepcionista:** Criar/editar agendamentos, visualizar todos
- **Profissional:** Ver própria agenda, confirmar atendimentos
- **Cliente:** Agendar online (via portal/app)

---

### 7. Telas de Agendamentos

#### 7.1 Calendário Semanal (TELA-AGE-001)
**Status:** MVP | **Prioridade:** Alta

**Descrição:** Visualização semanal do calendário, principal ferramenta de gestão de agenda.

**Layout:**
- Header: Navegação de semanas + data atual + botões de visualização
- Sidebar esquerda: Lista de profissionais (filtro)
- Área principal: Grade de horários × dias da semana
- Sidebar direita: Detalhes do agendamento selecionado (colapsável)

**Configurações da Grade:**
- Dias visíveis: 5 (seg-sex) ou 7 (todos)
- Horário de exibição: configurável (ex: 08:00 às 20:00)
- Intervalo de grade: 15, 30 ou 60 minutos
- Altura de slot: compacto (20px), normal (40px), confortável (60px)

**Elementos Visuais:**
- **Slots vazios:** Cor neutra, hover para adicionar
- **Slots ocupados:** Card do agendamento com cor por status
- **Horários bloqueados:** Cor cinza com ícone de cadeado
- **Horário atual:** Linha vermelha horizontal
- **Foco do dia:** Coluna destacada

**Cards de Agendamento:**
- Cor por status (confirmado, pendente, concluído, cancelado)
- Nome do cliente
- Serviço (abreviado ou ícone)
- Duração visual (altura proporcional)
- Profissional (se visão de múltiplos)
- Ícones de indicação (primeira vez, pagamento, observação)

**Interações:**
- Click em slot vazio: abre modal de novo agendamento
- Click em agendamento: abre detalhes
- Drag & drop: mover agendamento
- Resize: alterar duração
- Scroll: navegar horários
- Zoom: Ctrl + scroll para compactar/expandir

**Filtros e Busca:**
- Por profissional (single/multi-select)
- Por serviço
- Por status
- Por cliente (busca)
- Por tipo (presencial, online, todos)

**Legenda:**
- Status de agendamento
- Tipos de bloqueio
- Cores de serviços

---

#### 7.2 Calendário Diário (TELA-AGE-002)
**Status:** MVP | **Prioridade:** Alta

**Descrição:** Visualização detalhada de um único dia, ideal para gestão operacional.

**Layout:**
- Header: Data selecionada + navegação + resumo do dia
- Timeline vertical principal (08:00 às 20:00+)
- Múltiplas colunas se vários profissionais selecionados
- Painel lateral de informações

**Estrutura da Timeline:**
- Cada profissional = uma coluna
- Horários em eixo Y
- Agendamentos como blocos na timeline
- Altura proporcional à duração

**Painel Lateral:**
- Resumo do dia:
  - Total de agendamentos
  - Ocupação (percentual)
  - Faturamento previsto
  - Clientes atendidos
- Lista de agendamentos do dia (ordenada por horário)
- Fila de espera
- Próximos horários disponíveis

**Visualização de Conflitos:**
- Alerta visual se houver sobreposição
- Indicador de agendamento em espera
- Sugestão de realocação

---

#### 7.3 Calendário Mensal (TELA-AGE-003)
**Status:** MVP | **Prioridade:** Média

**Descrição:** Visão mensal para planejamento de longo prazo.

**Layout:**
- Grid 7×6 (dias da semana × semanas)
- Header com navegação de mês
- Células representando dias
- Mini lista de eventos por dia

**Conteúdo das Células:**
- Número do dia
- Indicador de ocupação (barra colorida ou percentual)
- Lista compacta de agendamentos (máx 3-4)
- "+X mais" se houver mais
- Marcadores especiais (feriado, bloqueio, evento)

**Interações:**
- Click no dia: abre visualização diária
- Click em agendamento: abre detalhes
- Click em "+X mais": abre lista do dia

**Indicadores Visuais:**
- Hoje: círculo destacado
- Dia selecionado: borda destacada
- Feriado: cor de fundo diferente
- Bloqueio total: ícone
- Ocupação alta (>80%): cor vermelha na barra

---

#### 7.4 Lista de Agendamentos (TELA-AGE-004)
**Status:** MVP | **Prioridade:** Alta

**Descrição:** Visualização em lista/tabela de todos os agendamentos, com filtros avançados.

**Layout:**
- Header com título e contador
- Barra de filtros avançados
- Tabela de dados
- Paginação ou scroll infinito
- Botões de ação em massa

**Colunas da Tabela:**
- Checkbox (seleção múltipla)
- Código/ID do agendamento
- Data e horário
- Cliente (foto + nome)
- Serviço
- Profissional
- Duração
- Status (badge colorido)
- Valor
- Ações (visualizar, editar, cancelar)

**Filtros Disponíveis:**
- Período (date range picker)
- Status (multi-select)
- Cliente (busca)
- Profissional (multi-select)
- Serviço (multi-select)
- Tipo de agendamento
- Forma de pagamento
- Origem (online, presencial, telefone)

**Ordenação:**
- Data (asc/desc)
- Cliente
- Profissional
- Status
- Valor

**Ações em Massa:**
- Confirmar selecionados
- Cancelar selecionados
- Enviar lembrete
- Exportar
- Imprimir

**Visualizações Alternativas:**
- Cards (para visualização mais visual)
- Kanban (por status)
- Timeline (histórico)

---

#### 7.5 Novo Agendamento (TELA-AGE-005)
**Status:** MVP | **Prioridade:** Alta

**Descrição:** Fluxo completo para criar um novo agendamento.

**Layout:**
- Wizard de passos OU formulário em seções
- Resumo lateral (sticky)
- Calendário/horário interativo

**Fluxo de Passos:**

**Passo 1: Selecionar Cliente**
- Busca de cliente existente
- Botão "+ Cadastrar novo cliente"
- Lista de últimos clientes
- Foto e dados básicos do cliente selecionado
- Histórico rápido do cliente (últimos agendamentos)

**Passo 2: Selecionar Serviço(s)**
- Lista de serviços (categorizada)
- Busca por nome
- Multi-seleção permitida
- Para cada serviço:
  - Selecionar variação (se houver)
  - Visualizar duração e preço
  - Remover da lista
- Ordem de execução (drag & drop se múltiplos)
- Cálculo automático:
  - Duração total
  - Preço total
  - Horário de término previsto

**Passo 3: Selecionar Profissional e Horário**
- Visualização de disponibilidade:
  - Mini calendário mensal
  - Grade de horários do dia selecionado
  - Destaque de slots disponíveis
- Seleção de profissional (filtro)
- Seleção de data e horário
- Preview da agenda do profissional no dia
- Sugestão de horários alternativos se indisponível

**Passo 4: Confirmar e Adicionar Detalhes**
- Resumo de tudo:
  - Cliente
  - Serviços e duração
  - Profissional
  - Data e horário
  - Valor total
- Campos adicionais:
  - Observações do cliente
  - Observações internas
  - Indicação (como conheceu)
  - Forma de pagamento prevista
  - Solicitação de confirmação (toggle)
  - Enviar confirmação imediata (toggle)

**Passo 5: Confirmação**
- Mensagem de sucesso
- Código do agendamento
- Botões:
  - "Ver na agenda"
  - "Adicionar outro agendamento"
  - "Enviar confirmação WhatsApp"
  - "Imprimir comprovante"

**Validações em Tempo Real:**
- Disponibilidade do profissional
- Conflitos de horário
- Duração excede horário de fechamento
- Cliente já tem agendamento no mesmo horário

---

#### 7.6 Detalhes do Agendamento (TELA-AGE-006)
**Status:** MVP | **Prioridade:** Alta

**Descrição:** Visualização completa de um agendamento específico.

**Layout:**
- Header com código, status, ações principais
- Grid de informações dividido em seções
- Timeline de eventos do agendamento
- Área de comunicação/observações

**Seções de Informação:**

**Card Cliente:**
- Foto, nome, telefone
- Badge: "Primeira vez" ou "Cliente frequente"
- Histórico: total de visitas, última visita
- Botão "Ver ficha completa"

**Card Serviços:**
- Lista de serviços agendados
- Duração de cada um
- Profissional responsável por cada serviço
- Valores
- Botão "Editar serviços"

**Card Data e Horário:**
- Data e hora de início
- Previsão de término
- Tempo restante (se futuro)
- Duração total
- Botão "Reagendar"

**Card Status e Pagamento:**
- Status atual (badge grande)
- Histórico de alterações de status
- Valor total
- Valor pago / pendente
- Forma de pagamento
- Comprovante/preview

**Card Observações:**
- Observações do cliente
- Observações internas
- Anexos (fotos, documentos)

**Timeline de Eventos:**
- Agendamento criado (quando, por quem)
- Confirmações enviadas
- Lembrete enviado
- Status alterados
- Pagamentos registrados
- Observações adicionadas

**Ações Disponíveis:**
- Confirmar (se pendente)
- Iniciar atendimento (check-in)
- Finalizar atendimento (checkout)
- Reagendar
- Cancelar
- Editar detalhes
- Enviar mensagem ao cliente
- Registrar pagamento
- Adicionar observação
- Imprimir
- Duplicar agendamento

---

#### 7.7 Configurar Disponibilidade (TELA-AGE-007)
**Status:** MVP | **Prioridade:** Alta

**Descrição:** Configuração de horários de trabalho dos profissionais.

**Layout:**
- Seletor de profissional
- Visualização semanal tipo grade
- Modal/área de edição

**Visualização:**
- Grade com dias da semana (colunas) e horários (linhas)
- Blocos coloridos indicando:
  - Horário de trabalho (verde)
  - Horário de almoço/pausa (amarelo)
  - Indisponível (cinza)
  - Feriado/bloqueio (vermelho)

**Configurações por Período:**
- Horário padrão de trabalho
- Exceções (dias específicos)
- Feriados
- Férias do profissional

**Campos de Configuração:**
- Dia da semana
- Hora de início
- Hora de término
- Pausa (início e fim)
- Duração mínima de agendamento
- Duração máxima de agendamento
- Slot padrão (intervalos disponíveis)

**Funcionalidades:**
- Copiar configuração para outros dias
- Copiar configuração para outros profissionais
- Aplicar exceção em data específica
- Recorrência de exceções

---

#### 7.8 Bloquear Horários (TELA-AGE-008)
**Status:** MVP | **Prioridade:** Média

**Descrição:** Tela para criar e gerenciar bloqueios de agenda (folgas, reuniões, etc.).

**Layout:**
- Lista de bloqueios existentes
- Formulário de novo bloqueio
- Visualização no calendário

**Tipos de Bloqueio:**
- **Pessoal:** Apenas um profissional (folga, consulta)
- **Coletivo:** Todos os profissionais (reunião, feriado)
- **Sala:** Recurso específico indisponível (manutenção)

**Campos:**
- Título/motivo do bloqueio*
- Tipo (pessoal/coletivo/sala)*
- Profissional(s) afetado(s)*
- Data e horário de início*
- Data e horário de término*
- Recorrente? (toggle)
  - Se sim: regra de recorrência
- Cor/label (para identificação visual)
- Observações

**Validações:**
- Verificar agendamentos existentes no período
- Alertar sobre conflitos
- Opção de notificar clientes afetados

---

#### 7.9 Fila de Espera (TELA-AGE-009)
**Status:** MVP | **Prioridade:** Média

**Descrição:** Gestão de clientes aguardando vaga para agendamento.

**Layout:**
- Lista de clientes na fila (ordenada por prioridade/data)
- Detalhes de cada solicitação
- Área de ações

**Informações por Cliente na Fila:**
- Posição na fila
- Nome e contato
- Serviço desejado
- Preferência de profissional
- Período desejado (flexível ou específico)
- Data de entrada na fila
- Prioridade (normal, alta, urgente)
- Observações

**Ações:**
- Encontrar horário disponível (busca automática)
- Converter em agendamento
- Entrar em contato
- Remover da fila
- Alterar prioridade
- Adicionar à fila

**Busca Automática:**
- Sistema busca slots disponíveis
- Considera preferências do cliente
- Ordena opções por proximidade da preferência
- Permite enviar opções ao cliente

---

#### 7.10 Histórico de Atendimentos (TELA-AGE-010)
**Status:** MVP | **Prioridade:** Média

**Descrição:** Consulta ao histórico completo de atendimentos realizados.

**Layout:**
- Filtros avançados
- Lista/Timeline de atendimentos
- Estatísticas e gráficos

**Filtros:**
- Período
- Cliente
- Profissional
- Serviço
- Status (concluído, faltou, cancelado)

**Visualizações:**
- **Lista:** Tabela detalhada
- **Timeline:** Visualização cronológica
- **Cliente:** Agrupado por cliente

**Informações Exibidas:**
- Data e horário
- Cliente
- Serviços realizados
- Profissional
- Duração real
- Valor
- Status
- Observações
- Fotos/anexos (se houver)

**Estatísticas:**
- Total de atendimentos no período
- Taxa de comparecimento
- Ticket médio
- Serviços mais populares
- Profissional com mais atendimentos
- Clientes frequentes

---

#### 7.11 Relatório de Ocupação (TELA-AGE-011)
**Status:** Futuro | **Prioridade:** Média

**Descrição:** Dashboard analítico de ocupação e performance.

**Layout:**
- Dashboard com múltiplos gráficos
- Filtros de período
- Exportação de dados

**Gráficos e Métricas:**
- Ocupação por dia/semana/mês
- Comparativo entre profissionais
- Horários de pico
- Dias mais movimentados
- Taxa de cancelamento
- Tempo médio de atendimento
- Receita por período
- Taxa de ocupação por profissional

**Filtros:**
- Período (dia, semana, mês, ano, personalizado)
- Profissional(s)
- Serviço(s)
- Comparar períodos

---

#### 7.12 Configurações de Agendamento (TELA-AGE-012)
**Status:** MVP | **Prioridade:** Média

**Descrição:** Configurações gerais do módulo de agendamentos.

**Seções de Configuração:**

**Horário de Funcionamento:**
- Dias de funcionamento
- Horário de abertura e fechamento
- Feriados

**Regras de Agendamento:**
- Antecedência mínima para agendar
- Antecedência máxima
- Tempo de tolerância (atraso)
- Intervalo mínimo entre agendamentos

**Notificações:**
- Lembrete automático (quando enviar)
- Canal padrão (WhatsApp, email, SMS)
- Template de mensagens
- Confirmação automática

**Online:**
- Habilitar agendamento online
- Serviços disponíveis online
- Profissionais disponíveis online
- Requerer cadastro prévio

**Integrações:**
- Google Calendar
- Outlook Calendar
- WhatsApp Business

---

### 8. Formulários de Agendamentos

#### 8.1 Formulário: Novo Agendamento (FRM-AGE-001)
**Status:** MVP

**Campos - Seção Cliente:**
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| Cliente | Search/Select | Sim | Busca por nome, telefone, email |
| Ou cadastrar novo | Button | - | Abre modal de cadastro rápido |

**Campos - Seção Serviços:**
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| Serviços | Multi-select | Sim (mín 1) | Lista de serviços disponíveis |
| Variação | Select | Condicional | Se o serviço tiver variações |
| Ordem | Drag list | Não | Ordem de execução |
| Duração total | Calculated | - | Soma das durações |
| Preço total | Calculated | - | Soma dos preços |

**Campos - Seção Data/Hora:**
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| Profissional | Select | Sim | Apenas habilitados para o serviço |
| Data | Date picker | Sim | Calendário com disponibilidade |
| Horário | Time picker/Grid | Sim | Mostra apenas horários disponíveis |
| Previsão de término | Calculated | - | Calculado automaticamente |

**Campos - Seção Detalhes:**
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| Observações do cliente | Textarea | Não | Visível ao profissional |
| Observações internas | Textarea | Não | Apenas interno |
| Indicação | Select | Não | Como conheceu |
| Forma de pagamento | Select | Não | Previsto |
| Solicitar confirmação | Toggle | Não | Enviar confirmação ao cliente |
| Lembrete automático | Toggle | Não | Default: ON |

**Validações:**
- Horário disponível para o profissional
- Não conflita com outro agendamento
- Dentro do horário de funcionamento
- Respeita antecedência mínima configurada

---

#### 8.2 Formulário: Reagendar (FRM-AGE-002)
**Status:** MVP

**Campos:**
- Novo profissional (select - opcional, mantém atual por padrão)
- Nova data (date picker)
- Novo horário (time picker/grade)
- Motivo do reagendamento (select + textarea)
  - Opções: Cliente solicitou, Profissional indisponível, Outro
- Notificar cliente (toggle - default: ON)
- Mensagem personalizada (textarea)

**Validações:**
- Mesmas do novo agendamento
- Se houver pagamento antecipado, mantém
- Se serviço mudou de preço, decisão do usuário

---

#### 8.3 Formulário: Cancelar Agendamento (FRM-AGE-003)
**Status:** MVP

**Campos:**
- Motivo do cancelamento* (select)
  - Cliente desistiu
  - Cliente não compareceu
  - Profissional indisponível
  - Erro no agendamento
  - Outro
- Detalhes do motivo (textarea)
- Penalidade aplicada (toggle + valor)
- Notificar cliente (toggle - default: ON)
- Mensagem de cancelamento (textarea)
- Política de reembolso (calculado + decisão)

**Confirmação:**
- Resumo do impacto:
  - Serviços cancelados
  - Valores a reembolsar
  - Cliente afetado
  - Horário liberado

---

#### 8.4 Formulário: Registrar Atendimento (FRM-AGE-004)
**Status:** MVP

**Uso:** Finalizar agendamento após atendimento realizado

**Campos - Seção Execução:**
| Campo | Tipo | Descrição |
|-------|------|-----------|
| Serviços realizados | Checkbox list | Marcar o que foi feito |
| Duração real | Duration | Tempo que levou |
- Profissional que atendeu | Select | Se diferente do agendado |

**Campos - Seção Produtos Utilizados:**
| Campo | Tipo | Descrição |
|-------|------|-----------|
| Produtos | Listagem dinâmica | Produtos do estoque + quantidade |

**Campos - Seção Pagamento:**
| Campo | Tipo | Descrição |
|-------|------|-----------|
| Valor final | Currency | Pode ser diferente do previsto |
| Desconto aplicado | Currency ou % |
| Forma de pagamento | Select |
| Status do pagamento | Select | Pago, Pendente, Parcial |
| Observações financeiras | Textarea |

**Campos - Seção Avaliação:**
- Cliente compareceu? (toggle)
- Observações do atendimento (textarea)
- Anexos (upload de fotos/documentos)

---

#### 8.5 Formulário: Configurar Disponibilidade (FRM-AGE-005)
**Status:** MVP

**Campos por Dia da Semana:**
| Campo | Tipo | Descrição |
|-------|------|-----------|
| Ativo | Toggle | Se trabalha neste dia |
| Horário início | Time | Início do expediente |
| Horário fim | Time | Fim do expediente |
| Pausa início | Time | Início do intervalo |
| Pausa fim | Time | Fim do intervalo |
| Slot padrão | Select | 15, 30, 45, 60 min |

**Campos - Exceções:**
- Data específica (date picker)
- Tipo (indisponível/horário diferente)
- Novo horário (se aplicável)
- Motivo (textarea)
- Recorrente? (toggle + regra)

---

#### 8.6 Formulário: Adicionar à Fila de Espera (FRM-AGE-006)
**Status:** MVP

**Campos:**
- Cliente* (search/select)
- Serviço desejado* (select)
- Variação (select - condicional)
- Profissional preferencial (select)
- Período desejado:
  - Flexível (toggle)
  - Data preferencial (date)
  - Horário preferencial (time)
- Prioridade (select: Normal, Alta, Urgente)
- Observações (textarea)
- Data limite de espera (date)

---

#### 8.7 Formulário: Enviar Confirmação (FRM-AGE-007)
**Status:** MVP

**Campos:**
- Canal de envio* (select: WhatsApp, Email, SMS)
- Template de mensagem (select)
- Mensagem personalizada (textarea)
- Preview da mensagem
- Incluir link de confirmação (toggle)
- Agendar envio (toggle + datetime)

---

### 9. Modais de Agendamentos

#### 9.1 Selecionar Horário (MDL-AGE-001)
**Status:** MVP

**Conteúdo:**
- Mini calendário mensal
- Grade de horários do dia selecionado
- Indicadores:
  - Disponível (verde)
  - Ocupado (vermelho)
  - Bloqueado (cinza)
- Preview de duração ao selecionar
- Botão "Horários alternativos" (se indisponível)
- Legenda de cores

---

#### 9.2 Selecionar Profissional (MDL-AGE-002)
**Status:** MVP

**Conteúdo:**
- Lista de profissionais habilitados para o serviço
- Cards com:
  - Foto
  - Nome
  - Especialidade
  - Rating
  - Próxima disponibilidade
  - Horários disponíveis no dia (mini grade)
- Busca/filtro
- Ordenação (disponibilidade, nome, rating)

---

#### 9.3 Selecionar Cliente (MDL-AGE-003)
**Status:** MVP

**Conteúdo:**
- Busca por nome, telefone, email
- Lista de resultados com:
  - Foto
  - Nome
  - Telefone
  - Último agendamento
  - Total de visitas
- Botão "+ Cadastrar novo"
- Lista de "Últimos clientes" abaixo

---

#### 9.4 Confirmar Agendamento (MDL-AGE-004)
**Status:** MVP

**Conteúdo:**
- Resumo visual do agendamento:
  - Ícone grande de confirmação
  - Data e horário destacados
  - Cliente
  - Serviços
  - Profissional
  - Valor
- Opções:
  - Enviar confirmação imediata (toggle)
  - Adicionar à agenda do cliente (toggle)
  - Solicitar confirmação do cliente (toggle)
- Botão "Confirmar Agendamento"

---

#### 9.5 Cancelar Agendamento (MDL-AGE-005)
**Status:** MVP

**Conteúdo:**
- Aviso de impacto
- Motivo do cancelamento* (select)
- Detalhes (textarea)
- Política de cancelamento (texto informativo)
- Valor a reembolsar (calculado)
- Notificar cliente (toggle)
- Checkbox de confirmação
- Botão "Cancelar Agendamento"

---

#### 9.6 Reagendar Agendamento (MDL-AGE-006)
**Status:** MVP

**Conteúdo:**
- Motivo (select)
- Seleção de nova data/hora (calendário + grade)
- Seleção de novo profissional (se aplicável)
- Preview de conflitos
- Notificar cliente (toggle)
- Mensagem personalizada
- Botão "Confirmar Reagendamento"

---

#### 9.7 Adicionar Observação (MDL-AGE-007)
**Status:** MVP

**Conteúdo:**
- Tipo de observação (select: Cliente, Interna, Financeira)
- Texto da observação* (textarea)
- Visibilidade (quem pode ver)
- Anexos (upload)
- Botão "Salvar Observação"

---

#### 9.8 Enviar Mensagem WhatsApp (MDL-AGE-008)
**Status:** MVP

**Conteúdo:**
- Template de mensagem (select)
- Preview da mensagem
- Edição da mensagem (textarea)
- Variáveis disponíveis (insert buttons)
- Preview no formato de celular
- Botão "Enviar Mensagem"

---

#### 9.9 Visualização Rápida do Dia (MDL-AGE-009)
**Status:** MVP

**Conteúdo:**
- Data selecionada
- Lista de agendamentos do dia
- Resumo de ocupação
- Botões de ação rápida
- Navegação para dia anterior/próximo

---

#### 9.10 Registrar Pagamento (MDL-AGE-010)
**Status:** MVP

**Conteúdo:**
- Valor total
- Valor pago* (currency)
- Forma de pagamento* (select)
- Troco (calculado)
- Parcelas (se cartão)
- Observações
- Comprovante (upload)
- Botão "Confirmar Pagamento"

---

#### 9.11 Check-in do Cliente (MDL-AGE-011)
**Status:** MVP

**Conteúdo:**
- Confirmação de chegada do cliente
- Hora de chegada (default: agora)
- Cliente está pronto? (toggle)
- Sala/espera (select)
- Notificar profissional (toggle)
- Botão "Confirmar Check-in"

---

#### 9.12 Checkout/Finalizar (MDL-AGE-012)
**Status:** MVP

**Conteúdo:**
- Resumo do atendimento
- Serviços realizados (checkbox)
- Duração real
- Produtos utilizados
- Pagamento
- Satisfação do cliente (rating)
- Botão "Finalizar Atendimento"

---

#### 9.13 Agendamento Rápido (MDL-AGE-013)
**Status:** MVP

**Uso:** Criar agendamento com mínimo de informações

**Conteúdo:**
- Cliente (search)
- Serviço (select rápido)
- Data/hora (picker simples)
- Profissional (select)
- Observação rápida
- Botão "Agendar"

---

#### 9.14 Duplicar Agendamento (MDL-AGE-014)
**Status:** Futuro

**Conteúdo:**
- Novo cliente (mesmo por padrão)
- Nova data/hora
- Mesmo profissional (toggle)
- Manter serviços (toggle)
- Botão "Criar Cópia"

---

#### 9.15 Sugerir Horários Alternativos (MDL-AGE-015)
**Status:** Futuro

**Uso:** Quando horário desejado está indisponível

**Conteúdo:**
- Horário solicitado (indisponível)
- Lista de alternativas:
  - Mesmo dia, horários próximos
  - Dias seguintes, mesmo horário
  - Outros profissionais
- Botão "Agendar neste horário" para cada opção

---

### 10. Componentes Específicos de Agendamentos

#### 10.1 Calendário Interativo (CMP-AGE-001)
**Status:** MVP

**Features:**
- Drag & drop de agendamentos
- Resize para alterar duração
- Click para criar/editar
- Multi-seleção (Ctrl+click)
- Zoom (Ctrl+scroll)
- Navegação por gestos (swipe)
- Atualização em tempo real (websockets)

**Visual:**
- Grade de fundo
- Agendamentos como blocos
- Cores por status
- Linha do tempo atual

---

#### 10.2 Slot de Horário (CMP-AGE-002)
**Status:** MVP

**Estados:**
- **Vazio:** Clique para agendar
- **Ocupado:** Agendamento
- **Bloqueado:** Indisponível
- **Parcial:** Agendamento que excede slot

**Interações:**
- Hover: preview de criação
- Click: ação principal
- Right-click: menu de contexto

---

#### 10.3 Card de Agendamento (CMP-AGE-003)
**Status:** MVP

**Conteúdo:**
- Hora de início
- Nome do cliente
- Serviço (abreviado/ícone)
- Duração visual
- Status (cor da borda/fundo)
- Ícones indicadores:
  - Primeira vez
  - Pagamento pendente
  - Observação
  - Confirmação pendente
  - Anexos

**Tamanhos:**
- **Compacto:** Apenas hora + cliente
- **Normal:** + serviço
- **Completo:** + todos os detalhes

**Cores por Status:**
- Pendente: Amarelo
- Confirmado: Verde
- Em andamento: Azul
- Concluído: Cinza
- Cancelado: Vermelho
- Não compareceu: Laranja

---

#### 10.4 Timeline do Dia (CMP-AGE-004)
**Status:** MVP

**Visualização:**
- Eixo vertical de horários
- Agendamentos posicionados por hora
- Altura proporcional à duração
- Linha do horário atual
- Marcadores de eventos (check-in, checkout)

---

#### 10.5 Mini Calendário (CMP-AGE-005)
**Status:** MVP

**Features:**
- Mês atual
- Navegação mês anterior/próximo
- Destaque do dia selecionado
- Indicadores de ocupação:
  - Ponto verde: tem agendamento
  - Ponto vermelho: lotado
  - Cor de fundo: feriado/fim de semana
- Click seleciona dia

---

#### 10.6 Indicador de Disponibilidade (CMP-AGE-006)
**Status:** MVP

**Formatos:**
- **Barra:** Verde (disponível) / Vermelho (ocupado)
- **Percentual:** "70% ocupado"
- **Badge:** "3 vagas disponíveis"
- **Visual:** Mapa de calor no calendário

**Cores:**
- 0-30%: Verde
- 31-70%: Amarelo
- 71-90%: Laranja
- 91-100%: Vermelho

---

#### 10.7 Badge de Confirmação (CMP-AGE-007)
**Status:** MVP

**Variações:**
- **Pendente:** Relógio + "Aguardando confirmação"
- **Confirmado:** Check + "Confirmado"
- **Lembrete enviado:** "Lembrete enviado"
- **Cliente confirmou:** Duplo check verde

---

#### 10.8 Lista de Espera (CMP-AGE-008)
**Status:** MVP

**Visualização:**
- Lista ordenada por prioridade
- Cards com:
  - Posição (#1, #2...)
  - Nome do cliente
  - Serviço desejado
  - Data de entrada
  - Prioridade (badge)
- Botões de ação em cada item
- Drag para reordenar

---

#### 10.9 Foto do Profissional (CMP-AGE-009)
**Status:** MVP

**Features:**
- Avatar circular/quadrado
- Badge de status online/offline
- Indicador de "em atendimento"
- Hover: tooltip com nome
- Click: abre perfil/agenda

**Variações:**
- Pequeno (32px): Lista
- Médio (48px): Cards
- Grande (64px): Detalhes

---

#### 10.10 Barra Visual de Duração (CMP-AGE-010)
**Status:** MVP

**Uso:** Representar visualmente a duração de um agendamento

**Features:**
- Altura proporcional aos minutos
- Cor por serviço ou status
- Label com tempo
- Quebra visual se ultrapassar horário comercial
- Indicador de tempo restante

---

#### 10.11 Seletor de Data/Hora (CMP-AGE-011)
**Status:** MVP

**Componente Composto:**
- Date picker (calendário)
- Time picker (grade de horários)
- Validação de disponibilidade em tempo real
- Feedback visual de indisponibilidade

---

#### 10.12 Resumo de Agendamento (CMP-AGE-012)
**Status:** MVP

**Uso:** Widget lateral ou card de resumo

**Conteúdo:**
- Ícone ilustrativo
- Data/hora
- Cliente
- Serviços
- Profissional
- Valor
- Status

---

#### 10.13 Indicador de Conflito (CMP-AGE-013)
**Status:** MVP

**Visual:**
- Ícone de alerta
- Borda vermelha em agendamentos conflitantes
- Tooltip explicando o conflito
- Sugestão de resolução

---

#### 10.14 Botão Flutuante de Agendamento (CMP-AGE-014)
**Status:** MVP

**Features:**
- FAB (Floating Action Button) sempre visível
- Expand em hover/click:
  - Novo agendamento completo
  - Agendamento rápido
  - Adicionar à fila de espera
  - Bloquear horário

---

#### 10.15 Legenda de Cores (CMP-AGE-015)
**Status:** MVP

**Conteúdo:**
- Lista de significados das cores usadas
- Toggle para mostrar/ocultar
- Agrupado por:
  - Status de agendamento
  - Tipos de serviço
  - Profissionais
  - Bloqueios

---

---

## PARTE 3: COMUNS

### 11. Estados de UI

#### 11.1 Estados de Loading

**Tela Carregando (Global):**
- Skeleton screens para listas e tabelas
- Spinner para ações individuais
- Progress bar para uploads
- Shimmer effect em cards

**Calendário Carregando:**
- Esqueleto da grade
- Animação de pulso nos slots
- Mensagem "Carregando agenda..."

**Formulário Carregando:**
- Campos desabilitados
- Spinner no botão de submit
- Overlay semi-transparente

#### 11.2 Estados Vazios

**Sem Serviços Cadastrados:**
- Ícone de serviço
- Mensagem: "Nenhum serviço cadastrado"
- Subtexto: "Comece criando seu primeiro serviço"
- CTA: "Cadastrar Serviço"

**Sem Agendamentos:**
- Ícone de calendário vazio
- Mensagem por contexto:
  - "Nenhum agendamento para hoje"
  - "Nenhum agendamento encontrado"
  - "Sem agendamentos neste período"
- CTA apropriado

**Busca Sem Resultados:**
- Ícone de busca
- Mensagem: "Nenhum resultado para '[termo]'"
- Sugestões:
  - Verificar ortografia
  - Usar termos mais genéricos
  - Limpar filtros
- Botão "Limpar busca"

**Calendário Vazio:**
- Ilustração calendário livre
- "Nenhum agendamento neste período"
- Botão "Criar agendamento"

#### 11.3 Estados de Erro

**Erro de Carregamento:**
- Ícone de erro
- Mensagem descritiva
- Botão "Tentar novamente"
- Link para suporte

**Erro de Conexão:**
- "Sem conexão com internet"
- Ícone offline
- Instruções de verificação

**Erro de Permissão:**
- "Você não tem permissão"
- Ícone de cadeado
- Explicação do que é necessário

**Erro de Validação:**
- Campos destacados em vermelho
- Mensagens específicas por campo
- Scroll automático para o primeiro erro

#### 11.4 Estados de Sucesso

**Ação Concluída:**
- Toast notification
- Animação de check
- Mensagem descritiva
- Ações de follow-up

**Agendamento Confirmado:**
- Modal de confirmação
- Código do agendamento
- Opções de próximas ações
- Compartilhar

**Alteração Salva:**
- Toast: "Alterações salvas com sucesso"
- Sem bloqueio de UI

#### 11.5 Estados Intermediários

**Confirmando:**
- Botão com spinner
- Texto: "Confirmando..."

**Enviando:**
- Progresso de envio
- Estimativa de tempo

**Processando:**
- Modal de processamento
- Explicação do que está acontecendo
- Barra de progresso indeterminada

### 12. Integrações de UI

#### 12.1 Integração com Módulo de Clientes

**Componentes Compartilhados:**
- Card de cliente (usado em agendamentos e cadastro)
- Buscador de cliente
- Modal de cadastro rápido
- Histórico de agendamentos do cliente

**Fluxos:**
- Do agendamento: acessar ficha do cliente
- Do cliente: ver próximos agendamentos
- Do cliente: histórico de serviços realizados

#### 12.2 Integração com Módulo de Profissionais

**Componentes Compartilhados:**
- Card de profissional
- Seletor de profissional
- Agenda individual do profissional
- Performance/histórico

**Fluxos:**
- Do profissional: ver agenda completa
- Do agendamento: ver disponibilidade do profissional
- Do serviço: ver profissionais habilitados

#### 12.3 Integração com Notificações

**Canais:**
- WhatsApp Business
- Email
- SMS
- Push notification

**Pontos de Envio:**
- Confirmação de agendamento
- Lembrete (24h, 2h antes)
- Cancelamento
- Reagendamento
- Confirmação de recebimento
- Pesquisa de satisfação

**UI de Configuração:**
- Templates de mensagens
- Variáveis disponíveis
- Preview das mensagens
- Agendamento de envios
- Histórico de envios

#### 12.4 Integração com Financeiro

**Fluxos:**
- Do agendamento: registrar pagamento
- Do agendamento: verificar status de pagamento
- Do caixa: receber de agendamento específico
- Do relatório: receita por período/serviço

**Componentes:**
- Widget de pagamento
- Indicador de status financeiro
- Modal de checkout

#### 12.5 Integração com Estoque

**Fluxos:**
- Ao finalizar serviço: baixa de produtos
- No agendamento: reserva de produtos
- Alerta de produto em falta para serviço

**Componentes:**
- Lista de produtos utilizados
- Seletor de produtos do estoque
- Alerta de disponibilidade

### 13. Visualizações de Calendário

#### 13.1 Calendário Semanal - Visão Detalhada

**Configurações:**
- 5 dias (seg-sex) ou 7 dias (completo)
- Escala de tempo: 15, 30 ou 60 min
- Altura do slot: 20-60px
- Snap de agendamentos: ao slot mais próximo

**Recursos Avançados:**
- Múltiplos profissionais lado a lado
- Scroll horizontal entre profissionais
- Filtro rápido de profissionais
- Zoom in/out
- Print otimizado

**Interações Avançadas:**
- Duplo click: editar agendamento
- Click longo: menu de contexto
- Swipe: navegar semanas
- Pinch: zoom
- Drag entre dias: mover agendamento

#### 13.2 Calendário Diário - Visão Operacional

**Recursos:**
- Foco em um único dia
- Múltiplas colunas (profissionais ou salas)
- Timeline vertical
- Eventos cronometrados (check-in, início, fim)
- Indicador de atrasos
- Lista de espera lateral

#### 13.3 Calendário Mensal - Visão Gerencial

**Recursos:**
- Grid mensal completo
- Indicadores de ocupação
- Eventos importantes
- Feriados e bloqueios
- Metas de faturamento (linha de meta)
- Comparativo mês anterior

#### 13.4 Calendário de Profissional Individual

**Recursos:**
- Agenda de um único profissional
- Configuração de disponibilidade
- Bloqueios pessoais
- Metas individuais
- Performance diária

#### 13.5 Calendário do Cliente (Portal)

**Recursos:**
- Visualização simplificada
- Horários disponíveis destacados
- Agendamento em 2 cliques
- Histórico de agendamentos
- Próximos agendamentos
- Botão de cancelar/reagendar

---

## ANEXO: Glossário de Termos

| Termo | Definição |
|-------|-----------|
| **Agendamento** | Registro de um compromisso entre cliente, serviço, profissional e horário |
| **Slot** | Intervalo de tempo disponível ou ocupado no calendário |
| **Bloqueio** | Período em que um profissional ou recurso não está disponível |
| **Fila de Espera** | Lista de clientes aguardando horário para determinado serviço |
| **Variação** | Versão alternativa de um serviço (ex: tamanho P/M/G) |
| **Buffer** | Intervalo de tempo entre agendamentos |
| **Check-in** | Registro da chegada do cliente |
| **Checkout** | Registro da finalização do atendimento |
| **Reagendamento** | Alteração de data/hora/profissional de um agendamento existente |
| **Ocupação** | Percentual de tempo agendado vs. tempo disponível |
| **Lead Time** | Antecedência mínima necessária para agendar |
| **No-show** | Cliente que não compareceu ao agendamento |

---

## ANEXO: Checklist de Implementação

### MVP - Prioridade Alta
- [ ] TELA-SRV-001: Lista de Serviços
- [ ] TELA-SRV-002: Detalhes do Serviço
- [ ] TELA-SRV-003: Cadastro de Serviço
- [ ] TELA-SRV-004: Edição de Serviço
- [ ] FRM-SRV-001: Formulário de Cadastro de Serviço
- [ ] MDL-SRV-001: Quick View
- [ ] MDL-SRV-002: Confirmar Exclusão
- [ ] CMP-SRV-001: Card de Serviço

- [ ] TELA-AGE-001: Calendário Semanal
- [ ] TELA-AGE-002: Calendário Diário
- [ ] TELA-AGE-004: Lista de Agendamentos
- [ ] TELA-AGE-005: Novo Agendamento
- [ ] TELA-AGE-006: Detalhes do Agendamento
- [ ] TELA-AGE-007: Configurar Disponibilidade
- [ ] FRM-AGE-001: Formulário Novo Agendamento
- [ ] MDL-AGE-001: Selecionar Horário
- [ ] MDL-AGE-002: Selecionar Profissional
- [ ] MDL-AGE-003: Selecionar Cliente
- [ ] CMP-AGE-001: Calendário Interativo
- [ ] CMP-AGE-003: Card de Agendamento

### Versão 1.1 - Prioridade Média
- [ ] TELA-SRV-005: Categorias
- [ ] TELA-AGE-003: Calendário Mensal
- [ ] TELA-AGE-008: Bloquear Horários
- [ ] TELA-AGE-009: Fila de Espera
- [ ] TELA-AGE-010: Histórico

### Futuro - Prioridade Baixa
- [ ] TELA-SRV-006: Pacotes e Combos
- [ ] TELA-SRV-007: Galeria
- [ ] TELA-AGE-011: Relatório de Ocupação
- [ ] CMP-SRV-008: Comparador

---

**Documento criado em:** Março 2026  
**Autor:** Sistema de Documentação  
**Próxima revisão:** Após implementação do MVP
