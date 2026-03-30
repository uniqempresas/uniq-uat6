# Mapa de UI - Módulo Estoque

## 1. Resumo do Módulo

### 1.1 Objetivo Principal
O módulo de Estoque do UNIQ Empresas é responsável pelo gerenciamento completo do ciclo de vida dos produtos, desde o cadastro até o controle de movimentações, garantindo visibilidade em tempo real das quantidades disponíveis, organização por categorias, controle de variações (tamanho, cor, etc.) e integração com os módulos de vendas e financeiro.

### 1.2 User Stories Principais

| ID | User Story | Prioridade |
|----|------------|------------|
| EST-001 | Como gestor, quero cadastrar produtos com variações (tamanho, cor) para vender itens diferentes sob o mesmo SKU base | MVP |
| EST-002 | Como operador, quero registrar entradas de estoque para atualizar o saldo ao receber mercadoria | MVP |
| EST-003 | Como operador, quero registrar saídas de estoque para baixar o saldo ao vender ou transferir | MVP |
| EST-004 | Como gestor, quero visualizar produtos com estoque baixo para repor antes de faltar | MVP |
| EST-005 | Como gestor, quero realizar inventário físico para corrigir divergências no sistema | MVP |
| EST-006 | Como operador, quero imprimir etiquetas de produtos para identificação física | MVP |
| EST-007 | Como gestor, quero categorizar produtos para organizar o catálogo | MVP |
| EST-008 | Como gestor, quero vincular fornecedores aos produtos para facilitar compras futuras | Pós-MVP |
| EST-009 | Como gestor, quero ver histórico de movimentações para auditoria | Pós-MVP |
| EST-010 | Como operador, quero importar produtos em massa via Excel/CSV para agilizar cadastro | Pós-MVP |

### 1.3 Integrações

```
┌─────────────────────────────────────────────────────────────┐
│                    MÓDULO ESTOQUE                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐      ┌──────────────┐                    │
│  │  Cadastro    │      │ Movimentação │                    │
│  │  Produtos    │      │  Estoque     │                    │
│  └──────┬───────┘      └──────┬───────┘                    │
│         │                     │                            │
│         └──────────┬──────────┘                            │
│                    │                                        │
│    ┌───────────────┼───────────────┐                       │
│    ▼               ▼               ▼                       │
│ ┌───────┐      ┌───────┐      ┌─────────┐                 │
│ │ LOJA  │      │  PDV   │      │FINANCEIRO│                │
│ │VIRTUAL│      │VENDAS  │      │          │                │
│ └───┬───┘      └───┬───┘      └────┬────┘                 │
│     │              │               │                       │
│     └──────────────┴───────────────┘                       │
│                    │                                        │
│                    ▼                                        │
│            ┌─────────────┐                                 │
│            │ CATÁLOGO    │                                 │
│            │ SINCRONIZADO│                                 │
│            └─────────────┘                                 │
└─────────────────────────────────────────────────────────────┘
```

| Sistema | Tipo de Integração | Dados Trocados |
|---------|-------------------|----------------|
| **Loja Virtual** | Bidirecional | Produtos, variações, estoque, preços, fotos, status |
| **Vendas PDV** | Leitura | Produtos, estoque, preços para venda |
| **Financeiro** | Escrita | Custo de produtos, valor de vendas, margem |
| **Relatórios** | Leitura | Movimentações, saldo, giro de estoque |
| **Fiscal** | Leitura | NCM, CEST, CFOP, código de barras |

---

## 2. Telas/Páginas Principais

### 2.1 Lista de Produtos

**Nome:** Lista de Produtos  
**Rota:** `/estoque/produtos`  
**Objetivo:** Visualizar todos os produtos cadastrados com filtros e busca rápida

**Componentes Principais:**
- Header com título e botão "Novo Produto"
- Barra de busca com sugestões (nome, SKU, código de barras)
- Filtros avançados (categoria, estoque, status, fornecedor)
- Toggle visualização: Grade (cards) / Lista (tabela)
- Cards/Tabela de produtos
- Paginação / Scroll infinito
- Botões de ação em massa

**Ações Disponíveis:**
- [ ] Buscar produto (texto livre)
- [ ] Filtrar por categoria
- [ ] Filtrar por status de estoque (baixo, zerado, OK)
- [ ] Ordenar (nome, preço, estoque, data)
- [ ] Visualizar detalhes (clique no produto)
- [ ] Editar produto
- [ ] Duplicar produto
- [ ] Excluir produto (com confirmação)
- [ ] Exportar para Excel/CSV
- [ ] Imprimir etiquetas (em massa)
- [ ] Atualizar estoque em lote

**Permissões Necessárias:**
- `estoque.produtos.visualizar` - Ver lista
- `estoque.produtos.criar` - Botão "Novo Produto"
- `estoque.produtos.editar` - Ação editar
- `estoque.produtos.excluir` - Ação excluir
- `estoque.etiquetas.imprimir` - Imprimir etiquetas

**Estados de Exibição:**
```
[VISUALIZAÇÃO GRADE]          [VISUALIZAÇÃO LISTA]
┌─────────┐ ┌─────────┐        ┌────┬─────────────┬───────┬─────────┐
│ [IMG]   │ │ [IMG]   │        │ Foto│ Nome       │ Preço │ Estoque │
│ Produto │ │ Produto │        ├────┼─────────────┼───────┼─────────┤
│ A       │ │ B       │        │[IMG]│ Camiseta   │ R$ 50 │ 150 ✓   │
│ R$ 50   │ │ R$ 80   │        │[IMG]│ Calça      │ R$ 80 │ 5 ⚠️    │
│ 150 ✓   │ │ 5 ⚠️    │        │[IMG]│ Boné       │ R$ 35 │ 0 ✗     │
└─────────┘ └─────────┘        └────┴─────────────┴───────┴─────────┘
```

---

### 2.2 Detalhes do Produto

**Nome:** Detalhes do Produto  
**Rota:** `/estoque/produtos/:id`  
**Objetivo:** Visualizar informações completas de um produto específico

**Componentes Principais:**
- Breadcrumb navegação
- Header com nome do produto e SKU
- Badge de status (ativo/inativo, destaque)
- Abas de navegação: Geral | Preços | Estoque | Variações | Fotos | Movimentações
- Galeria de fotos (principal + miniaturas)
- Card de informações básicas
- Card de variações (tabela)
- Gráfico de movimentação (últimos 30 dias)
- Histórico de alterações
- Sidebar com ações rápidas

**Ações Disponíveis:**
- [ ] Editar produto
- [ ] Duplicar produto
- [ ] Ativar/Desativar produto
- [ ] Adicionar variação
- [ ] Ajustar estoque
- [ ] Imprimir etiqueta
- [ ] Sincronizar com loja
- [ ] Excluir produto
- [ ] Ver histórico completo

**Permissões Necessárias:**
- `estoque.produtos.visualizar` - Acesso à tela
- `estoque.produtos.editar` - Botões de edição
- `estoque.produtos.excluir` - Excluir produto

---

### 2.3 Cadastro de Produto

**Nome:** Cadastro de Produto  
**Rota:** `/estoque/produtos/novo`  
**Objetivo:** Criar novo produto no sistema

**Componentes Principais:**
- Progresso do cadastro (stepper)
- Formulário multi-etapas ou abas
- Preview ao vivo do produto
- Validações em tempo real
- Upload de fotos múltiplas

**Ações Disponíveis:**
- [ ] Salvar rascunho
- [ ] Avançar etapa
- [ ] Voltar etapa
- [ ] Salvar e criar novo
- [ ] Salvar e visualizar
- [ ] Cancelar

**Permissões Necessárias:**
- `estoque.produtos.criar`

---

### 2.4 Edição de Produto

**Nome:** Editar Produto  
**Rota:** `/estoque/produtos/:id/editar`  
**Objetivo:** Modificar informações de produto existente

**Componentes Principais:**
- Mesma estrutura do cadastro
- Indicador de campos alterados
- Comparação com versão anterior
- Aviso de impacto em vendas/estoque

**Ações Disponíveis:**
- [ ] Salvar alterações
- [ ] Descartar alterações
- [ ] Ver histórico de versões
- [ ] Restaurar versão anterior

**Permissões Necessárias:**
- `estoque.produtos.editar`

---

### 2.5 Movimentações de Estoque

**Nome:** Movimentações de Estoque  
**Rota:** `/estoque/movimentacoes`  
**Objetivo:** Registrar e visualizar entradas e saídas de estoque

**Componentes Principais:**
- Filtros por tipo (entrada/saída/todos)
- Filtro por período
- Filtro por produto
- Tabela de movimentações
- Resumo de totais (entradas vs saídas)
- Botões de nova movimentação

**Ações Disponíveis:**
- [ ] Nova entrada de estoque
- [ ] Nova saída de estoque
- [ ] Filtrar por tipo
- [ ] Filtrar por data
- [ ] Exportar relatório
- [ ] Visualizar detalhes da movimentação
- [ ] Cancelar movimentação (se permitido)

**Permissões Necessárias:**
- `estoque.movimentacoes.visualizar`
- `estoque.movimentacoes.entrada` - Registrar entrada
- `estoque.movimentacoes.saida` - Registrar saída

---

### 2.6 Inventário Físico

**Nome:** Inventário Físico  
**Rota:** `/estoque/inventario`  
**Objetivo:** Realizar contagem física e ajustar estoque do sistema

**Componentes Principais:**
- Lista de produtos para inventariar
- Campo de quantidade contada
- Diferença calculada automaticamente
- Scanner de código de barras integrado
- Progresso do inventário
- Resumo de ajustes

**Ações Disponíveis:**
- [ ] Iniciar novo inventário
- [ ] Continuar inventário salvo
- [ ] Registrar contagem
- [ ] Aplicar ajustes
- [ ] Exportar planilha de contagem
- [ ] Importar planilha preenchida

**Permissões Necessárias:**
- `estoque.inventario.realizar`

---

### 2.7 Categorias de Produtos

**Nome:** Categorias de Produtos  
**Rota:** `/estoque/categorias`  
**Objetivo:** Gerenciar hierarquia de categorias dos produtos

**Componentes Principais:**
- Árvore hierárquica de categorias
- Drag & drop para reordenação
- Contador de produtos por categoria
- Ícones e cores de categoria

**Ações Disponíveis:**
- [ ] Criar categoria
- [ ] Editar categoria
- [ ] Excluir categoria
- [ ] Reordenar categorias
- [ ] Mover produtos entre categorias

**Permissões Necessárias:**
- `estoque.categorias.gerenciar`

---

### 2.8 Etiquetas para Impressão

**Nome:** Impressão de Etiquetas  
**Rota:** `/estoque/etiquetas`  
**Objetivo:** Configurar e imprimir etiquetas de produtos

**Componentes Principais:**
- Seleção de produtos (busca ou lista)
- Preview da etiqueta
- Configuração de layout (tamanho, colunas)
- Informações a incluir (nome, preço, código, QR)
- Configuração de impressora

**Ações Disponíveis:**
- [ ] Adicionar produtos à fila
- [ ] Remover da fila
- [ ] Configurar layout
- [ ] Visualizar preview
- [ ] Imprimir
- [ ] Exportar PDF
- [ ] Salvar template

**Permissões Necessárias:**
- `estoque.etiquetas.imprimir`

---

### 2.9 Produtos com Estoque Baixo

**Nome:** Estoque Baixo  
**Rota:** `/estoque/alertas/baixo-estoque`  
**Objetivo:** Alertar e gerenciar produtos abaixo do estoque mínimo

**Componentes Principais:**
- Contador de produtos em alerta
- Filtros por gravidade (crítico/alerta)
- Tabela com estoque atual vs mínimo
- Sugestão de compra (quantidade sugerida)
- Botão rápido para pedido de compra

**Ações Disponíveis:**
- [ ] Criar pedido de compra
- [ ] Ajustar estoque mínimo em lote
- [ ] Exportar lista
- [ ] Visualizar produto

**Permissões Necessárias:**
- `estoque.alertas.visualizar`
- `compras.pedidos.criar` - Para criar pedidos

---

### 2.10 Variações de Produtos

**Nome:** Gerenciar Variações  
**Rota:** `/estoque/variacoes`  
**Objetivo:** Configurar atributos de variação (tamanho, cor, etc.)

**Componentes Principais:**
- Lista de tipos de variação
- Valores possíveis por variação
- Preview de combinações
- Produtos usando cada variação

**Ações Disponíveis:**
- [ ] Criar tipo de variação
- [ ] Adicionar valores
- [ ] Editar variação
- [ ] Excluir variação (se não em uso)

**Permissões Necessárias:**
- `estoque.variacoes.gerenciar`

---

### 2.11 Dashboard de Estoque

**Nome:** Dashboard de Estoque  
**Rota:** `/estoque/dashboard`  
**Objetivo:** Visão geral e métricas do estoque

**Componentes Principais:**
- Cards de KPI (total produtos, valor em estoque, estoque baixo)
- Gráfico de movimentação (últimos 30 dias)
- Top produtos em estoque
- Top produtos mais vendidos
- Alertas e notificações
- Acesso rápido às principais funções

**Ações Disponíveis:**
- [ ] Ver detalhes de métricas
- [ ] Exportar relatórios
- [ ] Navegar para funcionalidades

**Permissões Necessárias:**
- `estoque.dashboard.visualizar`

---

## 3. Formulários

### 3.1 Formulário: Cadastro de Produto

**Nome:** Cadastro de Produto  
**Localização:** Tela `/estoque/produtos/novo`  
**Estrutura:** Multi-aba ou stepper

#### Aba 1: Informações Básicas

| Campo | Tipo | Obrigatório | Validações | Observações |
|-------|------|-------------|------------|-------------|
| Nome do Produto | Texto | Sim | Mínimo 3 caracteres | |
| SKU | Texto | Sim | Único, alfanumérico | Gerado automaticamente |
| Código de Barras | Texto | Não | EAN-13 válido | Scanner integrado |
| Código Interno | Texto | Não | Único | Para uso interno |
| Categoria | Select | Sim | | Hierárquico |
| Marca | Select/Texto | Não | | Autocomplete |
| Unidade de Medida | Select | Sim | | Peça, kg, metro, etc |
| Peso (kg) | Número | Não | > 0 | Para frete |
| Dimensões | Grupo | Não | | Altura, Largura, Comprimento |
| Descrição Curta | Textarea | Não | Máx. 255 caracteres | Para listagens |
| Descrição Completa | Rich Text | Não | | HTML permitido |
| Palavras-chave | Tags | Não | | Para SEO |

#### Aba 2: Preços

| Campo | Tipo | Obrigatório | Validações | Observações |
|-------|------|-------------|------------|-------------|
| Preço de Custo | Moeda | Sim | ≥ 0 | |
| Preço de Venda | Moeda | Sim | > 0 | |
| Preço Promocional | Moeda | Não | < Preço de Venda | |
| Margem de Lucro | Porcentagem | Calculado | | Automático |
| Markup | Número | Calculado | | Automático |
| Preço Atacado | Moeda | Não | < Preço Venda | |
| Qtd. Mínima Atacado | Número | Não | > 1 | |
| Permitir Desconto | Checkbox | Não | | |
| Desconto Máximo | Porcentagem | Não | 0-100% | |

#### Aba 3: Estoque

| Campo | Tipo | Obrigatório | Validações | Observações |
|-------|------|-------------|------------|-------------|
| Controlar Estoque | Checkbox | Não | Default: true | |
| Quantidade Inicial | Número | Condicional | ≥ 0 | Se controlar estoque |
| Estoque Mínimo | Número | Não | ≥ 0 | Alerta de baixo estoque |
| Estoque Máximo | Número | Não | ≥ Estoque Mínimo | |
| Localização | Texto | Não | | Prateleira, corredor |
| Fornecedor Padrão | Select | Não | | Vincular fornecedor |
| Código Fornecedor | Texto | Não | | SKU do fornecedor |
| Tempo de Reposição | Número | Não | ≥ 0 | Em dias |

#### Aba 4: Variações

| Campo | Tipo | Obrigatório | Validações | Observações |
|-------|------|-------------|------------|-------------|
| Possui Variações | Checkbox | Não | Default: false | |
| Tipos de Variação | Multi-select | Condicional | | Tamanho, Cor, etc |
| Gerar Combinações | Botão | | | Auto-gerar todas |
| Tabela de Variações | Tabela editável | Condicional | | SKU, Preço, Estoque |

**Estrutura da tabela de variações:**
```
| Variação      | SKU Variação | Preço  | Estoque | Código Barras | Ações |
|---------------|--------------|--------|---------|---------------|-------|
| P - Preto     | CAM-P-PRE    | R$ 50  | 50      | 789123...     | [🗑️] |
| P - Branco    | CAM-P-BRA    | R$ 50  | 30      | 789123...     | [🗑️] |
| M - Preto     | CAM-M-PRE    | R$ 50  | 45      | 789123...     | [🗑️] |
```

#### Aba 5: Fotos

| Campo | Tipo | Obrigatório | Validações | Observações |
|-------|------|-------------|------------|-------------|
| Foto Principal | Upload | Recomendado | JPG, PNG, WebP, Max 5MB | |
| Galeria de Fotos | Upload Múltiplo | Não | Max 10 fotos | |
| Ordenar Fotos | Drag & Drop | Não | | Reordenar galeria |
| Legenda da Foto | Texto | Não | | Por foto |
| URL do Vídeo | URL | Não | YouTube/Vimeo | |

#### Aba 6: Informações Fiscais

| Campo | Tipo | Obrigatório | Validações | Observações |
|-------|------|-------------|------------|-------------|
| NCM | Texto | Não | 8 dígitos | Código fiscal |
| CEST | Texto | Não | 7 dígitos | |
| CFOP | Texto | Não | 4 dígitos | |
| Origem | Select | Não | | Nacional, Importado |
| CST/CSOSN | Select | Não | | Tributação |
| ICMS (%) | Número | Não | 0-100 | |
| IPI (%) | Número | Não | 0-100 | |
| PIS (%) | Número | Não | 0-100 | |
| COFINS (%) | Número | Não | 0-100 | |

#### Ações do Formulário
- **Salvar Rascunho:** Salva sem validações obrigatórias
- **Salvar:** Valida e salva produto
- **Salvar e Criar Novo:** Salva e reseta formulário
- **Preview:** Abre preview do produto na loja
- **Cancelar:** Descarta alterações

#### Regras de Negócio
1. SKU deve ser único em toda a base
2. Preço de venda deve ser maior que preço de custo (alerta se não for)
3. Se tiver variações, estoque é soma das variações
4. Código de barras deve ser válido (EAN-13)
5. NCM deve existir na tabela oficial
6. Produto inativo não aparece na loja
7. Alteração de preço gera histórico

---

### 3.2 Formulário: Movimentação de Entrada

**Nome:** Entrada de Estoque  
**Localização:** Modal ou tela `/estoque/movimentacoes/entrada`  
**Objetivo:** Registrar entrada de produtos no estoque

| Campo | Tipo | Obrigatório | Validações | Observações |
|-------|------|-------------|------------|-------------|
| Tipo de Entrada | Select | Sim | | Compra, Devolução, Ajuste, Produção |
| Número da NF | Texto | Condicional | | Se tipo = Compra |
| Fornecedor | Select | Condicional | | Se tipo = Compra |
| Data da Entrada | Date | Sim | ≤ Hoje | |
| Produto | Select/Busca | Sim | | Autocomplete com foto |
| Variação | Select | Condicional | | Se produto tiver variações |
| Quantidade | Número | Sim | > 0 | |
| Custo Unitário | Moeda | Condicional | ≥ 0 | Atualiza custo médio |
| Observação | Textarea | Não | | Motivo da entrada |
| Anexos | Upload | Não | | NF, fotos |

#### Tabela de Itens (Multi-produto)
```
| Produto        | Variação | Qtd | Custo Unit. | Total    | Ações |
|----------------|----------|-----|-------------|----------|-------|
| Camiseta Polo  | M-Preto  | 10  | R$ 25,00    | R$ 250,00| [🗑️] |
| Camiseta Polo  | G-Preto  | 15  | R$ 25,00    | R$ 375,00| [🗑️] |
| Calça Jeans    | 42-Azul  | 5   | R$ 45,00    | R$ 225,00| [🗑️] |
|----------------|----------|-----|-------------|----------|-------|
| TOTAL          |          | 30  |             | R$ 850,00|       |
```

#### Ações
- [ ] Adicionar item
- [ ] Remover item
- [ ] Duplicar item
- [ ] Confirmar entrada
- [ ] Salvar rascunho
- [ ] Cancelar

#### Regras de Negócio
1. Atualiza estoque imediatamente
2. Se tipo = Compra, gera contas a pagar no financeiro
3. Custo médio é recalculado automaticamente
4. Gera registro no histórico de movimentações
5. Notifica se custo for diferente do cadastrado

---

### 3.3 Formulário: Movimentação de Saída

**Nome:** Saída de Estoque  
**Localização:** Modal ou tela `/estoque/movimentacoes/saida`  
**Objetivo:** Registrar saída de produtos do estoque

| Campo | Tipo | Obrigatório | Validações | Observações |
|-------|------|-------------|------------|-------------|
| Tipo de Saída | Select | Sim | | Venda, Ajuste, Perda, Doação |
| Data da Saída | Date | Sim | ≤ Hoje | |
| Produto | Select/Busca | Sim | | Apenas com estoque |
| Variação | Select | Condicional | | Se produto tiver variações |
| Quantidade | Número | Sim | > 0 e ≤ Estoque | Valida estoque disponível |
| Custo Unitário | Moeda | Calculado | | Custo médio atual |
| Valor Total | Moeda | Calculado | | Qtd × Custo |
| Motivo | Textarea | Sim | | Justificativa |
| Responsável | Select | Sim | | Usuário |

#### Regras de Negócio
1. Não permite saída maior que estoque disponível
2. Se tipo = Perda, marca como perda no financeiro
3. Se tipo = Doação, não gera receita
4. Gera registro no histórico
5. Notifica se estoque ficar abaixo do mínimo

---

### 3.4 Formulário: Criar Categoria

**Nome:** Cadastro de Categoria  
**Localização:** Modal ou tela `/estoque/categorias/nova`  
**Objetivo:** Criar nova categoria de produtos

| Campo | Tipo | Obrigatório | Validações | Observações |
|-------|------|-------------|------------|-------------|
| Nome | Texto | Sim | Mínimo 2 caracteres, único | |
| Categoria Pai | Select | Não | | Hierarquia |
| Descrição | Textarea | Não | | |
| Ícone | Icon Picker | Não | | Biblioteca de ícones |
| Cor | Color Picker | Não | | Hex color |
| Foto | Upload | Não | | Para banner da categoria |
| SEO - Title | Texto | Não | | Meta tag |
| SEO - Description | Textarea | Não | | Meta tag |
| SEO - URL Amigável | Texto | Não | | Slug |
| Ativo | Checkbox | Não | Default: true | |

#### Regras de Negócio
1. Nome deve ser único
2. Máximo de 3 níveis hierárquicos
3. Não pode ser subcategoria de si mesma
4. Exclusão só permitida se não tiver produtos

---

### 3.5 Formulário: Criar Variação

**Nome:** Cadastro de Tipo de Variação  
**Localização:** Modal `/estoque/variacoes/nova`  
**Objetivo:** Definir novos atributos de variação

| Campo | Tipo | Obrigatório | Validações | Observações |
|-------|------|-------------|------------|-------------|
| Nome do Tipo | Texto | Sim | Único | Ex: Tamanho, Cor |
| Valores | Tags/Lista | Sim | Mínimo 1 | Ex: P, M, G |
| Cor/Preview | - | Não | | Para variação de cor |
| Ordem de Exibição | Número | Não | | Ordem no seletor |

#### Valores de Variação
```
| Valor    | Cor       | Ordem | Ações |
|----------|-----------|-------|-------|
| Preto    | ■ #000000 | 1     | [🗑️]  |
| Branco   | ■ #FFFFFF | 2     | [🗑️]  |
| Vermelho | ■ #FF0000 | 3     | [🗑️]  |
| Azul     | ■ #0000FF | 4     | [🗑️]  |
```

---

### 3.6 Formulário: Ajuste de Inventário

**Nome:** Ajuste de Inventário  
**Localização:** Modal ou tela `/estoque/inventario/ajuste`  
**Objetivo:** Corrigir diferenças entre estoque físico e sistema

| Campo | Tipo | Obrigatório | Validações | Observações |
|-------|------|-------------|------------|-------------|
| Produto | Select/Busca | Sim | | |
| Variação | Select | Condicional | | |
| Estoque Atual | Número | Calculado | | Somente leitura |
| Quantidade Contada | Número | Sim | ≥ 0 | |
| Diferença | Número | Calculado | | Contada - Atual |
| Custo Médio | Moeda | Calculado | | |
| Valor do Ajuste | Moeda | Calculado | | Diferença × Custo |
| Motivo | Select | Sim | | Quebra, Perda, Ajuste, Outro |
| Observação | Textarea | Não | | Detalhes |
| Responsável | Select | Sim | | |

#### Regras de Negócio
1. Gera movimentação de entrada ou saída conforme diferença
2. Diferença positiva = entrada (ajuste positivo)
3. Diferença negativa = saída (ajuste negativo)
4. Valor do ajuste impacta financeiro
5. Requer aprovação se valor > limite configurado

---

### 3.7 Formulário: Configurar Etiqueta

**Nome:** Configuração de Etiqueta  
**Localização:** Modal ou tela `/estoque/etiquetas/configurar`  
**Objetivo:** Definir layout e conteúdo das etiquetas

| Campo | Tipo | Obrigatório | Validações | Observações |
|-------|------|-------------|------------|-------------|
| Nome do Template | Texto | Sim | | Identificação |
| Tamanho do Papel | Select | Sim | | A4, A5, Custom |
| Dimensão da Etiqueta | Grupo | Sim | Largura × Altura | Em mm |
| Colunas por Página | Número | Sim | ≥ 1 | |
| Linhas por Página | Número | Sim | ≥ 1 | |
| Margens | Grupo | Sim | | Superior, Inferior, Esquerda, Direita |
| Campos a Exibir | Checkboxes | Sim | | Nome, Preço, Código, QR, etc |
| Fonte | Select | Sim | | Tipo e tamanho |
| Incluir Logo | Checkbox | Não | | Logo da empresa |
| Incluir QR Code | Checkbox | Não | | Link para produto |
| Incluir Código de Barras | Checkbox | Não | | EAN |

#### Preview ao Vivo
```
┌─────────────────────────┐
│  [LOGO]                 │
│  CAMISETA POLO          │
│  R$ 59,90               │
│                         │
│  ||||||||||||||||||||   │
│  7891234567890          │
│              [QR]       │
└─────────────────────────┘
```

---

### 3.8 Formulário: Importação em Massa

**Nome:** Importar Produtos  
**Localização:** Tela `/estoque/produtos/importar`  
**Objetivo:** Importar produtos via arquivo

| Campo | Tipo | Obrigatório | Validações | Observações |
|-------|------|-------------|------------|-------------|
| Arquivo | Upload | Sim | .xlsx, .csv, max 10MB | |
| Modelo de Importação | Download | - | | Template para preenchimento |
| Primeira linha é cabeçalho | Checkbox | Não | Default: true | |
| Mapeamento de Colunas | Tabela | Sim | | Vincular colunas do arquivo |
| Modo de Importação | Radio | Sim | | Adicionar novos / Atualizar existentes / Ambos |
| Criar categorias inexistentes | Checkbox | Não | | |
| Ignorar erros | Checkbox | Não | | Continuar se houver erro |

#### Mapeamento de Colunas
```
| Coluna no Arquivo | Campo do Sistema | Valor de Exemplo | Status |
|-------------------|------------------|------------------|--------|
| A - Nome          | Nome do Produto  | Camiseta Polo    | ✓ OK   |
| B - SKU           | SKU              | CAM-001          | ✓ OK   |
| C - Preco         | Preço de Venda   | 59.90            | ⚠️ Ajustar formato |
```

#### Ações
- [ ] Fazer upload
- [ ] Validar arquivo
- [ ] Visualizar preview
- [ ] Importar
- [ ] Baixar relatório de erros

---

## 4. Modais/Dialogs

### 4.1 Modal: Adicionar Foto do Produto

**Nome:** Upload de Fotos  
**Gatilho:** Botão "Adicionar Foto" nas telas de produto  
**Tamanho:** Médio (600px)

**Conteúdo:**
- Área de drag & drop
- Botão "Selecionar arquivo"
- Preview da imagem selecionada
- Campo "Legenda" (opcional)
- Checkbox "Definir como principal"
- Indicador de progresso do upload
- Requisitos: JPG, PNG, WebP, máx 5MB

**Ações:**
- [ ] Selecionar arquivo
- [ ] Tirar foto (se dispositivo com câmera)
- [ ] Confirmar upload
- [ ] Cancelar

---

### 4.2 Modal: Selecionar Variações

**Nome:** Seleção de Variações  
**Gatilho:** Ao adicionar produto com variações ao carrinho/PDV  
**Tamanho:** Médio (500px)

**Conteúdo:**
- Nome do produto
- Preço base
- Seletores de variação:
  - **Tamanho:** [P] [M] [G] [GG] (botões)
  - **Cor:** [● Preto] [● Branco] [● Azul] (botões com cor)
- Preview da variação selecionada
- Quantidade
- Estoque disponível da variação
- Preço da variação (se diferente)

**Ações:**
- [ ] Confirmar seleção
- [ ] Cancelar

---

### 4.3 Modal: Confirmação de Exclusão

**Nome:** Confirmar Exclusão  
**Gatilho:** Botão excluir em qualquer item  
**Tamanho:** Pequeno (400px)

**Conteúdo:**
- Ícone de aviso (⚠️)
- Título: "Tem certeza?"
- Mensagem: "O produto [Nome] será excluído permanentemente."
- Lista de impactos:
  - X unidades em estoque serão removidas
  - Produto será removido da loja virtual
  - Histórico de vendas será mantido

**Ações:**
- [ ] Excluir (vermelho, destrutivo)
- [ ] Cancelar

**Variantes:**
- Produto com estoque: Aviso extra sobre estoque
- Produto com vendas: Opção "Inativar em vez de excluir"
- Exclusão em massa: Contador de itens

---

### 4.4 Modal: Visualização Rápida do Produto

**Nome:** Preview do Produto  
**Gatilho:** Ícone de olho na lista de produtos ou hover  
**Tamanho:** Grande (800px)

**Conteúdo:**
- Carrossel de fotos
- Nome e SKU
- Preço atual
- Estoque disponível
- Categoria
- Botões de ação rápida:
  - Editar
  - Duplicar
  - Imprimir etiqueta
  - Ver na loja

**Ações:**
- [ ] Ver detalhes completos
- [ ] Editar
- [ ] Fechar

---

### 4.5 Modal: Adicionar ao Catálogo da Loja

**Nome:** Sincronizar com Loja Virtual  
**Gatilho:** Botão "Publicar na Loja"  
**Tamanho:** Médio (600px)

**Conteúdo:**
- Preview do produto
- Status atual: [Não publicado / Publicado / Atualização pendente]
- Opções de publicação:
  - Categorias da loja virtual
  - Destacar na home
  - Disponibilidade (imediatamente / agendar)
  - Visibilidade (público / oculto / somente link)
- Checklist de requisitos:
  - ✓ Foto principal
  - ✓ Nome preenchido
  - ✓ Preço definido
  - ✓ Estoque > 0

**Ações:**
- [ ] Publicar agora
- [ ] Agendar publicação
- [ ] Salvar como rascunho
- [ ] Cancelar

---

### 4.6 Modal: Ajuste Rápido de Estoque

**Nome:** Ajuste Rápido  
**Gatilho:** Botão "Ajustar" no card de produto ou estoque baixo  
**Tamanho:** Pequeno (450px)

**Conteúdo:**
- Nome do produto e variação
- Estoque atual (destaque)
- Campo "Nova quantidade"
- Campo "Motivo do ajuste" (select)
- Campo "Observação"
- Resumo do impacto: "+X unidades" ou "-X unidades"

**Ações:**
- [ ] Confirmar ajuste
- [ ] Cancelar

---

### 4.7 Modal: Gerar Etiquetas

**Nome:** Configurar Impressão de Etiquetas  
**Gatilho:** Botão "Imprimir Etiquetas"  
**Tamanho:** Grande (900px)

**Conteúdo:**
- **Aba 1 - Seleção:**
  - Lista de produtos selecionados
  - Quantidade por produto
  - Busca para adicionar mais
- **Aba 2 - Layout:**
  - Select de template salvo
  - Configurações rápidas de tamanho
  - Preview em tempo real
- **Aba 3 - Impressão:**
  - Seleção de impressora
  - Opções de PDF

**Ações:**
- [ ] Adicionar à fila
- [ ] Remover da fila
- [ ] Imprimir
- [ ] Exportar PDF
- [ ] Fechar

---

### 4.8 Modal: Vincular Fornecedor

**Nome:** Vincular Fornecedor ao Produto  
**Gatilho:** Botão "Adicionar Fornecedor"  
**Tamanho:** Médio (600px)

**Conteúdo:**
- Busca de fornecedores cadastrados
- Ou botão "Novo Fornecedor"
- Campos do vínculo:
  - Código do produto no fornecedor
  - Preço de custo negociado
  - Prazo de entrega
  - Quantidade mínima de pedido
  - Observações
- Toggle "Fornecedor padrão"

**Ações:**
- [ ] Salvar vínculo
- [ ] Cancelar

---

### 4.9 Modal: Histórico de Movimentações

**Nome:** Histórico do Produto  
**Gatilho:** Botão "Ver Histórico"  
**Tamanho:** Grande (800px)

**Conteúdo:**
- Filtros por tipo e período
- Timeline de eventos:
```
15/03/2024 14:30  Entrada          +50 un   Estoque: 150  João
14/03/2024 09:15  Venda            -2 un    Estoque: 100  Sistema
13/03/2024 16:45  Ajuste           -5 un    Estoque: 102  Maria
12/03/2024 11:00  Preço alterado   R$50→R$55            Admin
```
- Gráfico de evolução do estoque

**Ações:**
- [ ] Exportar histórico
- [ ] Fechar

---

### 4.10 Modal: Duplicar Produto

**Nome:** Duplicar Produto  
**Gatilho:** Botão "Duplicar"  
**Tamanho:** Médio (600px)

**Conteúdo:**
- Nome do produto original
- Campo "Novo nome" (pré-preenchido: "[Original] - Cópia")
- Campo "Novo SKU" (gerado automaticamente)
- Opções de cópia (checkboxes):
  - [x] Copiar fotos
  - [x] Copiar variações
  - [x] Copiar preços
  - [ ] Copiar estoque (zera por padrão)
  - [x] Copiar descrição
  - [ ] Copiar vínculos

**Ações:**
- [ ] Criar cópia
- [ ] Cancelar

---

### 4.11 Modal: Busca por Código de Barras

**Nome:** Leitor de Código de Barras  
**Gatilho:** Botão de scanner ou atalho de teclado  
**Tamanho:** Pequeno (400px)

**Conteúdo:**
- Input de código de barras (focado automaticamente)
- Área para câmera (se disponível)
- Lista de últimos códigos lidos
- Som de beep ao ler

**Ações:**
- [ ] Buscar
- [ ] Ler com câmera
- [ ] Fechar

---

### 4.12 Modal: Configurar Alertas de Estoque

**Nome:** Configuração de Alertas  
**Gatilho:** Menu de configurações do módulo  
**Tamanho:** Médio (600px)

**Conteúdo:**
- Alerta de estoque baixo:
  - Percentual do estoque mínimo (default: 100%)
  - Frequência de notificação
  - Destinatários
- Alerta de estoque zerado:
  - Notificar imediatamente
  - Destinatários
- Alerta de vencimento:
  - Dias antes do vencimento
- Configurações de notificação:
  - Email
  - Notificação no sistema
  - WhatsApp

**Ações:**
- [ ] Salvar configurações
- [ ] Restaurar padrões
- [ ] Cancelar

---

## 5. Componentes Reutilizáveis Específicos

### 5.1 Card de Produto

**Nome:** ProductCard  
**Uso:** Listagem em grade  
**Props:**
```typescript
interface ProductCardProps {
  id: string;
  name: string;
  sku: string;
  price: number;
  comparePrice?: number;
  image?: string;
  stock: number;
  stockMin: number;
  stockMax?: number;
  hasVariations: boolean;
  isActive: boolean;
  badges?: Badge[];
  onEdit?: () => void;
  onDelete?: () => void;
  onDuplicate?: () => void;
  onQuickView?: () => void;
  onPrintLabel?: () => void;
  selectionMode?: boolean;
  selected?: boolean;
  onSelect?: () => void;
}
```

**Layout:**
```
┌─────────────────────────────┐
│  [checkbox]  [actions ▼]    │
│                             │
│       ┌─────────┐           │
│       │         │           │
│       │  FOTO   │           │
│       │         │           │
│       └─────────┘           │
│                             │
│  Nome do Produto            │
│  SKU: ABC-123               │
│                             │
│  R$ 99,90                   │
│  ~~R$ 129,90~~              │
│                             │
│  [●] [●] [●] +2 cores       │
│                             │
│  Estoque: 45 ✓              │
│  [badge: Promoção]          │
└─────────────────────────────┘
```

**Estados:**
- Default: Hover com sombra
- Selecionado: Borda azul, checkbox marcado
- Inativo: Opacidade reduzida, badge "Inativo"
- Estoque baixo: Badge laranja/vermelho
- Sem estoque: Badge vermelho

---

### 5.2 Galeria de Imagens

**Nome:** ProductImageGallery  
**Uso:** Detalhes do produto, cadastro  
**Props:**
```typescript
interface ProductImageGalleryProps {
  images: ProductImage[];
  mainImageIndex?: number;
  onImageChange?: (index: number) => void;
  onImageUpload?: (files: File[]) => void;
  onImageDelete?: (index: number) => void;
  onImageReorder?: (newOrder: ProductImage[]) => void;
  editable?: boolean;
  maxImages?: number;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  zoomEnabled?: boolean;
}

interface ProductImage {
  id: string;
  url: string;
  thumbnailUrl: string;
  alt: string;
  isMain: boolean;
  order: number;
}
```

**Funcionalidades:**
- Zoom na imagem principal (hover ou click)
- Thumbnails clicáveis
- Navegação por setas (quando muitas fotos)
- Drag & drop para reordenar (modo edição)
- Upload de novas fotos
- Definir como principal
- Excluir foto

---

### 5.3 Seletor de Variações

**Nome:** VariationSelector  
**Uso:** Produto com variações  
**Props:**
```typescript
interface VariationSelectorProps {
  variations: VariationType[];
  selectedVariations: Record<string, string>;
  onVariationChange: (type: string, value: string) => void;
  stockByVariation?: Record<string, number>;
  priceByVariation?: Record<string, number>;
  disabled?: boolean;
}

interface VariationType {
  name: string;
  values: VariationValue[];
}

interface VariationValue {
  id: string;
  label: string;
  color?: string;
  image?: string;
  disabled?: boolean;
}
```

**Layout:**
```
Tamanho:  [PP] [P] [M] [G] [GG] [XG]
          Selecionado: [M] (estoque: 15)

Cor:      [● Preto] [● Branco] [● Azul]
          Selecionado: [● Azul]

Preço:    R$ 59,90
Estoque:  15 unidades disponíveis
```

**Comportamentos:**
- Variação sem estoque: Botão desabilitado
- Combinação inválida: Não selecionável
- Seleção de cor: Botão com cor de fundo
- Seleção de tamanho: Botão arredondado

---

### 5.4 Indicador de Estoque

**Nome:** StockIndicator  
**Uso:** Cards, tabelas, detalhes  
**Props:**
```typescript
interface StockIndicatorProps {
  current: number;
  minimum: number;
  maximum?: number;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'badge' | 'bar' | 'text';
}
```

**Cores:**
- Verde: Estoque ≥ mínimo + 20%
- Amarelo: Estoque entre mínimo e mínimo + 20%
- Laranja: Estoque ≤ mínimo e > 0
- Vermelho: Estoque = 0

**Layouts:**
```
Badge:    [150 em estoque ✓]  |  [5 estoque baixo ⚠️]  |  [Sem estoque ✗]
Bar:      [████████░░] 150/200  |  [██░░░░░░░░] 5/50  |  [░░░░░░░░░░] 0/50
Text:     150 disponíveis       |  Estoque baixo!      |  Esgotado
```

---

### 5.5 Badge de Status

**Nome:** ProductBadge  
**Uso:** Cards, listas  
**Props:**
```typescript
interface ProductBadgeProps {
  type: 'new' | 'sale' | 'bestseller' | 'low-stock' | 'out-of-stock' | 'inactive' | 'featured';
  text?: string;
  size?: 'sm' | 'md';
}
```

**Tipos:**
```
[Novo]           - Verde
[Promoção]       - Vermelho  
[Mais Vendido]   - Laranja
[Estoque Baixo]  - Amarelo
[Esgotado]       - Vermelho
[Inativo]        - Cinza
[Destaque]       - Roxo
```

---

### 5.6 Tabela de Movimentações

**Nome:** StockMovementTable  
**Uso:** Tela de movimentações, histórico  
**Props:**
```typescript
interface StockMovementTableProps {
  movements: StockMovement[];
  onViewDetails?: (id: string) => void;
  onCancel?: (id: string) => void;
  showProductInfo?: boolean;
  pagination?: boolean;
  filters?: FilterConfig;
}

interface StockMovement {
  id: string;
  date: Date;
  type: 'in' | 'out' | 'adjustment';
  subtype: string;
  product: ProductSummary;
  quantity: number;
  unitCost?: number;
  totalValue?: number;
  user: string;
  notes?: string;
  canCancel: boolean;
}
```

**Colunas:**
```
| Data       | Tipo      | Produto      | Qtd  | Valor    | Usuário   | Ações |
|------------|-----------|--------------|------|----------|-----------|-------|
| 15/03 14h  | Entrada ↑ | Camiseta     | +50  | R$ 1.250 | João      | [👁️] [🗑️] |
| 14/03 09h  | Saída ↓   | Calça Jeans  | -2   | R$ 160   | Sistema   | [👁️]    |
```

**Funcionalidades:**
- Ícone de entrada/saída (verde/vermelho)
- Tooltip com detalhes
- Filtros por coluna
- Ordenação
- Seleção em massa

---

### 5.7 Leitor de Código de Barras

**Nome:** BarcodeScanner  
**Uso:** Busca rápida, PDV, inventário  
**Props:**
```typescript
interface BarcodeScannerProps {
  onScan: (barcode: string) => void;
  onError?: (error: string) => void;
  useCamera?: boolean;
  inputPlaceholder?: string;
  playSound?: boolean;
  autoFocus?: boolean;
}
```

**Layout:**
```
┌─────────────────────────────────┐
│  [📷] Buscar por código... [🔍] │
│                                 │
│  Últimas leituras:              │
│  • 7891234567890 - Camiseta     │
│  • 7899876543210 - Calça        │
└─────────────────────────────────┘
```

**Funcionalidades:**
- Input com foco automático
- Som de beep ao ler
- Integração com câmera (quagga2/zxing)
- Histórico de leituras
- Validação EAN-13

---

### 5.8 Tabela de Variações

**Nome:** VariationTable  
**Uso:** Cadastro/edição de produtos  
**Props:**
```typescript
interface VariationTableProps {
  variations: ProductVariation[];
  variationTypes: VariationType[];
  onAddVariation?: () => void;
  onEditVariation?: (id: string) => void;
  onDeleteVariation?: (id: string) => void;
  onUpdateField?: (id: string, field: string, value: any) => void;
  editable?: boolean;
}

interface ProductVariation {
  id: string;
  sku: string;
  barcode?: string;
  combination: Record<string, string>; // { size: 'M', color: 'Black' }
  price: number;
  cost?: number;
  stock: number;
  weight?: number;
  isActive: boolean;
}
```

**Layout:**
```
| Variação       | SKU      | Código Barras  | Preço   | Estoque | Status   | Ações |
|----------------|----------|----------------|---------|---------|----------|-------|
| M - Preto      | CAM-M-P  | 7891234567890  | R$ 50,00| 45      | ● Ativo  | [✏️][🗑️] |
| M - Branco     | CAM-M-B  | 7891234567891  | R$ 50,00| 12      | ⚠️ Baixo | [✏️][🗑️] |
| G - Preto      | CAM-G-P  | 7891234567892  | R$ 55,00| 0       | ✗ Inativo| [✏️][🗑️] |
```

**Funcionalidades:**
- Edição inline (double click)
- Expandir para mais campos
- Agrupar por tipo de variação
- Gerar SKUs automaticamente
- Validar duplicidades

---

### 5.9 Filtro Avançado de Produtos

**Nome:** ProductFilter  
**Uso:** Lista de produtos  
**Props:**
```typescript
interface ProductFilterProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
  categories: Category[];
  suppliers: Supplier[];
  savedFilters?: SavedFilter[];
}

interface FilterState {
  search: string;
  categories: string[];
  stockStatus: 'all' | 'ok' | 'low' | 'out';
  priceRange: { min?: number; max?: number };
  suppliers: string[];
  status: ('active' | 'inactive')[];
  hasVariations?: boolean;
  dateRange?: { from?: Date; to?: Date };
  tags: string[];
}
```

**Layout:**
```
┌────────────────────────────────────────────────────────┐
│ [🔍 Buscar...    ] [Categoria ▼] [Estoque ▼] [Mais ▼] │
│                                                        │
│ Filtros ativos: [Categoria: Roupas ✕] [Estoque: Baixo ✕] [Limpar tudo] │
└────────────────────────────────────────────────────────┘
```

---

### 5.10 Resumo de Estoque

**Nome:** StockSummary  
**Uso:** Dashboard, cabeçalho de relatórios  
**Props:**
```typescript
interface StockSummaryProps {
  totalProducts: number;
  totalStockValue: number;
  lowStockCount: number;
  outOfStockCount: number;
  comparisonPeriod?: 'day' | 'week' | 'month';
  previousValues?: {
    totalProducts: number;
    totalStockValue: number;
    lowStockCount: number;
    outOfStockCount: number;
  };
}
```

**Layout:**
```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   1.250      │ │  R$ 125.000  │ │     15       │ │      3       │
│  Produtos    │ │  Em Estoque  │ │ Estoque Baixo│ │  Esgotados   │
│  ↑ +12 (1%)  │ │  ↑ +5.2%     │ │  ↑ +3        │ │  → 0         │
└──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
```

---

## 6. Estados de UI

### 6.1 Empty States

#### Tela de Produtos - Sem produtos cadastrados
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    ┌─────────┐                              │
│                    │  📦    │  <- Ícone animado             │
│                    │   +    │                              │
│                    └─────────┘                              │
│                                                             │
│              Nenhum produto cadastrado                      │
│                                                             │
│    Comece cadastrando seu primeiro produto no sistema.      │
│    Você pode adicionar produtos manualmente ou importar     │
│    uma planilha com vários produtos de uma vez.             │
│                                                             │
│         [+ Cadastrar Produto]  [📥 Importar Planilha]       │
│                                                             │
│         💡 Dica: Use o modelo de importação para            │
│            facilitar o cadastro em massa.                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Busca sem resultados
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                     🔍                                      │
│                                                             │
│              Nenhum produto encontrado                      │
│                                                             │
│    Não encontramos produtos para "termo buscado".           │
│    Tente outros termos ou verifique a ortografia.           │
│                                                             │
│         [Limpar Filtros]  [Cadastrar Novo Produto]          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Filtros aplicados - Sem resultados
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                     🎯                                      │
│                                                             │
│     Nenhum produto corresponde aos filtros aplicados        │
│                                                             │
│    Filtros ativos:                                          │
│    • Categoria: Eletrônicos                                 │
│    • Preço: R$ 100 - R$ 500                                 │
│    • Estoque: Baixo                                         │
│                                                             │
│         [Limpar Todos os Filtros]                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Estoque Baixo - Sem alertas
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                     ✅                                      │
│                                                             │
│              Tudo certo com o estoque!                      │
│                                                             │
│    Todos os produtos estão com estoque adequado.            │
│    Nenhum produto abaixo do nível mínimo configurado.       │
│                                                             │
│         [Ver todos os produtos]                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### 6.2 Loading States

#### Tabela carregando
```
┌─────────────────────────────────────────────────────────────┐
│ Produtos                    [ ○○○ Carregando... ]           │
├─────────────────────────────────────────────────────────────┤
│ ┌────────┬────────────────┬───────────┬────────────────┐   │
│ │ ░░░░░░ │ ░░░░░░░░░░░░░░ │ ░░░░░░░░░ │ ░░░░░░░░░░░░░░ │   │
│ │ ░░░░░░ │ ░░░░░░░░░░░░░░ │ ░░░░░░░░░ │ ░░░░░░░░░░░░░░ │   │
│ │ ░░░░░░ │ ░░░░░░░░░░░░░░ │ ░░░░░░░░░ │ ░░░░░░░░░░░░░░ │   │
│ │ ░░░░░░ │ ░░░░░░░░░░░░░░ │ ░░░░░░░░░ │ ░░░░░░░░░░░░░░ │   │
│ │ ░░░░░░ │ ░░░░░░░░░░░░░░ │ ░░░░░░░░░ │ ░░░░░░░░░░░░░░ │   │
│ └────────┴────────────────┴───────────┴────────────────┘   │
│                                                             │
│            ○○○ Buscando produtos...                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Card carregando (skeleton)
```
┌─────────────────────────────┐
│  [░░░░░░░░░░░░]             │  <- Shimmer animation
│                             │
│       ┌─────────┐           │
│       │░░░░░░░░░│           │
│       │░░░░░░░░░│           │
│       │░░░░░░░░░│           │
│       └─────────┘           │
│                             │
│  ░░░░░░░░░░░░░░░            │
│  ░░░░░░░░                   │
│                             │
│  ░░░░░░░░░░                 │
│                             │
│  ░░░░░░░░░░░░░░░            │
└─────────────────────────────┘
```

#### Upload de imagem
```
┌─────────────────────────────┐
│                             │
│      ┌─────────┐            │
│      │ ░░░░░░░ │            │
│      │ ░ 42% ░ │            │  <- Progresso circular
│      │ ░░░░░░░ │            │
│      └─────────┘            │
│                             │
│   Fazendo upload da imagem  │
│   1.2 MB de 2.8 MB          │
│                             │
│   [Cancelar]                │
│                             │
└─────────────────────────────┘
```

#### Processamento em lote
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              Processando importação...                      │
│                                                             │
│   ████████████░░░░░░░░░░░░░░░░░  42%                       │
│                                                             │
│   Produtos importados: 42 de 100                            │
│   Tempo estimado: 15 segundos                               │
│                                                             │
│   Último processado: Camiseta Polo M - Preto                │
│                                                             │
│   ⚠️ 3 produtos com avisos (serão listados ao final)       │
│                                                             │
│   [Cancelar]                                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### 6.3 Error States

#### Erro de carregamento
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                     ⚠️                                      │
│                                                             │
│         Não foi possível carregar os produtos               │
│                                                             │
│    Ocorreu um erro ao buscar os dados do servidor.          │
│    Código do erro: ERR_500                                  │
│                                                             │
│         [Tentar Novamente]  [Contatar Suporte]              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Erro de validação no formulário
```
┌─────────────────────────────────────────────────────────────┐
│  Cadastrar Produto                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Nome do Produto *                                          │
│  [                                ]                         │
│   ⚠️ Campo obrigatório                                      │
│                                                             │
│  SKU *                                                      │
│  [CAM-001                       ]                         │
│   ✓ SKU disponível                                          │
│                                                             │
│  Preço de Venda *                                           │
│  [R$ -50,00                     ]                         │
│   ✗ Preço deve ser maior que zero                           │
│                                                             │
│         [Salvar]                                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Erro de conexão (offline)
```
┌─────────────────────────────────────────────────────────────┐
│  🌐 Sem conexão com a internet                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Você está offline. Algumas funcionalidades podem não       │
│  estar disponíveis.                                         │
│                                                             │
│  Alterações pendentes: 3                                    │
│                                                             │
│  [Sincronizar quando online]                                │
│                                                             │
│  💡 Seus dados serão salvos automaticamente quando a        │
│     conexão for restabelecida.                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Erro de permissão
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                     🚫                                      │
│                                                             │
│            Acesso não autorizado                            │
│                                                             │
│    Você não tem permissão para acessar esta funcionalidade. │
│    Entre em contato com o administrador do sistema.         │
│                                                             │
│    Permissão necessária: estoque.produtos.excluir           │
│                                                             │
│         [Voltar]  [Solicitar Acesso]                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### 6.4 Success States

#### Produto criado com sucesso
```
┌─────────────────────────────────────────────────────────────┐
│  ✅ Produto cadastrado com sucesso!                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  O produto "Camiseta Polo Masculina" foi criado com sucesso.│
│                                                             │
│  SKU gerado: CAM-POLO-001                                   │
│                                                             │
│  [Visualizar Produto]  [Cadastrar Outro]  [Ir para Lista]   │
│                                                             │
│  ☑️ Adicionar à loja virtual                               │
│  ☐ Imprimir etiqueta                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Movimentação registrada
```
┌─────────────────────────────────────────────────────────────┐
│  ✅ Entrada registrada!                                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Entrada de 50 unidades de "Camiseta Polo" registrada.      │
│  Estoque atual: 150 unidades                                │
│                                                             │
│  Novo custo médio: R$ 25,00                                 │
│                                                             │
│  [Registrar Outra Entrada]  [Ver Movimentações]             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Importação concluída
```
┌─────────────────────────────────────────────────────────────┐
│  ✅ Importação concluída!                                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Resumo da importação:                                      │
│                                                             │
│  ✓ 97 produtos importados com sucesso                       │
│  ⚠️ 3 produtos com avisos                                   │
│  ✗ 0 produtos com erro                                      │
│                                                             │
│  Tempo total: 2 minutos e 15 segundos                       │
│                                                             │
│  [Ver Produtos Importados]  [Baixar Relatório]              │
│                                                             │
│  Produtos com avisos:                                       │
│  • CAM-098 - Preço de custo maior que preço de venda        │
│  • CAM-099 - Estoque inicial zero                           │
│  • CAM-100 - Categoria não encontrada (criada automaticamente)│
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Ajuste de estoque aplicado
```
┌─────────────────────────────────────────────────────────────┐
│  ✅ Ajuste aplicado com sucesso!                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Produto: Camiseta Polo M - Preto                           │
│                                                             │
│  Estoque anterior: 45 unidades                              │
│  Quantidade contada: 42 unidades                            │
│  Diferença: -3 unidades                                     │
│                                                             │
│  Estoque atual: 42 unidades                                 │
│                                                             │
│  Valor do ajuste: -R$ 75,00 (custo médio)                   │
│                                                             │
│  [Continuar Inventário]  [Finalizar]                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. Integrações de UI

### 7.1 Notificações/Toasts

#### Tipos de Notificações

| Tipo | Ícone | Cor | Uso |
|------|-------|-----|-----|
| Sucesso | ✅ | Verde | Operações concluídas com sucesso |
| Erro | ✗ | Vermelho | Falhas em operações |
| Aviso | ⚠️ | Amarelo | Alertas que requerem atenção |
| Informação | ℹ️ | Azul | Informações gerais |

#### Exemplos de Toasts

**Sucesso:**
```
┌────────────────────────────────────────┐
│ ✅ Produto salvo com sucesso!      [✕] │
└────────────────────────────────────────┘
```

**Erro:**
```
┌────────────────────────────────────────┐
│ ✗ Erro ao salvar produto           [✕] │
│   SKU já cadastrado no sistema         │
└────────────────────────────────────────┘
```

**Aviso:**
```
┌────────────────────────────────────────┐
│ ⚠️ Estoque baixo!                  [✕] │
│   5 produtos abaixo do mínimo          │
│   [Ver produtos]                       │
└────────────────────────────────────────┘
```

**Informação:**
```
┌────────────────────────────────────────┐
│ ℹ️ Sincronização em andamento      [✕] │
│   15 produtos sendo enviados à loja    │
└────────────────────────────────────────┘
```

**Com Ação:**
```
┌────────────────────────────────────────┐
│ ✅ Produto excluído                [✕] │
│   [Desfazer]                           │
└────────────────────────────────────────┘
```

**Persistente (requer ação):**
```
┌────────────────────────────────────────┐
│ ⚠️ Conflito de sincronização           │
│   O produto foi alterado na loja e no  │
│   sistema. Qual versão manter?         │
│   [Manchar Loja]  [Manter Sistema]     │
│   [Ver Diferenças]                     │
└────────────────────────────────────────┘
```

#### Posicionamento
```
┌────────────────────────────────────────┐
│                                        │
│                    [Info]              │
│                    [Success]           │
│                    [Warning]           │
│                    [Error]             │
│                                        │
└────────────────────────────────────────┘
              Posição: Top-Right
              Stack: Máximo 5 toasts
              Auto-dismiss: 5 segundos
              (exceto persistentes)
```

---

### 7.2 Confirmações

#### Modal de Confirmação Padrão
```
┌────────────────────────────────────────┐
│  Confirmar Exclusão              [✕]   │
├────────────────────────────────────────┤
│                                        │
│     ⚠️                                 │
│                                        │
│   Tem certeza que deseja excluir       │
│   este produto?                        │
│                                        │
│   "Camiseta Polo Masculina"            │
│                                        │
│   Esta ação não poderá ser desfeita.   │
│                                        │
│   Digite "EXCLUIR" para confirmar:     │
│   [________________]                   │
│                                        │
│   [Cancelar]    [Excluir]              │
│                                        │
└────────────────────────────────────────┘
```

#### Confirmação com Impacto
```
┌────────────────────────────────────────┐
│  Confirmar Alteração de Preço    [✕]   │
├────────────────────────────────────────┤
│                                        │
│   ⚠️ Esta alteração afetará:           │
│                                        │
│   • 45 vendas em andamento             │
│   • 12 produtos no carrinho de clientes│
│   • Loja virtual (sincronização)       │
│                                        │
│   Preço atual: R$ 59,90                │
│   Novo preço: R$ 69,90 (+16.7%)        │
│                                        │
│   ☑️ Notificar clientes com produto    │
│      no carrinho                       │
│                                        │
│   [Voltar]    [Confirmar Alteração]    │
│                                        │
└────────────────────────────────────────┘
```

#### Confirmação em Lote
```
┌────────────────────────────────────────┐
│  Confirmar Ação em Massa         [✕]   │
├────────────────────────────────────────┤
│                                        │
│   Você selecionou 15 produtos para     │
│   exclusão.                            │
│                                        │
│   Resumo:                              │
│   ✓ 12 produtos podem ser excluídos    │
│   ✗ 3 produtos não podem ser excluídos │
│     (possuem vendas)                   │
│                                        │
│   Deseja prosseguir com os 12          │
│   produtos permitidos?                 │
│                                        │
│   [Cancelar]    [Excluir 12 Produtos]  │
│                                        │
└────────────────────────────────────────┘
```

---

### 7.3 Impressão de Etiquetas

#### Fluxo de Impressão

**Passo 1 - Seleção:**
```
┌─────────────────────────────────────────────────────────────┐
│  Impressão de Etiquetas - Seleção                     [✕]   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Buscar produtos: [______________________________] [🔍]     │
│                                                             │
│  Produtos selecionados:                                     │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Produto              │ Variação   │ Qtd │ Ações     │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ Camiseta Polo        | M - Preto  │ 10  │ [✏️][🗑️]  │   │
│  │ Calça Jeans          | 42 - Azul  │ 5   │ [✏️][🗑️]  │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  Total de etiquetas: 15                                     │
│                                                             │
│  [Adicionar Produto]          [Próximo: Configurar ▶]       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Passo 2 - Configuração:**
```
┌─────────────────────────────────────────────────────────────┐
│  Impressão de Etiquetas - Layout                      [✕]   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Template: [Padrão PIMACO 6080 ▼]      [Salvar Template]    │
│                                                             │
│  Configurações:                                             │
│  • Dimensão: 33mm × 60mm                                    │
│  • Colunas: 3                                               │
│  • Linhas: 10                                               │
│  • Margens: 10mm                                            │
│                                                             │
│  Campos a exibir:                                           │
│  ☑ Nome do produto     ☑ Código de barras                  │
│  ☑ Preço               ☐ QR Code                            │
│  ☐ Logo da empresa     ☐ SKU                                │
│                                                             │
│  Preview:                                                   │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐              │
│  │ CAMISETA   │ │ CAMISETA   │ │ CALÇA      │              │
│  │ POLO       │ │ POLO       │ │ JEANS      │              │
│  │ R$ 59,90   │ │ R$ 59,90   │ │ R$ 89,90   │              │
│  │ |||||||||  │ │ |||||||||  │ │ |||||||||  │              │
│  └────────────┘ └────────────┘ └────────────┘              │
│                                                             │
│  [◀ Anterior]  [Próximo: Imprimir ▶]                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Passo 3 - Impressão:**
```
┌─────────────────────────────────────────────────────────────┐
│  Impressão de Etiquetas - Imprimir                    [✕]   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Resumo da impressão:                                       │
│                                                             │
│  • 15 etiquetas serão geradas                               │
│  • Template: Padrão PIMACO 6080                             │
│  • Formato: PDF A4                                          │
│                                                             │
│  Escolha como prosseguir:                                   │
│                                                             │
│  [📄 Gerar PDF]  [🖨️ Imprimir]  [💾 Salvar]                 │
│                                                             │
│  Impressora: [Epson TM-T20 ▼]                               │
│                                                             │
│  ☑️ Abrir PDF automaticamente                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### 7.4 Tooltips e Ajuda Contextual

#### Tooltips Informativos
```
Passe o mouse sobre elementos para ver dicas:

SKU: CAM-POLO-001 ℹ️
┌──────────────────────────────┐
│ Código único do produto.     │
│ Usado para identificação     │
│ interna e em relatórios.     │
└──────────────────────────────┘

Preço de Custo: R$ 25,00 ℹ️
┌──────────────────────────────┐
│ Valor pago ao fornecedor.    │
│ Usado para calcular margem   │
│ e custo médio do estoque.    │
└──────────────────────────────┘
```

#### Ajuda Contextual (Tour Guiado)
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   [1/5] Bem-vindo ao Cadastro de Produtos!                  │
│                                                             │
│   ┌──────────────┐                                          │
│   │              │  Nesta tela você pode cadastrar          │
│   │   ┌─────┐    │  todos os produtos do seu estoque.      │
│   │   │ 👆  │    │                                          │
│   │   └─────┘    │  Vamos começar pelo campo de nome.      │
│   │              │                                          │
│   └──────────────┘                                          │
│                                                             │
│   [Pular Tour]  [← Anterior]  [Próximo →]                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Badges de Ajuda
```
Estoque Mínimo: [10] [?]
                    ┌─────────────────────────┐
                    │ Quantidade mínima que   │
                    │ deve ser mantida em     │
                    │ estoque. Quando atingir │
                    │ este nível, um alerta   │
                    │ será gerado.            │
                    └─────────────────────────┘
```

---

### 7.5 Sincronização com Loja Virtual

#### Status de Sincronização
```
┌─────────────────────────────────────────────────────────────┐
│  Sincronização com Loja Virtual                       [✕]   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Status geral: ● Sincronizado                               │
│                                                             │
│  Última sincronização: 15/03/2024 14:30                     │
│                                                             │
│  Produtos pendentes: 0                                      │
│  Produtos com erro: 2                                       │
│                                                             │
│  [🔄 Sincronizar Agora]                                     │
│                                                             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                             │
│  Produtos com erro:                                         │
│  ⚠️ CAM-001 - Erro de conexão com API                      │
│  ⚠️ CAM-045 - Preço inválido na loja                       │
│                                                             │
│  [Tentar Novamente]  [Ver Detalhes]                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Badge de Status na Lista
```
┌─────────────────────────────┐
│       ┌─────────┐           │
│       │  FOTO   │           │
│       └─────────┘           │
│                             │
│  Camiseta Polo              │
│  R$ 59,90                   │
│  Estoque: 45                │
│  ● Sincronizado ✓           │  <- Badge verde
└─────────────────────────────┘

┌─────────────────────────────┐
│       ┌─────────┐           │
│       │  FOTO   │           │
│       └─────────┘           │
│                             │
│  Calça Jeans                │
│  R$ 89,90                   │
│  Estoque: 12                │
│  ⚠️ Não sincronizado        │  <- Badge laranja
└─────────────────────────────┘
```

---

## 8. Fluxos de Navegação

### 8.1 Fluxo: Cadastro de Produto Completo

```
[Dashboard]
    │
    ▼
[Lista de Produtos] ──► [Busca/Filtro]
    │                           │
    ▼                           ▼
[Novo Produto] ◄────────── [Resultados]
    │
    ├─► [Aba: Informações Básicas]
    │   └─► Validações: Nome, SKU único
    │
    ├─► [Aba: Preços]
    │   └─► Validações: Preço > Custo
    │
    ├─► [Aba: Estoque]
    │   └─► Define: Qtd inicial, mínimo
    │
    ├─► [Aba: Variações?]
    │   ├─► Sim: [Modal: Configurar Variações]
    │   │       └─► [Tabela de Variações]
    │   └─► Não: Continua
    │
    ├─► [Aba: Fotos]
    │   └─► [Modal: Upload de Fotos]
    │
    ├─► [Aba: Fiscal]
    │   └─► Validações: NCM, CEST
    │
    ▼
[Salvar] ──► [Validação Completa]
    │
    ├─► Sucesso: [Toast Sucesso] ──► [Detalhes do Produto]
    │                              └─► [Modal: Publicar na Loja?]
    │
    └─► Erro: [Toast Erro] ──► Retorna ao formulário
```

### 8.2 Fluxo: Movimentação de Estoque

```
[Dashboard ou Lista]
    │
    ▼
[Movimentações] ──► [Filtros: Data, Tipo]
    │
    ├─► [Nova Entrada]
    │   │
    │   ├─► Seleciona Tipo: Compra/Devolução/Ajuste
    │   ├─► Seleciona Fornecedor (se Compra)
    │   ├─► Adiciona Produtos:
    │   │   ├─► Busca produto
    │   │   ├─► Seleciona variação (se houver)
    │   │   ├─► Informa quantidade
    │   │   └─► Informa custo unitário
    │   │
    │   ├─► [Adicionar mais produtos] ou
    │   ▼
    │   [Confirmar Entrada]
    │       │
    │       ├─► Valida estoque disponível
    │       ├─► Atualiza custo médio
    │       ├─► Gera movimentação
    │       ├─► Atualiza estoque
    │       └─► [Toast Sucesso]
    │
    └─► [Nova Saída]
        │
        ├─► Seleciona Tipo: Venda/Ajuste/Perda
        ├─► Seleciona Produtos (mesmo fluxo)
        ├─► Valida: Qtd ≤ Estoque disponível
        │
        ▼
        [Confirmar Saída]
            │
            ├─► Atualiza estoque
            ├─► Verifica estoque mínimo (alerta se necessário)
            └─► [Toast Sucesso]
```

### 8.3 Fluxo: Inventário Físico

```
[Estoque] ──► [Inventário]
    │
    ├─► [Novo Inventário]
    │   │
    │   ├─► Seleciona: Todos produtos / Por categoria
    │   ├─► Define responsável
    │   └─► [Iniciar Contagem]
    │
    ▼
[Tela de Contagem]
    │
    ├─► Opção 1: Scanner de código de barras
    │   └─► [Modal: Scanner] ──► Auto-preenche produto
    │
    ├─► Opção 2: Busca manual
    │   └─► [Busca] ──► Seleciona produto
    │
    ▼
[Informa Quantidade Contada]
    │
    ├─► Sistema calcula diferença
    ├─► Mostra: Estoque sistema vs Contagem
    ├─► Campo: Motivo do ajuste
    │
    ├─► [Próximo Produto] ──► Loop até finalizar
    │
    ▼
[Finalizar Inventário]
    │
    ├─► [Modal: Resumo do Inventário]
    │   ├─► Total de produtos contados
    │   ├─► Produtos com divergência
    │   ├─► Valor total do ajuste
    │   └─► Lista de ajustes pendentes
    │
    ├─► [Aplicar Ajustes]
    │   └─► Gera movimentações de ajuste
    │
    └─► [Salvar para Depois]
        └─► Salva rascunho do inventário
```

---

## 9. Considerações de MVP vs Futuro

### 9.1 Funcionalidades MVP

| Funcionalidade | Prioridade | Complexidade |
|----------------|------------|--------------|
| Cadastro básico de produtos | Alta | Baixa |
| Lista de produtos com busca | Alta | Baixa |
| Controle de estoque (entrada/saída) | Alta | Média |
| Alerta de estoque baixo | Alta | Baixa |
| Categorias de produtos | Alta | Baixa |
| Variações simples (tamanho, cor) | Alta | Média |
| Upload de fotos | Alta | Média |
| Etiquetas básicas (PDF) | Alta | Média |
| Inventário físico | Alta | Média |
| Histórico de movimentações | Média | Baixa |

### 9.2 Funcionalidades Pós-MVP

| Funcionalidade | Prioridade | Complexidade | Versão |
|----------------|------------|--------------|--------|
| Fornecedores vinculados | Média | Baixa | v1.1 |
| Pedido de compra automático | Média | Média | v1.1 |
| Combos/kits de produtos | Média | Alta | v1.2 |
| Lotes e validade | Média | Média | v1.2 |
| Múltiplos depósitos | Média | Alta | v1.2 |
| Importação em massa | Média | Média | v1.1 |
| Etiquetas ZPL/EPL | Baixa | Média | v1.3 |
| Curva ABC de produtos | Baixa | Média | v1.3 |
| Previsão de demanda | Baixa | Alta | v1.4 |
| App mobile para inventário | Baixa | Alta | v1.5 |
| Integração com balança | Baixa | Média | v1.4 |

### 9.3 Complexidade de Implementação

```
┌────────────────────────────────────────────────────────────┐
│  LEGENDA DE COMPLEXIDADE                                   │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  🟢 BAIXA (1-2 semanas)                                   │
│     • CRUD simples                                         │
│     • Listagens com filtros básicos                        │
│     • Formulários padrão                                   │
│     • Upload de arquivos                                   │
│                                                            │
│  🟡 MÉDIA (3-4 semanas)                                   │
│     • Variações de produtos                                │
│     • Movimentações com regras de negócio                  │
│     • Importação/Exportação                                │
│     • Relatórios customizados                              │
│     • Integrações simples                                  │
│                                                            │
│  🔴 ALTA (5+ semanas)                                      │
│     • Kits/Combos                                          │
│     • Múltiplos depósitos                                  │
│     • Custo médio complexo                                 │
│     • App mobile                                           │
│     • Integrações complexas                                │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## 10. Checklist de Implementação

### 10.1 Checklist de Telas

- [ ] Lista de Produtos (Grade + Lista)
- [ ] Detalhes do Produto (abas)
- [ ] Cadastro de Produto (multi-etapas)
- [ ] Edição de Produto
- [ ] Movimentações de Estoque
- [ ] Inventário Físico
- [ ] Categorias de Produtos
- [ ] Impressão de Etiquetas
- [ ] Produtos com Estoque Baixo
- [ ] Gerenciamento de Variações
- [ ] Dashboard de Estoque

### 10.2 Checklist de Formulários

- [ ] Formulário de Produto (6 abas)
- [ ] Formulário de Movimentação de Entrada
- [ ] Formulário de Movimentação de Saída
- [ ] Formulário de Categoria
- [ ] Formulário de Variação
- [ ] Formulário de Ajuste de Inventário
- [ ] Formulário de Configuração de Etiqueta
- [ ] Formulário de Importação em Massa

### 10.3 Checklist de Modais

- [ ] Upload de Fotos
- [ ] Seleção de Variações
- [ ] Confirmação de Exclusão
- [ ] Visualização Rápida
- [ ] Sincronizar com Loja
- [ ] Ajuste Rápido de Estoque
- [ ] Gerar Etiquetas
- [ ] Vincular Fornecedor
- [ ] Histórico de Movimentações
- [ ] Duplicar Produto
- [ ] Leitor de Código de Barras
- [ ] Configurar Alertas

### 10.4 Checklist de Componentes

- [ ] Card de Produto
- [ ] Galeria de Imagens
- [ ] Seletor de Variações
- [ ] Indicador de Estoque
- [ ] Badge de Status
- [ ] Tabela de Movimentações
- [ ] Leitor de Código de Barras
- [ ] Tabela de Variações
- [ ] Filtro Avançado
- [ ] Resumo de Estoque

---

## 11. Anexos

### 11.1 Glossário

| Termo | Definição |
|-------|-----------|
| **SKU** | Stock Keeping Unit - Código único de identificação do produto |
| **NCM** | Nomenclatura Comum do Mercosul - Código fiscal do produto |
| **CEST** | Código Especificador da Substituição Tributária |
| **CFOP** | Código Fiscal de Operações e Prestações |
| **Custo Médio** | Valor médio ponderado de aquisição do produto |
| **Variação** | Versão diferente do produto (tamanho, cor) |
| **Estoque Mínimo** | Quantidade mínima aceitável em estoque |
| **Estoque Máximo** | Quantidade máxima recomendada em estoque |
| **Giro de Estoque** | Frequência de reposição/renovação do estoque |
| **Curva ABC** | Classificação de produtos por importância/vendas |

### 11.2 Referências de Permissões

```
estoque.produtos.visualizar      - Ver lista e detalhes
estoque.produtos.criar           - Cadastrar novos produtos
estoque.produtos.editar          - Editar produtos existentes
estoque.produtos.excluir         - Excluir produtos

estoque.movimentacoes.visualizar - Ver movimentações
estoque.movimentacoes.entrada    - Registrar entradas
estoque.movimentacoes.saida      - Registrar saídas

estoque.categorias.gerenciar     - CRUD de categorias
estoque.variacoes.gerenciar      - CRUD de variações
estoque.etiquetas.imprimir       - Imprimir etiquetas
estoque.inventario.realizar      - Realizar inventário
estoque.alertas.visualizar       - Ver alertas de estoque
estoque.dashboard.visualizar     - Ver dashboard
estoque.configuracoes.gerenciar  - Configurar módulo
```

### 11.3 Cores do Sistema (Referência)

```
Estoque OK:        #22C55E (Verde)
Estoque Baixo:     #F59E0B (Laranja)
Estoque Crítico:   #EF4444 (Vermelho)
Estoque Zerado:    #DC2626 (Vermelho escuro)

Entrada:           #22C55E (Verde)
Saída:             #EF4444 (Vermelho)
Ajuste Positivo:   #3B82F6 (Azul)
Ajuste Negativo:   #F59E0B (Laranja)
```

---

**Documento criado em:** Março/2024  
**Versão:** 1.0  
**Responsável:** UI/UX Team  
**Status:** Em revisão
