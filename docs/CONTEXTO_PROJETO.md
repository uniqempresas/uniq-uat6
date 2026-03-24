# Contexto Consolidado - UNIQ Empresas

**Última Atualização:** 14/03/2026  
**Objetivo:** Sincronização de contexto entre máquinas Ultra e UNIQ

---

## 📊 Resumo Executivo

**UNIQ Empresas** é uma **plataforma SaaS modular** que combina:
- 🧠 **Consultoria de Growth Hacking** (conhecimento)
- 🛠️ **Ferramentas de Gestão Empresarial** (tecnologia)
- 📊 **Métricas e Acompanhamento** (resultados)

**Proposta de Valor:** *"O Norte para Empreendedores - Comece Por Aqui"*

### UVP Principal:
> **"UNIQ é o parceiro digital que trabalha para você. Loja online pronta em 1 dia, IA que atende clientes 24/7 e relatórios no WhatsApp — sem você precisar aprender tecnologia."**

---

## 🎯 Visão Estratégica

### Diferencial Competitivo
Enquanto outras consultorias entregam **apenas conhecimento** e outras plataformas entregam **apenas ferramentas**, a UNIQ entrega **AMBOS**, permitindo que o empreendedor:
- Aprenda enquanto faz
- Execute sem precisar de múltiplas ferramentas
- Veja resultados sem precisar ser expert em gestão/marketing

### 3 Pilares Estratégicos
1. **🤖 Consultor Ativo (Diferencial):** Sistema trabalha para o dono - avisa sobre oportunidades perdidas via MEL (IA proativa)
2. **🚫 Anti-ERP (Fronteira):** Sem Emissão Fiscal no MVP - foco em Vendas/Relacionamento
3. **📈 Viralidade (Growth):** Sistema de indicação + "Powered by UNIQ"

### Blue Ocean Strategy
**Red Ocean (Concorrência):** Bling, Tiny, Omie competem em complexidade fiscal
**Blue Ocean (UNIQ):** "Simples + Proativo + Done-For-You" — ninguém oferece essa combinação

---

## 👥 Público-Alvo: "Empreendedor na Correria"

**Características Demográficas:**
- 🏪 **Negócio:** Pequeno comércio ou serviço local
- 👥 **Tamanho:** 1-3 funcionários (solopreneur ou micro)
- 💰 **Faturamento:** R$ 8k-30k/mês
- 📍 **Localização:** Presencial (não e-commerce nativo)
- 📱 **Maturidade Digital:** Usa WhatsApp + Instagram, mas não tem loja online

**Características Psicográficas:**
- ✅ Já tentou vender online e desistiu (ou não começou)
- ✅ Sente que está perdendo vendas por não ter presença digital
- ✅ Tem disposição para pagar por praticidade (não preço)
- ✅ Valoriza relacionamento humano (não quer ser "mais um número")
- ✅ Aberto a tecnologia se for simples

**Principais Dores (Top 3):**
1. ❌ **Falta de tempo para aprender tecnologia** (Severidade: 10/10)
2. ❌ **Perder vendas por não ter loja online** (Severidade: 9/10)
3. ❌ **Ficar preso no WhatsApp o dia todo** (Severidade: 9/10)

**Jobs-to-be-Done:**
1. "Quero vender online sem aprender tecnologia"
2. "Quero automatizar atendimento repetitivo"
3. "Quero entender meu negócio melhor (números)"
4. "Quero parecer mais profissional digitalmente"

---

## 👥 Os 4 Beta Testers (Clientes MVP)

| Cliente | Segmento | Dor Principal | Solução UNIQ | Status |
|---------|----------|---------------|--------------|--------|
| **Ótica** | Varejo | Precisa de vendas e organização | CRM + Marketing | ✅ Pagou setup |
| **Gráfica** | Serviço | Fluxo de pedidos confuso | CRM + Pipeline | ✅ Pagou setup |
| **Confecção** | Manufatura | Ninguém conhece minha marca | Ferramentas de Marketing | 🔄 Em onboarding |
| **Estética** | Serviço | Perco tempo agendando | Chatbot + Agenda (n8n) | 🔄 Em onboarding |

**Conclusão Crítica:** 3 dos 4 clientes priorizam **Marketing/Vendas** sobre gestão burocrática.
**Validação:** 2/2 clientes pagaram setup R$ 329 (prova de dor real)

---

## 🏗️ Arquitetura do Produto

### Núcleo (para todos)
- Login/Cadastro
- Dashboard
- Perfil da Empresa
- Configurações básicas

### Módulos Ativáveis

| Módulo | Status | Prioridade | Descrição |
|--------|--------|------------|-----------|
| **CRM** (Gestão de Clientes) | ✅ Funcional | 🟡 ALTA | Cadastro, pipeline de vendas, histórico |
| **Finance** (Contas a Pagar/Receber) | ✅ Funcional | 🟡 ALTA | Fluxo de caixa, DRE, conciliação |
| **Estoque** (Gestão de Produtos) | 📋 Planejado | 🟡 ALTA | Entrada/saída, variações, etiquetas |
| **Vendas PDV** (Ponto de Venda) | 📋 Planejado | 🔴 CRÍTICA | Caixa, sangria, suprimento, relatórios |
| **Marketplace** (Multi-tenant) | 📋 Planejado | 🟢 MÉDIA | Vendas para outros lojistas |
| **Loja Virtual (Storefront)** | 🔄 Em desenvolvimento | 🔴 CRÍTICA | Catálogo público + checkout |
| **Agendamentos** (Reservas) | 📋 Planejado | 🟡 ALTA | Horários, serviços, notificações |
| **MEL - IA Proativa** | 🔄 Estrutura criada | 🔴 CRÍTICA | Consultor ativo via WhatsApp |
| **Catálogo de Serviços** | 🔄 Mockup criado | 🟡 ALTA | Cadastro de serviços, duração, preços |
| **Cadastro de Fornecedores** | 📋 Planejado | 🟢 MÉDIA | Gestão de fornecedores |
| **Cadastro de Colaboradores** | 📋 Planejado | 🟢 MÉDIA | Gestão de equipe e permissões |
| **Métricas e Analytics** | 📋 Planejado | 🟢 MÉDIA | Dashboard de resultados |

### Módulos por Segmento de Cliente

| Segmento | Módulos Essenciais | Módulos Opcionais |
|----------|-------------------|-------------------|
| **Varejo** | Estoque, Vendas PDV, Loja Virtual, CRM | Marketplace |
| **Serviços** | Agendamentos, Catálogo de Serviços, CRM | — |
| **Indústria** | Estoque, Fornecedores, Financeiro | Marketplace |
| **Atacado** | Estoque, Marketplace, CRM | — |

### Integrações Planejadas
- Instagram Business (catálogo)
- WhatsApp Business API
- n8n (workflows de automação)
- Mercado Pago / Stripe (pagamentos)

---

## 🤖 Consultor Ativo (MEL) - Arquitetura Técnica

### "Cérebro no Código, Voz no n8n"

**Fluxo Técnico:**
```
Cron Schedule → Edge Function (Análise) → advisor_insights → n8n → WhatsApp
```

**Cenários Implementados/Planejados:**
1. **Risco de Churn:** Cliente sem interação há >45 dias → Sugerir "Checkup Gratuito"
2. **Negociação Travada:** Oportunidade sem movimento há >7 dias → Mensagem de "Follow-up"
3. **Aniversário de Casa:** Cliente há exatos 365 dias → Cupom de presente
4. **Estoque Baixo:** Produto abaixo do mínimo → Alerta de reposição
5. **Relatório Diário:** Resumo de vendas enviado toda manhã no WhatsApp

**Funcionalidades:**
- **Proativas:** Relatórios, alertas, sugestões (MEL envia sem pedir)
- **Reativas:** Atendimento automático de FAQs via WhatsApp
- **Preditivas:** Identificação de tendências e riscos

**Arquivos:**
- Edge Function: `supabase/functions/daily-advisor/index.ts`
- Tabela: `advisor_insights`
- Integração: n8n + WhatsApp Business API

---

## 💰 Modelo de Negócio & Pricing

### Estrutura de Receita

#### 1. Setup Fee (One-time) - **VALIDADO ✅**
| Tipo | Valor | Justificativa |
|------|-------|---------------|
| **Setup Padrão** | **R$ 329** | Loja + MEL básica (2 clientes pagaram) |
| Setup Expresso | R$ 499 | Loja em 24h (vs. 48h padrão) |
| Setup Premium | R$ 799 | Inclui copywriting + 10 produtos |

#### 2. Assinatura Mensal (Recorrente)

**Fase MVP (Suzano - Teste):**
| Plano | Valor | Inclui | Target |
|-------|-------|--------|--------|
| **UNIQ Starter** | **R$ 109/mês** | Todos módulos + MEL + Loja | 100% dos primeiros 10 |

**Fase Early (Clientes 11-30):**
| Plano | Valor | Target |
|-------|-------|--------|
| Starter | R$ 99/mês | Básico (sem loja) - 10% |
| **Business** | **R$ 199/mês** | Completo - 90% |

**Fase Escala (30+ clientes):**
| Plano | Valor | Target |
|-------|-------|--------|
| Starter | R$ 99/mês | 10% |
| Business | R$ 199/mês | 80% |
| Pro | R$ 599/mês | 10% |

### Projeção Financeira (Conservadora)

| Mês | Clientes | MRR | Setup Total | Receita Total | Custo | Lucro |
|-----|----------|-----|-------------|---------------|-------|-------|
| **3** | 4 | R$ 436 | R$ 1.3k | R$ 1.74k | R$ 300 | R$ 1.44k |
| **6** | 10 | R$ 1.09k | R$ 3.3k | R$ 4.39k | R$ 700 | R$ 3.69k |
| **12** | 20 | R$ 2.18k | R$ 6.6k | R$ 8.78k | R$ 2.1k | R$ 6.68k |
| **17 (EXIT)** | 30 | R$ 3.27k | R$ 9.9k | R$ 13.17k | R$ 4k | R$ 9.17k |
| **24** | 80 | R$ 8.72k | R$ 26.4k | R$ 35.12k | R$ 7.5k | R$ 27.62k |

### Métricas de SaaS

| Métrica | Target Mês 12 | Observação |
|---------|---------------|------------|
| **CAC** | <R$ 600 | B2B SaaS Brasil típico |
| **LTV** | >R$ 1.308 | 12 meses × R$ 109 |
| **LTV/CAC** | >2x | Healthy SaaS metric |
| **Churn** | <15% anual | Pessimista para teste |
| **Gross Margin** | >80% | SaaS típico |

---

## 📅 Timeline & Checkpoints Estratégicos

### 🎯 Visão de Crescimento: Side Project → Exit → Full-time

**Situação Atual:**
- 👨‍💼 **CLT ativo:** Segurança financeira garantida
- 💰 **Colchão:** 12 meses de despesas pessoais (em construção)
- ⏰ **Tempo disponível:** 16h/semana (2h/dia + 6h sábado)
- 🚀 **Exit planejado:** Mês 17 (com 30 clientes + R$ 9k MRR)

### FASE 1: Validação MVP (Mês 0-3) - **ATUAL**
**Status:** Em andamento  
**Objetivo:** Provar que produto resolve problema real

| Métrica | Meta | Atual |
|---------|------|-------|
| Clientes | 4 | 2 (setup vendido) |
| MRR | R$ 436 | R$ 0 (ainda sem mensal definido) |
| Churn | <20% | - |
| Feedback NPS | >40 | - |

**Atividades Principais:**
- [ ] Finalizar onboarding dos 2 clientes pendentes
- [ ] Configurar MEL relatório diário
- [ ] Definir pricing mensal baseado em testes (R$ 109)
- [ ] Ativar 4 clientes MVP
- [ ] Coletar feedback semanal + NPS

---

### FASE 2: Early Adopters (Mês 4-8)
**Objetivo:** Aprender a vender e validar canais de aquisição

| Métrica | Meta |
|---------|------|
| Clientes | 10 |
| MRR | R$ 1.09k |
| CAC | <R$ 600 |
| Churn | <15% anual |

**Atividades Principais:**
- [ ] Refinar pitch baseado em feedback MVP
- [ ] Criar landing page + demo video
- [ ] Primeiras campanhas orgânicas (Instagram/LinkedIn)
- [ ] Sistema de indicações (Indique e Ganhe)
- [ ] Documentar onboarding (vídeos/tutoriais)

---

### FASE 3: Pré-Exit (Mês 9-12)
**Objetivo:** Provar viabilidade como negócio principal

| Métrica | Meta |
|---------|------|
| Clientes | 20 |
| MRR | R$ 2.18k |
| CAC | <R$ 600 |
| Churn | <10% |
| LTV/CAC | >5x |

**Atividades Principais:**
- [ ] Contratar primeiro VA/freelancer (suporte)
- [ ] Automatizar 80% do onboarding
- [ ] Criar fluxo completo de vendas (MEL qualifica leads)
- [ ] Primeiros cases documentados (vídeo depoimento)
- [ ] Playbook de vendas pronto

---

### 🚨 CHECKPOINTS DECISÓRIOS

#### Checkpoint 1: Mês 3 — "Temos tração?"
**Critérios GO:**
- ✅ 4 clientes ativos pagando
- ✅ NPS >40
- ✅ Churn <15%
- ✅ 1 case de sucesso

**Se NÃO-GO:** Revisar product-market fit, considerar pivot

---

#### Checkpoint 2: Mês 6 — "Podemos escalar?"
**Critérios GO:**
- ✅ 10 clientes ativos
- ✅ R$ 1k MRR
- ✅ CAC <R$ 600
- ✅ LTV/CAC >4x

**Se NÃO-GO:** Ajustar modelo de aquisição, revisar pricing

---

#### Checkpoint 3: Mês 12 — "POSSO SAIR DO CLT?"
**Critérios EXIT:**
- ✅ 20 clientes ativos
- ✅ R$ 2k+ MRR
- ✅ Churn <10% anual
- ✅ Onboarding 80% automatizado
- ✅ Colchão 12 meses pronto

**Se NÃO-GO:** Adiar exit 6 meses, focar em crescimento sustentável

---

#### Checkpoint 4: Mês 17 — "EXIT SEGURO"
**Critérios EXIT:**
- ✅ **30+ clientes ativos**
- ✅ **R$ 9k+ MRR** (3 meses consecutivos)
- ✅ Churn <8%
- ✅ Pipeline de 10+ leads/mês
- ✅ CAC validado (<R$ 500)

**Se <60% checado = HOLD 3-6 meses**

---

## 🛠️ Stack Tecnológico

| Camada | Tecnologia | Justificativa |
|--------|------------|---------------|
| **Frontend** | React 19 + TypeScript | Moderno, tipado, componentizado |
| **Build Tool** | Vite | Rápido, HMR eficiente |
| **Styling** | Tailwind CSS | Produtividade e consistência |
| **Backend** | Supabase | BaaS completo (auth, DB, storage) |
| **Database** | PostgreSQL (via Supabase) | Relacional, robusto, escalável |
| **Hosting** | Vercel | Deploy automático, CDN global |
| **Routing** | React Router v7 | Navegação client-side |
| **Automação** | n8n | Workflows e integrações |

---

## 📊 Métricas de Sucesso (AARRR)

### Métricas de Produto
| Métrica | Target Mês 6 | Target Mês 12 | Como Medir |
|---------|--------------|---------------|------------|
| **Acquisition** | 10 leads/mês | 20 leads/mês | Form submissions, indicações |
| **Activation** | 70% ativam em 14 dias | 80% ativam em 7 dias | % completam onboarding |
| **Retention** | Churn <15%/ano | Churn <10%/ano | % cancelam anual |
| **Revenue** | R$ 1k MRR | R$ 2k MRR | Stripe/asaas dashboard |
| **Referral** | 10% indicam | 20% indicam | NPS + referral tracking |

### Métricas de Negócio
| Métrica | Target | Ferramenta |
|---------|--------|------------|
| NPS | >50 | Typeform pesquisa |
| Time to First Sale | <21 dias | Analytics interno |
| Feature Adoption | 3+ módulos ativos | Supabase queries |
| Support Tickets/cliente | <2/mês | n8n/helpdesk |

### Dashboard Semanal (Métricas de Operação)
- **Clientes Ativos:** Quantos pagam este mês
- **MRR:** Receita recorrente mensal
- **Churn Rate:** % clientes que cancelaram
- **Leads/mês:** Quantos prospects novos
- **Conversão:** % leads → clientes
- **Tempo de Onboarding:** Dias até cliente ativo
- **Uptime:** % sistema funcionando
- **Bugs Críticos:** Quantos abertos

---

## 🎯 Canais de Aquisição (Estratégia Suzano)

### Fase 1: Conquista de Suzano (Mês 1-6)

| Canal | Estratégia | Custo | Expectativa |
|-------|------------|-------|-------------|
| **Network Pessoal** | Contatos próprios do founder | R$ 0 | 40% dos leads |
| **Indicações** | "Indique e Ganhe 1 mês grátis" | R$ 0 | 30% dos leads |
| **Parcerias Locais** | Contadores Suzano, CDL, Sebrae | R$ 0 | 20% dos leads |
| **Instagram Orgânico** | Conteúdo local @uniq.empresas | R$ 0 | 10% dos leads |

### Fase 2: Expansão Alto Tietê (Mês 7-12)

| Canal | Estratégia | Custo | Expectativa |
|-------|------------|-------|-------------|
| **Cases Suzano** | Prova social para Mogi/Itaquá | R$ 0 | 40% dos leads |
| **Parcerias Regionais** | Contadores Mogi, Itaquaquecetuba | R$ 0 | 30% dos leads |
| **YouTube Local** | MEL - "Assistente Digital do Alto Tietê" | R$ 0 | 20% dos leads |
| **Eventos Locais** | Workshops CDL, Sebrae | R$ 0 | 10% dos leads |

### Fase 3: Escala Regional (Mês 13+)
- Programa de afiliados regionais
- Anúncios geolocalizados (Suzano + 50km)
- Parceria com bancos/operadoras de cartão locais

---

## 🎯 Filosofia de Desenvolvimento

> **"Simples primeiro, complexo depois"**
> 
> Criar a estrutura mais simples possível e evoluir baseado em necessidade real dos empreendedores, não em suposições.

### Princípios Não-Negociáveis:
1. **Velocidade > Perfeição** — Loja "boa o suficiente" em 1 dia > Loja perfeita em 1 mês
2. **Dados > Intuição** — Testar pricing com clientes reais, medir NPS mensalmente
3. **Automação é Sobrevivência** — Sem automação, founder queima (16h/semana é pouco)
4. **Blue Ocean é Real** — UNIQ tem 12-18 meses de vantagem com MEL antes de cópia

### Modelo de Co-criação
O MVP será desenvolvido **COM** os clientes, não **PARA** os clientes. Eles testam, dão feedback, e o produto evolui em tempo real.

---

## ⚠️ Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| **Churn alto (>20%)** | Média | Alto | Calls de retenção, melhorar onboarding, MEL de retenção |
| **CAC > LTV** | Média | Alto | Parar ads, focar orgânico/indicações |
| **Concorrente copia MEL** | Baixa | Médio | Mover rápido, criar network effects |
| **Founder burnout** | Média | Alto | Contratar ajuda cedo, férias programadas |
| **Problema técnico grave** | Baixa | Alto | Backup diário, plano de DR (disaster recovery) |
| **Exit prematuro** | Baixa | Crítico | **NÃO SAIR** se não tiver 30 clientes + R$ 9k MRR |

---

## 📝 Notas Importantes para Desenvolvimento

### Máquina Ultra
- **Limitações:** Sem privilégios de admin, sem acesso ao MCP do Supabase
- **Solução:** Gerar arquivos `.sql` para execução manual no Supabase

### Máquina UNIQ
- **Acesso:** Completo ao MCP do Supabase
- **Vantagem:** Deploy direto de migrations e edge functions

---

## 🔗 Documentos Relacionados

### Estratégia & Negócio:
- [SÍNTESE_EXECUTIVA.md](./estrategia/SINTESE_EXECUTIVA.md) - Análise crítica e recomendações
- [LEAN_CANVAS.md](./estrategia/LEAN_CANVAS.md) - Modelo de negócio completo
- [VALUE_PROPOSITION_CANVAS.md](./estrategia/VALUE_PROPOSITION_CANVAS.md) - Fit cliente-produto
- [ESTRATEGIA_CRESCIMENTO.md](./estrategia/ESTRATEGIA_CRESCIMENTO.md) - Roadmap 0-30 meses
- [PRICING_STRATEGY.md](./estrategia/PRICING_STRATEGY.md) - Estratégia de preços
- [ONBOARDING_AUTOMATION.md](./estrategia/ONBOARDING_AUTOMATION.md) - Fluxo de onboarding
- [SWOT_ANALYSIS.md](./estrategia/SWOT_ANALYSIS.md) - Análise estratégica
- [STRATEGY_CANVAS_BLUE_OCEAN.md](./estrategia/STRATEGY_CANVAS_BLUE_OCEAN.md) - Blue Ocean Strategy
- [ANALISE_CONCORRENCIA.md](./estrategia/ANALISE_CONCORRENCIA.md) - Inteligência competitiva
- [PLANO_ACAO_PRIORITIZADO.md](./estrategia/PLANO_ACAO_PRIORITIZADO.md) - Ações imediatas
- [POSICIONAMENTO_MARCA.md](./estrategia/POSICIONAMENTO_MARCA.md) - Brand positioning

### Produto & Tecnologia:
- [ROADMAP.md](./ROADMAP.md) - Sprints detalhadas (PRDs e SPECs)
- [Metodologia_vibe-coding.md](./Metodologia_vibe-coding.md) - Metodologia de desenvolvimento
- [database_schema.md](./database_schema.md) - Esquema de banco de dados
- [n8n_integration.md](./n8n_integration.md) - Integração com n8n

---

## 📝 Notas Importantes para Desenvolvimento

### Máquina Ultra
- **Limitações:** Sem privilégios de admin, sem acesso ao MCP do Supabase
- **Solução:** Gerar arquivos `.sql` para execução manual no Supabase

### Máquina UNIQ
- **Acesso:** Completo ao MCP do Supabase
- **Vantagem:** Deploy direto de migrations e edge functions

---

## 📌 Prioridades Imediatas (Próximos 30 Dias)

### Semana 1-2:
1. [ ] Finalizar onboarding dos 2 clientes pendentes (Ótica, Gráfica)
2. [ ] Configurar MEL relatório diário no WhatsApp
3. [ ] Gravar vídeo: "Como cadastrar seu primeiro produto"
4. [ ] Criar checklist de ativação no dashboard
5. [ ] Email boas-vindas automático (Day 0)

### Semana 3-4:
1. [ ] Coletar NPS dos 4 clientes
2. [ ] Documentar cases de sucesso (depoimentos)
3. [ ] Criar landing page simples (Carrd/Unbounce)
4. [ ] Definir plano de conteúdo Instagram (2 posts/semana)
5. [ ] Configurar sistema de indicações "Indique e Ganhe"

### Métricas de Sucesso (Day 30):
- [ ] 4 clientes ativos e pagando mensalidade (R$ 109)
- [ ] NPS >40
- [ ] 70% dos clientes com loja online publicada
- [ ] 1 case de sucesso documentado (venda pela loja)

---

**Este documento serve como fonte única de verdade para contextualização do projeto UNIQ Empresas entre diferentes ambientes de desenvolvimento.**

**🧭 UNIQ: O Norte para Empreendedores — Comece Por Aqui**
