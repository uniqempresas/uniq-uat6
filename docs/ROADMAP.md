# 🗺️ ROADMAP UNIQ Empresas - Vibe Sprint

**Versão:** 2.0 | **Data:** 28/03/2026 | **Início:** 30/03/2026  
**Propósito:** Cronograma completo de desenvolvimento módulo a módulo  
**Metodologia:** Vibe Sprint (2 semanas por módulo) + Co-criação com Beta Testers  
**Filosofia:** "Simples primeiro, complexo depois" - Liberar para testes a cada módulo

---

## 📊 Visão Geral

### 🎯 Objetivo
Desenvolver o UNIQ Empresas **módulo por módulo**, liberando funcionalidades para os 4 beta testers (Ótica, Gráfica, Confecção, Estética) a cada 2 semanas, coletando feedback e iterando rapidamente.

### 👥 Beta Testers (Co-criadores)
| Cliente | Segmento | Dor Principal | Módulos Prioritários |
|---------|----------|---------------|---------------------|
| **Ótica** | Varejo | Vendas e organização | CRM, Loja Virtual, Estoque |
| **Gráfica** | Serviço | Fluxo de pedidos confuso | CRM, PDV, Orçamentos |
| **Confecção** | Manufatura | Marca desconhecida | Loja Virtual, Marketing |
| **Estética** | Serviço | Agendamento manual | Agendamentos, Chatbot |

### 📅 Estrutura do Vibe Sprint
```
Semana 1: Research → PRD → Design Figma → Database Schema
Semana 2: Build (Vibe Coding) → Test → Deploy → Liberação Betas
Semana 3: Feedback → Ajustes → Próximo Módulo
```

---

## 🚀 CRONOGRAMA COMPLETO

### 📌 FASE 1: FOUNDATION (Base do Sistema)

---

## 🏃 Vibe Sprint 01: Core (Minha Empresa) 🏢

**Período:** 30/03/2026 - 10/04/2026 (10 dias úteis)  
**Tipo:** Foundation + Frontend + Backend  
**Status:** 🔴 **A INICIAR**  
**Prioridade:** 🔴 CRÍTICA

### 📝 Descrição
Sistema de autenticação, gestão da empresa e dashboard inicial. É a **base de tudo** - sem este módulo, nada funciona.

### 🎨 Especificação para Figma (Documentação)

#### Telas necessárias:
1. **Tela de Login**
   - [ ] Logo UNIQ no topo
   - [ ] Campos: Email, Senha
   - [ ] Botão "Entrar" (primário)
   - [ ] Links: "Esqueci senha", "Criar conta"
   - [ ] Estado de loading no botão
   - [ ] Mensagem de erro (toast)

2. **Tela de Cadastro (Multi-step)**
   - [ ] Step 1: Dados da empresa (CNPJ, Razão Social, Nome Fantasia)
   - [ ] Step 2: Dados do administrador (Nome, Email, Telefone, Senha)
   - [ ] Step 3: Tipo de negócio (Varejo, Serviço, Indústria, Atacado)
   - [ ] Indicador de progresso (1-2-3)
   - [ ] Preview do logo da empresa

3. **Tela "Minha Empresa" (Perfil)**
   - [ ] Formulário com dados completos
   - [ ] Upload de logo (drag & drop)
   - [ ] Busca automática de CEP
   - [ ] Campos: Endereço, Telefone, Email, Website
   - [ ] Cores da marca (primary, secondary)
   - [ ] Preview da loja em tempo real

4. **Dashboard Inicial**
   - [ ] Sidebar (colapsável) - 240px
   - [ ] Header: Logo empresa + Nome usuário + Avatar
   - [ ] Cards placeholder (4): "Você ainda não tem vendas"
   - [ ] Mensagem de boas-vindas personalizada
   - [ ] Checklist onboarding (Day 0-7)
   - [ ] Widget MEL (mensagem inicial)

5. **Configurações Gerais**
   - [ ] Aba: Dados da empresa
   - [ ] Aba: Usuários (placeholder)
   - [ ] Aba: Notificações (toggle WhatsApp/Email)
   - [ ] Aba: Integrações (placeholder)

#### Responsivo:
- **Desktop:** Sidebar fixa à esquerda
- **Tablet:** Sidebar colapsada
- **Mobile:** Menu hamburger (bottom ou top)

### 🗄️ Banco de Dados (Schema)

```sql
-- Empresas (Multi-tenant core) - Prefixo: me_ (Minha Empresa)
CREATE TABLE me_empresas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cnpj VARCHAR(18) UNIQUE NOT NULL,
  razao_social VARCHAR(255) NOT NULL,
  nome_fantasia VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  telefone VARCHAR(20),
  endereco JSONB,
  logo_url TEXT,
  cores JSONB DEFAULT '{"primary": "#3B82F6", "secondary": "#10B981"}',
  tipo_negocio VARCHAR(50), -- varejo, servico, industria, atacado
  status VARCHAR(20) DEFAULT 'ativo',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Usuários - Prefixo: me_
CREATE TABLE me_usuarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id UUID REFERENCES me_empresas(id) ON DELETE CASCADE,
  email VARCHAR(255) UNIQUE NOT NULL,
  nome VARCHAR(255) NOT NULL,
  telefone VARCHAR(20),
  avatar_url TEXT,
  perfil VARCHAR(50) DEFAULT 'admin', -- admin, gerente, vendedor
  status VARCHAR(20) DEFAULT 'ativo',
  ultimo_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Configurações por empresa - Prefixo: me_
CREATE TABLE me_configuracoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id UUID REFERENCES me_empresas(id) ON DELETE CASCADE,
  notificacoes_whatsapp BOOLEAN DEFAULT true,
  notificacoes_email BOOLEAN DEFAULT true,
  moeda VARCHAR(10) DEFAULT 'BRL',
  timezone VARCHAR(50) DEFAULT 'America/Sao_Paulo',
  configuracoes JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE me_empresas ENABLE ROW LEVEL SECURITY;
ALTER TABLE me_usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE me_configuracoes ENABLE ROW LEVEL SECURITY;

-- Política: usuários só veem dados da própria empresa
CREATE POLICY company_isolation ON me_empresas
  FOR ALL USING (id IN (
    SELECT empresa_id FROM me_usuarios WHERE auth.uid() = id
  ));
```

### 🔧 Funcionalidades

#### Semana 1: Setup & Design
- [ ] **Seg 30/03**: Research → PRD completo
- [ ] **Ter 31/03**: Criar telas no Figma (5 telas)
- [ ] **Qua 01/04**: Schema database + migrations
- [ ] **Qui 02/04**: Setup Supabase (auth, tables)
- [ ] **Sex 03/04**: Início codificação (Login/Cadastro)

#### Semana 2: Build & Deploy
- [ ] **Seg 06/04**: Tela Minha Empresa + Dashboard
- [ ] **Ter 07/04**: Sidebar + Navegação
- [ ] **Qua 08/04**: Configurações + Ajustes
- [ ] **Qui 09/04**: Testes + Responsivo
- [ ] **Sex 10/04**: **DEPLOY + Liberação para Betas**

### ✅ CHECKLIST DE ACEITAÇÃO (Core)

#### Funcionalidades
- [ ] Cadastro de empresa com CNPJ
- [ ] Login com email/senha
- [ ] Recuperação de senha
- [ ] Upload de logo funcional
- [ ] Busca de CEP automática
- [ ] Dashboard carrega sem erros
- [ ] Navegação entre telas fluida
- [ ] Logout funciona

#### Responsivo
- [ ] Desktop (1920px): OK
- [ ] Laptop (1366px): OK
- [ ] Tablet (768px): OK
- [ ] Mobile (375px): OK

#### Banco de Dados
- [ ] Tabela `companies` criada
- [ ] Tabela `users` criada
- [ ] RLS policies ativas
- [ ] Índices em campos de busca
- [ ] Teste: criação de empresa funciona

#### Testes com Betas
- [ ] Ótica consegue criar conta
- [ ] Gráfica consegue fazer login
- [ ] Confecção vê dashboard
- [ ] Estética acessa perfil

#### Feedback Coletado
- [ ] NPS do módulo (0-10): ___
- [ ] Bloqueios encontrados: ___
- [ ] Sugestões de melhoria: ___

---

## 🏃 Vibe Sprint 02: CRM (Gestão de Clientes) 👥

**Período:** 13/04/2026 - 24/04/2026 (10 dias úteis)  
**Tipo:** Frontend + Backend  
**Status:** 🔴 **PENDENTE**  
**Prioridade:** 🔴 CRÍTICA

### 📝 Descrição
Sistema completo de gestão de clientes: cadastro, pipeline de vendas Kanban, histórico de interações.

### 🎨 Especificação para Figma

#### Telas necessárias:
1. **Lista de Clientes**
   - [ ] Tabela com: Nome, Email, Telefone, Última compra, Tags
   - [ ] Filtros: Por data, valor, status, tags
   - [ ] Busca rápida (nome/email)
   - [ ] Botão "Novo Cliente"
   - [ ] Paginação
   - [ ] Empty state ilustrado

2. **Cadastro/Edição de Cliente**
   - [ ] Abas: Dados, Contatos, Histórico
   - [ ] Form: Nome, Email, Telefone, CPF/CNPJ
   - [ ] Múltiplos contatos (add/remove dinâmico)
   - [ ] Tags com chips coloridos
   - [ ] Endereço com busca CEP
   - [ ] Anotações (textarea)
   - [ ] Upload de foto do cliente

3. **Pipeline de Vendas (Kanban)**
   - [ ] 6 colunas: Novo Lead → Qualificação → Proposta → Negociação → Fechado Ganho → Fechado Perdido
   - [ ] Cards arrastáveis
   - [ ] Header de cada coluna com: Nome, Quantidade, Valor total
   - [ ] Botão "+ Nova Oportunidade" em cada coluna
   - [ ] Cores por etapa (azul → amarelo → verde/vermelho)

4. **Detalhe da Oportunidade (Drawer)**
   - [ ] Header: Nome cliente, Valor estimado, Probabilidade
   - [ ] Timeline de interações (histórico visual)
   - [ ] Form nova interação: Tipo (ligação, email, reunião, nota), Data, Descrição
   - [ ] Próximo follow-up
   - [ ] Ações: Ganhar, Perder, Mover, Editar

5. **Resumo do CRM (Dashboard)**
   - [ ] Cards: Total clientes, Novos este mês, Oportunidades abertas, Taxa conversão
   - [ ] Gráfico: Funil de vendas
   - [ ] Lista: Oportunidades que precisam de follow-up

### 🗄️ Banco de Dados

```sql
-- Clientes - Prefixo: crm_
CREATE TABLE crm_clientes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id UUID REFERENCES me_empresas(id) ON DELETE CASCADE,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  telefone VARCHAR(20),
  cpf_cnpj VARCHAR(18),
  endereco JSONB,
  tags TEXT[],
  anotacoes TEXT,
  foto_url TEXT,
  origem VARCHAR(50), -- indicacao, instagram, loja, etc
  status VARCHAR(20) DEFAULT 'ativo',
  total_compras DECIMAL(10,2) DEFAULT 0,
  ultima_compra TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Contatos adicionais do cliente - Prefixo: crm_
CREATE TABLE crm_contatos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cliente_id UUID REFERENCES crm_clientes(id) ON DELETE CASCADE,
  nome VARCHAR(255) NOT NULL,
  cargo VARCHAR(100),
  email VARCHAR(255),
  telefone VARCHAR(20),
  is_principal BOOLEAN DEFAULT false
);

-- Oportunidades/Pipeline - Prefixo: crm_
CREATE TABLE crm_oportunidades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id UUID REFERENCES me_empresas(id) ON DELETE CASCADE,
  cliente_id UUID REFERENCES crm_clientes(id) ON DELETE CASCADE,
  titulo VARCHAR(255) NOT NULL,
  valor_estimado DECIMAL(10,2),
  probabilidade INTEGER CHECK (probabilidade BETWEEN 0 AND 100),
  etapa VARCHAR(50) DEFAULT 'novo_lead', -- novo_lead, qualificacao, proposta, negociacao, ganho, perdido
  previsao_fechamento DATE,
  motivo_perda TEXT,
  responsavel_id UUID REFERENCES me_usuarios(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Interações/Histórico - Prefixo: crm_
CREATE TABLE crm_interacoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  oportunidade_id UUID REFERENCES crm_oportunidades(id) ON DELETE CASCADE,
  cliente_id UUID REFERENCES crm_clientes(id) ON DELETE CASCADE,
  tipo VARCHAR(50), -- ligacao, email, reuniao, nota, whatsapp
  descricao TEXT,
  data TIMESTAMP DEFAULT NOW(),
  responsavel_id UUID REFERENCES me_usuarios(id),
  proximo_followup TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_crm_clientes_empresa ON crm_clientes(empresa_id);
CREATE INDEX idx_crm_clientes_email ON crm_clientes(email);
CREATE INDEX idx_crm_oportunidades_empresa ON crm_oportunidades(empresa_id);
CREATE INDEX idx_crm_oportunidades_etapa ON crm_oportunidades(etapa);
CREATE INDEX idx_crm_interacoes_cliente ON crm_interacoes(cliente_id);
```

### 🔧 Funcionalidades

#### Semana 1
- [ ] PRD detalhado
- [ ] Telas Figma
- [ ] Schema + migrations
- [ ] CRUD Clientes

#### Semana 2
- [ ] Pipeline Kanban (drag & drop)
- [ ] Sistema de interações
- [ ] Dashboard CRM
- [ ] **DEPLOY + Liberação**

### ✅ CHECKLIST DE ACEITAÇÃO (CRM)

#### Funcionalidades
- [ ] Cadastrar cliente completo
- [ ] Adicionar múltiplos contatos
- [ ] Criar oportunidade
- [ ] Mover card no Kanban
- [ ] Registrar interação
- [ ] Marcar oportunidade como ganha/perdida
- [ ] Buscar cliente por nome/email
- [ ] Filtrar por tags

#### Pipeline
- [ ] 6 colunas visíveis
- [ ] Cards arrastáveis funcionam
- [ ] Total por coluna calculado
- [ ] Cores semânticas aplicadas

#### Testes com Betas
- [ ] Ótica cadastra 10 clientes
- [ ] Gráfica cria 5 oportunidades
- [ ] Pipeline reflete realidade do negócio
- [ ] Timeline de interações útil

#### Métricas
- [ ] Tempo médio cadastro cliente: ___ min
- [ ] NPS do módulo: ___
- [ ] Bloqueios: ___

---

## 🏃 Vibe Sprint 03: Loja Virtual (Storefront) 🏪

**Período:** 27/04/2026 - 08/05/2026 (10 dias úteis)  
**Tipo:** Frontend + Backend  
**Status:** 🔴 **PENDENTE**  
**Prioridade:** 🔴 CRÍTICA

### 📝 Descrição
Loja virtual pública para cada empresa. Catálogo de produtos, carrinho, checkout e tema customizável.

### 🎨 Especificação para Figma

#### Telas necessárias:

**PARTE 1: Admin da Loja (Dentro do UNIQ)**
1. **Configurações da Loja**
   - [ ] Nome da loja
   - [ ] Descrição curta
   - [ ] Upload logo
   - [ ] Upload banner
   - [ ] Seleção de tema (3 opções: Moderno, Clássico, Minimalista)
   - [ ] Cores: Primária, Secundária, Texto, Fundo
   - [ ] Domínio personalizado (placeholder)
   - [ ] SEO: Título, Descrição, Palavras-chave
   - [ ] Preview ao vivo (iframe)

2. **Lista de Produtos**
   - [ ] Grid de produtos: Foto, Nome, Preço, Estoque, Status
   - [ ] Filtros: Categoria, Status, Estoque baixo
   - [ ] Toggle: Ativo/Inativo
   - [ ] Botão "Novo Produto"
   - [ ] Ações: Editar, Duplicar, Excluir

3. **Cadastro de Produto**
   - [ ] Nome do produto
   - [ ] Descrição completa (rich text)
   - [ ] Fotos: Upload múltiplo + ordenar
   - [ ] Preço: De/Por (promoção opcional)
   - [ ] Custo (interno)
   - [ ] SKU, Código de barras
   - [ ] Estoque: Quantidade, Estoque mínimo
   - [ ] Variações: Cor, Tamanho (add/remove dinâmico)
   - [ ] Peso e dimensões
   - [ ] Categorias (multi-select)
   - [ ] Tags

**PARTE 2: Loja Pública (O que o cliente vê)**
4. **Home da Loja**
   - [ ] Header: Logo, busca, ícone carrinho
   - [ ] Banner principal
   - [ ] Grid de produtos (3 colunas desktop, 2 tablet, 1 mobile)
   - [ ] Filtros laterais: Categoria, Preço, Ordenar
   - [ ] Paginação
   - [ ] Footer: Contato, redes sociais, links

5. **Página do Produto**
   - [ ] Galeria de fotos (zoom)
   - [ ] Nome, preço, descrição
   - [ ] Seletor de variações (cor, tamanho)
   - [ ] Botão "Adicionar ao Carrinho"
   - [ ] Informações de entrega
   - [ ] Produtos relacionados

6. **Carrinho (Drawer)**
   - [ ] Lista de itens: Foto, nome, preço, quantidade
   - [ ] Controles: +/-, remover
   - [ ] Resumo: Subtotal, Frete (placeholder), Total
   - [ ] Botão "Finalizar Compra"
   - [ ] Empty state: "Carrinho vazio"

7. **Checkout**
   - [ ] Stepper: Carrinho → Dados → Pagamento → Confirmação
   - [ ] Form dados pessoais: Nome, Email, CPF, Telefone
   - [ ] Form endereço: CEP, Rua, Número, etc
   - [ ] Seleção pagamento: Cartão (form), Pix (código), Boleto
   - [ ] Resumo do pedido
   - [ ] Tela sucesso: Confirmação + número do pedido

### 🗄️ Banco de Dados

```sql
-- Categorias de produtos - Prefixo: ljv_ (Loja Virtual)
CREATE TABLE ljv_categorias (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id UUID REFERENCES me_empresas(id) ON DELETE CASCADE,
  nome VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE,
  descricao TEXT,
  imagem_url TEXT,
  categoria_pai_id UUID REFERENCES ljv_categorias(id), -- para subcategorias
  ordem INTEGER DEFAULT 0,
  ativo BOOLEAN DEFAULT true
);

-- Produtos - Prefixo: ljv_
CREATE TABLE ljv_produtos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id UUID REFERENCES me_empresas(id) ON DELETE CASCADE,
  sku VARCHAR(100) UNIQUE,
  nome VARCHAR(255) NOT NULL,
  descricao_curta VARCHAR(500),
  descricao_completa TEXT,
  preco DECIMAL(10,2) NOT NULL,
  preco_promocional DECIMAL(10,2),
  custo DECIMAL(10,2),
  estoque INTEGER DEFAULT 0,
  estoque_minimo INTEGER DEFAULT 5,
  peso DECIMAL(8,3), -- em kg
  dimensoes JSONB, -- {altura, largura, comprimento}
  imagens TEXT[],
  categoria_id UUID REFERENCES ljv_categorias(id),
  tags TEXT[],
  status VARCHAR(20) DEFAULT 'ativo', -- ativo, inativo, esgotado
  destaque BOOLEAN DEFAULT false,
  seo_title VARCHAR(70),
  seo_description VARCHAR(160),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Variações de produto (cor, tamanho, etc) - Prefixo: ljv_
CREATE TABLE ljv_variacoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  produto_id UUID REFERENCES ljv_produtos(id) ON DELETE CASCADE,
  sku VARCHAR(100),
  nome VARCHAR(255), -- ex: "Preto - M"
  atributos JSONB, -- {cor: "Preto", tamanho: "M"}
  preco DECIMAL(10,2),
  estoque INTEGER DEFAULT 0,
  imagem_url TEXT
);

-- Configurações da loja - Prefixo: ljv_
CREATE TABLE ljv_configuracoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id UUID REFERENCES me_empresas(id) ON DELETE CASCADE,
  nome_loja VARCHAR(255),
  descricao TEXT,
  logo_url TEXT,
  banner_url TEXT,
  tema VARCHAR(50) DEFAULT 'moderno',
  cores JSONB DEFAULT '{"primary": "#3B82F6", "secondary": "#10B981", "text": "#1F2937", "background": "#FFFFFF"}',
  dominio VARCHAR(255),
  seo JSONB,
  contato JSONB, -- {telefone, email, whatsapp}
  redes_sociais JSONB,
  politicas TEXT,
  horario_funcionamento JSONB,
  ativa BOOLEAN DEFAULT true
);

-- Pedidos - Prefixo: ljv_
CREATE TABLE ljv_pedidos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id UUID REFERENCES me_empresas(id) ON DELETE CASCADE,
  cliente_id UUID REFERENCES crm_clientes(id),
  numero VARCHAR(50) UNIQUE, -- ex: PED-000001
  status VARCHAR(50) DEFAULT 'pendente', -- pendente, pago, enviado, entregue, cancelado
  valor_produtos DECIMAL(10,2),
  valor_frete DECIMAL(10,2),
  valor_desconto DECIMAL(10,2) DEFAULT 0,
  valor_total DECIMAL(10,2),
  dados_cliente JSONB, -- snapshot: nome, email, cpf, telefone
  endereco_entrega JSONB,
  forma_pagamento VARCHAR(50),
  dados_pagamento JSONB, -- dados específicos por forma
  rastreamento VARCHAR(100),
  observacoes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Itens do pedido - Prefixo: ljv_
CREATE TABLE ljv_pedido_itens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pedido_id UUID REFERENCES ljv_pedidos(id) ON DELETE CASCADE,
  produto_id UUID REFERENCES ljv_produtos(id),
  variacao_id UUID REFERENCES ljv_variacoes(id),
  nome_produto VARCHAR(255),
  sku VARCHAR(100),
  quantidade INTEGER,
  preco_unitario DECIMAL(10,2),
  preco_total DECIMAL(10,2)
);

-- Carrinhos (temporário) - Prefixo: ljv_
CREATE TABLE ljv_carrinhos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id VARCHAR(255),
  cliente_id UUID REFERENCES crm_clientes(id),
  empresa_id UUID REFERENCES me_empresas(id) ON DELETE CASCADE,
  itens JSONB DEFAULT '[]', -- [{produto_id, variacao_id, qty, price}]
  expires_at TIMESTAMP DEFAULT NOW() + INTERVAL '7 days'
);

-- Índices
CREATE INDEX idx_ljv_produtos_empresa ON ljv_produtos(empresa_id);
CREATE INDEX idx_ljv_produtos_status ON ljv_produtos(status);
CREATE INDEX idx_ljv_produtos_categoria ON ljv_produtos(categoria_id);
CREATE INDEX idx_ljv_pedidos_empresa ON ljv_pedidos(empresa_id);
CREATE INDEX idx_ljv_pedidos_cliente ON ljv_pedidos(cliente_id);
CREATE INDEX idx_ljv_pedidos_status ON ljv_pedidos(status);
```

### 🔧 Funcionalidades

#### Semana 1
- [ ] PRD + Figma completo
- [ ] Schema + migrations
- [ ] Admin: Configurações da loja
- [ ] Admin: CRUD Produtos

#### Semana 2
- [ ] Loja pública: Home + Produto
- [ ] Carrinho + Checkout
- [ ] Sistema de pedidos
- [ ] **DEPLOY + Liberação**

### ✅ CHECKLIST DE ACEITAÇÃO (Loja Virtual)

#### Admin
- [ ] Configurar tema da loja
- [ ] Cadastrar produto com fotos
- [ ] Definir variações (cor/tamanho)
- [ ] Controlar estoque
- [ ] Ver pedidos recebidos

#### Loja Pública
- [ ] Loja acessível via URL
- [ ] Grid de produtos carrega
- [ ] Filtros funcionam
- [ ] Página do produto exibe corretamente
- [ ] Carrinho adiciona itens
- [ ] Checkout completo funciona
- [ ] Confirmação de pedido clara

#### Testes com Betas
- [ ] Confecção cadastra 10 produtos
- [ ] Ótica configura tema
- [ ] Simulação de compra completa
- [ ] Pedido aparece no painel

---

## 🏃 Vibe Sprint 04: Estoque 📦

**Período:** 11/05/2026 - 22/05/2026  
**Status:** 🔴 **PENDENTE**

### 🎨 Especificação para Figma
1. **Dashboard de Estoque**
   - [ ] Cards: Total produtos, Valor em estoque, Produtos em falta
   - [ ] Gráfico: Movimentação (entradas/saídas)
   - [ ] Lista: Produtos com estoque baixo (alerta vermelho)

2. **Entrada de Estoque**
   - [ ] Form: Produto, Quantidade, Preço custo, Fornecedor
   - [ ] Upload CSV para importação em massa
   - [ ] Histórico de entradas

3. **Ajuste de Estoque**
   - [ ] Motivo do ajuste
   - [ ] Quantidade anterior/nova
   - [ ] Responsável

### 🗄️ Schema Principal
```sql
-- Movimentações de estoque - Prefixo: stq_
CREATE TABLE stq_movimentacoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id UUID REFERENCES me_empresas(id),
  produto_id UUID REFERENCES ljv_produtos(id),
  tipo VARCHAR(20), -- entrada, saida, ajuste
  quantidade INTEGER NOT NULL,
  quantidade_anterior INTEGER,
  quantidade_nova INTEGER,
  motivo TEXT,
  fornecedor_id UUID,
  documento VARCHAR(100),
  responsavel_id UUID REFERENCES me_usuarios(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### ✅ CHECKLIST DE ACEITAÇÃO (Estoque)
- [ ] Entrada de produto aumenta estoque
- [ ] Venda diminui estoque automaticamente
- [ ] Alerta de estoque baixo visível
- [ ] Histórico de movimentações completo
- [ ] Importação CSV funciona

---

## 🏃 Vibe Sprint 05: Vendas PDV 💵

**Período:** 25/05/2026 - 05/06/2026  
**Status:** 🔴 **PENDENTE**

### 🎨 Especificação para Figma
1. **Tela Principal PDV**
   - [ ] Busca rápida de produtos
   - [ ] Grid de produtos com fotos
   - [ ] Carrinho lateral
   - [ ] Atalhos de teclado (F1-F12)

2. **Checkout PDV**
   - [ ] Resumo da venda
   - [ ] Múltiplas formas de pagamento
   - [ ] Cálculo de troco
   - [ ] Busca de cliente

3. **Controle de Caixa**
   - [ ] Abertura de caixa
   - [ ] Sangria (retirada)
   - [ ] Suprimento (entrada)
   - [ ] Fechamento com resumo

### ✅ CHECKLIST DE ACEITAÇÃO (PDV)
- [ ] Busca de produto rápida (<1s)
- [ ] Carrinho atualiza em tempo real
- [ ] Troco calculado corretamente
- [ ] Fechamento de caixa balanceia
- [ ] Relatório de vendas do dia

---

## 🏃 Vibe Sprint 06: Financeiro 💰

**Período:** 08/06/2026 - 19/06/2026  
**Status:** 🔴 **PENDENTE**

### 🎨 Especificação para Figma
1. **Dashboard Financeiro**
   - [ ] Saldo atual
   - [ ] Contas a receber
   - [ ] Contas a pagar
   - [ ] Gráfico de fluxo de caixa

2. **Contas a Receber/Pagar**
   - [ ] Lista com filtros
   - [ ] Lançamento rápido
   - [ ] Marcar como recebido/pago
   - [ ] Categorias personalizáveis

3. **Fluxo de Caixa**
   - [ ] Visão diária/mensal
   - [ ] Projeção
   - [ ] Exportar PDF/Excel

### ✅ CHECKLIST DE ACEITAÇÃO (Financeiro)
- [ ] Lançar conta a receber
- [ ] Lançar conta a pagar
- [ ] Marcar como pago/recebido
- [ ] Ver saldo projetado
- [ ] Exportar relatório

---

## 🏃 Vibe Sprint 07: Agendamentos 📅

**Período:** 22/06/2026 - 03/07/2026  
**Status:** 🔴 **PENDENTE**

### 🎨 Especificação para Figma
1. **Calendário**
   - [ ] Visões: Dia, Semana, Mês
   - [ ] Drag & drop de agendamentos
   - [ ] Cores por status/serviço

2. **Novo Agendamento**
   - [ ] Busca de cliente
   - [ ] Seleção de serviço
   - [ ] Seleção de profissional
   - [ ] Horários disponíveis

3. **Lembretes**
   - [ ] Configuração de notificações
   - [ ] Confirmação automática

### ✅ CHECKLIST DE ACEITAÇÃO (Agendamentos)
- [ ] Agendar serviço
- [ ] Ver calendário completo
- [ ] Reagendar com drag & drop
- [ ] Lembretes automáticos
- [ ] Bloquear horário indisponível

---

## 🏃 Vibe Sprint 08: MEL - IA Proativa 🤖

**Período:** 06/07/2026 - 17/07/2026  
**Status:** 🔴 **PENDENTE**

### 📝 Descrição
Consultor digital ativo que trabalha para o dono via WhatsApp. Relatórios, alertas e sugestões automáticas.

### 🎨 Especificação para Figma
1. **Dashboard MEL**
   - [ ] Mensagens do consultor
   - [ ] Alertas pendentes
   - [ ] Sugestões de ação
   - [ ] Configurações de notificação

2. **Relatórios Automáticos**
   - [ ] Relatório diário (WhatsApp)
   - [ ] Alerta de estoque baixo
   - [ ] Alerta de cliente inativo
   - [ ] Oportunidade perdida

### ✅ CHECKLIST DE ACEITAÇÃO (MEL)
- [ ] Recebe relatório diário no WhatsApp
- [ ] Alerta de estoque funciona
- [ ] Sugestão de follow-up enviada
- [ ] Configurar frequência de mensagens

---

## 🏃 Vibe Sprint 09: Serviços & Catálogo 🛠️

**Período:** 20/07/2026 - 31/07/2026  
**Status:** 🔴 **PENDENTE**

### 🎨 Especificação para Figma
1. **Cadastro de Serviços**
   - [ ] Nome, descrição, preço
   - [ ] Duração estimada
   - [ ] Profissionais que executam
   - [ ] Disponibilidade de horários

2. **Catálogo Público**
   - [ ] Grid de serviços
   - [ ] Botão "Agendar"

### ✅ CHECKLIST DE ACEITAÇÃO (Serviços)
- [ ] Cadastrar serviço
- [ ] Definir duração
- [ ] Vincular profissional
- [ ] Aparecer no catálogo público

---

## 🏃 Vibe Sprint 10: Fornecedores 📦

**Período:** 03/08/2026 - 14/08/2026  
**Status:** 🔴 **PENDENTE**

### 🎨 Especificação para Figma
1. **Lista de Fornecedores**
   - [ ] Cards com: Nome, CNPJ, Rating, Categoria
   - [ ] Busca e filtros
   - [ ] Status (ativo/inativo)

2. **Cadastro**
   - [ ] Dados da empresa
   - [ ] Contatos múltiplos
   - [ ] Dados bancários
   - [ ] Condições comerciais

3. **Histórico**
   - [ ] Compras realizadas
   - [ ] Produtos fornecidos

### ✅ CHECKLIST DE ACEITAÇÃO (Fornecedores)
- [ ] Cadastrar fornecedor
- [ ] Avaliar com estrelas
- [ ] Ver histórico de compras
- [ ] Vincular à entrada de estoque

---

## 🏃 Vibe Sprint 11: Colaboradores 👥

**Período:** 17/08/2026 - 28/08/2026  
**Status:** 🔴 **PENDENTE**

### 🎨 Especificação para Figma
1. **Lista**
   - [ ] Foto, nome, cargo, status
   - [ ] Permissões por módulo

2. **Cadastro**
   - [ ] Dados pessoais
   - [ ] Cargo e departamento
   - [ ] Matriz de permissões
   - [ ] Login temporário

3. **Permissões**
   - [ ] Admin: Tudo
   - [ ] Gerente: Módulos específicos
   - [ ] Vendedor: Vendas apenas

### ✅ CHECKLIST DE ACEITAÇÃO (Colaboradores)
- [ ] Cadastrar colaborador
- [ ] Definir permissões
- [ ] Login funciona
- [ ] Acesso restrito aplicado

---

## 🏃 Vibe Sprint 12: Chatbot 💬

**Período:** 31/08/2026 - 11/09/2026  
**Status:** 🔴 **PENDENTE**

### 🎨 Especificação para Figma
1. **Painel de Conversas**
   - [ ] Lista estilo WhatsApp Web
   - [ ] Status (online/offline)
   - [ ] Não lidas

2. **Janela de Chat**
   - [ ] Bubbles de mensagem
   - [ ] Indicador bot/humano
   - [ ] Quick replies

3. **Configurações**
   - [ ] Mensagens automáticas
   - [ ] FAQ
   - [ ] Palavras-chave

### ✅ CHECKLIST DE ACEITAÇÃO (Chatbot)
- [ ] Ver conversas
- [ ] Responder cliente
- [ ] Configurar resposta automática
- [ ] FAQ funciona

---

## 🏃 Vibe Sprint 13: Marketplace 🛒

**Período:** 14/09/2026 - 25/09/2026  
**Status:** 🔴 **PENDENTE**

### 🎨 Especificação para Figma
1. **Lista de Lojistas**
   - [ ] Grid de lojas
   - [ ] Filtros: Categoria, Localização

2. **Perfil do Lojista**
   - [ ] Logo, banner, descrição
   - [ ] Produtos do lojista
   - [ ] Avaliações

3. **Painel do Vendedor**
   - [ ] Estatísticas
   - [ ] Pedidos recebidos
   - [ ] Configurações

### ✅ CHECKLIST DE ACEITAÇÃO (Marketplace)
- [ ] Ver lojistas
- [ ] Entrar em loja específica
- [ ] Comprar de outro lojista
- [ ] Receber pedido como vendedor

---

## 🏃 Vibe Sprint 14: Métricas & Analytics 📊

**Período:** 28/09/2026 - 09/10/2026  
**Status:** 🔴 **PENDENTE**

### 🎨 Especificação para Figma
1. **Dashboard de Métricas**
   - [ ] Faturamento (dia, semana, mês, ano)
   - [ ] Comparativo períodos
   - [ ] Produtos mais vendidos
   - [ ] Clientes mais valiosos

2. **Relatórios**
   - [ ] Vendas detalhadas
   - [ ] Estoque
   - [ ] Financeiro
   - [ ] Exportar PDF/Excel

3. **Previsões**
   - [ ] Tendência de vendas
   - [ ] Estoque projetado

### ✅ CHECKLIST DE ACEITAÇÃO (Métricas)
- [ ] Ver faturamento em tempo real
- [ ] Comparar meses
- [ ] Identificar produto top
- [ ] Exportar relatório

---

## 📊 RESUMO DO CRONOGRAMA

| Sprint | Módulo | Início | Fim | Status |
|--------|--------|--------|-----|--------|
| 01 | Core (Minha Empresa) | 30/03 | 10/04 | 🔴 A iniciar |
| 02 | CRM | 13/04 | 24/04 | 🔴 Pendente |
| 03 | Loja Virtual | 27/04 | 08/05 | 🔴 Pendente |
| 04 | Estoque | 11/05 | 22/05 | 🔴 Pendente |
| 05 | PDV | 25/05 | 05/06 | 🔴 Pendente |
| 06 | Financeiro | 08/06 | 19/06 | 🔴 Pendente |
| 07 | Agendamentos | 22/06 | 03/07 | 🔴 Pendente |
| 08 | MEL (IA) | 06/07 | 17/07 | 🔴 Pendente |
| 09 | Serviços | 20/07 | 31/07 | 🔴 Pendente |
| 10 | Fornecedores | 03/08 | 14/08 | 🔴 Pendente |
| 11 | Colaboradores | 17/08 | 28/08 | 🔴 Pendente |
| 12 | Chatbot | 31/08 | 11/09 | 🔴 Pendente |
| 13 | Marketplace | 14/09 | 25/09 | 🔴 Pendente |
| 14 | Métricas | 28/09 | 09/10 | 🔴 Pendente |

**Total: 14 Sprints | 28 semanas | 7 meses | MVP Completo**

---

## 🎯 MÉTRICAS DE SUCESSO (Por Módulo)

### Checklist Geral de Liberação
Antes de liberar cada módulo para os betas:

- [ ] Todas as funcionalidades do checklist implementadas
- [ ] Testes em mobile (375px) e desktop (1366px)
- [ ] Todas as rotas acessíveis
- [ ] Banco de dados funcional
- [ ] Sem erros no console
- [ ] Deploy na Vercel funcionando
- [ ] Email/WhatsApp de liberação pronto

### Coleta de Feedback (Obrigatório)
Para cada beta tester:
- [ ] Conseguiu usar sem ajuda?
- [ ] Tempo para completar tarefa principal: ___ min
- [ ] Bugs encontrados: ___
- [ ] Sugestões: ___
- [ ] NPS (0-10): ___

---

## 📝 NOTAS IMPORTANTES

### 1. Banco de Dados
- **Cada módulo** traz seu próprio schema
- Não precisa definir tudo no início
- Evolui junto com as necessidades

### 2. Figma
- Documentação no PRD de cada módulo
- Criar telas antes de codar
- MVP: apenas telas essenciais

### 3. Feedback dos Betas
- Grupo WhatsApp com os 4
- Formulário Typeform (simples)
- Call de 15min na sexta (opcional)

### 4. Deploy
- Cada módulo = novo deploy
- Vercel: automático no git push
- URL de preview para testes

---

**🧭 UNIQ: O Norte para Empreendedores — Comece Por Aqui**

**Última atualização:** 28/03/2026  
**Próximo passo:** Iniciar Vibe Sprint 01 (Core) em 30/03/2026
