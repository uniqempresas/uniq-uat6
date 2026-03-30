# Mapa de UI - Módulo CRM

## 1. Resumo do Módulo

### 1.1 Objetivo Principal
O módulo CRM (Customer Relationship Management) do UNIQ Empresas tem como objetivo centralizar e gerenciar todas as interações com clientes, otimizando o processo de vendas, melhorando o relacionamento e aumentando a retenção de clientes através de um sistema completo de gestão de contatos, pipeline de vendas e histórico de interações.

### 1.2 User Stories Principais

| ID | User Story | Prioridade |
|----|-----------|------------|
| CRM-001 | Como vendedor, quero cadastrar clientes (PF/PJ) para manter minha base de contatos organizada | Essencial |
| CRM-002 | Como vendedor, quero visualizar o histórico de interações para entender o contexto de cada cliente | Essencial |
| CRM-003 | Como gestor, quero acompanhar o pipeline de vendas para monitorar o desempenho da equipe | Essencial |
| CRM-004 | Como vendedor, quero receber alertas de follow-up para não perder oportunidades | Essencial |
| CRM-005 | Como gestor, quero segmentar clientes por tags para campanhas direcionadas | Importante |
| CRM-006 | Como vendedor, quero enviar mensagens via WhatsApp direto do sistema | Importante |
| CRM-007 | Como gestor, quero ver relatórios de conversão do funil para otimizar processos | Importante |
| CRM-008 | Como usuário, quero receber notificações de aniversários para fortalecer relacionamentos | Desejável |

### 1.3 Integrações com Outros Módulos

```
┌─────────────────────────────────────────────────────────────────┐
│                         MÓDULO CRM                               │
├─────────────────────────────────────────────────────────────────┤
│  ↓ Integrações                                                  │
├─────────────────────────────────────────────────────────────────┤
│  • Módulo Financeiro                                            │
│    - Histórico de vendas do cliente                             │
│    - Inadimplência e crédito                                    │
│    - Faturamento automático                                     │
│                                                                 │
│  • Módulo Agenda/Calendário                                     │
│    - Compromissos de follow-up                                  │
│    - Reuniões com clientes                                      │
│    - Lembretes automáticos                                      │
│                                                                 │
│  • Módulo Vendas/Pedidos                                        │
│    - Orçamentos em aberto                                       │
│    - Histórico de compras                                       │
│    - Oportunidades convertidas                                  │
│                                                                 │
│  • Módulo WhatsApp                                              │
│    - Conversas integradas                                       │
│    - Templates de mensagens                                     │
│    - Envio automático de lembretes                             │
│                                                                 │
│  • Módulo Relatórios                                            │
│    - Dashboards de performance                                  │
│    - Análise de conversão                                       │
│    - Previsão de vendas                                         │
│                                                                 │
│  • Módulo Tarefas                                               │
│    - Follow-ups pendentes                                       │
│    - Ações relacionadas ao cliente                              │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Telas/Páginas Principais

### 2.1 Dashboard CRM

| Campo | Valor |
|-------|-------|
| **Nome** | Dashboard CRM |
| **Rota** | `/crm/dashboard` |
| **Objetivo** | Visão geral do desempenho do CRM com métricas principais e atividades prioritárias |
| **Permissões** | Visualização: Vendedor, Gestor, Admin |

**Componentes Principais:**
- Cards de métricas (clientes novos, negociações em aberto, taxa de conversão)
- Gráfico de funil de vendas
- Lista de follow-ups do dia
- Clientes aniversariantes do mês
- Negociações próximas de vencer

**Ações Disponíveis:**
- Acessar pipeline
- Ver detalhes de negociação
- Adicionar novo cliente
- Configurar metas

**MVP:** ✅ Essencial

---

### 2.2 Lista de Clientes

| Campo | Valor |
|-------|-------|
| **Nome** | Lista de Clientes |
| **Rota** | `/crm/clientes` |
| **Objetivo** | Visualizar, buscar e gerenciar todos os clientes cadastrados no sistema |
| **Permissões** | Visualização: Todos | Edição: Vendedor (próprios), Gestor (todos) | Exclusão: Gestor, Admin |

**Componentes Principais:**
- Barra de busca global (nome, telefone, email, CPF/CNPJ)
- Filtros avançados (tipo, segmento, tags, data de cadastro, vendedor responsável)
- Botões de ação rápida (novo cliente, importar, exportar)
- Tabela/List cards de clientes com:
  - Foto/Avatar
  - Nome/Razão Social
  - Tipo (PF/PJ)
  - Telefone principal
  - Tags/Etiquetas
  - Última interação
  - Valor total em compras
  - Status (Ativo/Inativo)
- Paginação/Lazy loading
- Seletor de visualização (tabela/cards)

**Ações Disponíveis:**
- Novo cliente
- Editar cliente
- Visualizar detalhes
- Excluir (com confirmação)
- Exportar CSV/Excel
- Importar em lote
- Enviar mensagem (WhatsApp/Email)
- Atribuir vendedor
- Adicionar etiquetas

**MVP:** ✅ Essencial

---

### 2.3 Detalhes do Cliente

| Campo | Valor |
|-------|-------|
| **Nome** | Ficha do Cliente |
| **Rota** | `/crm/clientes/:id` |
| **Objetivo** | Visualização completa de todas as informações do cliente e histórico de interações |
| **Permissões** | Visualização: Todos | Edição: Vendedor (próprios), Gestor (todos) |

**Componentes Principais:**
- **Header do Cliente:**
  - Foto/Avatar grande
  - Nome completo/Razão social
  - Tipo (PF/PJ) com badge
  - Tags coloridas
  - Botões de ação rápida (editar, mensagem, agendar)
  
- **Abas de Navegação:**
  1. **Resumo** - Informações principais em cards
  2. **Dados Cadastrais** - Todos os campos do formulário
  3. **Interações** - Timeline completa
  4. **Negociações** - Pipeline atual e histórico
  5. **Documentos** - Arquivos anexos
  6. **Financeiro** - Resumo de compras e pagamentos

**Ações Disponíveis:**
- Editar dados
- Adicionar interação
- Criar negociação
- Enviar mensagem
- Agendar follow-up
- Anexar documento
- Ver histórico completo
- Duplicar cliente
- Inativar/Ativar

**MVP:** ✅ Essencial

---

### 2.4 Pipeline de Vendas (Kanban)

| Campo | Valor |
|-------|-------|
| **Nome** | Pipeline de Vendas |
| **Rota** | `/crm/pipeline` |
| **Objetivo** | Visualizar e gerenciar todas as negociações em andamento no funil de vendas |
| **Permissões** | Visualização: Todos | Edição: Vendedor (próprios), Gestor (todos) |

**Componentes Principais:**
- Filtros (vendedor, período, valor mínimo/máximo, tags)
- Botão nova negociação
- Board Kanban com colunas configuráveis:
  - Prospectando
  - Primeiro contato
  - Proposta enviada
  - Negociação
  - Fechamento
  - Ganho (coluna opcional)
  - Perdido (coluna opcional)
- Cards de negociação arrastáveis com:
  - Nome da oportunidade
  - Cliente (foto + nome)
  - Valor estimado
  - Probabilidade (%)
  - Data prevista de fechamento
  - Próxima ação
  - Tags
- Contador por coluna (quantidade e valor total)
- Visualização alternativa: Lista

**Ações Disponíveis:**
- Criar nova negociação
- Mover negociação (drag and drop)
- Editar negociação
- Visualizar detalhes
- Arquivar negociação
- Filtrar por vendedor
- Exportar pipeline

**MVP:** ✅ Essencial

---

### 2.5 Configurações do Pipeline

| Campo | Valor |
|-------|-------|
| **Nome** | Configurações do Pipeline |
| **Rota** | `/crm/configuracoes/pipeline` |
| **Objetivo** | Personalizar as etapas do funil de vendas conforme processo da empresa |
| **Permissões** | Gestor, Admin apenas |

**Componentes Principais:**
- Lista ordenável de etapas
- Campos por etapa:
  - Nome da etapa
  - Cor identificadora
  - Probabilidade padrão (%)
  - Ordem
  - Ativo/Inativo
- Botões de ação (adicionar, editar, excluir, reordenar)
- Preview do pipeline

**Ações Disponíveis:**
- Adicionar nova etapa
- Editar etapa existente
- Reordenar etapas (drag and drop)
- Excluir etapa (com validação de negociações)
- Salvar configuração

**MVP:** ⚠️ Importante (pode usar padrão inicialmente)

---

### 2.6 Importação de Clientes

| Campo | Valor |
|-------|-------|
| **Nome** | Importar Clientes |
| **Rota** | `/crm/clientes/importar` |
| **Objetivo** | Permitir importação em massa de clientes via arquivo CSV/Excel |
| **Permissões** | Gestor, Admin |

**Componentes Principais:**
- Área de upload de arquivo (drag and drop)
- Template de exemplo para download
- Mapeamento de campos (CSV → Sistema)
- Preview dos dados (primeiras 5 linhas)
- Validação de erros (duplicados, campos obrigatórios)
- Barra de progresso de importação
- Relatório de importação (sucesso/erros)

**Ações Disponíveis:**
- Fazer upload
- Baixar template
- Mapear campos
- Validar dados
- Executar importação
- Baixar relatório de erros

**MVP:** ⚠️ Importante (pode ser via suporte inicialmente)

---

### 2.7 Relatórios de Clientes

| Campo | Valor |
|-------|-------|
| **Nome** | Relatórios CRM |
| **Rota** | `/crm/relatorios` |
| **Objetivo** | Análise de dados do CRM com gráficos e estatísticas |
| **Permissões** | Visualização: Gestor, Admin |

**Componentes Principais:**
- Filtros de período (hoje, 7 dias, 30 dias, personalizado)
- Filtro de vendedor
- Abas de relatórios:
  1. **Desempenho** - Conversão, valor médio, ciclo de vendas
  2. **Clientes** - Novos, ativos, inativos, churn
  3. **Vendedores** - Ranking, metas vs realizado
  4. **Fontes** - De onde vêm os leads
- Gráficos interativos
- Tabela de dados detalhados
- Exportar PDF/Excel

**Ações Disponíveis:**
- Aplicar filtros
- Exportar relatório
- Agendar envio por email
- Salvar relatório personalizado

**MVP:** ⚠️ Importante (dashboard inicial cobre necessidade básica)

---

### 2.8 Segmentação e Tags

| Campo | Valor |
|-------|-------|
| **Nome** | Gerenciar Etiquetas |
| **Rota** | `/crm/configuracoes/tags` |
| **Objetivo** | Criar e gerenciar tags/etiquetas para segmentação de clientes |
| **Permissões** | Gestor, Admin |

**Componentes Principais:**
- Lista de tags existentes com:
  - Nome
  - Cor
  - Quantidade de clientes
  - Data de criação
- Formulário de criação/edição
- Preview da tag

**Ações Disponíveis:**
- Criar nova tag
- Editar tag
- Excluir tag
- Fundir tags
- Ver clientes da tag

**MVP:** ⚠️ Importante

---

### 2.9 Aniversariantes

| Campo | Valor |
|-------|-------|
| **Nome** | Aniversariantes |
| **Rota** | `/crm/aniversariantes` |
| **Objetivo** | Listar clientes que fazem aniversário para ações de relacionamento |
| **Permissões** | Visualização: Todos |

**Componentes Principais:**
- Filtro por período (hoje, semana, mês)
- Lista de aniversariantes com:
  - Foto
  - Nome
  - Data de aniversário
  - Idade
  - Última compra
  - Botão de ação (enviar mensagem)
- Estatísticas (quantidade por mês)

**Ações Disponíveis:**
- Enviar mensagem de parabéns
- Agendar lembrete
- Exportar lista
- Ver detalhes do cliente

**MVP:** ❌ Desejável (futuro)

---

## 3. Formulários

### 3.1 Cadastro de Cliente - Pessoa Física

| Campo | Valor |
|-------|-------|
| **Nome** | Formulário Cliente PF |
| **Localização** | Modal "Novo Cliente" ou Página `/crm/clientes/novo` |
| **Objetivo** | Cadastrar novo cliente pessoa física no sistema |

**Campos do Formulário:**

| Campo | Tipo | Obrigatório | Validações | MVP |
|-------|------|-------------|------------|-----|
| Foto | Upload | Não | JPG/PNG, max 2MB | ✅ |
| Tipo | Select (PF/PJ) | Sim | Default: PF | ✅ |
| Nome Completo | Text | Sim | Min 3 caracteres | ✅ |
| CPF | Masked Text | Sim | Formato 000.000.000-00, validação dígitos | ✅ |
| RG | Text | Não | - | ⚠️ |
| Data de Nascimento | Date | Não | Idade > 18 | ⚠️ |
| Gênero | Select | Não | M/F/Outro/Prefiro não informar | ❌ |
| Estado Civil | Select | Não | - | ❌ |
| **Contato** |||||
| Email | Email | Não | Formato válido | ✅ |
| Telefone Principal | Phone | Sim | Formato (00) 00000-0000 | ✅ |
| Telefone Secundário | Phone | Não | - | ⚠️ |
| WhatsApp | Phone | Não | Checkbox "Mesmo que telefone principal" | ✅ |
| **Endereço** |||||
| CEP | Masked Text | Não | Formato 00000-000 | ✅ |
| Logradouro | Text | Não | Auto-fill via CEP | ✅ |
| Número | Text | Não | - | ✅ |
| Complemento | Text | Não | - | ✅ |
| Bairro | Text | Não | Auto-fill via CEP | ✅ |
| Cidade | Text | Não | Auto-fill via CEP | ✅ |
| Estado | Select | Não | Auto-fill via CEP | ✅ |
| **Informações Comerciais** |||||
| Origem | Select | Não | Indicação, Site, Redes Sociais, etc | ✅ |
| Vendedor Responsável | Select | Sim | Default: usuário logado | ✅ |
| Tags | Multi-select | Não | Chips coloridos | ⚠️ |
| Observações | Textarea | Não | Max 2000 caracteres | ✅ |
| **Preferências** |||||
| Receber WhatsApp | Checkbox | Não | Default: true | ⚠️ |
| Receber Email | Checkbox | Não | Default: true | ⚠️ |

**Ações:**
- Salvar
- Salvar e criar negociação
- Salvar e adicionar novo
- Cancelar

**Regras de Negócio:**
- CPF deve ser único no sistema
- Se CEP informado, preencher endereço automaticamente via API
- Email deve ser único (se informado)
- Telefone principal deve ser único

---

### 3.2 Cadastro de Cliente - Pessoa Jurídica

| Campo | Valor |
|-------|-------|
| **Nome** | Formulário Cliente PJ |
| **Localização** | Modal "Novo Cliente" ou Página `/crm/clientes/novo` |
| **Objetivo** | Cadastrar novo cliente pessoa jurídica no sistema |

**Campos do Formulário:**

| Campo | Tipo | Obrigatório | Validações | MVP |
|-------|------|-------------|------------|-----|
| Logo | Upload | Não | JPG/PNG, max 2MB | ✅ |
| Tipo | Select (PF/PJ) | Sim | Default: PJ | ✅ |
| Razão Social | Text | Sim | Min 3 caracteres | ✅ |
| Nome Fantasia | Text | Não | - | ✅ |
| CNPJ | Masked Text | Sim | Formato 00.000.000/0000-00, validação | ✅ |
| Inscrição Estadual | Text | Não | - | ⚠️ |
| Inscrição Municipal | Text | Não | - | ❌ |
| Data de Fundação | Date | Não | - | ❌ |
| Porte | Select | Não | MEI, ME, EPP, Outro | ❌ |
| Ramo de Atividade | Text | Não | - | ⚠️ |
| **Contato Empresarial** |||||
| Email Comercial | Email | Não | Formato válido | ✅ |
| Telefone Comercial | Phone | Sim | - | ✅ |
| Site | URL | Não | Formato válido | ⚠️ |
| **Representante Legal** |||||
| Nome do Responsável | Text | Não | - | ✅ |
| Cargo | Text | Não | - | ⚠️ |
| CPF do Responsável | Masked Text | Não | Validação | ⚠️ |
| Email do Responsável | Email | Não | - | ✅ |
| Telefone do Responsável | Phone | Não | - | ✅ |
| **Endereço** |||||
| CEP | Masked Text | Não | Formato 00000-000 | ✅ |
| Logradouro | Text | Não | Auto-fill via CEP | ✅ |
| Número | Text | Não | - | ✅ |
| Complemento | Text | Não | - | ✅ |
| Bairro | Text | Não | Auto-fill via CEP | ✅ |
| Cidade | Text | Não | Auto-fill via CEP | ✅ |
| Estado | Select | Não | Auto-fill via CEP | ✅ |
| **Informações Comerciais** |||||
| Origem | Select | Não | Indicação, Site, Redes Sociais, etc | ✅ |
| Vendedor Responsável | Select | Sim | Default: usuário logado | ✅ |
| Tags | Multi-select | Não | Chips coloridos | ⚠️ |
| Observações | Textarea | Não | Max 2000 caracteres | ✅ |
| **Condições Comerciais** |||||
| Limite de Crédito | Currency | Não | > 0 | ❌ |
| Condição de Pagamento | Select | Não | À vista, 30 dias, etc | ❌ |
| Lista de Preço | Select | Não | - | ❌ |

**Ações:**
- Salvar
- Salvar e criar negociação
- Salvar e adicionar novo
- Cancelar

**Regras de Negócio:**
- CNPJ deve ser único no sistema
- Consultar dados da empresa via API da Receita Federal (se disponível)
- Se CEP informado, preencher endereço automaticamente

---

### 3.3 Edição de Cliente

| Campo | Valor |
|-------|-------|
| **Nome** | Formulário Edição Cliente |
| **Localização** | Modal ou Página `/crm/clientes/:id/editar` |
| **Objetivo** | Alterar dados de cliente existente |

**Características:**
- Mesmos campos do formulário de cadastro (PF ou PJ)
- Campos preenchidos com dados atuais
- Histórico de alterações (audit log) - visível abaixo do formulário
- Indicador de quem criou e última modificação

**Ações:**
- Salvar alterações
- Cancelar
- Ver histórico de alterações

---

### 3.4 Cadastro de Negociação (Oportunidade)

| Campo | Valor |
|-------|-------|
| **Nome** | Formulário Nova Negociação |
| **Localização** | Modal "Nova Negociação" ou `/crm/pipeline/novo` |
| **Objetivo** | Registrar nova oportunidade de venda no pipeline |

**Campos do Formulário:**

| Campo | Tipo | Obrigatório | Validações | MVP |
|-------|------|-------------|------------|-----|
| Título da Negociação | Text | Sim | Min 3 caracteres | ✅ |
| Cliente | Search/Select | Sim | Busca por nome/telefone | ✅ |
| Valor Estimado | Currency | Não | > 0 | ✅ |
| Etapa do Pipeline | Select | Sim | Default: primeira etapa | ✅ |
| Probabilidade | Slider/Select | Não | 0-100%, default por etapa | ⚠️ |
| Data Prevista de Fechamento | Date | Não | Futura | ✅ |
| Fonte do Lead | Select | Não | Mesmas opções de origem do cliente | ⚠️ |
| Vendedor Responsável | Select | Sim | Default: usuário logado | ✅ |
| Produtos/Serviços de Interesse | Multi-select | Não | - | ⚠️ |
| Descrição/Observações | Textarea | Não | Max 2000 caracteres | ✅ |
| Próxima Ação | Text | Não | - | ⚠️ |
| Data da Próxima Ação | DateTime | Não | - | ⚠️ |

**Ações:**
- Salvar
- Salvar e adicionar atividade
- Salvar e enviar proposta
- Cancelar

---

### 3.5 Movimentação no Pipeline

| Campo | Valor |
|-------|-------|
| **Nome** | Formulário Movimentar Negociação |
| **Localização** | Modal ao mover card no Kanban |
| **Objetivo** | Registrar mudança de etapa com motivo e atualização de dados |

**Campos do Formulário:**

| Campo | Tipo | Obrigatório | Validações |
|-------|------|-------------|------------|
| Nova Etapa | Select | Sim | Etapa de destino |
| Motivo da Mudança | Select/Text | Condicional | Obrigatório se para "Perdido" |
| Valor Atualizado | Currency | Não | - |
| Probabilidade Atualizada | Slider | Não | 0-100% |
| Data de Fechamento Atualizada | Date | Não | - |
| Comentário | Textarea | Não | Max 1000 caracteres |
| Notificar Vendedor | Checkbox | Não | Default: true |

**Ações:**
- Confirmar movimentação
- Cancelar

---

### 3.6 Adicionar Interação

| Campo | Valor |
|-------|-------|
| **Nome** | Formulário Nova Interação |
| **Localização** | Modal "Nova Interação" ou na timeline do cliente |
| **Objetivo** | Registrar contato ou interação com o cliente |

**Campos do Formulário:**

| Campo | Tipo | Obrigatório | Validações | MVP |
|-------|------|-------------|------------|-----|
| Tipo de Interação | Select | Sim | Ligação, Email, WhatsApp, Reunião, Visita, Outro | ✅ |
| Data e Hora | DateTime | Sim | Default: agora | ✅ |
| Duração | Duration | Não | - | ⚠️ |
| Assunto | Text | Sim | Min 3 caracteres | ✅ |
| Descrição | Textarea | Sim | Max 5000 caracteres | ✅ |
| Negociação Relacionada | Select | Não | Lista de negociações do cliente | ⚠️ |
| Sentimento | Select | Não | Positivo, Neutro, Negativo | ⚠️ |
| Follow-up Necessário | Checkbox | Não | - | ✅ |
| Data do Follow-up | DateTime | Condicional | Obrigatório se checkbox marcado | ✅ |
| Tipo de Follow-up | Select | Condicional | Ligação, Email, WhatsApp, Reunião | ✅ |
| Anexos | File Upload | Não | Múltiplos, max 10MB cada | ⚠️ |

**Ações:**
- Salvar interação
- Salvar e criar follow-up
- Cancelar

---

### 3.7 Configuração de Etapa do Pipeline

| Campo | Valor |
|-------|-------|
| **Nome** | Formulário Etapa do Pipeline |
| **Localização** | Modal em `/crm/configuracoes/pipeline` |
| **Objetivo** | Definir ou editar uma etapa do funil de vendas |

**Campos do Formulário:**

| Campo | Tipo | Obrigatório | Validações |
|-------|------|-------------|------------|
| Nome da Etapa | Text | Sim | Min 2 caracteres, único |
| Cor | Color Picker | Sim | Hex color |
| Probabilidade Padrão | Number | Não | 0-100% |
| Ordem | Number | Sim | Auto-gerado, reordenável |
| Ativa | Checkbox | Sim | Default: true |
| Tipo | Select | Não | Ativa, Ganho, Perdido |
| Requer Justificativa | Checkbox | Não | Para mover para esta etapa |
| Email Automático | Checkbox | Não | Enviar ao entrar nesta etapa |

**Ações:**
- Salvar
- Cancelar
- Visualizar preview

---

### 3.8 Criação de Tag/Etiqueta

| Campo | Valor |
|-------|-------|
| **Nome** | Formulário Nova Tag |
| **Localização** | Modal em `/crm/configuracoes/tags` |
| **Objetivo** | Criar etiqueta para segmentação de clientes |

**Campos do Formulário:**

| Campo | Tipo | Obrigatório | Validações |
|-------|------|-------------|------------|
| Nome da Tag | Text | Sim | Min 2 caracteres, único |
| Cor | Color Picker | Sim | Hex color, paleta sugerida |
| Descrição | Text | Não | Max 200 caracteres |
| Categoria | Select | Não | Status, Segmento, Prioridade, Personalizada |

**Ações:**
- Salvar
- Cancelar
- Ver preview da tag

---

## 4. Modais/Dialogs

### 4.1 Confirmação de Exclusão de Cliente

| Campo | Valor |
|-------|-------|
| **Nome** | Modal Confirmar Exclusão |
| **Gatilho** | Clique em "Excluir" na lista ou detalhes do cliente |
| **Permissão** | Gestor, Admin |

**Conteúdo/UI:**
- Ícone de alerta (triângulo amarelo)
- Título: "Excluir Cliente"
- Texto: "Você está prestes a excluir o cliente **[Nome]**. Esta ação não pode ser desfeita."
- Lista de verificações:
  - Possui X negociações em andamento
  - Possui X vendas concluídas
  - Possui X interações registradas
- Checkbox: "Entendo que todos os dados serão permanentemente removidos"
- Botão "Transferir negociações para outro cliente" (alternativa)

**Ações:**
- Confirmar exclusão (desabilitado até checkbox marcado)
- Transferir dados
- Cancelar

**MVP:** ✅ Essencial

---

### 4.2 Visualização Rápida do Cliente

| Campo | Valor |
|-------|-------|
| **Nome** | Modal Preview Cliente |
| **Gatilho** | Clique duplo ou ícone "olho" na lista de clientes |
| **Permissão** | Todos |

**Conteúdo/UI:**
- Header com foto, nome, badges de tipo e tags
- Abas rápidas:
  - **Resumo**: Principais informações de contato, última interação, valor total
  - **Contato**: Todos os dados de contato com botões "Ligar", "WhatsApp", "Email"
  - **Negociações**: Lista das últimas 3 negociações
  - **Histórico**: Últimas 5 interações
- Botão "Ver ficha completa" (navega para detalhes)

**Ações:**
- Editar cliente
- Nova interação
- Nova negociação
- Fechar

**MVP:** ⚠️ Importante

---

### 4.3 Adicionar Nota Rápida

| Campo | Valor |
|-------|-------|
| **Nome** | Modal Nota Rápida |
| **Gatilho** | Botão "Adicionar Nota" na timeline ou atalho de teclado |
| **Permissão** | Todos |

**Conteúdo/UI:**
- Campo de texto expandido (textarea auto-grow)
- Atalhos de formatação rápida (negrito, lista)
- Checkbox "Marcar como importante"
- Select para associar a negociação existente

**Ações:**
- Salvar nota
- Salvar e adicionar outra
- Cancelar

**MVP:** ✅ Essencial (pode ser parte do formulário de interação)

---

### 4.4 Agendar Follow-up

| Campo | Valor |
|-------|-------|
| **Nome** | Modal Agendar Follow-up |
| **Gatilho** | Botão "Agendar" na ficha do cliente ou após interação |
| **Permissão** | Todos |

**Conteúdo/UI:**
- Campo "Tipo" (Ligação, Email, WhatsApp, Visita, Reunião)
- Campo "Data e Hora" (datetime picker)
- Campo "Assunto"
- Campo "Descrição/Observações"
- Checkbox "Lembrar X minutos antes" (15, 30, 60 min)
- Checkbox "Notificar também por email"
- Integração com calendário (Google/Outlook)

**Ações:**
- Agendar
- Agendar e adicionar à agenda
- Cancelar

**MVP:** ✅ Essencial

---

### 4.5 Selecionar Etiquetas

| Campo | Valor |
|-------|-------|
| **Nome** | Modal Gerenciar Tags |
| **Gatilho** | Clique em área de tags na ficha do cliente |
| **Permissão** | Todos (edição: dono do cliente ou gestor) |

**Conteúdo/UI:**
- Busca de tags existentes
- Grid de tags disponíveis (coloridas, clicáveis)
- Tags já selecionadas destacadas
- Botão "Criar nova tag" (abre modal aninhado)
- Preview de como ficará

**Ações:**
- Aplicar tags selecionadas
- Criar nova tag
- Cancelar

**MVP:** ⚠️ Importante

---

### 4.6 Importar Contatos (Upload CSV)

| Campo | Valor |
|-------|-------|
| **Nome** | Modal Importar CSV |
| **Gatilho** | Botão "Importar" na lista de clientes |
| **Permissão** | Gestor, Admin |

**Conteúdo/UI:**
- Etapas wizard (1-2-3-4):
  1. **Upload**: Área drag and drop, botão de seleção, template para download
  2. **Mapeamento**: Lista de colunas do CSV com selects para mapear campos do sistema
  3. **Validação**: Preview com erros destacados (duplicados, campos inválidos)
  4. **Importação**: Barra de progresso, resultados (sucesso, erros, duplicados ignorados)
- Download de relatório de erros

**Ações:**
- Próximo/Anterior (nas etapas)
- Baixar template
- Validar
- Executar importação
- Baixar relatório
- Fechar

**MVP:** ⚠️ Importante

---

### 4.7 Enviar Mensagem (WhatsApp/Email)

| Campo | Valor |
|-------|-------|
| **Nome** | Modal Enviar Mensagem |
| **Gatilho** | Botão "Enviar Mensagem" na ficha do cliente |
| **Permissão** | Todos |

**Conteúdo/UI:**
- Select "Canal" (WhatsApp, Email, SMS)
- Select de templates salvos (opcional)
- Campo "Para" (pré-preenchido, editável)
- Campo "Assunto" (para email)
- Editor de mensagem (textarea com variáveis dinâmicas {{nome}}, {{empresa}})
- Preview da mensagem
- Contador de caracteres (para SMS/WhatsApp)
- Anexos (para email)
- Checkbox "Agendar envio"

**Ações:**
- Enviar agora
- Agendar
- Salvar como template
- Cancelar

**MVP:** ⚠️ Importante (WhatsApp essencial)

---

### 4.8 Transferir Negociação/Cliente

| Campo | Valor |
|-------|-------|
| **Nome** | Modal Transferir Responsabilidade |
| **Gatilho** | Botão "Transferir" nas ações do cliente ou negociação |
| **Permissão** | Gestor, Admin, ou dono do registro |

**Conteúdo/UI:**
- Search/Select de vendedor destino
- Lista do que será transferido:
  - Cliente (checkbox)
  - Negociações em andamento (checkbox)
  - Follow-ups pendentes (checkbox)
- Campo "Motivo da transferência"
- Checkbox "Notificar novo vendedor"
- Checkbox "Manter acesso como observador"

**Ações:**
- Confirmar transferência
- Cancelar

**MVP:** ⚠️ Importante

---

### 4.9 Fechar Negociação (Ganho)

| Campo | Valor |
|-------|-------|
| **Nome** | Modal Fechar como Ganho |
| **Gatilho** | Mover card para coluna "Ganho" no pipeline |
| **Permissão** | Dono da negociação ou gestor |

**Conteúdo/UI:**
- Ícone de celebração 🎉
- Título: "Negociação Ganha!"
- Campos:
  - Valor final acordado (Currency)
  - Data de fechamento (Date, default: hoje)
  - Motivo/Como vencemos (Textarea)
  - Gerar pedido automaticamente (Checkbox)
  - Gerar contrato (Checkbox)
- Resumo da negociação (duração, valor estimado vs real)

**Ações:**
- Confirmar fechamento
- Gerar pedido
- Cancelar

**MVP:** ⚠️ Importante

---

### 4.10 Perder Negociação

| Campo | Valor |
|-------|-------|
| **Nome** | Modal Marcar como Perdido |
| **Gatilho** | Mover card para coluna "Perdido" ou botão específico |
| **Permissão** | Dono da negociação ou gestor |

**Conteúdo/UI:**
- Ícone de atenção
- Título: "Negociação Perdida"
- Select "Motivo da perda" (obrigatório):
  - Preço
  - Produto não atendeu necessidade
  - Escolheu concorrente
  - Desistiu do projeto
  - Não conseguiu contato
  - Outro
- Campo "Detalhes do motivo"
- Campo "O que poderíamos ter feito diferente"
- Checkbox "Manter em follow-up futuro"
- Data para reengajamento (se checkbox marcado)

**Ações:**
- Confirmar perda
- Agendar reengajamento
- Cancelar

**MVP:** ⚠️ Importante

---

### 4.11 Fusão de Clientes Duplicados

| Campo | Valor |
|-------|-------|
| **Nome** | Modal Unir Clientes |
| **Gatilho** | Detectado pelo sistema ou ação manual |
| **Permissão** | Gestor, Admin |

**Conteúdo/UI:**
- Display lado a lado dos dois clientes
- Seleção de qual será mantido (master)
- Checkboxes para escolher quais dados manter:
  - Dados pessoais
  - Endereço
  - Telefones
  - Interações
  - Negociações
  - Documentos
- Preview do resultado da fusão
- Lista de conflitos a resolver

**Ações:**
- Executar fusão
- Marcar como não duplicado
- Cancelar

**MVP:** ❌ Desejável (futuro)

---

## 5. Componentes Reutilizáveis Específicos

### 5.1 Card de Cliente

**Localização:** Lista de clientes, resultados de busca, aniversariantes

**Props:**
```typescript
interface ClienteCardProps {
  id: string;
  tipo: 'PF' | 'PJ';
  nome: string;
  foto?: string;
  telefone: string;
  email?: string;
  tags: Tag[];
  ultimaInteracao?: Date;
  valorTotalCompras?: number;
  vendedor?: string;
  status: 'ativo' | 'inativo';
  aniversario?: Date;
  onClick?: () => void;
  onWhatsAppClick?: () => void;
  onEditClick?: () => void;
  viewMode: 'compact' | 'full';
}
```

**Estados:**
- Default: Informações completas
- Hover: Elevação + botões de ação
- Selecionado: Borda destacada + checkbox
- Inativo: Opacidade reduzida + badge

**MVP:** ✅ Essencial

---

### 5.2 Timeline de Interações

**Localização:** Ficha do cliente, modal de preview

**Props:**
```typescript
interface TimelineProps {
  interacoes: Interacao[];
  onAddInteraction?: () => void;
  onEditInteraction?: (id: string) => void;
  onDeleteInteraction?: (id: string) => void;
  filterByType?: string[];
  showFilters?: boolean;
}

interface Interacao {
  id: string;
  tipo: 'ligacao' | 'email' | 'whatsapp' | 'reuniao' | 'visita' | 'nota';
  data: Date;
  assunto: string;
  descricao: string;
  autor: string;
  sentimento?: 'positivo' | 'neutro' | 'negativo';
  anexos?: Anexo[];
  negociacaoId?: string;
  followUp?: {
    data: Date;
    tipo: string;
  };
}
```

**Features:**
- Agrupamento por data (Hoje, Ontem, Esta semana, Mês)
- Ícones por tipo de interação
- Cores por sentimento (borda/esquerda)
- Expandir/Colapsar descrição
- Anexos com preview
- Marcador de follow-up pendente
- Lazy loading (scroll infinito)

**MVP:** ✅ Essencial

---

### 5.3 Kanban Board do Pipeline

**Localização:** Página `/crm/pipeline`

**Props:**
```typescript
interface KanbanBoardProps {
  etapas: EtapaPipeline[];
  negociacoes: Negociacao[];
  onCardMove: (cardId: string, fromEtapa: string, toEtapa: string) => void;
  onCardClick: (id: string) => void;
  onAddCard: (etapaId: string) => void;
  filterByVendedor?: string;
  searchTerm?: string;
  readonly?: boolean;
}
```

**Features:**
- Drag and drop entre colunas
- Scroll horizontal suave
- Header fixo de colunas
- Contador por coluna
- Soma de valores por coluna
- Cards com preview de informações
- Placeholder de drop
- Animações suaves
- Responsivo (mobile: swipe entre colunas)

**MVP:** ✅ Essencial

---

### 5.4 Card de Negociação (Pipeline)

**Localização:** Kanban board, lista de negociações

**Props:**
```typescript
interface NegociacaoCardProps {
  id: string;
  titulo: string;
  cliente: {
    id: string;
    nome: string;
    foto?: string;
  };
  valorEstimado: number;
  valorAtual?: number;
  probabilidade: number;
  dataPrevistaFechamento?: Date;
  proximaAcao?: string;
  tags: Tag[];
  diasNaEtapa: number;
  corAtraso?: 'verde' | 'amarelo' | 'vermelho';
  onClick?: () => void;
  onEdit?: () => void;
  draggable?: boolean;
}
```

**Features:**
- Indicador visual de atraso (borda)
- Barra de probabilidade
- Avatar do cliente
- Valor formatado em moeda
- Tags coloridas
- Hover: opções de ação

**MVP:** ✅ Essencial

---

### 5.5 Gráfico de Funil de Conversão

**Localização:** Dashboard, relatórios

**Props:**
```typescript
interface FunilChartProps {
  dados: {
    etapa: string;
    quantidade: number;
    valor: number;
    cor: string;
  }[];
  showValues?: boolean;
  showConversion?: boolean;
  height?: number;
  onSegmentClick?: (etapa: string) => void;
}
```

**Features:**
- Visualização em pirâmide invertida
- Percentuais de conversão entre etapas
- Valor total por etapa
- Tooltip detalhado
- Responsivo

**MVP:** ⚠️ Importante

---

### 5.6 Buscador de Cliente

**Localização:** Header global, formulários

**Props:**
```typescript
interface ClienteSearchProps {
  value?: string;
  onSelect: (cliente: Cliente) => void;
  onCreateNew?: () => void;
  placeholder?: string;
  filterByVendedor?: boolean;
  showCreateOption?: boolean;
  disabled?: boolean;
}
```

**Features:**
- Busca em tempo real
- Preview de resultados (foto, nome, telefone)
- Destaque de termo buscado
- Atalho de teclado (/ para focar)
- Opção "Criar novo" se não encontrado

**MVP:** ✅ Essencial

---

### 5.7 Badge de Tag/Etiqueta

**Localização:** Cards, listas, filtros

**Props:**
```typescript
interface TagBadgeProps {
  id: string;
  nome: string;
  cor: string;
  onRemove?: () => void;
  onClick?: () => void;
  removable?: boolean;
  clickable?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
```

**Features:**
- Cores customizáveis
- Ícone de remoção (X)
- Hover effects
- Tamanhos variados
- Tooltip com descrição completa

**MVP:** ⚠️ Importante

---

### 5.8 Card de Aniversariante

**Localização:** Dashboard, página de aniversariantes

**Props:**
```typescript
interface AniversarianteCardProps {
  cliente: Cliente;
  dataAniversario: Date;
  idade?: number;
  ultimaCompra?: Date;
  onSendMessage?: () => void;
  onViewDetails?: () => void;
}
```

**Features:**
- Destaque visual (balões, confetes)
- Contador de dias (hoje, amanhã, em X dias)
- Botão rápido de mensagem
- Template de mensagem de parabéns

**MVP:** ❌ Desejável

---

### 5.9 Input de Telefone com WhatsApp

**Localização:** Formulários de cliente

**Props:**
```typescript
interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  showWhatsAppToggle?: boolean;
  whatsAppValue?: boolean;
  onWhatsAppChange?: (isWhatsApp: boolean) => void;
  error?: string;
  required?: boolean;
}
```

**Features:**
- Máscara automática ( Brasil)
- Validação de DDD
- Toggle "É WhatsApp"
- Ícone indicativo
- Formatação automática

**MVP:** ✅ Essencial

---

### 5.10 Filtros Avançados de Cliente

**Localização:** Lista de clientes

**Props:**
```typescript
interface ClienteFiltersProps {
  filters: {
    tipo?: ('PF' | 'PJ')[];
    tags?: string[];
    vendedor?: string[];
    dataCadastro?: { from: Date; to: Date };
    origem?: string[];
    status?: ('ativo' | 'inativo')[];
  };
  onChange: (filters: any) => void;
  onReset: () => void;
  onSavePreset?: (name: string) => void;
  savedPresets?: { id: string; name: string; filters: any }[];
}
```

**Features:**
- Accordion por categoria
- Chips de filtros ativos
- Filtros de data (preset + custom)
- Busca em filtros
- Salvar como preset
- Aplicar/Cancelar

**MVP:** ⚠️ Importante

---

## 6. Estados de UI

### 6.1 Empty States

#### Lista de Clientes Vazia
**Quando:** Usuário acessa lista sem nenhum cliente cadastrado
**UI:**
- Ícone: Grupo de pessoas (outline)
- Título: "Nenhum cliente cadastrado"
- Descrição: "Comece adicionando seu primeiro cliente ao CRM"
- CTA primário: "Cadastrar primeiro cliente"
- CTA secundário: "Importar clientes"
- Dica: "Você também pode importar seus contatos em massa via CSV"

#### Pipeline Vazio
**Quando:** Nenhuma negociação no pipeline
**UI:**
- Ícone: Gráfico de funil
- Título: "Pipeline vazio"
- Descrição: "Crie sua primeira oportunidade de venda"
- CTA: "Nova negociação"
- Ilustração: Funil vazio

#### Sem Resultados de Busca
**Quando:** Busca não retorna resultados
**UI:**
- Ícone: Lupa com X
- Título: "Nenhum resultado encontrado"
- Descrição: "Tente ajustar seus filtros ou termos de busca"
- CTA: "Limpar filtros"
- Sugestão de termos similares (se aplicável)

#### Cliente sem Interações
**Quando:** Aba de interações vazia na ficha do cliente
**UI:**
- Ícone: Chat bubble outline
- Título: "Nenhuma interação registrada"
- Descrição: "Registre suas conversas e contatos para manter o histórico"
- CTA: "Adicionar primeira interação"
- Dica ilustrada de como funciona

#### Sem Aniversariantes no Período
**Quando:** Filtro de aniversariantes não retorna resultados
**UI:**
- Ícone: Bolo de aniversário
- Título: "Nenhum aniversariante neste período"
- Descrição: "Não há clientes fazendo aniversário no período selecionado"
- CTA: "Ver próximo mês"

---

### 6.2 Loading States

#### Tabela de Clientes
- Skeleton de linhas (5-10 linhas)
- Cabeçalho com filtros desabilitados
- Indicador de carregamento no centro

#### Card de Cliente
- Shimmer effect
- Avatar placeholder (círculo cinza)
- Linhas de texto placeholder

#### Kanban Board
- Skeleton das colunas
- Placeholders de cards
- Contadores piscando

#### Timeline
- Spinner no topo
- Itens placeholder com linha de conexão

#### Busca em Tempo Real
- Spinner pequeno no input
- "Buscando..." no dropdown
- Debounce de 300ms

---

### 6.3 Error States

#### Erro ao Carregar Lista
**UI:**
- Ícone: Alert triangle
- Título: "Não foi possível carregar os clientes"
- Descrição: Mensagem técnica amigável
- CTA: "Tentar novamente"
- CTA secundário: "Ver logs de erro" (admin)

#### Erro de Conexão
**UI:**
- Ícone: Wifi off
- Título: "Sem conexão"
- Descrição: "Verifique sua internet e tente novamente"
- CTA: "Recarregar"
- Retry automático em background

#### Erro de Validação no Formulário
- Campos com erro destacados (borda vermelha)
- Mensagem abaixo de cada campo
- Scroll automático para primeiro erro
- Resumo de erros no topo (toast ou banner)

#### Erro de Permissão
- Ícone: Lock
- Título: "Acesso negado"
- Descrição: "Você não tem permissão para realizar esta ação"
- CTA: "Voltar" ou "Solicitar acesso"

---

### 6.4 Success States

#### Cliente Cadastrado
- Toast: "Cliente cadastrado com sucesso!"
- Animação de confete (opcional)
- Redirecionamento suave para ficha do cliente

#### Negociação Movimentada
- Toast: "Negociação movida para [Etapa]"
- Card com animação de transição
- Som suave (se habilitado)

#### Interação Registrada
- Toast: "Interação salva"
- Timeline atualizada com animação
- Focus no novo item

#### Importação Concluída
- Modal de sucesso com estatísticas
- "X clientes importados com sucesso"
- Botão para baixar relatório de erros (se houver)

#### Mensagem Enviada
- Toast: "Mensagem enviada"
- Preview da mensagem enviada
- Status de entrega (para WhatsApp)

---

## 7. Integrações de UI

### 7.1 Notificações/Toasts

**Tipos de Toast:**
| Tipo | Uso | Duração | Ícone |
|------|-----|---------|-------|
| Success | Operação concluída | 3s | Check circle |
| Error | Falha na operação | 5s | X circle |
| Warning | Atenção necessária | 4s | Alert triangle |
| Info | Informação geral | 3s | Info circle |

**Posicionamento:**
- Desktop: Top-right
- Mobile: Top-center (full width)

**Stacking:**
- Máximo 5 toasts visíveis
- Novos aparecem no topo
- Auto-dismiss com progress bar

**Interações:**
- Hover: pausa auto-dismiss
- Click: fecha imediatamente
- Swipe (mobile): descarta

---

### 7.2 Confirmações

#### Modal de Confirmação Padrão
**Uso:** Ações destrutivas ou irreversíveis
**Elementos:**
- Ícone contexto (warning/info)
- Título claro
- Descrição detalhada
- Checkbox de confirmação (para ações críticas)
- Botões: Confirmar (danger) e Cancelar

#### Confirmação Inline
**Uso:** Ações simples de confirmação rápida
**Elementos:**
- Popover com texto "Tem certeza?"
- Botões: Sim/Não
- Sem bloqueio de UI

#### Undo/Desfazer
**Uso:** Ações recuperáveis
**Padrão:**
- Toast com ação "Desfazer"
- Timeout de 5 segundos
- Mantém estado anterior em memória

---

### 7.3 Drag and Drop

#### Pipeline Kanban
**Funcionalidades:**
- Drag de cards entre colunas
- Visual feedback (ghost card, placeholder)
- Highlight da coluna de destino
- Animação de retorno se drop inválido
- Touch support para mobile

#### Ordenação de Etapas
- Reordenar etapas do pipeline
- Salvar ordem automaticamente
- Indicador de posição

#### Upload de Arquivos
- Área drop zone destacada
- Preview múltiplo de arquivos
- Progresso de upload
- Cancelamento individual

---

### 7.4 Atalhos de Teclado

| Atalho | Ação | Contexto |
|--------|------|----------|
| `/` | Focar busca | Global CRM |
| `N` | Novo cliente | Lista de clientes |
| `O` | Nova negociação | Pipeline |
| `I` | Adicionar interação | Ficha do cliente |
| `Esc` | Fechar modal | Qualquer modal |
| `Ctrl+S` | Salvar formulário | Formulários |
| `Ctrl+Enter` | Confirmar ação | Modais de confirmação |
| `?` | Abrir ajuda de atalhos | Global |

---

### 7.5 Feedback Visual em Tempo Real

#### Typing Indicator (WhatsApp)
- "Digitando..." no chat
- Indicador de online
- Checkmarks de mensagem (enviada, entregue, lida)

#### Status de Sincronização
- Ícone de nuvem no header
- Tooltip: "Sincronizado há X minutos"
- Indicador de offline (vermelho)
- Retry automático

#### Progresso de Operações
- Barra de progresso para importações
- Spinner com percentual
- Estimativa de tempo restante
- Cancelamento em andamento

---

### 7.6 Responsividade

#### Breakpoints
| Breakpoint | Largura | Adaptações |
|------------|---------|------------|
| Mobile | < 640px | Lista em cards, kanban swipe, bottom sheet modais |
| Tablet | 640-1024px | Tabela compacta, kanban scroll horizontal |
| Desktop | > 1024px | Layout completo, side-by-side, hover states |

#### Padrões Mobile-First
- Pipeline: Carousel de colunas
- Lista: Cards empilhados
- Ficha: Abas em bottom sheet
- Modais: Full screen sheet
- Ações: FAB (Floating Action Button)

---

## 8. Resumo de Prioridades MVP

### ✅ Essencial (MVP Obrigatório)
1. Dashboard CRM (básico)
2. Lista de clientes (com busca e filtros básicos)
3. Ficha do cliente (dados + timeline)
4. Cadastro/Edição de cliente PF/PJ
5. Pipeline de vendas (kanban funcional)
6. Cadastro de negociação
7. Registro de interação
8. Movimentação no pipeline
9. Configuração básica de etapas
10. Modal de confirmação de exclusão

### ⚠️ Importante (MVP Plus)
1. Importação de clientes
2. Tags e segmentação
3. Relatórios de desempenho
4. Agendamento de follow-up
5. Visualização rápida (modal preview)
6. Gráfico de funil
7. Transferência de clientes
8. Fechamento de negociação (ganho/perdido)

### ❌ Desejável (Futuro)
1. Aniversariantes
2. Integração WhatsApp completa
3. Fusão de duplicados
4. Email marketing integrado
5. Automações de workflow
6. App mobile nativo
7. Integração com telefonia
8. Chat interno

---

**Documento criado em:** Março 2025  
**Versão:** 1.0  
**Responsável:** Product Team UNIQ  
**Próxima revisão:** Pré-MVP
