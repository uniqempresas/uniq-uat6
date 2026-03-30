# 🧭 UNIQ Empresas - Landing Page Design Brief
## Documento para Geração no Figma
### **Versão 2.0 - Paleta Oficial UNIQ

---

## 📋 RESUMO EXECUTIVO

**Produto:** UNIQ Empresas - Plataforma SaaS + IA Proativa  
**Protagonista:** MEL (Mentora Empresarial Local) - IA que trabalha para o empreendedor  
**Slogan:** "O Norte para Empreendedores - Comece Por Aqui"  
**Posicionamento:** "Digital Partner as a Service" - NÃO somos um ERP, somos seu parceiro digital

**Diferencial Único:** MEL é a única IA do mercado que trabalha PROATIVAMENTE para o empreendedor, não apenas responde quando chamada.

---

## 🎯 PÚBLICO-ALVO

**Personagem Principal: "Carlos, o Dono da Loja"**

- **Idade:** 35-50 anos
- **Negócio:** Pequeno comércio ou serviço local (varejo, gráfica, estética)
- **Tamanho:** 1-3 funcionários (solopreneur ou micro)
- **Faturamento:** R$ 8k-30k/mês
- **Tecnologia:** Usa WhatsApp + Instagram, mas não tem loja online
- **Personalidade:** Prático, sem tempo para aprender tech, valoriza relacionamento humano

**Suas Maiores Dores:**
1. ❌ Não tem tempo para aprender tecnologia (10/10)
2. ❌ Perde vendas por não ter loja online (9/10)
3. ❌ Fica preso no WhatsApp o dia todo (9/10)

**Seu Sonho:** Ter alguém que cuide da parte digital enquanto ele foca no que sabe fazer de melhor.

---

## 🎨 DIRETRIZES VISUAIS DA MARCA

> 📋 **Arquivo técnico completo:** `docs/desing/design-system.css`
> 
> Este arquivo contém todas as variáveis CSS, gradientes, sombras e configurações Tailwind prontas para uso.

### 🆔 LOGO

**Arquivo:** `docs/desing/Logo.png`

**Descrição:**
- Ícone: "U" estilizado em **verde musgo/forest** com elementos que lembram uma **bússola** (conecta com "O Norte")
- Texto: "UNIQ" em preto azulado + "EMPRESAS" em cinza
- Estilo: Moderno, geométrico, profissional

**Cores do Logo:**
- Verde Principal: `#2D5A45` (aproximado do logo)
- Texto UNIQ: `#1F2937` (Jet Black)
- Texto EMPRESAS: `#627271` (Dim Grey)

---

## 🎨 PALETA DE CORES OFICIAL (PALETA ORIGINAL UNIQ)

> **Nota:** Esta é a paleta oficial e definitiva da marca UNIQ Empresas.  
> A paleta anterior (`docs/desing/palette.scss`) foi a base inicial, mas esta versão expande com as cores de conversão (Coral) e as cores da MEL (Neon) para criar uma identidade visual completa e funcional.

### **CORES PRIMÁRIAS (Base)**

| Cor | Hex | Nome | Uso |
|-----|-----|------|-----|
| **Verde UNIQ** | `#2D5A45` | Forest Green | Logo, navbar, elementos principais |
| **Verde Escuro** | `#1F4A35` | Dark Forest | Hover states, backgrounds escuros |
| **Verde Menta** | `#86CB92` | Mint/Emerald | Destaques sutis, badges, ícones |
| **Verde Neon** | `#4ADE80` | Neon Green | Detalhes da MEL, acentos tecnológicos |

### **CORES SECUNDÁRIAS (Contraste)**

| Cor | Hex | Nome | Uso |
|-----|-----|------|-----|
| **Coral Energia** | `#F97316` | Vibrant Orange | **CTAs principais**, botões de conversão |
| **Coral Claro** | `#FB923C` | Light Coral | Hover em CTAs, badges de promoção |
| **Azul Profundo** | `#1E3A5F` | Deep Navy | Headers de seção, backgrounds alternados |
| **Azul Royal** | `#3B82F6` | Royal Blue | Links, ícones interativos |

### **CORES NEUTRAS (Base)**

| Cor | Hex | Nome | Uso |
|-----|-----|------|-----|
| **Preto Azulado** | `#1F2937` | Jet Black | Textos principais, títulos |
| **Cinza Escuro** | `#374151` | Dark Grey | Subtítulos, textos secundários |
| **Cinza Médio** | `#6B7280` | Medium Grey | Descrições, metadados |
| **Cinza Claro** | `#9CA3AF` | Light Grey | Placeholders, bordas |
| **Branco Gelo** | `#F9FAFB` | Off White | Backgrounds de seção |
| **Branco Puro** | `#FFFFFF` | White | Background principal, cards |

### **CORES SEMÂNTICAS (Funcionais)**

| Cor | Hex | Uso |
|-----|-----|-----|
| **Sucesso** | `#22C55E` | Confirmações, checkmarks, valores positivos |
| **Alerta** | `#F59E0B` | Avisos, atenção necessária |
| **Erro** | `#EF4444` | Erros, cancelamentos, valores negativos |
| **Info** | `#3B82F6` | Informações, dicas, links |

---

## 🎨 GRADIENTES OFICIAIS

### **Gradiente Principal (Hero)**
```css
background: linear-gradient(135deg, #1F2937 0%, #2D5A45 50%, #1F4A35 100%);
```
Uso: Hero sections, headers, backgrounds principais

### **Gradiente Verde (Destaques)**
```css
background: linear-gradient(90deg, #2D5A45 0%, #86CB92 100%);
```
Uso: Botões especiais, badges premium, cards em destaque

### **Gradiente Sunset (CTAs)**
```css
background: linear-gradient(90deg, #F97316 0%, #FB923C 100%);
```
Uso: Botões de conversão principais, CTAs, badges de urgência

### **Gradiente Sutil (Backgrounds)**
```css
background: linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%);
```
Uso: Cards, seções alternadas

---

## 📝 TIPOGRAFIA

**Fonte Principal:** Poppins (Google Fonts)
- URL: `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap`
- Estilo: Moderna, geométrica, amigável, excelente legibilidade

| Elemento | Tamanho | Peso | Cor | Uso |
|----------|---------|------|-----|-----|
| **H1 Hero** | 56-64px | Bold (700) | `#FFFFFF` ou `#1F2937` | Headline principal |
| **H2** | 40-48px | Semibold (600) | `#1F2937` | Títulos de seção |
| **H3** | 28-32px | Semibold (600) | `#1F2937` | Subtítulos |
| **H4** | 20-24px | Medium (500) | `#374151` | Títulos de cards |
| **Body Large** | 18px | Regular (400) | `#374151` | Parágrafos importantes |
| **Body** | 16px | Regular (400) | `#6B7280` | Texto padrão |
| **Small** | 14px | Regular (400) | `#9CA3AF` | Legendas, metadados |
| **Caption** | 12px | Medium (500) | `#6B7280` | Tags, labels |

**Fonte de Números (Opcional):** Poppins (mesma família, peso bold para destaque)

---

## 🎨 ESTILO VISUAL

### **Estética Geral**
- **Vibe:** Profissional mas acessível, tecnológico mas humano
- **Referência:** Notion + Shopify + Linear (moderno, limpo, eficiente)
- **Diretriz:** "Tecnologia que parece mágica, mas é simples"

### **Elementos de Design**

**Bordas:**
- Radius padrão: `8px` (cards, botões)
- Radius grande: `12-16px` (modais, containers)
- Radius full: `9999px` (pills, avatares)

**Sombras:**
- Sutil: `0 1px 3px rgba(0,0,0,0.1)`
- Média: `0 4px 6px rgba(0,0,0,0.1)`
- Grande: `0 10px 15px rgba(0,0,0,0.1)`
- Glow Verde: `0 0 20px rgba(134,203,146,0.3)` (para elementos da MEL)

**Ícones:**
- Biblioteca: **Lucide** ou **Phosphor**
- Estilo: Line icons, stroke 1.5-2px
- Tamanho: 20-24px (padrão), 32-40px (destaque)

---

## 👤 AVATAR DA MEL

**Arquivo:** `docs/desing/MELISSA.png`

**Descrição do Personagem:**
- **Nome:** MEL (Mentora Empresarial Local)
- **Aparência:** Feminina, jovem-profissional (25-35 anos)
- **Cabelo:** Loiro claro, ondulado
- **Olhos:** Azuis, expressivos e amigáveis
- **Vestimenta:** Farda/roupa futurista em preto/azul escuro
- **Destaque:** Detalhes em **verde neon** (#4ADE80) nos ombros e gola
- **Expressão:** Sorriso confiante, acolhedor, inteligente

**Características:**
- ✅ **NÃO é robótica** - aparência humana
- ✅ **Futurista mas amigável** - tecnologia acessível
- ✅ **Profissional** - transmite confiança
- ✅ **Acolhedora** - não intimidadora

**Aplicações:**
- Avatar em chat/conversas
- Ilustrações em landing page
- Ícone do app/brand
- Mascote da marca

**Cores Associadas à MEL:**
- Verde Neon: `#4ADE80` (detalhes, glows)
- Azul Escuro: `#1E3A5F` (fundo, contraste)
- Branco: `#FFFFFF` (highlight nos olhos)

---

## 🏗️ ESTRUTURA DA LANDING PAGE

### Estrutura Completa (8 Seções)

```
1. HERO SECTION (Acima da dobra)
2. SOCIAL PROOF (Prova social imediata)
3. O PROBLEMA (Dores do empreendedor)
4. A SOLUÇÃO - MEL (Apresentação da IA)
5. COMO FUNCIONA (Passo a passo)
6. O QUE VOCÊ RECEBE (Funcionalidades)
7. PREÇO (Transparência total)
8. FAQ + CTA FINAL
```

---

## 📝 COPY E CONTEÚDO POR SEÇÃO

### SEÇÃO 1: HERO SECTION

**Layout:** Full-width, altura 100vh ou ~800px, background com gradiente Verde UNIQ

**Background:** 
```css
background: linear-gradient(135deg, #1F2937 0%, #2D5A45 50%, #1F4A35 100%);
```

**Estrutura:**
- **Navbar:** Logo UNIQ (branco ou verde) + Menu (Como Funciona | Preço | FAQ) + CTA "Começar Agora"
- **Tagline:** Badge coral com "🚀 Setup em 24h"
- **Headline Principal (H1):**
  ```
  Tenha Uma Funcionária Digital
  Que Trabalha 24h Por Dia
  Enquanto Você Dorme
  ```

- **Subheadline:**
  ```
  A MEL é sua assistente de IA que cuida do seu negócio: 
  atende clientes, envia relatórios no WhatsApp e avisa 
  quando algo precisa da sua atenção. Sem você precisar 
  aprender tecnologia.
  ```

- **CTA Principal (Botão Grande):**
  ```
  🚀 Quero Minha MEL Agora
  Setup rápido a partir de R$ 329
  ```
  **Cor do botão:** Gradient Sunset (#F97316 → #FB923C)
  **Hover:** Brilho sutil + scale 1.02

- **Elemento Visual - Lado Direito:**
  - Avatar da MEL (da pasta docs/desing/MELISSA.png)
  - Ou: Mockup de celular mostrando conversa do WhatsApp com a MEL
  - Chat simulado:
    - "Bom dia! Ontem você teve 3 vendas 🎉"
    - "O estoque do produto X está acabando 📦"
    - "Sua cliente Maria faz aniversário amanhã 🎂"

- **Trust Badge abaixo do CTA:**
  ```
  ✅ Setup em 24h | ✅ Sem contrato de fidelidade | ✅ Suporte humano
  ```
  **Cor dos ícones:** Verde Menta (#86CB92)

---

### SEÇÃO 2: SOCIAL PROOF

**Layout:** Faixa branca com logos ou cards de depoimento
**Background:** `#FFFFFF`

**Conteúdo:**
```
"Já ajudamos empreendedores em Suzano a venderem mais"
```
**Cor do texto:** `#1F2937` (Jet Black)

**Stats (3 colunas):**
| Métrica | Valor | Descrição |
|---------|-------|-----------|
| **20+** | Empresas Ativas | Em Suzano e região |
| **3.5k+** | Atendimentos Automáticos | Pela MEL este mês |
| **15h** | Economizadas Por Semana | Tempo dos donos |

**Cores:**
- Números: `#2D5A45` (Verde UNIQ) em bold
- Texto: `#6B7280` (Cinza médio)

**Depoimento em destaque:**
```
"Antes eu passava o dia todo no WhatsApp respondendo a mesma coisa. 
Hoje a MEL faz isso e ainda me avisa quando um cliente VIP entra em contato. 
Consegui focar em crescer o negócio."

— Ana Paula, Dona da Ótica Visão Total
```
**Card:** Background `#F9FAFB`, borda 1px `#E5E7EB`, radius 12px

---

### SEÇÃO 3: O PROBLEMA

**Layout:** 2 colunas (texto + ilustração)
**Background:** `#F9FAFB` (cinza claro)

**Headline:**
```
Você Não Precisa de Mais Uma Ferramenta Complicada
```
**Cor:** `#1F2937`

**Subheadline:**
```
Você precisa de alguém que cuide da parte digital pra você
```
**Cor:** `#6B7280`

**Lista de Dores (com ícones ❌):**
1. **"Não tenho tempo para aprender tecnologia"**
   - Já tentou Shopify, Bling, Tiny... e desistiu no meio do caminho

2. **"Perdo vendas por não ter loja online"**
   - Clientes perguntam "vocês não vendem pelo Instagram?" e você não tem como atender

3. **"Fico preso no WhatsApp o dia todo"**
   - Respondendo as mesmas perguntas, perde tempo que poderia usar para crescer

4. **"Uso 5 apps diferentes que não conversam"**
   - Planilha aqui, anotação ali, e nada integrado

**Ícones ❌:** Cor `#EF4444` (erro)

**Transição para solução:**
```
E se você tivesse uma parceira que:
✅ Aprende seu negócio e trabalha sozinha
✅ Cuida do atendimento enquanto você dorme
✅ Te avisa só quando realmente precisa
✅ Tudo integrado num só lugar
```
**Ícones ✅:** Cor `#22C55E` (sucesso)

---

### SEÇÃO 4: A SOLUÇÃO - MEL (HEROI DA PÁGINA)

**Layout:** Background escuro, centralizado
**Background:** `#1E3A5F` (Deep Navy)

**Elemento Visual:** 
- Avatar da MEL grande (300-400px)
- Glow verde ao redor: `box-shadow: 0 0 60px rgba(74,222,128,0.3)`
- Ou: Vídeo/animação sutil da MEL

**Headline:**
```
Conheça a MEL
Sua Mentora Empresarial Local
```
**Cor:** `#FFFFFF`

**Subheadline:**
```
MEL não é só um chatbot. É uma inteligência artificial que:
```
**Cor:** `#9CA3AF` (cinza claro)

**Cards de Funcionalidades (3 colunas):**

**Card 1 - 🔔 Proativa**
```
Ela Te Avisa Antes Que Você Pergunte

• "Você tem 3 pedidos pendentes de ontem"
• "Sua cliente VIP entrou em contato"
• "O estoque do produto X está acabando"

MEL analisa seus dados e te avisa 
no WhatsApp sobre o que importa.
```
**Card:** Background `rgba(255,255,255,0.1)`, blur, border 1px `rgba(255,255,255,0.2)`

**Card 2 - 🤖 Autônoma**
```
Ela Atende Seus Clientes Sozinha

• Responde perguntas frequentes
• Envia catálogo e preços automaticamente
• Qualifica leads antes de passar pra você
• Funciona 24h, inclusive madrugada

Você só entra quando realmente 
precisa do toque humano.
```

**Card 3 - 📊 Inteligente**
```
Ela Te Manda Relatórios no WhatsApp

• "Bom dia! Ontem você vendeu R$ 1.247"
• "Seu produto mais vendido esta semana..."
• "Você está 15% acima do mês passado 🎉"

Dados simples, direto no celular,
sem dashboard complicado.
```

**CTA:**
```
🚀 Quero a MEL Trabalhando Pra Mim
```
**Botão:** Gradient Sunset, tamanho grande (py-4 px-8)

---

### SEÇÃO 5: COMO FUNCIONA

**Layout:** Background branco, 3 passos horizontais com linha conectando
**Background:** `#FFFFFF`

**Headline:**
```
De Zero a Loja Online em 3 Passos Simples
```

**Subheadline:**
```
Não é DIY (Do It Yourself). É DFY (Done For You).
A gente faz, você aprova.
```

**Passos com linha conectadora:**
- Linha: 2px `#86CB92` (verde menta)
- Números: Círculo 40px, background `#2D5A45`, texto branco

**Passo 1 (Ícone: 📝)**
```
1. Você Conta Sobre Seu Negócio
   
   Chamada de 30 minutos onde entendemos:
   • O que você vende
   • Como atende seus clientes hoje
   • Suas principais dores
   
   ⏱️ Duração: 30 minutos
```

**Passo 2 (Ícone: 🎨)**
```
2. A Gente Configura Tudo
   
   Nossa equipe monta:
   • Sua loja online personalizada
   • Catálogo com seus produtos
   • MEL treinada sobre seu negócio
   • Integração com seu WhatsApp
   
   ⏱️ Prazo: 24-48 horas
```

**Passo 3 (Ícone: 🚀)**
```
3. Você Começa a Vender
   
   Após aprovação:
   • Loja publicada e pronta
   • MEL ativa 24h por dia
   • Você recebe relatórios diários
   • Suporte quando precisar
   
   ✅ Comece a vender hoje mesmo
```

**Nota de rodapé:**
```
💡 "Não precisa aprender nada. A gente ensina o básico em 15 minutos,
   mas a MEL já sabe tudo que precisa sobre seu negócio."
```

---

### SEÇÃO 6: O QUE VOCÊ RECEBE

**Layout:** Grid de cards (3x2), ícones grandes
**Background:** `#F9FAFB`

**Headline:**
```
Tudo Que Você Precisa Para Vender Mais
Num Só Lugar
```

**Cards (6 funcionalidades):**

**🛒 Loja Online Pronta**
```
Catálogo profissional, checkout integrado,
carrinho de compras, tudo configurado.
```
**Ícone:** Shopping bag, cor `#2D5A45`

**🤖 MEL - IA Proativa**
```
Atendimento automático, relatórios no WhatsApp,
alertas inteligentes, qualificação de leads.
```
**Ícone:** Bot/Sparkles, cor `#F97316` (destaque especial)

**📦 Gestão Simples**
```
Cadastro de produtos, controle de estoque,
pedidos organizados, sem complicação.
```
**Ícone:** Package, cor `#2D5A45`

**💰 Relatórios no WhatsApp**
```
Vendas do dia, produtos mais vendidos,
comparativo mensal, tudo no seu celular.
```
**Ícone:** TrendingUp, cor `#22C55E`

**📱 Integração WhatsApp**
```
MEL responde seus clientes, envia catálogo,
qualifica leads, você só entra quando precisa.
```
**Ícone:** MessageCircle, cor `#25D366` (cor do WhatsApp)

**🎧 Suporte Humano**
```
Quando você precisar, tem alguém real
para te atender. Não fica falando com robô.
```
**Ícone:** Headphones, cor `#3B82F6`

**Card style:**
- Background: `#FFFFFF`
- Border: 1px `#E5E7EB`
- Radius: 12px
- Shadow: `0 1px 3px rgba(0,0,0,0.1)`
- Hover: Shadow aumenta + scale 1.02

**Nota:**
```
❌ O que NÃO temos (ainda): Emissão de nota fiscal.
✅ Se você precisa de NF, indicamos um parceiro contábil.
```

---

### SEÇÃO 7: PREÇO

**Layout:** Background cinza, cards de preços centralizados
**Background:** `#F9FAFB`

**Headline:**
```
Investimento Simples, Sem Surpresas
```

**Subheadline:**
```
Setup único + mensalidade acessível. 
Cancele quando quiser, sem multa.
```

**Card de Preço Destaque (maior, borda destacada):**
```
🚀 UNIQ Starter
Para quem quer começar a vender online

💰 Setup: R$ 329 (único)
💳 Mensalidade: R$ 109/mês

✅ Loja online personalizada
✅ MEL treinada para seu negócio
✅ Até 50 produtos no catálogo
✅ Relatórios diários no WhatsApp
✅ Suporte via WhatsApp
✅ Setup em até 48h

🎁 BÔNUS: Primeiro mês de mensalidade GRÁTIS

[QUERO COMEÇAR AGORA]
```

**Card style:**
- Background: `#FFFFFF`
- Border: 2px `#F97316` (coral)
- Shadow: `0 10px 25px rgba(249,115,22,0.2)`
- Badge "Mais Popular": Background `#F97316`, texto branco

**Card lateral (menor):**
```
⚡ Setup Expresso
Para quem precisa começar URGENTE

💰 Setup: R$ 499 (único)
💳 Mensalidade: R$ 109/mês

Tudo do Starter +
✅ Setup em 24h
✅ Prioridade no suporte
```

**Notas de rodapé:**
```
💳 Pagamento: Via PIX, cartão ou boleto
🚫 Sem fidelidade: Cancele quando quiser
❓ Dúvidas? Fale com a gente no WhatsApp
```

---

### SEÇÃO 8: FAQ + CTA FINAL

**Layout:** 2 colunas (FAQ esquerda + CTA direita)
**Background:** `#FFFFFF`

**Headline FAQ:**
```
Dúvidas Frequentes
```

**Accordion style:**
- Closed: Border-bottom 1px `#E5E7EB`
- Open: Background `#F9FAFB`, ícone rotação
- Ícone: ChevronDown, cor `#6B7280`

**Perguntas:**

**Q1: Preciso saber de tecnologia para usar?**
```
Não! A gente configura tudo pra você. Você só precisa
saber usar WhatsApp, e a MEL te avisa quando precisar
de alguma ação simples.
```

**Q2: E se eu já tiver uma loja no Instagram?**
```
Perfeito! A MEL integra com seu Instagram e passa a
atender seus clientes por lá também. Você não perde
nada, só ganha automatização.
```

**Q3: Posso cancelar quando quiser?**
```
Sim! Não tem contrato de fidelidade. Você pode cancelar
a qualquer momento, sem multa. Seu dinheiro de volta
se não gostar nos primeiros 7 dias.
```

**Q4: Como funciona o suporte?**
```
Você tem a MEL funcionando 24h, e quando precisar de
um humano, nosso time responde no WhatsApp em até
4h em horário comercial.
```

**Q5: E se eu não gostar da MEL?**
```
Garantia de 7 dias. Se não gostar, devolvemos 100%
do setup. Sem perguntas, sem burocracia.
```

---

**CTA FINAL (Direita, destacado):**

**Card de conversão:**
```
🎯 Pronto para ter sua MEL?

Comece agora e tenha sua loja online
funcionando em até 48h.

[🚀 QUERO MINHA MEL AGORA]

📞 Ou fale conosco no WhatsApp
   (11) 9XXXX-XXXX
   Respondemos em até 4h
```

**Card style:**
- Background: Gradient Verde (`#2D5A45` → `#1F4A35`)
- Texto: Branco
- Botão: `#F97316` (Coral) com texto branco
- Shadow: `0 10px 30px rgba(45,90,69,0.3)`

---

**Footer:**
```
UNIQ Empresas © 2026
O Norte para Empreendedores — Comece Por Aqui

[Sobre] [Como Funciona] [Preço] [FAQ] [Blog] [Contato]

📍 Suzano - SP | 📧 contato@uniqempresas.com.br | 📱 (11) 9XXXX-XXXX
```

**Background:** `#1F2937` (Jet Black)
**Texto:** `#9CA3AF` (cinza)
**Links:** `#FFFFFF` (branco) com hover `#86CB92`

---

## 📱 RESPONSIVIDADE

### Desktop (1200px+)
- 2 colunas em seções de conteúdo
- Navbar completa com menu
- Cards lado a lado
- Hero com imagem ao lado

### Tablet (768px - 1199px)
- 2 colunas onde caber, 1 onde não caber
- Menu hamburguer
- Cards em grid 2x2

### Mobile (<768px)
- 1 coluna única
- Menu hamburguer
- Hero empilhado (texto acima, imagem abaixo)
- Cards empilhados verticalmente
- CTA grande, fácil de clicar (mínimo 48px altura)
- Número de WhatsApp fixo no bottom (sticky)
- Fontes 10-15% menores

---

## 🎯 PALAVRAS-CHAVE E SEO

**Meta Tags:**
```
Title: UNIQ Empresas - Tenha uma Funcionária Digital Que Trabalha 24h | MEL IA
Description: A MEL é sua IA que cuida do negócio: atende clientes, envia relatórios no WhatsApp e avisa quando precisar. Setup em 24h a partir de R$ 329.
```

---

## ✅ CHECKLIST PARA DESIGN

- [x] Paleta de cores oficial aplicada (Verde UNIQ #2D5A45)
- [x] Avatar da MEL integrado (MELISSA.png)
- [x] Logo UNIQ posicionado corretamente
- [x] CTAs em Coral (#F97316) para conversão
- [x] Gradientes oficiais definidos
- [x] Tipografia Inter/Plus Jakarta Sans
- [x] Responsivo (mobile-first)
- [x] Contraste adequado (acessibilidade WCAG AA)
- [x] Ícones Lucide/Phosphor
- [x] Estilos de cards consistentes
- [x] Sombras e elevações definidas

---

## 🚀 CALL TO ACTION PRINCIPAL

**Frase:**
```
🚀 Quero Minha MEL Agora
Setup rápido a partir de R$ 329
```

**Cor:** Gradient Sunset (`#F97316` → `#FB923C`)

**Posições:**
1. Navbar (direita)
2. Hero (abaixo da subheadline)
3. Após apresentação da MEL
4. Final da seção de preço
5. Footer/CTA final

---

## 🎨 ARQUIVOS DE REFERÊNCIA

### **Arquivos de Design Oficiais:**
**Logo:** `docs/desing/Logo.png`  
**Logo Menor:** `docs/desing/Logo_Menor.png`  
**Avatar MEL:** `docs/desing/MELISSA.png`  
**🎨 Paleta Oficial UNIQ:** `docs/desing/design-system.css` ← **Cores, gradientes e variáveis**  
**Paleta Legada (base):** `docs/desing/palette.scss`  
**Mockup Stitch:** `docs/desing/stith.png`  
**Tela Modelo:** `docs/desing/Tela_modelo.png`

---

## 📝 NOTAS FINAIS PARA O DESIGNER

1. **MEL é o herói:** Use o avatar da MEL em destaque na seção 4
2. **Verde é a cor da marca:** #2D5A45 deve aparecer em navbar, logo, elementos principais
3. **Coral é para converter:** Use #F97316 em TODOS os botões de CTA
4. **Mantenha limpo:** Espaço em branco é seu amigo (padding generoso)
5. **Mobile-first:** 70% dos acessos serão pelo celular
6. **Tom humano:** Evite jargões, use linguagem conversacional
7. **MEL não é robô:** Destaque que ela é amigável, profissional, acessível

---

**Documento atualizado por:** NEO - O Arquiteto da UNIQ  
**Data:** Março 2026  
**Versão:** 2.0 - Paleta Oficial UNIQ  
**Fonte:** Poppins (Google Fonts)  
**Paleta:** Verde UNIQ #2D5A45 + Coral #F97316 (oficial)

---

🧭 **UNIQ: O Norte para Empreendedores — Comece Por Aqui**
