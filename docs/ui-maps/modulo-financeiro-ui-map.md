# Mapa de UI - Módulo Financeiro

## 1. Resumo do Módulo

### 1.1 Objetivo Principal
Gerenciar todo o ciclo financeiro da empresa, desde o lançamento de contas a pagar e receber até a geração de relatórios gerenciais (DRE), fluxo de caixa e conciliação bancária. Fornecer visibilidade em tempo real da saúde financeira do negócio.

### 1.2 User Stories Principais

| ID | User Story | Prioridade |
|----|------------|------------|
| FIN-001 | Como gestor, quero visualizar o fluxo de caixa para tomar decisões financeiras | Alta |
| FIN-002 | Como operador, quero lançar contas a pagar de forma rápida | Alta |
| FIN-003 | Como gestor, quero acompanhar contas vencidas para evitar inadimplência | Alta |
| FIN-004 | Como operador, quero dar baixa em títulos recebidos | Alta |
| FIN-005 | Como gestor, quero gerar o DRE para análise de resultados | Média |
| FIN-006 | Como operador, quero categorizar lançamentos para análise posterior | Média |
| FIN-007 | Como gestor, quero consolidar centro de custos para controle orçamentário | Média |

### 1.3 Integrações com Outros Módulos

```
┌─────────────────────────────────────────────────────────┐
│                    MÓDULO FINANCEIRO                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────┐    ┌──────────────┐                   │
│  │ Vendas PDV   │───▶│ Contas a     │                   │
│  │              │    │ Receber      │                   │
│  └──────────────┘    └──────────────┘                   │
│         │                   │                           │
│         ▼                   ▼                           │
│  ┌──────────────────────────────────┐                  │
│  │      FLUXO DE CAIXA              │                  │
│  └──────────────────────────────────┘                  │
│         ▲                   ▲                           │
│         │                   │                           │
│  ┌──────────────┐    ┌──────────────┐                   │
│  │ Loja Virtual │───▶│ Contas a     │                   │
│  │              │    │ Pagar        │                   │
│  └──────────────┘    └──────────────┘                   │
│                                                         │
│  ┌──────────────┐                                       │
│  │ Compras/     │────────────────▶  DRE                │
│  │ Estoque      │                                       │
│  └──────────────┘                                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Integrações específicas:**
- **Vendas PDV**: Lançamentos automáticos em Contas a Receber
- **Loja Virtual**: Conciliação automática de vendas online
- **Compras/Estoque**: Geração de contas a pagar a fornecedores
- **Contabilidade**: Exportação de dados para sistemas contábeis (futuro)

---

## 2. Telas/Páginas Principais

### 2.1 Dashboard Financeiro

| Atributo | Valor |
|----------|-------|
| **Nome** | Dashboard Financeiro |
| **Rota** | `/financeiro/dashboard` |
| **Objetivo** | Visão geral da saúde financeira com indicadores principais |
| **MVP** | ✅ Sim |

**Componentes principais:**
- **Cards de Saldo** (3 colunas):
  - Total a Receber (cor: azul)
  - Total a Pagar (cor: vermelho)
  - Saldo Projetado (cor: verde se positivo, vermelho se negativo)
- **Gráfico de Fluxo de Caixa** (linha, últimos 30 dias)
- **Tabela de Lançamentos Recentes** (top 10)
- **Alertas de Vencimentos** (próximos 7 dias)
- **Gráfico de Receitas vs Despesas** (barra, mensal)

**Ações disponíveis:**
- [Novo Lançamento] - Abre modal rápido
- [Ver Fluxo de Caixa] - Navega para tela de fluxo
- [Exportar PDF] - Gera relatório em PDF
- [Filtrar Período] - Seleciona range de datas

**Permissões:**
- `financeiro.dashboard.visualizar` - Visualização básica
- `financeiro.dashboard.exportar` - Exportação de relatórios

---

### 2.2 Lista de Contas a Pagar

| Atributo | Valor |
|----------|-------|
| **Nome** | Contas a Pagar |
| **Rota** | `/financeiro/contas-pagar` |
| **Objetivo** | Gerenciar todas as obrigações financeiras da empresa |
| **MVP** | ✅ Sim |

**Componentes principais:**
- **Filtros Avançados** (barra superior):
  - Período (date range picker)
  - Status (Pendente, Pago, Vencido, Cancelado)
  - Categoria (dropdown)
  - Fornecedor (busca)
  - Centro de Custo (dropdown)
  - Valor mín/máx
- **Tabela de Lançamentos**:
  - Colunas: Vencimento, Descrição, Fornecedor, Categoria, Valor, Status, Ações
  - Ordenação por: Vencimento (default), Valor, Data criação
  - Paginação: 25/50/100 por página
- **Resumo Financeiro** (footer da tabela):
  - Total filtrado
  - Total vencido
  - Total a vencer
- **Bulk Actions Bar** (aparece ao selecionar múltiplos):
  - Marcar como pago
  - Imprimir boletos
  - Exportar

**Ações disponíveis:**
- [Novo Lançamento] - Abre formulário
- [Importar CSV] - Upload de arquivo
- [Baixa em Massa] - Seleção múltipla
- [Gerar Relatório] - Gera PDF/Excel
- Editar (ícone lápis)
- Excluir (ícone lixeira)
- Visualizar (ícone olho)
- Dar Baixa (ícone check)

**Permissões:**
- `financeiro.contas_pagar.visualizar` - Visualizar lista
- `financeiro.contas_pagar.criar` - Criar novos lançamentos
- `financeiro.contas_pagar.editar` - Editar lançamentos
- `financeiro.contas_pagar.excluir` - Excluir lançamentos
- `financeiro.contas_pagar.baixar` - Dar baixa em títulos

---

### 2.3 Lista de Contas a Receber

| Atributo | Valor |
|----------|-------|
| **Nome** | Contas a Receber |
| **Rota** | `/financeiro/contas-receber` |
| **Objetivo** | Gerenciar todos os créditos e recebíveis da empresa |
| **MVP** | ✅ Sim |

**Componentes principais:**
- **Filtros Avançados**:
  - Período (date range picker)
  - Status (Pendente, Recebido, Vencido, Cancelado)
  - Categoria (dropdown)
  - Cliente (busca)
  - Forma de Pagamento (dropdown)
- **Tabela de Lançamentos**:
  - Colunas: Vencimento, Descrição, Cliente, Categoria, Valor, Status, Ações
- **Cards de Resumo** (acima da tabela):
  - Total a Receber
  - Total Vencido (alerta vermelho)
  - Total Recebido no Mês
  - Inadimplência (%)

**Ações disponíveis:**
- [Novo Lançamento]
- [Importar]
- [Receber via PIX] - Gera QR Code
- [Enviar Cobrança] - Email/WhatsApp
- [Gerar Boleto]
- Editar / Excluir / Visualizar / Receber

**Permissões:**
- `financeiro.contas_receber.visualizar`
- `financeiro.contas_receber.criar`
- `financeiro.contas_receber.editar`
- `financeiro.contas_receber.excluir`
- `financeiro.contas_receber.receber`
- `financeiro.contas_receber.cobrar` - Enviar cobranças

---

### 2.4 Fluxo de Caixa

| Atributo | Valor |
|----------|-------|
| **Nome** | Fluxo de Caixa |
| **Rota** | `/financeiro/fluxo-caixa` |
| **Objetivo** | Visualização detalhada das entradas e saídas por período |
| **MVP** | ✅ Sim |

**Componentes principais:**
- **Seletor de Visualização**:
  - Diário (dia a dia)
  - Semanal (resumo semanal)
  - Mensal (por mês)
- **Calendário Financeiro** (modo diário):
  - Grade de dias do mês
  - Cada dia mostra: Saldo inicial, Entradas, Saídas, Saldo final
  - Cores: Verde (positivo), Vermelho (negativo)
- **Gráfico de Evolução** (lado direito):
  - Linha mostrando saldo acumulado
- **Tabela Detalhada** (abaixo):
  - Lançamentos do dia/período selecionado

**Ações disponíveis:**
- [Período Anterior] / [Período Seguinte]
- [Hoje] - Volta para dia atual
- [Novo Lançamento] - Adiciona no dia selecionado
- [Exportar]
- Imprimir

**Permissões:**
- `financeiro.fluxo_caixa.visualizar`
- `financeiro.fluxo_caixa.exportar`

---

### 2.5 DRE - Demonstração do Resultado do Exercício

| Atributo | Valor |
|----------|-------|
| **Nome** | DRE - Demonstração de Resultados |
| **Rota** | `/financeiro/dre` |
| **Objetivo** | Apresentar resultado financeiro no formato contábil DRE |
| **MVP** | ⚠️ Versão simplificada |

**Componentes principais:**
- **Seletor de Período**:
  - Mês/Ano
  - Comparativo (sim/não)
  - Período comparativo (se habilitado)
- **Estrutura DRE**:
  ```
  RECEITA BRUTA
  (-) Impostos
  (=) RECEITA LÍQUIDA
  
  (-) Custo das Mercadorias Vendidas
  (=) LUCRO BRUTO
  
  (-) Despesas Operacionais
      ├── Despesas com Pessoal
      ├── Despesas Administrativas
      ├── Despesas com Vendas
      └── Outras Despesas
  (=) LUCRO OPERACIONAL
  
  (+/-) Outras Receitas/Despesas
  (=) LUCRO LÍQUIDO
  ```
- **Gráfico de Evolução** (linha)
- **Tabela Comparativa** (se habilitado)

**Ações disponíveis:**
- [Gerar DRE]
- [Exportar PDF]
- [Exportar Excel]
- [Comparar Períodos]
- [Configurar Categorias] - Mapeia categorias para estrutura DRE

**Permissões:**
- `financeiro.dre.visualizar`
- `financeiro.dre.exportar`

---

### 2.6 Categorias Financeiras

| Atributo | Valor |
|----------|-------|
| **Nome** | Categorias Financeiras |
| **Rota** | `/financeiro/categorias` |
| **Objetivo** | Gerenciar classificação de receitas e despesas |
| **MVP** | ✅ Sim |

**Componentes principais:**
- **Tabs**: Receitas | Despesas
- **Tabela Hierárquica**:
  - Categoria Pai (expandível)
    - Subcategoria 1
    - Subcategoria 2
  - Cores por categoria
  - Ícones configuráveis
- **Search bar** para busca rápida
- **Estatísticas** (sidebar):
  - Total de categorias
  - Mais usada
  - Última usada

**Ações disponíveis:**
- [Nova Categoria]
- [Nova Subcategoria]
- Editar
- Excluir (se não usada)
- Reordenar (drag & drop)
- Associar a DRE

**Permissões:**
- `financeiro.categorias.visualizar`
- `financeiro.categorias.criar`
- `financeiro.categorias.editar`
- `financeiro.categorias.excluir`

---

### 2.7 Centros de Custo

| Atributo | Valor |
|----------|-------|
| **Nome** | Centros de Custo |
| **Rota** | `/financeiro/centros-custo` |
| **Objetivo** | Controle orçamentário por unidade de negócio |
| **MVP** | ✅ Sim |

**Componentes principais:**
- **Árvore Hierárquica**:
  - Matriz
    - Filial 1
    - Filial 2
      - Departamento A
      - Departamento B
- **Cards de Resumo** por centro:
  - Orçamento
  - Realizado
  - Saldo (%)
  - Barra de progresso visual
- **Tabela de Centros**:
  - Código, Nome, Responsável, Orçamento, Status

**Ações disponíveis:**
- [Novo Centro]
- [Definir Orçamento]
- Editar
- Excluir
- [Transferir Lançamentos] - Realoca lançamentos entre centros

**Permissões:**
- `financeiro.centros_custo.visualizar`
- `financeiro.centros_custo.criar`
- `financeiro.centros_custo.editar`
- `financeiro.centros_custo.excluir`

---

### 2.8 Conciliação Bancária

| Atributo | Valor |
|----------|-------|
| **Nome** | Conciliação Bancária |
| **Rota** | `/financeiro/conciliacao` |
| **Objetivo** | Comparar extrato bancário com lançamentos do sistema |
| **MVP** | ❌ Futuro (Fase 2) |

**Componentes principais:**
- **Seletor de Conta Bancária**
- **Período de Conciliação**
- **Tabela de Conciliação** (3 colunas):
  - Extrato Bancário | Lançamentos Sistema | Status
- **Importar Extrato** (OFX, CSV)
- **Matches Automáticos** (highlight verde)
- **Pendentes de Conciliação** (highlight amarelo)

**Ações disponíveis:**
- [Importar Extrato]
- [Conciliar Manualmente]
- [Criar Lançamento] - Para itens do extrato não lançados
- [Ignorar Item]
- [Finalizar Conciliação]

**Permissões:**
- `financeiro.conciliacao.visualizar`
- `financeiro.conciliacao.executar`

---

### 2.9 Contas Bancárias

| Atributo | Valor |
|----------|-------|
| **Nome** | Contas Bancárias |
| **Rota** | `/financeiro/contas-bancarias` |
| **Objetivo** | Cadastro e gestão de contas bancárias da empresa |
| **MVP** | ✅ Sim |

**Componentes principais:**
- **Cards de Contas**:
  - Ícone banco
  - Nome da conta
  - Saldo atual
  - Última atualização
  - Status (ativa/inativa)
- **Tabela de Movimentações** (ao selecionar conta)
- **Gráfico de Saldo** (evolução)

**Ações disponíveis:**
- [Nova Conta]
- [Editar]
- [Excluir]
- [Ajustar Saldo]
- [Sincronizar] - Com Open Banking (futuro)

**Permissões:**
- `financeiro.contas_bancarias.visualizar`
- `financeiro.contas_bancarias.criar`
- `financeiro.contas_bancarias.editar`
- `financeiro.contas_bancarias.excluir`

---

## 3. Formulários

### 3.1 Formulário: Nova Conta a Pagar

| Atributo | Valor |
|----------|-------|
| **Nome** | Formulário de Conta a Pagar |
| **Localização** | Modal `/financeiro/contas-pagar` (botão "Novo") |
| **Objetivo** | Cadastrar nova obrigação financeira |
| **MVP** | ✅ Sim |

**Campos do formulário:**

| Campo | Tipo | Obrigatório | Validações | Default |
|-------|------|-------------|------------|---------|
| **Descrição** | Text | Sim | Min 3, Max 255 | - |
| **Fornecedor** | Select/Search | Sim | Deve existir no cadastro | - |
| **[+ Novo Fornecedor]** | Link | - | Abre modal rápido | - |
| **Categoria** | Select | Sim | Lista de categorias despesa | - |
| **Centro de Custo** | Select | Não | Lista de centros | Padrão do usuário |
| **Valor** | Currency | Sim | > 0 | - |
| **Data de Vencimento** | Date | Sim | >= Hoje | Hoje + 7 dias |
| **Data de Competência** | Date | Não | - | Mês atual |
| **Número do Documento** | Text | Não | Max 50 | - |
| **Código de Barras** | Text | Não | Validar dígitos se preenchido | - |
| **Forma de Pagamento** | Select | Não | Boleto, PIX, Dinheiro, Transferência | Boleto |
| **Conta Bancária** | Select | Não | Se forma = Transferência/PIX | Padrão |
| **Parcelamento** | Toggle | Não | Ativa campos de parcelas | Não |
| **Nº de Parcelas** | Number | Se parcelado | 2-48 | 1 |
| **Observações** | Textarea | Não | Max 1000 | - |
| **Anexos** | File Upload | Não | PDF, JPG, PNG (max 10MB) | - |
| **Recorrência** | Toggle | Não | Lançamento mensal | Não |

**Ações do formulário:**
- [Salvar] - Valida e salva
- [Salvar e Novo] - Salva e limpa formulário
- [Cancelar] - Fecha modal
- [Duplicar] - Pré-preenche com mesmos dados (disponível na edição)

**Regras de negócio:**
- Se `parcelamento = true`, divide valor em N lançamentos com vencimentos mensais
- Se `recorrência = true`, agenda próximo lançamento automático
- Data de competência afeta DRE do período correspondente

---

### 3.2 Formulário: Nova Conta a Receber

| Atributo | Valor |
|----------|-------|
| **Nome** | Formulário de Conta a Receber |
| **Localização** | Modal `/financeiro/contas-receber` |
| **Objetivo** | Cadastrar novo recebível |
| **MVP** | ✅ Sim |

**Campos do formulário:**

| Campo | Tipo | Obrigatório | Validações | Default |
|-------|------|-------------|------------|---------|
| **Descrição** | Text | Sim | Min 3, Max 255 | - |
| **Cliente** | Select/Search | Sim | Deve existir no cadastro | - |
| **[+ Novo Cliente]** | Link | - | Abre modal rápido | - |
| **Categoria** | Select | Sim | Lista de categorias receita | - |
| **Centro de Custo** | Select | Não | Lista de centros | Padrão |
| **Valor** | Currency | Sim | > 0 | - |
| **Data de Vencimento** | Date | Sim | >= Hoje | Hoje + 30 dias |
| **Data de Competência** | Date | Não | - | Mês atual |
| **Número do Documento** | Text | Não | Max 50 | - |
| **Pedido/Venda Origem** | Select | Não | Vincula a venda do PDV | - |
| **Forma de Recebimento** | Select | Não | Boleto, PIX, Cartão, Dinheiro | Boleto |
| **Parcelamento** | Toggle | Não | - | Não |
| **Nº de Parcelas** | Number | Se parcelado | 2-48 | 1 |
| **Observações** | Textarea | Não | Max 1000 | - |
| **Gerar Boleto** | Toggle | Não | Integração bancária | Não |

**Ações:**
- [Salvar]
- [Salvar e Gerar Boleto]
- [Salvar e Enviar Email]
- [Cancelar]

**Regras de negócio:**
- Vinculação automática se originado de venda PDV
- Geração de boleto requer configuração de carteira

---

### 3.3 Formulário: Baixa de Título (Pagamento)

| Atributo | Valor |
|----------|-------|
| **Nome** | Formulário de Baixa |
| **Localização** | Modal (ação na tabela de contas) |
| **Objetivo** | Registrar pagamento/recebimento de título |
| **MVP** | ✅ Sim |

**Campos do formulário:**

| Campo | Tipo | Obrigatório | Validações | Default |
|-------|------|-------------|------------|---------|
| **Título** | Display | - | Mostra descrição + valor | - |
| **Valor Original** | Currency (disabled) | - | - | Valor do título |
| **Data do Pagamento** | Date | Sim | <= Hoje | Hoje |
| **Valor Pago** | Currency | Sim | > 0 | Valor original |
| **Juros** | Currency | Não | >= 0 | Calculado automaticamente |
| **Desconto** | Currency | Não | >= 0 | 0 |
| **Multa** | Currency | Não | >= 0 | Calculado se vencido |
| **Valor Total** | Currency (calculated) | - | Soma dos valores | Auto |
| **Conta Bancária** | Select | Sim | - | Padrão |
| **Forma de Pagamento** | Select | Sim | - | Forma do cadastro |
| **Nº do Documento/Comprovante** | Text | Não | - | - |
| **Comprovante** | File Upload | Não | PDF, JPG, PNG | - |
| **Observações** | Textarea | Não | - | - |

**Ações:**
- [Confirmar Baixa]
- [Cancelar]

**Regras de negócio:**
- Se data > vencimento: calcula multa/juros automaticamente (configurável)
- Se valor pago < valor original: baixa parcial, mantém restante em aberto
- Se valor pago > valor original: registra como juros

---

### 3.4 Formulário: Nova Categoria

| Atributo | Valor |
|----------|-------|
| **Nome** | Formulário de Categoria |
| **Localização** | Modal `/financeiro/categorias` |
| **Objetivo** | Criar classificação financeira |
| **MVP** | ✅ Sim |

**Campos:**

| Campo | Tipo | Obrigatório | Validações |
|-------|------|-------------|------------|
| **Nome** | Text | Sim | Único, Min 2, Max 100 |
| **Tipo** | Select | Sim | Receita / Despesa |
| **Categoria Pai** | Select | Não | Hierarquia |
| **Cor** | Color Picker | Sim | Hex color |
| **Ícone** | Icon Picker | Não | Biblioteca de ícones |
| **Código DRE** | Select | Não | Mapeamento para DRE |
| **Ativo** | Toggle | - | - |

**Ações:**
- [Salvar]
- [Cancelar]

---

### 3.5 Formulário: Novo Centro de Custo

| Atributo | Valor |
|----------|-------|
| **Nome** | Formulário de Centro de Custo |
| **Localização** | Modal `/financeiro/centros-custo` |
| **Objetivo** | Criar unidade de controle orçamentário |
| **MVP** | ✅ Sim |

**Campos:**

| Campo | Tipo | Obrigatório | Validações |
|-------|------|-------------|------------|
| **Código** | Text | Sim | Único, Max 20 |
| **Nome** | Text | Sim | Min 3, Max 100 |
| **Descrição** | Textarea | Não | Max 500 |
| **Centro Pai** | Select | Não | Hierarquia |
| **Responsável** | Select | Não | Usuário do sistema |
| **Orçamento Anual** | Currency | Não | >= 0 |
| **Ativo** | Toggle | - | - |

**Ações:**
- [Salvar]
- [Salvar e Definir Orçamento] - Abre modal de orçamento
- [Cancelar]

---

### 3.6 Formulário: Nova Conta Bancária

| Atributo | Valor |
|----------|-------|
| **Nome** | Formulário de Conta Bancária |
| **Localização** | Modal `/financeiro/contas-bancarias` |
| **Objetivo** | Cadastrar conta bancária |
| **MVP** | ✅ Sim |

**Campos:**

| Campo | Tipo | Obrigatório | Validações |
|-------|------|-------------|------------|
| **Nome da Conta** | Text | Sim | Min 3, Max 100 |
| **Banco** | Select | Sim | Lista de bancos |
| **Agência** | Text | Sim | Max 10 |
| **Conta** | Text | Sim | Max 20 |
| **Dígito** | Text | Não | Max 2 |
| **Tipo** | Select | Sim | Corrente / Poupança |
| **Saldo Inicial** | Currency | Sim | - |
| **Data do Saldo** | Date | Sim | - |
| **Titular** | Text | Sim | - |
| **CNPJ/CPF Titular** | Text | Não | Valida formato |
| **Padrão para Recebimentos** | Toggle | Não | - |
| **Padrão para Pagamentos** | Toggle | Não | - |
| **Ativa** | Toggle | - | - |

**Ações:**
- [Salvar]
- [Cancelar]

---

### 3.7 Formulário: Transferência entre Contas

| Atributo | Valor |
|----------|-------|
| **Nome** | Formulário de Transferência |
| **Localização** | Modal (botão "Transferir" no menu) |
| **Objetivo** | Registrar movimentação entre contas próprias |
| **MVP** | ✅ Sim |

**Campos:**

| Campo | Tipo | Obrigatório | Validações |
|-------|------|-------------|------------|
| **Conta de Origem** | Select | Sim | Deve ter saldo |
| **Conta de Destino** | Select | Sim | Diferente da origem |
| **Valor** | Currency | Sim | <= Saldo origem |
| **Data** | Date | Sim | - |
| **Descrição** | Text | Não | - |
| **Categoria** | Select | Não | Default: Transferência |
| **Nº Documento** | Text | Não | - |

**Ações:**
- [Confirmar Transferência]
- [Cancelar]

**Regras:**
- Gera dois lançamentos: saída na origem, entrada no destino
- Vincula os lançamentos (transferência relacionada)

---

### 3.8 Formulário: Ajuste de Saldo

| Atributo | Valor |
|----------|-------|
| **Nome** | Formulário de Ajuste |
| **Localização** | Modal (ação na conta bancária) |
| **Objetivo** | Corrigir saldo sem lançamento específico |
| **MVP** | ✅ Sim |

**Campos:**

| Campo | Tipo | Obrigatório | Validações |
|-------|------|-------------|------------|
| **Conta** | Display | - | - |
| **Saldo Atual** | Currency (disabled) | - | - |
| **Novo Saldo** | Currency | Sim | - |
| **Diferença** | Currency (calculated) | - | Calculado |
| **Data do Ajuste** | Date | Sim | - |
| **Motivo** | Select | Sim | Acerto / Correção / Outro |
| **Observações** | Textarea | Não | - |

**Ações:**
- [Confirmar Ajuste]
- [Cancelar]

**Regras:**
- Gera lançamento de "Ajuste de Caixa" para compensar diferença
- Registra usuário e data do ajuste (auditoria)

---

## 4. Modais/Dialogs

### 4.1 Modal: Visualização de Lançamento

| Atributo | Valor |
|----------|-------|
| **Nome** | Detalhes do Lançamento |
| **Gatilho** | Clique no ícone "olho" na tabela |
| **Tamanho** | Medium (600px) |
| **MVP** | ✅ Sim |

**Conteúdo:**
- **Header**: Título "Detalhes do Lançamento" + Badge de status
- **Body** (seções):
  - **Informações Principais**:
    - Descrição, Fornecedor/Cliente, Categoria
    - Valor (destacado), Vencimento, Status
  - **Dados Complementares**:
    - Documento, Centro de Custo, Competência
    - Forma de Pagamento, Conta Bancária
  - **Histórico**:
    - Data de criação, Criado por
    - Última edição, Editado por
  - **Pagamento** (se pago/recebido):
    - Data do pagamento, Valor pago
    - Comprovante (preview/download)
  - **Observações** (textarea readonly)
  - **Anexos** (lista com download)

**Ações:**
- [Editar] - Abre formulário de edição
- [Dar Baixa] - Se pendente
- [Excluir] - Com confirmação
- [Fechar]
- [Imprimir] - Gera PDF do lançamento
- [Duplicar] - Cria cópia

---

### 4.2 Modal: Confirmação de Exclusão

| Atributo | Valor |
|----------|-------|
| **Nome** | Confirmar Exclusão |
| **Gatilho** | Clique em excluir (lixeira) |
| **Tamanho** | Small (400px) |
| **MVP** | ✅ Sim |

**Conteúdo:**
- **Ícone**: Alerta triângulo (amarelo/vermelho)
- **Título**: "Confirmar Exclusão"
- **Mensagem**: "Tem certeza que deseja excluir o lançamento '[descrição]' no valor de R$ [valor]? Esta ação não pode ser desfeita."
- **Alerta adicional** (se já foi pago): "Este lançamento já foi baixado. A exclusão irá reverter o movimento bancário."

**Ações:**
- [Sim, Excluir] - Destructive (vermelho)
- [Cancelar] - Secondary

---

### 4.3 Modal: Baixa Rápida

| Atributo | Valor |
|----------|-------|
| **Nome** | Dar Baixa |
| **Gatilho** | Clique em "Dar Baixa" ou check na tabela |
| **Tamanho** | Medium (500px) |
| **MVP** | ✅ Sim |

**Conteúdo:**
- **Resumo do Título**: Descrição, Valor, Vencimento
- **Campos** (simplificados):
  - Data do Pagamento (default: hoje)
  - Valor Pago (default: valor original)
  - Conta Bancária
  - Comprovante (upload opcional)

**Ações:**
- [Confirmar Baixa]
- [Baixa Parcial] - Permite editar valor
- [Cancelar]

---

### 4.4 Modal: Receber via PIX

| Atributo | Valor |
|----------|-------|
| **Nome** | Recebimento via PIX |
| **Gatilho** | Ação "Receber via PIX" na conta a receber |
| **Tamanho** | Medium (500px) |
| **MVP** | ✅ Sim |

**Conteúdo:**
- **Valor a Receber**: Display
- **QR Code** (gerado dinamicamente)
- **Chave PIX** (copiar)
- **Link de Pagamento** (copiar)
- **Status**: Aguardando pagamento / Pago ✓
- **Timer**: Contador de expiração (30 min)

**Ações:**
- [Copiar Chave]
- [Copiar Link]
- [Compartilhar WhatsApp]
- [Verificar Pagamento] - Polling manual
- [Cancelar]
- [Fechar] (depois de pago)

---

### 4.5 Modal: Receber via Cartão

| Atributo | Valor |
|----------|-------|
| **Nome** | Recebimento via Cartão |
| **Gatilho** | Ação "Receber via Cartão" |
| **Tamanho** | Large (700px) |
| **MVP** | ✅ Sim |

**Conteúdo:**
- **Tabs**: Presencial / Link de Pagamento
- **Aba Presencial**:
  - Formulário de dados do cartão (ou integração com máquina)
  - Bandeiras aceitas
  - Parcelamento (1x a 12x)
  - Valor da parcela (calculado)
  - Taxa de operadora (preview)
- **Aba Link**:
  - Gerar link de pagamento
  - Enviar por email/WhatsApp

**Ações:**
- [Processar Pagamento]
- [Gerar Link]
- [Cancelar]

---

### 4.6 Modal: Upload de Comprovante

| Atributo | Valor |
|----------|-------|
| **Nome** | Anexar Comprovante |
| **Gatilho** | Ação "Anexar" no lançamento |
| **Tamanho** | Medium (500px) |
| **MVP** | ✅ Sim |

**Conteúdo:**
- **Dropzone**: Arraste arquivos ou clique para selecionar
- **Tipos aceitos**: PDF, JPG, PNG
- **Tamanho máximo**: 10MB
- **Lista de arquivos selecionados**
- **Preview** (para imagens)

**Ações:**
- [Enviar]
- [Cancelar]

---

### 4.7 Modal: Agrupar Lançamentos

| Atributo | Valor |
|----------|-------|
| **Nome** | Agrupar Lançamentos |
| **Gatilho** | Ação em massa após seleção múltipla |
| **Tamanho** | Large (800px) |
| **MVP** | ⚠️ Futuro |

**Conteúdo:**
- **Lista de Lançamentos Selecionados**: Tabela resumida
- **Total do Agrupamento**: Soma dos valores
- **Dados do Novo Lançamento**:
  - Descrição (sugestão: "Agrupamento [data]")
  - Vencimento (maior das datas)
  - Fornecedor (se comum)
  - Categoria (se comum)

**Ações:**
- [Criar Agrupamento]
- [Cancelar]

**Regras:**
- Só agrupa lançamentos do mesmo tipo (pagar ou receber)
- Cancela lançamentos originais e cria novo consolidado

---

### 4.8 Modal: Duplicar Lançamento

| Atributo | Valor |
|----------|-------|
| **Nome** | Duplicar Lançamento |
| **Gatilho** | Ação "Duplicar" no detalhe ou tabela |
| **Tamanho** | Medium (500px) |
| **MVP** | ✅ Sim |

**Conteúdo:**
- **Mensagem**: "Criar cópia do lançamento '[descrição]'?"
- **Opções**:
  - Novo vencimento (date picker)
  - Manter mesmo valor (toggle)
  - Novo valor (se toggle off)
  - Quantidade de cópias (1-12)
  - Intervalo entre cópias (dias/meses)

**Ações:**
- [Duplicar]
- [Cancelar]

---

### 4.9 Modal: Enviar Cobrança

| Atributo | Valor |
|----------|-------|
| **Nome** | Enviar Cobrança |
| **Gatilho** | Ação "Enviar Cobrança" na conta a receber |
| **Tamanho** | Medium (600px) |
| **MVP** | ✅ Sim |

**Conteúdo:**
- **Preview da Mensagem**:
  - Template de cobrança
  - Dados do cliente preenchidos
  - Link de pagamento (se disponível)
  - Boleto em anexo (se disponível)
- **Canais**:
  - WhatsApp (checkbox)
  - Email (checkbox)
- **Destinatários**: Lista de contatos do cliente

**Ações:**
- [Enviar]
- [Personalizar Mensagem] - Abre editor
- [Cancelar]

---

### 4.10 Modal: Configurar DRE

| Atributo | Valor |
|----------|-------|
| **Nome** | Configurar Estrutura DRE |
| **Gatilho** | Botão "Configurar" na tela de DRE |
| **Tamanho** | Large (900px) |
| **MVP** | ⚠️ Versão simplificada |

**Conteúdo:**
- **Estrutura DRE** (árvore):
  - Receita Bruta
    - [+] Selecionar categorias
  - Impostos
    - [+] Selecionar categorias
  - Custo das Mercadorias
    - [+] Selecionar categorias
  - etc.
- **Lista de Categorias** (sidebar):
  - Drag & drop para associar
  - Busca por nome

**Ações:**
- [Salvar Configuração]
- [Restaurar Padrão]
- [Cancelar]

---

## 5. Componentes Reutilizáveis Específicos

### 5.1 Cards Financeiros

**CardSaldo (3 variantes):**

```typescript
interface CardSaldoProps {
  tipo: 'receber' | 'pagar' | 'projetado';
  valor: number;
  comparativo?: number; // percentual vs mês anterior
  loading?: boolean;
  onClick?: () => void;
}
```

**Estrutura visual:**
- Ícone circular (azul/vermelho/verde)
- Label ("Total a Receber", "Total a Pagar", "Saldo Projetado")
- Valor formatado em moeda
- Badge comparativo (verde ↑ / vermelho ↓)
- Hover: leve elevação + shadow

**Estados:**
- Loading: Skeleton animation
- Empty: "R$ 0,00" + mensagem "Nenhum lançamento"
- Error: Ícone de erro + mensagem

---

### 5.2 Gráficos Financeiros

**GraficoFluxoCaixa:**

```typescript
interface GraficoFluxoCaixaProps {
  dados: {
    data: string;
    entradas: number;
    saidas: number;
    saldo: number;
  }[];
  periodo: 'diario' | 'semanal' | 'mensal';
  height?: number;
}
```

**Tipo**: Gráfico de área/linha (Chart.js/Recharts)
- Linha "Saldo" (cor primária)
- Área "Entradas" (verde transparente)
- Área "Saídas" (vermelho transparente)
- Tooltip ao hover com valores
- Legendas interativas (clique para toggle)

---

**GraficoReceitasDespesas:**

```typescript
interface GraficoReceitasDespesasProps {
  dados: {
    periodo: string;
    receitas: number;
    despesas: number;
  }[];
}
```

**Tipo**: Gráfico de barras agrupadas
- Barras verdes: Receitas
- Barras vermelhas: Despesas
- Rótulos nos eixos

---

### 5.3 Tabelas de Lançamentos

**TabelaLancamentos:**

```typescript
interface TabelaLancamentosProps {
  lancamentos: Lancamento[];
  tipo: 'pagar' | 'receber';
  selecionaveis?: boolean;
  onSelecionar?: (ids: string[]) => void;
  acoes?: ('ver' | 'editar' | 'excluir' | 'baixar' | 'duplicar')[];
  loading?: boolean;
  paginacao?: {
    pagina: number;
    totalPaginas: number;
    onPaginaChange: (pagina: number) => void;
  };
}
```

**Colunas (comuns):**
| Coluna | Alinhamento | Largura | Destaque |
|--------|-------------|---------|----------|
| Checkbox | Center | 40px | - |
| Vencimento | Left | 100px | Vermelho se vencido |
| Descrição | Left | Flex | Bold |
| Pessoa | Left | 150px | - |
| Categoria | Left | 120px | Badge colorida |
| Valor | Right | 120px | Bold, cor tipo |
| Status | Center | 100px | Badge |
| Ações | Center | 120px | Ícones |

**Features:**
- Ordenação por coluna (click no header)
- Hover: linha destacada
- Seleção múltipla com checkbox
- Colunas responsivas (scroll horizontal em mobile)

---

### 5.4 Indicadores de Vencimento

**BadgeVencimento:**

```typescript
interface BadgeVencimentoProps {
  dataVencimento: Date;
  dataPagamento?: Date;
  status: 'pendente' | 'pago' | 'vencido' | 'cancelado';
}
```

**Regras de cor:**
- **Pago**: Verde sólido (green-500) + ícone check
- **Pendente**:
  - Vence em > 7 dias: Cinza
  - Vence em <= 7 dias: Amarelo
  - Vence hoje: Laranja
- **Vencido**: Vermelho + ícone alerta
- **Cancelado**: Cinza riscado

**Tooltip:**
- Mostra quantos dias para vencer ou atraso

---

### 5.5 Badge de Status

**BadgeStatusFinanceiro:**

```typescript
interface BadgeStatusFinanceiroProps {
  status: 'pendente' | 'pago' | 'recebido' | 'vencido' | 'cancelado' | 'parcial';
  size?: 'sm' | 'md' | 'lg';
}
```

**Variantes:**
- **Pendente**: Cinza/Amarelo claro
- **Pago/Recebido**: Verde
- **Vencido**: Vermelho
- **Cancelado**: Cinza escuro
- **Parcial**: Azul/Amarelo

---

### 5.6 Filtro de Período

**FiltroPeriodo:**

```typescript
interface FiltroPeriodoProps {
  valor: { inicio: Date; fim: Date } | null;
  onChange: (periodo: { inicio: Date; fim: Date }) => void;
  presets?: ('hoje' | 'semana' | 'mes' | 'trimestre' | 'ano' | 'personalizado')[];
}
```

**Presets disponíveis:**
- Hoje
- Esta semana
- Este mês
- Mês anterior
- Este trimestre
- Este ano
- Personalizado (abre date picker)

**Visual:**
- Botão dropdown com ícone calendário
- Label mostra período selecionado
- Date picker range (2 meses visíveis)

---

### 5.7 Search de Pessoa

**SearchPessoa:**

```typescript
interface SearchPessoaProps {
  tipo: 'cliente' | 'fornecedor' | 'ambos';
  valor: Pessoa | null;
  onChange: (pessoa: Pessoa | null) => void;
  onCriarNovo?: () => void;
  placeholder?: string;
}
```

**Features:**
- Input com autocomplete
- Debounce na busca (300ms)
- Lista de resultados com foto/nome/documento
- Opção "+ Cadastrar novo" no final da lista
- Loading state

---

### 5.8 Input de Valor

**InputValor:**

```typescript
interface InputValorProps {
  valor: number | null;
  onChange: (valor: number | null) => void;
  currency?: 'BRL' | 'USD' | 'EUR';
  disabled?: boolean;
  error?: string;
}
```

**Features:**
- Máscara de moeda em tempo real
- Símbolo da moeda (R$)
- Separador de milhar
- Duas casas decimais
- Validação de valor > 0

---

### 5.9 Resumo de Lançamento

**ResumoLancamento:**

```typescript
interface ResumoLancamentoProps {
  lancamento: Lancamento;
  variant?: 'compact' | 'detailed';
}
```

**Compact:**
- Uma linha: Descrição + Valor + Status

**Detailed:**
- Card com todas as informações relevantes
- Ações rápidas (editar, baixar, excluir)
- Histórico de alterações

---

### 5.10 Alerta de Vencimentos

**AlertaVencimentos:**

```typescript
interface AlertaVencimentosProps {
  lancamentos: Lancamento[];
  maxItems?: number;
  onVerTodos?: () => void;
}
```

**Visual:**
- Card com borda lateral amarela/laranja
- Lista dos próximos vencimentos (7 dias)
- Ícone de alerta
- Contador de itens
- Link "Ver todos"

---

## 6. Estados de UI

### 6.1 Empty States

**Tabela vazia (sem lançamentos):**

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│              [Ícone: Arquivo/Gráfico]               │
│                                                     │
│         Nenhum lançamento encontrado                │
│                                                     │
│   Comece criando sua primeira conta a pagar ou      │
│   importe lançamentos de um arquivo CSV.            │
│                                                     │
│      [+ Novo Lançamento]  [Importar CSV]            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Elementos:**
- Ícone ilustrativo (outline, cinza)
- Título explicativo
- Descrição com contexto
- CTA primário
- CTA secundário (se aplicável)

---

**Filtros sem resultado:**

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│              [Ícone: Lupa/Search]                   │
│                                                     │
│     Nenhum resultado para os filtros aplicados      │
│                                                     │
│      [Limpar Filtros]  [Ajustar Filtros]            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

**Dashboard sem dados:**

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│         [Ilustração: Gráfico crescendo]             │
│                                                     │
│     Bem-vindo ao Módulo Financeiro!                 │
│                                                     │
│     Para começar a visualizar gráficos e            │
│     relatórios, cadastre seu primeiro               │
│     lançamento financeiro.                          │
│                                                     │
│            [Criar Primeiro Lançamento]              │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### 6.2 Loading States

**Skeleton para cards:**

```
┌─────────────┐
│  ◯          │  <- Círculo pulsando
│  ──────     │  <- Linha (label)
│  ─────────  │  <- Linha maior (valor)
└─────────────┘
```

**Skeleton para tabela:**

```
┌────┬────────────┬────────┬──────────┬────────┐
│ ◯  │ ────────   │ ────   │ ──────   │ ────   │  <- Checkbox + 4 linhas
├────┼────────────┼────────┼──────────┼────────┤
│ ◯  │ ────────   │ ────   │ ──────   │ ────   │
├────┼────────────┼────────┼──────────┼────────┤
│ ◯  │ ────────   │ ────   │ ──────   │ ────   │
└────┴────────────┴────────┴──────────┴────────┘
```

**Spinner de página:**

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│                   [Spinner]                         │
│                                                     │
│              Carregando lançamentos...              │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Progress bar (para operações longas):**

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Processando importação...                          │
│  [████████████████████░░░░░░░░░░] 67%               │
│  670 de 1000 registros importados                   │
│                                                     │
│              [Cancelar]                             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### 6.3 Error States

**Erro de carregamento:**

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│              [Ícone: Alerta/Error]                  │
│                                                     │
│         Não foi possível carregar os dados          │
│                                                     │
│   Ocorreu um erro ao buscar os lançamentos.         │
│   Por favor, tente novamente.                       │
│                                                     │
│         [Tentar Novamente]                          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Erro de permissão (403):**

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│              [Ícone: Cadeado/Lock]                  │
│                                                     │
│           Acesso não autorizado                     │
│                                                     │
│   Você não tem permissão para acessar               │
│   este recurso. Contate o administrador.            │
│                                                     │
│         [Voltar ao Dashboard]                       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Erro de formulário (campo):**

```
Valor *
┌─────────────────────────────────────────────────────┐
│ R$ -1.000,00                        │
└─────────────────────────────────────────────────────┘
  ↑ Borda vermelha
  
  ⚠ Valor deve ser maior que zero
```

**Erro de rede (toast):**

```
┌─────────────────────────────────────────────────────┐
│ ⚠ Conexão instável. Algumas funcionalidades         │
│   podem não estar disponíveis.                      │
│                                        [Entendi]    │
└─────────────────────────────────────────────────────┘
```

---

### 6.4 Success States

**Toast de sucesso:**

```
┌─────────────────────────────────────────────────────┐
│ ✓ Lançamento criado com sucesso!                    │
└─────────────────────────────────────────────────────┘
```

**Confirmação de baixa:**

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│              [Ícone: Check/Circle Verde]            │
│                                                     │
│            Baixa realizada com sucesso!             │
│                                                     │
│   Valor: R$ 1.500,00                                │
│   Data: 15/01/2024                                  │
│   Conta: Banco do Brasil                            │
│                                                     │
│    [Novo Lançamento]  [Ver Detalhes]                │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Confirmação de importação:**

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│            [Ícone: Upload/Cloud Check]              │
│                                                     │
│         Importação concluída!                       │
│                                                     │
│   ✓ 150 lançamentos importados                      │
│   ⚠ 10 registros com avisos                         │
│   ✗ 2 registros com erro                            │
│                                                     │
│    [Ver Lançamentos]  [Ver Relatório]               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 7. Integrações de UI

### 7.1 Notificações/Toasts

**Tipos de notificação:**

| Tipo | Uso | Duração | Ação |
|------|-----|---------|------|
| **Success** | Operação concluída | 5s | Auto-close ou botão fechar |
| **Error** | Falha na operação | Persistente | Botão fechar + retry |
| **Warning** | Aviso, necessita atenção | 8s | Auto-close |
| **Info** | Informação geral | 6s | Auto-close |

**Posição:** Top-right (desktop), Top (mobile)

**Exemplos:**

```
Sucesso:
┌─────────────────────────────────────────────────────┐
│ ✓ Lançamento #1234 criado com sucesso               │
│   Conta a Pagar - Fornecedor XYZ                    │
│                                         [Fechar] [x]│
└─────────────────────────────────────────────────────┘

Erro:
┌─────────────────────────────────────────────────────┐
│ ✗ Erro ao salvar lançamento                         │
│   Não foi possível conectar ao servidor.            │
│                        [Tentar Novamente] [Fechar]  │
└─────────────────────────────────────────────────────┘

Aviso:
┌─────────────────────────────────────────────────────┐
│ ⚠ Esta conta já está vencida há 15 dias             │
│   Considere negociar com o fornecedor.              │
│                                         [Fechar] [x]│
└─────────────────────────────────────────────────────┘

Info:
┌─────────────────────────────────────────────────────┐
│ ℹ Novo recurso: Conciliação bancária                │
│   Saiba mais sobre como importar extratos.    [Saiba│
│   mais]                                      [Fechar]│
└─────────────────────────────────────────────────────┘
```

---

### 7.2 Confirmações

**Modal de confirmação simples:**

```
┌─────────────────────────────────────────────────────┐
│ Confirmar Ação                            [x]       │
├─────────────────────────────────────────────────────┤
│                                                     │
│   Tem certeza que deseja excluir este               │
│   lançamento?                                       │
│                                                     │
│   Esta ação não pode ser desfeita.                  │
│                                                     │
│         [Cancelar]    [Sim, Excluir]                │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Modal de confirmação com detalhes:**

```
┌─────────────────────────────────────────────────────┐
│ Confirmar Baixa em Lote                   [x]       │
├─────────────────────────────────────────────────────┤
│                                                     │
│   Você está prestes a dar baixa em 5 lançamentos:   │
│                                                     │
│   • Fornecedor A - R$ 1.000,00                      │
│   • Fornecedor B - R$ 2.500,00                      │
│   • Fornecedor C - R$ 800,00                        │
│   ...                                               │
│                                                     │
│   Total: R$ 4.300,00                                │
│   Conta: Banco do Brasil                            │
│                                                     │
│   ⚠ Esta ação não poderá ser desfeita.              │
│                                                     │
│         [Cancelar]    [Confirmar Baixa]             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Confirmação por digitação (para ações críticas):**

```
┌─────────────────────────────────────────────────────┐
│ Confirmar Exclusão em Massa               [x]       │
├─────────────────────────────────────────────────────┤
│                                                     │
│   ⚠ Atenção! Você está excluindo 50 lançamentos.    │
│                                                     │
│   Para confirmar, digite "EXCLUIR" abaixo:          │
│                                                     │
│   ┌─────────────────────────────────────────────┐   │
│   │ EXCLUIR                                     │   │
│   └─────────────────────────────────────────────┘   │
│                                                     │
│         [Cancelar]    [Confirmar Exclusão]          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### 7.3 Exportação de Relatórios

**Menu de exportação:**

```
┌─────────────────────────────────────────────────────┐
│ Relatório de Contas a Pagar                         │
│                                                     │
│ [Filtrar] [Novo] [⠇] <- Menu                       │
│              │                                      │
│              └── Exportar como...                   │
│                  ├── PDF                            │
│                  ├── Excel (.xlsx)                  │
│                  ├── CSV                            │
│                  └── Imprimir                       │
└─────────────────────────────────────────────────────┘
```

**Modal de exportação:**

```
┌─────────────────────────────────────────────────────┐
│ Exportar Relatório                        [x]       │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Formato:                                           │
│  (•) PDF                                            │
│  ( ) Excel                                          │
│  ( ) CSV                                            │
│                                                     │
│  Período: [01/01/2024 ▼] até [31/01/2024 ▼]        │
│                                                     │
│  Opções:                                            │
│  [✓] Incluir lançamentos cancelados                 │
│  [✓] Incluir detalhes de pagamento                  │
│  [ ] Incluir anexos                                 │
│                                                     │
│         [Cancelar]    [Exportar]                    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Estados de exportação:**

```
Preparando:
┌─────────────────────────────────────────────────────┐
│                                                     │
│               [Spinner]                             │
│                                                     │
│         Preparando seu relatório...                 │
│                                                     │
└─────────────────────────────────────────────────────┘

Pronto:
┌─────────────────────────────────────────────────────┐
│                                                     │
│            [Ícone: Arquivo PDF]                     │
│                                                     │
│         Relatório pronto para download!             │
│                                                     │
│      Nome: contas-pagar-jan-2024.pdf                │
│      Tamanho: 245 KB                                │
│                                                     │
│         [Baixar]  [Enviar por Email]                │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### 7.4 Drag & Drop

**Upload de arquivos:**

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│                                                     │
│              [Ícone: Cloud Upload]                  │
│                                                     │
│      Arraste arquivos aqui ou clique para           │
│      selecionar                                     │
│                                                     │
│      Formatos: PDF, JPG, PNG                        │
│      Tamanho máximo: 10MB                           │
│                                                     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Estado de drag:**

```
┌─────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────┐ │
│ │                                                 │ │
│ │         [Ícone: Check]                          │ │
│ │                                                 │ │
│ │         Solte o arquivo aqui                    │ │
│ │                                                 │ │
│ │                                                 │ │
│ └─────────────────────────────────────────────────┘ │
│                    ↑ Borda tracejada azul           │
│                    ↑ Background azul claro          │
└─────────────────────────────────────────────────────┘
```

---

### 7.5 Atalhos de Teclado

**Tela de Contas:**

| Atalho | Ação |
|--------|------|
| `Ctrl + N` | Novo lançamento |
| `Ctrl + F` | Focar busca |
| `Ctrl + E` | Exportar |
| `Esc` | Fechar modal |
| `Enter` | Confirmar ação no modal |
| `Delete` | Excluir selecionados |
| `Ctrl + A` | Selecionar todos |

**Indicador visual de atalhos:**

```
┌─────────────────────────────────────────────────────┐
│  Dica: Pressione Ctrl+N para criar um novo          │
│        lançamento                    [x]            │
└─────────────────────────────────────────────────────┘
```

---

## 8. Responsividade

### 8.1 Breakpoints

| Breakpoint | Largura | Layout |
|------------|---------|--------|
| **Mobile** | < 640px | Coluna única, cards empilhados |
| **Tablet** | 640-1024px | 2 colunas, tabela scroll horizontal |
| **Desktop** | > 1024px | Layout completo, sidebar visível |

### 8.2 Adaptações por Tela

**Mobile:**
- Tabela vira lista de cards
- Filtros em modal
- Menu de ações em bottom sheet
- Cards de saldo em carrossel

**Tablet:**
- Sidebar colapsável
- Tabela com scroll horizontal
- Modais em tamanho médio

**Desktop:**
- Layout 3 colunas para dashboard
- Sidebar fixa
- Tabela completa com todas as colunas
- Modais lado a lado (drag & drop)

---

## 9. Glossário de Termos

| Termo | Descrição |
|-------|-----------|
| **Conta a Pagar** | Obrigação financeira da empresa (despesa) |
| **Conta a Receber** | Crédito a receber pela empresa (receita) |
| **Baixa** | Registro de pagamento/recebimento |
| **Vencimento** | Data limite para pagamento/recebimento |
| **Competência** | Mês/ano ao qual o lançamento se refere |
| **Conciliação** | Conferência entre extrato bancário e sistema |
| **DRE** | Demonstração do Resultado do Exercício |
| **Centro de Custo** | Unidade organizacional para controle |
| **Categoria** | Classificação do tipo de receita/despesa |

---

## 10. Checklist de Implementação

### MVP (Fase 1)
- [ ] Dashboard Financeiro
- [ ] Contas a Pagar (CRUD + Baixa)
- [ ] Contas a Receber (CRUD + Baixa)
- [ ] Fluxo de Caixa (básico)
- [ ] Categorias Financeiras
- [ ] Centros de Custo (básico)
- [ ] Contas Bancárias
- [ ] DRE simplificado
- [ ] Todos os formulários principais
- [ ] Todos os modais essenciais

### Fase 2
- [ ] Conciliação Bancária
- [ ] DRE completo com configuração
- [ ] Recorrência de lançamentos
- [ ] Agrupamento de lançamentos
- [ ] Integração Open Banking
- [ ] Cobrança automatizada

### Fase 3
- [ ] Previsão de fluxo de caixa (IA)
- [ ] Análise de tendências
- [ ] Orçamento vs Realizado
- [ ] Alertas inteligentes
- [ ] App mobile

---

**Documento criado em:** 28 de Março de 2026  
**Versão:** 1.0  
**Responsável:** Frontend Team UNIQ  
**Status:** Pronto para desenvolvimento
