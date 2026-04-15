# 🗺️ ROADMAP UNIQ Empresas - Vibe Sprint

**Versão:** 3.0 | **Data:** 15/04/2026 | **Atualização:** 15/04/2026  
**Propósito:** Cronograma completo de desenvolvimento módulo a módulo  
**Metodologia:** Vibe Sprint (2 semanas por módulo) + Co-criação com Beta Testers  
**Filosofia:** "Simples primeiro, complexo depois" - Liberar para testes a cada módulo

---

## 📊 STATUS ATUAL DO PROJETO (15/04/2026)

### ✅ Conquistas
- **Frontend de TODOS os 14 módulos implementado**
- **186 linhas de rotas** configuradas no React Router
- **UI/UX completa** com shadcn/ui + Tailwind + Tremor
- **Design system UNIQ** estabelecido
- **Sidebar corrigida** (cor escura #1f2937)
- **6 novos módulos implementados** nesta sessão:
  - Serviços (com catálogo público)
  - Fornecedores (completo com rating, contatos, dados bancários)
  - Colaboradores (com matriz de permissões)
  - Chatbot (estilo WhatsApp Web)
  - Marketplace (completo com carrinho cross-lojista)
  - Métricas (dashboard com Tremor charts)

### ⚠️ Pendências (Próximas Etapas)
- Banco de dados (Prisma + Supabase) - **PRÓXIMO PASSO**
- APIs REST para persistência
- Autenticação com JWT/Supabase Auth
- Integração com pagamentos (Mercado Pago)

### 📅 Próximos Passos
1. Configurar Prisma Schema
2. Criar migrations no Supabase
3. Implementar APIs REST
4. Conectar frontend com backend
5. **Nota:** Frontend COMPLETO. Próxima etapa: Backend + Banco de Dados

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
**Status:** ✅ IMPLEMENTADO (Frontend)  
**Data:** 03/04/2026
**Nota:** Autenticação, Dashboard e Configurações implementados. Backend pendente.
**Prioridade:** 🔴 CRÍTICA

### 📝 Descrição
Sistema de autenticação, gestão da empresa e dashboard inicial. É a **base de tudo** - sem este módulo, nada funciona.

### 🎨 Especificação para Figma (Documentação)

#### Telas necessárias:
1. **Tela de Login**
   - [x] Logo UNIQ no topo
   - [x] Campos: Email, Senha
   - [x] Botão "Entrar" (primário)
   - [x] Links: "Esqueci senha", "Criar conta"
   - [x] Estado de loading no botão
   - [x] Mensagem de erro (toast)

2. **Tela de Cadastro (Multi-step)**
   - [x] Step 1: Dados da empresa (CNPJ, Razão Social, Nome Fantasia)
   - [x] Step 2: Dados do administrador (Nome, Email, Telefone, Senha)
   - [x] Step 3: Tipo de negócio (Varejo, Serviço, Indústria, Atacado)
   - [x] Indicador de progresso (1-2-3)
   - [x] Preview do logo da empresa

3. **Tela "Minha Empresa" (Perfil)**
   - [x] Formulário com dados completos
   - [x] Upload de logo (drag & drop)
   - [x] Busca automática de CEP
   - [x] Campos: Endereço, Telefone, Email, Website
   - [x] Cores da marca (primary, secondary)
   - [x] Preview da loja em tempo real

4. **Dashboard Inicial**
   - [x] Sidebar (colapsável) - 240px
   - [x] Header: Logo empresa + Nome usuário + Avatar
   - [x] Cards placeholder (4): "Você ainda não tem vendas"
   - [x] Mensagem de boas-vindas personalizada
   - [x] Checklist onboarding (Day 0-7)
   - [x] Widget MEL (mensagem inicial)

5. **Configurações Gerais**
   - [x] Aba: Dados da empresa
   - [x] Aba: Usuários (placeholder)
   - [x] Aba: Notificações (toggle WhatsApp/Email)
   - [x] Aba: Integrações (placeholder)

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
- [x] **Seg 30/03**: Research → PRD completo
- [x] **Ter 31/03**: Criar telas no Figma (5 telas)
- [x] **Qua 01/04**: Schema database + migrations
- [x] **Qui 02/04**: Setup Supabase (auth, tables)
- [x] **Sex 03/04**: Início codificação (Login/Cadastro)

#### Semana 2: Build & Deploy
- [x] **Seg 06/04**: Tela Minha Empresa + Dashboard
- [x] **Ter 07/04**: Sidebar + Navegação
- [x] **Qua 08/04**: Configurações + Ajustes
- [x] **Qui 09/04**: Testes + Responsivo
- [x] **Sex 10/04**: **DEPLOY + Liberação para Betas**

### ✅ CHECKLIST DE ACEITAÇÃO (Core)

#### Funcionalidades
- [x] Cadastro de empresa com CNPJ
- [x] Login com email/senha
- [x] Recuperação de senha
- [x] Upload de logo funcional
- [x] Busca de CEP automática
- [x] Dashboard carrega sem erros
- [x] Navegação entre telas fluida
- [x] Logout funciona

#### Responsivo
- [x] Desktop (1920px): OK
- [x] Laptop (1366px): OK
- [x] Tablet (768px): OK
- [x] Mobile (375px): OK

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
**Status:** ✅ IMPLEMENTADO (Frontend)  
**Data:** 03/04/2026
**Nota:** CRM completo (Dashboard, Clientes, Pipeline). Backend pendente.
**Prioridade:** 🔴 CRÍTICA

### 📝 Descrição
Sistema completo de gestão de clientes: cadastro, pipeline de vendas Kanban, histórico de interações.

### 🎨 Especificação para Figma

#### Telas necessárias:
1. **Lista de Clientes**
   - [x] Tabela com: Nome, Email, Telefone, Última compra, Tags
   - [x] Filtros: Por data, valor, status, tags
   - [x] Busca rápida (nome/email)
   - [x] Botão "Novo Cliente"
   - [x] Paginação
   - [x] Empty state ilustrado

2. **Cadastro/Edição de Cliente**
   - [x] Abas: Dados, Contatos, Histórico
   - [x] Form: Nome, Email, Telefone, CPF/CNPJ
   - [x] Múltiplos contatos (add/remove dinâmico)
   - [x] Tags com chips coloridos
   - [x] Endereço com busca CEP
   - [x] Anotações (textarea)
   - [x] Upload de foto do cliente

3. **Pipeline de Vendas (Kanban)**
   - [x] 6 colunas: Novo Lead → Qualificação → Proposta → Negociação → Fechado Ganho → Fechado Perdido
   - [x] Cards arrastáveis
   - [x] Header de cada coluna com: Nome, Quantidade, Valor total
   - [x] Botão "+ Nova Oportunidade" em cada coluna
   - [x] Cores por etapa (azul → amarelo → verde/vermelho)

4. **Detalhe da Oportunidade (Drawer)**
   - [x] Header: Nome cliente, Valor estimado, Probabilidade
   - [x] Timeline de interações (histórico visual)
   - [x] Form nova interação: Tipo (ligação, email, reunião, nota), Data, Descrição
   - [x] Próximo follow-up
   - [x] Ações: Ganhar, Perder, Mover, Editar

5. **Resumo do CRM (Dashboard)**
   - [x] Cards: Total clientes, Novos este mês, Oportunidades abertas, Taxa conversão
   - [x] Gráfico: Funil de vendas
   - [x] Lista: Oportunidades que precisam de follow-up

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
- [x] PRD detalhado
- [x] Telas Figma
- [x] Schema + migrations
- [x] CRUD Clientes

#### Semana 2
- [x] Pipeline Kanban (drag & drop)
- [x] Sistema de interações
- [x] Dashboard CRM
- [x] **DEPLOY + Liberação**

### ✅ CHECKLIST DE ACEITAÇÃO (CRM)

#### Funcionalidades
- [x] Cadastrar cliente completo
- [x] Adicionar múltiplos contatos
- [x] Criar oportunidade
- [x] Mover card no Kanban
- [x] Registrar interação
- [x] Marcar oportunidade como ganha/perdida
- [x] Buscar cliente por nome/email
- [x] Filtrar por tags

#### Pipeline
- [x] 6 colunas visíveis
- [x] Cards arrastáveis funcionam
- [x] Total por coluna calculado
- [x] Cores semânticas aplicadas

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
**Status:** ✅ IMPLEMENTADO (Frontend)  
**Data:** 03/04/2026
**Nota:** Loja Virtual completa (Admin + Frontend). Backend pendente.
**Prioridade:** 🔴 CRÍTICA

### 📝 Descrição
Loja virtual pública para cada empresa. Catálogo de produtos, carrinho, checkout e tema customizável.

### 🎨 Especificação para Figma

#### Telas necessárias:

**PARTE 1: Admin da Loja (Dentro do UNIQ)**
1. **Configurações da Loja**
   - [x] Nome da loja
   - [x] Descrição curta
   - [x] Upload logo
   - [x] Upload banner
   - [x] Seleção de tema (3 opções: Moderno, Clássico, Minimalista)
   - [x] Cores: Primária, Secundária, Texto, Fundo
   - [x] Domínio personalizado (placeholder)
   - [x] SEO: Título, Descrição, Palavras-chave
   - [x] Preview ao vivo (iframe)

2. **Lista de Produtos**
   - [x] Grid de produtos: Foto, Nome, Preço, Estoque, Status
   - [x] Filtros: Categoria, Status, Estoque baixo
   - [x] Toggle: Ativo/Inativo
   - [x] Botão "Novo Produto"
   - [x] Ações: Editar, Duplicar, Excluir

3. **Cadastro de Produto**
   - [x] Nome do produto
   - [x] Descrição completa (rich text)
   - [x] Fotos: Upload múltiplo + ordenar
   - [x] Preço: De/Por (promoção opcional)
   - [x] Custo (interno)
   - [x] SKU, Código de barras
   - [x] Estoque: Quantidade, Estoque mínimo
   - [x] Variações: Cor, Tamanho (add/remove dinâmico)
   - [x] Peso e dimensões
   - [x] Categorias (multi-select)
   - [x] Tags

**PARTE 2: Loja Pública (O que o cliente vê)**
4. **Home da Loja**
   - [x] Header: Logo, busca, ícone carrinho
   - [x] Banner principal
   - [x] Grid de produtos (3 colunas desktop, 2 tablet, 1 mobile)
   - [x] Filtros laterais: Categoria, Preço, Ordenar
   - [x] Paginação
   - [x] Footer: Contato, redes sociais, links

5. **Página do Produto**
   - [x] Galeria de fotos (zoom)
   - [x] Nome, preço, descrição
   - [x] Seletor de variações (cor, tamanho)
   - [x] Botão "Adicionar ao Carrinho"
   - [x] Informações de entrega
   - [x] Produtos relacionados

6. **Carrinho (Drawer)**
   - [x] Lista de itens: Foto, nome, preço, quantidade
   - [x] Controles: +/-, remover
   - [x] Resumo: Subtotal, Frete (placeholder), Total
   - [x] Botão "Finalizar Compra"
   - [x] Empty state: "Carrinho vazio"

7. **Checkout**
   - [x] Stepper: Carrinho → Dados → Pagamento → Confirmação
   - [x] Form dados pessoais: Nome, Email, CPF, Telefone
   - [x] Form endereço: CEP, Rua, Número, etc
   - [x] Seleção pagamento: Cartão (form), Pix (código), Boleto
   - [x] Resumo do pedido
   - [x] Tela sucesso: Confirmação + número do pedido

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
- [x] PRD + Figma completo
- [x] Schema + migrations
- [x] Admin: Configurações da loja
- [x] Admin: CRUD Produtos

#### Semana 2
- [x] Loja pública: Home + Produto
- [x] Carrinho + Checkout
- [x] Sistema de pedidos
- [x] **DEPLOY + Liberação**

### ✅ CHECKLIST DE ACEITAÇÃO (Loja Virtual)

#### Admin
- [x] Configurar tema da loja
- [x] Cadastrar produto com fotos
- [x] Definir variações (cor/tamanho)
- [x] Controlar estoque
- [x] Ver pedidos recebidos

#### Loja Pública
- [x] Loja acessível via URL
- [x] Grid de produtos carrega
- [x] Filtros funcionam
- [x] Página do produto exibe corretamente
- [x] Carrinho adiciona itens
- [x] Checkout completo funciona
- [x] Confirmação de pedido clara

#### Testes com Betas
- [ ] Confecção cadastra 10 produtos
- [ ] Ótica configura tema
- [ ] Simulação de compra completa
- [ ] Pedido aparece no painel

---

## 🏃 Vibe Sprint 04: Estoque 📦

**Período:** 11/05/2026 - 22/05/2026  
**Status:** ✅ IMPLEMENTADO (Frontend)  
**Data:** 03/04/2026
**Nota:** Estoque completo (Dashboard, Produtos, Movimentações). Backend pendente.

### 🎨 Especificação para Figma
1. **Dashboard de Estoque**
   - [x] Cards: Total produtos, Valor em estoque, Produtos em falta
   - [x] Gráfico: Movimentação (entradas/saídas)
   - [x] Lista: Produtos com estoque baixo (alerta vermelho)

2. **Entrada de Estoque**
   - [x] Form: Produto, Quantidade, Preço custo, Fornecedor
   - [x] Upload CSV para importação em massa
   - [x] Histórico de entradas

3. **Ajuste de Estoque**
   - [x] Motivo do ajuste
   - [x] Quantidade anterior/nova
   - [x] Responsável

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
- [x] Entrada de produto aumenta estoque
- [x] Venda diminui estoque automaticamente
- [x] Alerta de estoque baixo visível
- [x] Histórico de movimentações completo
- [x] Importação CSV funciona

---

## 🏃 Vibe Sprint 05: Vendas PDV 💵

**Período:** 25/05/2026 - 05/06/2026  
**Status:** ✅ IMPLEMENTADO (Frontend)  
**Data:** 03/04/2026
**Nota:** PDV completo (Tela principal, Abertura/Fechamento Caixa). Backend pendente.

### 🎨 Especificação para Figma
1. **Tela Principal PDV**
   - [x] Busca rápida de produtos
   - [x] Grid de produtos com fotos
   - [x] Carrinho lateral
   - [x] Atalhos de teclado (F1-F12)

2. **Checkout PDV**
   - [x] Resumo da venda
   - [x] Múltiplas formas de pagamento
   - [x] Cálculo de troco
   - [x] Busca de cliente

3. **Controle de Caixa**
   - [x] Abertura de caixa
   - [x] Sangria (retirada)
   - [x] Suprimento (entrada)
   - [x] Fechamento com resumo

### ✅ CHECKLIST DE ACEITAÇÃO (PDV)
- [x] Busca de produto rápida (<1s)
- [x] Carrinho atualiza em tempo real
- [x] Troco calculado corretamente
- [x] Fechamento de caixa balanceia
- [x] Relatório de vendas do dia

---

## 🏃 Vibe Sprint 06: Financeiro 💰

**Período:** 08/06/2026 - 19/06/2026  
**Status:** ✅ IMPLEMENTADO (Frontend)  
**Data:** 03/04/2026
**Nota:** Financeiro completo (Dashboard, Receber, Pagar). Backend pendente.

### 🎨 Especificação para Figma
1. **Dashboard Financeiro**
   - [x] Saldo atual
   - [x] Contas a receber
   - [x] Contas a pagar
   - [x] Gráfico de fluxo de caixa

2. **Contas a Receber/Pagar**
   - [x] Lista com filtros
   - [x] Lançamento rápido
   - [x] Marcar como recebido/pago
   - [x] Categorias personalizáveis

3. **Fluxo de Caixa**
   - [x] Visão diária/mensal
   - [x] Projeção
   - [x] Exportar PDF/Excel

### ✅ CHECKLIST DE ACEITAÇÃO (Financeiro)
- [x] Lançar conta a receber
- [x] Lançar conta a pagar
- [x] Marcar como pago/recebido
- [x] Ver saldo projetado
- [x] Exportar relatório

---

## 🏃 Vibe Sprint 07: Agendamentos 📅

**Período:** 22/06/2026 - 03/07/2026  
**Status:** ✅ IMPLEMENTADO (Frontend)  
**Data:** 03/04/2026
**Nota:** Agenda completa (Calendário, Agendamentos, Compromissos). Backend pendente.

### 🎨 Especificação para Figma
1. **Calendário**
   - [x] Visões: Dia, Semana, Mês
   - [x] Drag & drop de agendamentos
   - [x] Cores por status/serviço

2. **Novo Agendamento**
   - [x] Busca de cliente
   - [x] Seleção de serviço
   - [x] Seleção de profissional
   - [x] Horários disponíveis

3. **Lembretes**
   - [x] Configuração de notificações
   - [x] Confirmação automática

### ✅ CHECKLIST DE ACEITAÇÃO (Agendamentos)
- [x] Agendar serviço
- [x] Ver calendário completo
- [x] Reagendar com drag & drop
- [x] Lembretes automáticos
- [x] Bloquear horário indisponível

---

## 🏃 Vibe Sprint 08: MEL - IA Proativa 🤖

**Período:** 06/07/2026 - 17/07/2026  
**Status:** ✅ IMPLEMENTADO (Frontend)  
**Data:** 03/04/2026
**Nota:** MEL completo (Dashboard, Relatórios). Backend pendente.

### 📝 Descrição
Consultor digital ativo que trabalha para o dono via WhatsApp. Relatórios, alertas e sugestões automáticas.

### 🎨 Especificação para Figma
1. **Dashboard MEL**
   - [x] Mensagens do consultor
   - [x] Alertas pendentes
   - [x] Sugestões de ação
   - [x] Configurações de notificação

2. **Relatórios Automáticos**
   - [x] Relatório diário (WhatsApp)
   - [x] Alerta de estoque baixo
   - [x] Alerta de cliente inativo
   - [x] Oportunidade perdida

### ✅ CHECKLIST DE ACEITAÇÃO (MEL)
- [x] Recebe relatório diário no WhatsApp
- [x] Alerta de estoque funciona
- [x] Sugestão de follow-up enviada
- [x] Configurar frequência de mensagens

---

## 🏃 Vibe Sprint 09: Serviços & Catálogo 🛠️

**Período:** 20/07/2026 - 31/07/2026  
**Status:** ✅ IMPLEMENTADO (Frontend)  
**Data:** 15/04/2026
**Nota:** Serviços completo (CRUD, catálogo público, DurationSelect, ProfissionaisSelect). Backend pendente.

### 🎨 Especificação para Figma (Atualizado)
1. **Cadastro de Serviços**
   - [x] Nome, descrição, preço
   - [x] Duração estimada (selector 15/30/45/60/90/120 min)
   - [x] Profissionais que executam (multi-select)
   - [x] Categoria
   - [x] Status (ativo/inativo/destaque)

2. **Catálogo Público**
   - [x] Grid de serviços
   - [x] Botão "Agendar" → leva para Agenda
   - [x] Filtros por categoria
   - [x] Apenas serviços ativos

### ✅ CHECKLIST DE ACEITAÇÃO (Serviços)
- [x] Cadastrar serviço
- [x] Definir duração
- [x] Vincular profissional
- [x] Aparecer no catálogo público
- [x] Botão Agendar redireciona

---

## 🏃 Vibe Sprint 10: Fornecedores 📦

**Período:** 03/08/2026 - 14/08/2026  
**Status:** ✅ IMPLEMENTADO (Frontend)  
**Data:** 15/04/2026
**Nota:** Fornecedores completo (Grid, Cadastro 5 abas, Drawer detalhes, Rating, Contatos, Dados bancários). Backend pendente.

### 🎨 Especificação para Figma (Atualizado)
1. **Lista de Fornecedores**
   - [x] Cards com: Nome, CNPJ, Rating (estrelas), Categoria
   - [x] Busca e filtros (status, categoria)
   - [x] Tabs: Todos/Ativos/Inativos/Pendentes
   - [x] Sistema de avaliação por estrelas

2. **Cadastro (5 abas)**
   - [x] Dados Básicos (PJ/PF, CNPJ/CPF, razão social, nome fantasia, categoria, rating, logo)
   - [x] Endereço (CEP com busca automática)
   - [x] Contatos (múltiplos, add/remove dinâmico)
   - [x] Dados Bancários (múltiplos, Pix)
   - [x] Configurações (condição pagamento, observações, status)
   - [x] Preview em tempo real do card

3. **Detalhes (Drawer)**
   - [x] Abas: Resumo, Contatos, Histórico de Compras
   - [x] Estatísticas: total pedidos, valor total, ticket médio

### ✅ CHECKLIST DE ACEITAÇÃO (Fornecedores)
- [x] Cadastrar fornecedor completo
- [x] Avaliar com estrelas (1-5)
- [x] Múltiplos contatos e contas bancárias
- [x] Busca CEP automática
- [x] Ver histórico de compras
- [x] Preview em tempo real no formulário

---

## 🏃 Vibe Sprint 11: Colaboradores 👥

**Período:** 17/08/2026 - 28/08/2026  
**Status:** ✅ IMPLEMENTADO (Frontend)  
**Data:** 15/04/2026
**Nota:** Colaboradores completo (Lista cards/tabela, cadastro, matriz de permissões granulares 7x4). Backend pendente.

### 🎨 Especificação para Figma (Atualizado)
1. **Lista**
   - [x] Toggle Cards/Tabela (persiste localStorage)
   - [x] Foto, nome, cargo, status
   - [x] Permissões por módulo (badges de módulos)
   - [x] Máximo 20 colaboradores (badge "X de 20")

2. **Cadastro (3 seções)**
   - [x] Dados Pessoais (nome, email, telefone, cargo)
   - [x] Permissões (RoleSelector + ModuleCheckbox list)
   - [x] Configurações (notificações email toggle)

3. **Matriz de Permissões (7 módulos x 4 ações)**
   - [x] Módulos: CRM, Financeiro, Estoque, Vendas, Loja, Agenda, Config
   - [x] Ações: Ver, Criar, Editar, Excluir
   - [x] Botões: Selecionar Tudo, Limpar, Restaurar Padrão

### ✅ CHECKLIST DE ACEITAÇÃO (Colaboradores)
- [x] Cadastrar colaborador
- [x] Definir permissões granulares por módulo
- [x] Visualização cards/tabela
- [x] Maximum 20 limite
- [x] Ativar/desativar colaborador

---

## 🏃 Vibe Sprint 12: Chatbot 💬

**Período:** 31/08/2026 - 11/09/2026  
**Status:** ✅ IMPLEMENTADO (Frontend)  
**Data:** 15/04/2026
**Nota:** Chatbot completo (estilo WhatsApp Web, painel admin, respostas automáticas, FAQ). Backend pendente.

### 🎨 Especificação para Figma (Atualizado)
1. **Painel de Conversas (Layout WhatsApp Web)**
   - [x] Lista estilo WhatsApp Web (lista esquerda 300px + chat direita)
   - [x] Status (online/offline/ocupado) com badge colorida
   - [x] Não lidas (unread badge)
   - [x] Avatar, nome, última mensagem, hora

2. **Janela de Chat**
   - [x] Bubbles de mensagem (verde enviada, cinza recebida)
   - [x] Indicador bot/humano
   - [x] Simulação de digitação do bot
   - [x] ChatInput com enviar (Enter)

3. **Configurações**
   - [x] Respostas automáticas (CRUD)
   - [x] FAQ (CRUD, ordenação)
   - [x] Palavras-chave
   - [x] Estatísticas do bot

### ✅ CHECKLIST DE ACEITAÇÃO (Chatbot)
- [x] Ver conversas estilo WhatsApp
- [x] Responder cliente
- [x] Configurar resposta automática
- [x] FAQ редагування (editor)
- [x] Estatísticas do chatbot

---

## 🏃 Vibe Sprint 13: Marketplace 🛒

**Período:** 14/09/2026 - 25/09/2026  
**Status:** ✅ IMPLEMENTADO (Frontend)  
**Data:** 15/04/2026
**Nota:** Marketplace completo (carrinho cross-lojista, checkout, painel do vendedor). Backend pendente.

### 🎨 Especificação para Figma (Atualizado)
1. **Lista de Lojistas**
   - [x] Grid de lojistas com logo, nome, categoria, nota, total vendas
   - [x] Filtros: categoria, nota, destaque

2. **Perfil do Lojista**
   - [x] Logo, banner, descrição, contato
   - [x] Grid de produtos do lojista
   - [x] Avaliações

3. **Carrinho Unificado (Cross-lojista)**
   - [x] Itens de múltiplos lojistas agrupados
   - [x] Subtotal + Frete por lojista (R$ 15 mock)
   - [x] Total geral
   - [x] Persistência localStorage

4. **Checkout**
   - [x] Dados do cliente
   - [x] Endereço de entrega
   - [x] Forma de pagamento
   - [x] Simulação processamento → sucesso
   - [x] Limpa carrinho após sucesso

5. **Painel do Vendedor**
   - [x] Estatísticas (vendas, receita, produtos, avaliação)
   - [x] Pedidos recebidos (lista com status)
   - [x] Atualizar status (pendente → pago → enviado → entregue)

### ✅ CHECKLIST DE ACEITAÇÃO (Marketplace)
- [x] Ver lojistas e filtrar
- [x] Entrar em loja específica
- [x] Adicionar produtos de múltiplos lojistas no carrinho
- [x] Checkout completo com simulação
- [x] Receber pedido como vendedor
- [x] Atualizar status do pedido

---

## 🏃 Vibe Sprint 14: Métricas & Analytics 📊

**Período:** 28/09/2026 - 09/10/2026  
**Status:** ✅ IMPLEMENTADO (Frontend)  
**Data:** 15/04/2026
**Nota:** Métricas completo (Dashboard KPIs, 5 relatórios, gráficos Tremor). Backend pendente.

### 🎨 Especificação para Figma (Atualizado)
1. **Dashboard de Métricas (6 KPIs)**
   - [x] Faturamento (dia, semana, mês, ano)
   - [x] Total de vendas
   - [x] Ticket médio
   - [x] Novos clientes
   - [x] Taxa de conversão
   - [x] Ocupação (agendamentos)
   - [x] Tendência (↑↓%) vs período anterior

2. **Gráficos (Tremor @tremor/react)**
   - [x] AreaChart (tendência vendas)
   - [x] BarChart (top produtos)
   - [x] DonutChart (distribuição clientes)
   - [x] Heatmap (agendamentos por horário)
   - [x] LineChart (séries temporais)

3. **Relatórios (6 páginas)**
   - [x] Vendas (filtros, gráfico tendência, tabela detalhada)
   - [x] Financeiro (receitas, despesas, fluxo caixa)
   - [x] Clientes (novos, ativos, inativos, distribuição)
   - [x] Agendamentos (comparecimento, ocupação, heatmap)
   - [x] Produtos (top 10, estoque baixo)
   - [x] DateRangePicker com comparação de períodos

### ✅ CHECKLIST DE ACEITAÇÃO (Métricas)
- [x] Ver faturamento em tempo real (KPIs)
- [x] Comparar períodos (date range picker)
- [x] Gráficos interativos (hover, tooltips)
- [x] Identificar produto top (bar chart)
- [x] Exportar relatório (CSV/Excel)

---

## 📊 RESUMO DO CRONOGRAMA (ATUALIZADO 15/04/2026)

| Sprint | Módulo | Início | Fim | Status |
|--------|--------|--------|-----|--------|
| 01 | Core (Minha Empresa) | 30/03 | 10/04 | ✅ Implementado (Frontend) |
| 02 | CRM | 13/04 | 24/04 | ✅ Implementado (Frontend) |
| 03 | Loja Virtual | 27/04 | 08/05 | ✅ Implementado (Frontend) |
| 04 | Estoque | 11/05 | 22/05 | ✅ Implementado (Frontend) |
| 05 | PDV | 25/05 | 05/06 | ✅ Implementado (Frontend) |
| 06 | Financeiro | 08/06 | 19/06 | ✅ Implementado (Frontend) |
| 07 | Agendamentos | 22/06 | 03/07 | ✅ Implementado (Frontend) |
| 08 | MEL (IA) | 06/07 | 17/07 | ✅ Implementado (Frontend) |
| 09 | Serviços | 20/07 | 31/07 | ✅ Implementado (Frontend) |
| 10 | Fornecedores | 03/08 | 14/08 | ✅ Implementado (Frontend) |
| 11 | Colaboradores | 17/08 | 28/08 | ✅ Implementado (Frontend) |
| 12 | Chatbot | 31/08 | 11/09 | ✅ Implementado (Frontend) |
| 13 | Marketplace | 14/09 | 25/09 | ✅ Implementado (Frontend) |
| 14 | Métricas | 28/09 | 09/10 | ✅ Implementado (Frontend) |

**FRONTEND COMPLETO: 14/14 módulos ✅**

**PRÓXIMA ETAPA: Backend (Prisma + Supabase)**

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

**Última atualização:** 15/04/2026  
**Status:** Frontend COMPLETO (14/14 módulos)  
**Próximo passo:** Configurar Backend (Prisma + Supabase) para o módulo Core

---

## 📋 LEITURA COMPLEMENTAR

### Arquivos de Referência Criados
- `docs/Metodologia_vibe-coding.md` — Metodologia SDD
- `docs/CONTEXTO_PROJETO.md` — Visão estratégica
- `tracking/specs/SPEC-*.md` — SPECs técnicas de cada módulo
- `tracking/modelos/PRD-*.md` — PRDs detalhados

### Stack Tecnológica
- Frontend: React 19 + TypeScript + Vite + Tailwind + shadcn/ui + Tremor
- Backend (próximo): Prisma + Supabase (PostgreSQL)
- Deploy: Vercel
