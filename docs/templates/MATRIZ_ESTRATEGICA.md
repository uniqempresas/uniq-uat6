# MATRIZ ESTRATEGICA - Blueprint de Documentacao

**Versao:** 1.0
**Data:** {{DATA_CRIACAO}}
**Projeto:** {{NOME_PROJETO}}
**Status:** {{STATUS}}

---

## INSTRUCOES DE USO

Esta matriz e um blueprint reutilizavel para criar documentacao estrategica completa para qualquer projeto/negocio.

### Como usar:
1. Substituir todos os placeholders `{{PLACEHOLDER}}` pelos dados reais do projeto
2. Gerar cada documento na pasta `docs/estrategia/`
3. Seguir a ordem de prioridade (M1 > M2 > M3 > M4 > M5)
4. Revisar trimestralmente

### Estrutura de Pastas:
```
docs/
  estrategia/
    LEAN_CANVAS.md
    VALUE_PROPOSITION_CANVAS.md
    SWOT_ANALYSIS.md
    ANALISE_CONCORRENCIA.md
    POSICIONAMENTO_MARCA.md
    PRICING_STRATEGY.md
    ESTRATEGIA_CRESCIMENTO.md
    GO_TO_MARKET.md
    ONBOARDING_AUTOMATION.md
```

---

## MODULO 1: MODELO DE NEGOCIO [OBRIGATORIO]

### 1.1 LEAN_CANVAS.md

**O que e:** Modelo de negocio em uma pagina (adaptacao do Business Model Canvas para startups)
**Quando usar:** Fase inicial do projeto (MVP), antes de investir em desenvolvimento
**Prioridade:** CRITICA

#### Estrutura Obrigatoria:

```markdown
# Lean Canvas - {{NOME_PROJETO}}

**Versao:** 1.0 | **Data:** {{DATA}}
**Status:** {{STATUS_ATUAL}}

---

## 1. PROBLEMA (Top 3)

| Rank | Problema | Severidade | Evidencia |
|------|----------|------------|-----------|
| **P1** | **{{PROBLEMA_1}}** | {{SEVERIDADE}} | "{{CITACAO_CLIENTE_1}}" |
| **P2** | **{{PROBLEMA_2}}** | {{SEVERIDADE}} | "{{CITACAO_CLIENTE_2}}" |
| **P3** | **{{PROBLEMA_3}}** | {{SEVERIDADE}} | "{{CITACAO_CLIENTE_3}}" |

### Problemas Secundarios:
- P4: {{PROBLEMA_4}}
- P5: {{PROBLEMA_5}}
- P6: {{PROBLEMA_6}}

### Como Validamos:
- [ ] {{NUMERO_ENTREVISTAS}} entrevistas com potenciais clientes
- [ ] {{NUMERO_CLIENTES_PAGOS}} clientes pagaram (prova de dor real)
- [ ] {{EVIDENCIA_ADICIONAL}}

---

## 2. SOLUCAO (Top 3)

| Rank | Solucao | MVP Status |
|------|---------|------------|
| **S1** | **{{SOLUCAO_1}}** | {{STATUS_MVP_1}} |
| **S2** | **{{SOLUCAO_2}}** | {{STATUS_MVP_2}} |
| **S3** | **{{SOLUCAO_3}}** | {{STATUS_MVP_3}} |

### Funcionalidades MVP:
- [ ] {{FEATURE_MVP_1}}
- [ ] {{FEATURE_MVP_2}}
- [ ] {{FEATURE_MVP_3}}
- [ ] {{FEATURE_MVP_4}}

### Funcionalidades Futuras (Pos-Mvp):
- {{FEATURE_FUTURA_1}}
- {{FEATURE_FUTURA_2}}
- {{FEATURE_FUTURA_3}}

---

## 3. UNIQUE VALUE PROPOSITION (UVP)

### UVP Principal:
> **"{{UVP_PRINCIPAL}}"**

### UVP Alternativos (Testar):
1. *"{{UVP_ALT_1}}"* (foco em {{FOCO_1}})
2. *"{{UVP_ALT_2}}"* (foco em {{FOCO_2}})
3. *"{{UVP_ALT_3}}"* (foco em {{FOCO_3}})

### High-Level Concept:
> **"{{HIGH_LEVEL_CONCEPT}}"**

### Promise:
- {{PROMESSA_1}}
- {{PROMESSA_2}}
- {{PROMESSA_3}}
- {{PROMESSA_4}}

---

## 4. UNFAIR ADVANTAGE

### Vantagens Dificeis de Replicar:

| Vantagem | Por Que E Dificil de Copiar? | Status |
|----------|------------------------------|--------|
| **{{VANTAGEM_1}}** | {{MOTIVO_1}} | {{STATUS_VANTAGEM_1}} |
| **{{VANTAGEM_2}}** | {{MOTIVO_2}} | {{STATUS_VANTAGEM_2}} |
| **{{VANTAGEM_3}}** | {{MOTIVO_3}} | {{STATUS_VANTAGEM_3}} |
| **{{VANTAGEM_4}}** | {{MOTIVO_4}} | {{STATUS_VANTAGEM_4}} |

### O Que Ainda Nao Temos (Mas Precisamos Construir):
- {{CONSTRUIR_1}}
- {{CONSTRUIR_2}}
- {{CONSTRUIR_3}}
- {{CONSTRUIR_4}}

### Barreiras de Entrada que Criamos:
1. {{BARRERA_1}}
2. {{BARRERA_2}}
3. {{BARRERA_3}}

---

## 5. EXISTING ALTERNATIVES

### Concorrentes Diretos ({{CATEGORIA_CONCORRENCIA}}):
| Concorrente | Preco | Forca | Fraqueza vs {{NOME_PROJETO}} |
|-------------|-------|-------|------------------------------|
| **{{CONCORRENTE_1}}** | {{PRECO_1}} | {{FORCA_1}} | {{FRAQUEZA_1}} |
| **{{CONCORRENTE_2}}** | {{PRECO_2}} | {{FORCA_2}} | {{FRAQUEZA_2}} |
| **{{CONCORRENTE_3}}** | {{PRECO_3}} | {{FORCA_3}} | {{FRAQUEZA_3}} |
| **{{CONCORRENTE_4}}** | {{PRECO_4}} | {{FORCA_4}} | {{FRAQUEZA_4}} |

### Concorrentes Indiretos:
| Alternativa | Custo Total | Por Que Cliente Escolheria? |
|-------------|-------------|----------------------------|
| **{{ALTERNATIVA_1}}** | {{CUSTO_ALT_1}} | {{RAZAO_ALT_1}} |
| **{{ALTERNATIVA_2}}** | {{CUSTO_ALT_2}} | {{RAZAO_ALT_2}} |
| **{{ALTERNATIVA_3}}** | {{CUSTO_ALT_3}} | {{RAZAO_ALT_3}} |

### Diferenca Chave:
{{NOME_PROJETO}} e **"{{DIFERENCIAL_CHAVE}}"** — nenhum concorrente oferece essa combinacao.

---

## 6. KEY METRICS

### Metricas de Tracao (AARRR):

| Metrica | Target Mes {{MES_1}} | Target Mes {{MES_2}} | Como Medir |
|---------|----------------------|----------------------|------------|
| **Acquisition** | {{TARGET_AQUISICAO_1}} | {{TARGET_AQUISICAO_2}} | {{FERRAMENTA_AQUISICAO}} |
| **Activation** | {{TARGET_ATIVACAO_1}} | {{TARGET_ATIVACAO_2}} | {{FERRAMENTA_ATIVACAO}} |
| **Retention** | {{TARGET_RETENCAO_1}} | {{TARGET_RETENCAO_2}} | {{FERRAMENTA_RETENCAO}} |
| **Revenue** | {{TARGET_RECEITA_1}} | {{TARGET_RECEITA_2}} | {{FERRAMENTA_RECEITA}} |
| **Referral** | {{TARGET_INDICACAO_1}} | {{TARGET_INDICACAO_2}} | {{FERRAMENTA_INDICACAO}} |

### Metricas de Produto:
| Metrica | Target | Ferramenta |
|---------|--------|------------|
| NPS | >{{NPS_TARGET}} | {{FERRAMENTA_NPS}} |
| Time to First Value | <{{TTFV_TARGET}} dias | {{FERRAMENTA_TTFV}} |
| Feature Adoption | {{ADOPTION_TARGET}}+ modulos ativos | {{FERRAMENTA_ADOPTION}} |
| Support Tickets/cliente | <{{TICKETS_TARGET}}/mes | {{FERRAMENTA_TICKETS}} |

### Metricas de Negocio:
| Metrica | Target Mes {{MES_TARGET}} | Observacao |
|---------|---------------------------|------------|
| CAC | <{{CAC_TARGET}} | {{OBS_CAC}} |
| LTV | >{{LTV_TARGET}} | {{OBS_LTV}} |
| LTV/CAC | >{{LTV_CAC_RATIO}}x | {{OBS_RATIO}} |
| Payback CAC | <{{PAYBACK_TARGET}} meses | {{OBS_PAYBACK}} |
| Gross Margin | >{{MARGIN_TARGET}}% | {{OBS_MARGIN}} |

---

## 7. CHANNELS (Canais de Aquisicao)

### Fase 1: {{FASE_1_NOME}} (Mes {{MES_INICIO_1}}-{{MES_FIM_1}})

| Canal | Estrategia | Custo Estimado | Expectativa |
|-------|------------|----------------|-------------|
| **{{CANAL_1_1}}** | {{ESTRATEGIA_1_1}} | {{CUSTO_1_1}} | {{EXPECTATIVA_1_1}} |
| **{{CANAL_1_2}}** | {{ESTRATEGIA_1_2}} | {{CUSTO_1_2}} | {{EXPECTATIVA_1_2}} |
| **{{CANAL_1_3}}** | {{ESTRATEGIA_1_3}} | {{CUSTO_1_3}} | {{EXPECTATIVA_1_3}} |
| **{{CANAL_1_4}}** | {{ESTRATEGIA_1_4}} | {{CUSTO_1_4}} | {{EXPECTATIVA_1_4}} |

### Fase 2: {{FASE_2_NOME}} (Mes {{MES_INICIO_2}}-{{MES_FIM_2}})

| Canal | Estrategia | Custo Estimado | Expectativa |
|-------|------------|----------------|-------------|
| **{{CANAL_2_1}}** | {{ESTRATEGIA_2_1}} | {{CUSTO_2_1}} | {{EXPECTATIVA_2_1}} |
| **{{CANAL_2_2}}** | {{ESTRATEGIA_2_2}} | {{CUSTO_2_2}} | {{EXPECTATIVA_2_2}} |
| **{{CANAL_2_3}}** | {{ESTRATEGIA_2_3}} | {{CUSTO_2_3}} | {{EXPECTATIVA_2_3}} |
| **{{CANAL_2_4}}** | {{ESTRATEGIA_2_4}} | {{CUSTO_2_4}} | {{EXPECTATIVA_2_4}} |

### Fase 3: {{FASE_3_NOME}} (Mes {{MES_INICIO_3}}+)
- {{CANAL_3_1}}
- {{CANAL_3_2}}
- {{CANAL_3_3}}

---

## 8. COST STRUCTURE

### Custos Mensais por Fase:

| Fase | Periodo | Infraestrutura | Marketing | Pessoal | **Total** |
|------|---------|----------------|-----------|---------|-----------|
| **{{FASE_MVP}}** | Mes {{MES_MVP}} | R$ {{INFRA_MVP}} | R$ {{MKT_MVP}} | R$ {{PESSOAL_MVP}} | **R$ {{TOTAL_MVP}}** |
| **{{FASE_EARLY}}** | Mes {{MES_EARLY}} | R$ {{INFRA_EARLY}} | R$ {{MKT_EARLY}} | R$ {{PESSOAL_EARLY}} | **R$ {{TOTAL_EARLY}}** |
| **{{FASE_ESCALA}}** | Mes {{MES_ESCALA}} | R$ {{INFRA_ESCALA}} | R$ {{MKT_ESCALA}} | R$ {{PESSOAL_ESCALA}} | **R$ {{TOTAL_ESCALA}}** |

### Breakdown de Custos (Fase MVP):

#### Infraestrutura (R$ {{INFRA_MVP}}/mes):
- {{SERVICO_INFRA_1}}: R$ {{CUSTO_INFRA_1}}
- {{SERVICO_INFRA_2}}: R$ {{CUSTO_INFRA_2}}
- {{SERVICO_INFRA_3}}: R$ {{CUSTO_INFRA_3}}
- {{SERVICO_INFRA_4}}: R$ {{CUSTO_INFRA_4}}
- Reserva: R$ {{RESERVA_INFRA}}

#### Marketing (R$ {{MKT_MVP}}/mes - MVP):
- {{ITEM_MKT_1}}: R$ {{CUSTO_MKT_1}}
- {{ITEM_MKT_2}}: R$ {{CUSTO_MKT_2}}
- {{ITEM_MKT_3}}: R$ {{CUSTO_MKT_3}}

#### Pessoal (R$ {{PESSOAL_MVP}}/mes - MVP):
- {{PAPEL_1}}: R$ {{CUSTO_PAPEL_1}}
- {{PAPEL_2}}: R$ {{CUSTO_PAPEL_2}}

### Projecao de Custos vs Receita:

| Mes | Custos | Receita | Lucro | Acumulado |
|-----|--------|---------|-------|-----------|
| {{MES_1}} | R$ {{CUSTO_M1}} | R$ {{RECEITA_M1}} | R$ {{LUCRO_M1}} | R$ {{ACUM_M1}} |
| {{MES_2}} | R$ {{CUSTO_M2}} | R$ {{RECEITA_M2}} | R$ {{LUCRO_M2}} | R$ {{ACUM_M2}} |
| {{MES_3}} | R$ {{CUSTO_M3}} | R$ {{RECEITA_M3}} | R$ {{LUCRO_M3}} | R$ {{ACUM_M3}} |
| {{MES_4}} | R$ {{CUSTO_M4}} | R$ {{RECEITA_M4}} | R$ {{LUCRO_M4}} | R$ {{ACUM_M4}} |
| {{MES_5}} | R$ {{CUSTO_M5}} | R$ {{RECEITA_M5}} | R$ {{LUCRO_M5}} | R$ {{ACUM_M5}} |
| {{MES_6}} | R$ {{CUSTO_M6}} | R$ {{RECEITA_M6}} | R$ {{LUCRO_M6}} | R$ {{ACUM_M6}} |

---

## 9. REVENUE STRUCTURE

### Modelo de Receita:

#### 1. Setup Fee (One-time):
| Tipo | Valor | Justificativa |
|------|-------|---------------|
| **Setup Padrao** | **R$ {{SETUP_PADRAO}}** | {{INCLUI_SETUP_PADRAO}} |
| Setup Expresso | R$ {{SETUP_EXPRESSO}} | {{INCLUI_SETUP_EXPRESSO}} |
| Setup Premium | R$ {{SETUP_PREMIUM}} | {{INCLUI_SETUP_PREMIUM}} |

#### 2. Assinatura Mensal (Recorrente):

**Fase MVP (Plano Unico - TESTE):**
| Plano | Valor | Inclui |
|-------|-------|--------|
| **{{NOME_PLANO_MVP}}** | **R$ {{PRECO_PLANO_MVP}}/mes** | {{INCLUI_PLANO_MVP}} |

*Estrategia: {{ESTRATEGIA_PRECO_MVP}}*

**Fase Early ({{NUM_PLANOS_EARLY}} Planos):**
| Plano | Valor | Target |
|-------|-------|--------|
| {{PLANO_EARLY_1}} | R$ {{PRECO_EARLY_1}}/mes | {{TARGET_EARLY_1}} |
| **{{PLANO_EARLY_2}}** | **R$ {{PRECO_EARLY_2}}/mes** | {{TARGET_EARLY_2}} |

**Fase Escala ({{NUM_PLANOS_ESCALA}} Planos):**
| Plano | Valor | Target |
|-------|-------|--------|
| {{PLANO_ESCALA_1}} | R$ {{PRECO_ESCALA_1}}/mes | {{TARGET_ESCALA_1}} |
| {{PLANO_ESCALA_2}} | R$ {{PRECO_ESCALA_2}}/mes | {{TARGET_ESCALA_2}} |
| {{PLANO_ESCALA_3}} | R$ {{PRECO_ESCALA_3}}/mes | {{TARGET_ESCALA_3}} |

#### 3. Servicos Adicionais (Opcional):
| Servico | Valor | Frequencia |
|---------|-------|------------|
| {{SERVICO_EXTRA_1}} | R$ {{PRECO_EXTRA_1}}/mes | {{FREQ_EXTRA_1}} |
| {{SERVICO_EXTRA_2}} | R$ {{PRECO_EXTRA_2}}/mes | {{FREQ_EXTRA_2}} |
| {{SERVICO_EXTRA_3}} | R$ {{PRECO_EXTRA_3}}/hora | {{FREQ_EXTRA_3}} |

### Projecao de Receita (Conservadora):

| Mes | Clientes | Setup Total | MRR | Receita Mensal | ARPU |
|-----|----------|-------------|-----|----------------|------|
| {{MES_R_1}} | {{CLIENTES_M1}} | R$ {{SETUP_M1}} | R$ {{MRR_M1}} | R$ {{RECEITA_M1_R}} | R$ {{ARPU_M1}} |
| {{MES_R_2}} | {{CLIENTES_M2}} | R$ {{SETUP_M2}} | R$ {{MRR_M2}} | R$ {{RECEITA_M2_R}} | R$ {{ARPU_M2}} |
| {{MES_R_3}} | {{CLIENTES_M3}} | R$ {{SETUP_M3}} | R$ {{MRR_M3}} | R$ {{RECEITA_M3_R}} | R$ {{ARPU_M3}} |
| {{MES_R_4}} | {{CLIENTES_M4}} | R$ {{SETUP_M4}} | R$ {{MRR_M4}} | R$ {{RECEITA_M4_R}} | R$ {{ARPU_M4}} |
| {{MES_R_5}} | {{CLIENTES_M5}} | R$ {{SETUP_M5}} | R$ {{MRR_M5}} | R$ {{RECEITA_M5_R}} | R$ {{ARPU_M5}} |
| {{MES_R_6}} | {{CLIENTES_M6}} | R$ {{SETUP_M6}} | R$ {{MRR_M6}} | R$ {{RECEITA_M6_R}} | R$ {{ARPU_M6}} |

---

## 10. EARLY ADOPTERS (Earlyvangelists)

### Perfil do Early Adopter:

**Caracteristicas Demograficas:**
- {{TIPO_NEGOCIO}}: {{DESCRICAO_NEGOCIO}}
- **Tamanho:** {{TAMANHO_EQUIPA}} ({{DESCRICAO_EQUIPA}})
- **Faturamento:** {{FATURAMENTO_MIN}}-{{FATURAMENTO_MAX}}/mes
- **Localizacao:** {{LOCALIZACAO}}
- **Maturidade Digital:** {{MATURIDADE_DIGITAL}}

**Caracteristicas Psicograficas:**
- [ ] {{CARACTERISTICA_PSI_1}}
- [ ] {{CARACTERISTICA_PSI_2}}
- [ ] {{CARACTERISTICA_PSI_3}}
- [ ] {{CARACTERISTICA_PSI_4}}
- [ ] {{CARACTERISTICA_PSI_5}}

**Jobs-to-be-Done:**
1. "{{JOB_1}}"
2. "{{JOB_2}}"
3. "{{JOB_3}}"
4. "{{JOB_4}}"

### Nossos {{NUM_BETAS}} Beta Testers:

| Cliente | Segmento | Dor Principal | Validacao |
|---------|----------|---------------|-----------|
| **{{BETA_1}}** | {{SEGMENTO_B1}} | {{DOR_B1}} | {{STATUS_B1}} |
| **{{BETA_2}}** | {{SEGMENTO_B2}} | {{DOR_B2}} | {{STATUS_B2}} |
| **{{BETA_3}}** | {{SEGMENTO_B3}} | {{DOR_B3}} | {{STATUS_B3}} |
| **{{BETA_4}}** | {{SEGMENTO_B4}} | {{DOR_B4}} | {{STATUS_B4}} |

### Como Encontrar Mais Early Adopters:

1. **Rede do Founder:**
   - {{CANAL_EARLY_1_1}}
   - {{CANAL_EARLY_1_2}}
   - {{CANAL_EARLY_1_3}}

2. **Comunidades Online:**
   - {{CANAL_EARLY_2_1}}
   - {{CANAL_EARLY_2_2}}
   - {{CANAL_EARLY_2_3}}

3. **Offline:**
   - {{CANAL_EARLY_3_1}}
   - {{CANAL_EARLY_3_2}}
   - {{CANAL_EARLY_3_3}}

### Script de Abordagem (Early Adopter):

> *"{{SCRIPT_ABORDAGEM}}"*

---

## 11. RISCOS E HIPOTESES CRITICAS

### Hipoteses que Precisam ser Validadas:

| Hipotese | Status | Experimento | Metrica de Sucesso |
|----------|--------|-------------|-------------------|
| {{HIPOTESE_1}} | {{STATUS_H1}} | {{EXPERIMENTO_H1}} | {{SUCESSO_H1}} |
| {{HIPOTESE_2}} | {{STATUS_H2}} | {{EXPERIMENTO_H2}} | {{SUCESSO_H2}} |
| {{HIPOTESE_3}} | {{STATUS_H3}} | {{EXPERIMENTO_H3}} | {{SUCESSO_H3}} |
| {{HIPOTESE_4}} | {{STATUS_H4}} | {{EXPERIMENTO_H4}} | {{SUCESSO_H4}} |
| {{HIPOTESE_5}} | {{STATUS_H5}} | {{EXPERIMENTO_H5}} | {{SUCESSO_H5}} |

### Riscos Principais:

| Risco | Probabilidade | Impacto | Mitigacao |
|-------|---------------|---------|-----------|
| {{RISCO_1}} | {{PROB_R1}} | {{IMPACTO_R1}} | {{MITIGACAO_R1}} |
| {{RISCO_2}} | {{PROB_R2}} | {{IMPACTO_R2}} | {{MITIGACAO_R2}} |
| {{RISCO_3}} | {{PROB_R3}} | {{IMPACTO_R3}} | {{MITIGACAO_R3}} |
| {{RISCO_4}} | {{PROB_R4}} | {{IMPACTO_R4}} | {{MITIGACAO_R4}} |
| {{RISCO_5}} | {{PROB_R5}} | {{IMPACTO_R5}} | {{MITIGACAO_R5}} |

---

## 12. PROXIMOS PASSOS (Proximos 30 Dias)

### Semana 1-2:
- [ ] {{ACAO_S1_1}}
- [ ] {{ACAO_S1_2}}
- [ ] {{ACAO_S1_3}}
- [ ] {{ACAO_S1_4}}

### Semana 3-4:
- [ ] {{ACAO_S2_1}}
- [ ] {{ACAO_S2_2}}
- [ ] {{ACAO_S2_3}}
- [ ] {{ACAO_S2_4}}

### Metricas de Sucesso (Day 30):
- [ ] {{METRICA_S1}}
- [ ] {{METRICA_S2}}
- [ ] {{METRICA_S3}}
- [ ] {{METRICA_S4}}

---

**Este Lean Canvas e um documento vivo.** Revisar mensalmente e atualizar conforme aprendemos com o mercado.

**Proxima Revisao:** {{DATA_REVISAO}}

---

*Criado com base nos frameworks de Ash Maurya (Running Lean) e Alex Osterwalder (Business Model Canvas)*
```

---

### 1.2 VALUE_PROPOSITION_CANVAS.md

**O que e:** Mapeamento detalhado das dores e ganhos do cliente vs. solucoes do produto
**Quando usar:** Apos Lean Canvas, antes de desenvolver o produto
**Prioridade:** CRITICA

#### Estrutura Obrigatoria:

```markdown
# Value Proposition Canvas - {{NOME_PROJETO}}

**Versao:** 1.0 | **Data:** {{DATA}}
**Foco:** Fit entre "{{SEGMENTO_CLIENTE}}" e proposta {{NOME_PROJETO}}

---

## 1. CUSTOMER PROFILE - "{{PERSONA_NOME}}"

### 1.1 Jobs-to-be-Done (O que eles querem realizar)

#### Functional (Tarefas Praticas):

| Rank | Job | Frequencia | Importancia |
|------|-----|------------|-------------|
| 1 | **{{JOB_FUNCIONAL_1}}** | {{FREQ_J1}} | {{IMPORT_J1}} |
| 2 | **{{JOB_FUNCIONAL_2}}** | {{FREQ_J2}} | {{IMPORT_J2}} |
| 3 | **{{JOB_FUNCIONAL_3}}** | {{FREQ_J3}} | {{IMPORT_J3}} |
| 4 | **{{JOB_FUNCIONAL_4}}** | {{FREQ_J4}} | {{IMPORT_J4}} |
| 5 | **{{JOB_FUNCIONAL_5}}** | {{FREQ_J5}} | {{IMPORT_J5}} |
| 6 | **{{JOB_FUNCIONAL_6}}** | {{FREQ_J6}} | {{IMPORT_J6}} |

**Descricao detalhada:**

> *"Quando preciso de {{RESULTADO_1}}, quero {{ACAO_1}}, para que eu possa {{BENEFICIO_1}}"*

> *"Quando {{CENARIO_2}}, quero {{DESEJO_2}}, para que eu possa {{BENEFICIO_2}}"*

> *"Quando {{CENARIO_3}}, quero {{DESEJO_3}}, para que eu possa {{BENEFICIO_3}}"*

#### Social (Como querem ser percebidos):

| Job | Descricao | Contexto |
|-----|-----------|----------|
| **{{JOB_SOCIAL_1}}** | {{DESC_SOCIAL_1}} | {{CONTEXTO_SOCIAL_1}} |
| **{{JOB_SOCIAL_2}}** | {{DESC_SOCIAL_2}} | {{CONTEXTO_SOCIAL_2}} |
| **{{JOB_SOCIAL_3}}** | {{DESC_SOCIAL_3}} | {{CONTEXTO_SOCIAL_3}} |

**Citacao tipica:**
> *"{{CITACAO_SOCIAL}}"*

#### Emotional (Como querem se sentir):

| Job | Sentimento Desejado | Dor Atual |
|-----|---------------------|-----------|
| **{{JOB_EMOCIONAL_1}}** | {{SENTIMENTO_1}} | {{DOR_ATUAL_1}} |
| **{{JOB_EMOCIONAL_2}}** | {{SENTIMENTO_2}} | {{DOR_ATUAL_2}} |
| **{{JOB_EMOCIONAL_3}}** | {{SENTIMENTO_3}} | {{DOR_ATUAL_3}} |
| **{{JOB_EMOCIONAL_4}}** | {{SENTIMENTO_4}} | {{DOR_ATUAL_4}} |

**Citacao tipica:**
> *"{{CITACAO_EMOCIONAL}}"*

---

### 1.2 Pains (Dores - O que os frustra)

#### Pains Severos (Must Fix):

| # | Pain | Severidade | Evidencia |
|---|------|------------|-----------|
| **P1** | **{{PAIN_1}}** | {{SEV_P1}}/10 | "{{EVID_P1}}" |
| **P2** | **{{PAIN_2}}** | {{SEV_P2}}/10 | "{{EVID_P2}}" |
| **P3** | **{{PAIN_3}}** | {{SEV_P3}}/10 | "{{EVID_P3}}" |
| **P4** | **{{PAIN_4}}** | {{SEV_P4}}/10 | "{{EVID_P4}}" |

#### Pains Moderados (Should Fix):

| # | Pain | Severidade | Evidencia |
|---|------|------------|-----------|
| P5 | {{PAIN_5}} | {{SEV_P5}}/10 | "{{EVID_P5}}" |
| P6 | {{PAIN_6}} | {{SEV_P6}}/10 | "{{EVID_P6}}" |
| P7 | {{PAIN_7}} | {{SEV_P7}}/10 | "{{EVID_P7}}" |
| P8 | {{PAIN_8}} | {{SEV_P8}}/10 | "{{EVID_P8}}" |

#### Pains Leves (Nice to Fix):

| # | Pain | Severidade |
|---|------|------------|
| P9 | {{PAIN_9}} | {{SEV_P9}}/10 |
| P10 | {{PAIN_10}} | {{SEV_P10}}/10 |

#### Obstaculos (O que impede de resolver):

| Obstaculo | Descricao | Impacto |
|-----------|-----------|---------|
| **{{OBST_1}}** | {{DESC_OBST_1}} | {{IMPACTO_OBST_1}} |
| **{{OBST_2}}** | {{DESC_OBST_2}} | {{IMPACTO_OBST_2}} |
| **{{OBST_3}}** | {{DESC_OBST_3}} | {{IMPACTO_OBST_3}} |
| **{{OBST_4}}** | {{DESC_OBST_4}} | {{IMPACTO_OBST_4}} |
| **{{OBST_5}}** | {{DESC_OBST_5}} | {{IMPACTO_OBST_5}} |

#### Risks (O que podem perder):

| Risco | Descricao | Severidade |
|-------|-----------|------------|
| **{{RISCO_P_1}}** | {{DESC_RISCO_P_1}} | {{SEV_RISCO_P_1}}/10 |
| **{{RISCO_P_2}}** | {{DESC_RISCO_P_2}} | {{SEV_RISCO_P_2}}/10 |
| **{{RISCO_P_3}}** | {{DESC_RISCO_P_3}} | {{SEV_RISCO_P_3}}/10 |
| **{{RISCO_P_4}}** | {{DESC_RISCO_P_4}} | {{SEV_RISCO_P_4}}/10 |

---

### 1.3 Gains (Ganhos - O que eles querem alcancar)

#### Gains Obrigatorios (Must Have):

| # | Gain | Importancia | Como Medir |
|---|------|-------------|------------|
| **G1** | **{{GAIN_1}}** | {{IMP_G1}}/10 | {{MEDIR_G1}} |
| **G2** | **{{GAIN_2}}** | {{IMP_G2}}/10 | {{MEDIR_G2}} |
| **G3** | **{{GAIN_3}}** | {{IMP_G3}}/10 | {{MEDIR_G3}} |
| **G4** | **{{GAIN_4}}** | {{IMP_G4}}/10 | {{MEDIR_G4}} |

#### Gains Esperados (Expected):

| # | Gain | Importancia |
|---|------|-------------|
| G5 | {{GAIN_5}} | {{IMP_G5}}/10 |
| G6 | {{GAIN_6}} | {{IMP_G6}}/10 |
| G7 | {{GAIN_7}} | {{IMP_G7}}/10 |
| G8 | {{GAIN_8}} | {{IMP_G8}}/10 |

#### Gains Desejados (Desired):

| # | Gain | Importancia |
|---|------|-------------|
| G9 | {{GAIN_9}} | {{IMP_G9}}/10 |
| G10 | {{GAIN_10}} | {{IMP_G10}}/10 |
| G11 | {{GAIN_11}} | {{IMP_G11}}/10 |
| G12 | {{GAIN_12}} | {{IMP_G12}}/10 |

#### Gains Inesperados (Delighters):

| # | Gain | Reacao Esperada |
|---|------|-----------------|
| G13 | **{{GAIN_13}}** | "{{REACAO_G13}}" |
| G14 | **{{GAIN_14}}** | "{{REACAO_G14}}" |
| G15 | **{{GAIN_15}}** | "{{REACAO_G15}}" |
| G16 | **{{GAIN_16}}** | "{{REACAO_G16}}" |

---

## 2. VALUE MAP - O que a {{NOME_PROJETO}} Oferece

### 2.1 Products & Services (Produtos e Servicos)

#### Produto Core ({{TIPO_PRODUTO}}):

| Componente | Descricao | Status MVP |
|------------|-----------|------------|
| **{{COMPONENTE_1}}** | {{DESC_COMP_1}} | {{STATUS_COMP_1}} |
| **{{COMPONENTE_2}}** | {{DESC_COMP_2}} | {{STATUS_COMP_2}} |
| **{{COMPONENTE_3}}** | {{DESC_COMP_3}} | {{STATUS_COMP_3}} |
| **{{COMPONENTE_4}}** | {{DESC_COMP_4}} | {{STATUS_COMP_4}} |
| **{{COMPONENTE_5}}** | {{DESC_COMP_5}} | {{STATUS_COMP_5}} |
| **{{COMPONENTE_6}}** | {{DESC_COMP_6}} | {{STATUS_COMP_6}} |

#### Servico Diferenciado ({{NOME_SERVICO_DIF}}):

| Funcionalidade | Descricao | Tipo |
|----------------|-----------|------|
| **{{FUNC_DIF_1}}** | {{DESC_FUNC_DIF_1}} | {{TIPO_FUNC_DIF_1}} |
| **{{FUNC_DIF_2}}** | {{DESC_FUNC_DIF_2}} | {{TIPO_FUNC_DIF_2}} |
| **{{FUNC_DIF_3}}** | {{DESC_FUNC_DIF_3}} | {{TIPO_FUNC_DIF_3}} |
| **{{FUNC_DIF_4}}** | {{DESC_FUNC_DIF_4}} | {{TIPO_FUNC_DIF_4}} |
| **{{FUNC_DIF_5}}** | {{DESC_FUNC_DIF_5}} | {{TIPO_FUNC_DIF_5}} |
| **{{FUNC_DIF_6}}** | {{DESC_FUNC_DIF_6}} | {{TIPO_FUNC_DIF_6}} |

#### Servicos Profissionais:

| Servico | Descricao | Valor |
|---------|-----------|-------|
| **{{SERV_PROF_1}}** | {{DESC_SERV_PROF_1}} | R$ {{VALOR_SERV_PROF_1}} |
| **{{SERV_PROF_2}}** | {{DESC_SERV_PROF_2}} | R$ {{VALOR_SERV_PROF_2}} |
| **{{SERV_PROF_3}}** | {{DESC_SERV_PROF_3}} | R$ {{VALOR_SERV_PROF_3}} |

#### Pacotes (Bundles):

| Pacote | Inclui | Preco |
|--------|--------|-------|
| **{{PACOTE_1}}** | {{INCLUI_P1}} | R$ {{PRECO_P1}}/mes |
| **{{PACOTE_2}}** | {{INCLUI_P2}} | R$ {{PRECO_P2}}/mes |
| **{{PACOTE_3}}** | {{INCLUI_P3}} | R$ {{PRECO_P3}}/mes |

---

### 2.2 Pain Relievers (Como aliviamos as dores)

#### Alivio para P1: "{{PAIN_1}}"

| Solucao {{NOME_PROJETO}} | Como Alivia | Evidencia |
|--------------------------|-------------|-----------|
| **{{SOL_PAIN_1_1}}** | {{COMO_ALIVIA_1_1}} | "{{EVID_ALIVIO_1_1}}" |
| **{{SOL_PAIN_1_2}}** | {{COMO_ALIVIA_1_2}} | "{{EVID_ALIVIO_1_2}}" |
| **{{SOL_PAIN_1_3}}** | {{COMO_ALIVIA_1_3}} | "{{EVID_ALIVIO_1_3}}" |
| **{{SOL_PAIN_1_4}}** | {{COMO_ALIVIA_1_4}} | "{{EVID_ALIVIO_1_4}}" |

**Citacao que queremos ouvir:**
> *"{{CITACAO_DESEJADA_1}}"*

#### Alivio para P2: "{{PAIN_2}}"

| Solucao {{NOME_PROJETO}} | Como Alivia | Evidencia |
|--------------------------|-------------|-----------|
| **{{SOL_PAIN_2_1}}** | {{COMO_ALIVIA_2_1}} | "{{EVID_ALIVIO_2_1}}" |
| **{{SOL_PAIN_2_2}}** | {{COMO_ALIVIA_2_2}} | "{{EVID_ALIVIO_2_2}}" |
| **{{SOL_PAIN_2_3}}** | {{COMO_ALIVIA_2_3}} | "{{EVID_ALIVIO_2_3}}" |
| **{{SOL_PAIN_2_4}}** | {{COMO_ALIVIA_2_4}} | "{{EVID_ALIVIO_2_4}}" |

**Citacao que queremos ouvir:**
> *"{{CITACAO_DESEJADA_2}}"*

#### Alivio para P3: "{{PAIN_3}}"

| Solucao {{NOME_PROJETO}} | Como Alivia | Evidencia |
|--------------------------|-------------|-----------|
| **{{SOL_PAIN_3_1}}** | {{COMO_ALIVIA_3_1}} | "{{EVID_ALIVIO_3_1}}" |
| **{{SOL_PAIN_3_2}}** | {{COMO_ALIVIA_3_2}} | "{{EVID_ALIVIO_3_2}}" |
| **{{SOL_PAIN_3_3}}** | {{COMO_ALIVIA_3_3}} | "{{EVID_ALIVIO_3_3}}" |
| **{{SOL_PAIN_3_4}}** | {{COMO_ALIVIA_3_4}} | "{{EVID_ALIVIO_3_4}}" |

**Citacao que queremos ouvir:**
> *"{{CITACAO_DESEJADA_3}}"*

#### Alivio para P4: "{{PAIN_4}}"

| Solucao {{NOME_PROJETO}} | Como Alivia | Evidencia |
|--------------------------|-------------|-----------|
| **{{SOL_PAIN_4_1}}** | {{COMO_ALIVIA_4_1}} | "{{EVID_ALIVIO_4_1}}" |
| **{{SOL_PAIN_4_2}}** | {{COMO_ALIVIA_4_2}} | "{{EVID_ALIVIO_4_2}}" |
| **{{SOL_PAIN_4_3}}** | {{COMO_ALIVIA_4_3}} | "{{EVID_ALIVIO_4_3}}" |
| **{{SOL_PAIN_4_4}}** | {{COMO_ALIVIA_4_4}} | "{{EVID_ALIVIO_4_4}}" |

**Citacao que queremos ouvir:**
> *"{{CITACAO_DESEJADA_4}}"*

---

### 2.3 Gain Creators (Como criamos ganhos)

#### Criando G1: "{{GAIN_1}}"

| Funcionalidade | Como Cria Valor | Resultado |
|----------------|-----------------|-----------|
| **{{FUNC_GAIN_1_1}}** | {{COMO_CRIA_1_1}} | {{RESULTADO_1_1}} |
| **{{FUNC_GAIN_1_2}}** | {{COMO_CRIA_1_2}} | {{RESULTADO_1_2}} |
| **{{FUNC_GAIN_1_3}}** | {{COMO_CRIA_1_3}} | {{RESULTADO_1_3}} |
| **{{FUNC_GAIN_1_4}}** | {{COMO_CRIA_1_4}} | {{RESULTADO_1_4}} |

**Metrica de sucesso:** {{METRICA_SUCESSO_G1}}

#### Criando G2: "{{GAIN_2}}"

| Funcionalidade | Como Cria Valor | Resultado |
|----------------|-----------------|-----------|
| **{{FUNC_GAIN_2_1}}** | {{COMO_CRIA_2_1}} | {{RESULTADO_2_1}} |
| **{{FUNC_GAIN_2_2}}** | {{COMO_CRIA_2_2}} | {{RESULTADO_2_2}} |
| **{{FUNC_GAIN_2_3}}** | {{COMO_CRIA_2_3}} | {{RESULTADO_2_3}} |
| **{{FUNC_GAIN_2_4}}** | {{COMO_CRIA_2_4}} | {{RESULTADO_2_4}} |

**Metrica de sucesso:** {{METRICA_SUCESSO_G2}}

#### Criando G3: "{{GAIN_3}}"

| Funcionalidade | Como Cria Valor | Resultado |
|----------------|-----------------|-----------|
| **{{FUNC_GAIN_3_1}}** | {{COMO_CRIA_3_1}} | {{RESULTADO_3_1}} |
| **{{FUNC_GAIN_3_2}}** | {{COMO_CRIA_3_2}} | {{RESULTADO_3_2}} |
| **{{FUNC_GAIN_3_3}}** | {{COMO_CRIA_3_3}} | {{RESULTADO_3_3}} |
| **{{FUNC_GAIN_3_4}}** | {{COMO_CRIA_3_4}} | {{RESULTADO_3_4}} |

**Metrica de sucesso:** {{METRICA_SUCESSO_G3}}

#### Criando G9/G10: "{{GAIN_9}}" + "{{GAIN_10}}"

| Funcionalidade | Como Cria Valor | Tipo de Ganho |
|----------------|-----------------|---------------|
| **{{FUNC_GAIN_9_1}}** | {{COMO_CRIA_9_1}} | {{TIPO_GAIN_9_1}} |
| **{{FUNC_GAIN_9_2}}** | {{COMO_CRIA_9_2}} | {{TIPO_GAIN_9_2}} |
| **{{FUNC_GAIN_9_3}}** | {{COMO_CRIA_9_3}} | {{TIPO_GAIN_9_3}} |
| **{{FUNC_GAIN_9_4}}** | {{COMO_CRIA_9_4}} | {{TIPO_GAIN_9_4}} |
| **{{FUNC_GAIN_9_5}}** | {{COMO_CRIA_9_5}} | {{TIPO_GAIN_9_5}} |

**Metrica de sucesso:** {{METRICA_SUCESSO_G9}}

---

## 3. FIT VERIFICATION (Verificacao de Fit)

### 3.1 Problem-Solution Fit (O produto resolve o problema?)

| Problema | Solucao {{NOME_PROJETO}} | Fit Status |
|----------|--------------------------|------------|
| P1: {{PAIN_1}} | {{SOL_P1}} | {{FIT_P1}} |
| P2: {{PAIN_2}} | {{SOL_P2}} | {{FIT_P2}} |
| P3: {{PAIN_3}} | {{SOL_P3}} | {{FIT_P3}} |
| P4: {{PAIN_4}} | {{SOL_P4}} | {{FIT_P4}} |
| P5: {{PAIN_5}} | {{SOL_P5}} | {{FIT_P5}} |
| P6: {{PAIN_6}} | {{SOL_P6}} | {{FIT_P6}} |

**Score Geral:** {{SCORE_PS}}/10 problemas principais tem fit alto ou medio.

### 3.2 Product-Market Fit (Clientes compram e usam?)

| Indicador | Evidencia | Status |
|-----------|-----------|--------|
| **Pagam pelo produto** | {{EVID_PAGAM}} | {{STATUS_PAGAM}} |
| **Usam ativamente** | {{EVID_USAM}} | {{STATUS_USAM}} |
| **Recomendam** | {{EVID_RECOMENDAM}} | {{STATUS_RECOMENDAM}} |
| **Renovam mensalidade** | {{EVID_RENOVAM}} | {{STATUS_RENOVAM}} |
| **Dão depoimentos** | {{EVID_DEPOIMENTOS}} | {{STATUS_DEPOIMENTOS}} |

**Score Geral:** {{SCORE_PM}}/5 indicadores validados positivamente.

**Proximos passos para validar PMF:**
1. {{PASSO_PMF_1}}
2. {{PASSO_PMF_2}}
3. {{PASSO_PMF_3}}
4. {{PASSO_PMF_4}}

### 3.3 Business Model Fit (E viavel financeiramente?)

| Componente | Calculo | Status |
|------------|---------|--------|
| **LTV** | R$ {{PRECO_MENSAL}} x {{MESES_LTV}} meses = R$ {{LTV_CALC}} | {{STATUS_LTV}} |
| **CAC** | Estimado R$ {{CAC_EST}} | {{STATUS_CAC}} |
| **LTV/CAC** | {{LTV_CAC_CALC}}x (target: >{{LTV_CAC_TARGET}}x) | {{STATUS_RATIO}} |
| **Payback CAC** | {{PAYBACK_CALC}} meses (target: <{{PAYBACK_TARGET}} meses) | {{STATUS_PAYBACK}} |
| **Margem** | {{MARGEM_CALC}}% (target: >{{MARGEM_TARGET}}%) | {{STATUS_MARGEM}} |

**Score Geral:** {{SCORE_BM}} - Viavel com CAC de R$ {{CAC_EST}} e LTV de R$ {{LTV_CALC}}.

---

## 4. GAPS NO FIT (O que precisa melhorar)

### Gaps Identificados:

| Gap | Problema | Solucao Proposta |
|-----|----------|------------------|
| **G1** | {{PROB_GAP_1}} | {{SOL_GAP_1}} |
| **G2** | {{PROB_GAP_2}} | {{SOL_GAP_2}} |
| **G3** | {{PROB_GAP_3}} | {{SOL_GAP_3}} |
| **G4** | {{PROB_GAP_4}} | {{SOL_GAP_4}} |
| **G5** | {{PROB_GAP_5}} | {{SOL_GAP_5}} |

### Acoes para Melhorar o Fit:

1. **Semana 1-2:** {{ACAO_FIT_1}}
2. **Semana 3-4:** {{ACAO_FIT_2}}
3. **Mes 2:** {{ACAO_FIT_3}}
4. **Mes 3:** {{ACAO_FIT_4}}

---

## 5. MENSAGENS DE VALOR (Como comunicar o Fit)

### Mensagem Principal:

> **"{{MENSAGEM_PRINCIPAL}}"**

### Mensagens por Segmento:

#### Para "{{SEGMENTO_1}}":
> *"{{MENSAGEM_SEG_1}}"*

#### Para "{{SEGMENTO_2}}":
> *"{{MENSAGEM_SEG_2}}"*

#### Para "{{SEGMENTO_3}}":
> *"{{MENSAGEM_SEG_3}}"*

### Proof Points (Evidencias):

1. **"{{PROOF_1}}"** ({{TIPO_PROOF_1}})
2. **"{{PROOF_2}}"** ({{TIPO_PROOF_2}})
3. **"{{PROOF_3}}"** ({{TIPO_PROOF_3}})
4. **"{{PROOF_4}}"** ({{TIPO_PROOF_4}})

---

## 6. TESTES DE VALIDACAO DO FIT

### Experimentos para Validar:

| Experimento | Hipotese | Metrica | Timeline |
|-------------|----------|---------|----------|
| **{{EXP_1}}** | {{HIP_EXP_1}} | {{METRICA_EXP_1}} | {{TIMELINE_EXP_1}} |
| **{{EXP_2}}** | {{HIP_EXP_2}} | {{METRICA_EXP_2}} | {{TIMELINE_EXP_2}} |
| **{{EXP_3}}** | {{HIP_EXP_3}} | {{METRICA_EXP_3}} | {{TIMELINE_EXP_3}} |
| **{{EXP_4}}** | {{HIP_EXP_4}} | {{METRICA_EXP_4}} | {{TIMELINE_EXP_4}} |
| **{{EXP_5}}** | {{HIP_EXP_5}} | {{METRICA_EXP_5}} | {{TIMELINE_EXP_5}} |

### Criterios de Sucesso:

- **Problem-Solution Fit:** {{CRITERIO_PS}}
- **Product-Market Fit:** {{CRITERIO_PM}}
- **Business Model Fit:** {{CRITERIO_BM}}

---

**Este Value Proposition Canvas e um documento vivo.** Atualizar conforme coletamos feedback dos clientes.

**Proxima Revisao:** {{DATA_REVISAO_VPC}}

---

*Baseado no framework de Alex Osterwalder (Strategyzer)*
```

---

## MODULO 2: ANALISE DE MERCADO [OBRIGATORIO]

### 2.1 SWOT_ANALYSIS.md

**O que e:** Analise estrategica completa (Forcas, Fraquezas, Oportunidades, Ameacas)
**Quando usar:** Apos Modelo de Negocio, antes de definir estrategia de crescimento
**Prioridade:** ALTA

#### Estrutura Obrigatoria:

```markdown
# SWOT Analysis - {{NOME_PROJETO}}

**Versao:** 1.0 | **Data:** {{DATA}}
**Contexto:** {{CONTEXTO_SWOT}}

---

## STRENGTHS (Forcas) - Fatores Internos Positivos

### S1: {{FORCA_1}}

**Descricao:** {{DESC_FORCA_1}}

**Por que e uma forca:**
- {{MOTIVO_F1_1}}
- {{MOTIVO_F1_2}}
- {{MOTIVO_F1_3}}

**Evidencia:**
- {{EVID_F1_1}}
- {{EVID_F1_2}}

**Como aproveitar:**
1. {{APROVEITAR_F1_1}}
2. {{APROVEITAR_F1_2}}
3. {{APROVEITAR_F1_3}}

---

### S2: {{FORCA_2}}

**Descricao:** {{DESC_FORCA_2}}

**Por que e uma forca:**
- {{MOTIVO_F2_1}}
- {{MOTIVO_F2_2}}
- {{MOTIVO_F2_3}}

**Evidencia:**
- {{EVID_F2_1}}
- {{EVID_F2_2}}

**Como aproveitar:**
1. {{APROVEITAR_F2_1}}
2. {{APROVEITAR_F2_2}}
3. {{APROVEITAR_F2_3}}

---

### S3: {{FORCA_3}}

**Descricao:** {{DESC_FORCA_3}}

**Por que e uma forca:**
- {{MOTIVO_F3_1}}
- {{MOTIVO_F3_2}}
- {{MOTIVO_F3_3}}

**Evidencia:**
- {{EVID_F3_1}}
- {{EVID_F3_2}}

**Como aproveitar:**
1. {{APROVEITAR_F3_1}}
2. {{APROVEITAR_F3_2}}
3. {{APROVEITAR_F3_3}}

---

### S4: {{FORCA_4}}

**Descricao:** {{DESC_FORCA_4}}

**Por que e uma forca:**
- {{MOTIVO_F4_1}}
- {{MOTIVO_F4_2}}
- {{MOTIVO_F4_3}}

**Evidencia:**
- {{EVID_F4_1}}
- {{EVID_F4_2}}

**Como aproveitar:**
1. {{APROVEITAR_F4_1}}
2. {{APROVEITAR_F4_2}}
3. {{APROVEITAR_F4_3}}

---

### S5: {{FORCA_5}}

**Descricao:** {{DESC_FORCA_5}}

**Por que e uma forca:**
- {{MOTIVO_F5_1}}
- {{MOTIVO_F5_2}}
- {{MOTIVO_F5_3}}

**Evidencia:**
- {{EVID_F5_1}}
- {{EVID_F5_2}}

**Como aproveitar:**
1. {{APROVEITAR_F5_1}}
2. {{APROVEITAR_F5_2}}
3. {{APROVEITAR_F5_3}}

---

### S6: {{FORCA_6}}

**Descricao:** {{DESC_FORCA_6}}

**Por que e uma forca:**
- {{MOTIVO_F6_1}}
- {{MOTIVO_F6_2}}
- {{MOTIVO_F6_3}}

**Evidencia:**
- {{EVID_F6_1}}
- {{EVID_F6_2}}

**Como aproveitar:**
1. {{APROVEITAR_F6_1}}
2. {{APROVEITAR_F6_2}}
3. {{APROVEITAR_F6_3}}

---

## WEAKNESSES (Fraquezas) - Fatores Internos Negativos

### W1: {{FRAQUEZA_1}}

**Descricao:** {{DESC_FRAQUEZA_1}}

**Por que e uma fraqueza:**
- {{MOTIVO_W1_1}}
- {{MOTIVO_W1_2}}
- {{MOTIVO_W1_3}}

**Impacto:**
- {{IMPACTO_W1_1}}
- {{IMPACTO_W1_2}}

**Como mitigar:**
1. {{MITIGAR_W1_1}}
2. {{MITIGAR_W1_2}}
3. {{MITIGAR_W1_3}}
4. {{MITIGAR_W1_4}}

---

### W2: {{FRAQUEZA_2}}

**Descricao:** {{DESC_FRAQUEZA_2}}

**Por que e uma fraqueza:**
- {{MOTIVO_W2_1}}
- {{MOTIVO_W2_2}}
- {{MOTIVO_W2_3}}

**Impacto:**
- {{IMPACTO_W2_1}}
- {{IMPACTO_W2_2}}

**Como mitigar:**
1. {{MITIGAR_W2_1}}
2. {{MITIGAR_W2_2}}
3. {{MITIGAR_W2_3}}
4. {{MITIGAR_W2_4}}

---

### W3: {{FRAQUEZA_3}}

**Descricao:** {{DESC_FRAQUEZA_3}}

**Por que e uma fraqueza:**
- {{MOTIVO_W3_1}}
- {{MOTIVO_W3_2}}
- {{MOTIVO_W3_3}}

**Impacto:**
- {{IMPACTO_W3_1}}
- {{IMPACTO_W3_2}}

**Como mitigar:**
1. {{MITIGAR_W3_1}}
2. {{MITIGAR_W3_2}}
3. {{MITIGAR_W3_3}}
4. {{MITIGAR_W3_4}}

---

### W4: {{FRAQUEZA_4}}

**Descricao:** {{DESC_FRAQUEZA_4}}

**Por que e uma fraqueza:**
- {{MOTIVO_W4_1}}
- {{MOTIVO_W4_2}}
- {{MOTIVO_W4_3}}

**Impacto:**
- {{IMPACTO_W4_1}}
- {{IMPACTO_W4_2}}

**Como mitigar:**
1. {{MITIGAR_W4_1}}
2. {{MITIGAR_W4_2}}
3. {{MITIGAR_W4_3}}
4. {{MITIGAR_W4_4}}

---

### W5: {{FRAQUEZA_5}}

**Descricao:** {{DESC_FRAQUEZA_5}}

**Por que e uma fraqueza:**
- {{MOTIVO_W5_1}}
- {{MOTIVO_W5_2}}
- {{MOTIVO_W5_3}}

**Impacto:**
- {{IMPACTO_W5_1}}
- {{IMPACTO_W5_2}}

**Como mitigar:**
1. {{MITIGAR_W5_1}}
2. {{MITIGAR_W5_2}}
3. {{MITIGAR_W5_3}}
4. {{MITIGAR_W5_4}}

---

### W6: {{FRAQUEZA_6}}

**Descricao:** {{DESC_FRAQUEZA_6}}

**Por que e uma fraqueza:**
- {{MOTIVO_W6_1}}
- {{MOTIVO_W6_2}}
- {{MOTIVO_W6_3}}

**Impacto:**
- {{IMPACTO_W6_1}}
- {{IMPACTO_W6_2}}

**Como mitigar:**
1. {{MITIGAR_W6_1}}
2. {{MITIGAR_W6_2}}
3. {{MITIGAR_W6_3}}
4. {{MITIGAR_W6_4}}

---

## OPPORTUNITIES (Oportunidades) - Fatores Externos Positivos

### O1: {{OPORTUNIDADE_1}}

**Descricao:** {{DESC_O1}}

**Por que e uma oportunidade:**
- {{MOTIVO_O1_1}}
- {{MOTIVO_O1_2}}
- {{MOTIVO_O1_3}}

**Tamanho da oportunidade:**
- TAM: {{TAM_O1}}
- SAM: {{SAM_O1}}
- SOM: {{SOM_O1}}

**Como capturar:**
1. {{CAPTURAR_O1_1}}
2. {{CAPTURAR_O1_2}}
3. {{CAPTURAR_O1_3}}

---

### O2: {{OPORTUNIDADE_2}}

**Descricao:** {{DESC_O2}}

**Por que e uma oportunidade:**
- {{MOTIVO_O2_1}}
- {{MOTIVO_O2_2}}
- {{MOTIVO_O2_3}}

**Tamanho da oportunidade:**
- {{TAMANHO_O2}}

**Como capturar:**
1. {{CAPTURAR_O2_1}}
2. {{CAPTURAR_O2_2}}
3. {{CAPTURAR_O2_3}}

---

### O3: {{OPORTUNIDADE_3}}

**Descricao:** {{DESC_O3}}

**Parceiros Potenciais:**
| Parceiro | Tipo | Beneficio |
|----------|------|-----------|
| {{PARCEIRO_O3_1}} | {{TIPO_P_O3_1}} | {{BENEF_P_O3_1}} |
| {{PARCEIRO_O3_2}} | {{TIPO_P_O3_2}} | {{BENEF_P_O3_2}} |
| {{PARCEIRO_O3_3}} | {{TIPO_P_O3_3}} | {{BENEF_P_O3_3}} |
| {{PARCEIRO_O3_4}} | {{TIPO_P_O3_4}} | {{BENEF_P_O3_4}} |

**Como capturar:**
1. {{CAPTURAR_O3_1}}
2. {{CAPTURAR_O3_2}}
3. {{CAPTURAR_O3_3}}

---

### O4: {{OPORTUNIDADE_4}}

**Descricao:** {{DESC_O4}}

**Por que e uma oportunidade:**
- {{MOTIVO_O4_1}}
- {{MOTIVO_O4_2}}
- {{MOTIVO_O4_3}}

**Como capturar:**
1. {{CAPTURAR_O4_1}}
2. {{CAPTURAR_O4_2}}
3. {{CAPTURAR_O4_3}}

---

### O5: {{OPORTUNIDADE_5}}

**Descricao:** {{DESC_O5}}

**Por que e uma oportunidade:**
- {{MOTIVO_O5_1}}
- {{MOTIVO_O5_2}}
- {{MOTIVO_O5_3}}

**Como capturar:**
1. {{CAPTURAR_O5_1}}
2. {{CAPTURAR_O5_2}}
3. {{CAPTURAR_O5_3}}

---

### O6: {{OPORTUNIDADE_6}}

**Descricao:** {{DESC_O6}}

**Por que e uma oportunidade:**
- {{MOTIVO_O6_1}}
- {{MOTIVO_O6_2}}
- {{MOTIVO_O6_3}}

**Como capturar:**
1. {{CAPTURAR_O6_1}}
2. {{CAPTURAR_O6_2}}
3. {{CAPTURAR_O6_3}}

---

## THREATS (Ameacas) - Fatores Externos Negativos

### T1: {{AMEACA_1}}

**Descricao:** {{DESC_T1}}

**Probabilidade:** {{PROB_T1}}
**Impacto:** {{IMPACTO_T1}}

**Como concorrentes podem reagir:**
- {{REACAO_T1_1}}
- {{REACAO_T1_2}}
- {{REACAO_T1_3}}

**Como mitigar:**
1. {{MITIGAR_T1_1}}
2. {{MITIGAR_T1_2}}
3. {{MITIGAR_T1_3}}
4. {{MITIGAR_T1_4}}

---

### T2: {{AMEACA_2}}

**Descricao:** {{DESC_T2}}

**Probabilidade:** {{PROB_T2}}
**Impacto:** {{IMPACTO_T2}}

**Cenarios de risco:**
- {{CENARIO_T2_1}}
- {{CENARIO_T2_2}}
- {{CENARIO_T2_3}}

**Como mitigar:**
1. {{MITIGAR_T2_1}}
2. {{MITIGAR_T2_2}}
3. {{MITIGAR_T2_3}}
4. {{MITIGAR_T2_4}}

---

### T3: {{AMEACA_3}}

**Descricao:** {{DESC_T3}}

**Probabilidade:** {{PROB_T3}}
**Impacto:** {{IMPACTO_T3}}

**Impacto esperado:**
- {{IMPACTO_ESP_T3_1}}
- {{IMPACTO_ESP_T3_2}}
- {{IMPACTO_ESP_T3_3}}

**Como mitigar:**
1. {{MITIGAR_T3_1}}
2. {{MITIGAR_T3_2}}
3. {{MITIGAR_T3_3}}
4. {{MITIGAR_T3_4}}

---

### T4: {{AMEACA_4}}

**Descricao:** {{DESC_T4}}

**Probabilidade:** {{PROB_T4}}
**Impacto:** {{IMPACTO_T4}}

**Cenarios:**
- {{CENARIO_T4_1}}
- {{CENARIO_T4_2}}
- {{CENARIO_T4_3}}

**Como mitigar:**
1. {{MITIGAR_T4_1}}
2. {{MITIGAR_T4_2}}
3. {{MITIGAR_T4_3}}
4. {{MITIGAR_T4_4}}

---

### T5: {{AMEACA_5}}

**Descricao:** {{DESC_T5}}

**Probabilidade:** {{PROB_T5}}
**Impacto:** {{IMPACTO_T5}}

**Sinais de alerta:**
- {{SINAL_T5_1}}
- {{SINAL_T5_2}}
- {{SINAL_T5_3}}
- {{SINAL_T5_4}}

**Como mitigar:**
1. {{MITIGAR_T5_1}}
2. {{MITIGAR_T5_2}}
3. {{MITIGAR_T5_3}}
4. {{MITIGAR_T5_4}}
5. {{MITIGAR_T5_5}}

---

### T6: {{AMEACA_6}}

**Descricao:** {{DESC_T6}}

**Probabilidade:** {{PROB_T6}}
**Impacto:** {{IMPACTO_T6}}

**Cenarios:**
- {{CENARIO_T6_1}}
- {{CENARIO_T6_2}}
- {{CENARIO_T6_3}}
- {{CENARIO_T6_4}}

**Como mitigar:**
1. {{MITIGAR_T6_1}}
2. {{MITIGAR_T6_2}}
3. {{MITIGAR_T6_3}}
4. {{MITIGAR_T6_4}}

---

## MATRIZ DE ESTRATEGIAS SWOT (TOWS)

### Estrategias SO (Usar Forcas para aproveitar Oportunidades)

| Estrategia | Forca + Oportunidade | Acao |
|------------|---------------------|------|
| **SO1** | {{FORCA_SO1}} + {{OPORT_SO1}} | {{ACAO_SO1}} |
| **SO2** | {{FORCA_SO2}} + {{OPORT_SO2}} | {{ACAO_SO2}} |
| **SO3** | {{FORCA_SO3}} + {{OPORT_SO3}} | {{ACAO_SO3}} |
| **SO4** | {{FORCA_SO4}} + {{OPORT_SO4}} | {{ACAO_SO4}} |

### Estrategias WO (Eliminar Fraquezas para aproveitar Oportunidades)

| Estrategia | Fraqueza + Oportunidade | Acao |
|------------|------------------------|------|
| **WO1** | {{FRAQ_WO1}} + {{OPORT_WO1}} | {{ACAO_WO1}} |
| **WO2** | {{FRAQ_WO2}} + {{OPORT_WO2}} | {{ACAO_WO2}} |
| **WO3** | {{FRAQ_WO3}} + {{OPORT_WO3}} | {{ACAO_WO3}} |
| **WO4** | {{FRAQ_WO4}} + {{OPORT_WO4}} | {{ACAO_WO4}} |

### Estrategias ST (Usar Forcas para evitar Ameacas)

| Estrategia | Forca + Ameaca | Acao |
|------------|---------------|------|
| **ST1** | {{FORCA_ST1}} + {{AMEACA_ST1}} | {{ACAO_ST1}} |
| **ST2** | {{FORCA_ST2}} + {{AMEACA_ST2}} | {{ACAO_ST2}} |
| **ST3** | {{FORCA_ST3}} + {{AMEACA_ST3}} | {{ACAO_ST3}} |
| **ST4** | {{FORCA_ST4}} + {{AMEACA_ST4}} | {{ACAO_ST4}} |

### Estrategias WT (Minimizar Fraquezas para evitar Ameacas)

| Estrategia | Fraqueza + Ameaca | Acao |
|------------|------------------|------|
| **WT1** | {{FRAQ_WT1}} + {{AMEACA_WT1}} | {{ACAO_WT1}} |
| **WT2** | {{FRAQ_WT2}} + {{AMEACA_WT2}} | {{ACAO_WT2}} |
| **WT3** | {{FRAQ_WT3}} + {{AMEACA_WT3}} | {{ACAO_WT3}} |
| **WT4** | {{FRAQ_WT4}} + {{AMEACA_WT4}} | {{ACAO_WT4}} |

---

## PRIORIDADES ESTRATEGICAS BASEADAS NO SWOT

### Top 5 Prioridades (Proximos 6 Meses):

1. **{{PRIORIDADE_1}}** ({{CODIGO_ESTRATEGIA_1}})
   - {{DESCRICAO_PRIORIDADE_1}}

2. **{{PRIORIDADE_2}}** ({{CODIGO_ESTRATEGIA_2}})
   - {{DESCRICAO_PRIORIDADE_2}}

3. **{{PRIORIDADE_3}}** ({{CODIGO_ESTRATEGIA_3}})
   - {{DESCRICAO_PRIORIDADE_3}}

4. **{{PRIORIDADE_4}}** ({{CODIGO_ESTRATEGIA_4}})
   - {{DESCRICAO_PRIORIDADE_4}}

5. **{{PRIORIDADE_5}}** ({{CODIGO_ESTRATEGIA_5}})
   - {{DESCRICAO_PRIORIDADE_5}}

---

## DASHBOARD DE ACOMPANHAMENTO SWOT

### Metricas para Monitorar:

| Forca | Metrica | Target |
|-------|---------|--------|
| {{FORCA_METRICA_1}} | {{METRICA_F1}} | {{TARGET_F1}} |
| {{FORCA_METRICA_2}} | {{METRICA_F2}} | {{TARGET_F2}} |
| {{FORCA_METRICA_3}} | {{METRICA_F3}} | {{TARGET_F3}} |

| Fraqueza | Metrica | Target |
|----------|---------|--------|
| {{FRAQ_METRICA_1}} | {{METRICA_W1}} | {{TARGET_W1}} |
| {{FRAQ_METRICA_2}} | {{METRICA_W2}} | {{TARGET_W2}} |
| {{FRAQ_METRICA_3}} | {{METRICA_W3}} | {{TARGET_W3}} |

| Oportunidade | Metrica | Target |
|--------------|---------|--------|
| {{OPORT_METRICA_1}} | {{METRICA_O1}} | {{TARGET_O1}} |
| {{OPORT_METRICA_2}} | {{METRICA_O2}} | {{TARGET_O2}} |
| {{OPORT_METRICA_3}} | {{METRICA_O3}} | {{TARGET_O3}} |

| Ameaca | Metrica | Target |
|--------|---------|--------|
| {{AMEACA_METRICA_1}} | {{METRICA_T1}} | {{TARGET_T1}} |
| {{AMEACA_METRICA_2}} | {{METRICA_T2}} | {{TARGET_T2}} |
| {{AMEACA_METRICA_3}} | {{METRICA_T3}} | {{TARGET_T3}} |

---

**Este SWOT Analysis deve ser revisado trimestralmente.**

**Proxima Revisao:** {{DATA_REVISAO_SWOT}}

---

*Framework baseado em Albert Humphrey (Stanford Research Institute, 1960s)*
```

---

### 2.2 ANALISE_CONCORRENCIA.md

**O que e:** Inteligencia competitiva detalhada com comparativos, benchmarking e estrategias
**Quando usar:** Apos SWOT, antes de definir posicionamento
**Prioridade:** ALTA

#### Estrutura Obrigatoria:

```markdown
# Analise de Concorrencia - {{NOME_PROJETO}}

**Versao:** 1.0 | **Data:** {{DATA}}
**Cobertura:** {{MERCADO_ALVO}}

---

## Sumario Executivo

**Concorrencia Direta:** {{NUM_CONCORRENTES_DIRETOS}} principais ({{LISTA_CONCORRENTES_DIRETOS}})
**Concorrencia Indireta:** {{NUM_CATEGORIAS_INDIRETAS}} categorias ({{LISTA_CATEGORIAS_INDIRETAS}})
**Nosso Posicionamento:** "{{POSICIONAMENTO_COMPETITIVO}}"

---

## 1. CONCORRENCIA DIRETA ({{CATEGORIA_CONCORRENCIA}})

### 1.1 {{CONCORRENTE_1}}

**Visao Geral:**
| Atributo | Valor |
|----------|-------|
| **Fundaçao** | {{ANO_FUNDACAO_C1}} ({{ANOS_MERCADO_C1}} anos no mercado) |
| **Clientes** | {{NUM_CLIENTES_C1}} |
| **Faturamento Est.** | {{FATURAMENTO_C1}} |
| **Equipe** | {{EQUIPE_C1}} |
| **Captaçao** | {{CAPITACAO_C1}} |

**Pricing:**
| Plano | Mensal | Anual | Features |
|-------|--------|-------|----------|
| {{PLANO_C1_1}} | R$ {{PRECO_C1_1}} | {{ANUAL_C1_1}} | {{FEATURES_C1_1}} |
| {{PLANO_C1_2}} | R$ {{PRECO_C1_2}} | {{ANUAL_C1_2}} | {{FEATURES_C1_2}} |
| {{PLANO_C1_3}} | R$ {{PRECO_C1_3}} | {{ANUAL_C1_3}} | {{FEATURES_C1_3}} |
| {{PLANO_C1_4}} | R$ {{PRECO_C1_4}} | {{ANUAL_C1_4}} | {{FEATURES_C1_4}} |

**Fortalezas:**
1. {{FORCA_C1_1}}
2. {{FORCA_C1_2}}
3. {{FORCA_C1_3}}
4. {{FORCA_C1_4}}
5. {{FORCA_C1_5}}

**Fraquezas:**
1. {{FRAQUEZA_C1_1}}
2. {{FRAQUEZA_C1_2}}
3. {{FRAQUEZA_C1_3}}
4. {{FRAQUEZA_C1_4}}
5. {{FRAQUEZA_C1_5}}

**Publico-Alvo:**
- {{PUBLICO_C1_1}}
- {{PUBLICO_C1_2}}
- {{PUBLICO_C1_3}}

**Estrategia de Crescimento:**
- {{ESTRATEGIA_C1_1}}
- {{ESTRATEGIA_C1_2}}
- {{ESTRATEGIA_C1_3}}

**Como competir com {{CONCORRENTE_1}}:**
- {{COMPETIR_C1_1}}
- {{COMPETIR_C1_2}}
- {{COMPETIR_C1_3}}
- {{COMPETIR_C1_4}}
- {{COMPETIR_C1_5}}

---

### 1.2 {{CONCORRENTE_2}}

**Visao Geral:**
| Atributo | Valor |
|----------|-------|
| **Fundaçao** | {{ANO_FUNDACAO_C2}} ({{ANOS_MERCADO_C2}} anos no mercado) |
| **Clientes** | {{NUM_CLIENTES_C2}} |
| **Empresa** | {{EMPRESA_C2}} ({{AQUISICAO_C2}}) |
| **Foco** | {{FOCO_C2}} |

**Pricing:**
| Plano | Mensal | Features |
|-------|--------|----------|
| {{PLANO_C2_1}} | R$ {{PRECO_C2_1}} | {{FEATURES_C2_1}} |
| {{PLANO_C2_2}} | R$ {{PRECO_C2_2}} | {{FEATURES_C2_2}} |
| {{PLANO_C2_3}} | R$ {{PRECO_C2_3}} | {{FEATURES_C2_3}} |
| {{PLANO_C2_4}} | R$ {{PRECO_C2_4}} | {{FEATURES_C2_4}} |

**Fortalezas:**
1. {{FORCA_C2_1}}
2. {{FORCA_C2_2}}
3. {{FORCA_C2_3}}
4. {{FORCA_C2_4}}
5. {{FORCA_C2_5}}

**Fraquezas:**
1. {{FRAQUEZA_C2_1}}
2. {{FRAQUEZA_C2_2}}
3. {{FRAQUEZA_C2_3}}
4. {{FRAQUEZA_C2_4}}
5. {{FRAQUEZA_C2_5}}

**Publico-Alvo:**
- {{PUBLICO_C2_1}}
- {{PUBLICO_C2_2}}
- {{PUBLICO_C2_3}}

**Como competir com {{CONCORRENTE_2}}:**
- {{COMPETIR_C2_1}}
- {{COMPETIR_C2_2}}
- {{COMPETIR_C2_3}}
- {{COMPETIR_C2_4}}

---

### 1.3 {{CONCORRENTE_3}}

**Visao Geral:**
| Atributo | Valor |
|----------|-------|
| **Fundaçao** | {{ANO_FUNDACAO_C3}} |
| **Clientes** | {{NUM_CLIENTES_C3}} |
| **Foco** | {{FOCO_C3}} |
| **Diferencial** | {{DIFERENCIAL_C3}} |

**Pricing:**
| Plano | Mensal | Features |
|-------|--------|----------|
| {{PLANO_C3_1}} | R$ {{PRECO_C3_1}} | {{FEATURES_C3_1}} |
| {{PLANO_C3_2}} | R$ {{PRECO_C3_2}} | {{FEATURES_C3_2}} |
| {{PLANO_C3_3}} | R$ {{PRECO_C3_3}} | {{FEATURES_C3_3}} |
| {{PLANO_C3_4}} | R$ {{PRECO_C3_4}} | {{FEATURES_C3_4}} |

**Fortalezas:**
1. {{FORCA_C3_1}}
2. {{FORCA_C3_2}}
3. {{FORCA_C3_3}}
4. {{FORCA_C3_4}}
5. {{FORCA_C3_5}}

**Fraquezas:**
1. {{FRAQUEZA_C3_1}}
2. {{FRAQUEZA_C3_2}}
3. {{FRAQUEZA_C3_3}}
4. {{FRAQUEZA_C3_4}}
5. {{FRAQUEZA_C3_5}}

**Publico-Alvo:**
- {{PUBLICO_C3_1}}
- {{PUBLICO_C3_2}}
- {{PUBLICO_C3_3}}

**Como competir com {{CONCORRENTE_3}}:**
- {{COMPETIR_C3_1}}
- {{COMPETIR_C3_2}}
- {{COMPETIR_C3_3}}
- {{COMPETIR_C3_4}}

---

### 1.4 {{CONCORRENTE_4}}

**Visao Geral:**
| Atributo | Valor |
|----------|-------|
| **Fundaçao** | {{ANO_FUNDACAO_C4}} |
| **Clientes** | {{NUM_CLIENTES_C4}} |
| **Foco** | {{FOCO_C4}} |
| **Diferencial** | {{DIFERENCIAL_C4}} |

**Pricing:**
| Plano | Mensal | Features |
|-------|--------|----------|
| {{PLANO_C4_1}} | R$ {{PRECO_C4_1}} | {{FEATURES_C4_1}} |
| {{PLANO_C4_2}} | R$ {{PRECO_C4_2}} | {{FEATURES_C4_2}} |
| {{PLANO_C4_3}} | R$ {{PRECO_C4_3}} | {{FEATURES_C4_3}} |

**Fortalezas:**
1. {{FORCA_C4_1}}
2. {{FORCA_C4_2}}
3. {{FORCA_C4_3}}
4. {{FORCA_C4_4}}
5. {{FORCA_C4_5}}

**Fraquezas:**
1. {{FRAQUEZA_C4_1}}
2. {{FRAQUEZA_C4_2}}
3. {{FRAQUEZA_C4_3}}
4. {{FRAQUEZA_C4_4}}
5. {{FRAQUEZA_C4_5}}

**Publico-Alvo:**
- {{PUBLICO_C4_1}}
- {{PUBLICO_C4_2}}
- {{PUBLICO_C4_3}}

**Como competir com {{CONCORRENTE_4}}:**
- {{COMPETIR_C4_1}}
- {{COMPETIR_C4_2}}
- {{COMPETIR_C4_3}}
- {{COMPETIR_C4_4}}

---

## 2. CONCORRENCIA INDIRETA

### 2.1 {{ALTERNATIVA_INDIRETA_1}}

**Modelo:**
- {{DESC_MODELO_ALT1}}
- Custo: {{CUSTO_ALT1}}
- Tempo: {{TEMPO_ALT1}}

**Fortalezas:**
1. {{FORCA_ALT1_1}}
2. {{FORCA_ALT1_2}}
3. {{FORCA_ALT1_3}}
4. {{FORCA_ALT1_4}}
5. {{FORCA_ALT1_5}}

**Fraquezas:**
1. {{FRAQUEZA_ALT1_1}}
2. {{FRAQUEZA_ALT1_2}}
3. {{FRAQUEZA_ALT1_3}}
4. {{FRAQUEZA_ALT1_4}}
5. {{FRAQUEZA_ALT1_5}}

**Como competir:**
- {{COMPETIR_ALT1_1}}
- {{COMPETIR_ALT1_2}}
- {{COMPETIR_ALT1_3}}
- {{COMPETIR_ALT1_4}}

---

### 2.2 {{ALTERNATIVA_INDIRETA_2}}

**Modelo:**
- {{DESC_MODELO_ALT2}}
- Custo: {{CUSTO_ALT2}}
- Esforco: {{ESFORCO_ALT2}}

**Ferramentas usadas:**
- {{FERRAMENTA_ALT2_1}}
- {{FERRAMENTA_ALT2_2}}
- {{FERRAMENTA_ALT2_3}}
- {{FERRAMENTA_ALT2_4}}
- {{FERRAMENTA_ALT2_5}}

**Fortalezas:**
1. {{FORCA_ALT2_1}}
2. {{FORCA_ALT2_2}}
3. {{FORCA_ALT2_3}}
4. {{FORCA_ALT2_4}}

**Fraquezas:**
1. {{FRAQUEZA_ALT2_1}}
2. {{FRAQUEZA_ALT2_2}}
3. {{FRAQUEZA_ALT2_3}}
4. {{FRAQUEZA_ALT2_4}}
5. {{FRAQUEZA_ALT2_5}}

**Como competir:**
- {{COMPETIR_ALT2_1}}
- {{COMPETIR_ALT2_2}}
- {{COMPETIR_ALT2_3}}
- {{COMPETIR_ALT2_4}}

---

### 2.3 {{ALTERNATIVA_INDIRETA_3}}

**Modelo:**
- {{DESC_MODELO_ALT3}}
- Custo: {{CUSTO_ALT3}}
- Esforco: {{ESFORCO_ALT3}}

**Fortalezas:**
1. {{FORCA_ALT3_1}}
2. {{FORCA_ALT3_2}}
3. {{FORCA_ALT3_3}}
4. {{FORCA_ALT3_4}}

**Fraquezas:**
1. {{FRAQUEZA_ALT3_1}}
2. {{FRAQUEZA_ALT3_2}}
3. {{FRAQUEZA_ALT3_3}}
4. {{FRAQUEZA_ALT3_4}}
5. {{FRAQUEZA_ALT3_5}}

**Como competir:**
- {{COMPETIR_ALT3_1}}
- {{COMPETIR_ALT3_2}}
- {{COMPETIR_ALT3_3}}
- {{COMPETIR_ALT3_4}}
- {{COMPETIR_ALT3_5}}

---

## 3. ANALISE COMPARATIVA DETALHADA

### 3.1 Feature Matrix

| Feature | {{CONCORRENTE_1}} | {{CONCORRENTE_2}} | {{CONCORRENTE_3}} | {{CONCORRENTE_4}} | **{{NOME_PROJETO}}** |
|---------|-------------------|-------------------|-------------------|-------------------|----------------------|
| **{{FEATURE_1}}** | {{C1_F1}} | {{C2_F1}} | {{C3_F1}} | {{C4_F1}} | {{PROJ_F1}} |
| **{{FEATURE_2}}** | {{C1_F2}} | {{C2_F2}} | {{C3_F2}} | {{C4_F2}} | {{PROJ_F2}} |
| **{{FEATURE_3}}** | {{C1_F3}} | {{C2_F3}} | {{C3_F3}} | {{C4_F3}} | {{PROJ_F3}} |
| **{{FEATURE_4}}** | {{C1_F4}} | {{C2_F4}} | {{C3_F4}} | {{C4_F4}} | {{PROJ_F4}} |
| **{{FEATURE_5}}** | {{C1_F5}} | {{C2_F5}} | {{C3_F5}} | {{C4_F5}} | {{PROJ_F5}} |
| **{{FEATURE_6}}** | {{C1_F6}} | {{C2_F6}} | {{C3_F6}} | {{C4_F6}} | {{PROJ_F6}} |
| **{{FEATURE_7}}** | {{C1_F7}} | {{C2_F7}} | {{C3_F7}} | {{C4_F7}} | {{PROJ_F7}} |
| **{{FEATURE_8}}** | {{C1_F8}} | {{C2_F8}} | {{C3_F8}} | {{C4_F8}} | {{PROJ_F8}} |
| **{{FEATURE_9}}** | {{C1_F9}} | {{C2_F9}} | {{C3_F9}} | {{C4_F9}} | {{PROJ_F9}} |
| **{{FEATURE_10}}** | {{C1_F10}} | {{C2_F10}} | {{C3_F10}} | {{C4_F10}} | {{PROJ_F10}} |
| **{{FEATURE_11}}** | {{C1_F11}} | {{C2_F11}} | {{C3_F11}} | {{C4_F11}} | {{PROJ_F11}} |
| **{{FEATURE_12}}** | {{C1_F12}} | {{C2_F12}} | {{C3_F12}} | {{C4_F12}} | {{PROJ_F12}} |

Legenda:
- Forte
- Limitado
- Nao tem
- Em desenvolvimento

---

### 3.2 Positioning Map

```
                    Alta {{DIMENSAO_Y}}
                           |
                           |    {{CONCORRENTE_4}}
                           |
     Baixa {{DIMENSAO_X}} |---------------------------| Alta {{DIMENSAO_X}}
                           |
               {{CONCORRENTE_1}}     |
               {{CONCORRENTE_2}}     |              * {{NOME_PROJETO}}
               {{CONCORRENTE_3}}     |
                           |
                           |
                    Baixa {{DIMENSAO_Y}}
```

**Eixos:**
- **X:** {{DESCRICAO_EIXO_X}}
- **Y:** {{DESCRICAO_EIXO_Y}}

**Analise:**
- {{NOME_PROJETO}} e unico em "{{POSICAO_UNICA}}"
- {{LISTA_CONCORRENTES}} competem no quadrante "{{QUADRANTE_COMPETIDORES}}"
- Espaco azul: "{{ESPACO_BLUE_OCEAN}}"

---

### 3.3 Price-Value Matrix

```
                    Alto Valor Percebido
                           |
     {{ALTERNATIVA_CARA}} *  |          * {{NOME_PROJETO}} (target)
                           |
     Baixo Custo |----------|-----------| Alto Custo
                           |
               {{ALTERNATIVA_BARATA}} *   |    * {{CONCORRENTE_CARO}}
                           |      {{CONCORRENTE_MEDIO}}
                           |      {{CONCORRENTE_BARATO}}
                           |
                    Baixo Valor Percebido
```

**Estrategia de Pricing {{NOME_PROJETO}}:**
- Posicionar entre {{ALTERNATIVA_BARATA}} ({{CUSTO_BARATA}}, baixo valor) e {{ALTERNATIVA_CARA}} ({{CUSTO_CARA}}, alto valor)
- "Alto valor a preco acessivel"

---

## 4. BENCHMARKING DE METRICAS

### 4.1 Metricas de Negocio

| Metrica | {{CONCORRENTE_1}} | {{CONCORRENTE_2}} | {{CONCORRENTE_3}} | {{CONCORRENTE_4}} | {{NOME_PROJETO}} (Target) |
|---------|-------------------|-------------------|-------------------|-------------------|---------------------------|
| **CAC Estimado** | R$ {{CAC_C1}} | R$ {{CAC_C2}} | R$ {{CAC_C3}} | R$ {{CAC_C4}} | R$ {{CAC_TARGET}} |
| **Churn Anual** | {{CHURN_C1}} | {{CHURN_C2}} | {{CHURN_C3}} | {{CHURN_C4}} | {{CHURN_TARGET}} |
| **LTV Medio** | R$ {{LTV_C1}} | R$ {{LTV_C2}} | R$ {{LTV_C3}} | R$ {{LTV_C4}} | R$ {{LTV_TARGET}} |
| **NPS** | {{NPS_C1}} | {{NPS_C2}} | {{NPS_C3}} | {{NPS_C4}} | {{NPS_TARGET}} |
| **Crescimento YoY** | {{CRESC_C1}} | {{CRESC_C2}} | {{CRESC_C3}} | {{CRESC_C4}} | {{CRESC_TARGET}} |

### 4.2 Metricas de Produto

| Metrica | {{CONCORRENTE_1}} | {{CONCORRENTE_2}} | {{CONCORRENTE_3}} | {{CONCORRENTE_4}} | {{NOME_PROJETO}} (Target) |
|---------|-------------------|-------------------|-------------------|-------------------|---------------------------|
| **Time-to-Value** | {{TTV_C1}} | {{TTV_C2}} | {{TTV_C3}} | {{TTV_C4}} | **{{TTV_TARGET}}** |
| **User Adoption** | {{ADOPT_C1}} | {{ADOPT_C2}} | {{ADOPT_C3}} | {{ADOPT_C4}} | **{{ADOPT_TARGET}}** |
| **Support Tickets** | {{TICKETS_C1}} | {{TICKETS_C2}} | {{TICKETS_C3}} | {{TICKETS_C4}} | **{{TICKETS_TARGET}}** |
| **Setup Abandonment** | {{ABANDON_C1}} | {{ABANDON_C2}} | {{ABANDON_C3}} | {{ABANDON_C4}} | **{{ABANDON_TARGET}}** |

---

## 5. ANALISE DE MOVIMENTOS DOS CONCORRENTES

### 5.1 Probabilidade de Copiar Diferenciais {{NOME_PROJETO}}

| Diferencial {{NOME_PROJETO}} | Prob. Copia | Timeline | Impacto |
|------------------------------|-------------|----------|---------|
| **{{DIF_1}}** | {{PROB_DIF_1}} | {{TIME_DIF_1}} | {{IMP_DIF_1}} |
| **{{DIF_2}}** | {{PROB_DIF_2}} | {{TIME_DIF_2}} | {{IMP_DIF_2}} |
| **{{DIF_3}}** | {{PROB_DIF_3}} | {{TIME_DIF_3}} | {{IMP_DIF_3}} |
| **{{DIF_4}}** | {{PROB_DIF_4}} | {{TIME_DIF_4}} | {{IMP_DIF_4}} |

**Analise:**
- {{DIF_1}}: {{ANALISE_DIF_1}}
- {{DIF_2}}: {{ANALISE_DIF_2}}
- {{DIF_3}}: {{ANALISE_DIF_3}}
- {{DIF_4}}: {{ANALISE_DIF_4}}

### 5.2 Movimentos Esperados

**{{CONCORRENTE_1}} ({{PERFIL_C1}}):**
- {{MOVIMENTO_C1_1}} ({{TIMELINE_C1_1}})
- {{MOVIMENTO_C1_2}} ({{TIMELINE_C1_2}})
- {{MOVIMENTO_C1_3}} ({{TIMELINE_C1_3}})

**{{CONCORRENTE_2}} ({{PERFIL_C2}}):**
- {{MOVIMENTO_C2_1}} ({{TIMELINE_C2_1}})
- {{MOVIMENTO_C2_2}} ({{TIMELINE_C2_2}})
- {{MOVIMENTO_C2_3}} ({{TIMELINE_C2_3}})

**{{CONCORRENTE_3}} ({{PERFIL_C3}}):**
- {{MOVIMENTO_C3_1}} ({{TIMELINE_C3_1}})
- {{MOVIMENTO_C3_2}} ({{TIMELINE_C3_2}})
- {{MOVIMENTO_C3_3}} ({{TIMELINE_C3_3}})

**{{CONCORRENTE_4}} ({{PERFIL_C4}}):**
- {{MOVIMENTO_C4_1}} ({{TIMELINE_C4_1}})
- {{MOVIMENTO_C4_2}} ({{TIMELINE_C4_2}})
- {{MOVIMENTO_C4_3}} ({{TIMELINE_C4_3}})

---

## 6. ESTRATEGIAS COMPETITIVAS POR CENARIO

### 6.1 Se Concorrente Copiar {{DIF_1}}

**Cenario:** {{CONCORRENTE_CEN1}} lanca "{{PRODUTO_CEN1}}" em {{TIME_CEN1}}

**Nossa Resposta:**
1. {{RESPOSTA_CEN1_1}}
2. {{RESPOSTA_CEN1_2}}
3. {{RESPOSTA_CEN1_3}}
4. {{RESPOSTA_CEN1_4}}

### 6.2 Se Concorrente Reduzir Preco

**Cenario:** {{CONCORRENTE_CEN2}} lanca plano a R$ {{PRECO_CEN2}}/mes

**Nossa Resposta:**
1. {{RESPOSTA_CEN2_1}}
2. {{RESPOSTA_CEN2_2}}
3. {{RESPOSTA_CEN2_3}}
4. {{RESPOSTA_CEN2_4}}

### 6.3 Se Gigante Entrar no Mercado

**Cenario:** {{GIGANTE_CEN3}} lanca "{{PRODUTO_GIGANTE}}"

**Nossa Resposta:**
1. {{RESPOSTA_CEN3_1}}
2. {{RESPOSTA_CEN3_2}}
3. {{RESPOSTA_CEN3_3}}
4. {{RESPOSTA_CEN3_4}}

---

## 7. OPORTUNIDADES DE DIFERENCIACAO

### 7.1 Diferenciacao de Curto Prazo (6 meses)

1. **{{DIF_CURTO_1}}**
   - {{DESC_DIF_CURTO_1}}
   - {{COMO_IMPL_DIF_CURTO_1}}

2. **{{DIF_CURTO_2}}**
   - {{DESC_DIF_CURTO_2}}
   - {{COMO_IMPL_DIF_CURTO_2}}

3. **{{DIF_CURTO_3}}**
   - {{DESC_DIF_CURTO_3}}
   - {{COMO_IMPL_DIF_CURTO_3}}

### 7.2 Diferenciacao de Medio Prazo (12 meses)

1. **{{DIF_MEDIO_1}}**
   - {{DESC_DIF_MEDIO_1}}
   - {{COMO_IMPL_DIF_MEDIO_1}}

2. **{{DIF_MEDIO_2}}**
   - {{DESC_DIF_MEDIO_2}}
   - {{COMO_IMPL_DIF_MEDIO_2}}

3. **{{DIF_MEDIO_3}}**
   - {{DESC_DIF_MEDIO_3}}
   - {{COMO_IMPL_DIF_MEDIO_3}}

### 7.3 Diferenciacao de Longo Prazo (24+ meses)

1. **{{DIF_LONGO_1}}**
   - {{DESC_DIF_LONGO_1}}
   - {{COMO_IMPL_DIF_LONGO_1}}

2. **{{DIF_LONGO_2}}**
   - {{DESC_DIF_LONGO_2}}
   - {{COMO_IMPL_DIF_LONGO_2}}

3. **{{DIF_LONGO_3}}**
   - {{DESC_DIF_LONGO_3}}
   - {{COMO_IMPL_DIF_LONGO_3}}

---

## 8. INTELIGENCIA COMPETITIVA - COMO MONITORAR

### 8.1 Fontes de Inteligencia

| Fonte | O Que Monitorar | Frequencia |
|-------|-----------------|------------|
| **{{FONTE_1}}** | {{MONITORAR_1}} | {{FREQ_1}} |
| **{{FONTE_2}}** | {{MONITORAR_2}} | {{FREQ_2}} |
| **{{FONTE_3}}** | {{MONITORAR_3}} | {{FREQ_3}} |
| **{{FONTE_4}}** | {{MONITORAR_4}} | {{FREQ_4}} |
| **{{FONTE_5}}** | {{MONITORAR_5}} | {{FREQ_5}} |
| **{{FONTE_6}}** | {{MONITORAR_6}} | {{FREQ_6}} |

### 8.2 Alertas Competitivas

Configurar alertas para:
- [ ] {{ALERTA_1}}
- [ ] {{ALERTA_2}}
- [ ] {{ALERTA_3}}
- [ ] {{ALERTA_4}}
- [ ] {{ALERTA_5}}

### 8.3 Analise de SWOT Competitivo

Fazer analise trimestral de cada concorrente:
- O que mudou desde o ultimo trimestre?
- Quais movimentos estrategicos?
- Como isso afeta {{NOME_PROJETO}}?
- Qual nossa resposta?

---

## 9. RECOMENDACOES ESTRATEGICAS

### 9.1 Posicionamento Competitivo

**Nossa Mensagem vs. Cada Concorrente:**

| Concorrente | Nossa Mensagem |
|-------------|----------------|
| **{{CONCORRENTE_1}}** | "{{MENSAGEM_VS_C1}}" |
| **{{CONCORRENTE_2}}** | "{{MENSAGEM_VS_C2}}" |
| **{{CONCORRENTE_3}}** | "{{MENSAGEM_VS_C3}}" |
| **{{CONCORRENTE_4}}** | "{{MENSAGEM_VS_C4}}" |
| **{{ALTERNATIVA_1}}** | "{{MENSAGEM_VS_ALT1}}" |
| **{{ALTERNATIVA_2}}** | "{{MENSAGEM_VS_ALT2}}" |

### 9.2 Estrategia de Pricing Competitiva

**Recomendacao:**
- **MVP:** Plano unico R$ {{PRECO_MVP}} (simples, nao confundir)
- **Early:** {{PLANO_EARLY_1}} R$ {{PRECO_EARLY_1}} / {{PLANO_EARLY_2}} R$ {{PRECO_EARLY_2}} (capturar segmentos)
- **Escala:** {{NUM_PLANOS_ESCALA}} planos R$ {{PRECO_PLANOS_ESCALA}} (ancoragem)

**Justificativa:**
- {{JUSTIF_PRICING_1}}
- {{JUSTIF_PRICING_2}}
- {{JUSTIF_PRICING_3}}

### 9.3 Estrategia de Go-to-Market

**Foco nos "Refusing Noncustomers" (Tier 2):**
- {{DESCRICAO_TIER2_1}}
- {{DESCRICAO_TIER2_2}}
- {{DESCRICAO_TIER2_3}}

**Mensagem:**
> *"{{MENSAGEM_GTM}}"*

---

## 10. CONCLUSAO

### Resumo da Analise:

1. **Concorrencia Direta:** {{RESUMO_CONCORRENCIA_DIRETA}}

2. **Nosso Espaco:** {{RESUMO_ESPACO}}

3. **Janela de Oportunidade:** {{JANELA_TEMPO}}

4. **Vantagem Sustentavel:** {{VANTAGEM_SUSTENTAVEL}}

### Proximos Passos:

1. [ ] {{PROXIMO_PASSO_1}}
2. [ ] {{PROXIMO_PASSO_2}}
3. [ ] {{PROXIMO_PASSO_3}}
4. [ ] {{PROXIMO_PASSO_4}}
5. [ ] {{PROXIMO_PASSO_5}}

---

**Esta analise deve ser atualizada trimestralmente.**

**Proxima Revisao:** {{DATA_REVISAO_COMP}}

---

*Analise baseada em pesquisa publica, reviews de usuarios, sites oficiais e estimativas de mercado.*
```

---

## MODULO 3: POSICIONAMENTO [OBRIGATORIO]

### 3.1 POSICIONAMENTO_MARCA.md

**O que e:** Documento oficial de posicionamento, tom de voz, pitch e diretrizes criativas
**Quando usar:** Apos Analise de Concorrencia, antes de criar materiais de marketing
**Prioridade:** ALTA

#### Estrutura Obrigatoria:

```markdown
# Posicionamento de Marca - {{NOME_PROJETO}}

**Documento Oficial** | Criado: {{DATA}}
**Uso:** Marketing, Criativos, Campanhas, Vendas, Comunicacao Externa

---

## Proposta de Valor Central

### Tagline Principal
> **"{{TAGLINE}}"**

### Elevator Pitch (10 segundos)
> *"{{ELEVATOR_PITCH}}"*

### Pitch Completo (30 segundos)
> *"{{PITCH_30S_LINHA1}}*
>
> *{{PITCH_30S_LINHA2}}*
>
> *{{PITCH_30S_LINHA3}}"*

---

## Cliente Ideal (ICP - Ideal Customer Profile)

### Perfil Demografico
- **Tipo:** {{TIPO_CLIENTE}}
- **Segmento:** {{SEGMENTOS_CLIENTE}}
- **Tamanho:** {{TAMANHO_CLIENTE}} ({{DESCRICAO_TAMANHO}})
- **Faturamento:** {{FATURAMENTO_MIN}} - {{FATURAMENTO_MAX}}/mes
- **Maturidade Digital:** {{MATURIDADE_DIGITAL_CLIENTE}}

### Perfil Psicografico
- [ ] {{PSICO_1}}
- [ ] {{PSICO_2}}
- [ ] {{PSICO_3}}
- [ ] {{PSICO_4}}

### Jobs-to-be-Done (O que querem alcancar)
1. {{JOB_CLIENTE_1}}
2. {{JOB_CLIENTE_2}}
3. {{JOB_CLIENTE_3}}
4. {{JOB_CLIENTE_4}}
5. {{JOB_CLIENTE_5}}

### Dores Principais
- {{DOR_CLIENTE_1}}
- {{DOR_CLIENTE_2}}
- {{DOR_CLIENTE_3}}
- {{DOR_CLIENTE_4}}
- {{DOR_CLIENTE_5}}

---

## Diferencial Unico (USP - Unique Selling Proposition)

### O que torna {{NOME_PROJETO}} UNICO

#### 1. {{DIFERENCIAL_1}}

**{{NOME_DIFERENCIAL_1}} nao e apenas {{DESCRICAO_SIMPLE_DIF1}}. {{DESCRICAO_COMPLETA_DIF1}}.**

**Como se comunica:**
- {{COMO_COMUNICA_DIF1_1}}
- {{COMO_COMUNICA_DIF1_2}}
- {{COMO_COMUNICA_DIF1_3}}
- {{COMO_COMUNICA_DIF1_4}}

**O que faz:**
- {{OQUE_FAZ_DIF1_1}}
- {{OQUE_FAZ_DIF1_2}}
- {{OQUE_FAZ_DIF1_3}}
- {{OQUE_FAZ_DIF1_4}}

**{{RESULTADO_DIFERENCIAL_1}}**

---

#### 2. "{{ANALOGIA_MATADORA}}" (Analogia Matadora)

| Area | Solucao Tradicional | Por que funciona |
|------|---------------------|------------------|
| {{AREA_1}} | {{SOLUCAO_TRAD_1}} | {{PORQUE_FUNC_1}} |
| {{AREA_2}} | {{SOLUCAO_TRAD_2}} | {{PORQUE_FUNC_2}} |
| {{AREA_3}} | **{{SOLUCAO_NOVA}}** | **{{PORQUE_FUNC_3}}** |

**Mensagem-chave:**
> *"{{MENSAGEM_ANALOGIA}}"*

---

#### 3. {{DIFERENCIAL_3}}

**Como funciona:**

**{{ETAPA_1}} - {{NOME_ETAPA_1}}:**
- {{DESCRICAO_ETAPA_1}}
- {{DETALHE_ETAPA_1}}

**{{ETAPA_2}} - {{NOME_ETAPA_2}}:**
- {{DESCRICAO_ETAPA_2}}
- {{DETALHE_ETAPA_2}}

**{{ETAPA_3}} - {{NOME_ETAPA_3}}:**
- {{DESCRICAO_ETAPA_3}}
- {{DETALHE_ETAPA_3}}

**Vantagem:**
- {{VANTAGEM_DIF3_1}}
- {{VANTAGEM_DIF3_2}}
- {{VANTAGEM_DIF3_3}}
- {{VANTAGEM_DIF3_4}}

---

## Comparacao com Concorrentes

| Feature | **{{CONCORRENTE_1}}** | **{{CONCORRENTE_2}}** | **{{NOME_PROJETO}}** |
|---------|----------------------|----------------------|----------------------|
| **{{FEATURE_COMP_1}}** | {{C1_COMP_1}} | {{C2_COMP_1}} | {{PROJ_COMP_1}} |
| **{{FEATURE_COMP_2}}** | {{C1_COMP_2}} | {{C2_COMP_2}} | {{PROJ_COMP_2}} |
| **{{FEATURE_COMP_3}}** | {{C1_COMP_3}} | {{C2_COMP_3}} | {{PROJ_COMP_3}} |
| **{{FEATURE_COMP_4}}** | {{C1_COMP_4}} | {{C2_COMP_4}} | {{PROJ_COMP_4}} |
| **{{FEATURE_COMP_5}}** | {{C1_COMP_5}} | {{C2_COMP_5}} | {{PROJ_COMP_5}} |
| **{{FEATURE_COMP_6}}** | {{C1_COMP_6}} | {{C2_COMP_6}} | {{PROJ_COMP_6}} |
| **{{FEATURE_COMP_7}}** | {{C1_COMP_7}} | {{C2_COMP_7}} | {{PROJ_COMP_7}} |
| **{{FEATURE_COMP_8}}** | {{C1_COMP_8}} | {{C2_COMP_8}} | {{PROJ_COMP_8}} |

**Categoria:** {{NOME_PROJETO}} nao e "{{CATEGORIA_NEGADA}}" nem "{{CATEGORIA_NEGADA_2}}". E **"{{CATEGORIA_NOVA}}"**.

---

## Tom de Voz da Marca

### Como {{NOME_PROJETO}} fala com o cliente

| Nao Falar Assim | Falar Assim |
|-----------------|-------------|
| "{{NAO_FALAR_1}}" | "{{FALAR_1}}" |
| "{{NAO_FALAR_2}}" | "{{FALAR_2}}" |
| "{{NAO_FALAR_3}}" | "{{FALAR_3}}" |
| "{{NAO_FALAR_4}}" | "{{FALAR_4}}" |
| "{{NAO_FALAR_5}}" | "{{FALAR_5}}" |
| "{{NAO_FALAR_6}}" | "{{FALAR_6}}" |

### Palavras-chave da Marca
- {{PALAVRA_CHAVE_1}}
- {{PALAVRA_CHAVE_2}}
- {{PALAVRA_CHAVE_3}}
- {{PALAVRA_CHAVE_4}}
- {{PALAVRA_CHAVE_5}}

### Personalidade
- {{PERSONALIDADE_1}}
- {{PERSONALIDADE_2}}
- {{PERSONALIDADE_3}}
- {{PERSONALIDADE_4}}

---

## Estrategia de Preco (Modelo Hibrido)

### Produto ({{TIPO_MODELO}} - Recorrente)

#### {{PLANO_1_NOME}} - R$ {{PLANO_1_PRECO}}/mes ({{STATUS_PLANO_1}})
- {{PLANO_1_ITEM_1}}
- {{PLANO_1_ITEM_2}}
- {{PLANO_1_ITEM_3}}
- **Para:** {{TARGET_PLANO_1}}
- {{OBS_PLANO_1}}

#### {{PLANO_2_NOME}} - R$ {{PLANO_2_PRECO}}/mes ({{STATUS_PLANO_2}})
- {{PLANO_2_ITEM_1}}
- {{PLANO_2_ITEM_2}}
- {{PLANO_2_ITEM_3}}
- {{PLANO_2_ITEM_4}}
- **Para:** {{TARGET_PLANO_2}}
- {{OBS_PLANO_2}}

#### {{PLANO_3_NOME}} - R$ {{PLANO_3_PRECO}}/mes ({{STATUS_PLANO_3}})
- {{PLANO_3_ITEM_1}}
- {{PLANO_3_ITEM_2}}
- {{PLANO_3_ITEM_3}}
- {{PLANO_3_ITEM_4}}
- **Para:** {{TARGET_PLANO_3}}
- {{OBS_PLANO_3}}

---

### Servicos (Done-For-You - One-time ou Recorrente)

#### {{SERVICO_1_NOME}} - R$ {{SERVICO_1_PRECO}} ({{SERVICO_1_FREQ}})
- {{SERVICO_1_ITEM_1}}
- {{SERVICO_1_ITEM_2}}
- {{SERVICO_1_ITEM_3}}
- {{SERVICO_1_ITEM_4}}

#### {{SERVICO_2_NOME}} - R$ {{SERVICO_2_PRECO}}/mes
- {{SERVICO_2_ITEM_1}}
- {{SERVICO_2_ITEM_2}}
- {{SERVICO_2_ITEM_3}}

#### {{SERVICO_3_NOME}} - R$ {{SERVICO_3_PRECO}}/mes
- {{SERVICO_3_ITEM_1}}
- {{SERVICO_3_ITEM_2}}
- {{SERVICO_3_ITEM_3}}

---

## Pitch de Vendas (Script Completo - 2 minutos)

### Abertura (Ganhar Atencao)
> **"{{ABERTURA_PITCH}}"**

*(Deixa ele responder: {{RESPOSTA_ESPERADA}})*

---

### Dor (Empatia)
> **"{{DOR_PITCH}}"**

---

### Solucao (Apresenta {{NOME_PROJETO}})
> **"{{SOLUCAO_PITCH}}"**

---

### Como Funciona (Beneficios Concretos)
> **"{{COMO_FUNC_PITCH_LINHA1}}*
> - **{{BENEFICIO_PITCH_1}}** {{DETALHE_BENEF_1}}
> - **{{BENEFICIO_PITCH_2}}** {{DETALHE_BENEF_2}}
> - **{{BENEFICIO_PITCH_3}}** {{DETALHE_BENEF_3}}
> - **{{BENEFICIO_PITCH_4}}** {{DETALHE_BENEF_4}}"

---

### Diferencial (Analogia Matadora)
> **"{{DIFERENCIAL_PITCH}}"**

---

### Comparacao (Vs Concorrentes)
> **"{{COMPARACAO_PITCH}}"**

---

### CTA (Fechamento)
> **"{{CTA_PITCH}}"**

---

## Estrategia de Go-to-Market (Como Vender)

### Fase 1: {{FASE_GTM_1}} ({{PERIODO_GTM_1}})
**Objetivo:** {{OBJETIVO_GTM_1}}

- {{ACAO_GTM_1_1}}
- {{ACAO_GTM_1_2}}
- {{ACAO_GTM_1_3}}
- {{ACAO_GTM_1_4}}

---

### Fase 2: {{FASE_GTM_2}} ({{PERIODO_GTM_2}})
**Objetivo:** {{OBJETIVO_GTM_2}}

- {{ACAO_GTM_2_1}}
- {{ACAO_GTM_2_2}}
- {{ACAO_GTM_2_3}}
- {{ACAO_GTM_2_4}}

---

### Fase 3: {{FASE_GTM_3}} ({{PERIODO_GTM_3}})
**Objetivo:** {{OBJETIVO_GTM_3}}

- {{ACAO_GTM_3_1}}
- {{ACAO_GTM_3_2}}
- {{ACAO_GTM_3_3}}
- {{ACAO_GTM_3_4}}

---

## Metricas de Sucesso (KPIs)

### Produto
- **Ativacao:** % clientes que {{METRICA_ATIVACAO}} em {{PRAZO_ATIVACAO}} dias
- **Engajamento {{NOME_DIFERENCIAL_1}}:** {{METRICA_ENGAGEMENT}}
- **Retencao:** Churn rate anual (target: **{{CHURN_TARGET_POS}}**)

### Negocio
- **CAC:** Custo de Aquisicao de Cliente (target: **<R$ {{CAC_TARGET_POS}}**)
- **LTV:** Lifetime Value (target: R$ {{LTV_TARGET_POS}} = {{MESES_LTV_POS}} meses x R$ {{PRECO_MENSAL_POS}})
- **LTV/CAC:** Razao (target: >{{LTV_CAC_TARGET_POS}}x)

### Validacao Qualitativa
- **NPS:** Net Promoter Score (target: >{{NPS_TARGET_POS}})
- **Quote Matador:** Frase que cliente usa pra descrever {{NOME_PROJETO}}
  - Exemplo: *"{{QUOTE_MATADOR}}"*

---

## Diretrizes Criativas (Para Marketing)

### Mensagens-Chave (Sempre Repetir)
1. "{{MENSAGEM_CHAVE_1}}"
2. "{{MENSAGEM_CHAVE_2}}"
3. "{{MENSAGEM_CHAVE_3}}"
4. "{{MENSAGEM_CHAVE_4}}"

### Exemplos de Criativos

#### Post {{REDE_SOCIAL_1}} 1:
> {{EXEMPLO_POST_1}}

#### Post {{REDE_SOCIAL_1}} 2:
> {{EXEMPLO_POST_2}}

#### Anuncio {{REDE_SOCIAL_2}}:
> {{EXEMPLO_ANUNCIO}}

---

## Checklist de Comunicacao (Use Sempre)

Antes de criar qualquer material de marketing, confira:

- [ ] Estou falando de {{NOME_DIFERENCIAL_1}}? (diferencial unico)
- [ ] Estou posicionando como "{{POSICIONAMENTO_CHECK}}", nao "{{POSICIONAMENTO_NEGADO}}"?
- [ ] Usei analogia do {{ANALOGIA_CHECK}}?
- [ ] Mostrei beneficio concreto (nao feature tecnica)?
- [ ] Tom {{TOM_DE_VOZ_CHECK}}, nao {{TOM_NEGADO}}?
- [ ] CTA claro ({{CTAS_ESPERADOS}})?

---

## Glossario Interno (Como Falar Sobre {{NOME_PROJETO}})

| Termo Tecnico | Como Falar pro Cliente |
|---------------|------------------------|
| {{TERMO_1}} | {{COMO_FALAR_1}} |
| {{TERMO_2}} | {{COMO_FALAR_2}} |
| {{TERMO_3}} | {{COMO_FALAR_3}} |
| {{TERMO_4}} | {{COMO_FALAR_4}} |
| {{TERMO_5}} | {{COMO_FALAR_5}} |
| {{TERMO_6}} | {{COMO_FALAR_6}} |
| {{TERMO_7}} | {{COMO_FALAR_7}} |

---

## Resumo Executivo (TL;DR)

**{{NOME_PROJETO}} em 1 Frase:**
> *{{RESUMO_1_FRASE}}*

**Diferencial:**
> *{{RESUMO_DIFERENCIAL}}*

**Cliente Ideal:**
> *{{RESUMO_CLIENTE}}*

**Analogia Matadora:**
> *"{{RESUMO_ANALOGIA}}"*

---

**Este documento e a Biblia de Posicionamento do {{NOME_PROJETO}}.**
Qualquer campanha, criativo, pitch ou comunicacao deve estar alinhado com o que esta aqui.

**Ultima Atualizacao:** {{DATA_ATUALIZACAO_POS}}
**Proxima Revisao:** {{DATA_REVISAO_POS}}
```

---

### 3.2 PRICING_STRATEGY.md

**O que e:** Estrategia de precificacao com testes iterativos e scripts de venda
**Quando usar:** Apos Posicionamento, durante validacao com clientes reais
**Prioridade:** ALTA

#### Estrutura Obrigatoria:

```markdown
# Estrategia de Pricing - {{NOME_PROJETO}}

**Modelo:** Price Testing Iterativo
**Status:** {{STATUS_PRICING}}
**Criado:** {{DATA}}

---

## Filosofia de Pricing

**Abordagem:** {{FILOSOFIA_PRICING}}

**Principios:**
- {{PRINCIPIO_1}}
- {{PRINCIPIO_2}}
- {{PRINCIPIO_3}}
- {{PRINCIPIO_4}}

---

## Validacoes de Pricing (Historico)

### Teste 1: {{PRODUTO_TESTE_1}}
**Data:** {{DATA_TESTE_1}}
**Clientes:** {{NUM_CLIENTES_TESTE_1}}
**Resultado:** {{RESULTADO_TESTE_1}}

**O que inclui:**
- {{INCLUI_TESTE_1_1}}
- {{INCLUI_TESTE_1_2}}
- {{INCLUI_TESTE_1_3}}
- {{INCLUI_TESTE_1_4}}

**Aprendizados:**
- {{APRENDIZADO_T1_1}}
- {{APRENDIZADO_T1_2}}
- {{APRENDIZADO_T1_3}}

---

### Teste 2: {{PRODUTO_TESTE_2}}
**Status:** {{STATUS_TESTE_2}}

**Opcoes a testar:**

| Plano | Valor | O que inclui | Hipotese |
|-------|-------|--------------|----------|
| **{{PLANO_TESTE_A}}** | R$ {{PRECO_TESTE_A}}/mes | {{INCLUI_TESTE_A}} | {{HIPOTESE_A}} |
| **{{PLANO_TESTE_B}}** | **R$ {{PRECO_TESTE_B}}/mes** | **{{INCLUI_TESTE_B}}** | **{{HIPOTESE_B}}** |
| **{{PLANO_TESTE_C}}** | R$ {{PRECO_TESTE_C}}/mes | {{INCLUI_TESTE_C}} | {{HIPOTESE_C}} |

**Estrategia de teste:**
1. {{PASSO_TESTE_1}}
2. {{PASSO_TESTE_2}}
3. {{PASSO_TESTE_3}}
4. {{PASSO_TESTE_4}}

---

## Recomendacao de Pricing (MVP - Primeiros {{NUM_CLIENTES_MVP}} Clientes)

### Estrutura Proposta

#### Setup (One-time)
**R$ {{SETUP_MIN}}-{{SETUP_MAX}}** (testar range)

**Justificativa:**
- {{JUSTIF_SETUP_1}}
- {{JUSTIF_SETUP_2}}
- {{JUSTIF_SETUP_3}}
- {{JUSTIF_SETUP_4}}

---

#### Mensal (Recorrente)

### Opcao 1: Plano Unico Simples (TESTE ATUAL)
**R$ {{PRECO_PLANO_UNICO}}/mes** (tudo incluso)

**Inclui:**
- {{INCLUI_PU_1}}
- {{INCLUI_PU_2}}
- {{INCLUI_PU_3}}
- {{INCLUI_PU_4}}
- {{INCLUI_PU_5}}

**Status:** {{STATUS_PU}}

**Vantagem:**
- {{VANT_PU_1}}
- {{VANT_PU_2}}
- {{VANT_PU_3}}

**Desvantagem:**
- {{DESVANT_PU_1}}
- {{DESVANT_PU_2}}
- {{DESVANT_PU_3}}

---

### Opcao 2: Dois Planos (Bom/Melhor)

| Plano | Valor | Target |
|-------|-------|--------|
| **{{PLANO_BOM}}** | R$ {{PRECO_BOM}}/mes | {{TARGET_BOM}} |
| **{{PLANO_MELHOR}}** | R$ {{PRECO_MELHOR}}/mes | {{TARGET_MELHOR}} |

**{{PLANO_BOM}} (R$ {{PRECO_BOM}}/mes):**
- {{ITEM_BOM_1}}
- {{ITEM_BOM_2}}
- {{ITEM_BOM_3}}
- {{ITEM_BOM_4}}

**{{PLANO_MELHOR}} (R$ {{PRECO_MELHOR}}/mes):**
- {{ITEM_MELHOR_1}}
- {{ITEM_MELHOR_2}}
- {{ITEM_MELHOR_3}}
- {{ITEM_MELHOR_4}}
- {{ITEM_MELHOR_5}}

**Estrategia de venda:**
- {{ESTRATEGIA_VENDA_BM_1}}
- {{ESTRATEGIA_VENDA_BM_2}}
- {{ESTRATEGIA_VENDA_BM_3}}

**Vantagem:**
- {{VANT_BM_1}}
- {{VANT_BM_2}}
- {{VANT_BM_3}}

**Desvantagem:**
- {{DESVANT_BM_1}}
- {{DESVANT_BM_2}}

---

### Opcao 3: Tres Planos (Bom/Melhor/Otimo)

| Plano | Valor | Diferencial |
|-------|-------|-------------|
| **{{PLANO_1_TIER}}** | R$ {{PRECO_TIER_1}}/mes | {{DIF_TIER_1}} |
| **{{PLANO_2_TIER}}** | **R$ {{PRECO_TIER_2}}/mes** | **{{DIF_TIER_2}}** |
| **{{PLANO_3_TIER}}** | R$ {{PRECO_TIER_3}}/mes | {{DIF_TIER_3}} |

**Estrategia:**
- {{ESTRATEGIA_TIER_1}}
- {{ESTRATEGIA_TIER_2}}
- {{ESTRATEGIA_TIER_3}}
- {{ESTRATEGIA_TIER_4}}

**Vantagem:**
- {{VANT_TIER_1}}
- {{VANT_TIER_2}}

**Desvantagem:**
- {{DESVANT_TIER_1}}
- {{DESVANT_TIER_2}}

---

## Minha Recomendacao (Fase Atual)

### MVP (Primeiros {{NUM_MVP}} Clientes): Plano Unico
**R$ {{PRECO_MVP_RECOMENDADO}}/mes + R$ {{SETUP_RECOMENDADO}} setup**

**Status:** {{STATUS_PRECO_MVP}}

**Reasoning:**
- {{RACIOCINIO_1}}
- {{RACIOCINIO_2}}
- {{RACIOCINIO_3}}

**LTV com R$ {{PRECO_MVP_RECOMENDADO}}:** R$ {{LTV_MVP}} ({{MESES_LTV_MVP}} meses)
**LTV com R$ {{PRECO_ESCALA}}:** R$ {{LTV_ESCALA}} ({{MESES_LTV_ESCALA}} meses) - Diferenca: +{{DIFERENCA_LTV}}%

---

### Early Adopters (Clientes {{CLIENTE_EARLY_INICIO}}-{{CLIENTE_EARLY_FIM}}): Dois Planos
**R$ {{PRECO_EARLY_1}} {{PLANO_EARLY_NOME_1}} + R$ {{PRECO_EARLY_2}} {{PLANO_EARLY_NOME_2}}**

**Reasoning:**
- {{RACIOCINIO_EARLY_1}}
- {{RACIOCINIO_EARLY_2}}

---

### Escala ({{CLIENTE_ESCALA}}+ Clientes): Tres Planos
**R$ {{PRECO_ESCALA_1}}/{{PRECO_ESCALA_2}}/{{PRECO_ESCALA_3}}** (ajustar valores conforme dados)

---

## Framework de Teste de Preco

### Como testar se preco esta certo:

#### Sinal de Preco MUITO BAIXO:
- {{SINAL_BAIXO_1}}
- {{SINAL_BAIXO_2}}
- {{SINAL_BAIXO_3}}

**Acao:** {{ACAO_PRECO_BAIXO}}

---

#### Sinal de Preco IDEAL:
- {{SINAL_IDEAL_1}}
- {{SINAL_IDEAL_2}}
- {{SINAL_IDEAL_3}}

**Acao:** {{ACAO_PRECO_IDEAL}}

---

#### Sinal de Preco ALTO:
- {{SINAL_ALTO_1}}
- {{SINAL_ALTO_2}}
- {{SINAL_ALTO_3}}

**Acao:** {{ACAO_PRECO_ALTO}}

---

## Scripts de Pricing (Como Apresentar)

### Setup R$ {{SETUP_RECOMENDADO}}
> *"{{SCRIPT_SETUP}}"*

**Se questionar:**
> *"{{RESPOSTA_OBJECAO_SETUP}}"*

---

### Mensal R$ {{PRECO_PLANO_UNICO}} (TESTE)
> *"{{SCRIPT_MENSAL}}"*

**Ancoragem:**
> *"{{SCRIPT_ANCORAGEM}}"*

---

### Teste de Dois Planos (R$ {{PRECO_BOM}} vs R$ {{PRECO_MELHOR}})
> *"{{SCRIPT_DOIS_PLANOS}}"*

**Empurra pra R$ {{PRECO_MELHOR}}:**
> *"{{SCRIPT_EMPURRA}}"*

---

## Pricing vs Concorrentes

| Solucao | Setup | Mensal | O que falta |
|---------|-------|--------|-------------|
| **{{CONCORRENTE_P_1}}** | R$ {{SETUP_C1}} | R$ {{MENSAL_C1}} | {{FALTA_C1}} |
| **{{CONCORRENTE_P_2}}** | R$ {{SETUP_C2}} | R$ {{MENSAL_C2}} | {{FALTA_C2}} |
| **{{CONCORRENTE_P_3}}** | R$ {{SETUP_C3}} | R$ {{MENSAL_C3}} | {{FALTA_C3}} |
| **{{NOME_PROJETO}}** | **R$ {{SETUP_PROJ}}** | **R$ {{MENSAL_PROJ}}** | {{TEM_PROJ}} |

**Mensagem:**
> *"{{MENSAGEM_COMPARATIVO}}"*

---

## Pricing Futuro (Mes {{MES_FUTURO}}+)

### Quando adicionar tiers premium:

**Gatilho:** {{GATILHO_PREMIUM}}

**Plano Pro (R$ {{PRECO_PRO}}/mes):**
- {{ITEM_PRO_1}}
- {{ITEM_PRO_2}}
- {{ITEM_PRO_3}}
- {{ITEM_PRO_4}}

**Plano Enterprise (R$ {{PRECO_ENTERPRISE}}/mes):**
- {{ITEM_ENTERPRISE_1}}
- {{ITEM_ENTERPRISE_2}}
- {{ITEM_ENTERPRISE_3}}
- {{ITEM_ENTERPRISE_4}}

---

## Checklist de Decisao de Pricing (Proximos 30 Dias)

- [ ] {{CHECK_PRECO_1}}
- [ ] {{CHECK_PRECO_2}}
- [ ] {{CHECK_PRECO_3}}
- [ ] {{CHECK_PRECO_4}}
- [ ] {{CHECK_PRECO_5}}
- [ ] {{CHECK_PRECO_6}}

---

## Insights Importantes

### Setup vs Mensal: Por que cobrar setup?
- {{INSIGHT_SETUP_1}}
- {{INSIGHT_SETUP_2}}
- {{INSIGHT_SETUP_3}}

### Desconto: Quando dar?
- {{SIM_DESCONTO_1}}
- {{SIM_DESCONTO_2}}
- {{NAO_DESCONTO_1}}

**Por que?** {{JUSTIF_DESCONTO}}

---

**Este documento evolui com cada teste de pricing.**
Atualizar apos cada {{NUM_CLIENTES_REVISAO}} novos clientes.

**Ultima Atualizacao:** {{DATA_ATUAL_PRICING}}
**Proximo Teste:** {{PROXIMO_TESTE}}
```

---

## MODULO 4: CRESCIMENTO [OBRIGATORIO]

### 4.1 ESTRATEGIA_CRESCIMENTO.md

**O que e:** Roadmap financeiro e operacional de 0 a {{MESES_PROJECAO}} meses com checkpoints
**Quando usar:** Apos definir pricing e posicionamento
**Prioridade:** ALTA

#### Estrutura Obrigatoria:

```markdown
# Estrategia de Crescimento - {{NOME_PROJETO}}

**Roadmap:** {{FASE_ATUAL}} -> {{FASE_TARGET}}
**Timeline:** 0-{{MESES_TOTAL}} meses | **Criado:** {{DATA}}

---

## Contexto e Restricoes

### Situacao Atual
- {{SITUACAO_1}}
- {{SITUACAO_2}}
- {{SITUACAO_3}}
- {{SITUACAO_4}}
- {{SITUACAO_5}}

### Premissas Criticas
- {{PREMISSA_1}}
- {{PREMISSA_2}}
- {{PREMISSA_3}}
- {{PREMISSA_4}}

---

## Timeline Financeiro (0-{{MESES_TOTAL}} Meses)

### FASE 1: {{FASE_1_NOME}} (Mes {{F1_INICIO}}-{{F1_FIM}})
**Status:** {{STATUS_F1}}
**Objetivo:** {{OBJETIVO_F1}}

| Metrica | Meta | Atual |
|---------|------|-------|
| {{METRICA_F1_1}} | {{META_F1_1}} | {{ATUAL_F1_1}} |
| {{METRICA_F1_2}} | {{META_F1_2}} | {{ATUAL_F1_2}} |
| {{METRICA_F1_3}} | {{META_F1_3}} | {{ATUAL_F1_3}} |
| {{METRICA_F1_4}} | {{META_F1_4}} | {{ATUAL_F1_4}} |

**Atividades Principais:**
- [ ] {{ATIVIDADE_F1_1}}
- [ ] {{ATIVIDADE_F1_2}}
- [ ] {{ATIVIDADE_F1_3}}
- [ ] {{ATIVIDADE_F1_4}}
- [ ] {{ATIVIDADE_F1_5}}

**Investimento:** ~R$ {{INVEST_F1}}/mes
**Workload:** {{HORAS_F1}}/semana

---

### FASE 2: {{FASE_2_NOME}} (Mes {{F2_INICIO}}-{{F2_FIM}})
**Objetivo:** {{OBJETIVO_F2}}

| Metrica | Meta |
|---------|------|
| {{METRICA_F2_1}} | {{META_F2_1}} |
| {{METRICA_F2_2}} | {{META_F2_2}} |
| {{METRICA_F2_3}} | {{META_F2_3}} |
| {{METRICA_F2_4}} | {{META_F2_4}} |

**Atividades Principais:**
- [ ] {{ATIVIDADE_F2_1}}
- [ ] {{ATIVIDADE_F2_2}}
- [ ] {{ATIVIDADE_F2_3}}
- [ ] {{ATIVIDADE_F2_4}}
- [ ] {{ATIVIDADE_F2_5}}

**Investimento:** ~R$ {{INVEST_F2}}/mes
**Workload:** {{HORAS_F2}}/semana

---

### FASE 3: {{FASE_3_NOME}} (Mes {{F3_INICIO}}-{{F3_FIM}})
**Objetivo:** {{OBJETIVO_F3}}

| Metrica | Meta |
|---------|------|
| {{METRICA_F3_1}} | {{META_F3_1}} |
| {{METRICA_F3_2}} | {{META_F3_2}} |
| {{METRICA_F3_3}} | {{META_F3_3}} |
| {{METRICA_F3_4}} | {{META_F3_4}} |
| {{METRICA_F3_5}} | {{META_F3_5}} |

**Atividades Principais:**
- [ ] {{ATIVIDADE_F3_1}}
- [ ] {{ATIVIDADE_F3_2}}
- [ ] {{ATIVIDADE_F3_3}}
- [ ] {{ATIVIDADE_F3_4}}
- [ ] {{ATIVIDADE_F3_5}}

**Investimento:** ~R$ {{INVEST_F3}}/mes
**Workload:** {{HORAS_F3}}/semana

---

### FASE 4: {{FASE_4_NOME}} (Mes {{F4_INICIO}}-{{F4_FIM}})
**Objetivo:** {{OBJETIVO_F4}}

| Metrica | Meta |
|---------|------|
| **{{METRICA_F4_1}}** | **{{META_F4_1}}** |
| **{{METRICA_F4_2}}** | **{{META_F4_2}}** |
| {{METRICA_F4_3}} | {{META_F4_3}} |
| {{METRICA_F4_4}} | {{META_F4_4}} |
| {{METRICA_F4_5}} | {{META_F4_5}} |

**Atividades Principais:**
- [ ] {{ATIVIDADE_F4_1}}
- [ ] {{ATIVIDADE_F4_2}}
- [ ] {{ATIVIDADE_F4_3}}
- [ ] {{ATIVIDADE_F4_4}}
- [ ] {{ATIVIDADE_F4_5}}

**Investimento:** ~R$ {{INVEST_F4}}/mes
**Workload:** {{HORAS_F4}}/semana

**DECISION POINT (Mes {{MES_DECISAO}}):**
- {{CRITERIO_GO}} = **{{RESULTADO_GO}}**
- {{CRITERIO_NOGO}} = **{{RESULTADO_NOGO}}**

---

### FASE 5: {{FASE_5_NOME}} (Mes {{F5_INICIO}}-{{F5_FIM}})
**Objetivo:** {{OBJETIVO_F5}}

| Metrica | Meta (Mes {{F5_FIM}}) |
|---------|----------------------|
| {{METRICA_F5_1}} | {{META_F5_1}} |
| {{METRICA_F5_2}} | {{META_F5_2}} |
| {{METRICA_F5_3}} | {{META_F5_3}} |
| {{METRICA_F5_4}} | {{META_F5_4}} |
| {{METRICA_F5_5}} | {{META_F5_5}} |

**Atividades Principais:**
- [ ] {{ATIVIDADE_F5_1}}
- [ ] {{ATIVIDADE_F5_2}}
- [ ] {{ATIVIDADE_F5_3}}
- [ ] {{ATIVIDADE_F5_4}}
- [ ] {{ATIVIDADE_F5_5}}

**Investimento:** ~R$ {{INVEST_F5}}/mes
**Workload:** {{HORAS_F5}}/semana
**Burn do Colchao:** R$ {{BURN_F5}} (MRR > Despesas)

---

### FASE 6: {{FASE_6_NOME}} (Mes {{F6_INICIO}}-{{F6_FIM}})
**Objetivo:** {{OBJETIVO_F6}}

| Metrica | Meta (Mes {{F6_FIM}}) |
|---------|----------------------|
| {{METRICA_F6_1}} | {{META_F6_1}} |
| {{METRICA_F6_2}} | {{META_F6_2}} |
| {{METRICA_F6_3}} | {{META_F6_3}} |
| {{METRICA_F6_4}} | {{META_F6_4}} |
| {{METRICA_F6_5}} | {{META_F6_5}} |

**Atividades Principais:**
- [ ] {{ATIVIDADE_F6_1}}
- [ ] {{ATIVIDADE_F6_2}}
- [ ] {{ATIVIDADE_F6_3}}
- [ ] {{ATIVIDADE_F6_4}}
- [ ] {{ATIVIDADE_F6_5}}

**Investimento:** ~R$ {{INVEST_F6}}/mes
**Lucro:** ~R$ {{LUCRO_F6}}/mes

---

## Projecao Financeira Detalhada

### Custos Mensais por Fase

| Fase | Infra | Marketing | Time | Total | MRR | Lucro |
|------|-------|-----------|------|-------|-----|-------|
| **{{FASE_M1}}** | R$ {{INFRA_M1}} | R$ {{MKT_M1}} | R$ {{TIME_M1}} | R$ {{TOTAL_M1}} | R$ {{MRR_M1}} | R$ {{LUCRO_M1}} |
| **{{FASE_M2}}** | R$ {{INFRA_M2}} | R$ {{MKT_M2}} | R$ {{TIME_M2}} | R$ {{TOTAL_M2}} | R$ {{MRR_M2}} | R$ {{LUCRO_M2}} |
| **{{FASE_M3}}** | R$ {{INFRA_M3}} | R$ {{MKT_M3}} | R$ {{TIME_M3}} | R$ {{TOTAL_M3}} | R$ {{MRR_M3}} | R$ {{LUCRO_M3}} |
| **{{FASE_M4}}** | R$ {{INFRA_M4}} | R$ {{MKT_M4}} | R$ {{TIME_M4}} | R$ {{TOTAL_M4}} | R$ {{MRR_M4}} | R$ {{LUCRO_M4}} |
| **{{FASE_M5}}** | R$ {{INFRA_M5}} | R$ {{MKT_M5}} | R$ {{TIME_M5}} | R$ {{TOTAL_M5}} | R$ {{MRR_M5}} | R$ {{LUCRO_M5}} |
| **{{FASE_M6}}** | R$ {{INFRA_M6}} | R$ {{MKT_M6}} | R$ {{TIME_M6}} | R$ {{TOTAL_M6}} | R$ {{MRR_M6}} | R$ {{LUCRO_M6}} |

### Burn do Colchao (Importante)

**Cenario Otimista (MRR cresce conforme plano):**
- Mes {{MES_EXIT_OTIMISTA}} (exit): R$ {{MRR_EXIT_OTIMISTA}} MRR - R$ {{CUSTOS_EXIT_OTIMISTA}} custos = **R$ {{SOBRA_OTIMISTA}} sobra**
- Colchao: **Nao usa** (MRR cobre despesas pessoais + negocio)

**Cenario Realista ({{PARAMETRO_REALISTA}}):**
- Mes {{MES_EXIT_REALISTA}}: R$ {{MRR_EXIT_REALISTA}} MRR - R$ {{CUSTOS_EXIT_REALISTA}} custos = **R$ {{SOBRA_REALISTA}} sobra**
- Complementa com colchao: R$ {{COMPLEMENTO_COLCHAO}}/mes
- Colchao dura: **{{DURACAO_COLCHAO}} meses** (tempo de ajustar)

**Cenario Pessimista ({{PARAMETRO_PESSIMISTA}}):**
- Mes {{MES_EXIT_PESSIMISTA}}: R$ {{MRR_EXIT_PESSIMISTA}} MRR - R$ {{CUSTOS_EXIT_PESSIMISTA}} custos = **R$ {{SOBRA_PESSIMISTA}} sobra**
- Complementa com colchao: R$ {{COMP_PESSIMISTA}}/mes
- Colchao dura: **{{DURACAO_PESS}} meses**
- **{{ACAO_PESSIMISTA}}**

---

## Metas Criticas por Milestone

### Checkpoint 1 (Mes {{MES_CP1}}) — "{{PERGUNTA_CP1}}"
- [ ] {{CRITERIO_CP1_1}}
- [ ] {{CRITERIO_CP1_2}}
- [ ] {{CRITERIO_CP1_3}}
- [ ] {{CRITERIO_CP1_4}}
- {{RESULTADO_GO_CP1}} = **{{ACAO_GO_CP1}}**
- {{RESULTADO_NOGO_CP1}} = **{{ACAO_NOGO_CP1}}**

---

### Checkpoint 2 (Mes {{MES_CP2}}) — "{{PERGUNTA_CP2}}"
- [ ] {{CRITERIO_CP2_1}}
- [ ] {{CRITERIO_CP2_2}}
- [ ] {{CRITERIO_CP2_3}}
- [ ] {{CRITERIO_CP2_4}}
- {{RESULTADO_GO_CP2}} = **{{ACAO_GO_CP2}}**
- {{RESULTADO_NOGO_CP2}} = **{{ACAO_NOGO_CP2}}**

---

### Checkpoint 3 (Mes {{MES_CP3}}) — "{{PERGUNTA_CP3}}"
- [ ] **{{CRITERIO_CP3_1}}**
- [ ] **{{CRITERIO_CP3_2}}**
- [ ] {{CRITERIO_CP3_3}}
- [ ] {{CRITERIO_CP3_4}}
- [ ] {{CRITERIO_CP3_5}}
- {{RESULTADO_GO_CP3}} = **{{ACAO_GO_CP3}}**
- {{RESULTADO_NOGO_CP3}} = **{{ACAO_NOGO_CP3}}**

---

### Checkpoint 4 (Mes {{MES_CP4}}) — "{{PERGUNTA_CP4}}"
- [ ] {{CRITERIO_CP4_1}}
- [ ] {{CRITERIO_CP4_2}}
- [ ] {{CRITERIO_CP4_3}}
- {{RESULTADO_GO_CP4}} = **{{ACAO_GO_CP4}}**
- {{RESULTADO_NOGO_CP4}} = **{{ACAO_NOGO_CP4}}**

---

## Metricas de Acompanhamento (Dashboard Semanal)

### Metricas de Produto
- **Clientes Ativos:** {{DEF_CLIENTES_ATIVOS}}
- **MRR:** {{DEF_MRR}}
- **Churn Rate:** {{DEF_CHURN}}
- **NPS:** {{DEF_NPS}}

### Metricas de Vendas
- **Leads/mes:** {{DEF_LEADS}}
- **Conversao:** {{DEF_CONVERSAO}}
- **CAC:** {{DEF_CAC}}
- **LTV:** {{DEF_LTV}}

### Metricas de Operacao
- **Tempo de Onboarding:** {{DEF_TEMPO_ONBOARDING}}
- **Support Tickets:** {{DEF_TICKETS}}
- **Uptime:** {{DEF_UPTIME}}
- **Bugs Criticos:** {{DEF_BUGS}}

**Ferramenta:** {{FERRAMENTA_DASHBOARD}}

---

## Riscos e Planos de Contingencia

| Risco | Probabilidade | Impacto | Mitigacao |
|-------|---------------|---------|-----------|
| {{RISCO_EST_1}} | {{PROB_RISCO_1}} | {{IMP_RISCO_1}} | {{MIT_RISCO_1}} |
| {{RISCO_EST_2}} | {{PROB_RISCO_2}} | {{IMP_RISCO_2}} | {{MIT_RISCO_2}} |
| {{RISCO_EST_3}} | {{PROB_RISCO_3}} | {{IMP_RISCO_3}} | {{MIT_RISCO_3}} |
| {{RISCO_EST_4}} | {{PROB_RISCO_4}} | {{IMP_RISCO_4}} | {{MIT_RISCO_4}} |
| {{RISCO_EST_5}} | {{PROB_RISCO_5}} | {{IMP_RISCO_5}} | {{MIT_RISCO_5}} |
| {{RISCO_EST_6}} | {{PROB_RISCO_6}} | {{IMP_RISCO_6}} | {{MIT_RISCO_6}} |

---

## Checklist de Exit Seguro (Revisar Mes {{MES_EXIT_CHECK}})

Antes de {{ACAO_EXIT}}, confirme:

### Financeiro
- [ ] R$ {{MRR_EXIT_CHECK}}+ MRR confirmado ({{MESES_CONFIRMACAO}} meses consecutivos)
- [ ] Churn <{{CHURN_EXIT}}%
- [ ] Colchao {{MESES_COLCHAO}} meses depositado
- [ ] Despesas pessoais mapeadas e reduzidas
- [ ] Sem dividas pessoais de curto prazo

### Produto
- [ ] Onboarding {{PCT_ONBOARDING}}% automatizado
- [ ] {{NOME_DIFERENCIAL_1}} funcionando e atendendo {{PCT_DIF}}%+ tickets
- [ ] {{NUM_BUGS_EXIT}} bugs criticos abertos
- [ ] Roadmap {{MESES_ROADMAP}} meses planejado

### Negocio
- [ ] Pipeline de {{LEADS_EXIT}}+ leads/mes (funil funciona)
- [ ] CAC validado (<R$ {{CAC_EXIT}})
- [ ] Pelo menos {{NUM_DEPOIMENTOS}} depoimento em video
- [ ] Processo de vendas documentado

### Pessoal
- [ ] Familia/parceiro(a) alinhado(a) com decisao
- [ ] Saude mental boa (sem sinais de burnout)
- [ ] Network de apoio (mentores, grupo de founders)

**Se {{PCT_GO}}% checado = GO**
**Se <{{PCT_NOGO}}% checado = HOLD {{MESES_HOLD}} meses**

---

## Proximos Passos Imediatos (Proximos 30 Dias)

1. [ ] {{PASSO_IMEDIATO_1}}
2. [ ] {{PASSO_IMEDIATO_2}}
3. [ ] {{PASSO_IMEDIATO_3}}
4. [ ] {{PASSO_IMEDIATO_4}}
5. [ ] {{PASSO_IMEDIATO_5}}
6. [ ] {{PASSO_IMEDIATO_6}}

---

**Este documento e o GPS do crescimento do {{NOME_PROJETO}}.**
Revisar mensalmente e ajustar conforme realidade.

**Ultima Atualizacao:** {{DATA_ATUAL_EST}}
**Proxima Revisao:** {{DATA_REVISAO_EST}}
```

---

### 4.2 GO_TO_MARKET.md

**O que e:** Estrategia regional e plano de acao para conquistar mercado
**Quando usar:** Apos Estrategia de Crescimento, durante execucao
**Prioridade:** MEDIA (para projetos com foco geografico)

#### Estrutura Obrigatoria:

```markdown
# Estrategia Regional {{REGIAO_ALVO}} - {{NOME_PROJETO}}

**Documento Estrategico de Conquista Regional** | Criado: {{DATA}}
**Marca:** {{NOME_PROJETO}} (mantida em todas as regioes)
**Foco:** {{FOCO_REGIONAL}}
**Horizonte:** {{HORIZONTE_REGIONAL}}

---

## Dados do Mercado

### {{CIDADE_BASE}} - Oportunidade Imediata

| Metrica | Valor | Fonte |
|---------|-------|-------|
| **Populacao** | {{POPULACAO_BASE}} | {{FONTE_POP}} |
| **Economicamente Ativa** | {{PEA_BASE}} | {{FONTE_PEA}} |
| **Empresas Registradas** | {{EMPRESAS_BASE}} | {{FONTE_EMPRESAS}} |
| **MEIs Ativos** | **{{MEIS_BASE}}** | {{FONTE_MEIS}} |
| **Novas Empresas/mes** | ~{{NOVAS_EMPRESAS}} | {{FONTE_NOVAS}} |

**Calculo de Oportunidade {{CIDADE_BASE}}:**
- {{MEIS_BASE}} MEIs + microempresas
- Estimativa: {{PCT_SEM_SOLUCAO}}% nao tem {{SOLUCAO_AUSENTE}} = **{{POTENCIAIS_BASE}} potenciais**
- Taxa de conversao realista ({{TAXA_CONVERSAO}}%) = **~{{CLIENTES_POTENCIAIS}} clientes potenciais**
- Com R$ {{PRECO_MENSAL_REGIONAL}}/mes = **R$ {{MRR_POTENCIAL}} MRR so em {{CIDADE_BASE}}**

---

### {{REGIAO_EXPANSAO}} - Expansao Regional

**Cidades da Regiao ({{NUM_CIDADES}} municipios):**

| Cidade | Populacao | Empresas | Status |
|--------|-----------|----------|--------|
| **{{CIDADE_1}}** | {{POP_C1}} | ~{{EMP_C1}} | {{STATUS_C1}} |
| **{{CIDADE_2}}** | {{POP_C2}} | ~{{EMP_C2}} | {{STATUS_C2}} |
| **{{CIDADE_3}}** | {{POP_C3}} | ~{{EMP_C3}} | {{STATUS_C3}} |
| **{{CIDADE_4}}** | {{POP_C4}} | ~{{EMP_C4}} | {{STATUS_C4}} |
| **{{CIDADE_5}}** | {{POP_C5}} | ~{{EMP_C5}} | {{STATUS_C5}} |

**Total {{REGIAO_EXPANSAO}}:**
- **Populacao:** {{POP_TOTAL}}
- **Empresas:** {{EMP_TOTAL}}+ 
- **Potencial {{NOME_PROJETO}} (estimativa):** {{CLIENTES_TOTAL}}-{{CLIENTES_MAX}} clientes em {{ANOS_EXPANSAO}} anos

---

## Estrategia de Entrada - {{CIDADE_BASE}}

### Fase 1: Conquista de {{CIDADE_BASE}} (Mes {{MES_F1_REG}}-{{MES_F2_REG}})

**Meta:** {{META_CLIENTES_F1}}-{{META_CLIENTES_F2}} clientes em {{CIDADE_BASE}} (MRR R$ {{MRR_F1}} - R$ {{MRR_F2}})

**Taticas Prioritarias:**

**1. Network Pessoal {{CIDADE_BASE}} (Mes {{MES_NET_1}}-{{MES_NET_2}})**
- {{ACAO_NET_1}}
- {{ACAO_NET_2}}
- {{ACAO_NET_3}}
- **Target:** {{TARGET_NET}} clientes dos conhecidos

**2. Parcerias Locais {{CIDADE_BASE}} (Mes {{MES_PARC_1}}-{{MES_PARC_2}})**

**{{TIPO_PARC_1}}:**
- {{ACAO_PARC_1_1}}
- {{ACAO_PARC_1_2}}
- {{ACAO_PARC_1_3}}
- **Target:** {{TARGET_PARC_1}} parcerias ativas

**{{TIPO_PARC_2}}:**
- {{INST_PARC_2_1}}
- {{INST_PARC_2_2}}
- {{INST_PARC_2_3}}
- **Target:** {{TARGET_PARC_2}}

**3. Conteudo Local (Mes {{MES_CONT_1}}-{{MES_CONT_2}})**

**{{CANAL_CONTEUDO_1}}:**
- {{CONTEUDO_1_1}}
- {{CONTEUDO_1_2}}
- {{CONTEUDO_1_3}}
- **Target:** {{TARGET_CONTEUDO_1}}

**{{CANAL_CONTEUDO_2}}:**
- {{CONTEUDO_2_1}}
- {{CONTEUDO_2_2}}
- {{CONTEUDO_2_3}}
- **Target:** {{TARGET_CONTEUDO_2}}

**4. Indicacoes (Mes {{MES_IND_1}}-{{MES_IND_2}})**
- {{PROGRAMA_INDICACAO}}
- **Target:** {{PCT_INDICACAO}}% dos novos clientes vem de indicacao

---

### Fase 2: Consolidacao {{CIDADE_BASE}} + Expansao Regional (Mes {{MES_EXP_1}}-{{MES_EXP_2}})

**Meta:** {{META_F2_CLIENTES}} clientes em {{CIDADE_BASE}} + {{META_F2_VIZINHAS}} nas cidades vizinhas

**Cidades Prioritarias para Expansao:**
1. **{{CIDADE_EXP_1}}** ({{MOTIVO_EXP_1}})
2. **{{CIDADE_EXP_2}}** ({{MOTIVO_EXP_2}})

**Estrategia de Expansao:**
- {{ESTRATEGIA_EXP_1}}
- {{ESTRATEGIA_EXP_2}}
- {{ESTRATEGIA_EXP_3}}
- {{ESTRATEGIA_EXP_4}}
- {{ESTRATEGIA_EXP_5}}

---

## Modelo de Receita - {{CIDADE_BASE}}

### Preco de Entrada: R$ {{PRECO_ENTRADA}}/mes ({{STATUS_PRECO_REG}})

**Justificativa {{CIDADE_BASE}}:**
- {{JUSTIF_PRECO_1}}
- {{JUSTIF_PRECO_2}}
- {{JUSTIF_PRECO_3}}
- {{JUSTIF_PRECO_4}}

### Upsell e Servicos Adicionais:

| Servico | Valor | Quando Oferecer |
|---------|-------|-----------------|
| **{{SERVICO_REG_1}}** | R$ {{PRECO_SERV_REG_1}} | {{QUANDO_SERV_1}} |
| **{{SERVICO_REG_2}}** | R$ {{PRECO_SERV_REG_2}} | {{QUANDO_SERV_2}} |
| **{{SERVICO_REG_3}}** | R$ {{PRECO_SERV_REG_3}} | {{QUANDO_SERV_3}} |
| **{{SERVICO_REG_4}}** | R$ {{PRECO_SERV_REG_4}} | {{QUANDO_SERV_4}} |
| **{{SERVICO_REG_5}}** | R$ {{PRECO_SERV_REG_5}} | {{QUANDO_SERV_5}} |
| **{{SERVICO_REG_6}}** | R$ {{PRECO_SERV_REG_6}} | {{QUANDO_SERV_6}} |

### Projecao de Receita por Cliente ({{CIDADE_BASE}}):

**Cenario Conservador (R$ {{PRECO_ENTRADA}}):**
- Mensal: R$ {{PRECO_ENTRADA}}
- Setup: R$ {{SETUP_REG}} (uma vez)
- **Ticket medio ano 1:** R$ {{TICKET_ANO_1}} + R$ {{SETUP_REG}} = R$ {{TOTAL_ANO_1}}

**Cenario com Upsell (realista):**
- Mensal: R$ {{PRECO_ENTRADA}}
- Setup: R$ {{SETUP_REG}}
- {{SERVICO_UPSELL}} ({{MESES_UPSELL}} meses): R$ {{PRECO_UPSELL}} x {{MESES_UPSELL}} = R$ {{TOTAL_UPSELL}}
- {{SERVICO_EXTRA}} ({{HORAS_EXTRA}}h): R$ {{TOTAL_EXTRA}}
- **Ticket medio ano 1:** R$ {{TICKET_UPSELL}}

---

## Diferenciais para {{CIDADE_BASE}}

### 1. {{DIFERENCIAL_REG_1}}
- {{DESC_DIF_REG_1}}

### 2. {{DIFERENCIAL_REG_2}}
- {{DESC_DIF_REG_2}}

### 3. {{DIFERENCIAL_REG_3}}
- {{DESC_DIF_REG_3}}

### 4. {{DIFERENCIAL_REG_4}}
- {{DESC_DIF_REG_4}}

---

## Cronograma {{CIDADE_BASE}} (Proximos 6 Meses)

### Mes {{MES_CRONO_1}} ({{MES_NOME_1}}): {{TITULO_MES_1}}
- [ ] {{ACAO_MES_1_1}}
- [ ] {{ACAO_MES_1_2}}
- [ ] {{ACAO_MES_1_3}}
- [ ] {{ACAO_MES_1_4}}
- [ ] {{ACAO_MES_1_5}}
- **Meta:** {{META_MES_1}}

### Mes {{MES_CRONO_2}} ({{MES_NOME_2}}): {{TITULO_MES_2}}
- [ ] {{ACAO_MES_2_1}}
- [ ] {{ACAO_MES_2_2}}
- [ ] {{ACAO_MES_2_3}}
- [ ] {{ACAO_MES_2_4}}
- **Meta:** {{META_MES_2}}

### Mes {{MES_CRONO_3}} ({{MES_NOME_3}}): {{TITULO_MES_3}}
- [ ] {{ACAO_MES_3_1}}
- [ ] {{ACAO_MES_3_2}}
- [ ] {{ACAO_MES_3_3}}
- [ ] {{ACAO_MES_3_4}}
- **Meta:** {{META_MES_3}}

### Mes {{MES_CRONO_4}} ({{MES_NOME_4}}): {{TITULO_MES_4}}
- [ ] {{ACAO_MES_4_1}}
- [ ] {{ACAO_MES_4_2}}
- [ ] {{ACAO_MES_4_3}}
- **Meta:** {{META_MES_4}}

### Mes {{MES_CRONO_5}} ({{MES_NOME_5}}): {{TITULO_MES_5}}
- [ ] {{ACAO_MES_5_1}}
- [ ] {{ACAO_MES_5_2}}
- [ ] {{ACAO_MES_5_3}}
- **Meta:** {{META_MES_5}}

### Mes {{MES_CRONO_6}} ({{MES_NOME_6}}): {{TITULO_MES_6}}
- [ ] {{ACAO_MES_6_1}}
- [ ] {{ACAO_MES_6_2}}
- [ ] {{ACAO_MES_6_3}}
- **Meta:** {{META_MES_6}}

---

## Estrategia de Conteudo - {{CIDADE_BASE}}

### {{CANAL_CONTEUDO_REG_1}}: {{NOME_CANAL_REG_1}}

**Serie "{{NOME_SERIE}}":**
1. "{{VIDEO_1}}"
2. "{{VIDEO_2}}"
3. "{{VIDEO_3}}"
4. "{{VIDEO_4}}"
5. "{{VIDEO_5}}"

**Formato:**
- {{FORMATO_VIDEO}}
- {{FORMATO_2}}
- {{FORMATO_3}}
- {{FORMATO_4}}

### {{CANAL_CONTEUDO_REG_2}}: {{HANDLE_SOCIAL}}

**Conteudo Semanal (foco {{CIDADE_BASE}} + {{REGIAO_EXPANSAO}}):**
- {{DIA_SEMANA_1}}: {{CONTEUDO_SEM_1}}
- {{DIA_SEMANA_2}}: {{CONTEUDO_SEM_2}}
- {{DIA_SEMANA_3}}: {{CONTEUDO_SEM_3}}
- {{DIA_SEMANA_4}}: {{CONTEUDO_SEM_4}}

**Interacao:**
- {{ACAO_INTERACAO_1}}
- {{ACAO_INTERACAO_2}}
- {{ACAO_INTERACAO_3}}
- {{ACAO_INTERACAO_4}}

---

## Parceiros Estrategicos {{CIDADE_BASE}}

### Tier 1: {{TIPO_PARC_TIER1}} (Prioridade Maxima)
- [ ] {{PARC_TIER1_1}} (contato: _______)
- [ ] {{PARC_TIER1_2}} (contato: _______)
- [ ] {{PARC_TIER1_3}} (contato: _______)

**Proposta:**
> "{{PROPOSTA_TIER1}}"

### Tier 2: {{TIPO_PARC_TIER2}}
- [ ] {{PARC_TIER2_1}} - Contato: _______
- [ ] {{PARC_TIER2_2}} - Contato: _______
- [ ] {{PARC_TIER2_3}} - Contato: _______

**Proposta:**
> "{{PROPOSTA_TIER2}}"

### Tier 3: {{TIPO_PARC_TIER3}}
- [ ] {{PARC_TIER3_1}}
- [ ] {{PARC_TIER3_2}}
- [ ] {{PARC_TIER3_3}}

**Proposta:**
> "{{PROPOSTA_TIER3}}"

---

## Metricas de Sucesso - {{CIDADE_BASE}}

### KPIs Trimestrais:

| Metrica | Q{{Q1}} ({{MES_Q1_INI}}-{{MES_Q1_FIM}}) | Q{{Q2}} ({{MES_Q2_INI}}-{{MES_Q2_FIM}}) | Q{{Q3}} ({{MES_Q3_INI}}-{{MES_Q3_FIM}}) | Q{{Q4}} ({{MES_Q4_INI}}-{{MES_Q4_FIM}}) |
|---------|------------|------------|------------|------------|
| Clientes {{CIDADE_BASE}} | {{CLIENTES_Q1}} | {{CLIENTES_Q2}} | {{CLIENTES_Q3}} | {{CLIENTES_Q4}} |
| Clientes {{REGIAO_EXPANSAO}} | {{CLIENTES_REG_Q1}} | {{CLIENTES_REG_Q2}} | {{CLIENTES_REG_Q3}} | {{CLIENTES_REG_Q4}} |
| MRR Regional | R$ {{MRR_Q1}} | R$ {{MRR_Q2}} | R$ {{MRR_Q3}} | R$ {{MRR_Q4}} |
| Parcerias Ativas | {{PARC_Q1}} | {{PARC_Q2}} | {{PARC_Q3}} | {{PARC_Q4}} |
| Eventos Realizados | {{EVENTOS_Q1}} | {{EVENTOS_Q2}} | {{EVENTOS_Q3}} | {{EVENTOS_Q4}} |
| Seguidores {{CANAL_CONTEUDO_REG_2}} | {{SEGUIDORES_Q1}} | {{SEGUIDORES_Q2}} | {{SEGUIDORES_Q3}} | {{SEGUIDORES_Q4}} |

### Metricas de Qualidade:
- **NPS regional:** >{{NPS_REG}}
- **Churn anual:** <{{CHURN_REG}}%
- **Indicacoes:** {{PCT_IND_REG}}% dos novos clientes
- **Upsell:** {{PCT_UPSELL_REG}}% dos clientes compram servicos adicionais

---

## Riscos e Mitigacoes - {{CIDADE_BASE}}

| Risco | Probabilidade | Mitigacao |
|-------|---------------|-----------|
| {{RISCO_REG_1}} | {{PROB_REG_1}} | {{MIT_REG_1}} |
| {{RISCO_REG_2}} | {{PROB_REG_2}} | {{MIT_REG_2}} |
| {{RISCO_REG_3}} | {{PROB_REG_3}} | {{MIT_REG_3}} |
| {{RISCO_REG_4}} | {{PROB_REG_4}} | {{MIT_REG_4}} |

---

## Checklist dos Proximos 30 Dias

### Semana 1 (Esta semana):
- [ ] {{ACAO_SEM1_1}}
- [ ] {{ACAO_SEM1_2}}
- [ ] {{ACAO_SEM1_3}}

### Semana 2:
- [ ] {{ACAO_SEM2_1}}
- [ ] {{ACAO_SEM2_2}}
- [ ] {{ACAO_SEM2_3}}

### Semana 3:
- [ ] {{ACAO_SEM3_1}}
- [ ] {{ACAO_SEM3_2}}
- [ ] {{ACAO_SEM3_3}}

### Semana 4:
- [ ] {{ACAO_SEM4_1}}
- [ ] {{ACAO_SEM4_2}}
- [ ] {{ACAO_SEM4_3}}

---

## Insights Estrategicos

### Por que {{CIDADE_BASE}} e a base perfeita para {{NOME_PROJETO}}:

1. {{MOTIVO_CIDADE_1}}
2. {{MOTIVO_CIDADE_2}}
3. {{MOTIVO_CIDADE_3}}
4. {{MOTIVO_CIDADE_4}}
5. {{MOTIVO_CIDADE_5}}
6. {{MOTIVO_CIDADE_6}}
7. {{MOTIVO_CIDADE_7}}
8. {{MOTIVO_CIDADE_8}}

### Estrategia "Domina {{CIDADE_BASE}}, Depois Expande":

**Ano 1:** {{META_A1}} clientes em {{CIDADE_BASE}} (R$ {{MRR_A1}} MRR)
**Ano 2:** +{{META_A2}} clientes em {{CIDADE_EXP_1}}/{{CIDADE_EXP_2}} (R$ {{MRR_A2}} MRR)
**Ano 3:** +{{META_A3}} clientes no {{REGIAO_EXPANSAO}} (R$ {{MRR_A3}} MRR)
**Ano 4-5:** Consolidacao e grupos (R$ {{MRR_A4}}+ MRR)

**Meta de {{META_MRR_FINAL}} em 4-5 anos e totalmente viavel com essa estrategia!**

---

## Expansao Futura: Escritorios Locais

### Fase 1: {{FASE_EXP_1}} ({{PERIODO_EXP_1}})
- {{DETALHE_EXP_1_1}}
- {{DETALHE_EXP_1_2}}
- {{DETALHE_EXP_1_3}}

### Fase 2: Escritorio {{CIDADE_BASE}} ({{PERIODO_EXP_2}})
**Local:** {{CIDADE_BASE}} ({{BAIRRO_COMERCIAL}})
**Objetivo:**
- {{OBJ_ESCRITORIO_1}}
- {{OBJ_ESCRITORIO_2}}
- {{OBJ_ESCRITORIO_3}}
- {{OBJ_ESCRITORIO_4}}

**Investimento estimado:**
- Aluguel: R$ {{ALUGUEL}}/mes
- Mobilia: R$ {{MOBILIA}} (investimento unico)
- {{OUTRO_CUSTO}}

### Fase 3: Expansao Regional ({{PERIODO_EXP_3}})
**Possiveis novos escritorios:**
- **{{CIDADE_NOVO_1}}** ({{MOTIVO_NOVO_1}})
- **{{CIDADE_NOVO_2}}** ({{MOTIVO_NOVO_2}})

**Modelo:**
- {{MODELO_EXP_1}}
- {{MODELO_EXP_2}}
- {{MODELO_EXP_3}}
- {{MODELO_EXP_4}}

---

## Proximos Passos Imediatos

1. **Aprovar** esta estrategia
2. **Criar** {{ACAO_IMEDIATA_1}} (hoje)
3. **Agendar** {{ACAO_IMEDIATA_2}} (esta semana)
4. **Criar** {{ACAO_IMEDIATA_3}} (foco {{CIDADE_BASE}}/{{REGIAO_EXPANSAO}})
5. **Iniciar** {{ACAO_IMEDIATA_4}}
6. **Planejar** {{ACAO_IMEDIATA_5}}

---

*Documento vivo - revisar trimestralmente*
*Proxima revisao: {{DATA_REVISAO_REG}}*
```

---

## MODULO 5: OPERACAO [OBRIGATORIO]

### 5.1 ONBOARDING_AUTOMATION.md

**O que e:** Blueprint completo de onboarding automatizado com jornada do cliente, videos, emails e automacoes
**Quando usar:** Apos ter primeiros clientes, antes de escalar
**Prioridade:** ALTA

#### Estrutura Obrigatoria:

```markdown
# Automacao de Onboarding - {{NOME_PROJETO}}

**Objetivo:** {{OBJETIVO_ONBOARDING}}
**Criado:** {{DATA}}

---

## Filosofia do Onboarding

**Problema Atual:**
- {{RESTRICAO_1}}
- {{RESTRICAO_2}}
- {{RESTRICAO_3}}

**Solucao:**
> **{{SOLUCAO_ONBOARDING}}**

**Principios:**
- {{PRINCIPIO_ONB_1}}
- {{PRINCIPIO_ONB_2}}
- {{PRINCIPIO_ONB_3}}
- {{PRINCIPIO_ONB_4}}

---

## Jornada do Cliente (Day {{DAY_INICIO}} -> Day {{DAY_FIM}})

### Day {{DAY_INICIO}}: Compra + Boas-Vindas

#### Evento: {{EVENTO_GATILHO}}

**Acoes Automaticas:**

1. **Email confirmacao de pagamento** ({{TEMPO_EMAIL}})
   - "{{ASSUNTO_EMAIL_D0}}"
   - {{CONTEUDO_EMAIL_D0_1}}
   - {{CONTEUDO_EMAIL_D0_2}}
   - {{CONTEUDO_EMAIL_D0_3}}

2. **{{CANAL_COMUNICACAO}} da {{NOME_ASSISTENTE}}** ({{TEMPO_MSG}} depois)
   ```
   {{SCRIPT_BOAS_VINDAS}}
   ```

3. **Sistema cria:**
   - {{ITEM_SISTEMA_1}}
   - {{ITEM_SISTEMA_2}}
   - {{ITEM_SISTEMA_3}}

---

### Day {{DAY_1}}: Primeiro Acesso + Tour

#### Cliente faz login pela primeira vez

**Modal de Boas-Vindas (no sistema):**
```
{{TEXTO_MODAL}}
```

**Tour Interativo (tooltips com setas):**
- Passo 1: "{{TOUR_PASSO_1}}"
- Passo 2: "{{TOUR_PASSO_2}}"
- Passo 3: "{{TOUR_PASSO_3}}"

**{{NOME_ASSISTENTE}} {{CANAL_COMUNICACAO}} ({{TEMPO_REMINDER}} depois, se nao completou tour):**
```
{{SCRIPT_REMINDER_TOUR}}
```

---

### Day {{DAY_2}}-{{DAY_3}}: Configuracao Essencial

**Checklist de Ativacao (no sistema):**

```
{{TITULO_CHECKLIST}}

[ ] 1. {{ITEM_CHECK_1}} {{TEMPO_CHECK_1}}
[ ] 2. {{ITEM_CHECK_2}} {{TEMPO_CHECK_2}}
[ ] 3. {{ITEM_CHECK_3}} {{TEMPO_CHECK_3}}
[ ] 4. {{ITEM_CHECK_4}} {{TEMPO_CHECK_4}}
[ ] 5. {{ITEM_CHECK_5}} {{TEMPO_CHECK_5}}

Total estimado: {{TEMPO_TOTAL_CHECK}}
```

**Cada item tem:**
- [ ] {{RECURSO_VIDEO}} ({{DURACAO_VIDEO}})
- [ ] Botao "{{TEXTO_BOTAO_CONCLUIDO}}"
- [ ] {{RECOMPENSA_CONCLUSAO}}

**{{NOME_ASSISTENTE}} {{CANAL_COMUNICACAO}} (envio proativo):**

**Day {{DAY_2}}, {{HORARIO_MSG_1}}:**
```
{{SCRIPT_D2}}
```

**Day {{DAY_3}}, {{HORARIO_MSG_2}}:**
```
{{SCRIPT_D3}}
```

---

### Day {{DAY_4}}-{{DAY_5}}: {{MILESTONE_INTERMEDIARIO}}

**Objetivo:** {{OBJETIVO_D4_5}}

**{{NOME_ASSISTENTE}} {{CANAL_COMUNICACAO}}:**
```
{{SCRIPT_D4_5}}
```

**Email Marketing (automatico Day {{DAY_EMAIL_1}}):**
```
Assunto: {{ASSUNTO_EMAIL_D5}}

{{CORPO_EMAIL_D5}}
```

---

### Day {{DAY_6}}-{{DAY_FIM}}: Otimizacao + Primeiros Resultados

**{{NOME_ASSISTENTE}} {{CANAL_COMUNICACAO}}:**
```
{{SCRIPT_OTIMIZACAO}}
```

**Se cliente NAO teve resultados ate Day {{DAY_FIM}}:**
```
{{SCRIPT_SEM_RESULTADO}}
```

**Se cliente TEVE resultados:**
```
{{SCRIPT_COM_RESULTADO}}
```

---

## Biblioteca de Videos (Gravar)

### Videos Essenciais ({{NUM_VIDEOS}} videos - Gravar nos proximos {{DIAS_GRAVACAO}} dias)

| # | Titulo | Duracao | Quando Enviar | Status |
|---|--------|---------|---------------|--------|
| 1 | "{{VIDEO_TITULO_1}}" | {{DUR_V1}} | {{QUANDO_V1}} | {{STATUS_V1}} |
| 2 | "{{VIDEO_TITULO_2}}" | {{DUR_V2}} | {{QUANDO_V2}} | {{STATUS_V2}} |
| 3 | "{{VIDEO_TITULO_3}}" | {{DUR_V3}} | {{QUANDO_V3}} | {{STATUS_V3}} |
| 4 | "{{VIDEO_TITULO_4}}" | {{DUR_V4}} | {{QUANDO_V4}} | {{STATUS_V4}} |
| 5 | "{{VIDEO_TITULO_5}}" | {{DUR_V5}} | {{QUANDO_V5}} | {{STATUS_V5}} |

**Total:** ~{{TEMPO_TOTAL_VIDEOS}} min de conteudo

**Formato:**
- {{FORMATO_VIDEO_1}}
- {{FORMATO_VIDEO_2}}
- {{FORMATO_VIDEO_3}}

---

## {{NOME_ASSISTENTE}}: Scripts de Automacao

### {{FERRAMENTA_AUTOMACAO}} Workflow: Onboarding Day {{DAY_INICIO}}-{{DAY_MID}}

#### Trigger 1: {{GATILHO_1}}
```
{{LOGICA_GATILHO_1}}
```

#### Trigger 2: {{GATILHO_2}}
```
{{LOGICA_GATILHO_2}}
```

#### Trigger 3: {{GATILHO_3}}
```
{{LOGICA_GATILHO_3}}
```

#### Trigger 4: {{GATILHO_4}}
```
{{LOGICA_GATILHO_4}}
```

#### Trigger 5: {{GATILHO_5}}
```
{{LOGICA_GATILHO_5}}
```

---

## Sequencia de Emails (Drip Campaign)

### Email 1: Day {{DAY_INICIO}} - Boas-Vindas
```
Assunto: {{ASSUNTO_EMAIL_1}}

{{CORPO_EMAIL_1}}
```

---

### Email 2: Day {{DAY_EMAIL_2}} - Progresso & Motivacao
```
Assunto: {{ASSUNTO_EMAIL_2}}

{{CORPO_EMAIL_2}}
```

---

### Email 3: Day {{DAY_EMAIL_3}} - {{MILESTONE_EMAIL_3}}
```
Assunto: {{ASSUNTO_EMAIL_3}}

{{CORPO_EMAIL_3}}
```

---

### Email 4: Day {{DAY_EMAIL_4}} - Feedback & Proximos Passos
```
Assunto: {{ASSUNTO_EMAIL_4}}

{{CORPO_EMAIL_4}}
```

---

## Gamificacao (Opcional - Fase 2)

### Sistema de {{SISTEMA_GAMIFICACAO}}
- {{BADGE_1}}
- {{BADGE_2}}
- {{BADGE_3}}
- {{BADGE_4}}
- {{BADGE_5}}

**Exibicao:** {{ONDE_EXIBIR_BADGES}}

---

## Metricas de Sucesso do Onboarding

### KPIs Principais

| Metrica | Meta | Como Medir |
|---------|------|------------|
| **Ativacao Day {{DAY_FIM}}** | {{PCT_ATIVACAO}}% | {{COMO_MEDIR_ATIVACAO}} |
| **Time to First {{RESULTADO_ALVO}}** | <{{DIAS_TTFV}} dias | {{COMO_MEDIR_TTFV}} |
| **Engagement {{NOME_ASSISTENTE}}** | {{PCT_ENGAGEMENT}}% | {{COMO_MEDIR_ENG}} |
| **NPS Onboarding** | >{{NPS_ONBOARDING}} | {{COMO_MEDIR_NPS_ONB}} |

### Dashboard Interno (Acompanhar):
```
Clientes Day {{DAY_INICIO}}-{{DAY_MID}}: [Lista]
- [Cliente 1] | Progresso: {{PCT_EX_1}}% | Ultima atividade: {{TEMPO_EX_1}}
- [Cliente 2] | Progresso: {{PCT_EX_2}}% | Ultima atividade: {{TEMPO_EX_2}} {{ALERTA_EX_2}}
- [Cliente 3] | Progresso: {{PCT_EX_3}}% | Primeiro {{RESULTADO_ALVO}}: {{STATUS_EX_3}}
```

**Alertas:**
- {{ALERTA_VERMELHO}}
- {{ALERTA_AMARELO}}
- {{ALERTA_VERDE}}

---

## Casos de Resgate (Cliente Travado)

### Cenario 1: Nao fez login (Day {{DAY_RESGATE_1}})
**{{NOME_ASSISTENTE}} {{CANAL_COMUNICACAO}}:**
```
{{SCRIPT_RESGATE_1}}
```

**Se nao responder em {{TEMPO_ESPERA_1}}:**
**Voce {{ACAO_MANUAL_1}}** ({{TEMPO_ACAO_1}})

---

### Cenario 2: Fez login mas travou no setup
**{{NOME_ASSISTENTE}} {{CANAL_COMUNICACAO}}:**
```
{{SCRIPT_RESGATE_2}}
```

**Voce {{ACAO_MANUAL_2}}** ({{TEMPO_ACAO_2}})

---

### Cenario 3: Completou setup mas nao divulgou
**{{NOME_ASSISTENTE}} {{CANAL_COMUNICACAO}}:**
```
{{SCRIPT_RESGATE_3}}
```

---

## Checklist de Implementacao (Proximos {{DIAS_IMPLEMENTACAO}} Dias)

### Fase 1: MVP Onboarding (Proximos {{DIAS_FASE_1}} dias)
- [ ] {{ACAO_IMPL_1_1}}
- [ ] {{ACAO_IMPL_1_2}}
- [ ] {{ACAO_IMPL_1_3}}
- [ ] {{ACAO_IMPL_1_4}}
- [ ] {{ACAO_IMPL_1_5}}

### Fase 2: Sequencia Completa (Dia {{DIA_IMPL_2_INI}}-{{DIA_IMPL_2_FIM}})
- [ ] {{ACAO_IMPL_2_1}}
- [ ] {{ACAO_IMPL_2_2}}
- [ ] {{ACAO_IMPL_2_3}}
- [ ] {{ACAO_IMPL_2_4}}
- [ ] {{ACAO_IMPL_2_5}}

### Fase 3: Otimizacao (Dia {{DIA_IMPL_3_INI}}-{{DIA_IMPL_3_FIM}})
- [ ] {{ACAO_IMPL_3_1}}
- [ ] {{ACAO_IMPL_3_2}}
- [ ] {{ACAO_IMPL_3_3}}
- [ ] {{ACAO_IMPL_3_4}}
- [ ] {{ACAO_IMPL_3_5}}

---

## Modelo de Mensagem {{NOME_ASSISTENTE}} (Templates {{FERRAMENTA_AUTOMACAO}})

### Template: Boas-Vindas
```json
{
  "to": "{{PLACEHOLDER_WHATSAPP}}",
  "message": "{{SCRIPT_TEMPLATE_1}}"
}
```

### Template: {{EVENTO_TEMPLATE_2}}
```json
{
  "to": "{{PLACEHOLDER_WHATSAPP}}",
  "message": "{{SCRIPT_TEMPLATE_2}}"
}
```

### Template: {{EVENTO_TEMPLATE_3}}
```json
{
  "to": "{{PLACEHOLDER_WHATSAPP}}",
  "message": "{{SCRIPT_TEMPLATE_3}}"
}
```

---

**Este documento e o blueprint do onboarding {{NOME_PROJETO}}.**
Implementar progressivamente conforme base de clientes cresce.

**Ultima Atualizacao:** {{DATA_ATUAL_ONB}}
**Proxima Revisao:** {{DATA_REVISAO_ONB}}
```

---

## CHECKLIST DE IMPLEMENTACAO DA MATRIZ

### Ordem de Execucao (Prioridade):

```
SEMANA 1-2: MODULO 1 - Modelo de Negocio
  [ ] 1.1 Lean Canvas
  [ ] 1.2 Value Proposition Canvas

SEMANA 3-4: MODULO 2 - Analise de Mercado
  [ ] 2.1 SWOT Analysis
  [ ] 2.2 Analise de Concorrencia

SEMANA 5-6: MODULO 3 - Posicionamento
  [ ] 3.1 Posicionamento de Marca
  [ ] 3.2 Pricing Strategy

SEMANA 7-8: MODULO 4 - Crescimento
  [ ] 4.1 Estrategia de Crescimento
  [ ] 4.2 Go-to-Market (se aplicavel)

SEMANA 9-10: MODULO 5 - Operacao
  [ ] 5.1 Onboarding e Automacao
```

### Documentos Obrigatorios vs Opcionais:

| Documento | Prioridade | Quando Gerar |
|-----------|------------|--------------|
| LEAN_CANVAS.md | CRITICA | Semana 1 |
| VALUE_PROPOSITION_CANVAS.md | CRITICA | Semana 1-2 |
| SWOT_ANALYSIS.md | ALTA | Semana 3 |
| ANALISE_CONCORRENCIA.md | ALTA | Semana 3-4 |
| POSICIONAMENTO_MARCA.md | ALTA | Semana 5 |
| PRICING_STRATEGY.md | ALTA | Semana 5-6 |
| ESTRATEGIA_CRESCIMENTO.md | ALTA | Semana 7 |
| GO_TO_MARKET.md | MEDIA | Semana 7-8 |
| ONBOARDING_AUTOMATION.md | ALTA | Semana 9 |

---

## INSTRUCOES PARA AGENTES DE IA

### Como usar esta matriz:

1. **Substituir todos os placeholders** `{{PLACEHOLDER}}` pelos dados reais
2. **Gerar cada documento** como arquivo .md separado na pasta `docs/estrategia/`
3. **Seguir a ordem** — nao pular modulos
4. **Adaptar** secoes conforme tipo de negocio (SaaS, e-commerce, servico, etc.)
5. **Manter atualizado** — revisar trimestralmente

### Placeholders comuns:
- `{{NOME_PROJETO}}` — Nome do projeto/negocio
- `{{DATA}}` — Data de criacao
- `{{STATUS}}` — Status atual (ex: Em validacao, MVP, Escala)
- `{{SEGMENTO_CLIENTE}}` — Perfil do cliente ideal
- `{{PRECO_MENSAL}}` — Preco base mensal
- `{{SETUP_PADRAO}}` — Valor do setup
- `{{MESES_PROJECAO}}` — Horizonte de projecao
- `{{REGIAO_ALVO}}` — Regiao/cidade foco
- `{{NOME_ASSISTENTE}}` — Nome do assistente/IA (se houver)
- `{{FERRAMENTA_AUTOMACAO}}` — Ferramenta de automacao (n8n, Zapier, etc.)

### Dicas:
- Use dados reais do cliente sempre que possivel
- Cite entrevistas e feedbacks concretos
- Inclua numeros e metricas mensuraveis
- Mantenha linguagem simples (evite jargoes)
- Documente decisoes e mudancas

---

**MATRIZ ESTRATEGICA v1.0**
**Criado em:** {{DATA_CRIACAO_MATRIZ}}
**Ultima atualizacao:** {{DATA_ATUAL_MATRIZ}}
**Proxima revisao:** {{DATA_REVISAO_MATRIZ}}
