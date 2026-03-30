---
date: 2026-03-30T10:00:00-03:00
researcher: vibe-researcher
branch: master
repository: uniq-empresas
topic: "Vibe Sprint 01: Core (Minha Empresa)"
tags: [sprint, core, autenticacao, dashboard, perfil, multi-tenant, supabase]
status: complete
period: "30/03/2026 - 10/04/2026"
priority: "CRÍTICA"
---

# PRD - Vibe Sprint 01: Core (Minha Empresa) 🏢

**Projeto:** UNIQ Empresas  
**Tipo:** Full Stack (Frontend + Backend + Database)  
**Período:** 30/03/2026 - 10/04/2026 (10 dias úteis)  
**Prioridade:** CRÍTICA (base de todo o sistema)  
**Data de Criação:** 2026-03-30  
**Responsável:** Core Team  

---

## 1. Visão Geral

### 1.1 Contexto do Projeto

O **UNIQ Empresas** é uma plataforma SaaS modular que combina Consultoria de Growth + Ferramentas de Gestão + Métricas para pequenos e médios empreendedores. O público-alvo é o **"Empreendedor na Correria"** - microempresários com 1-3 funcionários que precisam de praticidade, não de complexidade.

**Filosofia:** "Simples primeiro, complexo depois"

### 1.2 Objetivo Desta Sprint

A **SPRINT_01 (CORE)** tem como objetivo desenvolver a **base de autenticação, gestão da empresa e dashboard inicial**. Este é o **módulo crítico** - sem ele, nenhum outro módulo funciona.

**Stakeholder Primário:** Beta Testers (4 clientes reais)
- **Ótica** (Varejo): Precisa de vendas e organização
- **Gráfica** (Serviço): Fluxo de pedidos confuso
- **Confecção** (Manufatura): Marca desconhecida
- **Estética** (Serviço): Agendamento manual

### 1.3 Escopo da Sprint

**✅ Incluído nesta Sprint:**
- Sistema de autenticação (login, cadastro, recuperação de senha)
- Cadastro multi-step de empresa (CNPJ, dados, tipo de negócio)
- Tela "Minha Empresa" (perfil completo com upload de logo)
- Dashboard inicial com sidebar colapsável
- Configurações gerais (abas: dados, usuários, notificações, integrações)
- Busca automática de CEP (ViaCEP)
- Upload de logo (drag & drop)
- Preview de loja em tempo real
- Onboarding checklist (Day 0-7)
- Widget MEL (mensagem inicial do consultor)
- Multi-tenancy (isolamento por empresa)
- RLS policies no Supabase
- Responsividade total (desktop, tablet, mobile)

**❌ NÃO Incluído nesta Sprint:**
- Confirmação de email (será implementado na Sprint 02)
- Two-factor authentication (futuro)
- Múltiplas empresas por usuário (futuro)
- Logout de todas as sessões (futuro)
- API de validação de CNPJ em tempo real (usar mock por enquanto)

### 1.4 Stack Tecnológica

| Camada | Tecnologia | Versão | Uso |
|--------|------------|--------|-----|
| Framework | React | 19.x | Componentes funcionais |
| Linguagem | TypeScript | 5.x | Tipagem estática |
| Build | Vite | 5.x | Build tool |
| Estilização | Tailwind CSS | 3.4.x | Utility-first CSS |
| Componentes | Radix UI / shadcn/ui | v4 | Design System base |
| Ícones | Lucide React | latest | Ícones consistentes |
| Backend/DB | Supabase | 2.x | PostgreSQL + Auth |
| Deploy | Vercel | - | Hosting |
| Gerenciamento de Estado | React Hooks + Zustand | - | Estado global |

---

## 2. Problema

### 2.1 Dor do Usuário

O **Empreendedor na Correria** precisa:

- **Entrar no sistema rapidamente** sem burocracia
- **Cadastrar sua empresa** de forma simples e intuitiva
- **Personalizar sua marca** (cores, logo) sem ser designer
- **Ver que o sistema funciona** no primeiro acesso (dashboard carregando)
- **Ter uma experiência guiada** nos primeiros dias (onboarding)
- **Acessar de qualquer dispositivo** (mobile durante o dia, desktop à noite)

### 2.2 Cenário Atual (Sem o UNIQ)

```
Situação:
- Ana (dona da estética) usa caderno para agendamentos
- Ela perde clientes porque não lembra de confirmar
- Tenta usar sistemas complexos (AgendaPro, VcAgenda) mas desiste
- Resultado: continua no papel, perde dinheiro

Situação:
- Carlos (dono da gráfica) tem fluxo de pedidos confuso
- Usa WhatsApp + Excel + Trello
- Perde pedidos, erra prazos, clientes insatisfeitos
- Resultado: estresse e retrabalho
```

### 2.3 Por Que Isso Importa

| Métrica | Impacto |
|---------|---------|
| **Primeira Impressão** | Se o login/cadastro falhar, 70% abandonam |
| **Onboarding** | Usuários que completam Day 0-7 têm 3x mais retenção |
| **Personalização** | Empresas com logo/cores ativas usam 40% mais o sistema |
| **Mobile** | 60% dos acessos serão pelo celular |

---

## 3. Solução

### 3.1 Conceito

**"Primeiros Passos Simples"** - Em 5 minutos o empreendedor tem sua empresa cadastrada, personalizada e está vendo seu dashboard.

### 3.2 Pilares da Solução

| Pilar | Descrição | Implementação |
|-------|-----------|---------------|
| **Velocidade** | Cadastro em 3 passos, não 10 | Multi-step com progresso claro |
| **Confiança** | Mostrar que funciona desde o início | Dashboard com dados de exemplo |
| **Personalização** | Cada empresa é única | Upload de logo, cores da marca |
| **Guia** | Não deixar o usuário perdido | Checklist onboarding, widget MEL |
| **Mobile-First** | Funciona bem no celular | Responsividade priorizada |

### 3.3 Arquitetura de Informação

```
📁 UNIQ Empresas
├── 🔐 Autenticação
│   ├── Login
│   ├── Cadastro (3 steps)
│   └── Recuperar Senha
│
├── 🏢 Minha Empresa
│   ├── Perfil (dados completos)
│   └── Preview da Loja
│
├── 📊 Dashboard
│   ├── Sidebar (navegação)
│   ├── Header (usuário)
│   ├── Cards placeholder
│   └── Onboarding checklist
│
└── ⚙️ Configurações
    ├── Dados da Empresa
    ├── Usuários (placeholder)
    ├── Notificações
    └── Integrações (placeholder)
```

---

## 4. Personas

### 4.1 Persona Principal: Ana (Dona da Estética)

| Atributo | Detalhe |
|----------|---------|
| **Nome** | Ana Costa |
| **Idade** | 32 anos |
| **Perfil** | Dona de clínica de estética em São Paulo |
| **Equipe** | Ela + 1 esteticista |
| **Dor Principal** | Agendamento manual causa conflitos de horário |
| **Comportamento** | Usa celular 90% do tempo, pouca paciência para sistemas |
| **Expectativa** | "Quero algo que funcione no meu celular, sem complicação" |

**Jornada de Ana:**
1. Recebe convite do UNIQ (beta tester)
2. Clica no link → Tela de cadastro
3. Preenche CNPJ (busca automática da razão social)
4. Escolhe "Serviço" como tipo de negócio
5. Faz upload do logo da clínica
6. Vê o dashboard com "Bem-vinda, Ana!"
7. Começa o checklist de onboarding (Day 0)

### 4.2 Persona Secundária: Carlos (Dono da Gráfica)

| Atributo | Detalhe |
|----------|---------|
| **Nome** | Carlos Mendes |
| **Idade** | 45 anos |
| **Perfil** | Dono de gráfica rápida em São Bernardo |
| **Equipe** | Ele + 1 atendente |
| **Dor Principal** | Fluxo de pedidos confuso, perde prazos |
| **Comportamento** | Prefere desktop, quer controle total |
| **Expectativa** | "Preciso ver tudo organizado em um lugar só" |

**Jornada de Carlos:**
1. Acessa UNIQ no computador do escritório
2. Faz login com email/senha
3. Vai em "Minha Empresa" para completar dados
4. Configura cores da marca (azul e amarelo)
5. Explora o dashboard no desktop
6. Marca tarefas do onboarding como concluídas

### 4.3 Persona Terciária: Juliana (Dono da Confecção)

| Atributo | Detalhe |
|----------|---------|
| **Nome** | Juliana Oliveira |
| **Idade** | 38 anos |
| **Perfil** | Dona de marca de roupas (moda feminina) |
| **Equipe** | Ela + costureira + atendente |
| **Dor Principal** | Marca desconhecida, precisa de visibilidade |
| **Comportamento** | Alterna entre celular e notebook |
| **Expectativa** | "Quero personalizar minha marca no sistema" |

**Jornada de Juliana:**
1. Cadastra empresa como "Indústria"
2. Personaliza cores da marca (rosa e preto)
3. Faz upload de várias versões do logo até acertar
4. Visualiza como a loja vai ficar
5. Compartilha preview com a costureira

---

## 5. Funcionalidades Detalhadas

### 5.1 Tela de Login 🔐

**Rota:** `/login`

#### 5.1.1 Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                                                             │   │
│   │                    [LOGO UNIQ]                              │   │
│   │                                                             │   │
│   │   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │   │
│   │                                                             │   │
│   │   Entre na sua conta                                        │   │
│   │                                                             │   │
│   │   Email *                                                   │   │
│   │   ┌─────────────────────────────────────────────────────┐   │   │
│   │   │ carlos@grafica.com                                  │   │   │
│   │   └─────────────────────────────────────────────────────┘   │   │
│   │                                                             │   │
│   │   Senha *                                                   │   │
│   │   ┌─────────────────────────────────────────────────────┐   │   │
│   │   │ ●●●●●●●●                                    [👁️]   │   │   │
│   │   └─────────────────────────────────────────────────────┘   │   │
│   │                                                             │   │
│   │   ☑ Lembrar-me                                              │   │
│   │                                                             │   │
│   │   ┌─────────────────────────────────────────────────────┐   │   │
│   │   │              [   Entrar   ]                         │   │   │
│   │   └─────────────────────────────────────────────────────┘   │   │
│   │                                                             │   │
│   │   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │   │
│   │                                                             │   │
│   │        Esqueci minha senha  •  Criar conta                  │   │
│   │                                                             │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

#### 5.1.2 Componentes

| Elemento | Descrição | Validação |
|----------|-----------|-----------|
| **Logo UNIQ** | Topo centralizado | SVG, 120px width |
| **Email** | Input type="email" | Obrigatório, formato válido |
| **Senha** | Input type="password" | Obrigatório, mínimo 6 caracteres |
| **Lembrar-me** | Checkbox | Persiste em localStorage |
| **Botão Entrar** | Primário, full-width | Loading state ao submeter |
| **Links** | Esqueci senha / Criar conta | Texto secundário |

#### 5.1.3 Estados

| Estado | Comportamento |
|--------|---------------|
| **Default** | Campos vazios, botão ativo |
| **Validando** | Validação em tempo real (blur) |
| **Loading** | Spinner no botão, campos desabilitados |
| **Sucesso** | Redirect para `/dashboard` |
| **Erro** | Toast vermelho "Email ou senha inválidos" |

#### 5.1.4 Fluxo de Recuperação de Senha

```
Login → [Esqueci senha] → Input: Email → [Enviar link]
   ↓
Toast: "Verifique seu email"
   ↓
(Email com link de reset)
   ↓
Tela: Nova senha → Confirma → Login
```

---

### 5.2 Tela de Cadastro (Multi-step) 📝

**Rota:** `/cadastro`

#### 5.2.1 Step 1: Dados da Empresa

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   [LOGO UNIQ]                                    Já tem conta? Entrar│
│                                                                     │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│   ●──────○──────○                                                   │
│   1      2      3                                                   │
│   Empresa  Admin  Tipo                                              │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                                                     │
│   Dados da Empresa                                                  │
│                                                                     │
│   CNPJ *                                                            │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ 12.345.678/0001-90                                          │   │
│   └─────────────────────────────────────────────────────────────┘   │
│   ✓ CNPJ válido - Razão Social preenchida automaticamente          │
│                                                                     │
│   Razão Social *                                                    │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ Gráfica Rápida Mendes Ltda                                  │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│   Nome Fantasia                                                     │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ Gráfica Mendes                                              │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│                               [Próximo →]                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

#### 5.2.2 Step 2: Dados do Administrador

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│   ●──────●──────○                                                   │
│   1      2      3                                                   │
│   Empresa  Admin  Tipo                                              │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                                                     │
│   Dados do Administrador                                            │
│                                                                     │
│   Nome Completo *                                                   │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ Carlos Mendes                                               │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│   Email *                                                           │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ carlos@graficamendes.com                                    │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│   Telefone *                                                        │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ (11) 98765-4321                                             │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│   Senha *                                                           │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ ●●●●●●●●●●●●                                               │   │
│   └─────────────────────────────────────────────────────────────┘   │
│   Deve ter pelo menos 8 caracteres, 1 maiúscula e 1 número          │
│                                                                     │
│   Confirmar Senha *                                                 │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ ●●●●●●●●●●●●                                               │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│   [← Voltar]                            [Próximo →]                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

#### 5.2.3 Step 3: Tipo de Negócio

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│   ●──────●──────●                                                   │
│   1      2      3                                                   │
│   Empresa  Admin  Tipo                                              │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                                                     │
│   Qual o tipo do seu negócio?                                       │
│                                                                     │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │
│   │   🏪         │  │   🛠️         │  │   🏭         │             │
│   │              │  │              │  │              │             │
│   │   Varejo     │  │   Serviço    │  │   Indústria  │             │
│   │              │  │              │  │              │             │
│   │  Lojas,      │  │  Clínicas,   │  │  Fábricas,   │             │
│   │  comércio    │  │  consultoria │  │  produção    │             │
│   └──────────────┘  └──────────────┘  └──────────────┘             │
│                                                                     │
│   ┌──────────────┐                                                  │
│   │   📦         │                                                  │
│   │              │                                                  │
│   │   Atacado    │                                                  │
│   │              │                                                  │
│   │  Distribui-  │                                                  │
│   │  dores, B2B  │                                                  │
│   └──────────────┘                                                  │
│                                                                     │
│   [← Voltar]                            [Criar Conta →]             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

#### 5.2.4 Componentes do Cadastro

| Componente | Descrição | Validação |
|------------|-----------|-----------|
| **Indicador de Progresso** | 3 steps visuais | Completo → Ativo, Atual → Destaque, Futuro → Inativo |
| **CNPJ** | Input com máscara | 14 dígitos, validação de dígitos verificadores |
| **Razão Social** | Input texto | Preenchido automaticamente (mock), editável |
| **Email** | Input email | Único no sistema |
| **Telefone** | Input com máscara | (00) 00000-0000 |
| **Senha** | Input password | 8+ caracteres, 1 maiúscula, 1 número |
| **Tipo de Negócio** | Cards selecionáveis | Radio group visual |

#### 5.2.5 Validações

| Campo | Regra | Mensagem de Erro |
|-------|-------|------------------|
| CNPJ | 14 dígitos válidos | "CNPJ inválido" |
| Email | Formato + único | "Email inválido" / "Email já cadastrado" |
| Senha | 8+, 1 maiúscula, 1 número | "Senha não atende os requisitos" |
| Confirmar Senha | Igual à senha | "Senhas não conferem" |

---

### 5.3 Tela "Minha Empresa" (Perfil) 🏢

**Rota:** `/minha-empresa`

#### 5.3.1 Layout

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Sidebar 240px]                                                                       │
│ ┌─────────────────────────────────────────────────────────────────────────────────┐ │
│ │ [Header] Minha Empresa                                         [💾 Salvar]       │ │
│ ├─────────────────────────────────────────────────────────────────────────────────┤ │
│ │                                                                                 │ │
│ │ ┌─────────────────────────────────────┐  ┌─────────────────────────────────────┐│ │
│ │ │ DADOS DA EMPRESA                    │  │ PREVIEW DA LOJA                     ││ │
│ │ │                                     │  │                                     ││ │
│ │ │ Logo da Empresa                     │  │ ┌─────────────────────────────────┐ ││ │
│ │ │ ┌───────────────────────────────┐   │  │ │  [Logo]                         │ ││ │
│ │ │ │                               │   │  │ │                                 │ ││ │
│ │ │ │    [📁 Drop ou clique]        │   │  │ │  Gráfica Mendes                 │ ││ │
│ │ │ │    para upload                │   │  │ │                                 │ ││ │
│ │ │ │                               │   │  │ │  🟢 Aberto agora                │ ││ │
│ │ │ └───────────────────────────────┘   │  │ │                                 │ ││ │
│ │ │ [Preview do logo]                   │  │ │  📍 São Paulo, SP               │ ││ │
│ │ │                                     │  │ │  📱 (11) 3456-7890              │ ││ │
│ │ │ CNPJ                                │  │ │                                 │ ││ │
│ │ │ 12.345.678/0001-90                  │  │ │  [Ver Loja Completa →]          │ ││ │
│ │ │ (não editável)                      │  │ └─────────────────────────────────┘ ││ │
│ │ │                                     │  │                                     ││ │
│ │ │ Razão Social *                      │  │                                     ││ │
│ │ │ [Gráfica Rápida Mendes Ltda]        │  │                                     ││ │
│ │ │                                     │  │                                     ││ │
│ │ │ Nome Fantasia                       │  │                                     ││ │
│ │ │ [Gráfica Mendes]                    │  │                                     ││ │
│ │ │                                     │  │                                     ││ │
│ │ │ Email *                             │  │                                     ││ │
│ │ │ [contato@graficamendes.com]         │  │                                     ││ │
│ │ │                                     │  │                                     ││ │
│ │ │ Telefone *                          │  │                                     ││ │
│ │ │ [(11) 3456-7890            ]        │  │                                     ││ │
│ │ │                                     │  │                                     ││ │
│ │ │ Website                             │  │                                     ││ │
│ │ │ [www.graficamendes.com     ]        │  │                                     ││ │
│ │ └─────────────────────────────────────┘  └─────────────────────────────────────┘│ │
│ │                                                                                 │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────────┐│ │
│ │ │ ENDEREÇO                                                                     ││ │
│ │ │                                                                             ││ │
│ │ │ CEP *                              [🔍 Buscar]                              ││ │
│ │ │ [01310-100                      ]                                          ││ │
│ │ │                                                                             ││ │
│ │ │ Logradouro *                           Número *        Complemento         ││ │
│ │ │ [Avenida Paulista                      ] [1000      ]   [Sala 1501         ]││ │
│ │ │                                                                             ││ │
│ │ │ Bairro *                        Cidade *                Estado *            ││ │
│ │ │ [Bela Vista                     ] [São Paulo         ] [SP                ]││ │
│ │ └─────────────────────────────────────────────────────────────────────────────┘│ │
│ │                                                                                 │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────────┐│ │
│ │ │ CORES DA MARCA                                                               ││ │
│ │ │                                                                             ││ │
│ │ │ Cor Primária *              Cor Secundária *                                ││ │
│ │ │ ┌────────┐ ┌────────────┐   ┌────────┐ ┌────────────┐                      ││ │
│ │ │ │🔵      │ │ #3B82F6    │   │🟢      │ │ #10B981    │                      ││ │
│ │ │ └────────┘ └────────────┘   └────────┘ └────────────┘                      ││ │
│ │ │                                                                             ││ │
│ │ │ [Paleta sugerida: Azul + Verde]  [Paleta: Roxo + Laranja]                  ││ │
│ │ └─────────────────────────────────────────────────────────────────────────────┘│ │
│ │                                                                                 │ │
│ └─────────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

#### 5.3.2 Componentes

| Componente | Descrição | Funcionalidade |
|------------|-----------|----------------|
| **Upload de Logo** | Área drag & drop | Aceita PNG, JPG, SVG (max 5MB) |
| **Busca de CEP** | Input + botão | Integração ViaCEP, preenche endereço |
| **Color Picker** | Seleção de cores | HEX input + picker visual |
| **Preview da Loja** | Card ao lado | Atualização em tempo real |
| **Paleta Sugerida** | Chips de cores | Presets para facilitar escolha |

#### 5.3.3 Upload de Logo

**Estados:**
1. **Empty:** "Arraste ou clique para fazer upload"
2. **Dragging:** Borda destacada, "Solte aqui"
3. **Uploading:** Spinner + progresso
4. **Preview:** Imagem + botão remover
5. **Error:** Toast "Formato não suportado" ou "Arquivo muito grande"

#### 5.3.4 Busca de CEP (ViaCEP)

```typescript
// Integração ViaCEP
const buscarCEP = async (cep: string) => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  
  if (data.erro) {
    throw new Error('CEP não encontrado');
  }
  
  return {
    logradouro: data.logradouro,
    bairro: data.bairro,
    cidade: data.localidade,
    estado: data.uf
  };
};
```

**Fluxo:**
1. Usuário digita CEP (máscara automática: 00000-000)
2. Clica em "Buscar" ou pressiona Tab
3. Campos de endereço preenchidos automaticamente
4. Usuário completa número e complemento

---

### 5.4 Dashboard Inicial 📊

**Rota:** `/dashboard`

#### 5.4.1 Layout Desktop

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Sidebar 240px - fixa]                                                                │
│ ┌──────────┐  ┌───────────────────────────────────────────────────────────────────┐ │
│ │  [Logo]  │  │ [Header]                                                         │ │
│ │  UNIQ    │  │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │          │  │ │ [🏢 Gráfica Mendes]          [🔔] [👤 Carlos ▼]             │ │ │
│ │  ────    │  │ └─────────────────────────────────────────────────────────────┘ │ │
│ │  📊 Dash │  │                                                                 │ │
│ │  🏢 Emp. │  │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │  👥 CRM  │  │ │ 👋 Bem-vindo de volta, Carlos!                              │ │ │
│ │  🛒 Vend │  │ │                                                             │ │ │
│ │  📦 Est. │  │ │ Você está no UNIQ há 3 dias. Complete seu onboarding        │ │ │
│ │  💰 Fin. │  │ │ abaixo para aproveitar ao máximo a plataforma.              │ │ │
│ │  ────    │  │ └─────────────────────────────────────────────────────────────┘ │ │
│ │  ⚙️ Conf.│  │                                                                 │ │
│ │          │  │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │  [User]  │  │ │ 📋 SEU PROGRESSO (3/7 completos)                            │ │ │
│ │  Carlos  │  │ │ ████████░░░░░░░░░░░░ 43%                                    │ │ │
│ │          │  │ ├─────────────────────────────────────────────────────────────┤ │ │
│ │  [⬅️]    │  │ │ ☑ Completar perfil da empresa                               │ │ │
│ │          │  │ │ ☐ Adicionar primeiro produto/serviço                       │ │ │
│ │          │  │ │ ☐ Conectar WhatsApp                                         │ │ │
│ │          │  │ │ ☐ Configurar pagamentos                                     │ │ │
│ │          │  │ │ ☐ Adicionar primeiro cliente                                │ │ │
│ │          │  │ │ ☐ Fazer primeira venda                                      │ │ │
│ │          │  │ │ ☐ Convidar colaborador                                      │ │ │
│ │          │  │ └─────────────────────────────────────────────────────────────┘ │ │
│ │          │  │                                                                 │ │
│ │          │  │ ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐ │ │
│ │          │  │ │ 📊 VENDAS        │ │ 👥 CLIENTES      │ │ 📦 ESTOQUE       │ │ │
│ │          │  │ │                  │ │                  │ │                  │ │ │
│ │          │  │ │ Você ainda não   │ │ Você ainda não   │ │ Você ainda não   │ │ │
│ │          │  │ │ tem vendas       │ │ tem clientes     │ │ tem produtos     │ │ │
│ │          │  │ │                  │ │                  │ │                  │ │ │
│ │          │  │ │ [Começar agora]  │ │ [Adicionar]      │ │ [Cadastrar]      │ │ │
│ │          │  │ └──────────────────┘ └──────────────────┘ └──────────────────┘ │ │
│ │          │  │                                                                 │ │
│ │          │  │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │          │  │ │ 💬 MENSAGEM DO SEU CONSULTOR (MEL)                          │ │ │
│ │          │  │ │                                                             │ │ │
│ │          │  │ │ "Oi Carlos! Vi que você completou o cadastro. Que tal       │ │ │
│ │          │  │ │ agora adicionarmos seus primeiros produtos? É bem rápido!"  │ │ │
│ │          │  │ │                                                             │ │ │
│ │          │  │ │ [👤 Henrique]        [Responder →]                          │ │ │
│ │          │  │ └─────────────────────────────────────────────────────────────┘ │ │
│ │          │  │                                                                 │ │
│ └──────────┘  └───────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

#### 5.4.2 Layout Mobile

```
┌─────────────────────────────────┐
│ [☰]  Gráfica Mendes    [🔔👤] │
├─────────────────────────────────┤
│                                 │
│ 👋 Boa tarde, Carlos!           │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 📋 SEU PROGRESSO            │ │
│ │ ████████░░░░░░ 43%          │ │
│ │ 3 de 7 completos            │ │
│ │                             │ │
│ │ ☑ Completar perfil...      │ │
│ │ ☐ Adicionar primeiro...    │ │
│ │ ☐ Conectar WhatsApp        │ │
│ │ ☐ Configurar pagamentos    │ │
│ │ ☐ Adicionar primeiro...    │ │
│ │ ☐ Fazer primeira venda     │ │
│ │ ☐ Convidar colaborador     │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 📊 VENDAS                   │ │
│ │ Você ainda não tem vendas   │ │
│ │ [Começar agora →]           │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 👥 CLIENTES                 │ │
│ │ Você ainda não tem clientes │ │
│ │ [Adicionar →]               │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 📦 ESTOQUE                  │ │
│ │ Você ainda não tem produtos │ │
│ │ [Cadastrar →]               │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 💬 MENSAGEM DO MEL          │ │
│ │ "Oi Carlos! Vi que você..." │ │
│ │ [Responder →]               │ │
│ └─────────────────────────────┘ │
│                                 │
├─────────────────────────────────┤
│  📊    🏢    ➕    👤    ⚙️    │
│ Dash   Emp.  Add   Perfil Conf │
└─────────────────────────────────┘
```

#### 5.4.3 Componentes

| Componente | Descrição | Funcionalidade |
|------------|-----------|----------------|
| **Sidebar** | Menu lateral | Colapsável, 240px desktop, drawer mobile |
| **Header** | Topo da página | Logo empresa + notificações + avatar usuário |
| **Progresso** | Barra + checklist | Mostra 7 tarefas de onboarding |
| **Cards Placeholder** | 4 cards | Estados vazios com CTAs |
| **Widget MEL** | Mensagem do consultor | Simula interação humana |
| **Bottom Nav** | Mobile only | 5 ícones principais |

#### 5.4.4 Onboarding Checklist (Day 0-7)

| # | Tarefa | Dia | Recompensa |
|---|--------|-----|------------|
| ☑ | Completar perfil da empresa | 0 | ✅ |
| ☐ | Adicionar primeiro produto/serviço | 0-1 | 🎁 |
| ☐ | Conectar WhatsApp | 1-2 | 🎁 |
| ☐ | Configurar pagamentos | 2-3 | 🎁 |
| ☐ | Adicionar primeiro cliente | 3-4 | 🎁 |
| ☐ | Fazer primeira venda | 4-7 | 🎉 |
| ☐ | Convidar colaborador | 7+ | 🎁 |

**Progresso:** Barra visual com porcentagem (3/7 = 43%)

#### 5.4.5 Widget MEL (Mensagem Inicial do Consultor)

**Personalização por contexto:**

```typescript
const getMensagemMEL = (contexto: Contexto) => {
  switch (contexto) {
    case 'cadastro_completo':
      return "Oi {nome}! Vi que você completou o cadastro. Que tal agora adicionarmos seus primeiros produtos?";
    case 'primeira_venda':
      return "Parabéns pela primeira venda! 🎉 Que tal agora conectar seu WhatsApp para atender clientes?";
    case 'day_3_inativo':
      return "Sentiu falta de algo no UNIQ? Me conta como posso ajudar você a organizar seu negócio.";
    default:
      return "Como posso ajudar você hoje?";
  }
};
```

---

### 5.5 Configurações Gerais ⚙️

**Rota:** `/configuracoes`

#### 5.5.1 Layout com Abas

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Sidebar]                                                                             │
│ ┌─────────────────────────────────────────────────────────────────────────────────┐ │
│ │ [Header] Configurações                                                         │ │
│ ├─────────────────────────────────────────────────────────────────────────────────┤ │
│ │                                                                                 │ │
│ │ ┌──────────┬──────────┬──────────────┬──────────────┐                          │ │
│ │ │ 🏢 Dados │ 👥 Usuários│ 🔔 Notificações│ 🔌 Integrações│                          │ │
│ │ │  da Emp  │          │              │              │                          │ │
│ │ └──────────┴──────────┴──────────────┴──────────────┘                          │ │
│ │                                                                                 │ │
│ │ ═══════════════════════════════════════════════════════════════════════════    │ │
│ │ ABA: DADOS DA EMPRESA (ativa)                                                  │ │
│ │ ═══════════════════════════════════════════════════════════════════════════    │ │
│ │                                                                                 │ │
│ │ (Mesmo conteúdo da tela Minha Empresa, mas sem preview)                        │ │
│ │                                                                                 │ │
│ │ ═══════════════════════════════════════════════════════════════════════════    │ │
│ │ ABA: USUÁRIOS                                                                  │ │
│ │ ═══════════════════════════════════════════════════════════════════════════    │ │
│ │                                                                                 │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐    │ │
│ │ │ Em breve...                                                             │    │ │
│ │ │                                                                         │    │ │
│ │ │ A gestão de usuários e permissões será liberada na próxima atualização.│    │ │
│ │ │                                                                         │    │ │
│ │ │ [🔔 Me avise quando estiver pronto]                                     │    │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘    │ │
│ │                                                                                 │ │
│ │ ═══════════════════════════════════════════════════════════════════════════    │ │
│ │ ABA: NOTIFICAÇÕES                                                              │ │
│ │ ═══════════════════════════════════════════════════════════════════════════    │ │
│ │                                                                                 │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐    │ │
│ │ │ 📧 Email                                                                │    │ │
│ │ │ [━━━━━━━━●━━━━━] Ativar notificações por email                         │    │ │
│ │ │                                                                         │    │ │
│ │ │ Receber:                                                                │    │ │
│ │ │ ☑ Resumo diário de vendas                                              │    │ │
│ │ │ ☑ Novos clientes                                                       │    │ │
│ │ │ ☑ Pedidos pendentes                                                    │    │ │
│ │ │ ☐ Relatórios semanais                                                  │    │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘    │ │
│ │                                                                                 │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐    │ │
│ │ │ 📱 WhatsApp                                                             │    │ │
│ │ │ [━━●━━━━━━━━━━━] Conectar WhatsApp Business                            │    │ │
│ │ │                                                                         │    │ │
│ │ │ Status: Desconectado                                                    │    │ │
│ │ │                                                                         │    │ │
│ │ │ [Conectar WhatsApp →]                                                   │    │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘    │ │
│ │                                                                                 │ │
│ │ ═══════════════════════════════════════════════════════════════════════════    │ │
│ │ ABA: INTEGRAÇÕES                                                               │ │
│ │ ═══════════════════════════════════════════════════════════════════════════    │ │
│ │                                                                                 │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐    │ │
│ │ │ Em breve...                                                             │    │ │
│ │ │                                                                         │    │ │
│ │ │ Integrações com mercado pago, Stripe, e outros serviços em breve.      │    │ │
│ │ │                                                                         │    │ │
│ │ │ [🔔 Me avise quando estiver pronto]                                     │    │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘    │ │
│ │                                                                                 │ │
│ └─────────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

#### 5.5.2 Abas

| Aba | Conteúdo | Status |
|-----|----------|--------|
| **Dados da Empresa** | Formulário completo | Implementado |
| **Usuários** | Placeholder "Em breve" | Placeholder |
| **Notificações** | Toggles WhatsApp/Email | Implementado |
| **Integrações** | Placeholder "Em breve" | Placeholder |

---

## 6. Design System - Especificações Visuais

### 6.1 Paleta de Cores UNIQ

| Token | Valor HEX | Uso |
|-------|-----------|-----|
| `--bg-primary` | `#efefef` | Fundo principal (platinum) |
| `--bg-card` | `#ffffff` | Fundo de cards e modais (white) |
| `--btn-primary` | `#3e5653` | Botões primários (primary) |
| `--btn-primary-hover` | `#1f2937` | Hover de botões primários (hover) |
| `--accent` | `#86cb92` | Destaques, sucesso (accent) |
| `--text-primary` | `#1f2937` | Texto principal (text) |
| `--text-secondary` | `#627271` | Texto secundário (muted) |
| `--border` | `#e5e7eb` | Bordas e divisores (border) |
| `--primary-blue` | `#3B82F6` | Cor primária padrão (azul) |
| `--secondary-green` | `#10B981` | Cor secundária padrão (verde) |
| `--error` | `#ef4444` | Estados de erro (red-500) |
| `--success` | `#22c55e` | Estados de sucesso (green-500) |

### 6.2 Classes Tailwind Padrão UNIQ

```tsx
// Card padrão
bg-white rounded-xl shadow-sm border border-uniq-border p-5 hover:shadow-md transition-all

// Botão Primário
bg-uniq-primary text-white rounded-lg hover:bg-uniq-hover transition-colors

// Botão Secundário
bg-uniq-accent text-white rounded-lg hover:opacity-90 transition-colors

// Input
border border-gray-300 rounded-lg focus:ring-2 focus:ring-uniq-accent focus:border-transparent

// Sidebar
bg-uniq-text text-white w-60 flex flex-col h-screen

// Header
bg-white border-b border-uniq-border h-16 flex items-center justify-between px-6
```

### 6.3 Tipografia

| Elemento | Fonte | Tamanho | Peso | Cor |
|----------|-------|---------|------|-----|
| Título Página | Poppins | 24px (text-2xl) | 700 (bold) | `#1f2937` |
| Subtítulo | Poppins | 14px (text-sm) | 400 | `#627271` |
| Label Form | Poppins | 12px (text-xs) | 500 | `#627271` |
| Input | Poppins | 14px (text-sm) | 400 | `#1f2937` |
| Botão | Poppins | 14px (text-sm) | 600 | `#ffffff` |

### 6.4 Responsividade

| Breakpoint | Largura | Comportamento |
|------------|---------|---------------|
| **Desktop** | 1920px+ | Sidebar fixa 240px, grid 3 colunas |
| **Laptop** | 1366px | Sidebar fixa 240px, grid 2-3 colunas |
| **Tablet** | 768px | Sidebar colapsada, grid 2 colunas |
| **Mobile** | 375px | Sidebar como drawer, grid 1 coluna, bottom nav |

---

## 7. Schema de Dados (Supabase)

### 7.1 Tabela: me_empresas

```sql
-- Empresas (Multi-tenant core) - Prefixo: me_ (Minha Empresa)
CREATE TABLE me_empresas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cnpj VARCHAR(18) UNIQUE NOT NULL,
  razao_social VARCHAR(255) NOT NULL,
  nome_fantasia VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  telefone VARCHAR(20),
  website VARCHAR(255),
  
  -- Endereço estruturado
  endereco JSONB DEFAULT '{
    "cep": "",
    "logradouro": "",
    "numero": "",
    "complemento": "",
    "bairro": "",
    "cidade": "",
    "estado": ""
  }',
  
  -- Identidade visual
  logo_url TEXT,
  cores JSONB DEFAULT '{
    "primary": "#3B82F6",
    "secondary": "#10B981"
  }',
  
  -- Classificação
  tipo_negocio VARCHAR(50), -- varejo, servico, industria, atacado
  status VARCHAR(20) DEFAULT 'ativo', -- ativo, inativo, suspenso
  
  -- Onboarding
  onboarding_progress INTEGER DEFAULT 0, -- 0-100
  onboarding_checklist JSONB DEFAULT '{
    "perfil_completo": false,
    "primeiro_produto": false,
    "whatsapp_conectado": false,
    "pagamentos_configurados": false,
    "primeiro_cliente": false,
    "primeira_venda": false,
    "colaborador_convidado": false
  }',
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Soft delete
  deleted_at TIMESTAMP WITH TIME ZONE
);

-- Índices
CREATE INDEX idx_me_empresas_cnpj ON me_empresas(cnpj);
CREATE INDEX idx_me_empresas_status ON me_empresas(status);
CREATE INDEX idx_me_empresas_tipo_negocio ON me_empresas(tipo_negocio);
```

### 7.2 Tabela: me_usuarios

```sql
-- Usuários - Prefixo: me_
CREATE TABLE me_usuarios (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  empresa_id UUID REFERENCES me_empresas(id) ON DELETE CASCADE,
  
  -- Dados pessoais
  email VARCHAR(255) UNIQUE NOT NULL,
  nome VARCHAR(255) NOT NULL,
  telefone VARCHAR(20),
  avatar_url TEXT,
  
  -- Permissões
  perfil VARCHAR(50) DEFAULT 'admin', -- admin, gerente, vendedor, visualizador
  
  -- Status
  status VARCHAR(20) DEFAULT 'ativo', -- ativo, inativo, pendente
  ultimo_login TIMESTAMP WITH TIME ZONE,
  
  -- Preferências
  preferencias JSONB DEFAULT '{
    "tema": "light",
    "notificacoes_email": true,
    "notificacoes_whatsapp": false
  }',
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_me_usuarios_empresa ON me_usuarios(empresa_id);
CREATE INDEX idx_me_usuarios_email ON me_usuarios(email);
CREATE INDEX idx_me_usuarios_status ON me_usuarios(status);
```

### 7.3 Tabela: me_configuracoes

```sql
-- Configurações por empresa - Prefixo: me_
CREATE TABLE me_configuracoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id UUID REFERENCES me_empresas(id) ON DELETE CASCADE,
  
  -- Notificações
  notificacoes_whatsapp BOOLEAN DEFAULT true,
  notificacoes_email BOOLEAN DEFAULT true,
  
  -- Configurações regionais
  moeda VARCHAR(10) DEFAULT 'BRL',
  timezone VARCHAR(50) DEFAULT 'America/Sao_Paulo',
  idioma VARCHAR(10) DEFAULT 'pt-BR',
  
  -- Configurações personalizadas
  configuracoes JSONB DEFAULT '{}',
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Restrição: uma configuração por empresa
  CONSTRAINT unique_empresa_config UNIQUE (empresa_id)
);

-- Índice
CREATE INDEX idx_me_configuracoes_empresa ON me_configuracoes(empresa_id);
```

### 7.4 Row Level Security (RLS)

```sql
-- Habilitar RLS
ALTER TABLE me_empresas ENABLE ROW LEVEL SECURITY;
ALTER TABLE me_usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE me_configuracoes ENABLE ROW LEVEL SECURITY;

-- Política: usuários só veem dados da própria empresa
CREATE POLICY company_isolation_empresas ON me_empresas
  FOR ALL USING (
    id IN (
      SELECT empresa_id FROM me_usuarios 
      WHERE me_usuarios.id = auth.uid()
    )
  );

CREATE POLICY company_isolation_usuarios ON me_usuarios
  FOR ALL USING (
    empresa_id IN (
      SELECT empresa_id FROM me_usuarios 
      WHERE me_usuarios.id = auth.uid()
    )
  );

CREATE POLICY company_isolation_config ON me_configuracoes
  FOR ALL USING (
    empresa_id IN (
      SELECT empresa_id FROM me_usuarios 
      WHERE me_usuarios.id = auth.uid()
    )
  );

-- Política: usuários só podem ver/editar seus próprios dados
CREATE POLICY user_own_data ON me_usuarios
  FOR UPDATE USING (id = auth.uid());
```

### 7.5 Funções e Triggers

```sql
-- Atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_me_empresas_updated_at
  BEFORE UPDATE ON me_empresas
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_me_usuarios_updated_at
  BEFORE UPDATE ON me_usuarios
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_me_configuracoes_updated_at
  BEFORE UPDATE ON me_configuracoes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Função para criar configurações padrão ao criar empresa
CREATE OR REPLACE FUNCTION create_default_config()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO me_configuracoes (empresa_id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER trigger_create_default_config
  AFTER INSERT ON me_empresas
  FOR EACH ROW EXECUTE FUNCTION create_default_config();
```

---

## 8. Fluxos de Usuário

### 8.1 Fluxo Principal: Cadastro Completo

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  Novo usuário acessa /cadastro                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  STEP 1: Dados da Empresa                                                           │
│  ┌─────────────────────────────────────────────────────────────────────────────┐    │
│  │ CNPJ: [12.345.678/0001-90]                                                  │    │
│  │ Razão Social: [Gráfica Mendes Ltda] (auto)                                  │    │
│  │ Nome Fantasia: [Gráfica Mendes]                                             │    │
│  │                                                                             │    │
│  │                              [Próximo →]                                    │    │
│  └─────────────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  STEP 2: Dados do Administrador                                                     │
│  ┌─────────────────────────────────────────────────────────────────────────────┐    │
│  │ Nome: [Carlos Mendes]                                                       │    │
│  │ Email: [carlos@grafica.com]                                                 │    │
│  │ Telefone: [(11) 98765-4321]                                                 │    │
│  │ Senha: [●●●●●●●●●●]                                                         │    │
│  │                                                                             │    │
│  │ [← Voltar]                              [Próximo →]                         │    │
│  └─────────────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  STEP 3: Tipo de Negócio                                                            │
│  ┌─────────────────────────────────────────────────────────────────────────────┐    │
│  │ Selecione:                                                                  │    │
│  │ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐                        │    │
│  │ │  🏪      │ │  🛠️      │ │  🏭      │ │  📦      │                        │    │
│  │ │ Varejo   │ │ Serviço  │ │ Indústria│ │ Atacado  │                        │    │
│  │ └──────────┘ └──────────┘ └──────────┘ └──────────┘                        │    │
│  │                                                                             │    │
│  │ [← Voltar]                              [Criar Conta →]                     │    │
│  └─────────────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  ✅ CONTA CRIADA COM SUCESSO!                                                       │
│                                                                                     │
│  Toast: "Bem-vindo ao UNIQ! Complete seu perfil para começar."                     │
│                                                                                     │
│  Redirecionar para: /minha-empresa                                                  │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 8.2 Fluxo: Login e Dashboard

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  Usuário cadastrado acessa /login                                                   │
└─────────────────────────────────────────────────────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  Login                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────────┐    │
│  │ Email: [carlos@grafica.com]                                                 │    │
│  │ Senha: [●●●●●●●●]                                                           │    │
│  │ ☑ Lembrar-me                                                                │    │
│  │                                                                             │    │
│  │ [Entrar]                                                                    │    │
│  └─────────────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────────────┘
                                       │
                                       ▼
                    ┌────────────────────────────────┐
                    │  Autenticação OK?              │
                    │  ├─ SIM → Dashboard            │
                    │  └─ NÃO → Toast de erro        │
                    └────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  /dashboard                                                                         │
│                                                                                     │
│  ┌─────────────────────────────────────────────────────────────────────────────┐    │
│  │ 👋 Bem-vindo de volta, Carlos!                                              │    │
│  │                                                                             │    │
│  │ 📋 SEU PROGRESSO (1/7)                                                      │    │
│  │ ☑ Completar perfil da empresa                                              │    │
│  │ ☐ Adicionar primeiro produto                                               │    │
│  │ ...                                                                          │    │
│  │                                                                             │    │
│  │ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                         │    │
│  │ │ 📊 VENDAS    │ │ 👥 CLIENTES  │ │ 📦 ESTOQUE   │                         │    │
│  │ │ (placeholder)│ │ (placeholder)│ │ (placeholder)│                         │    │
│  │ └──────────────┘ └──────────────┘ └──────────────┘                         │    │
│  │                                                                             │    │
│  │ 💬 "Oi Carlos! Complete seu perfil para liberar mais recursos..."         │    │
│  └─────────────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 8.3 Fluxo: Recuperação de Senha

```
Login → [Esqueci minha senha]
           │
           ▼
┌─────────────────────────────────────┐
│ Recuperar Senha                     │
│                                     │
│ Digite seu email cadastrado:        │
│ [carlos@grafica.com]                │
│                                     │
│ [Enviar link de recuperação]        │
└─────────────────────────────────────┘
           │
           ▼
Toast: "Verifique seu email para redefinir a senha"
           │
           ▼
(Usuário recebe email com link)
           │
           ▼
┌─────────────────────────────────────┐
│ Nova Senha                          │
│                                     │
│ Nova senha: [●●●●●●●●]              │
│ Confirmar:  [●●●●●●●●]              │
│                                     │
│ [Redefinir senha]                   │
└─────────────────────────────────────┘
           │
           ▼
Toast: "Senha alterada com sucesso!"
Redirect: /login
```

---

## 9. Wireframes Descritivos

### 9.1 Sidebar Component

```tsx
interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  user: User;
  company: Company;
}

// Estados:
// 1. Desktop expandido: 240px com texto
// 2. Desktop colapsado: 64px só ícones
// 3. Mobile: Drawer full-height

// Menu items:
const menuItems = [
  { icon: 'LayoutDashboard', label: 'Dashboard', href: '/dashboard' },
  { icon: 'Building2', label: 'Minha Empresa', href: '/minha-empresa' },
  { icon: 'Users', label: 'CRM', href: '/crm', disabled: true },
  { icon: 'ShoppingCart', label: 'Vendas', href: '/vendas', disabled: true },
  { icon: 'Package', label: 'Estoque', href: '/estoque', disabled: true },
  { icon: 'Wallet', label: 'Financeiro', href: '/financeiro', disabled: true },
  { divider: true },
  { icon: 'Settings', label: 'Configurações', href: '/configuracoes' },
];
```

### 9.2 Upload de Logo Component

```tsx
interface LogoUploadProps {
  currentLogo?: string;
  onUpload: (file: File) => Promise<void>;
  onRemove: () => void;
}

// Estados visuais:
// Empty state:
// ┌─────────────────────────────┐
// │                             │
// │      [📁 Icone grande]      │
// │                             │
// │   Arraste ou clique para    │
// │   fazer upload do logo      │
// │                             │
// │   PNG, JPG ou SVG (max 5MB) │
// │                             │
// └─────────────────────────────┘

// Com preview:
// ┌─────────────────────────────┐
// │                             │
// │   [Preview da imagem        │
// │    com object-cover]        │
// │                             │
// │   [🗑️ Remover]              │
// │                             │
// └─────────────────────────────┘

// Loading:
// ┌─────────────────────────────┐
// │                             │
// │   [⏳ Spinner centralizado] │
// │                             │
// │   Enviando... 45%           │
// │                             │
// └─────────────────────────────┘
```

### 9.3 Onboarding Checklist Component

```tsx
interface OnboardingChecklistProps {
  progress: number; // 0-100
  tasks: {
    id: string;
    label: string;
    completed: boolean;
    href?: string;
  }[];
  onTaskClick: (taskId: string) => void;
}

// Visual:
// ┌─────────────────────────────────────────────┐
// │ 📋 SEU PROGRESSO (3/7 completos)            │
// │                                             │
// │ ████████░░░░░░░░░░░░ 43%                    │
// │                                             │
// │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
// │ ☑ Completar perfil da empresa               │
// │   └─ ✓ Concluído em 30/03/2026              │
// │ ☐ Adicionar primeiro produto/serviço       │
// │   └─ [Adicionar agora →]                    │
// │ ☐ Conectar WhatsApp                         │
// │ ☐ Configurar pagamentos                     │
// │ ☐ Adicionar primeiro cliente                │
// │ ☐ Fazer primeira venda                      │
// │ ☐ Convidar colaborador                      │
// └─────────────────────────────────────────────┘
```

---

## 10. Mock Data

### 10.1 Mock: Empresa

```typescript
// lib/mocks/company.ts

export const mockEmpresa = {
  id: 'emp-001',
  cnpj: '12.345.678/0001-90',
  razao_social: 'Gráfica Rápida Mendes Ltda',
  nome_fantasia: 'Gráfica Mendes',
  email: 'contato@graficamendes.com',
  telefone: '(11) 3456-7890',
  website: 'www.graficamendes.com',
  endereco: {
    cep: '01310-100',
    logradouro: 'Avenida Paulista',
    numero: '1000',
    complemento: 'Sala 1501',
    bairro: 'Bela Vista',
    cidade: 'São Paulo',
    estado: 'SP'
  },
  logo_url: null,
  cores: {
    primary: '#3B82F6',
    secondary: '#10B981'
  },
  tipo_negocio: 'servico',
  status: 'ativo',
  onboarding_progress: 14, // 1/7 tasks
  onboarding_checklist: {
    perfil_completo: true,
    primeiro_produto: false,
    whatsapp_conectado: false,
    pagamentos_configurados: false,
    primeiro_cliente: false,
    primeira_venda: false,
    colaborador_convidado: false
  },
  created_at: '2026-03-30T10:00:00Z',
  updated_at: '2026-03-30T10:00:00Z'
};
```

### 10.2 Mock: Usuário

```typescript
// lib/mocks/user.ts

export const mockUsuario = {
  id: 'usr-001',
  empresa_id: 'emp-001',
  email: 'carlos@graficamendes.com',
  nome: 'Carlos Mendes',
  telefone: '(11) 98765-4321',
  avatar_url: null,
  perfil: 'admin',
  status: 'ativo',
  ultimo_login: '2026-03-30T14:30:00Z',
  preferencias: {
    tema: 'light',
    notificacoes_email: true,
    notificacoes_whatsapp: false
  },
  created_at: '2026-03-30T10:00:00Z',
  updated_at: '2026-03-30T14:30:00Z'
};
```

### 10.3 Tipos TypeScript

```typescript
// types/empresa.ts

export type TipoNegocio = 'varejo' | 'servico' | 'industria' | 'atacado';
export type StatusEmpresa = 'ativo' | 'inativo' | 'suspenso';
export type PerfilUsuario = 'admin' | 'gerente' | 'vendedor' | 'visualizador';
export type StatusUsuario = 'ativo' | 'inativo' | 'pendente';

export interface Endereco {
  cep: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export interface CoresMarca {
  primary: string;
  secondary: string;
}

export interface OnboardingChecklist {
  perfil_completo: boolean;
  primeiro_produto: boolean;
  whatsapp_conectado: boolean;
  pagamentos_configurados: boolean;
  primeiro_cliente: boolean;
  primeira_venda: boolean;
  colaborador_convidado: boolean;
}

export interface Empresa {
  id: string;
  cnpj: string;
  razao_social: string;
  nome_fantasia?: string;
  email: string;
  telefone?: string;
  website?: string;
  endereco: Endereco;
  logo_url?: string | null;
  cores: CoresMarca;
  tipo_negocio?: TipoNegocio;
  status: StatusEmpresa;
  onboarding_progress: number;
  onboarding_checklist: OnboardingChecklist;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
}

export interface Usuario {
  id: string;
  empresa_id: string;
  email: string;
  nome: string;
  telefone?: string;
  avatar_url?: string | null;
  perfil: PerfilUsuario;
  status: StatusUsuario;
  ultimo_login?: string | null;
  preferencias: {
    tema: 'light' | 'dark';
    notificacoes_email: boolean;
    notificacoes_whatsapp: boolean;
  };
  created_at: string;
  updated_at: string;
}

export interface Configuracoes {
  id: string;
  empresa_id: string;
  notificacoes_whatsapp: boolean;
  notificacoes_email: boolean;
  moeda: string;
  timezone: string;
  idioma: string;
  configuracoes: Record<string, any>;
  created_at: string;
  updated_at: string;
}
```

---

## 11. Dependências

### 11.1 Bibliotecas Necessárias

```json
{
  "dependencies": {
    // Core (já instalado)
    "react": "^19.x",
    "react-dom": "^19.x",
    "react-router-dom": "^7.x",
    "typescript": "^5.x",
    
    // Supabase
    "@supabase/supabase-js": "^2.x",
    
    // UI/UX
    "@radix-ui/react-*": "latest",
    "lucide-react": "^0.x",
    "tailwindcss": "^3.x",
    "class-variance-authority": "^0.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x",
    
    // Formulários e Validação
    "react-hook-form": "^7.x",
    "@hookform/resolvers": "^3.x",
    "zod": "^3.x",
    
    // Utilidades
    "date-fns": "^3.x",
    "zustand": "^4.x",
    "react-dropzone": "^14.x"
  }
}
```

### 11.2 Componentes shadcn/ui Necessários

| Componente | Uso |
|------------|-----|
| **Button** | Botões primários, secundários, de ação |
| **Input** | Campos de texto |
| **Label** | Labels de formulário |
| **Card** | Cards de dashboard, preview |
| **Avatar** | Avatar do usuário, logo da empresa |
| **Badge** | Status, tags |
| **Checkbox** | Lembrar-me, toggles |
| **Switch** | Notificações on/off |
| **Tabs** | Abas em Configurações |
| **Progress** | Barra de progresso do onboarding |
| **Separator** | Divisores |
| **Skeleton** | Loading states |
| **Toast** | Notificações |
| **Sheet** | Sidebar mobile (drawer) |
| **Dialog** | Modais de confirmação |
| **DropdownMenu** | Menu do usuário |
| **Tooltip** | Tooltips informativos |
| **Select** | Dropdowns |
| **Textarea** | Observações |
| **ScrollArea** | Scroll customizado |

### 11.3 APIs Externas

| Serviço | URL | Uso |
|---------|-----|-----|
| **ViaCEP** | `https://viacep.com.br/ws/{cep}/json/` | Busca de endereço por CEP |
| **Supabase Auth** | `https://{project}.supabase.co` | Autenticação de usuários |
| **Supabase Storage** | `https://{project}.supabase.co/storage` | Upload de logos |

---

## 12. User Stories

### US-01: Como empreendedor, quero criar minha conta facilmente
**Critérios:**
- [ ] Cadastro em 3 passos claros
- [ ] Indicador de progresso (1-2-3)
- [ ] Busca automática de CNPJ (mock)
- [ ] Validação em tempo real
- [ ] Conta criada em menos de 5 minutos

### US-02: Como empreendedor, quero fazer login rapidamente
**Critérios:**
- [ ] Login com email/senha
- [ ] Opção "Lembrar-me"
- [ ] Recuperação de senha funcional
- [ ] Mensagens de erro claras
- [ ] Redirect automático após login

### US-03: Como empreendedor, quero personalizar minha empresa
**Critérios:**
- [ ] Upload de logo (drag & drop)
- [ ] Busca de CEP automática
- [ ] Escolha de cores da marca
- [ ] Preview em tempo real
- [ ] Dados salvos no Supabase

### US-04: Como empreendedor, quero ver meu progresso no sistema
**Critérios:**
- [ ] Dashboard com boas-vindas personalizada
- [ ] Checklist de 7 tarefas (onboarding)
- [ ] Barra de progresso visual
- [ ] Cards placeholder dos módulos
- [ ] Mensagem do consultor (MEL)

### US-05: Como empreendedor, quero acessar de qualquer dispositivo
**Critérios:**
- [ ] Layout responsivo (desktop, tablet, mobile)
- [ ] Sidebar colapsável/drawer
- [ ] Bottom navigation no mobile
- [ ] Touch-friendly nos botões
- [ ] Performance aceitável em 3G

---

## 13. Regras de Negócio

| ID | Regra | Implementação |
|----|-------|---------------|
| RN-CORE-001 | CNPJ é único no sistema | Constraint UNIQUE + validação |
| RN-CORE-002 | Email é único no sistema | Constraint UNIQUE + validação |
| RN-CORE-003 | Cada usuário pertence a uma empresa | Foreign Key + RLS |
| RN-CORE-004 | Usuários só veem dados da própria empresa | RLS policies |
| RN-CORE-005 | Senha mínima 8 caracteres | Validação Zod |
| RN-CORE-006 | Upload de logo máximo 5MB | Validação client-side |
| RN-CORE-007 | Formatos aceitos: PNG, JPG, SVG | Validação MIME type |
| RN-CORE-008 | Cores padrão: Azul (#3B82F6) + Verde (#10B981) | Default no banco |
| RN-CORE-009 | Onboarding começa em 0% (0/7 tasks) | Default no banco |
| RN-CORE-010 | Primeiro usuário da empresa é sempre admin | Trigger no cadastro |
| RN-CORE-011 | Sessão expira em 7 dias (com "Lembrar-me") | Config Supabase |
| RN-CORE-012 | Timeout de inatividade: 30 minutos | Implementar no client |

---

## 14. Critérios de Aceitação

### 14.1 Checklist - Autenticação

| ID | Critério | Prioridade |
|----|----------|------------|
| AUTH-01 | Tela de login funcional | Must |
| AUTH-02 | Validação de email e senha | Must |
| AUTH-03 | Mensagem de erro clara (login falho) | Must |
| AUTH-04 | Opção "Lembrar-me" persiste | Should |
| AUTH-05 | Recuperação de senha envia email | Must |
| AUTH-06 | Cadastro em 3 passos funcionando | Must |
| AUTH-07 | Indicador de progresso visível | Should |
| AUTH-08 | Validação de CNPJ (formato) | Must |
| AUTH-09 | Validação de senha forte | Must |
| AUTH-10 | Logout funciona | Must |

### 14.2 Checklist - Perfil da Empresa

| ID | Critério | Prioridade |
|----|----------|------------|
| PERFIL-01 | Formulário carrega dados da empresa | Must |
| PERFIL-02 | Upload de logo funciona (drag & drop) | Must |
| PERFIL-03 | Preview do logo após upload | Should |
| PERFIL-04 | Busca de CEP automática (ViaCEP) | Must |
| PERFIL-05 | Campos de endereço preenchidos automaticamente | Must |
| PERFIL-06 | Color picker funcional | Should |
| PERFIL-07 | Preview da loja em tempo real | Should |
| PERFIL-08 | Salvamento persiste no Supabase | Must |
| PERFIL-09 | Toast de sucesso ao salvar | Must |

### 14.3 Checklist - Dashboard

| ID | Critério | Prioridade |
|----|----------|------------|
| DASH-01 | Sidebar visível e navegável | Must |
| DASH-02 | Header com logo empresa + avatar | Must |
| DASH-03 | Mensagem de boas-vindas personalizada | Should |
| DASH-04 | Checklist de 7 tarefas visível | Must |
| DASH-05 | Barra de progresso atualiza conforme tasks | Should |
| DASH-06 | Cards placeholder dos 4 módulos | Must |
| DASH-07 | Widget MEL exibe mensagem contextual | Should |
| DASH-08 | Sidebar colapsa em tablet | Should |
| DASH-09 | Bottom nav aparece no mobile | Must |

### 14.4 Checklist - Banco de Dados

| ID | Critério | Prioridade |
|----|----------|------------|
| DB-01 | Tabela me_empresas criada | Must |
| DB-02 | Tabela me_usuarios criada | Must |
| DB-03 | Tabela me_configuracoes criada | Must |
| DB-04 | RLS policies ativas | Must |
| DB-05 | Índices em campos de busca | Should |
| DB-06 | Triggers de updated_at funcionando | Should |
| DB-07 | Teste: criação de empresa funciona | Must |
| DB-08 | Teste: isolamento de dados (RLS) | Must |

### 14.5 Checklist - Responsividade

| ID | Critério | Prioridade |
|----|----------|------------|
| RESP-01 | Desktop (1920px): Layout OK | Must |
| RESP-02 | Laptop (1366px): Layout OK | Must |
| RESP-03 | Tablet (768px): Sidebar colapsada | Must |
| RESP-04 | Mobile (375px): Bottom nav visível | Must |
| RESP-05 | Mobile: Formulários usáveis | Must |
| RESP-06 | Touch targets mínimo 44px | Should |
| RESP-07 | Performance < 3s em 3G | Should |

### 14.6 Definição de Pronto (Definition of Done)

```
✅ PRONTO = TODOS os itens "Must" das 5 categorias
         + Code Review aprovado
         + Testes em staging passando
         + Responsividade verificada em 4 breakpoints
         + Lighthouse score > 80 (Performance, A11y)
         + RLS policies testadas
```

---

## 15. Riscos e Mitigações

### Risco 1: Integração Supabase Complexa
**Descrição:** Configuração de Auth + RLS pode ter complexidade inesperada.
**Impacto:** Alto | **Probabilidade:** Média
**Mitigação:**
- Usar templates de RLS da documentação Supabase
- Testar isolamento desde o início
- Ter fallback para modo "demo" sem auth

### Risco 2: Upload de Logo em Storage
**Descrição:** Configuração de buckets e permissões pode atrasar.
**Impacto:** Médio | **Probabilidade:** Média
**Mitigação:**
- Começar com base64 no banco (simplificado)
- Migrar para Storage na Sprint 02
- Limitar tamanho máximo (5MB)

### Risco 3: Responsividade Mobile
**Descrição:** Multi-step forms podem ser complexos no mobile.
**Impacto:** Médio | **Probabilidade:** Média
**Mitigação:**
- Testar em dispositivos reais desde o dia 1
- Priorizar mobile-first no CSS
- Simplificar layout em telas pequenas

### Risco 4: ViaCEP Indisponível
**Descrição:** API externa pode falhar ou ter rate limit.
**Impacto:** Baixo | **Probabilidade:** Baixa
**Mitigação:**
- Campos de endereço editáveis manualmente
- Cache de CEPs buscados
- Fallback silencioso (sem erro crítico)

---

## 16. Notas Técnicas

### 16.1 Estrutura de Arquivos

```
📁 src/
├── 📁 app/
│   ├── 📁 (auth)/
│   │   ├── 📁 login/
│   │   │   └── page.tsx
│   │   ├── 📁 cadastro/
│   │   │   └── page.tsx
│   │   ├── 📁 recuperar-senha/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── 📁 (dashboard)/
│   │   ├── 📁 dashboard/
│   │   │   └── page.tsx
│   │   ├── 📁 minha-empresa/
│   │   │   └── page.tsx
│   │   ├── 📁 configuracoes/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── 📁 components/
│   │       ├── sidebar.tsx
│   │       ├── header.tsx
│   │       └── bottom-nav.tsx
│   │
│   ├── 📁 components/
│   │   ├── 📁 ui/              # shadcn components
│   │   ├── 📁 forms/
│   │   │   ├── login-form.tsx
│   │   │   ├── cadastro-step1.tsx
│   │   │   ├── cadastro-step2.tsx
│   │   │   ├── cadastro-step3.tsx
│   │   │   └── empresa-form.tsx
│   │   ├── 📁 upload/
│   │   │   └── logo-upload.tsx
│   │   ├── 📁 onboarding/
│   │   │   ├── checklist.tsx
│   │   │   └── progress-bar.tsx
│   │   └── 📁 mel/
│   │       └── widget-mel.tsx
│   │
│   ├── 📁 hooks/
│   │   ├── use-auth.ts
│   │   ├── use-empresa.ts
│   │   ├── use-usuario.ts
│   │   └── use-cep.ts
│   │
│   ├── 📁 lib/
│   │   ├── 📁 supabase/
│   │   │   ├── client.ts
│   │   │   └── server.ts
│   │   ├── 📁 mocks/
│   │   │   ├── empresa.ts
│   │   │   └── usuario.ts
│   │   ├── utils.ts
│   │   └── validations.ts
│   │
│   ├── 📁 types/
│   │   ├── empresa.ts
│   │   ├── usuario.ts
│   │   └── index.ts
│   │
│   └── 📁 stores/
│       ├── auth-store.ts
│       └── empresa-store.ts
│
├── 📁 supabase/
│   ├── 📁 migrations/
│   │   ├── 001_create_me_empresas.sql
│   │   ├── 002_create_me_usuarios.sql
│   │   ├── 003_create_me_configuracoes.sql
│   │   └── 004_setup_rls.sql
│   └── seed.sql
│
└── 📁 public/
    └── logo-uniq.svg
```

### 16.2 Configuração do Supabase

```typescript
// src/lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Tipagens das tabelas
export type Tables = {
  me_empresas: Empresa;
  me_usuarios: Usuario;
  me_configuracoes: Configuracoes;
};
```

### 16.3 Variáveis de Ambiente

```bash
# .env.local
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon
VITE_APP_NAME=UNIQ Empresas
VITE_APP_URL=http://localhost:5173
```

---

## 17. Referências

### 17.1 Inspirações de Design

- **Sidebar:** Slack, Discord (colapsável, ícones claros)
- **Dashboard:** Stripe (cards minimalistas, dados limpos)
- **Formulários:** Notion (campos limpos, sem bordas excessivas)
- **Onboarding:** Linear (checklist elegante, progresso claro)
- **Multi-step:** Vercel signup (passos claros, validação em tempo real)

### 17.2 Documentação

- [Supabase Auth](https://supabase.com/docs/guides/auth)
- [Supabase Storage](https://supabase.com/docs/guides/storage)
- [Supabase RLS](https://supabase.com/docs/guides/auth/row-level-security)
- [ViaCEP API](https://viacep.com.br/)
- [shadcn/ui](https://ui.shadcn.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Documento gerado em:** 30/03/2026 10:00 BRT  
**Pesquisador:** @vibe-researcher  
**Fase:** FASE 01 - Research (SDD)  
**Próxima Fase:** FASE 02 - Planning (@vibe-planner)  
**Status:** 🟢 PRONTO PARA PLANNING  

---

> ⚠️ **IMPORTANTE:** Este é um documento de especificação de produto (PRD). Não contém código implementado. A implementação será realizada na FASE 03 por @vibe-implementer baseado na SPEC técnica que será gerada na FASE 02.

> 🎯 **PRÓXIMOS PASSOS:**
> 1. Usuário deve limpar contexto do chat
> 2. Chamar @vibe-planner para gerar SPEC.md
> 3. Aguardar aprovação do SPEC
> 4. Chamar @vibe-implementer para desenvolvimento

---

## Anexo: Resumo Executivo para Stakeholders

### O que estamos construindo?
A **base do UNIQ Empresas**: sistema de autenticação, gestão da empresa e dashboard inicial.

### Por que é importante?
Sem este módulo, nada funciona. É a fundação de todo o sistema.

### Quanto tempo leva?
**10 dias úteis** (30/03 - 10/04/2026)

### O que o usuário vai conseguir fazer?
1. Criar conta em 5 minutos
2. Cadastrar empresa com CNPJ
3. Personalizar marca (logo, cores)
4. Acessar dashboard com guia de onboarding
5. Usar em qualquer dispositivo

### Quais são os riscos?
- Integração com Supabase (mitigado com templates)
- Upload de logo (mitigado com base64 fallback)
- Responsividade mobile (mitigado com mobile-first)

### Quando estará pronto?
**10/04/2026** para testes internos  
**15/04/2026** para beta testers (4 clientes)
