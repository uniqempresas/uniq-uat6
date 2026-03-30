# 🎨 UI Map - Dashboard UNIQ (REDESENHADO)

**Versão:** 2.0 - Com Melhores Práticas  
**Data:** 30/03/2026  
**Base:** Pesquisa de dashboards + Diretrizes Frontend  
**Status:** 🔴 Pronto para Figma

---

## 🎯 PRINCÍPIOS APLICADOS

### 1. Regra dos 5 Segundos
> Usuário entende o estado do negócio em 5 segundos ou menos

### 2. Hierarquia Visual (Layout em Z)
```
1. Saudação (quem + quando)
2. KPIs principais (3 cards)
3. Contexto (tendência)
4. Ações (o que fazer)
```

### 3. Mobile-First
- Design começa no mobile (375px)
- Expande para desktop (1440px)
- Touch targets mínimo 44px

### 4. Acessibilidade
- Contraste WCAG AA
- Labels semânticos
- Keyboard navigation
- Screen reader friendly

---

## 📱 DASHBOARD - VERSÃO MOBILE (375px)

### Estrutura Vertical (Scroll)

```
┌─────────────────────────────┐
│ [Header]                    │
│ ☰  Gráfica Mendes    [🔔👤]│ ← Logo empresa + notificações
├─────────────────────────────┤
│                             │
│ 👋 Bom dia, Carlos!         │ ← Saudação personalizada
│ Segunda, 30 de Março        │
│                             │
├─────────────────────────────┤
│                             │
│  💰 FATURAMENTO HOJE        │ ← KPI 1 (Card Grande)
│                             │
│     R$ 1.240                │ ← Número principal (36px)
│                             │
│   ↑ 15% vs ontem            │ ← Comparativo (14px)
│   Meta: R$ 2.000/dia        │ ← Contexto
│                             │
│   ████████████░░░░ 62%      │ ← Progresso visual
│                             │
├─────────────────────────────┤
│                             │
│  [🛒 VENDAS]    [👥 CLIENTES]│ ← KPIs 2 e 3 (Cards menúdos)
│                             │
│      8              3       │
│   +2 hoje        1 novo     │
│                             │
├─────────────────────────────┤
│                             │
│  📈 VENDAS - ÚLTIMOS 7 DIAS │ ← Contexto
│                             │
│   R$3k │         ╱╲         │ ← Sparkline simples
│        │    ╱╲  ╱  ╲        │
│   R$2k │   ╱  ╲╱    ╲___    │
│        │  ╱                   │
│   R$1k │ ╱                    │
│        └───────────────────   │
│        S T Q Q S S D         │
│                             │
├─────────────────────────────┤
│                             │
│  📋 O QUE PRECISA DE        │ ← Ações (To-Do)
│     ATENÇÃO HOJE            │
│                             │
│  ┌─────────────────────────┐│
│  │ ⏰ 14:00 - Ana Silva   ││
│  │    Agendamento         ││
│  │              [Ver →]   ││
│  ├─────────────────────────┤│
│  │ 🔔 Pagamento atrasado  ││
│  │    R$ 450 - João       ││
│  │           [Cobrar →]   ││
│  ├─────────────────────────┤│
│  │ ⚠️ Estoque baixo       ││
│  │    Camiseta Preta (2)  ││
│  │            [Repor →]   ││
│  └─────────────────────────┘│
│                             │
├─────────────────────────────┤
│                             │
│  💬 MEL DIZ:                │ ← Insight da IA
│                             │
│  ┌─────────────────────────┐│
│  │ 👤                      ││
│  │ "Você está tendo um    ││
│  │  ótimo dia! Já faturou ││
│  │  62% da meta. Que tal  ││
│  │  postar no Instagram   ││
│  │  às 19h?"              ││
│  │                         ││
│  │ [Ver dica →]  [✓ Ok]   ││
│  └─────────────────────────┘│
│                             │
├─────────────────────────────┤
│                             │
│  📊 SEU PROGRESSO           │ ← Onboarding
│                             │
│  4/7 completo (57%)         │
│  ████████████░░░░░░░░       │
│                             │
│  ☑ Completar perfil        │
│  ☑ Adicionar primeiro      │
│    produto                 │
│  ☑ Conectar WhatsApp       │
│  ☑ Configurar pagamentos   │
│  ☐ Adicionar primeiro      │
│    cliente ← [Fazer agora] │
│  ☐ Primeira venda          │
│  ☐ Convidar colaborador    │
│                             │
├─────────────────────────────┤
│  📊  🏢  ➕  👤  ⚙️         │ ← Bottom Navigation
│ Dash Emp. Add Perfil Conf  │
└─────────────────────────────┘
```

---

## 🖥️ DASHBOARD - VERSÃO DESKTOP (1440px)

### Layout em 3 Colunas

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Sidebar 240px]                                                                       │
│ ┌──────────┐  ┌───────────────────────────────────────────────────────────────────┐ │
│ │ [Logo]   │  │ [Header] Gráfica Mendes                         [🔔] [👤 Carlos ▼]│ │
│ │  UNIQ    │  ├───────────────────────────────────────────────────────────────────┤ │
│ │          │  │                                                                   │ │
│ │  📊 Dash │  │ 👋 Bom dia, Carlos!                           📅 Seg, 30 Mar 2026│ │
│ │  🏢 Emp. │  │                                                                   │ │
│ │  👥 CRM  │  ├───────────────────────────────────────────────────────────────────┤ │
│ │  🛒 Vend │  │                                                                   │ │
│ │  📦 Est. │  │ ┌──────────────────┬──────────────────┬──────────────────┐        │ │
│ │  💰 Fin. │  │ │  💰              │  🛒              │  👥              │        │ │
│ │  ────    │  │ │ FATURAMENTO      │ VENDAS HOJE      │ CLIENTES ATIVOS  │        │ │
│ │  ⚙️ Conf │  │ │                  │                  │                  │        │ │
│ │          │  │ │   R$ 1.240       │      8           │      12          │        │ │
│ │          │  │ │                  │                  │                  │        │ │
│ │          │  │ │ ↑ 15% vs ontem   │ +2 vs ontem      │ +1 novo hoje     │        │ │ │
│ │          │  │ │ Meta: R$ 2.000   │ Meta: 10/dia     │ Meta: 20         │        │ │
│ │          │  │ │ ████████░░ 62%   │ ████████░░ 80%   │ ██████░░░░ 60%   │        │ │
│ │          │  │ └──────────────────┴──────────────────┴──────────────────┘        │ │
│ │          │  │                                                                   │ │
│ │          │  ├───────────────────────────────────────────────────────────────────┤ │
│ │          │  │                                                                   │ │
│ │          │  │ ┌───────────────────────────────────┬───────────────────────────┐ │ │
│ │          │  │ │ 📈 VENDAS - ÚLTIMOS 7 DIAS       │ 📋 O QUE PRECISA DE       │ │ │
│ │          │  │ │                                   │    ATENÇÃO HOJE          │ │ │
│ │          │  │ │                                   │                           │ │ │
│ │          │  │ │   R$3k │        ╱╲               │ ⏰ Agendamentos           │ │ │
│ │          │  │ │        │   ╱╲  ╱  ╲              │    14:00 - Ana Silva     │ │ │
│ │          │  │ │   R$2k │  ╱  ╲╱    ╲___          │    16:00 - João Paulo    │ │ │
│ │          │  │ │        │ ╱                          [Ver agenda →]         │ │ │
│ │          │  │ │   R$1k │╱                          │                           │ │ │
│ │          │  │ │        └─────────────────          ├─────────────────────────┤ │ │
│ │          │  │ │        S T Q Q S S D               │ 🔔 Pagamentos           │ │ │
│ │          │  │ │                                   │    R$ 450 atrasado       │ │ │
│ │          │  │ │   Total: R$ 12.400                │    R$ 230 vence amanhã   │ │ │
│ │          │  │ │   Média diária: R$ 1.771          │                          │ │ │
│ │          │  │ │                                   │ [Cobrar →]  [Ignorar]    │ │ │
│ │          │  │ │   [Ver relatório completo →]      │                          │ │ │
│ │          │  │ │                                   │                           │ │ │
│ │          │  │ └───────────────────────────────────┴───────────────────────────┘ │ │
│ │          │  │                                                                   │ │
│ │          │  │ ┌──────────────────────────────┬───────────────────────────────┐ │ │
│ │          │  │ │ 💬 MEL - SEU CONSULTOR       │ 📊 SEU PROGRESSO              │ │ │
│ │          │  │ │                              │                               │ │ │
│ │          │  │ │ 👤 [Avatar]                  │ 4/7 tarefas completas (57%)   │ │ │
│ │          │  │ │                              │ ████████████░░░░░░░░          │ │ │
│ │          │  │ │ "Você está tendo um ótimo   │                               │ │ │
│ │          │  │ │  dia! Já faturou 62% da     │ ☑ Completar perfil           │ │ │
│ │          │  │ │  meta. Que tal postar no     │ ☑ Adicionar produto          │ │ │
│ │          │  │ │  Instagram às 19h para       │ ☑ Conectar WhatsApp          │ │ │
│ │          │  │ │  bater a meta?"             │ ☑ Configurar pagamentos      │ │ │
│ │          │  │ │                              │ ☐ Adicionar cliente ← [Fazer]│ │ │
│ │          │  │ │ [Ver análise →]  [✓ Obrigado]│ ☐ Primeira venda             │ │ │
│ │          │  │ │                              │ ☐ Convidar colaborador       │ │ │
│ │          │  │ └──────────────────────────────┴───────────────────────────────┘ │ │
│ │          │  │                                                                   │ │
│ │          │  └───────────────────────────────────────────────────────────────────┘ │
│ └──────────┘                                                                        │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 COMPONENTES DETALHADOS

### 1. CARD DE KPI PRINCIPAL (Faturamento)

**Mobile:**
```
┌─────────────────────────────┐
│ 💰 FATURAMENTO HOJE         │ ← Ícone + Label (14px)
│                             │
│        R$ 1.240             │ ← Valor (36px, bold)
│                             │
│    ↑ 15% vs ontem           │ ← Tendência (14px)
│    Meta: R$ 2.000/dia       │ ← Contexto (12px)
│                             │
│    ████████████░░░░ 62%     │ ← Progress bar
│                             │
└─────────────────────────────┘

Specs:
- Background: #FFFFFF
- Border: 1px solid #E5E7EB
- Border Radius: 12px
- Padding: 20px
- Shadow: 0 2px 8px rgba(0,0,0,0.06)
```

**Desktop (3 cards lado a lado):**
```
┌──────────────┬──────────────┬──────────────┐
│  💰          │  🛒          │  👥          │
│ FATURAMENTO  │ VENDAS HOJE  │CLIENTES      │
│              │              │ATIVOS        │
│   R$ 1.240   │     8        │     12       │
│              │              │              │
│ ↑ 15%        │ +2 vs ontem  │ +1 novo      │
│ Meta: R$2k   │ Meta: 10/dia │ Meta: 20     │
│ ████░░ 62%   │ ████░░ 80%   │ ███░░░ 60%   │
└──────────────┴──────────────┴──────────────┘
```

### 2. GRÁFICO SPARKLINE

**Mobile:**
```
📈 VENDAS - ÚLTIMOS 7 DIAS

R$3k │         ╱╲
     │    ╱╲  ╱  ╲
R$2k │   ╱  ╲╱    ╲___
     │  ╱
R$1k │ ╱
     └───────────────────
     S T Q Q S S D

Legenda:
- Linha: #3B82F6 (azul)
- Espessura: 3px
- Suavizada (curva)
- Sem grid (limpo)
- Hover: mostra valor
```

### 3. LISTA DE AÇÕES (To-Do)

**Design:**
```
┌─────────────────────────────┐
│ ⏰ 14:00 - Ana Silva       │ ← Ícone + Título
│    Agendamento - Corte     │ ← Descrição
│                 [Ver →]    │ ← Ação
├─────────────────────────────┤
│ 🔔 Pagamento em atraso     │
│    R$ 450 - João Silva     │
│        [Cobrar →]          │
├─────────────────────────────┤
│ ⚠️ Estoque crítico         │
│    Camiseta Preta M (2 un) │
│         [Repor →]          │
└─────────────────────────────┘

Specs:
- Ícone: 20px, cor semântica
- Divider: 1px solid #E5E7EB
- Hover: background #F9FAFB
- Touch target: 44px mínimo
```

**Cores Semânticas:**
- ⏰ Agendamento: `#3B82F6` (azul)
- 🔔 Pagamento: `#F59E0B` (amarelo)
- ⚠️ Estoque: `#EF4444` (vermelho)
- ✅ Completo: `#22C55E` (verde)

### 4. WIDGET MEL (IA)

**Design Conversacional:**
```
┌─────────────────────────────┐
│ 👤 [Avatar 40px]           │
│                             │
│ "Você está tendo um ótimo  │ ← Mensagem
│  dia! Já faturou 62% da    │
│  meta. Que tal postar no   │
│  Instagram às 19h?"        │
│                             │
│ [Ver análise →]  [✓ Ok]    │ ← Ações
└─────────────────────────────┘

Specs:
- Background: #F0FDF4 (verde claro)
- Border-left: 4px solid #86CB92
- Avatar: border-radius 50%
- Mensagem: 14px, itálico opcional
- Botões: outline style
```

### 5. PROGRESSO ONBOARDING

**Design:**
```
📊 SEU PROGRESSO
4/7 tarefas completas (57%)

████████████████████░░░░░░░░░░

☑ Completar perfil           ✓ Done
☑ Adicionar primeiro         ✓ Done
  produto
☑ Conectar WhatsApp          ✓ Done
☑ Configurar pagamentos      ✓ Done
☐ Adicionar primeiro    [→]  Current
  cliente
☐ Primeira venda
☐ Convidar colaborador

Specs:
- Barra: 8px height, border-radius 4px
- Completo: #22C55E
- Pendente: #E5E7EB
- Current: destaque + botão ação
```

---

## 📐 ESPECIFICAÇÕES TÉCNICAS

### Grid System

**Desktop (1440px):**
```
Sidebar: 240px fixa
Content: calc(100% - 240px)
Grid: 12 colunas
Gutter: 24px
Padding: 32px

KPIs: 3 colunas (4 cols cada)
Middle: 8 cols (gráfico) + 4 cols (ações)
Bottom: 6 cols (MEL) + 6 cols (Progresso)
```

**Mobile (375px):**
```
Full width: 375px
Padding: 16px
Stack: 1 coluna
Gap: 16px entre cards
```

### Tipografia

| Elemento | Desktop | Mobile | Peso | Cor |
|----------|---------|--------|------|-----|
| Saudação | 24px | 20px | 600 | #1F2937 |
| Data | 14px | 12px | 400 | #627271 |
| KPI Valor | 48px | 36px | 700 | #1F2937 |
| KPI Label | 14px | 12px | 500 | #627271 |
| Comparativo | 14px | 12px | 500 | contextual |
| Lista Título | 16px | 14px | 600 | #1F2937 |
| Lista Desc | 14px | 12px | 400 | #627271 |
| Botão | 14px | 14px | 500 | #3E5653 |

### Cores

**Primárias:**
```css
--bg-primary: #EFEFEF
--bg-card: #FFFFFF
--primary: #3E5653
--primary-hover: #1F2937
--accent: #86CB92
--text-primary: #1F2937
--text-secondary: #627271
--border: #E5E7EB
```

**Semânticas:**
```css
--success: #22C55E
--warning: #F59E0B
--error: #EF4444
--info: #3B82F6
```

### Espaçamentos

```
4px  - xs (ícones pequenos)
8px  - sm (gap interno)
16px - md (padding mobile)
20px - lg (padding cards)
24px - xl (gap entre cards)
32px - 2xl (padding desktop)
```

---

## 🎭 ESTADOS E INTERAÇÕES

### Estados dos Cards

**Default:**
```
Background: #FFFFFF
Border: 1px solid #E5E7EB
Shadow: 0 2px 8px rgba(0,0,0,0.06)
```

**Hover (Desktop):**
```
Transform: translateY(-2px)
Shadow: 0 4px 12px rgba(0,0,0,0.1)
Transition: all 200ms ease-out
```

**Active/Pressed:**
```
Transform: translateY(0)
Shadow: 0 1px 4px rgba(0,0,0,0.06)
```

### Loading States

**Card Carregando:**
```
┌─────────────────────────────┐
│ ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░ │ ← Skeleton
│                             │
│ ▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░ │
│                             │
│ ▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░ │
└─────────────────────────────┘

- Animação: pulse (opacity 0.5 - 1)
- Background: #E5E7EB
- Border-radius: 4px
```

### Empty States

**Sem Vendas (Novo usuário):**
```
┌─────────────────────────────┐
│                             │
│        [🛒 Ícone 64px]      │
│                             │
│    Você ainda não tem      │
│    vendas hoje             │
│                             │
│    Que tal cadastrar seu   │
│    primeiro produto?       │
│                             │
│    [Cadastrar Produto →]   │
│                             │
└─────────────────────────────┘

- Ícone: cor #627271 (muted)
- Texto: centralizado
- Ação: botão primário
```

---

## 📱 RESPONSIVIDADE DETALHADA

### Breakpoints

```
Mobile:     0 - 767px   (1 coluna)
Tablet:     768 - 1023px (2 colunas)
Desktop:    1024px+      (3 colunas + sidebar)
```

### Adaptações por Breakpoint

**Mobile → Tablet:**
- KPIs: 1 → 3 colunas
- Gráfico + Ações: empilhados → lado a lado
- Sidebar: não existe → drawer

**Tablet → Desktop:**
- Sidebar aparece (240px fixa)
- Bottom nav: some
- Mais informação visível
- Gráfico maior

### Componentes Responsivos

**KPI Cards:**
```
Mobile:  100% width, stack vertical
Tablet:  33.33% width, 3 colunas
Desktop: 33.33% width, maior padding
```

**Gráfico:**
```
Mobile:  Height: 150px, simplified
Tablet:  Height: 200px, full data
Desktop: Height: 250px, full + legend
```

**Lista de Ações:**
```
Mobile:  Full width, scroll
Tablet:  50% width, lado do gráfico
Desktop: 33% width, compact
```

---

## 🎯 CHECKLIST PARA FIGMA

### Componentes Base
- [ ] **Colors** - Todos os tokens de cor documentados
- [ ] **Typography** - Estilos de texto (mobile + desktop)
- [ ] **Buttons** - Primary, Secondary, Ghost, Icon
- [ ] **Inputs** - Text, Select (para filtros futuros)
- [ ] **Cards** - KPI Card (3 variações), Action Card
- [ ] **Icons** - Lucide icons (48px, 32px, 20px)

### Componentes Compostos
- [ ] **KPICard** - Com variações de tamanho
- [ ] **SparklineChart** - Gráfico de linha simples
- [ ] **ActionList** - Lista de ações com estados
- [ ] **MELWidget** - Chat bubble style
- [ ] **ProgressBar** - Linear com steps
- [ ] **BottomNav** - Mobile navigation
- [ ] **Sidebar** - Desktop navigation
- [ ] **Header** - Com notificações e avatar

### Telas (Frames)
- [ ] **Dashboard Mobile** - 375px
- [ ] **Dashboard Tablet** - 768px
- [ ] **Dashboard Desktop** - 1440px

### Estados
- [ ] **Default** - Todos os componentes
- [ ] **Hover** - Cards, botões
- [ ] **Loading** - Skeleton states
- [ ] **Empty** - Sem dados
- [ ] **Success** - Toast, confirmações
- [ ] **Error** - Alertas

### Prototipação
- [ ] **Fluxo Mobile** - Scroll vertical
- [ ] **Fluxo Desktop** - Navegação sidebar
- [ ] **Hover Effects** - Cards e botões
- [ ] **Empty State** - Primeiro acesso

---

## 💡 INOVAÇÕES ESPECÍFICAS

### 1. "Dinheiro na Mão" (Futuro)
```
💰 DINHEIRO NA MÃO HOJE

R$ 3.450

├─ Em caixa:          R$ 1.200
├─ A receber (hoje):  R$ 800
├─ A receber (7 dias): R$ 2.100
└─ Contas (amanhã):   -R$ 550
```

### 2. "Previsão Inteligente" (IA)
```
🔮 PREVISÃO PARA HOJE

Baseado no histórico de sextas-feiras:
→ Esperado: R$ 4.500 - R$ 5.200
→ Meta restante: R$ 1.200

💡 Dica: Postar no Instagram às 19h
   (seu horário de pico de vendas)
```

### 3. "Momento de Celebrar"
```
🎉 PARABÉNS! NOVO RECORDE!

Você bateu seu recorde de vendas!
R$ 5.230 hoje
(superou R$ 4.800 de ontem)

[Compartilhar →]
```

---

## 🚀 PRÓXIMOS PASSOS

1. **Criar no Figma:**
   - Componentes base (colors, typography)
   - Componentes compostos
   - 3 telas responsivas

2. **Validar:**
   - Contraste (WCAG AA)
   - Touch targets (44px)
   - Legibilidade

3. **Testar:**
   - Fluxo de primeiro acesso
   - Fluxo de usuário ativo
   - Estados de loading/empty

4. **Documentar:**
   - Handoff para desenvolvimento
   - Especificações de animação
   - Estados de erro

---

**Documento criado em:** 30/03/2026  
**Baseado em:** Pesquisa de dashboards + Diretrizes Frontend  
**Versão:** 2.0 - Otimizado para Empreendedores  
**Status:** ✅ Pronto para Figma
