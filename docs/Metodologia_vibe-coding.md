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
1. Ler PRD gerado
2. Criar SPEC em `tracking/specs/SPEC-YYYY-MM-DD-feature.md`
3. **FECHAR CHAT e iniciar novo**

### Passo 3: Implementação

**Objetivo:** Executar com contexto 100% livre.

**Processo:**
1. Ler SPEC.md
2. Delegar para agente especializado:
   - @vibe-implementer (código geral)
   - @frontend-specialist (UI/UX)
   - @backend-specialist (APIs)
   - @database-architect (schema)

### Quando Usar SDD

**Use quando:**
- Nova funcionalidade significativa
- Código complexo existente
- Integrações novas
- Refatorações importantes

**Não use quando:**
- Alterações simples (1-2 linhas)
- Correções de bugs isolados
- Ajustes de texto/label

---

## MCPs Ativos

| MCP | Descrição | Quando Usar |
|-----|-----------|-------------|
| **Supabase** | Gerenciamento de projetos Supabase, DB, Edge Functions | Deploy, migrations, SQL, schemas |
| **GitHub** | Repositórios, PRs, Issues, branches | Versionamento, reviews, automação |
| **Notion** | Busca e gestão de páginas/databases | Documentação, knowledge base |
| **n8n** | Automação de workflows | Criar workflows, templates |
| **Chrome DevTools** | Debug e performance web | Debugging, Lighthouse, screenshots |
| **TestSprite** | Testes E2E automatizados | Planos de teste, execução |
| **Exa Search** | Busca web e código | Pesquisar informações, exemplos |
| **Context7** | Documentação de bibliotecas | APIs, frameworks, docs técnicas |
| **Playwright** | Automação de navegador | Testes E2E, validação de UI |

---

## Agentes Disponíveis

### Vibe Coding (Fluxo SDD)

| Agente | Descrição | Quando Usar |
|--------|-----------|-------------|
| **@vibe-researcher** | Pesquisa profunda no código | Antes de planejar, entender codebase |
| **@vibe-planner** | Planejamento técnico detalhado | Criar specs táticas |
| **@vibe-implementer** | Execução do código | Implementar baseado em specs |

### Especialistas Técnicos

| Agente | Descrição | Quando Usar |
|--------|-----------|-------------|
| **@frontend-specialist** | React, UI/UX, Tailwind | Interfaces complexas, componentes |
| **@backend-specialist** | APIs, Node.js, Edge Functions | Backend, integrações, segurança |
| **@database-architect** | PostgreSQL, Supabase, schemas | Design de banco, migrations |
| **@explorer-agent** | Discovery de código | Mapear projetos, auditar codebase |
| **@code-archaeologist** | Código legado | Entender código existente, refactoring |
| **@mobile-developer** | React Native, Flutter | Apps mobile |
| **@game-developer** | Game logic, mecânicas | Desenvolvimento de jogos |

### Qualidade e Testes

| Agente | Descrição | Quando Usar |
|--------|-----------|-------------|
| **@test-engineer** | Testes automatizados | Estratégias de teste, unit/integration/E2E |
| **@qa-automation-engineer** | QA e pipelines | Testes automatizados, CI/CD |
| **@debugger** | Debugging sistemático | Resolver bugs difíceis, root cause |
| **@performance-optimizer** | Performance | Otimizar velocidade, Core Web Vitals |
| **@security-auditor** | Segurança | Revisar segurança, OWASP, auth |
| **@penetration-tester** | Testes ofensivos | Pentest, vulnerabilidades |

### DevOps e Infra

| Agente | Descrição | Quando Usar |
|--------|-----------|-------------|
| **@devops-engineer** | CI/CD, Docker, deploy | Pipelines, containers, Vercel |
| **@documentation-writer** | Documentação técnica | READMEs, docs, guias |
| **@seo-specialist** | SEO e marketing | Otimização de busca, meta tags |

### Produto e Estratégia

| Agente | Descrição | Quando Usar |
|--------|-----------|-------------|
| **@product-manager** | Product management | Features, roadmap, priorização |
| **@product-owner** | Gestão de backlog | Backlog, sprints, MVP |
| **@business-strategist** | Estratégia de negócios | Business Model Canvas, análise |
| **@orchestrator** | Coordenação multi-agente | Tarefas complexas multi-domínio |

### Principal

| Agente | Descrição | Quando Usar |
|--------|-----------|-------------|
| **@neo** | Arquiteto UNIQ | Planejar sprints, prioridades, contexto |

---

## Skills Especiais

| Skill | Descrição | Quando Usar |
|-------|-----------|-------------|
| **yt-search** | Busca de vídeos YouTube | Pesquisar tutoriais, exemplos |
| **notebooklm** | Automação Google NotebookLM | Pesquisa, podcasts, análise de documentos |

---

## Quick Reference

### Nova Funcionalidade (Fluxo SDD):
1. Chat 1: @vibe-researcher → PRD
2. Chat 2: @vibe-planner → SPEC  
3. Chat 3: Agente especializado → Implementação

### Tarefas Simples:
- **UI/UX:** @frontend-specialist
- **API/Backend:** @backend-specialist
- **Database:** @database-architect
- **Testes:** @test-engineer
- **Debug:** @debugger
- **Deploy:** @devops-engineer

---

**Versão:** 2.0 (Enxuta)  
**Última atualização:** 11/03/2026
