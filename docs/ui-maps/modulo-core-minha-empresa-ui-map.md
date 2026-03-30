# Mapa de UI - Core (Minha Empresa) - Vibe Sprint 01

> **Documento para Figma** - Criar telas baseado nestas especificações
> **Sprint:** 01 | **Período:** 30/03/2026 - 10/04/2026
> **Status:** 🔴 A iniciar

---

## 📊 RESUMO VISUAL DAS TELAS

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         5 TELAS DO SPRINT 01                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   TELA 1     │  │   TELA 2     │  │   TELA 3     │  │   TELA 4     │    │
│  │   LOGIN      │  │  CADASTRO    │  │    CORE      │  │   DASH       │    │
│  │              │  │  Multi-step  │  │  Minha Emp   │  │   BOARD      │    │
│  │  /login      │  │  /cadastro   │  │/minha-empresa│  │  /dashboard  │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                             │
│                              ┌──────────────┐                              │
│                              │   TELA 5     │                              │
│                              │CONFIGURAÇÕES │                              │
│                              │              │                              │
│                              │/configuracoes│                              │
│                              └──────────────┘                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 DESIGN SYSTEM UNIQ (Base para Figma)

### Cores Principais

| Token | HEX | Uso |
|-------|-----|-----|
| **Background** | `#EFEFEF` | Fundo da página |
| **Card** | `#FFFFFF` | Fundo de cards |
| **Primary** | `#2D5A45` | Botões primários, destaques |
| **Primary Hover** | `#1F2937` | Hover de botões |
| **Accent** | `#86CB92` | Sucesso, confirmações |
| **Text Primary** | `#1F2937` | Texto principal |
| **Text Secondary** | `#627271` | Labels, descrições |
| **Border** | `#E5E7EB` | Bordas, divisores |
| **Error** | `#EF4444` | Estados de erro |
| **Success** | `#22C55E` | Estados de sucesso |

### Tipografia

| Elemento | Fonte | Tamanho | Peso | Cor |
|----------|-------|---------|------|-----|
| **Título Página** | Poppins | 24px | 700 | `#1F2937` |
| **Subtítulo** | Poppins | 14px | 400 | `#627271` |
| **Label** | Poppins | 12px | 500 | `#627271` |
| **Input** | Poppins | 14px | 400 | `#1F2937` |
| **Botão** | Poppins | 14px | 600 | `#FFFFFF` |

### Espaçamentos (Grid 8px)

- **xs:** 4px
- **sm:** 8px
- **md:** 16px
- **lg:** 24px
- **xl:** 32px
- **2xl:** 48px

### Border Radius

- **Botões:** 8px
- **Inputs:** 8px
- **Cards:** 12px
- **Avatar:** 50% (circular)

---

## 🖥️ BREAKPOINTS

| Dispositivo | Largura | Comportamento |
|-------------|---------|---------------|
| **Desktop** | 1440px+ | Sidebar fixa 240px |
| **Laptop** | 1366px | Sidebar fixa 240px |
| **Tablet** | 768px | Sidebar colapsada/drawer |
| **Mobile** | 375px | Menu hamburger + bottom nav |

---

## 📱 TELA 1: LOGIN (/login)

### Layout Desktop
```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                                                                              │
│                                                                              │
│                         ┌──────────────────────────────────────────┐         │
│                         │                                          │         │
│                         │           [LOGO UNIQ 120px]              │         │
│                         │                                          │         │
│                         │   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │         │
│                         │                                          │         │
│                         │   Entre na sua conta                     │         │
│                         │                                          │         │
│                         │   Email *                                │         │
│                         │   ┌──────────────────────────────────┐   │         │
│                         │   │ carlos@grafica.com               │   │         │
│                         │   └──────────────────────────────────┘   │         │
│                         │                                          │         │
│                         │   Senha *                                │         │
│                         │   ┌──────────────────────────────────┐   │         │
│                         │   │ ●●●●●●●●              [👁️]       │   │         │
│                         │   └──────────────────────────────────┘   │         │
│                         │                                          │         │
│                         │   ☑ Lembrar-me                           │         │
│                         │                                          │         │
│                         │   ┌──────────────────────────────────┐   │         │
│                         │   │         [    ENTRAR    ]         │   │         │
│                         │   │         (bg: #2D5A45)            │   │         │
│                         │   └──────────────────────────────────┘   │         │
│                         │                                          │         │
│                         │   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │         │
│                         │                                          │         │
│                         │   Esqueci minha senha  •  Criar conta    │         │
│                         │                                          │         │
│                         └──────────────────────────────────────────┘         │
│                                                                              │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Layout Mobile
```
┌─────────────────────────────┐
│                             │
│                             │
│       [LOGO UNIQ]           │
│                             │
│   ━━━━━━━━━━━━━━━━━━━━━━━   │
│                             │
│   Entre na sua conta        │
│                             │
│   Email *                   │
│   ┌─────────────────────┐   │
│   │ carlos@grafica.com  │   │
│   └─────────────────────┘   │
│                             │
│   Senha *                   │
│   ┌─────────────────────┐   │
│   │ ●●●●●●●●    [👁️]    │   │
│   └─────────────────────┘   │
│                             │
│   ☑ Lembrar-me              │
│                             │
│   ┌─────────────────────┐   │
│   │     [ ENTRAR ]      │   │
│   └─────────────────────┘   │
│                             │
│   ━━━━━━━━━━━━━━━━━━━━━━━   │
│                             │
│   Esqueci senha • Criar     │
│                             │
└─────────────────────────────┘
```

### Componentes

#### Card Principal
- **Largura:** 420px (desktop) / 100% - 32px (mobile)
- **Padding:** 40px
- **Background:** `#FFFFFF`
- **Border Radius:** 12px
- **Shadow:** `0 1px 3px rgba(0,0,0,0.1)`

#### Logo UNIQ
- **Tamanho:** 120px largura
- **Posição:** Centro, topo do card
- **Margin bottom:** 32px

#### Inputs
- **Altura:** 44px
- **Padding:** 12px 16px
- **Border:** 1px solid `#E5E7EB`
- **Border Radius:** 8px
- **Fonte:** 14px Poppins

#### Botão Primário
- **Altura:** 48px
- **Background:** `#2D5A45`
- **Texto:** Branco, 14px, semibold
- **Border Radius:** 8px
- **Hover:** `#1F2937`

#### Checkbox "Lembrar-me"
- **Tamanho:** 16px
- **Label:** 14px, `#1F2937`

#### Links Secundários
- **Cor:** `#627271`
- **Hover:** `#1F4A35`
- **Fonte:** 14px

### Estados

#### Estado Default
- Todos os campos vazios
- Botão ativo

#### Estado Loading
- Botão mostra spinner
- Texto: "Entrando..."
- Campos desabilitados
- Opacidade reduzida

#### Estado Error
- Toast vermelho no topo
- Mensagem: "Email ou senha inválidos"
- Input de senha com borda vermelha

#### Estado Success
- Redirect automático para /dashboard
- Toast verde: "Bem-vindo de volta!"

---

## 📱 TELA 2: CADASTRO MULTI-STEP (/cadastro)

### Estrutura Geral
```
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO UNIQ]                                    Já tem conta? Entrar          │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│                                                                              │
│   ●──────○──────○              ← Step Indicator                             │
│   1      2      3                                                          │
│   Empresa  Admin  Tipo                                                     │
│                                                                              │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│                                                                              │
│   [CONTEÚDO DO STEP ATUAL]                                                  │
│                                                                              │
│   [← Voltar]              [Próximo →]  ou  [Criar Conta →]                   │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Step Indicator
```
Versão Desktop:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   ●──────────●──────────○
   1          2          3
  Empresa    Admin      Tipo
  
Legenda:
● = Completo (verde #22C55E)
● = Atual (azul #3B82F6)
○ = Futuro (cinza #E5E7EB)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### STEP 1: Dados da Empresa

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│   Dados da Empresa                                                           │
│                                                                              │
│   CNPJ *                                                                     │
│   ┌────────────────────────────────────────────────────────────────────┐     │
│   │ 12.345.678/0001-90                                                 │     │
│   └────────────────────────────────────────────────────────────────────┘     │
│   ✓ CNPJ válido - Razão Social preenchida automaticamente                   │
│                                                                              │
│   Razão Social *                                                             │
│   ┌────────────────────────────────────────────────────────────────────┐     │
│   │ Gráfica Rápida Mendes Ltda                                         │     │
│   └────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
│   Nome Fantasia                                                              │
│   ┌────────────────────────────────────────────────────────────────────┐     │
│   │ Gráfica Mendes                                                     │     │
│   └────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
│                                    [Próximo →]                               │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Campos:**
- CNPJ: Máscara automática `00.000.000/0000-00`
- Razão Social: Auto-preenchida (mock), editável
- Nome Fantasia: Opcional

### STEP 2: Dados do Administrador

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│   Dados do Administrador                                                     │
│                                                                              │
│   Nome Completo *                                                            │
│   ┌────────────────────────────────────────────────────────────────────┐     │
│   │ Carlos Mendes                                                      │     │
│   └────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
│   Email *                                                                    │
│   ┌────────────────────────────────────────────────────────────────────┐     │
│   │ carlos@graficamendes.com                                           │     │
│   └────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
│   Telefone *                                                                 │
│   ┌────────────────────────────────────────────────────────────────────┐     │
│   │ (11) 98765-4321                                                    │     │
│   └────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
│   Senha *                                                                    │
│   ┌────────────────────────────────────────────────────────────────────┐     │
│   │ ●●●●●●●●●●●●                                                       │     │
│   └────────────────────────────────────────────────────────────────────┘     │
│   ℹ Deve ter pelo menos 8 caracteres, 1 maiúscula e 1 número                 │
│                                                                              │
│   Confirmar Senha *                                                          │
│   ┌────────────────────────────────────────────────────────────────────┐     │
│   │ ●●●●●●●●●●●●                                                       │     │
│   └────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
│   [← Voltar]                              [Próximo →]                        │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Campos:**
- Nome: 3-255 caracteres
- Email: Formato válido, único
- Telefone: Máscara `(00) 00000-0000`
- Senha: 8+ chars, 1 maiúscula, 1 número
- Confirmar Senha: Deve ser igual

### STEP 3: Tipo de Negócio

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│   Qual o tipo do seu negócio?                                                │
│                                                                              │
│   ┌────────────────┐  ┌────────────────┐  ┌────────────────┐                │
│   │                │  │                │  │                │                │
│   │      🏪        │  │      🛠️        │  │      🏭        │                │
│   │                │  │                │  │                │                │
│   │    VAREJO      │  │    SERVIÇO     │  │   INDÚSTRIA    │                │
│   │                │  │                │  │                │                │
│   │  Lojas,        │  │  Clínicas,     │  │  Fábricas,     │                │
│   │  comércio      │  │  consultoria   │  │  produção      │                │
│   │                │  │                │  │                │                │
│   └────────────────┘  └────────────────┘  └────────────────┘                │
│                                                                              │
│   ┌────────────────────────────────────────┐                                │
│   │                                        │                                │
│   │                  📦                    │                                │
│   │                                        │                                │
│   │               ATACADO                  │                                │
│   │                                        │                                │
│   │           Distribuidores,              │                                │
│   │               B2B                      │                                │
│   │                                        │                                │
│   └────────────────────────────────────────┘                                │
│                                                                              │
│   [← Voltar]                              [Criar Conta →]                    │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Cards de Seleção:**
- **Tamanho:** ~200px largura
- **Padding:** 24px
- **Border:** 2px solid `#E5E7EB`
- **Border Radius:** 12px
- **Hover:** Border `#2D5A45`, shadow leve
- **Selected:** Border `#2D5A45`, bg `#F0FDF4`

**Ícones:**
- 🏪 Varejo: `Store` do Lucide
- 🛠️ Serviço: `Wrench` do Lucide
- 🏭 Indústria: `Factory` do Lucide
- 📦 Atacado: `Package` do Lucide

---

## 📱 TELA 3: MINHA EMPRESA (/minha-empresa)

### Layout Desktop (Com Sidebar)
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Sidebar 240px]                                                                       │
│ ┌──────────┐  ┌───────────────────────────────────────────────────────────────────┐ │
│ │ [Logo]   │  │ [Header] Minha Empresa                                         💾 │ │
│ │  UNIQ    │  ├───────────────────────────────────────────────────────────────────┤ │
│ │          │  │                                                                 │ │
│ │  📊 Dash │  │ ┌─────────────────────────────┐  ┌─────────────────────────────┐ │ │
│ │  🏢 Emp. │  │ │    DADOS DA EMPRESA         │  │     PREVIEW DA LOJA         │ │ │
│ │  👥 CRM  │  │ │                             │  │                             │ │ │
│ │  🛒 Vend │  │ │  Logo da Empresa            │  │  ┌─────────────────────┐    │ │ │
│ │  📦 Est. │  │ │  ┌───────────────────────┐  │  │  │                     │    │ │ │
│ │  💰 Fin. │  │  │  │                       │  │  │  │    [LOGO]           │    │ │ │
│ │  ─────   │  │  │  │   [📁 Dropzone]       │  │  │  │                     │    │ │ │
│ │  ⚙️ Conf │  │  │  │   Arraste ou clique   │  │  │  │   Gráfica Mendes    │    │ │ │
│ │          │  │  │  │   para upload         │  │  │  │                     │    │ │ │
│ │          │  │  │  │                       │  │  │  │   🟢 Aberto agora   │    │ │ │
│ │          │  │  │  └───────────────────────┘  │  │  │                     │    │ │ │
│ │          │  │  │  ou [Preview da imagem]     │  │  │   📍 São Paulo, SP  │    │ │ │
│ │          │  │  │                             │  │  │   📱 (11) 3456-7890 │    │ │ │
│ │          │  │  │  CNPJ                       │  │  │                     │    │ │ │
│ │          │  │  │  12.345.678/0001-90         │  │  │   [Ver Loja →]      │    │ │ │
│ │          │  │  │  (não editável - cinza)     │  │  └─────────────────────┘    │ │ │
│ │          │  │  │                             │  │                             │ │ │
│ │          │  │  │  Razão Social *             │  │                             │ │ │
│ │          │  │  │  [Gráfica Rápida Mendes...] │  │                             │ │ │
│ │          │  │  │                             │  │                             │ │ │
│ │          │  │  │  Nome Fantasia              │  │                             │ │ │
│ │          │  │  │  [Gráfica Mendes]           │  │                             │ │ │
│ │          │  │  │                             │  │                             │ │ │
│ │          │  │  │  Email *                    │  │                             │ │ │
│ │          │  │  │  [contato@graficamen...]    │  │                             │ │ │
│ │          │  │  │                             │  │                             │ │ │
│ │          │  │  │  Telefone *                 │  │                             │ │ │
│ │          │  │  │  [(11) 3456-7890        ]   │  │                             │ │ │
│ │          │  │  │                             │  │                             │ │ │
│ │          │  │  │  Website                    │  │                             │ │ │
│ │          │  │  │  [www.graficamendes.com]    │  │                             │ │ │
│ │          │  │  └─────────────────────────────┘  └─────────────────────────────┘ │ │ │
│ │          │  │                                                                 │ │ │
│ │          │  │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │          │  │ │ ENDEREÇO                                                     │ │ │
│ │          │  │ │                                                             │ │ │
│ │          │  │ │  CEP *                              [🔍 Buscar]            │ │ │
│ │          │  │ │  [01310-100                      ]                          │ │ │
│ │          │  │ │                                                             │ │ │
│ │          │  │ │  Logradouro *          Número *        Complemento         │ │ │
│ │          │  │ │  [Avenida Paulista      ] [1000      ]   [Sala 1501       ]│ │ │
│ │          │  │ │                                                             │ │ │
│ │          │  │ │  Bairro *           Cidade *              Estado *          │ │ │
│ │          │  │ │  [Bela Vista        ] [São Paulo         ] [SP            ]│ │ │
│ │          │  │ └─────────────────────────────────────────────────────────────┘ │ │
│ │          │  │                                                                 │ │ │
│ │          │  │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │          │  │ │ CORES DA MARCA                                               │ │ │
│ │          │  │ │                                                             │ │ │
│ │          │  │ │  Cor Primária *          Cor Secundária *                   │ │ │
│ │          │  │ │  ┌────────┐ ┌──────────┐   ┌────────┐ ┌──────────┐          │ │ │
│ │          │  │ │  │🔵      │ │#3B82F6   │   │🟢      │ │#10B981   │          │ │ │
│ │          │  │ │  └────────┘ └──────────┘   └────────┘ └──────────┘          │ │ │
│ │          │  │ │                                                             │ │ │
│ │          │  │ │  [Paleta sugerida: Azul + Verde]  [Paleta: Roxo + Laranja] │ │ │
│ │          │  │ └─────────────────────────────────────────────────────────────┘ │ │
│ │          │  │                                                                 │ │
│ └──────────┘  └───────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### Componentes Específicos

#### Upload de Logo (Dropzone)
```
Estado 1 - Empty:
┌─────────────────────────────────────┐
│                                     │
│           [📁 Ícone 48px]           │
│                                     │
│     Arraste ou clique para          │
│       fazer upload do logo          │
│                                     │
│   PNG, JPG ou SVG (máximo 5MB)      │
│                                     │
└─────────────────────────────────────┘
Border: 2px dashed #E5E7EB
Background: #F9FAFB
Border Radius: 12px

Estado 2 - Com Preview:
┌─────────────────────────────────────┐
│                                     │
│      [IMAGEM DO LOGO]               │
│      object-fit: contain            │
│      max-height: 200px              │
│                                     │
│        [🗑️ Remover]                 │
│                                     │
└─────────────────────────────────────┘
```

#### Busca de CEP
- Input CEP com máscara `00000-000`
- Botão "Buscar" ao lado (ícone 🔍)
- Loading state ao buscar
- Campos preenchidos automaticamente

#### Color Picker
- Quadrado colorido clicável (40x40px)
- Input HEX ao lado
- Paletas sugeridas como chips

#### Preview da Loja
- Card com sombra
- Mostra como a loja ficará
- Atualiza em tempo real com as cores

---

## 📱 TELA 4: DASHBOARD (/dashboard)

### Layout Desktop
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Sidebar 240px]                                                                       │
│ ┌──────────┐  ┌───────────────────────────────────────────────────────────────────┐ │
│ │ [Logo]   │  │ [Header]                                                         │ │
│ │  UNIQ    │  │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │          │  │ │ 🏢 Gráfica Mendes          [🔔] [👤 Carlos ▼]              │ │ │
│ │  ────    │  │ └─────────────────────────────────────────────────────────────┘ │ │
│ │  📊 Dash │  │                                                                 │ │
│ │  🏢 Emp. │  │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │  👥 CRM  │  │ │ 👋 Bem-vindo de volta, Carlos!                              │ │ │
│ │  🛒 Vend │  │ │                                                             │ │ │
│ │  📦 Est. │  │ │ Você está no UNIQ há 3 dias. Complete seu onboarding        │ │ │
│ │  💰 Fin. │  │ │ abaixo para aproveitar ao máximo a plataforma.              │ │ │
│ │  ────    │  │ └─────────────────────────────────────────────────────────────┘ │ │
│ │  ⚙️ Conf │  │                                                                 │ │
│ │          │  │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │          │  │ │ 📋 SEU PROGRESSO (3/7 completos)                            │ │ │
│ │          │  │ │                                                             │ │ │
│ │          │  │ │ ████████████░░░░░░░░░░░░░░░░░░ 43%                          │ │ │
│ │          │  │ │                                                             │ │ │
│ │          │  │ │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│ │ │
│ │          │  │ │ ☑ Completar perfil da empresa                               │ │ │
│ │          │  │ │   ✓ Concluído em 30/03/2026                                 │ │ │
│ │          │  │ │ ☐ Adicionar primeiro produto/serviço                       │ │ │
│ │          │  │ │   └─ [Adicionar agora →]                                    │ │ │
│ │          │  │ │ ☐ Conectar WhatsApp                                         │ │ │
│ │          │  │ │ ☐ Configurar pagamentos                                     │ │ │
│ │          │  │ │ ☐ Adicionar primeiro cliente                                │ │ │
│ │          │  │ │ ☐ Fazer primeira venda                                      │ │ │
│ │          │  │ │ ☐ Convidar colaborador                                      │ │ │
│ │          │  │ └─────────────────────────────────────────────────────────────┘ │ │
│ │          │  │                                                                 │ │
│ │          │  │ ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐ │ │
│ │          │  │ │ 📊 VENDAS        │ │ 👥 CLIENTES      │ │ 📦 ESTOQUE       │ │
│ │          │  │ │                  │ │                  │ │                  │ │
│ │          │  │ │  Você ainda não  │ │  Você ainda não  │ │  Você ainda não  │ │
│ │          │  │ │  tem vendas      │ │  tem clientes    │ │  tem produtos    │ │
│ │          │  │ │                  │ │                  │ │                  │ │
│ │          │  │ │ [Começar agora]  │ │   [Adicionar]    │ │   [Cadastrar]    │ │
│ │          │  │ └──────────────────┘ └──────────────────┘ └──────────────────┘ │ │
│ │          │  │                                                                 │ │
│ │          │  │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │          │  │ │ 💬 MENSAGEM DO SEU CONSULTOR (MEL)                          │ │ │
│ │          │  │ │                                                             │ │ │
│ │          │  │ │ "Oi Carlos! Vi que você completou o cadastro. Que tal       │ │ │
│ │          │  │ │ agora adicionarmos seus primeiros produtos? É bem rápido!"  │ │ │
│ │          │  │ │                                                             │ │ │
│ │          │  │ │ [👤 Avatar]  Henrique        [Responder →]                  │ │ │
│ │          │  │ └─────────────────────────────────────────────────────────────┘ │ │
│ │          │  │                                                                 │ │
│ └──────────┘  └───────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### Componentes do Dashboard

#### Header
- **Altura:** 64px
- **Background:** `#FFFFFF`
- **Border bottom:** 1px solid `#E5E7EB`
- **Conteúdo:** Nome da empresa (esquerda) | Notificações + Avatar (direita)

#### Mensagem de Boas-vindas
- **Background:** Gradiente suave ou cor clara
- **Padding:** 24px
- **Border Radius:** 12px
- **Título:** "👋 Bem-vindo de volta, {nome}!"
- **Subtítulo:** Texto explicativo personalizado

#### Onboarding Checklist
- **Título:** "📋 SEU PROGRESSO (X/Y completos)"
- **Progress Bar:** Visual com porcentagem
- **Tasks:** Lista com checkbox
  - ☑ Completo (verde)
  - ☐ Pendente (cinza) + link de ação

#### Cards Placeholder (3 colunas)
```
Card:
- Border: 1px solid #E5E7EB
- Border Radius: 12px
- Padding: 24px
- Background: #FFFFFF
- Hover: shadow leve

Ícone: 48px, cor #627271
Título: 18px, bold
Descrição: 14px, #627271
Botão: Outline style
```

#### Widget MEL
- **Border left:** 4px solid `#86CB92`
- **Background:** `#F0FDF4` (verde muito claro)
- **Avatar:** 40px circular
- **Mensagem:** Texto em itálico ou aspas

---

## 📱 TELA 5: CONFIGURAÇÕES (/configuracoes)

### Layout com Abas
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Sidebar]                                                                             │
│ ┌─────────────────────────────────────────────────────────────────────────────────┐ │
│ │ [Header] Configurações                                                         │ │
│ ├─────────────────────────────────────────────────────────────────────────────────┤ │
│ │                                                                                 │ │
│ │ ┌────────────┬────────────┬────────────────┬────────────────┐                  │ │
│ │ │  🏢 Dados  │  👥 Usuá-  │  🔔 Notifica-  │  🔌 Integra-   │                  │ │
│ │ │  da Emp    │   rios     │     ções       │    ções        │                  │ │
│ │ └────────────┴────────────┴────────────────┴────────────────┘                  │ │
│ │         │                                                    (tab ativo)       │ │
│ │         ▼                                                                       │ │
│ │ ═══════════════════════════════════════════════════════════════════════════    │ │
│ │ ABA: DADOS DA EMPRESA (ativa)                                                  │ │
│ │ ═══════════════════════════════════════════════════════════════════════════    │ │
│ │                                                                                 │ │
│ │ (Mesmo conteúdo da tela Minha Empresa, mas sem preview lateral)                │ │
│ │                                                                                 │ │
│ └─────────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### Abas

#### Aba 1: Dados da Empresa
- Mesmo formulário da tela "Minha Empresa"
- Sem o card de preview

#### Aba 2: Usuários (Placeholder)
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   Em breve...                                               │
│                                                             │
│   A gestão de usuários e permissões será liberada           │
│   na próxima atualização.                                   │
│                                                             │
│   [🔔 Me avise quando estiver pronto]                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Aba 3: Notificações
```
┌─────────────────────────────────────────────────────────────┐
│ 📧 EMAIL                                                    │
│ [━━━━━━━━━━━●━━━━━━━] Toggle: Ativar notificações por email │
│                                                             │
│ Receber:                                                    │
│ ☑ Resumo diário de vendas                                   │
│ ☑ Novos clientes                                            │
│ ☑ Pedidos pendentes                                         │
│ ☐ Relatórios semanais                                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 📱 WHATSAPP                                                 │
│ [━━━━━━●━━━━━━━━━━━━] Toggle: Conectar WhatsApp Business    │
│                                                             │
│ Status: Desconectado                                        │
│                                                             │
│ [Conectar WhatsApp →]                                       │
└─────────────────────────────────────────────────────────────┘
```

#### Aba 4: Integrações (Placeholder)
- Similar à aba Usuários
- "Em breve... Integrações com mercado pago, Stripe..."

---

## 📱 MOBILE: Bottom Navigation

```
Para telas < 768px, substituir sidebar por bottom nav:

┌──────────────────────────────────────────────────┐
│                                                  │
│  [CONTEÚDO DA PÁGINA]                            │
│                                                  │
│                                                  │
│                                                  │
├──────────────────────────────────────────────────┤
│  📊    🏢    ➕    👤    ⚙️                       │
│ Dash   Emp.  Add   Perfil Conf                   │
│                                                  │
└──────────────────────────────────────────────────┘

Altura: 64px
Background: #FFFFFF
Border top: 1px solid #E5E7EB
Ícones: 24px
Labels: 10px
```

---

## 🎯 CHECKLIST PARA FIGMA

### Componentes Base (Criar primeiro)
- [ ] **Colors** - Todos os tokens de cor
- [ ] **Typography** - Estilos de texto
- [ ] **Buttons** - Primary, Secondary, Outline, Ghost
- [ ] **Inputs** - Text, Password, Select, Textarea
- [ ] **Cards** - Card padrão, Card com shadow
- [ ] **Icons** - Biblioteca Lucide (48 ícones principais)

### Componentes Compostos
- [ ] **Sidebar** - Expandida, Colapsada
- [ ] **Header** - Com notificações e avatar
- [ ] **BottomNav** - Mobile
- [ ] **StepIndicator** - 3 steps
- [ ] **ProgressBar** - Com porcentagem
- [ ] **OnboardingTask** - Completo vs Pendente
- [ ] **WidgetMEL** - Mensagem do consultor
- [ ] **UploadZone** - Dropzone para logo
- [ ] **ColorPicker** - Com input HEX

### Telas (Frames)
- [ ] **Login** - Desktop + Mobile
- [ ] **Cadastro Step 1** - Desktop + Mobile
- [ ] **Cadastro Step 2** - Desktop + Mobile
- [ ] **Cadastro Step 3** - Desktop + Mobile
- [ ] **Minha Empresa** - Desktop + Mobile
- [ ] **Dashboard** - Desktop + Mobile
- [ ] **Configurações** - Desktop + Mobile (4 abas)

### Estados
- [ ] **Default** - Todos os componentes
- [ ] **Hover** - Botões, links, cards
- [ ] **Loading** - Botões, inputs
- [ ] **Error** - Inputs, toast
- [ ] **Success** - Toast, confirmações
- [ ] **Empty** - Listas, uploads
- [ ] **Disabled** - Botões, inputs

---

## 📐 ESPAÇAMENTOS E GRID

### Grid System
- **Desktop:** 12 colunas, 24px gutter
- **Tablet:** 8 colunas, 16px gutter
- **Mobile:** 4 colunas, 16px gutter

### Container
- **Desktop:** max-width 1440px, centralizado
- **Content area:** calc(100% - 240px sidebar)
- **Padding:** 24px em todas as telas

---

## 🎨 ASSETS NECESSÁRIOS

### Logo
- **Nome:** logo-uniq.svg
- **Tamanhos:** 120px (login), 40px (header)
- **Formato:** SVG (escalável)

### Ícones (Lucide)
Principais ícones usados:
- `Store` - Varejo
- `Wrench` - Serviço
- `Factory` - Indústria
- `Package` - Atacado
- `LayoutDashboard` - Dashboard
- `Building2` - Empresa
- `Users` - CRM
- `ShoppingCart` - Vendas
- `Package` - Estoque
- `Wallet` - Financeiro
- `Settings` - Configurações
- `Eye` / `EyeOff` - Mostrar/esconder senha
- `Upload` - Upload de arquivo
- `Search` - Buscar CEP
- `Check` - Checkbox marcado
- `Bell` - Notificações
- `ChevronLeft` / `ChevronRight` - Navegação
- `Plus` - Adicionar
- `Trash2` - Remover
- `Edit` - Editar

---

## 📝 NOTAS PARA O FIGMA

1. **Use Auto Layout** - Facilita responsividade
2. **Componentes Variants** - Estados dos componentes
3. **Constraints** - Para responsividade
4. **Styles** - Cores e tipografia centralizados
5. **Prototipação** - Fluxos de navegação entre telas

---

**Documento criado em:** 30/03/2026  
**Para:** Criação das telas no Figma  
**Baseado em:** PRD-vibe-sprint-01-core.md
