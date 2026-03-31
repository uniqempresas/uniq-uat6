# Matriz de Documentação de UI para Figma Make

> **Guia Definitivo para Documentar Telas de UI**  
> **Versão:** 1.0  
> **Última Atualização:** Março 2025  
> **Status:** Padrão Oficial UNIQ

---

## 1. FILOSOFIA DO DOCUMENTO

### 1.1 Propósito Central

Este documento estabelece o **padrão oficial** para documentação de telas de UI que serão enviadas ao **Figma Make** para geração automática de designs.

**O princípio fundamental é:**

> 🔑 **Separamos o "O QUE" (funcional) do "COMO" (visual)**

| Nós (Product Managers) | Figma Make (Designer AI) |
|------------------------|--------------------------|
| Definimos o problema | Resolve o problema visualmente |
| Especificamos funcionalidades | Escolhe o melhor layout |
| Listamos dados necessários | Decide como apresentar os dados |
| Determinamos regras de negócio | Cria a experiência visual |
| Aprovamos o resultado | Entrega criatividade e inovação |

### 1.2 O Que Somos Nós

Somos **Product Managers**, não designers visuais. Nosso papel é:

- ✅ Entender as necessidades do usuário
- ✅ Definir o que precisa ser feito
- ✅ Especificar requisitos funcionais
- ✅ Validar se a solução resolve o problema
- ✅ Aprovar o resultado final

### 1.3 O Que é o Figma Make

O Figma Make é o **designer criativo** da equipe. Seu papel é:

- ✅ Interpretar nossas necessidades funcionais
- ✅ Criar layouts inovadores e modernos
- ✅ Aplicar princípios de design e usabilidade
- ✅ Escolher cores, tipografia e espaçamentos
- ✅ Entregar telas profissionais e criativas

### 1.4 Resultado Esperado

Ao seguir esta matriz, esperamos:

- 🎨 **Telas criativas e únicas** - Não cópias de wireframes
- 🚀 **Designs modernos** - Aproveitando as capacidades do Figma Make
- 📱 **Interfaces funcionais** - Que realmente resolvem problemas
- ⚡ **Processo ágil** - Sem idas e vindas de revisão de pixels
- 💡 **Inovação visual** - O Figma sugere soluções que não pensaríamos

---

## 2. ESTRUTURA PADRONIZADA DE DOCUMENTO

Cada tela/documento de UI deve seguir exatamente esta estrutura:

---

### 📋 TEMPLATE DE DOCUMENTAÇÃO DE TELA

```markdown
# [NOME DA TELA]

## 1. Metadados

| Campo | Valor |
|-------|-------|
| **Nome da Tela** | [Nome claro e objetivo] |
| **Rota/URL** | `/caminho/da/rota` |
| **Objetivo Principal** | [Uma frase descrevendo o propósito] |
| **Permissões de Acesso** | [Quem pode ver/editar] |
| **Módulo/Pai** | [A qual módulo pertence] |
| **Prioridade MVP** | ✅ Essencial / ⚠️ Importante / ❌ Futuro |

## 2. Contexto do Usuário

### 2.1 Quem Usa Esta Tela
- **Perfil:** [Descrição do usuário]
- **Conhecimento técnico:** [Baixo/Médio/Alto]
- **Contexto de uso:** [Onde/quando usa esta tela]

### 2.2 Por Que Esta Tela Existe
- **Problema que resolve:** [Descrição do problema]
- **Valor entregue:** [O que o usuário ganha]
- **Frequência de uso:** [Diária/Semanal/Ocasional]

### 2.3 User Stories Relacionadas
- "Como [perfil], quero [ação] para que [benefício]"
- "Como [perfil], quero [ação] para que [benefício]"

## 3. Elementos Obrigatórios (O Que DEVE Ter)

### 3.1 Dados a Exibir
- [ ] Dado 1: [descrição do dado e formato esperado]
- [ ] Dado 2: [descrição do dado e formato esperado]
- [ ] Dado 3: [descrição do dado e formato esperado]

### 3.2 Funcionalidades Essenciais
- [ ] Ação 1: [descrição do que o usuário pode fazer]
- [ ] Ação 2: [descrição do que o usuário pode fazer]
- [ ] Ação 3: [descrição do que o usuário pode fazer]

### 3.3 Campos de Formulário (se aplicável)
| Campo | Tipo | Obrigatório | Validações |
|-------|------|-------------|------------|
| Nome do Campo | Text/Select/etc | Sim/Não | Regras de validação |

## 4. Elementos Opcionais (O Que PODE Ter)

### 4.1 Funcionalidades Adicionais
- [ ] Feature 1: [descrição]
- [ ] Feature 2: [descrição]

### 4.2 Dados Secundários
- [ ] Dado adicional 1
- [ ] Dado adicional 2

## 5. Ações Possíveis

### 5.1 Ações Primárias
1. **[Nome da Ação]**: [Descrição do que faz]
   - **Gatilho:** [Como o usuário ativa]
   - **Resultado:** [O que acontece]
   - **Confirmação:** [Sim/Não - Se sim, qual mensagem]

### 5.2 Ações Secundárias
1. **[Nome da Ação]**: [Descrição]
2. **[Nome da Ação]**: [Descrição]

### 5.3 Ações de Destruição (se houver)
1. **[Excluir/Desativar]**: [Descrição do processo de confirmação]

## 6. Estados da UI

### 6.1 Empty State (Quando não há dados)
- **Quando aparece:** [Condição]
- **Mensagem:** [Texto amigável]
- **Call-to-Action:** [O que convidamos o usuário a fazer]

### 6.2 Loading State
- **Quando aparece:** [Condição]
- **Tipo:** [Skeleton/Spinner/Progresso]
- **Mensagem:** [Se houver]

### 6.3 Error State
- **Quando aparece:** [Condição]
- **Mensagem:** [Texto amigável]
- **Ação de recuperação:** [Como o usuário resolve]

### 6.4 Success State
- **Quando aparece:** [Condição]
- **Feedback:** [Toast/Mensagem/Animação]

## 7. Integrações

### 7.1 Com Outras Telas
- Navega para: [Lista de telas relacionadas]
- Recebe de: [De onde o usuário chega]

### 7.2 Com Outros Módulos
- [Módulo 1]: [Descrição da integração]
- [Módulo 2]: [Descrição da integração]

### 7.3 APIs/Serviços
- [Serviço 1]: [Para que serve]
- [Serviço 2]: [Para que serve]

## 8. Regras de Negócio

1. **Regra 1:** [Descrição da regra]
2. **Regra 2:** [Descrição da regra]
3. **Regra 3:** [Descrição da regra]

## 9. Notas e Considerações

- [Nota especial 1]
- [Nota especial 2]
- [Restrições conhecidas]
```

---

## 3. O QUE INCLUIR ✅ (Permitido)

Abaixo está a lista explícita de tudo o que **PODE e DEVE** estar no documento:

### 3.1 User Stories
✅ **Inclua sempre:**
- Histórias no formato: "Como [perfil], quero [ação] para que [benefício]"
- Contexto do usuário e motivação
- Critérios de aceitação funcionais

**Exemplo:**
```
Como vendedor, quero ver meu pipeline de vendas 
para que eu saiba quais negociações preciso 
de atenção hoje.
```

### 3.2 Objetivos da Tela
✅ **Inclua sempre:**
- Propósito claro em 1-2 frases
- Problema que resolve
- Valor entregue ao usuário

### 3.3 Campos de Formulário
✅ **Especifique:**
- Nome do campo (label)
- Tipo de dado (texto, número, data, select, etc.)
- Se é obrigatório ou opcional
- Validações necessárias
- Máscaras de entrada (CPF, telefone, etc.)

❌ **NÃO especifique:**
- Largura do campo em pixels
- Cores de borda quando em foco
- Ícones específicos dentro do input

### 3.4 Ações e Funcionalidades
✅ **Especifique:**
- O que o usuário pode fazer
- Onde a ação está disponível
- Resultado esperado
- Se precisa de confirmação

**Exemplo permitido:**
```
Ação: "Cadastrar novo cliente"
Disponível em: Botão primário no header
Resultado: Abre modal com formulário de cadastro
Confirmação: Não necessária
```

### 3.5 Dados e Métricas a Mostrar
✅ **Liste:**
- Quais dados precisam ser exibidos
- Formato dos dados (moeda, data, porcentagem)
- Prioridade dos dados (mais importantes primeiro)
- Relacionamentos entre dados

**Exemplo permitido:**
```
Dados obrigatórios do cliente:
1. Nome/Razão Social (texto)
2. Telefone principal (formatado)
3. Valor total em compras (moeda R$)
4. Status (ativo/inativo - badge)
```

### 3.6 Regras de Negócio
✅ **Documente:**
- Validações de dados
- Permissões de acesso
- Workflows e processos
- Regras de exibição condicional

**Exemplo:**
```
Regras de negócio:
1. CPF/CNPJ deve ser único no sistema
2. Usuário só pode editar clientes próprios 
   (exceto gestores)
3. Cliente com negociações não pode ser excluído,
   apenas inativado
```

### 3.7 Permissões de Acesso
✅ **Defina:**
- Quem pode visualizar
- Quem pode editar
- Quem pode excluir
- Quem pode executar ações específicas

**Exemplo:**
```
Permissões:
- Visualização: Todos os usuários
- Edição: Vendedor (próprios), Gestor (todos)
- Exclusão: Gestor e Admin apenas
- Importação: Gestor e Admin apenas
```

### 3.8 Estados de UI
✅ **Descreva:**
- **Empty state:** Quando não há dados
- **Loading state:** Como indicar carregamento
- **Error state:** Erros e como recuperar
- **Success state:** Feedbacks de sucesso

**Exemplo:**
```
Empty State - Lista de Clientes Vazia:
- Título: "Nenhum cliente cadastrado"
- Descrição: "Comece adicionando seu primeiro cliente"
- CTA: "Cadastrar primeiro cliente"
- Dica: "Ou importe via CSV"
```

### 3.9 Integrações com Outros Módulos
✅ **Liste:**
- Com quais módulos esta tela se integra
- Que dados são compartilhados
- Fluxos entre telas

**Exemplo:**
```
Integrações:
- Módulo Financeiro: Mostra histórico de vendas
- Módulo Agenda: Exibe compromissos do cliente
- Módulo WhatsApp: Permite enviar mensagem
```

---

## 4. O QUE NÃO INCLUIR ❌ (Proibido)

**ATENÇÃO:** Os itens abaixo **NUNCA** devem aparecer na documentação. Eles limitam a criatividade do Figma Make e resultam em designs genéricos.

### 4.1 Wireframes e Mockups
❌ **NUNCA inclua:**
- Desenhos ASCII art de layouts
- Wireframes ou esboços
- Mockups de baixa ou alta fidelidade
- Referências visuais de outras telas

**Por que?** O Figma Make interpreta wireframes literalmente, criando cópias em vez de designs criativos.

**❌ Exemplo PROIBIDO:**
```
Layout da tela:
┌─────────────────────────────────────┐
│  LOGO        Menu    Perfil         │
├─────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐        │
│  │  CARD 1  │  │  CARD 2  │        │
│  └──────────┘  └──────────┘        │
│                                     │
│  ┌─────────────────────────────┐   │
│  │      TABELA DE DADOS        │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

### 4.2 Especificações de Posicionamento
❌ **NUNCA escreva:**
- "Botão à direita"
- "Card no topo"
- "Menu na esquerda"
- "Formulário centralizado"
- "Lista abaixo do header"

**Por que?** O Figma Make decide o melhor posicionamento baseado em princípios de UX, não em instruções rígidas.

**❌ Exemplos PROIBIDOS:**
```
- "Colocar o botão de salvar no canto superior direito"
- "A sidebar deve ficar à esquerda"
- "Os cards devem ser exibidos em duas colunas"
- "O logo fica no topo centralizado"
```

### 4.3 Cores Hexadecimais
❌ **NUNCA especifique:**
- Cores específicas (#FF5733, #3498db)
- Cores de elementos específicos
- Paletas de cores
- Cores de estado (erro, sucesso, aviso)

**✅ O que fazer em vez disso:**
```
- "O botão primário deve se destacar visualmente"
- "Erros devem ser claramente identificáveis"
- "Usar cores que transmitam profissionalismo"
```

### 4.4 Tamanhos em Pixels
❌ **NUNCA use:**
- Larguras/heights em px (200px, 100%, etc.)
- Tamanhos de fonte (14px, 16px, 24px)
- Espaçamentos específicos (padding: 16px)
- Tamanhos de ícones (24x24px)

**❌ Exemplos PROIBIDOS:**
```
- "Header com 64px de altura"
- "Fonte do título em 24px"
- "Cards com 320px de largura"
- "Padding de 16px entre elementos"
- "Avatar de 48x48px"
```

### 4.5 Fontes Específicas
❌ **NUNCA especifique:**
- Nomes de fontes (Inter, Roboto, Open Sans)
- Pesos de fonte (bold, semibold, light)
- Estilos tipográficos específicos

**✅ O que fazer em vez disso:**
```
- "Tipografia profissional e legível"
- "Hierarquia visual clara entre títulos e texto"
- "Fonte moderna que transmita confiança"
```

### 4.6 Descrições de Layout
❌ **NUNCA descreva:**
- "Layout de duas colunas"
- "Sidebar à esquerda"
- "Grid com 3 cards por linha"
- "Header fixo no topo"
- "Layout responsivo com breakpoint em 768px"

**Por que?** O Figma Make escolhe o layout mais apropriado para os dados e funcionalidades descritas.

### 4.7 Animações ou Transições
❌ **NUNCA especifique:**
- "Fade in de 200ms"
- "Slide da esquerda para direita"
- "Animação de hover com scale 1.05"
- "Loading spinner girando"
- "Transição ease-in-out"

**✅ O que fazer em vez disso:**
```
- "Feedback visual suave nas interações"
- "Indicadores de carregamento claros"
- "Transições que não atrapalhem a usabilidade"
```

### 4.8 Breakpoints Específicos
❌ **NUNCA defina:**
- "Mobile: < 640px"
- "Tablet: 640-1024px"
- "Desktop: > 1024px"
- Comportamentos específicos por breakpoint

**✅ O que fazer em vez disso:**
```
- "A tela deve funcionar bem em dispositivos móveis e desktop"
- "Priorizar usabilidade em telas pequenas"
```

### 4.9 Componentes de Biblioteca Específicos
❌ **NUNCA exija:**
- "Usar o componente Button do Material UI"
- "Implementar com shadcn/ui"
- "Usar o padrão de cards do Ant Design"
- "Seguir o design system do Atlassian"

**✅ O que fazer em vez disso:**
Deixe o Figma Make criar componentes customizados adequados ao contexto.

---

## 5. CHECKLIST DE REVISÃO

Antes de enviar qualquer documentação ao Figma Make, revise cuidadosamente:

### ✅ Checklist de Qualidade

- [ ] **Não há wireframes ou desenhos ASCII?**
  - Verifique se não existem representações visuais do layout

- [ ] **As instruções são sobre FUNCIONALIDADE e não sobre APARÊNCIA?**
  - Cada item descreve "o que" e não "como"

- [ ] **Ficou claro O QUE o usuário precisa fazer?**
  - As ações estão bem definidas e compreensíveis

- [ ] **Ficou claro QUAIS dados precisam ser mostrados?**
  - Todos os dados necessários estão listados

- [ ] **Não há especificações de cores?**
  - Nenhuma cor hexadecimal ou referência a cores específicas

- [ ] **Não há especificações de tamanhos?**
  - Nenhuma medida em pixels, ems, ou percentuais

- [ ] **Não há especificações de posicionamento?**
  - Nenhuma referência a "esquerda", "direita", "topo", "embaixo"

- [ ] **Não há especificações de layout?**
  - Nenhuma referência a colunas, grids, sidebars

- [ ] **Não há especificações tipográficas?**
  - Nenhuma referência a fontes, tamanhos de texto, pesos

- [ ] **Não há especificações de animação?**
  - Nenhuma referência a transições, tempos, tipos de animação

- [ ] **O Figma terá liberdade para criar o design?**
  - O documento foca em necessidades, não em soluções visuais

- [ ] **As user stories estão claras e completas?**
  - Seguem o formato "Como... quero... para que..."

- [ ] **As regras de negócio estão explícitas?**
  - Todas as validações e restrições estão documentadas

- [ ] **Os estados de UI estão descritos?**
  - Empty, loading, error e success states estão definidos

- [ ] **As permissões de acesso estão claras?**
  - Quem pode ver/editar/excluir está especificado

### 🎯 Teste Final

**Leia o documento e pergunte:**

> "Se eu fosse um designer talentoso recebendo este documento pela primeira vez, teria liberdade suficiente para criar algo incrível e inovador?"

Se a resposta for **SIM**, o documento está pronto para o Figma Make!

Se a resposta for **NÃO**, revise as seções que estão limitando a criatividade.

---

## 6. EXEMPLO PRÁTICO

Abaixo está um exemplo completo de uma tela documentada corretamente, seguindo todos os princípios desta matriz.

---

# Lista de Clientes - CRM

## 1. Metadados

| Campo | Valor |
|-------|-------|
| **Nome da Tela** | Lista de Clientes |
| **Rota/URL** | `/crm/clientes` |
| **Objetivo Principal** | Visualizar, buscar e gerenciar todos os clientes cadastrados no sistema |
| **Permissões de Acesso** | Visualização: Todos | Edição: Vendedor (próprios), Gestor (todos) | Exclusão: Gestor, Admin |
| **Módulo/Pai** | Módulo CRM |
| **Prioridade MVP** | ✅ Essencial |

## 2. Contexto do Usuário

### 2.1 Quem Usa Esta Tela
- **Perfil:** Vendedores e gestores comerciais
- **Conhecimento técnico:** Baixo a médio
- **Contexto de uso:** Usada diariamente para consultar informações de clientes, fazer follow-ups e atualizar dados

### 2.2 Por Que Esta Tela Existe
- **Problema que resolve:** Centralizar o acesso à base de clientes, evitando planilhas dispersas e informações desatualizadas
- **Valor entregue:** Acesso rápido a informações completas do cliente, histórico e dados para contato
- **Frequência de uso:** Múltiplas vezes ao dia

### 2.3 User Stories Relacionadas
- "Como vendedor, quero ver todos os meus clientes em um só lugar para não precisar consultar planilhas"
- "Como vendedor, quero buscar cliente por nome ou telefone rapidamente para encontrar informações durante uma ligação"
- "Como gestor, quero ver todos os clientes da equipe para acompanhar o trabalho dos vendedores"
- "Como vendedor, quero enviar mensagem WhatsApp direto da lista para agilizar o contato"

## 3. Elementos Obrigatórios (O Que DEVE Ter)

### 3.1 Dados a Exibir (por cliente)
- [ ] **Foto/Avatar:** Imagem do cliente ou ícone padrão
- [ ] **Nome/Razão Social:** Nome completo ou razão social da empresa
- [ ] **Tipo:** Indicador se é Pessoa Física (PF) ou Jurídica (PJ)
- [ ] **Telefone principal:** Número principal de contato
- [ ] **Tags/Etiquetas:** Marcadores visuais para segmentação (VIP, Prospect, Inadimplente, etc.)
- [ ] **Última interação:** Data da última vez que houve contato
- [ ] **Valor total em compras:** Quanto o cliente já comprou no total
- [ ] **Status:** Se está ativo ou inativo no sistema

### 3.2 Funcionalidades Essenciais
- [ ] **Busca rápida:** Campo para buscar por nome, telefone, email ou CPF/CNPJ
- [ ] **Filtros:** Filtrar por tipo (PF/PJ), tags, vendedor responsável, status
- [ ] **Novo cliente:** Cadastrar novo cliente no sistema
- [ ] **Ver detalhes:** Acessar ficha completa do cliente
- [ ] **Editar:** Alterar dados do cliente
- [ ] **Enviar mensagem:** Iniciar conversa via WhatsApp
- [ ] **Excluir:** Remover cliente do sistema (com confirmação)

### 3.3 Campos de Formulário de Busca
| Campo | Tipo | Obrigatório | Validações |
|-------|------|-------------|------------|
| Termo de busca | Texto | Não | Busca em nome, telefone, email, documento |
| Tipo | Select | Não | Opções: Todos, PF, PJ |
| Tags | Multi-select | Não | Lista de tags disponíveis |
| Vendedor | Select | Não | Lista de vendedores (apenas para gestores) |
| Status | Select | Não | Opções: Todos, Ativo, Inativo |

## 4. Elementos Opcionais (O Que PODE Ter)

### 4.1 Funcionalidades Adicionais
- [ ] **Importar em lote:** Upload de CSV para importar múltiplos clientes
- [ ] **Exportar:** Download da lista em CSV/Excel
- [ ] **Atribuir vendedor:** Transferir cliente para outro vendedor
- [ ] **Visualização em cards:** Alternar entre tabela e cards visuais

### 4.2 Dados Secundários
- [ ] Email do cliente
- [ ] CPF/CNPJ (máscarado parcialmente por segurança)
- [ ] Cidade/UF
- [ ] Data de cadastro

## 5. Ações Possíveis

### 5.1 Ações Primárias
1. **Cadastrar novo cliente:**
   - **Gatilho:** Botão principal visível na interface
   - **Resultado:** Abre modal ou navega para formulário de cadastro
   - **Confirmação:** Não necessária

2. **Buscar cliente:**
   - **Gatilho:** Digitar no campo de busca
   - **Resultado:** Lista filtrada em tempo real
   - **Confirmação:** Não necessária

3. **Visualizar ficha completa:**
   - **Gatilho:** Clicar no nome do cliente
   - **Resultado:** Navega para página de detalhes
   - **Confirmação:** Não necessária

### 5.2 Ações Secundárias
1. **Enviar WhatsApp:** Inicia conversa com número do cliente
2. **Editar cliente:** Abre modal de edição
3. **Aplicar filtros avançados:** Expande painel de filtros

### 5.3 Ações de Destruição
1. **Excluir cliente:**
   - **Gatilho:** Botão de exclusão nas ações do cliente
   - **Confirmação:** Modal de confirmação obrigatório
   - **Mensagem:** "Tem certeza que deseja excluir [Nome]? Esta ação não pode ser desfeita."
   - **Validação:** Checkbox "Entendo que todos os dados serão removidos"

## 6. Estados da UI

### 6.1 Empty State - Lista Vazia
- **Quando aparece:** Usuário ainda não tem clientes cadastrados
- **Mensagem:** "Nenhum cliente cadastrado"
- **Descrição:** "Comece adicionando seu primeiro cliente ao CRM"
- **CTA primário:** "Cadastrar primeiro cliente"
- **CTA secundário:** "Importar via CSV"
- **Dica:** "Você também pode importar seus contatos em massa"

### 6.2 Empty State - Busca Sem Resultados
- **Quando aparece:** Busca não encontra resultados
- **Mensagem:** "Nenhum resultado encontrado"
- **Descrição:** "Tente ajustar seus filtros ou termos de busca"
- **CTA:** "Limpar filtros"

### 6.3 Loading State
- **Quando aparece:** Carregando lista inicial ou aplicando filtros
- **Tipo:** Skeleton de linhas (5-10 linhas simulando a tabela)
- **Mensagem:** "Carregando clientes..."

### 6.4 Error State
- **Quando aparece:** Falha ao carregar dados do servidor
- **Mensagem:** "Não foi possível carregar os clientes"
- **Descrição:** "Verifique sua conexão e tente novamente"
- **Ação de recuperação:** Botão "Tentar novamente"

### 6.5 Success State
- **Quando aparece:** Após cadastrar, editar ou excluir cliente
- **Feedback:** Toast/message temporária
- **Mensagens:**
  - "Cliente cadastrado com sucesso!"
  - "Cliente atualizado"
  - "Cliente removido"

## 7. Integrações

### 7.1 Com Outras Telas
- Navega para: Ficha do Cliente (/crm/clientes/:id), Cadastro de Cliente, Importação
- Recebe de: Dashboard CRM, Pipeline de Vendas

### 7.2 Com Outros Módulos
- **Módulo Agenda:** Compromissos de follow-up aparecem nos dados do cliente
- **Módulo Financeiro:** Valor total em compras vem do histórico financeiro
- **Módulo WhatsApp:** Integração para envio de mensagens
- **Módulo Pipeline:** Vinculação com negociações em andamento

### 7.3 APIs/Serviços
- **API de Clientes:** CRUD de clientes
- **API de Busca:** Busca full-text e filtros
- **API de WhatsApp:** Envio de mensagens
- **ViaCEP:** Autocompletar endereço (no cadastro)

## 8. Regras de Negócio

1. **CPF/CNPJ único:** Não pode haver dois clientes com mesmo documento
2. **Email único:** Se informado, email deve ser único no sistema
3. **Telefone único:** Telefone principal deve ser único
4. **Permissão de exclusão:** Apenas gestores e admin podem excluir
5. **Cliente próprio:** Vendedores só veem e editam seus próprios clientes (exceto gestores)
6. **Cliente inativo:** Não aparece em buscas padrão, mas mantém histórico
7. **Autopreenchimento:** Ao informar CEP, endereço é preenchido automaticamente

## 9. Notas e Considerações

- A lista deve ser performática para bases grandes (milhares de clientes)
- Considerar paginação ou scroll infinito
- Exportar deve respeitar filtros aplicados
- Importação deve validar duplicidades
- Última interação deve atualizar em tempo real

---

## 7. DICAS DE PROMPT PARA FIGMA MAKE

Agora que você tem o documento funcional completo, aqui está como transformá-lo em um prompt efetivo para o Figma Make:

### 7.1 Estrutura do Prompt

```
Crie um design de [TIPO DE TELA] para [CONTEXTO DO PRODUTO].

CONTEXTO DO PRODUTO:
- Produto: [Nome do produto]
- Tipo: [SaaS/Mobile/etc]
- Público-alvo: [Descrição do usuário]
- Tom de voz: [Características]

OBJETIVO DA TELA:
[Objetivo principal em 1-2 frases]

FUNCIONALIDADES NECESSÁRIAS:
- [Funcionalidade 1]
- [Funcionalidade 2]
- [Funcionalidade 3]

DADOS A EXIBIR:
- [Dado 1]
- [Dado 2]
- [Dado 3]

AÇÕES DO USUÁRIO:
- [Ação 1]
- [Ação 2]

REGRAS IMPORTANTES:
- [Regra 1]
- [Regra 2]

ESTADOS A CONSIDERAR:
- Empty state (quando não há dados)
- Loading state
- Error state
- Success feedback

ESTILO DESEJADO:
- [Características visuais desejadas - deixe o Figma interpretar criativamente]
```

### 7.2 Exemplo de Prompt Completo

```
Crie um design de tela de listagem de clientes para um sistema CRM.

CONTEXTO DO PRODUTO:
- Produto: UNIQ Empresas - Plataforma SaaS para pequenos empreendedores
- Tipo: Aplicação web responsiva
- Público-alvo: Vendedores e gestores de pequenas empresas (MEI/Micro)
- Tom de voz: Simples, profissional, acolhedor, sem complexidade técnica

OBJETIVO DA TELA:
Permitir que vendedores visualizem, busquem e gerenciem sua base de 
clientes de forma rápida e intuitiva, facilitando o dia a dia de 
quem está na correria das vendas.

FUNCIONALIDADES NECESSÁRIAS:
- Busca rápida por nome, telefone ou documento
- Filtros por tipo (PF/PJ), tags e status
- Cadastro de novo cliente
- Visualização de detalhes do cliente
- Envio rápido de WhatsApp
- Edição e exclusão de clientes

DADOS A EXIBIR (por cliente):
- Foto/avatar do cliente
- Nome ou razão social
- Tipo (PF/PJ)
- Telefone principal
- Tags coloridas (VIP, Prospect, etc.)
- Data da última interação
- Valor total em compras
- Status (ativo/inativo)

AÇÕES DO USUÁRIO:
- Buscar cliente em tempo real
- Cadastrar novo cliente
- Ver ficha completa
- Enviar mensagem WhatsApp
- Editar dados
- Excluir cliente (com confirmação)

REGRAS IMPORTANTES:
- Vendedores só veem seus próprios clientes
- Gestores veem todos os clientes da equipe
- CPF/CNPJ deve ser único no sistema
- Clientes inativos não aparecem na busca padrão

ESTADOS A CONSIDERAR:
- Lista vazia (primeiro acesso)
- Busca sem resultados
- Carregando dados
- Erro de conexão
- Feedback de sucesso nas ações

ESTILO DESEJADO:
Crie um design moderno, profissional mas acolhedor, que transmita 
confiança para pequenos empresários. Priorize a clareza e facilidade 
de uso - o usuário está sempre com pressa entre uma venda e outra. 
Use sua criatividade para organizar as informações de forma que o 
vendedor encontre rapidamente o que precisa.
```

### 7.3 Palavras-Chave Efetivas

Use estas palavras-chave no prompt para guiar o Figma Make no contexto correto:

**Para o Tom:**
- Profissional mas acolhedor
- Simples e intuitivo
- Moderno e clean
- Sem complexidade técnica
- Para leigos
- Na correria do dia a dia

**Para o Público:**
- Pequenos empreendedores
- MEI (Microempreendedor Individual)
- Microempresas
- Vendedores autônomos
- Donos de pequenos negócios
- Não técnicos

**Para o Produto:**
- SaaS B2B
- Plataforma empresarial
- Sistema de gestão
- Ferramenta de produtividade
- Aplicação web responsiva

**Para o Objetivo:**
- Facilitar o dia a dia
- Agilizar processos
- Organizar informações
- Aumentar produtividade
- Reduzir burocracia

**Para o Estilo:**
- Clean e moderno
- Profissional
- Criativo mas funcional
- Foco em usabilidade
- Visual hierarchy clara

### 7.4 O Que NÃO Colocar no Prompt

❌ **Evite:**
- "Coloque o botão à direita"
- "Use azul #3498db"
- "Fonte Inter 16px"
- "Layout com sidebar à esquerda"
- "Cards de 300px de largura"
- "Header com 60px de altura"

✅ **Em vez disso:**
- "Botão de ação primária bem visível"
- "Paleta profissional e moderna"
- "Tipografia legível e hierárquica"
- "Navegação intuitiva"
- "Cards organizados de forma clara"
- "Header com identidade visual forte"

---

## 8. BOAS PRÁTICAS E DICAS

### 8.1 Antes de Documentar

1. **Entenda o problema profundamente**
   - Fale com usuários reais se possível
   - Identifique a dor real
   - Entenda o contexto de uso

2. **Defina claramente o objetivo**
   - Uma frase que resume o propósito
   - O que o usuário deve conseguir fazer
   - Qual problema está resolvendo

3. **Liste apenas o essencial**
   - MVP mindset
   - O que é realmente necessário vs. nice-to-have
   - Priorize funcionalidades core

### 8.2 Durante a Documentação

1. **Seja específico nas funcionalidades**
   - Descreva comportamentos, não aparências
   - Defina regras de negócio claras
   - Liste todos os campos e validações

2. **Pense nos estados**
   - Empty state é tão importante quanto dados
   - Loading states evitam frustração
   - Error states bem desenhados recuperam usuários

3. **Considere integrações**
   - De onde vêm os dados
   - Para onde o usuário navega
   - Que outros módulos se conectam

### 8.3 Antes de Enviar ao Figma Make

1. **Revise com o checklist** (seção 5)
2. **Leia como se fosse designer:**
   - "Tenho liberdade para criar?"
   - "Entendi o que precisa ser feito?"
   - "Consigo entregar algo incrível com isso?"

3. **Remova qualquer coisa visual:**
   - Nenhuma referência de layout
   - Nenhuma cor específica
   - Nenhum tamanho em pixels

### 8.4 Após Receber o Design

1. **Avalie funcionalmente:**
   - Todas as funcionalidades estão contempladas?
   - Os dados estão representados?
   - As ações estão disponíveis?

2. **Não critique pixels:**
   - Não peça para mover elementos
   - Não peça para mudar cores específicas
   - Não peça para ajustar tamanhos

3. **Dê feedback de valor:**
   - "Essa organização facilita o trabalho do vendedor"
   - "A hierarquia visual está clara"
   - "O fluxo está intuitivo"

4. **Se precisar ajustar:**
   - Reforce o objetivo, não a solução visual
   - "Precisamos destacar mais o valor total em compras, 
      pois é importante para priorizar atendimento"
   - NÃO: "Aumente a fonte do valor para 20px e coloque em verde"

---

## 9. EXEMPLOS DE ERROS COMUNS

### ❌ Erro 1: Wireframe ASCII
```markdown
Layout:
┌─────────────────────────────────────┐
│ LOGO    Home   Clientes   Perfil    │
├─────────────────────────────────────┤
│                                     │
│  [Card 1]      [Card 2]            │
│                                     │
│  [TABELA]                          │
│                                     │
└─────────────────────────────────────┘
```
**Problema:** O Figma Make vai literalmente copiar isso em vez de criar algo original.

### ❌ Erro 2: Especificações Visuais
```markdown
O botão de cadastrar deve ser:
- Posicionado no canto superior direito
- Cor azul #0066CC
- 120px de largura e 40px de altura
- Borda arredondada de 4px
- Fonte Inter Bold 14px
```
**Problema:** Remove toda a criatividade do designer. É um pedido de cópia, não de design.

### ❌ Erro 3: Layout Específico
```markdown
A tela deve ter:
- Sidebar fixa à esquerda com 250px
- Conteúdo em duas colunas
- Cards com 320px de largura
- Grid de 3 colunas no desktop
- Header com 64px de altura
```
**Problema:** O Figma Make deve decidir o melhor layout baseado nos dados e funcionalidades.

### ✅ Forma Correta
```markdown
Elementos obrigatórios:
- Navegação principal (home, clientes, configurações)
- Lista de clientes com foto, nome, telefone e tags
- Botão para cadastrar novo cliente
- Campo de busca rápida
- Filtros por tipo e status

Ações:
- Cadastrar novo cliente
- Buscar por nome ou telefone
- Visualizar detalhes
- Enviar mensagem WhatsApp
- Editar ou excluir

Regras:
- Vendedores só veem seus clientes
- Gestores veem todos
- CPF/CNPJ deve ser único
```
**Por que funciona:** Descreve funcionalidades e regras, não aparência. O Figma tem liberdade para criar.

---

## 10. REFERÊNCIAS E RECURSOS

### Documentos de Referência UNIQ

- [Módulo CRM - UI Map](./ui-maps/modulo-crm-ui-map.md) - Exemplo completo de documentação funcional
- [Módulo Financeiro - UI Map](./ui-maps/modulo-financeiro-ui-map.md)
- [Módulo Vendas - UI Map](./ui-maps/modulo-vendas-ui-map.md)

### Documentos de Contexto

- [CONTEXTO_PROJETO.md](./CONTEXTO_PROJETO.md) - Visão geral do produto
- [LEAN_CANVAS.md](./estrategia/LEAN_CANVAS.md) - Modelo de negócio
- [VALUE_PROPOSITION_CANVAS.md](./estrategia/VALUE_PROPOSITION_CANVAS.md) - Proposta de valor

### Links Úteis

- **Figma Make:** https://www.figma.com/make
- **Documentação Figma Make:** https://help.figma.com/hc/en-us/articles/
- **Guidelines de Design UNIQ:** (adicionar quando disponível)

---

## 11. HISTÓRICO DE VERSÕES

| Versão | Data | Autor | Alterações |
|--------|------|-------|------------|
| 1.0 | Março 2025 | Product Team UNIQ | Versão inicial do documento |

---

## 12. CONCLUSÃO

Esta matriz estabelece o padrão oficial de documentação de UI para o UNIQ Empresas. Ao seguir estes princípios:

✅ **Você garante:**
- Clareza nos requisitos funcionais
- Liberdade criativa para o Figma Make
- Designs inovadores e modernos
- Processo ágil e eficiente
- Melhor resultado final

✅ **O Figma Make entrega:**
- Interfaces criativas e únicas
- Soluções visuais profissionais
- Experiências focadas no usuário
- Designs que resolvem problemas reais

✅ **O usuário final ganha:**
- Interfaces intuitivas
- Fluxos bem pensados
- Experiência agradável
- Solução que realmente ajuda

---

> 💡 **Lembre-se sempre:**
> 
> **Nós somos Product Managers. Definimos O QUE fazer.**  
> **O Figma Make é o Designer. Decide COMO fazer.**
> 
> **Juntos, criamos produtos incríveis.**

---

**Próximo passo:** Use esta matriz para documentar o fluxo OAuth e o Dashboard Inicial!
