# 🎯 Pesquisa: Melhores Práticas para Dashboard de SaaS

**Data:** 30/03/2026  
**Fonte:** Análise de 30+ artigos e exemplos de dashboards de sucesso  
**Foco:** Pequenos negócios e empreendedores (público UNIQ)

---

## 📊 RESUMO EXECUTIVO

### 🔑 Descoberta Principal
> **"A maioria dos dashboards falha não por falta de dados, mas por excesso deles. O melhor dashboard é aquele que o usuário consegue entender em 5 segundos."**

Dashboards de sucesso como Stripe, Notion e Geckoboard seguem o princípio:
- **3-5 métricas principais** visíveis imediatamente
- **Visual hierárquico** - do geral ao específico
- **Ações claras** - não apenas dados, mas "o que fazer"

---

## 🎨 1. ESTRUTURA IDEAL DO DASHBOARD

### Layout em Z (Leitura Natural)

```
┌─────────────────────────────────────────────────────────────────┐
│  [LOGO]                    [NOTIFICAÇÕES] [PERFIL]             │ ← Header (sempre visível)
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  👋 BOM DIA, CARLOS!                    📅 Seg, 30 de Março    │ ← Saudação personalizada
│  Aqui está o resumo do seu negócio hoje:                         │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ 💰 FATURAMENTO│  │ 🛒 VENDAS    │  │ 👥 CLIENTES  │          │ ← KPIs Principais
│  │              │  │              │  │              │          │   (Visão Geral)
│  │  R$ 5.230   │  │    23       │  │     8        │          │
│  │  +12% vs ontem│  │  +5 hoje    │  │  2 novos     │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  📈 GRÁFICO: VENDAS DOS ÚLTIMOS 7 DIAS                          │ ← Tendência
│  [Gráfico de linha simples]                                     │   (Contexto)
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                              │                                   │
│  📋 O QUE PRECISA DE          │  💬 MEL DIZ:                    │
│     ATENÇÃO HOJE              │  "Seu estoque do produto X      │ ← Ações & Insights
│                              │   está acabando. Que tal         │   (Prioridades)
│  ⏰ 3 agendamentos hoje       │   repor agora?"                 │
│  🔔 2 pagamentos pendentes    │                              │
│  ⚠️ 1 produto em falta        │  [Ver sugestão →]               │
│                              │                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📈 2. MÉTRICAS ESSENCIAIS (KPIs)

### As 5 Métricas que Todo Empreendedor Precisa Ver

| # | Métrica | Por Que Importa | Formato Ideal |
|---|---------|----------------|---------------|
| **1** | **💰 Faturamento do Dia** | Dinheiro que entrou hoje | Grande número + comparativo |
| **2** | **🛒 Total de Vendas** | Quantidade de transações | Número + gráfico mini |
| **3** | **📦 Ticket Médio** | Valor médio por venda | R$ + tendência |
| **4** | **👥 Clientes Ativos** | Base de clientes | Total + novos hoje |
| **5** | **📊 Meta do Mês** | Progresso vs objetivo | Barra de progresso % |

### Métricas Secundárias (Expandir/Aba)

**Financeiras:**
- Contas a receber (próximos 7 dias)
- Contas a pagar (próximos 7 dias)
- Saldo em caixa
- Lucro do dia

**Operacionais:**
- Produtos em falta
- Agendamentos hoje
- Tarefas pendentes
- Pedidos em andamento

**Marketing:**
- Visitas na loja virtual
- Conversão (visitas → vendas)
- Origem das vendas (Instagram, WhatsApp, etc.)

---

## 🎯 3. ELEMENTOS VISUAIS RECOMENDADOS

### A. Cards de KPI (Números Principais)

**Design:**
```
┌────────────────────────────┐
│  [ÍCONE]  TÍTULO          │
│                            │
│      R$ 5.230             │ ← Grande, bold
│                            │
│   ↑ 12% vs ontem          │ ← Comparativo
│   (R$ 4.670)              │ ← Valor anterior
└────────────────────────────┘
```

**Especificações:**
- **Ícone:** 32px, cor do tema
- **Número principal:** 36-48px, bold
- **Comparativo:** 14px, cor verde (↑) ou vermelho (↓)
- **Background:** Branco ou cor clara
- **Border radius:** 12px
- **Shadow:** Sutil (0 2px 8px rgba(0,0,0,0.08))

### B. Gráficos (Use com Moderação!)

**Melhores tipos para empreendedores:**

| Tipo | Uso | Exemplo |
|------|-----|---------|
| **Linha** | Tendência ao longo do tempo | Vendas nos últimos 7 dias |
| **Barra** | Comparativo simples | Vendas por dia da semana |
| **Pizza** | Distribuição (máx 4 fatias) | Origem das vendas |
| **Progresso** | Meta vs Realizado | Meta mensal de faturamento |

**⚠️ Evite:**
- Gráficos 3D (distorce a percepção)
- Múltiplos eixos Y (confuso)
- Cores excessivas (máx 3-4)
- Gráficos complexos (radar, área, etc.)

**Exemplo de Gráfico de Linha Ideal:**
```
Vendas - Últimos 7 Dias

R$3k │    ╱╲
     │   ╱  ╲    ╱╮
R$2k │  ╱    ╲  ╱  ╲
     │ ╱      ╲╱    ╲___
R$1k │╱
     └──────────────────
      Seg Ter Qua Qui Sex Sáb Dom
```

### C. Lista de Ações (To-Do Inteligente)

**Design:**
```
📋 O QUE PRECISA DE ATENÇÃO

┌────────────────────────────────────────┐
│ ⏰ 3 agendamentos hoje                 │
│    09:00 - Ana Silva                   │
│    14:00 - João Paulo                  │
│    16:00 - Maria Costa                 │
│                              [Ver →]   │
├────────────────────────────────────────┤
│ 🔔 2 pagamentos pendentes              │
│    R$ 450 - Vencido há 2 dias          │
│    R$ 230 - Vence amanhã               │
│                              [Cobrar →]│
├────────────────────────────────────────┤
│ ⚠️ 3 produtos com estoque baixo        │
│    Camiseta Preta M (2 unidades)       │
│    Caneca Personalizada (3 unidades)   │
│                              [Repor →] │
└────────────────────────────────────────┘
```

### D. Widget do MEL (IA/Consultor)

**Design Conversacional:**
```
💬 SEU CONSULTOR DIZ:

┌────────────────────────────────────────┐
│ 👤 [Avatar]                            │
│                                        │
│ "Oi Carlos! Percebi que você tem 3    │
│  produtos em falta. Posso te ajudar   │
│  a criar uma lista de compras?"       │
│                                        │
│  [Ver produtos →]  [Ignorar]          │
└────────────────────────────────────────┘
```

---

## 🚀 4. DASHBOARDS DE REFERÊNCIA (Inspiração)

### A. Stripe Dashboard ⭐ (Ouro Padrão)

**O que faz dele excelente:**
- ✅ **Simplicidade extrema** - Apenas 3-4 números principais
- ✅ **Contexto imediato** - "Você faturou X ontem" vs "Na semana passada"
- ✅ **Ação contextual** - Botões de ação ao lado dos dados
- ✅ **Gráficos limpos** - Linhas simples, cores só onde importa

**Elementos copiáveis:**
- Comparativo "vs período anterior"
- Botões de ação contextual
- Layout em grid de 3 colunas
- Cores só para indicar positivo/negativo

### B. Notion Dashboard (Produtividade)

**O que faz dele excelente:**
- ✅ **Personalização** - Usuário escolhe o que ver
- ✅ **Widgets modulares** - Arrastar e soltar
- ✅ **Visual limpo** - Muito whitespace
- ✅ **Progresso visual** - Barras de progresso claras

**Elementos copiáveis:**
- Widgets reorganizáveis
- Barras de progresso para metas
- Cards com ícones grandes
- Separação visual entre seções

### C. Geckoboard (TV Dashboards)

**O que faz dele excelente:**
- ✅ **Números enormes** - Legíveis de longe
- ✅ **Cores semânticas** - Verde= bom, Vermelho=atenção
- ✅ **Atualização em tempo real** - Dados sempre frescos
- ✅ **Sem distrações** - Foco total nos números

**Elementos copiáveis:**
- Números grandes e bold
- Cores para indicar status
- Layout espacial (números bem separados)
- Indicadores de tendência (setas)

---

## 🎯 5. RECOMENDAÇÕES ESPECÍFICAS PARA O UNIQ

### Fase 1: Dashboard Inicial (MVP)

**Para o Primeiro Acesso:**
```
Prioridade MÁXIMA:
1. Onboarding Checklist (7 tarefas)
2. Mensagem de boas-vindas personalizada
3. Cards placeholder dos módulos
4. Widget MEL (mensagens de incentivo)
```

**Quando o Cliente Começar a Usar:**
```
Adicionar gradualmente:
1. Faturamento do dia (quando tiver vendas)
2. Total de vendas (contador simples)
3. Lista de tarefas pendentes
4. Agendamentos do dia (se aplicável)
```

### Fase 2: Dashboard com Dados (3-6 meses)

```
Métricas principais:
┌─────────────────────────────────────────────────────────┐
│  [TOPO - NUNCA MUDA]                                    │
│  💰 Faturamento Hoje     🛒 Vendas Hoje    💵 Ticket Médio│
├─────────────────────────────────────────────────────────┤
│  [MEIO - VARIA POR PERFIL]                              │
│                                                          │
│  VAREJO:                    SERVIÇO:                    │
│  📦 Estoque baixo           📅 Agenda hoje              │
│  🏪 Loja virtual visits     ⏰ Próximos atendimentos     │
│  🛍️ Produtos mais vendidos  💬 Mensagens pendentes      │
├─────────────────────────────────────────────────────────┤
│  [RODAPÉ - AÇÕES]                                       │
│  💬 MEL: "Você tem 3 tarefas pendentes"                 │
│  📋 Checklist: 5/7 completo                             │
└─────────────────────────────────────────────────────────┘
```

### Fase 3: Dashboard Avançado (6+ meses)

**Adicionar:**
- Comparativos semanais/mensais
- Metas e progresso
- Gráficos de tendência
- Previsões (IA)
- Relatórios automáticos

---

## ⚠️ 6. ARMADILHAS COMUNS A EVITAR

### ❌ O Que NÃO Fazer

| Erro | Por Que É Ruim | Solução |
|------|----------------|---------|
| **Muitos gráficos** | Carga cognitiva alta | Máx 1-2 gráficos por tela |
| **Números sem contexto** | "R$ 5.000" não diz nada | Sempre mostrar comparativo |
| **Cores aleatórias** | Confusão visual | Paleta limitada (3-4 cores) |
| **Dados em tempo real demais** | Ansiedade | Atualização a cada 1h está ok |
| **Métricas de vanity** | "Total de visitas" não importa | Focar em métricas de resultado |
| **Sem call-to-action** | Dashboard "morto" | Sempre ter próxima ação |

### ✅ Checklist de Qualidade

- [ ] Usuário entende o estado do negócio em 5 segundos
- [ ] Métricas mostram comparação (ontem, semana passada, meta)
- [ ] Cores usadas só para indicar status (bom/ruim)
- [ ] Cada seção tem uma ação clara
- [ ] Mobile: funciona bem em tela pequena
- [ ] Carregamento rápido (< 2 segundos)
- [ ] Sem scroll excessivo (tudo visível de primeira)

---

## 🎨 7. ESPECIFICAÇÕES VISUAIS RECOMENDADIAS

### Hierarquia Tipográfica

| Elemento | Tamanho | Peso | Uso |
|----------|---------|------|-----|
| **Número Principal** | 48px | Bold | KPIs (faturamento, vendas) |
| **Título Seção** | 24px | Semibold | Headers |
| **Label** | 14px | Medium | Descrições |
| **Comparativo** | 14px | Regular | "+12% vs ontem" |
| **Ação** | 14px | Medium | Links e botões |

### Paleta de Cores para Dados

```
Positivo (crescimento):   #22C55E (verde)
Negativo (queda):         #EF4444 (vermelho)
Neutro (estável):         #627271 (cinza)
Alerta (atenção):         #F59E0B (amarelo)
Informação:               #3B82F6 (azul)
```

### Espaçamento

```
Entre cards: 24px
Dentro do card: 24px padding
Entre seções: 32px
Título e conteúdo: 16px
```

---

## 📱 8. VERSÃO MOBILE

### O Que Muda no Mobile

**Desktop (3 colunas):**
```
[KPI 1] [KPI 2] [KPI 3]
[Gráfico Grande]
[Ações] [MEL]
```

**Mobile (1 coluna, scroll):**
```
[KPI 1]
[KPI 2]
[KPI 3]
[Gráfico Mini]
[Ações]
[MEL]
```

**Adaptações:**
- Gráficos simplificados (sparklines)
- Cards maiores (touch-friendly)
- Abas para alternar entre seções
- Bottom nav para navegação rápida

---

## 💡 9. IDEIAS INOVADORAS PARA O UNIQ

### A. "Dinheiro na Mão"

Mostrar quanto o empreendedor tem **disponível para usar hoje**:
```
💰 DINHEIRO NA MÃO HOJE

R$ 3.450

Breakdown:
├─ Em caixa:        R$ 1.200
├─ A receber (hoje): R$ 800
└─ Contas (amanhã): -R$ 550
```

### B. "Previsão do Dia"

Baseado em dados históricos:
```
🔮 PREVISÃO PARA HOJE

Baseado em suas vendas de sextas:
→ Esperado: R$ 4.500 - R$ 5.200
→ Para bater meta: mais R$ 1.200

💡 Dica: Promover no Instagram às 19h 
   (seu horário de pico)
```

### C. "Ranking dos Campeões"

Gamificação simples:
```
🏆 TOP PRODUTOS HOJE

1. 🥇 Camiseta Preta M     R$ 890 (15 vendas)
2. 🥈 Caneca Personalizada R$ 450 (9 vendas)
3. 🥉 Adesivo Vinil        R$ 230 (23 vendas)
```

### D. "Momento de Celebrar"

Reconhecimento de conquistas:
```
🎉 PARABÉNS!

Você bateu seu recorde de vendas!
R$ 5.230 hoje (superou R$ 4.800 de ontem)

[Compartilhar →]
```

---

## 🎯 CONCLUSÃO

### Dashboard Ideal para o UNIQ

**Em uma frase:**
> "O dashboard do UNIQ deve responder em 5 segundos: 'Como está meu negócio hoje e o que eu preciso fazer?'"

**Estrutura recomendada:**
1. **Topo:** Saudação + data
2. **KPIs:** 3-4 números principais com comparativo
3. **Contexto:** 1 gráfico de tendência (opcional)
4. **Ações:** Lista do que precisa de atenção
5. **Insights:** Mensagem do MEL (IA)

**Princípios-chave:**
- ✅ Simplicidade sobre complexidade
- ✅ Ação sobre informação
- ✅ Contexto sobre dados brutos
- ✅ Progresso sobre perfeição

---

**Referências Principais:**
- Stripe Dashboard Design Guidelines
- Geckoboard Dashboard Examples
- Notion Personal Dashboard Templates
- Databox Small Business Dashboards
- ThoughtSpot Retail Dashboard Examples

**Próximo Passo:** Aplicar estas recomendações no design do Figma para o Dashboard do UNIQ.
