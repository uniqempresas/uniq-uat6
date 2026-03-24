# Metodologia de Desenvolvimento UNIQ

## Vibe Coding (SDD)

**Spec Driven Development** - Metodologia em 3 fases sequenciais com limpeza de contexto entre cada fase.

> **Princípio Fundamental:** *"A qualidade do input determina a qualidade do output"*

### Fluxo Completo (Múltiplos Chats)

```
CHAT 1 - PESQUISA:
Usuário: "Quero implementar X"
    ↓
@vibe-researcher: Analisa codebase
    ↓
Gera PRD.md em tracking/plans/
    ↓
✅ FECHAR CHAT 1

CHAT 2 - ESPECIFICAÇÃO:
Usuário: "Continue com PRD: tracking/plans/PRD-..."
    ↓
@vibe-planner: Cria plano técnico
    ↓
Gera SPEC.md em tracking/specs/
    ↓
✅ FECHAR CHAT 2

CHAT 3 - IMPLEMENTAÇÃO:
Usuário: "Implemente seguindo SPEC: tracking/specs/SPEC-..."
    ↓
@vibe-implementer: Escreve código
    ↓
✅ Código entregue!
```

### Passo 1: Pesquisa → PRD.md

**Objetivo:** Entender o que existe antes de construir.

**Processo:**
1. Delegar para @vibe-researcher analisar codebase
2. Gerar PRD em `tracking/plans/PRD-YYYY-MM-DD-feature.md`
3. **FECHAR CHAT e iniciar novo**

### Passo 2: Especificação → SPEC.md

**Objetivo:** Criar plano tático detalhado.

**Processo:**
1. Usar PRD como contexto
2. @vibe-planner cria SPEC.md
3. Gerar em `tracking/specs/SPEC-YYYY-MM-DD-feature.md`
4. **FECHAR CHAT e iniciar novo**

### Passo 3: Implementação → Código

**Objetivo:** Executar o plano com precisão.

**Processo:**
1. Usar SPEC.md como contexto único
2. @vibe-implementer escreve código
3. **NÃO criar arquivos extras** (spec é suficiente)
4. Código entregue!

---

## Princípios Fundamentais

### 1. Separação de Contextos
- Cada fase = novo chat
- Evita "confusão" de contexto
- Limpa cache de contexto do modelo

### 2. Documentação como Contrato
- PRD = "O que fazer"
- SPEC = "Como fazer"
- Código = "Feito!"

### 3. Revisão Visual Antes de Código
- Frontend First
- Validar UI/UX antes de backend
- Mocks > Schema

### 4. Iterate Rápido
- Mínimo viável para testar
- Feedback antes de otimizar
- "Done is better than perfect"

---

## Estrutura de Arquivos

```
tracking/
├── plans/           # PRDs
│   └── PRD-2026-01-15-login.md
├── specs/           # SPECs técnicas
│   └── SPEC-2026-01-15-login.md
└── tracking.md      # Progresso geral
```

---

**Este documento define a metodologia de desenvolvimento do projeto UNIQ Empresas.**
