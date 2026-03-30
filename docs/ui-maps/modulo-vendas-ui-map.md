# Mapa de UI - Módulos Vendas (PDV + Loja Virtual)

> **Versão:** 1.0  
> **Data:** Março/2026  
> **Status:** Documento de Referência Completo

---

## PARTE 1: VENDAS PDV (Ponto de Venda)

### 1. Resumo do Módulo PDV

#### Objetivo Principal
Sistema de caixa físico para venda direta ao consumidor, otimizado para operações rápidas em tablet, desktop touch ou terminal dedicado. Permite venda de produtos com múltiplas formas de pagamento, gestão de caixa (sangria/suprimento) e relatórios de fechamento.

#### Integrações
- **Estoque**: Baixa automática de produtos, controle de saldo em tempo real
- **Financeiro**: Lançamento de receitas, conciliação de formas de pagamento
- **Cadastros**: Clientes, produtos, vendedores
- **Fiscal**: Emissão de NFC-e (futuro)

#### Características de UX
- Interface touch-friendly (botões grandes, gestos)
- Fluxo de venda rápida (< 30 segundos)
- Offline-first (funciona sem internet)
- Suporte a leitor de código de barras
- Impressão de cupom não fiscal

---

### 2. Telas PDV

#### 2.1 Tela Principal do PDV (Caixa)
**Rota:** `/vendas/pdv/caixa`  
**Objetivo:** Interface principal de venda - o coração do PDV  
**Prioridade:** MVP

**Componentes:**
- Header com identificação do caixa, vendedor logado e hora
- Área de busca rápida de produtos (código, nome, código de barras)
- Grid de produtos favoritos/mais vendidos (teclas de atalho)
- Carrinho lateral com itens da venda atual
- Display de total, subtotal e descontos
- Teclado numérico virtual para quantidade/preço
- Barra de ações rápidas (finalizar, cancelar, cliente, desconto)

**Ações:**
- Adicionar produto ao carrinho
- Alterar quantidade
- Aplicar desconto no item
- Remover item
- Finalizar venda
- Cancelar venda
- Identificar cliente
- Colocar venda em espera
- Recuperar venda em espera

**Estados:**
- Caixa fechado (exige abertura)
- Caixa aberto (pronto para vender)
- Venda em andamento
- Modo balcão (sem cliente identificado)
- Modo atacado (cliente identificado com preço especial)

---

#### 2.2 Abertura de Caixa
**Rota:** `/vendas/pdv/abertura` (modal/tela)  
**Objetivo:** Registrar valores iniciais do caixa  
**Prioridade:** MVP

**Componentes:**
- Campo para valor inicial em dinheiro
- Seleção de operador/vendedor
- Campo de observações
- Confirmação de data/hora

**Ações:**
- Confirmar abertura
- Cancelar (volta para dashboard)

---

#### 2.3 Fechamento de Caixa
**Rota:** `/vendas/pdv/fechamento`  
**Objetivo:** Encerrar o caixa do dia com conferência de valores  
**Prioridade:** MVP

**Componentes:**
- Resumo de vendas do dia (dinheiro, cartão, PIX, etc.)
- Campos para conferência de valores (dinheiro físico)
- Diferença de caixo (calculada automaticamente)
- Total de sangrias realizadas
- Total de suprimentos recebidos
- Botão de impressão de relatório

**Ações:**
- Informar valores contados
- Confirmar fechamento
- Imprimir relatório
- Voltar (cancelar)

---

#### 2.4 Sangria de Caixa
**Rota:** `/vendas/pdv/sangria` (modal)  
**Objetivo:** Retirar dinheiro do caixa (excesso, pagamento de despesa)  
**Prioridade:** MVP

**Componentes:**
- Campo de valor da sangria
- Motivo/justificativa (select + outro)
- Campo de observação detalhada
- Senha do gerente (para valores acima do limite)

**Ações:**
- Confirmar sangria
- Cancelar

---

#### 2.5 Suprimento de Caixa
**Rota:** `/vendas/pdv/suprimento` (modal)  
**Objetivo:** Adicionar dinheiro ao caixa (troco inicial, reforço)  
**Prioridade:** MVP

**Componentes:**
- Campo de valor do suprimento
- Motivo (select: troco, reforço, estorno)
- Campo de observação

**Ações:**
- Confirmar suprimento
- Cancelar

---

#### 2.6 Histórico de Vendas do Dia
**Rota:** `/vendas/pdv/historico`  
**Objetivo:** Visualizar todas as vendas realizadas no dia/abertura atual  
**Prioridade:** MVP

**Componentes:**
- Lista de vendas com filtros (hora, valor, forma pagamento)
- Cards de resumo (total vendido, ticket médio, quantidade)
- Botão de impressão de cupom
- Botão de cancelamento (dentro do prazo/permissão)

**Ações:**
- Visualizar detalhes da venda
- Reimprimir cupom
- Cancelar venda (com justificativa)
- Exportar para PDF

---

#### 2.7 Detalhes da Venda
**Rota:** `/vendas/pdv/venda/:id` (modal/tela)  
**Objetivo:** Visualizar informações completas de uma venda específica  
**Prioridade:** MVP

**Componentes:**
- Cabeçalho com número, data, hora, vendedor
- Lista de itens vendidos (produto, qtd, valor unit, total)
- Totais (subtotal, descontos, total)
- Formas de pagamento utilizadas
- Informações do cliente (se identificado)
- Observações

**Ações:**
- Reimprimir cupom
- Cancelar venda
- Exportar comprovante
- Voltar

---

#### 2.8 Relatório de Vendas PDV
**Rota:** `/vendas/pdv/relatorio`  
**Objetivo:** Análise de vendas por período (acesso gerencial)  
**Prioridade:** Futuro

**Componentes:**
- Filtros de período, vendedor, forma de pagamento
- Gráficos de vendas por hora/dia
- Tabela com todas as vendas
- Exportação Excel/PDF

**Ações:**
- Aplicar filtros
- Exportar dados
- Imprimir relatório

---

### 3. Formulários PDV

#### 3.1 Formulário de Venda (Processo Principal)
**Campos:**
- `cliente_id` (opcional) - Cliente identificado
- `itens` (array obrigatório):
  - `produto_id` (obrigatório)
  - `quantidade` (obrigatório, default: 1)
  - `valor_unitario` (obrigatório, do produto)
  - `desconto_item` (opcional, valor ou %)
  - `observacao` (opcional)
- `desconto_total` (opcional, valor ou %)
- `acrescimo` (opcional, juros/frete)
- `pagamentos` (array obrigatório):
  - `forma_pagamento_id` (obrigatório)
  - `valor` (obrigatório)
  - `parcelas` (opcional, default: 1)
  - `bandeira_cartao` (condicional)
  - `codigo_autorizacao` (condicional)
- `observacao_geral` (opcional)
- `vendedor_id` (obrigatório)
- `caixa_id` (obrigatório)

**Validações:**
- Soma dos pagamentos = total da venda
- Quantidade > 0
- Produto com estoque disponível
- Descontos dentro dos limites permitidos

---

#### 3.2 Formulário de Abertura de Caixa
**Campos:**
- `valor_inicial` (obrigatório, number, >= 0)
- `operador_id` (obrigatório)
- `data_hora_abertura` (auto)
- `observacoes` (opcional, textarea)

**Validações:**
- Valor inicial não negativo
- Operador obrigatório

---

#### 3.3 Formulário de Fechamento de Caixa
**Campos:**
- `valor_dinheiro_contado` (obrigatório)
- `valor_cartao_credito` (auto + confirmação)
- `valor_cartao_debito` (auto + confirmação)
- `valor_pix` (auto + confirmação)
- `valor_outros` (auto + confirmação)
- `diferenca` (calculado)
- `observacoes_fechamento` (opcional)
- `senha_gerente` (condicional, se diferença > limite)

**Validações:**
- Todos os valores conferidos
- Justificativa se houver diferença

---

#### 3.4 Formulário de Sangria
**Campos:**
- `valor` (obrigatório, number > 0)
- `motivo` (obrigatório, select: excesso, pagamento, outro)
- `motivo_outro` (condicional, se motivo = outro)
- `observacao` (opcional)
- `senha_gerente` (condicional, se valor > limite)

---

#### 3.5 Formulário de Suprimento
**Campos:**
- `valor` (obrigatório, number > 0)
- `motivo` (obrigatório, select: troco, reforço, estorno)
- `observacao` (opcional)

---

#### 3.6 Formulário de Cancelamento de Venda
**Campos:**
- `venda_id` (obrigatório)
- `motivo_cancelamento` (obrigatório, select + outro)
- `justificativa` (obrigatório, min 10 caracteres)
- `senha_gerente` (obrigatório)
- `devolver_estoque` (boolean, default: true)

---

#### 3.7 Formulário de Busca de Produto (PDV)
**Campos:**
- `termo_busca` (obrigatório, código, nome ou código de barras)
- `filtro_categoria` (opcional)

**Comportamento:**
- Busca em tempo real
- Resultados exibidos em grid
- Seleção por click ou Enter

---

### 4. Modais PDV

#### 4.1 Modal - Finalizar Venda
**Disparado por:** Botão "Finalizar" na tela principal  
**Conteúdo:**
- Resumo da venda (total, itens)
- Seleção de forma(s) de pagamento
- Campo para valor recebido (dinheiro)
- Cálculo automático de troco
- Botão de confirmar/imprimir

#### 4.2 Modal - Selecionar Forma de Pagamento
**Disparado por:** Início do fechamento  
**Conteúdo:**
- Grid de botões: Dinheiro, PIX, Cartão Crédito, Cartão Débito, Crediário
- Para cartão: seleção de bandeira, parcelas
- Para PIX: exibição de QR Code
- Campo de valor para cada forma (permitir múltiplas)

#### 4.3 Modal - Aplicar Desconto
**Disparado por:** Botão desconto no item ou total  
**Conteúdo:**
- Toggle: desconto no item vs total
- Campo: valor ou porcentagem
- Select: tipo de desconto (promoção, cliente VIP, avaria, etc.)
- Senha do gerente (se desconto > limite)

#### 4.4 Modal - Identificar Cliente
**Disparado por:** Botão "Cliente"  
**Conteúdo:**
- Campo de busca (CPF, nome, telefone)
- Lista de resultados
- Botão "Novo cliente" (abre cadastro rápido)
- Botão "Venda sem CPF"

#### 4.5 Modal - Cadastro Rápido de Cliente
**Disparado por:** Botão "Novo cliente" no modal acima  
**Conteúdo:**
- Nome (obrigatório)
- CPF/CNPJ (opcional)
- Telefone (opcional)
- Email (opcional)
- Botão salvar (cadastro mínimo)

#### 4.6 Modal - Adicionar Observação ao Item
**Disparado por:** Ícone de observação no item do carrinho  
**Conteúdo:**
- Textarea para observação
- Botões de confirmação

#### 4.7 Modal - Colocar Venda em Espera
**Disparado por:** Botão "Em espera"  
**Conteúdo:**
- Campo para identificação (nome do cliente/resumo)
- Lista de vendas em espera (para recuperação)

#### 4.8 Modal - Recuperar Venda em Espera
**Disparado por:** Botão "Recuperar venda"  
**Conteúdo:**
- Lista de vendas em espera com hora e identificação
- Botão para recuperar cada uma
- Botão para excluir venda em espera

#### 4.9 Modal - Confirmação de Cancelamento
**Disparado por:** Tentativa de cancelar venda  
**Conteúdo:**
- Alerta sobre ação irreversível
- Campo de motivo
- Campo de senha do gerente
- Botões confirmar/cancelar

#### 4.10 Modal - Configurações Rápidas do Caixa
**Disparado por:** Ícone de configurações  
**Conteúdo:**
- Seleção de impressora
- Configurações de som (beep)
- Tema/interface
- Atalhos de teclado

---

### 5. Componentes Específicos PDV

#### 5.1 Teclado Numérico Virtual
- Layout: 7-8-9, 4-5-6, 1-2-3, 0-00-.
- Botões de função: Limpar, Backspace, OK
- Otimizado para touch (botões grandes)
- Suporte a teclado físico

#### 5.2 Display do Caixa
- Exibe subtotal, descontos, total
- Valor recebido e troco (em tempo real)
- Ícones indicativos de desconto aplicado

#### 5.3 Busca Rápida de Produto
- Campo de texto com foco automático
- Busca por: código interno, código de barras, nome
- Resultados em dropdown com imagem, nome, preço
- Atalho: leitura de código de barras foca automaticamente

#### 5.4 Carrinho Lateral (PDV)
- Lista scrollável de itens
- Cada item: imagem miniatura, nome, qtd, valor unit, total
- Ações por item: +, -, editar, remover
- Scroll automático para último item adicionado
- Destaque para item selecionado

#### 5.5 Grid de Produtos Rápidos
- Exibe produtos favoritos/mais vendidos
- Configurável (atalhos F1-F12 ou touch)
- Categorias em abas
- Busca visual com ícones

#### 5.6 Leitor de Código de Barras (Integração)
- Campo oculto sempre focado
- Captura input do leitor
- Beep de confirmação
- Feedback visual (toast)

#### 5.7 Ticket/Cupom de Impressão (Visualização)
- Preview do cupom antes de imprimir
- Layout simplificado
- Dados da empresa, itens, totais, formas de pagamento
- Código de barras do número da venda

#### 5.8 Indicadores de Status do Caixa
- Badge: Caixa Aberto/Fechado
- Indicador de conexão (online/offline)
- Alerta de estoque baixo
- Notificação de sangria necessária

---

## PARTE 2: LOJA VIRTUAL (Storefront)

### 6. Resumo da Loja Virtual

#### Objetivo Principal
Canal de vendas online B2C, permitindo que clientes finais naveguem pelo catálogo, adicionem produtos ao carrinho e finalizem compras de forma autônoma. Acessível via web e mobile.

#### Integrações
- **Estoque**: Disponibilidade em tempo real, reserva de produtos
- **Pagamentos**: Gateway de pagamento (Stripe, Pagar.me, Mercado Pago)
- **Logística**: Cálculo de frete (Correios, transportadoras)
- **PDV**: Unificação de estoque e clientes
- **Marketing**: Cupons de desconto, pixel de conversão

#### Características de UX
- Mobile-first design
- Navegação intuitiva e rápida
- Checkout otimizado (máximo 3 passos)
- Busca inteligente com autocomplete
- Filtros de produto eficientes
- Imagens de alta qualidade
- Avaliações e reviews

---

### 7. Telas Loja Virtual

#### 7.1 Home da Loja (Vitrine)
**Rota:** `/` ou `/loja`  
**Objetivo:** Página inicial com destaques e navegação principal  
**Prioridade:** MVP

**Componentes:**
- Header com logo, busca, ícones (conta, carrinho)
- Menu de categorias principal
- Banner principal (carousel)
- Seções de destaque: Lançamentos, Mais Vendidos, Ofertas
- Grid de produtos por seção
- Newsletter
- Footer com informações institucionais

**Ações:**
- Navegar para categoria
- Buscar produto
- Adicionar ao carrinho (quick add)
- Ver detalhes do produto
- Acessar conta

---

#### 7.2 Página de Categoria
**Rota:** `/categoria/:slug`  
**Objetivo:** Listar produtos de uma categoria específica  
**Prioridade:** MVP

**Componentes:**
- Breadcrumb de navegação
- Título da categoria com quantidade de produtos
- Filtros laterais: preço, marca, atributos
- Ordenação: relevância, menor preço, maior preço, mais recentes
- Grid de produtos (2-4 colunas responsivo)
- Paginação ou scroll infinito

**Ações:**
- Aplicar/remover filtros
- Ordenar produtos
- Navegar entre páginas
- Adicionar ao carrinho
- Ver produto

---

#### 7.3 Página de Produto (PDP - Product Detail Page)
**Rota:** `/produto/:slug`  
**Objetivo:** Exibir detalhes completos de um produto  
**Prioridade:** MVP

**Componentes:**
- Galeria de imagens (zoom, thumbnail)
- Nome do produto
- Preço (com desconto se houver)
- Badge de disponibilidade (em estoque/esgotado)
- Seleção de variações (cor, tamanho)
- Quantidade
- Botão "Adicionar ao Carrinho"
- Botão "Comprar Agora"
- Descrição do produto (tabs)
- Especificações técnicas
- Avaliações de clientes
- Produtos relacionados
- Produtos recomendados

**Ações:**
- Selecionar variação
- Alterar quantidade
- Adicionar ao carrinho
- Comprar direto (vai para checkout)
- Compartilhar produto
- Adicionar à lista de desejos (futuro)

**Estados:**
- Produto disponível
- Produto esgotado
- Produto em pré-venda
- Variação indisponível

---

#### 7.4 Carrinho de Compras
**Rota:** `/carrinho`  
**Objetivo:** Revisar itens antes do checkout  
**Prioridade:** MVP

**Componentes:**
- Lista de itens com imagem, nome, variação, qtd, preço
- Controles de quantidade (+/-)
- Botão remover item
- Campo de cupom de desconto
- Cálculo de frete (CEP)
- Resumo: subtotal, frete, desconto, total
- Botão "Continuar" (vai para checkout)
- Produtos recomendados (upsell)

**Ações:**
- Alterar quantidade
- Remover item
- Aplicar cupom
- Calcular frete
- Continuar para checkout
- Voltar para loja

---

#### 7.5 Checkout - Dados do Cliente
**Rota:** `/checkout/dados`  
**Objetivo:** Identificar ou cadastrar o cliente  
**Prioridade:** MVP

**Componentes:**
- Opção: Já tenho conta / Sou novo cliente / Comprar como visitante
- Formulário de login (email + senha)
- Formulário de cadastro rápido (nome, email, CPF, telefone)
- Checkbox: receber ofertas por email

**Ações:**
- Fazer login
- Criar conta
- Continuar como visitante
- Prosseguir para entrega

---

#### 7.6 Checkout - Endereço de Entrega
**Rota:** `/checkout/entrega`  
**Objetivo:** Selecionar ou cadastrar endereço de entrega  
**Prioridade:** MVP

**Componentes:**
- Lista de endereços salvos (se logado)
- Formulário de novo endereço:
  - CEP (com busca automática)
  - Rua, número, complemento
  - Bairro, cidade, estado
  - Destinatário
- Mapa de visualização (opcional)
- Seleção de tipo de entrega (padrão, expressa)

**Ações:**
- Buscar endereço por CEP
- Salvar novo endereço
- Selecionar endereço existente
- Prosseguir para pagamento

---

#### 7.7 Checkout - Pagamento
**Rota:** `/checkout/pagamento`  
**Objetivo:** Selecionar forma de pagamento e finalizar  
**Prioridade:** MVP

**Componentes:**
- Resumo do pedido (colapsável)
- Opções de pagamento:
  - Cartão de crédito (formulário)
  - Cartão de débito
  - PIX (QR Code)
  - Boleto bancário
- Parcelamento (para crédito)
- Confirmação de dados
- Termos e condições (checkbox)
- Botão "Finalizar Compra"

**Ações:**
- Selecionar forma de pagamento
- Preencher dados do cartão
- Gerar PIX
- Finalizar compra

---

#### 7.8 Confirmação de Pedido
**Rota:** `/pedido/confirmado/:numero`  
**Objetivo:** Confirmar sucesso da compra e mostrar próximos passos  
**Prioridade:** MVP

**Componentes:**
- Ícone/ilustração de sucesso
- Número do pedido
- Resumo da compra
- Instruções de pagamento (se necessário)
- Botão "Acompanhar Pedido"
- Botão "Continuar Comprando"
- Compartilhar comprovante

**Ações:**
- Acompanhar pedido
- Imprimir comprovante
- Continuar comprando

---

#### 7.9 Área do Cliente - Meus Pedidos
**Rota:** `/minha-conta/pedidos`  
**Objetivo:** Listar histórico de compras do cliente  
**Prioridade:** MVP

**Componentes:**
- Lista de pedidos com:
  - Número, data, status
  - Valor total
  - Botão "Ver detalhes"
- Filtros: período, status
- Paginação

**Ações:**
- Visualizar detalhes do pedido
- Solicitar cancelamento
- Recomprar

---

#### 7.10 Área do Cliente - Detalhes do Pedido
**Rota:** `/minha-conta/pedidos/:numero`  
**Objetivo:** Visualizar informações completas de um pedido  
**Prioridade:** MVP

**Componentes:**
- Cabeçalho: número, data, status
- Timeline de status (processando, enviado, entregue)
- Lista de itens
- Endereço de entrega
- Forma de pagamento
- Totais
- Botão de rastreamento
- Botão de cancelamento (se aplicável)

**Ações:**
- Rastrear entrega
- Solicitar cancelamento
- Baixar nota fiscal (futuro)
- Recomprar

---

#### 7.11 Área do Cliente - Meus Dados
**Rota:** `/minha-conta/dados`  
**Objetivo:** Gerenciar informações pessoais  
**Prioridade:** MVP

**Componentes:**
- Formulário de dados pessoais
- Alteração de senha
- Gerenciamento de endereços

**Ações:**
- Editar dados
- Alterar senha
- Adicionar/editar/remover endereço

---

#### 7.12 Rastreamento de Pedido
**Rota:** `/rastreamento/:codigo`  
**Objetivo:** Rastrear entrega sem estar logado  
**Prioridade:** Futuro

**Componentes:**
- Campo de código de rastreio
- Timeline de eventos de entrega
- Mapa com localização atual (se disponível)
- Previsão de entrega

---

#### 7.13 Resultados de Busca
**Rota:** `/busca?q=termo`  
**Objetivo:** Exibir resultados de busca  
**Prioridade:** MVP

**Componentes:**
- Termo buscado
- Quantidade de resultados
- Filtros e ordenação
- Grid de produtos
- Sugestões de busca (se poucos resultados)

---

### 8. Formulários Loja Virtual

#### 8.1 Formulário de Cadastro de Cliente
**Campos:**
- `nome_completo` (obrigatório)
- `email` (obrigatório, único)
- `cpf` (obrigatório, validação)
- `telefone` (obrigatório)
- `data_nascimento` (opcional)
- `senha` (obrigatório, min 6 caracteres)
- `confirmar_senha` (obrigatório, match)
- `receber_newsletter` (boolean, default: false)

**Validações:**
- Email válido e único
- CPF válido (algoritmo)
- Senhas coincidem
- Telefone válido

---

#### 8.2 Formulário de Login
**Campos:**
- `email` (obrigatório)
- `senha` (obrigatório)
- `lembrar_me` (boolean)

---

#### 8.3 Formulário de Endereço
**Campos:**
- `cep` (obrigatório, máscara)
- `rua` (obrigatório, auto pelo CEP)
- `numero` (obrigatório)
- `complemento` (opcional)
- `bairro` (obrigatório, auto pelo CEP)
- `cidade` (obrigatório, auto pelo CEP)
- `estado` (obrigatório, auto pelo CEP)
- `destinatario` (obrigatório, default: nome do cliente)
- `principal` (boolean)

**Validações:**
- CEP válido (8 dígitos)
- Campos obrigatórios preenchidos

---

#### 8.4 Formulário de Cartão de Crédito
**Campos:**
- `numero_cartao` (obrigatório, máscara)
- `nome_titular` (obrigatório)
- `validade` (obrigatório, MM/AA)
- `cvv` (obrigatório, 3-4 dígitos)
- `parcelas` (obrigatório, select)
- `salvar_cartao` (boolean, futuro)

**Validações:**
- Número de cartão válido (Luhn)
- Data de validade futura
- CVV numérico

---

#### 8.5 Formulário de Cálculo de Frete
**Campos:**
- `cep_destino` (obrigatório)
- `produtos` (array, do carrinho)

**Retorno:**
- Lista de opções de frete
- Prazo e valor para cada uma

---

#### 8.6 Formulário de Cupom de Desconto
**Campos:**
- `codigo_cupom` (obrigatório)

**Validações:**
- Cupom existe e está ativo
- Não expirado
- Aplicável aos produtos do carrinho
- Limite de uso não atingido

---

#### 8.7 Formulário de Pedido (Checkout Completo)
**Campos:**
- `cliente_id` (obrigatório ou dados de visitante)
- `itens` (array obrigatório):
  - `produto_id`, `variacao_id`, `quantidade`, `valor_unitario`
- `endereco_entrega` (obrigatório)
- `frete` (objeto: modalidade, valor, prazo)
- `pagamento` (objeto obrigatório):
  - `forma_pagamento`
  - `parcelas` (se cartão)
  - `dados_pagamento` (token do gateway)
- `cupom_id` (opcional)
- `observacoes` (opcional)

---

### 9. Modais Loja Virtual

#### 9.1 Modal - Adicionar ao Carrinho
**Disparado por:** Botão "Adicionar ao Carrinho"  
**Conteúdo:**
- Imagem do produto
- Nome e variação selecionada
- Quantidade
- Preço
- Botão "Ir para o Carrinho"
- Botão "Continuar Comprando"

#### 9.2 Modal - Selecionar Variação
**Disparado por:** Produto com variações no card  
**Conteúdo:**
- Opções de variação (cores em círculos, tamanhos em botões)
- Preço atualizado conforme seleção
- Botão confirmar

#### 9.3 Modal - Calcular Frete
**Disparado por:** Ícone de frete no produto ou carrinho  
**Conteúdo:**
- Campo de CEP
- Lista de opções de frete
- Prazo e valor

#### 9.4 Modal - Login Rápido
**Disparado por:** Tentativa de acessar área restrita  
**Conteúdo:**
- Tabs: Login / Cadastro
- Formulários simplificados
- Link para recuperar senha

#### 9.5 Modal - Recuperar Senha
**Disparado por:** Link "Esqueci minha senha"  
**Conteúdo:**
- Campo de email
- Instruções de envio
- Confirmação de email enviado

#### 9.6 Modal - Visualizar Imagem do Produto (Zoom)
**Disparado por:** Click na imagem do produto  
**Conteúdo:**
- Imagem em alta resolução
- Navegação entre imagens
- Zoom in/out

#### 9.7 Modal - Confirmação de Cancelamento
**Disparado por:** Botão cancelar no pedido  
**Conteúdo:**
- Alerta sobre cancelamento
- Motivo do cancelamento
- Confirmação

#### 9.8 Modal - Lista de Desejos (Futuro)
**Disparado por:** Ícone de coração  
**Conteúdo:**
- Produtos salvos
- Botão "Mover para Carrinho"
- Botão remover

---

### 10. Componentes Específicos Loja

#### 10.1 Card de Produto
- Imagem principal
- Nome do produto
- Preço (original e com desconto)
- Badge de desconto (%)
- Badge "Novo" / "Esgotado"
- Botão "Adicionar" (quick add)
- Rating com estrelas (futuro)
- Hover com segunda imagem

#### 10.2 Carrinho Flutuante (Mini Cart)
- Ícone com contador de itens no header
- Drawer lateral ao clicar
- Lista compacta de itens
- Total parcial
- Botão "Ver Carrinho"
- Botão "Finalizar Compra"

#### 10.3 Galeria de Fotos do Produto
- Imagem principal grande
- Thumbnails navegáveis
- Zoom no hover (desktop)
- Swipe (mobile)
- Lightbox para visualização ampliada

#### 10.4 Seletor de Variação
- Cores: círculos coloridos com seleção
- Tamanhos: botões quadrados
- Indicação de indisponível (riscado)
- Atualização de preço em tempo real

#### 10.5 Breadcrumb de Navegação
- Caminho: Home > Categoria > Subcategoria > Produto
- Links clicáveis
- Separador: > ou /

#### 10.6 Filtros de Produto
- Sidebar (desktop) ou Drawer (mobile)
- Filtros por: preço (slider), marca, atributos
- Chips de filtros ativos
- Botão limpar filtros

#### 10.7 Badge de Status do Produto
- "Novo" - verde
- "Esgotado" - cinza
- "Promoção" / "X% OFF" - vermelho/laranja
- "Últimas unidades" - amarelo

#### 10.8 Newsletter
- Campo de email
- Botão assinar
- Confirmação de sucesso
- Integração com serviço de email

#### 10.9 Menu de Categorias
- Menu principal com dropdown
- Ícones por categoria
- Menu hambúrguer (mobile)
- Busca integrada

#### 10.10 Progresso de Checkout
- Steps: Carrinho > Dados > Entrega > Pagamento > Confirmação
- Indicador visual do passo atual
- Possibilidade de voltar

---

## PARTE 3: COMUNS

### 11. Estados de UI

#### 11.1 Estados de Loading
**Skeleton Screens:**
- Cards de produto com placeholder cinza pulsante
- Linhas de texto simulando conteúdo
- Usado em: lista de produtos, carrinho, pedidos

**Spinners:**
- Para ações específicas (adicionar ao carrinho, calcular frete)
- Overlay semitransparente em modais

**Progress Bars:**
- Upload de imagens
- Processamento de pagamento

#### 11.2 Estados de Erro
**Toast Notifications:**
- Sucesso: verde, ícone check
- Erro: vermelho, ícone X
- Aviso: amarelo, ícone !
- Informação: azul, ícone i

**Empty States:**
- Carrinho vazio: ilustração + texto + CTA
- Busca sem resultados: sugestões + categorias populares
- Sem pedidos: mensagem + CTA para comprar

**Error Boundaries:**
- Página de erro genérica
- Botão tentar novamente
- Link para voltar à home

#### 11.3 Estados de Sucesso
**Confirmações Visuais:**
- Animação de checkmark
- Confete em conclusão de compra
- Toast de sucesso

**Feedback Tátil (Mobile):**
- Vibração em ações importantes

#### 11.4 Estados de Autenticação
**Anônimo:**
- Botões de login/cadastro visíveis
- Carrinho funcional (salvo em localStorage)
- Limitação: não pode ver histórico

**Autenticado:**
- Foto/nome do usuário no header
- Menu suspenso com opções da conta
- Sincronização de dados

#### 11.5 Estados de Conectividade
**Online:**
- Operação normal
- Sincronização automática

**Offline:**
- Banner indicando modo offline (PDV)
- Dados salvos localmente
- Fila de sincronização

### 12. Integrações

#### 12.1 Integração PDV ↔ Loja Virtual
- **Estoque Unificado:** Mesmo saldo para ambos os canais
- **Clientes Unificados:** Cadastro único, histórico consolidado
- **Produtos:** Mesmos produtos podem ser vendidos online e físico
- **Preços:** Possibilidade de preços diferentes por canal

#### 12.2 Integração com Sistemas Externos
**Gateway de Pagamento:**
- Stripe
- Pagar.me
- Mercado Pago
- PayPal

**Cálculo de Frete:**
- API dos Correios
- Transportadoras (Jadlog, Loggi)
- Frete próprio

**Impressão:**
- Impressoras térmicas (PDV)
- Impressoras A4 (relatórios)

**Leitores:**
- Código de barras (USB/Bluetooth)
- Leitores de cartão (POS)

#### 12.3 APIs Internas
```
POST   /api/vendas/pdv/venda
GET    /api/vendas/pdv/caixa/status
POST   /api/vendas/pdv/caixa/abrir
POST   /api/vendas/pdv/caixa/fechar
POST   /api/vendas/pdv/sangria
POST   /api/vendas/pdv/suprimento
GET    /api/vendas/pdv/historico

POST   /api/loja/carrinho
GET    /api/loja/carrinho
PUT    /api/loja/carrinho/item
DELETE /api/loja/carrinho/item
POST   /api/loja/pedido
GET    /api/loja/pedidos
GET    /api/loja/frete/calcular
POST   /api/loja/cupom/validar
```

---

## Resumo de Prioridades

### MVP (Fase 1)
#### PDV:
- [x] Tela principal do caixa
- [x] Abertura/fechamento de caixa
- [x] Sangria e suprimento
- [x] Finalizar venda (dinheiro, PIX, cartão)
- [x] Histórico de vendas do dia
- [x] Cancelamento de venda

#### Loja Virtual:
- [x] Home/vitrine
- [x] Página de categoria
- [x] Página de produto
- [x] Carrinho
- [x] Checkout completo (3 passos)
- [x] Confirmação de pedido
- [x] Área do cliente (pedidos, dados)

### Fase 2 (Futuro)
- [ ] NFC-e integração fiscal
- [ ] Múltiplos caixas simultâneos
- [ ] Comandas (restaurantes)
- [ ] Lista de desejos
- [ ] Avaliações e reviews
- [ ] Rastreamento de pedido detalhado
- [ ] Notificações push
- [ ] App mobile nativo

---

## Convenções de Nomenclatura

### Rotas (URLs)
- Minúsculas com hífen
- Português: `/vendas/pdv/caixa`
- Parâmetros: `/produto/:slug`, `/pedido/:numero`

### Componentes React
- PascalCase: `PdvCaixaScreen`, `ProductCard`
- Sufixo descritivo: Screen, Card, Modal, Form

### Arquivos
- Componentes: `PdvCaixaScreen.tsx`
- Estilos: `pdv-caixa.module.css` ou Tailwind inline
- Hooks: `useCaixa.ts`, `useCarrinho.ts`
- Utils: `formatCurrency.ts`, `calcularFrete.ts`

### Variáveis/Funções
- camelCase: `valorTotal`, `adicionarItem()`
- Prefixos booleanos: `isLoading`, `hasError`, `canCancel`
- Eventos: `onClick`, `onSubmit`, `handleSubmit`

---

**Documento criado em:** Março/2026  
**Próxima revisão:** Após definição de tecnologias específicas  
**Responsável:** Equipe de Produto + UX
