# Mapa de UI - MEL + Configurações + Métricas

## PARTE 1: MEL - IA PROATIVA

### 1. Resumo do Módulo

**Nome:** MEL - IA Proativa  
**Propósito:** Inteligência artificial que antecipa necessidades, sugere ações e automatiza comunicações  
**Status:** Diferencial competitivo UNIQ - MVP em desenvolvimento  
**Usuários:** Proprietários, gerentes, administradores  

**Funcionalidades Principais:**
- Análise preditiva de comportamento de clientes
- Automação de comunicações proativas
- Sugestões de ações baseadas em dados
- Cenários personalizáveis de automação
- Aprendizado contínuo com feedback

---

### 2. Telas do MEL

#### 2.1 Dashboard MEL (Tela Principal)
**Rota:** `/mel/dashboard`  
**Status:** MVP  
**Descrição:** Visão geral dos insights e ações da IA

**Seções:**
- Header com saudação personalizada e status da IA
- Cards de insights do dia (últimas 24h)
- Gráfico de atividade da IA (últimos 7 dias)
- Lista de ações sugeridas pendentes
- Timeline de notificações enviadas
- Estatísticas de conversão das ações

**Ações Principais:**
- Ver todos os insights
- Configurar comportamento
- Executar ação sugerida
- Ignorar sugestão

#### 2.2 Central de Insights
**Rota:** `/mel/insights`  
**Status:** MVP  
**Descrição:** Lista completa de todos os insights gerados pela IA

**Filtros:**
- Período (hoje, semana, mês, personalizado)
- Tipo (oportunidade, alerta, sugestão, previsão)
- Status (novo, visualizado, em ação, concluído, ignorado)
- Categoria (vendas, clientes, estoque, financeiro, agendamentos)
- Prioridade (alta, média, baixa)

**Visualização:**
- Lista em cards com ícone, título, descrição, data e ações
- Agrupamento por data
- Badge de prioridade e categoria
- Indicador de confiança da IA (%)

#### 2.3 Configurações de Comportamento da IA
**Rota:** `/mel/configuracoes`  
**Status:** MVP  
**Descrição:** Personalizar como a IA se comporta e quais ações sugere

**Abas:**

**Aba 1: Geral**
- Ativar/desativar MEL
- Nível de proatividade (conservador, moderado, agressivo)
- Frequência de análise (a cada X horas)
- Idioma das comunicações
- Tom de voz (formal, casual, amigável)

**Aba 2: Notificações**
- Canais de comunicação (app, email, WhatsApp)
- Horário de envio (respeitar janela)
- Frequência máxima por dia
- Tipos de notificação permitidos

**Aba 3: Categorias**
- Habilitar/desabilitar por módulo
- Configurações específicas por categoria
- Limiares de alerta personalizados

#### 2.4 Cenários de Automação
**Rota:** `/mel/cenarios`  
**Status:** MVP (básico) / Futuro (avançado)  
**Descrição:** Gerenciar cenários automatizados criados pela IA ou usuário

**Lista de Cenários:**
- Nome do cenário
- Gatilho (quando acontece)
- Condição (regras)
- Ação (o que fazer)
- Status (ativo/inativo)
- Estatísticas (executado X vezes, taxa de sucesso)

**Ações:**
- Criar novo cenário
- Editar cenário
- Duplicar cenário
- Ativar/desativar
- Ver histórico de execuções
- Excluir

#### 2.5 Histórico de Notificações
**Rota:** `/mel/notificacoes/historico`  
**Status:** MVP  
**Descrição:** Registro completo de todas as notificações enviadas

**Colunas:**
- Data/hora de envio
- Destinatário (cliente/colaborador)
- Canal (WhatsApp, email, app)
- Tipo de mensagem
- Status (enviado, entregue, lido, falhou)
- Cenário/Insight relacionado
- Ações (reenviar, ver detalhes)

**Filtros:**
- Período
- Canal
- Status
- Destinatário
- Tipo

#### 2.6 Templates de Mensagens
**Rota:** `/mel/templates`  
**Status:** MVP  
**Descrição:** Biblioteca de templates de mensagens usados pela IA

**Lista:**
- Nome do template
- Categoria
- Preview da mensagem
- Variáveis disponíveis
- Status (ativo/inativo)
- Uso (quantas vezes usado)

**Categorias de Templates:**
- Boas-vindas
- Lembrete de agendamento
- Pós-atendimento
- Aniversário
- Inatividade
- Recuperação de carrinho
- Ofertas personalizadas
- Alertas de estoque
- Cobranças

#### 2.7 Treinamento e Feedback
**Rota:** `/mel/treinamento`  
**Status:** Futuro  
**Descrição:** Interface para melhorar a IA através de feedback

**Seções:**
- Feedback em insights passados (acertou/errou)
- Correções de mensagens
- Exemplos de boas respostas
- Área de sugestões de melhoria
- Métricas de aprendizado

#### 2.8 Relatórios Proativos
**Rota:** `/mel/relatorios`  
**Status:** Futuro  
**Descrição:** Relatórios agendados gerados automaticamente pela IA

**Lista de Relatórios:**
- Nome
- Frequência (diário, semanal, mensal)
- Destinatários
- Último envio
- Status
- Ações (executar agora, editar, excluir)

---

### 3. Formulários do MEL

#### 3.1 Configurar Comportamento da IA
**Tela:** Configurações de Comportamento  
**Tipo:** Formulário multi-etapa/aba  
**Status:** MVP

**Seção: Geral**
| Campo | Tipo | Obrigatório | Valores/Opções |
|-------|------|-------------|----------------|
| Ativar MEL | Toggle | Sim | Sim/Não |
| Nível de Proatividade | Select | Sim | Conservador, Moderado, Agressivo |
| Frequência de Análise | Select | Sim | 1h, 3h, 6h, 12h, 24h |
| Tom de Comunicação | Select | Sim | Formal, Casual, Amigável, Profissional |
| Idioma Principal | Select | Sim | Português, Inglês, Espanhol |
| Nome da IA | Text | Não | MEL (padrão) ou personalizado |

**Seção: Notificações**
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| Notificar no App | Toggle | Sim | Enviar notificações push |
| Notificar por Email | Toggle | Não | Enviar cópia por email |
| Notificar por WhatsApp | Toggle | Não | Enviar por WhatsApp |
| Horário Permitido (Início) | Time | Sim | 08:00 (padrão) |
| Horário Permitido (Fim) | Time | Sim | 20:00 (padrão) |
| Limite por Dia | Number | Sim | Máximo de notificações (padrão: 10) |
| Respeitar Fins de Semana | Toggle | Sim | Não enviar sáb/domingo |
| Respeitar Feriados | Toggle | Sim | Não enviar em feriados |

**Seção: Categorias (Toggles por categoria)**
| Categoria | Toggle | Configurações Adicionais |
|-----------|--------|--------------------------|
| Vendas | Sim/Não | Limiar de oportunidade (R$) |
| Clientes | Sim/Não | Dias de inatividade para alerta |
| Estoque | Sim/Não | Nível mínimo de alerta (%) |
| Financeiro | Sim/Não | Valor mínimo para alerta (R$) |
| Agendamentos | Sim/Não | Antecedência de lembrete (h) |
| Colaboradores | Sim/Não | Dias sem atendimento para alerta |

#### 3.2 Criar/Editar Cenário de Automação
**Tela:** Cenários de Automação  
**Tipo:** Formulário wizard (3 passos)  
**Status:** MVP

**Passo 1: Informações Básicas**
| Campo | Tipo | Obrigatório | Valores |
|-------|------|-------------|---------|
| Nome do Cenário | Text | Sim | Máx 100 caracteres |
| Descrição | Textarea | Não | Objetivo do cenário |
| Categoria | Select | Sim | Vendas, Clientes, Estoque, Financeiro, Agendamentos, Customizado |
| Status | Toggle | Sim | Ativo/Inativo |

**Passo 2: Gatilhos e Condições**
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| Gatilho | Select | Sim | Evento que inicia (ex: cliente inativo, estoque baixo) |
| Condição Adicional | Condition Builder | Não | Regras extras (ex: valor > X, categoria = Y) |
| Frequência Máxima | Select | Sim | Uma vez, Diário, Semanal, Mensal |
| Período de Vigência | Date Range | Não | Quando o cenário está ativo |

**Gatilhos Disponíveis:**
- Cliente sem compra há X dias
- Estoque abaixo de X unidades
- Agendamento em X horas
- Aniversário do cliente
- Novo cadastro
- Carrinho abandonado
- Valor de venda acima de X
- Cliente VIP retornou
- Produto sem movimentação

**Passo 3: Ações**
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| Tipo de Ação | Select | Sim | Enviar mensagem, Criar tarefa, Atualizar registro, Notificar equipe |
| Template de Mensagem | Select | Condicional | Se ação = mensagem |
| Canal | Select | Condicional | WhatsApp, Email, App Push |
| Destinatário | Select | Sim | Cliente, Colaborador, Grupo |
| Tempo de Espera | Select | Não | Imediato, 1h, 24h, etc |
| Ação de Follow-up | Select | Não | Se não responder em X tempo |

#### 3.3 Editar Template de Mensagem
**Tela:** Templates  
**Tipo:** Formulário com preview  
**Status:** MVP

| Campo | Tipo | Obrigatório | Valores |
|-------|------|-------------|---------|
| Nome do Template | Text | Sim | Identificação interna |
| Categoria | Select | Sim | Categoria pré-definida |
| Assunto | Text | Condicional | Se canal incluir email |
| Conteúdo | Rich Text | Sim | Editor com variáveis |
| Variáveis Disponíveis | Multi-select | Não | {{nome}}, {{empresa}}, {{data}}, etc |
| Preview com Dados | Toggle | Não | Simular com dados reais |
| Status | Toggle | Sim | Ativo/Inativo |

**Variáveis Disponíveis:**
- `{{nome_cliente}}` - Nome do cliente
- `{{nome_empresa}}` - Nome do estabelecimento
- `{{data_atual}}` - Data de hoje
- `{{data_agendamento}}` - Data do agendamento
- `{{servico}}` - Nome do serviço
- `{{valor}}` - Valor formatado
- `{{nome_colaborador}}` - Profissional
- `{{tempo_inatividade}}` - Dias sem contato
- `{{produto}}` - Nome do produto
- `{{quantidade}}` - Quantidade em estoque

#### 3.4 Configurar Alerta Específico
**Tela:** Configurações > Categorias  
**Tipo:** Formulário expansível por categoria  
**Status:** MVP

**Configurações de Vendas:**
| Campo | Tipo | Descrição |
|-------|------|-----------|
| Alertar oportunidades acima de | Currency | Valor mínimo para alerta de venda |
| Identificar padrões de compra | Toggle | Sugerir baseado no histórico |
| Alertar queda de vendas | Toggle | Notificar quando vendas caem |
| Queda significativa (%) | Number | Percentual de queda para alertar |

**Configurações de Clientes:**
| Campo | Tipo | Descrição |
|-------|------|-----------|
| Alertar inatividade após | Number | Dias sem interação |
| Identificar clientes VIP | Toggle | Baseado em valor gasto |
| Valor para VIP | Currency | Gasto mínimo no período |
| Sugerir aniversário | Toggle | Lembrar de enviar mensagem |
| Dias antes do aniversário | Number | Antecedência do lembrete |

**Configurações de Estoque:**
| Campo | Tipo | Descrição |
|-------|------|-----------|
| Nível crítico (%) | Number | % do estoque mínimo |
| Alertar produtos parados | Toggle | Sem movimentação |
| Dias sem movimentação | Number | Para considerar parado |
| Sugerir recompra | Toggle | Baseado em velocidade de venda |

**Configurações de Agendamentos:**
| Campo | Tipo | Descrição |
|-------|------|-----------|
| Lembrete antecedência (h) | Number | Horas antes para lembrete |
| Confirmação automática | Toggle | Cliente pode confirmar |
| Alertar conflitos | Toggle | Detectar sobreposições |
| Sugerir reagendamento | Toggle | Para clientes faltosos |

---

### 4. Modais do MEL

#### 4.1 Visualizar Insight
**Trigger:** Clique no card de insight  
**Tamanho:** Large (800px)  
**Status:** MVP

**Conteúdo:**
- Header: Título, badge de prioridade, data/hora
- Ícone grande representando a categoria
- Descrição detalhada do insight
- Dados que embasaram a sugestão (gráfico miniatura)
- Confiança da IA (%)
- Ações sugeridas (botões primários)
- Histórico de ações similares (se houver)

**Botões:**
- [Executar Ação] - Primário
- [Agendar para Depois] - Secundário
- [Ignorar] - Terciário
- [Feedback: Acertou/Errou] - Ícones

#### 4.2 Confirmar Ação da IA
**Trigger:** Ao executar ação sugerida  
**Tamanho:** Medium (500px)  
**Status:** MVP

**Conteúdo:**
- Ícone de confirmação
- Título: "Confirmar Ação"
- Descrição do que será feito
- Preview da mensagem (se aplicável)
- Lista de destinatários afetados
- Confirmação de canal de envio

**Botões:**
- [Confirmar e Executar] - Primário
- [Editar Antes] - Secundário
- [Cancelar] - Terciário

#### 4.3 Detalhes da Notificação
**Trigger:** Clique em item do histórico  
**Tamanho:** Large (700px)  
**Status:** MVP

**Conteúdo:**
- Timeline de status (enviado → entregue → lido)
- Conteúdo completo da mensagem
- Dados do destinatário
- Cenário que gerou
- Estatísticas (taxa de abertura, cliques)
- Resposta do cliente (se houver)

**Botões:**
- [Reenviar] - Secundário
- [Ver Cliente] - Secundário
- [Fechar] - Terciário

#### 4.4 Preview de Mensagem
**Trigger:** Preview em templates ou cenários  
**Tamanho:** Medium (450px)  
**Status:** MVP

**Conteúdo:**
- Simulação de como a mensagem aparecerá
- Frame de celular (WhatsApp/App)
- Ou preview de email
- Variáveis substituídas por dados de exemplo
- Toggle: "Ver com dados reais"

**Botões:**
- [Enviar Teste para Mim] - Secundário
- [Fechar] - Terciário

#### 4.5 Testar Cenário
**Trigger:** Botão "Testar" nos cenários  
**Tamanho:** Medium (600px)  
**Status:** MVP

**Conteúdo:**
- Seleção de dados de teste
- Simulação do gatilho
- Preview das condições
- Resultado esperado
- Logs de execução simulada

**Botões:**
- [Executar Teste] - Primário
- [Fechar] - Terciário

#### 4.6 Feedback de Insight
**Trigger:** Após marcar insight como tratado  
**Tamanho:** Small (400px)  
**Status:** Futuro

**Conteúdo:**
- Pergunta: "A sugestão da MEL foi útil?"
- Botões: 👍 Acertou / 👎 Errou
- Campo de comentário (opcional)
- O que deveria ter sugerido (se errou)

**Botões:**
- [Enviar Feedback] - Primário
- [Pular] - Terciário

#### 4.7 Configurar Integração Específica
**Trigger:** Configurar canal de notificação  
**Tamanho:** Medium (550px)  
**Status:** MVP

**Variações:**

**WhatsApp:**
- Status da conexão
- Número conectado
- QR Code para reconexão
- Limite de mensagens/dia
- Testar envio

**Email:**
- Remetente padrão
- Configuração de SMTP (opcional)
- Template de cabeçalho
- Testar envio

#### 4.8 Estatísticas de Cenário
**Trigger:** Clique em "Estatísticas" do cenário  
**Tamanho:** Large (800px)  
**Status:** Futuro

**Conteúdo:**
- Gráfico de execuções ao longo do tempo
- Taxa de sucesso/conversão
- Comparativo com período anterior
- Insights gerados pelo cenário
- Sugestões de otimização da própria MEL

---

### 5. Componentes Específicos do MEL

#### 5.1 Cards de Insight
```
┌─────────────────────────────────────┐
│ [🔔] Título do Insight          [X] │
│                                     │
│ Descrição curta do insight...       │
│                                     │
│ Baseado em: [dados resumidos]       │
│                                     │
│ Confiança: 87%    [Ver Mais →]      │
└─────────────────────────────────────┘
```

**Variantes:**
- **Oportunidade:** Ícone de 💰 verde
- **Alerta:** Ícone de ⚠️ amarelo/laranja
- **Sugestão:** Ícone de 💡 azul
- **Previsão:** Ícone de 🔮 roxo

**Estados:**
- Novo (borda destacada)
- Visualizado
- Em ação
- Concluído (opacidade reduzida)
- Ignorado (riscado)

#### 5.2 Badge de IA
```
┌─────────┐
│ 🤖 MEL  │
└─────────┘
```

**Uso:** Identificar elementos gerados pela IA  
**Estilos:**
- Inline: pequeno, ao lado de texto
- Flutuante: canto de cards
- Status: indicando processamento

#### 5.3 Timeline de Notificações
```
├── 09:00 [✓] Mensagem enviada para João
├── 09:15 [✓] Lembrete de agendamento
├── 09:30 [✗] Falha no envio para Maria
│            [Reenviar]
└── 10:00 [○] Agendado para envio
```

**Elementos:**
- Linha do tempo vertical
- Ícones de status (sucesso, falha, pendente)
- Hora
- Descrição resumida
- Ações rápidas

#### 5.4 Toggle de Ativação
```
Ativo:  [●─────] / [─────●]
Label: "MEL está ativa e analisando"
```

**Features:**
- Animação suave
- Label contextual muda com estado
- Indicador de processamento quando ativando

#### 5.5 Indicador de Confiança
```
Confiança: ████████░░ 85%
```

**Cores:**
- 0-50%: Vermelho
- 51-75%: Amarelo
- 76-90%: Azul
- 91-100%: Verde

#### 5.6 Condition Builder
Componente visual para criar regras:
```
[Campo] [Operador] [Valor] [+]
   ↓
[E] [Campo] [Operador] [Valor] [-]
```

**Operadores:**
- Igual a / Diferente de
- Maior que / Menor que
- Contém / Não contém
- Está em / Não está em
- Está vazio / Não está vazio

#### 5.7 Chat Simulator
Preview de conversa para testar templates:
```
┌─────────────────┐
│ 12:00        🔋│
│                 │
│ ─────────────── │
│                 │
│ [MEL]           │
│ Olá {{nome}}!   │
│                 │
│ João Silva      │
│ Olá!            │
│                 │
│ ─────────────── │
└─────────────────┘
```

#### 5.8 Gráfico de Atividade da IA
Tipo: Área ou linha  
Mostra: Volume de insights gerados ao longo do tempo  
Sobreposição: Linha de taxa de conversão (eixo secundário)

---

## PARTE 2: CONFIGURAÇÕES

### 6. Resumo do Módulo

**Nome:** Configurações  
**Propósito:** Central de administração e personalização do sistema  
**Status:** MVP com funcionalidades essenciais  
**Usuários:** Administradores, Proprietários  

**Funcionalidades Principais:**
- Gerenciamento de perfil da empresa
- Configurações gerais do sistema
- Integrações com serviços externos
- Gestão de usuários e permissões
- Personalização visual
- Configurações de notificação

---

### 7. Telas de Configurações

#### 7.1 Perfil da Empresa
**Rota:** `/configuracoes/empresa`  
**Status:** MVP  
**Descrição:** Dados cadastrais e identidade visual da empresa

**Seções:**

**Dados Básicos:**
- Nome fantasia
- Razão social
- CNPJ (com validação)
- Inscrição estadual/municipal
- Data de fundação

**Logotipo e Imagens:**
- Upload de logo (com crop)
- Favicon
- Imagem de capa (para relatórios)
- Preview em contextos

**Endereço:**
- CEP (com busca automática)
- Logradouro, número, complemento
- Bairro, cidade, estado
- Mapa embed (opcional)

**Contato:**
- Telefone fixo
- WhatsApp comercial
- Email institucional
- Website
- Redes sociais

**Dados Fiscais:**
- Regime tributário
- CNAE principal
- Alíquotas de impostos
- Certificado digital (upload)

#### 7.2 Configurações Gerais
**Rota:** `/configuracoes/geral`  
**Status:** MVP  
**Descrição:** Ajustes gerais do funcionamento do sistema

**Abas:**

**Aba 1: Regionalização**
| Configuração | Opções |
|--------------|--------|
| Idioma | Português, Inglês, Espanhol |
| Fuso horário | Lista de timezones |
| Formato de data | DD/MM/AAAA, MM/DD/AAAA, etc |
| Formato de hora | 24h, 12h AM/PM |
| Moeda | R$, US$, €, etc |
| Separador decimal | Vírgula ou ponto |
| Separador de milhar | Ponto ou vírgula |

**Aba 2: Negócio**
| Configuração | Descrição |
|--------------|-----------|
| Horário de funcionamento | Seg a Sex, Sáb, Dom separados |
| Intervalo de agendamentos | 15min, 30min, 1h |
| Antecedência mínima | Para agendamentos online |
| Tempo de tolerância | Para atrasos |
| Política de cancelamento | Regras de reembolso |

**Aba 3: Sistema**
| Configuração | Descrição |
|--------------|-----------|
| Sessão expira em | Tempo de inatividade |
| Tentativas de login | Bloqueio após X falhas |
| Backup automático | Frequência e retenção |
| Logs de auditoria | Período de retenção |

#### 7.3 Integrações
**Rota:** `/configuracoes/integracoes`  
**Status:** MVP  
**Descrição:** Gerenciar conexões com serviços externos

**Lista de Integrações:**

**Comunicação:**
- WhatsApp Business API
- SMS (Twilio, Zenvia)
- Email SMTP
- Push notifications (Firebase)

**Pagamentos:**
- Mercado Pago
- Stripe
- PagSeguro
- Pix (diversos bancos)

**Automação:**
- n8n
- Zapier
- Make (Integromat)
- Webhooks customizados

**Outros:**
- Google Calendar
- Google Meet/Zoom
- Marketing (RD Station, Mailchimp)
- Analytics (Google Analytics)

**Status por integração:**
- Ícone da integração
- Nome e descrição
- Status (conectado/pendente/erro)
- Última sincronização
- Ações (configurar, reconectar, desconectar)

#### 7.4 Gestão de Usuários
**Rota:** `/configuracoes/usuarios`  
**Status:** MVP  
**Descrição:** Administrar usuários do sistema

**Lista de Usuários:**
- Avatar + Nome
- Email
- Cargo/função
- Status (ativo/inativo)
- Último acesso
- Ações (editar, desativar, excluir)

**Filtros:**
- Status
- Perfil/permissão
- Departamento
- Busca por nome/email

#### 7.5 Permissões e Perfis
**Rota:** `/configuracoes/permissoes`  
**Status:** MVP  
**Descrição:** Configurar níveis de acesso

**Perfis Padrão:**
- Proprietário (acesso total)
- Administrador (gerencia usuários)
- Gerente (acessa relatórios)
- Operador (operações diárias)
- Visualizador (somente leitura)

**Matriz de Permissões:**
```
                  Criar  Ler  Editar  Excluir
Clientes          [✓]   [✓]   [✓]     [✗]
Agendamentos      [✓]   [✓]   [✓]     [✓]
Financeiro        [✗]   [✓]   [✗]     [✗]
Configurações     [✗]   [✗]   [✗]     [✗]
```

#### 7.6 Planos e Cobrança
**Rota:** `/configuracoes/cobranca`  
**Status:** MVP  
**Descrição:** Gerenciamento de assinatura

**Seções:**
- Plano atual e recursos
- Uso do plano (gráfico/barra)
- Histórico de faturas
- Método de pagamento
- Próxima cobrança
- Opções de upgrade/downgrade

#### 7.7 Notificações
**Rota:** `/configuracoes/notificacoes`  
**Status:** MVP  
**Descrição:** Preferências de notificação do usuário

**Canais:**
- Notificações no app
- Email
- WhatsApp
- Push no navegador

**Eventos Configuráveis:**
- Novo agendamento
- Cancelamento
- Lembrete de tarefa
- Relatórios prontos
- Alertas do sistema
- Novos insights MEL
- Atualizações de pagamento

#### 7.8 Personalização Visual
**Rota:** `/configuracoes/personalizacao`  
**Status:** Futuro  
**Descrição:** Customizar aparência do sistema

**Opções:**
- Tema (claro/escuro/auto)
- Cor primária (seletor de cor)
- Cor secundária
- Tipografia (fonte)
- Densidade da interface (compacto/confortável)
- Sidebar colapsada por padrão
- Dashboard personalizado

#### 7.9 Backup e Segurança
**Rota:** `/configuracoes/seguranca`  
**Status:** Futuro  
**Descrição:** Configurações de segurança e backup

**Backup:**
- Frequência automática
- Download manual
- Restaurar backup
- Histórico de backups

**Segurança:**
- Autenticação de dois fatores (2FA)
- Sessões ativas
- Histórico de login
- IP permitidos/bloqueados
- Política de senha

#### 7.10 Logs e Auditoria
**Rota:** `/configuracoes/auditoria`  
**Status:** Futuro  
**Descrição:** Registro de atividades do sistema

**Filtros:**
- Usuário
- Ação (criar, editar, excluir, login)
- Módulo
- Data
- Severidade

**Colunas:**
- Timestamp
- Usuário
- Ação
- Módulo afetado
- IP
- Detalhes (expandir)

---

### 8. Formulários de Configurações

#### 8.1 Perfil da Empresa
**Tela:** Perfil da Empresa  
**Status:** MVP

**Seção: Dados Básicos**
| Campo | Tipo | Obrigatório | Validação |
|-------|------|-------------|-----------|
| Nome Fantasia | Text | Sim | Máx 100 caracteres |
| Razão Social | Text | Não | Máx 150 caracteres |
| CNPJ | Masked Input | Sim | Formato XX.XXX.XXX/XXXX-XX |
| Inscrição Estadual | Text | Não | - |
| Inscrição Municipal | Text | Não | - |
| Data de Fundação | Date | Não | - |

**Seção: Endereço**
| Campo | Tipo | Obrigatório | Observação |
|-------|------|-------------|------------|
| CEP | Masked Input | Sim | Busca automática ViaCEP |
| Logradouro | Text | Sim | Auto-preenchido pelo CEP |
| Número | Text | Sim | - |
| Complemento | Text | Não | - |
| Bairro | Text | Sim | Auto-preenchido |
| Cidade | Text | Sim | Auto-preenchido |
| Estado | Select | Sim | Auto-preenchido |
| País | Select | Sim | Default: Brasil |

**Seção: Contato**
| Campo | Tipo | Obrigatório | Máscara |
|-------|------|-------------|---------|
| Telefone Fixo | Masked Input | Não | (XX) XXXX-XXXX |
| WhatsApp | Masked Input | Sim | (XX) XXXXX-XXXX |
| Email | Email | Sim | - |
| Website | URL | Não | - |
| Instagram | Text | Não | @usuario |
| Facebook | URL | Não | - |
| LinkedIn | URL | Não | - |

**Seção: Dados Fiscais**
| Campo | Tipo | Obrigatório | Opções |
|-------|------|-------------|--------|
| Regime Tributário | Select | Sim | Simples Nacional, Lucro Presumido, Lucro Real |
| CNAE Principal | Search/Select | Não | Busca na tabela CNAE |
| Alíquota Simples | Percent | Não | Se SN |
| Certificado Digital | File Upload | Não | .pfx ou .p12 |
| Senha Certificado | Password | Não | Se houver certificado |

**Seção: Imagens**
| Campo | Tipo | Dimensões | Formatos |
|-------|------|-----------|----------|
| Logo Principal | Image Upload | 400x400px | PNG, JPG, SVG |
| Logo Ícone | Image Upload | 128x128px | PNG |
| Favicon | Image Upload | 32x32px | ICO, PNG |
| Capa de Relatórios | Image Upload | 1920x400px | JPG, PNG |

#### 8.2 Adicionar/Editar Usuário
**Tela:** Gestão de Usuários  
**Status:** MVP

| Campo | Tipo | Obrigatório | Validação |
|-------|------|-------------|-----------|
| Nome Completo | Text | Sim | Máx 100 caracteres |
| Email | Email | Sim | Único no sistema |
| Telefone | Masked Input | Não | (XX) XXXXX-XXXX |
| Cargo | Text | Não | - |
| Departamento | Select | Não | Lista configurável |
| Perfil de Acesso | Select | Sim | Perfis disponíveis |
| Avatar | Image Upload | Não | Opcional |
| Status | Toggle | Sim | Ativo/Inativo |
| Enviar email de convite | Toggle | Não | Para novos usuários |

#### 8.3 Criar/Editar Perfil de Permissões
**Tela:** Permissões  
**Status:** MVP

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| Nome do Perfil | Text | Sim | Ex: "Gerente de Vendas" |
| Descrição | Textarea | Não | Objetivo do perfil |
| Baseado em | Select | Não | Copiar de perfil existente |
| Permissões | Matrix | Sim | Grid de checkboxes |

**Matriz de Permissões (por módulo):**
```
Módulo: CLIENTES
☐ Acesso completo (marca todos)
☐ Visualizar lista
☐ Visualizar detalhes
☐ Criar novo
☐ Editar existente
☐ Excluir
☐ Exportar dados
☐ Importar dados
```

**Módulos Disponíveis:**
- Dashboard
- Agenda
- Clientes
- Vendas/POS
- Financeiro
- Estoque
- Serviços
- Colaboradores
- Fornecedores
- MEL (IA)
- Métricas
- Configurações

#### 8.4 Configurar Integração (WhatsApp)
**Tela:** Integrações  
**Status:** MVP

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| Número de Telefone | Masked Input | Sim | Com código do país |
| Nome da Sessão | Text | Sim | Identificação |
| Tipo de Conexão | Select | Sim | QR Code, API Oficial |
| Chave API | Text | Condicional | Se tipo = API |
| Token | Password | Condicional | Se tipo = API |
| Webhook URL | URL | Não | Para receber respostas |
| Limite de Mensagens/Dia | Number | Sim | Default: 1000 |

#### 8.5 Configurar Integração (Pagamento)
**Tela:** Integrações > Pagamentos  
**Status:** MVP

**Mercado Pago:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| Access Token | Password | Sim |
| Public Key | Text | Sim |
| Client ID | Text | Não |
| Client Secret | Password | Não |
| Modo | Select | Sim | Sandbox/Produção |
| Webhook Secret | Password | Não |

**Configurações Adicionais:**
| Campo | Tipo | Descrição |
|-------|------|-----------|
| Desconto para Pix | Percent | % de desconto |
| Parcelamento Máximo | Select | Até 12x |
| Juros após | Select | Sem juros até Xx |
| Antecipação de recebíveis | Toggle | - |

#### 8.6 Configurar SMTP (Email)
**Tela:** Integrações > Email  
**Status:** MVP

| Campo | Tipo | Obrigatório | Exemplo |
|-------|------|-------------|---------|
| Servidor SMTP | Text | Sim | smtp.gmail.com |
| Porta | Number | Sim | 587, 465 |
| Protocolo de Segurança | Select | Sim | TLS, SSL, Nenhum |
| Email de Envio | Email | Sim | noreply@empresa.com |
| Nome do Remetente | Text | Sim | Sua Empresa |
| Usuário SMTP | Text | Sim | Email ou usuário |
| Senha SMTP | Password | Sim | - |
| Testar conexão | Button | - | Envia email de teste |

#### 8.7 Configurar Webhook
**Tela:** Integrações > Webhooks  
**Status:** MVP

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| Nome do Webhook | Text | Sim | Identificação |
| URL de Destino | URL | Sim | Endpoint HTTPS |
| Eventos | Multi-select | Sim | Quando disparar |
| Método HTTP | Select | Sim | POST, PUT, PATCH |
| Headers Customizados | Key-Value | Não | Adicionais |
| Autenticação | Select | Não | Bearer, Basic, None |
| Token/Key | Password | Condicional | Se autenticação |
| Retry em falha | Toggle | Não | Tentar novamente |
| Número de retries | Number | Condicional | Máximo de tentativas |

**Eventos Disponíveis:**
- Novo cliente
- Agendamento criado/cancelado
- Venda realizada
- Pagamento confirmado
- Estoque alterado
- Usuário criado

---

### 9. Modais de Configurações

#### 9.1 Conectar WhatsApp (QR Code)
**Trigger:** Configurar WhatsApp  
**Tamanho:** Medium (500px)  
**Status:** MVP

**Conteúdo:**
- QR Code grande (atualiza a cada 30s)
- Instruções: "Abra WhatsApp no celular..."
- Status da conexão (conectando/erro/sucesso)
- Botão: Atualizar QR Code
- Link: "Problemas para conectar?"

**Estados:**
- Aguardando scan
- Conectando...
- Conectado! (com dados do número)
- Erro: Tempo expirado
- Erro: Conexão falhou

#### 9.2 Confirmar Exclusão de Usuário
**Trigger:** Excluir usuário  
**Tamanho:** Small (400px)  
**Status:** MVP

**Conteúdo:**
- ⚠️ Ícone de alerta
- "Tem certeza que deseja remover [Nome]?"
- Lista de implicações:
  - Acesso imediatamente revogado
  - Histórico mantido para auditoria
  - Ações não podem ser desfeitas
- Checkbox: "Entendo que esta ação é irreversível"
- Input de confirmação: "Digite DELETE para confirmar"

**Botões:**
- [Remover Usuário] - Destrutivo
- [Cancelar] - Terciário

#### 9.3 Alterar Plano
**Trigger:** Upgrade/downgrade  
**Tamanho:** Large (900px)  
**Status:** MVP

**Conteúdo:**
- Comparativo de planos (cards lado a lado)
- Plano atual destacado
- Features de cada plano (✓/✗)
- Preços
- Cálculo de pró-rata
- Data da mudança (próxima cobrança ou imediato)

**Botões:**
- [Escolher Plano X] - Primário no selecionado
- [Manter Atual] - Terciário

#### 9.4 Detalhes do Erro de Integração
**Trigger:** Clique em status de erro  
**Tamanho:** Medium (600px)  
**Status:** MVP

**Conteúdo:**
- Tipo de erro
- Mensagem técnica
- Código HTTP (se aplicável)
- Timestamp
- Stack trace (collapsible)
- Tentativas de retry
- Sugestão de solução

**Botões:**
- [Tentar Reconectar] - Primário
- [Ver Documentação] - Secundário
- [Fechar] - Terciário

#### 9.5 Configurar Permissões em Lote
**Trigger:** Ação em múltiplos usuários  
**Tamanho:** Large (800px)  
**Status:** MVP

**Conteúdo:**
- Lista de usuários selecionados
- Perfil atual de cada um
- Select: Novo perfil
- Matrix de ajustes específicos
- Preview das mudanças

**Botões:**
- [Aplicar a Todos] - Primário
- [Cancelar] - Terciário

#### 9.6 Visualizar Sessões Ativas
**Trigger:** Segurança > Sessões  
**Tamanho:** Medium (700px)  
**Status:** Futuro

**Conteúdo:**
- Lista de dispositivos logados
- Dispositivo atual destacado
- Informações: navegador, SO, IP, localização
- Quando iniciou
- Botão "Encerrar" por sessão
- Botão "Encerrar Todas as Outras"

#### 9.7 Importar Dados
**Trigger:** Botão de importação  
**Tamanho:** Large (800px)  
**Status:** Futuro

**Wizard (3 passos):**
1. Selecionar arquivo (CSV, XLS, XLSX)
2. Mapear colunas
3. Preview e confirmar

**Conteúdo:**
- Upload de arquivo
- Template para download
- Mapeamento de campos
- Validação de dados
- Contagem de registros válidos/inválidos
- Resultado da importação

#### 9.8 Gerenciar API Keys
**Trigger:** Configurações > API  
**Tamanho:** Medium (600px)  
**Status:** Futuro

**Conteúdo:**
- Lista de chaves existentes
- Criar nova chave
- Nome e permissões da chave
- Mostrar chave (uma vez)
- Revogar chave
- Histórico de uso

---

### 10. Componentes Específicos de Configurações

#### 10.1 Card de Integração
```
┌─────────────────────────────────────┐
│  [LOGO]  Nome da Integração    [●] │
│  Descrição breve...                 │
│                                     │
│  Status: Conectado ✓                │
│  Última sync: 2 min atrás           │
│                                     │
│  [Configurar] [Desconectar]         │
└─────────────────────────────────────┘
```

**Estados:**
- Conectado (verde)
- Desconectado (cinza)
- Erro (vermelho)
- Configurando (amarelo/loading)

#### 10.2 Permission Toggle Matrix
```
┌────────────────────────────────────────────┐
│              │ Criar │ Ler │ Editar │ Exc │
├──────────────┼───────┼─────┼────────┼─────┤
│ Clientes     │   ☑   │  ☑  │   ☑    │  ☐  │
│ Agendamentos │   ☑   │  ☑  │   ☑    │  ☑  │
│ Financeiro   │   ☐   │  ☑  │   ☐    │  ☐  │
│ ...          │       │     │        │     │
└────────────────────────────────────────────┘
```

**Features:**
- Checkbox em células
- Toggle de linha inteira
- Indicador de herança
- Destaque para permissões críticas

#### 10.3 User List Item
```
┌─────────────────────────────────────┐
│ [👤] Nome do Usuário           [●] │
│      email@exemplo.com              │
│      Administrador • Último: ontem  │
│                              [⋯]   │
└─────────────────────────────────────┘
```

**Ações no menu (⋯):**
- Editar
- Reenviar convite
- Desativar
- Excluir
- Ver atividades

#### 10.4 Plan Card
```
┌─────────────────────────────────────┐
│  PLANO BÁSICO                       │
│  R$ 49/mês                          │
│  ─────────────────                  │
│  ✓ Até 500 clientes                 │
│  ✓ 2 usuários                       │
│  ✓ Relatórios básicos               │
│  ✗ MEL IA                           │
│  ✗ Integrações avançadas            │
│                                     │
│  [Escolher Plano]                   │
└─────────────────────────────────────┘
```

**Variantes:**
- Destacado (plano recomendado)
- Atual (indicador "Seu plano")
- Desabilitado (indisponível)

#### 10.5 File Upload Zone
```
┌─────────────────────────────────────┐
│                                     │
│      [Ícone Upload]                 │
│                                     │
│   Arraste arquivos ou clique        │
│   para fazer upload                 │
│                                     │
│   PNG, JPG até 5MB                  │
│                                     │
└─────────────────────────────────────┘
```

**Estados:**
- Vazio
- Drag over
- Uploading (progress bar)
- Success (preview)
- Error

#### 10.6 Color Theme Selector
```
┌─────────────────────────────────────┐
│  Tema Principal                     │
│                                     │
│  (●)  (○)  (○)  (○)  (○)  (+)      │
│   🔵   🟢   🟡   🟠   🔴  Custom    │
│                                     │
│  Preview:                           │
│  ┌─────────┐                        │
│  │  [Button]  │                     │
│  └─────────┘                        │
└─────────────────────────────────────┘
```

---

## PARTE 3: MÉTRICAS E ANALYTICS

### 11. Resumo do Módulo

**Nome:** Métricas e Analytics  
**Propósito:** Visualizar dados de desempenho e tomar decisões baseadas em dados  
**Status:** MVP com dashboards essenciais, relatórios avançados em futuro  
**Usuários:** Proprietários, gerentes, administradores  

**Funcionalidades Principais:**
- Dashboard consolidado de resultados
- Relatórios detalhados por módulo
- Gráficos e visualizações interativas
- Exportação de dados
- Comparativos e tendências
- Metas e acompanhamento

---

### 12. Telas de Métricas

#### 12.1 Dashboard Principal
**Rota:** `/metricas/dashboard`  
**Status:** MVP  
**Descrição:** Visão geral dos principais indicadores

**KPIs em Cards (topo):**
- Faturamento do período
- Total de vendas
- Ticket médio
- Novos clientes
- Taxa de conversão
- Comparativo vs período anterior

**Seções:**

**Gráfico de Faturamento (área/linha)**
- Período selecionável
- Comparativo com período anterior
- Filtro por: dia, semana, mês

**Top Produtos/Serviços (barras horizontais)**
- Por quantidade
- Por faturamento

**Distribuição de Vendas (pizza/donut)**
- Por categoria
- Por canal
- Por colaborador

**Tendências Recentes**
- Gráfico de linha com múltiplas séries
- Vendas, clientes, agendamentos

**Tabela: Últimas Transações**
- Resumo das últimas 10 vendas
- Link para detalhes

#### 12.2 Relatório de Vendas
**Rota:** `/metricas/vendas`  
**Status:** MVP  
**Descrição:** Análise detalhada de vendas

**Filtros:**
- Período
- Canal de venda
- Categoria de produto/serviço
- Colaborador
- Cliente (específico ou tipo)
- Forma de pagamento

**Visualizações:**

**Gráfico de Vendas ao Longo do Tempo**
- Tipo: Linha ou área
- Agrupamento: dia/semana/mês

**Vendas por Categoria (barras)**
- Comparativo visual
- Valor e quantidade

**Vendas por Canal (pizza)**
- Online, presencial, telefone, etc

**Tabela Detalhada**
- Data/hora
- Cliente
- Produtos/Serviços
- Valor total
- Desconto
- Forma de pagamento
- Colaborador
- Status

**Ações:**
- Exportar CSV/Excel
- Exportar PDF
- Imprimir
- Salvar filtro

#### 12.3 Relatório Financeiro
**Rota:** `/metricas/financeiro`  
**Status:** MVP  
**Descrição:** Análise de fluxo de caixa e finanças

**Resumo Financeiro (cards):**
- Receitas do período
- Despesas do período
- Lucro/prejuízo
- Saldo atual
- Projeção

**Gráficos:**
- Fluxo de caixa (receitas vs despesas - linhas)
- Distribuição de despesas por categoria
- Evolução do saldo
- Formas de pagamento mais usadas

**Tabela de Movimentações:**
- Data
- Descrição
- Categoria
- Tipo (entrada/saída)
- Valor
- Status (confirmado/pendente)
- Anexos

#### 12.4 Relatório de Clientes
**Rota:** `/metricas/clientes`  
**Status:** MVP  
**Descrição:** Análise de base de clientes

**Métricas:**
- Total de clientes ativos
- Novos clientes no período
- Taxa de retenção
- Churn rate
- Ticket médio por cliente
- Clientes inativos

**Gráficos:**
- Evolução da base (linha)
- Clientes por faixa etária (barras)
- Clientes por bairro/região (mapa ou lista)
- Distribuição por gênero (pizza)
- Clientes por canal de aquisição

**Segmentação:**
- Clientes VIP (top 20%)
- Clientes em risco de churn
- Clientes inativos
- Clientes recorrentes

**Tabela de Clientes:**
- Nome
- Contato
- Total gasto
- Última compra
- Frequência
- Status

#### 12.5 Relatório de Agendamentos
**Rota:** `/metricas/agendamentos`  
**Status:** MVP  
**Descrição:** Análise de produtividade e ocupação

**Métricas:**
- Total de agendamentos
- Taxa de comparecimento
- Taxa de cancelamento
- Tempo médio de espera
- Ocupação da agenda
- Receita de agendamentos

**Gráficos:**
- Agendamentos por dia da semana
- Horários mais populares (heatmap)
- Comparecimento vs faltas
- Cancelamentos por motivo
- Ocupação por colaborador

**Tabela:**
- Data/hora
- Cliente
- Serviço
- Colaborador
- Duração
- Valor
- Status

#### 12.6 Relatório de Produtos/Estoque
**Rota:** `/metricas/produtos`  
**Status:** MVP  
**Descrição:** Análise de desempenho de produtos

**Métricas:**
- Produtos mais vendidos
- Produtos com maior margem
- Giro de estoque
- Produtos parados
- Produtos em falta
- Valor total em estoque

**Gráficos:**
- Top 10 produtos (barras)
- Curva ABC (pizza)
- Evolução de vendas por produto
- Estoque mínimo vs atual

**Tabela:**
- SKU/Código
- Nome
- Categoria
- Qtd vendida
- Estoque atual
- Valor em estoque
- Dias de estoque
- Status

#### 12.7 Relatório de Colaboradores
**Rota:** `/metricas/colaboradores`  
**Status:** Futuro  
**Descrição:** Desempenho individual e comparativo

**Métricas por colaborador:**
- Total atendimentos
- Receita gerada
- Ticket médio
- Taxa de conversão
- Nota de avaliação
- Ocupação

**Comparativos:**
- Ranking de vendas
- Ranking de avaliações
- Evolução individual
- Comparativo entre períodos

#### 12.8 Análise de Crescimento
**Rota:** `/metricas/crescimento`  
**Status:** Futuro  
**Descrição:** Tendências e projeções

**Indicadores:**
- Taxa de crescimento MoM (mês sobre mês)
- Taxa de crescimento YoY (ano sobre ano)
- CAGR (crescimento anual composto)
- Tendências de sazonalidade
- Projeções futuras

**Gráficos:**
- Linha de crescimento com tendência
- Comparativo com mercado (se disponível)
- Crescimento por métrica

#### 12.9 Comparativo Período a Período
**Rota:** `/metricas/comparativo`  
**Status:** Futuro  
**Descrição:** Comparação detalhada entre períodos

**Interface:**
- Seletor de período 1
- Seletor de período 2
- Tabela comparativa lado a lado
- Indicadores de variação (↑↓)

**Métricas comparáveis:**
- Receita
- Vendas
- Clientes
- Agendamentos
- Ticket médio
- Todas as métricas principais

#### 12.10 Metas e Realizado
**Rota:** `/metricas/metas`  
**Status:** Futuro  
**Descrição:** Acompanhamento de metas estabelecidas

**Visualização:**
- Cards de meta com progresso (%)
- Gráfico de evolução
- Comparativo realizado vs meta
- Tendência de cumprimento

**Metas por tipo:**
- Faturamento
- Quantidade de vendas
- Novos clientes
- Taxa de conversão
- Ticket médio
- Agendamentos

---

### 13. Formulários/Modais de Métricas

#### 13.1 Selecionar Período do Relatório
**Tela:** Todos os relatórios  
**Tipo:** Inline/Modal  
**Status:** MVP

| Campo | Tipo | Obrigatório | Opções |
|-------|------|-------------|--------|
| Período Rápido | Select | Não | Hoje, Ontem, Últimos 7 dias, Este mês, Mês passado, Este ano, Ano passado, Personalizado |
| Data Início | Date | Condicional | Se personalizado |
| Data Fim | Date | Condicional | Se personalizado |
| Comparar com | Select | Não | Período anterior, Mesmo período ano anterior, Não comparar |

#### 13.2 Configurar Meta
**Tela:** Metas  
**Tipo:** Formulário  
**Status:** Futuro

| Campo | Tipo | Obrigatório | Opções |
|-------|------|-------------|--------|
| Tipo de Meta | Select | Sim | Faturamento, Vendas, Clientes, Ticket Médio, Agendamentos |
| Valor da Meta | Currency/Number | Sim | - |
| Período | Select | Sim | Diária, Semanal, Mensal, Trimestral, Anual |
| Data de Início | Date | Sim | - |
| Data de Término | Date | Sim | - |
| Responsável | Select | Não | Usuário ou "Todos" |
| Categoria | Select | Não | Se aplicável ao tipo |
| Alerta próximo | Percent | Não | Alertar quando atingir X% |
| Cor/Ícone | Color Picker | Não | Personalização visual |

#### 13.3 Exportar Relatório
**Trigger:** Botão exportar  
**Tipo:** Modal  
**Status:** MVP

| Campo | Tipo | Obrigatório | Opções |
|-------|------|-------------|--------|
| Formato | Select | Sim | PDF, Excel (XLSX), CSV, JSON |
| Período | Select | Sim | Manter atual, Últimos 30 dias, Todo período |
| Dados a incluir | Multi-select | Sim | Resumo, Gráficos, Tabela detalhada |
| Layout PDF | Select | Condicional | Retrato, Paisagem |
| Email para envio | Email | Não | Opcional |
| Agendar envio | Toggle | Não | Enviar periodicamente |
| Frequência | Select | Condicional | Diário, Semanal, Mensal |

#### 13.4 Salvar Filtro Personalizado
**Trigger:** Botão salvar filtros  
**Tipo:** Modal  
**Status:** MVP

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| Nome do Filtro | Text | Sim |
| Descrição | Textarea | Não |
| Público | Toggle | Sim (compartilhar com equipe) |
| Definir como padrão | Toggle | Não |

#### 13.5 Compartilhar Dashboard
**Trigger:** Botão compartilhar  
**Tipo:** Modal  
**Status:** Futuro

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| Tipo de Compartilhamento | Select | Sim | Link público, Email específico, Usuário do sistema |
| Destinatários | Multi-select | Condicional | Usuários ou emails |
| Permissão | Select | Sim | Visualizar apenas, Interagir (filtros) |
| Expira em | Select | Não | 1 dia, 7 dias, 30 dias, Nunca |
| Incluir dados sensíveis | Toggle | Não | - |
| Mensagem | Textarea | Não | - |

#### 13.6 Agendar Relatório
**Trigger:** Agendar envio  
**Tipo:** Modal/Wizard  
**Status:** Futuro

| Campo | Tipo | Obrigatório | Opções |
|-------|------|-------------|--------|
| Relatório | Select | Sim | Lista de relatórios disponíveis |
| Frequência | Select | Sim | Diário, Semanal, Mensal, Trimestral |
| Dia da semana | Multi-select | Condicional | Se semanal |
| Dia do mês | Number | Condicional | Se mensal |
| Horário | Time | Sim | - |
| Formato | Select | Sim | PDF, Excel |
| Destinatários | Multi-select | Sim | Usuários do sistema |
| Assunto do email | Text | Sim | - |
| Mensagem | Textarea | Não | - |
| Próximo envio | DateTime | Auto | Calculado |

---

### 14. Componentes de Gráficos

#### 14.1 KPI Card
```
┌─────────────────────────────────────┐
│  📈 Faturamento                     │
│                                     │
│  R$ 45.230,00                       │
│  ─────────────                      │
│  ↑ 12% vs mês passado              │
│                                     │
│  Meta: R$ 50.000 (90%)             │
└─────────────────────────────────────┘
```

**Variantes:**
- Com progress bar
- Com sparkline (mini gráfico)
- Com ações (drill-down)
- Tamanhos: small, medium, large

**Cores de tendência:**
- Positivo: Verde
- Negativo: Vermelho
- Neutro: Cinza
- Alerta: Amarelo

#### 14.2 Gráfico de Linha/Área
**Uso:** Tendências ao longo do tempo

**Features:**
- Múltiplas séries
- Tooltip ao hover
- Zoom/pan
- Legenda interativa (toggle séries)
- Exportar como imagem
- Responsivo

**Configurações:**
- Eixo Y: Valor
- Eixo X: Tempo (dia/semana/mês/ano)
- Granularidade ajustável

#### 14.3 Gráfico de Barras
**Uso:** Comparativos categóricos

**Variantes:**
- Vertical (categorias no X)
- Horizontal (categorias no Y) - bom para nomes longos
- Agrupado (comparar múltiplas séries)
- Empilhado (composição)

**Features:**
- Rótulos de valor
- Cores por categoria
- Ordenação
- Drill-down (clicar expande)

#### 14.4 Gráfico de Pizza/Donut
**Uso:** Distribuição percentual

**Variantes:**
- Pizza tradicional
- Donut (com espaço no centro para total)
- Meia-lua (para gauges)

**Features:**
- Legenda com porcentagens
- Destaque ao hover
- Limite de fatias (agrupar "outros")
- Cores configuráveis

#### 14.5 Heatmap
**Uso:** Densidade/concentração

**Exemplo:** Horários de agendamento
```
        Seg  Ter  Qua  Qui  Sex
09:00   ███  ██   ███  █    ███
10:00   █    ███  ██   ███  █
11:00   ██   █    █    ██   ███
```

**Cores:** Gradiente de intensidade

#### 14.6 Tabela de Dados
**Features:**
- Ordenação por coluna
- Paginação
- Busca/filtro
- Colunas redimensionáveis
- Exportar
- Linha expansível (detalhes)
- Seleção múltipla
- Ações por linha

#### 14.7 Indicador de Tendência
```
┌─────────┐
│   ↑    │
│  15%   │
│ vs ontem│
└─────────┘
```

**Cores:**
- ↑ Verde (positivo)
- ↓ Vermelho (negativo)
- → Cinza (estável)

#### 14.8 Date Range Picker
```
┌──────────────────────────────────────────┐
│  [📅]  01/01/2024  -  31/01/2024    [▼] │
└──────────────────────────────────────────┘
```

**Features:**
- Seleção de período predefinido
- Calendário duplo
- Comparativo automático
- Atalhos rápidos
- Validação de intervalo

#### 14.9 Filtros Avançados
```
┌─────────────────────────────────────┐
│ [Filtros ativos: 3]          [x]   │
│                                     │
│ Categoria: [Vendas ▼]          [x] │
│ Período: [Este mês ▼]          [x] │
│ Status: [Concluído ▼]          [x] │
│                                     │
│ [+ Adicionar filtro]                │
│ [Limpar tudo]  [Aplicar]            │
└─────────────────────────────────────┘
```

**Features:**
- Múltiplos filtros
- Operadores (igual, diferente, contém, etc)
- Filtros salvos
- Sugestões baseadas em dados

#### 14.10 Gráfico de Velocímetro/Gauge
**Uso:** Progresso em relação à meta

```
      0%
       │
   ╭───┴───╮
  ╱    │    ╲
 │     ●──────► 75%
  ╲         ╱
   ╰───────╯
     100%
```

**Cores:**
- Vermelho: 0-50%
- Amarelo: 51-80%
- Verde: 81-100%

---

## PARTE 4: COMUNS

### 15. Estados de UI

#### 15.1 Estados de Carregamento

**Skeleton Loading:**
```
┌─────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░  ░░░░░░░░░░░░  │
│ ░░░░░░░░░░░░░░░░░░                │
│                                   │
│ ░░░░░░░░░  ░░░░░░░░░  ░░░░░░░░░   │
│ ░░░░░░░░░  ░░░░░░░░░  ░░░░░░░░░   │
│ ░░░░░░░░░  ░░░░░░░░░  ░░░░░░░░░   │
└─────────────────────────────────────┘
```

**Uso em:**
- Dashboard MEL
- Relatórios
- Listas de dados
- Cards de integração

**Spinner/Loading:**
- Indicadores em botões de ação
- Loading em modais de confirmação
- Progresso de upload/importação

#### 15.2 Estados Vazios

**Sem Insights (MEL):**
```
┌─────────────────────────────────────┐
│                                     │
│           [🤖 ilustração]           │
│                                     │
│      A MEL está aprendendo...       │
│                                     │
│  Assim que houver dados suficientes │
│  insights aparecerão aqui.          │
│                                     │
│      [Configurar MEL]               │
│                                     │
└─────────────────────────────────────┘
```

**Sem Notificações:**
- Ícone de sino vazio
- "Nenhuma notificação enviada ainda"
- CTA: Criar primeiro cenário

**Sem Dados (Relatórios):**
- Ícone de gráfico vazio
- "Nenhum dado para o período selecionado"
- Sugestão de ajustar filtros

#### 15.3 Estados de Erro

**Erro de Conexão:**
```
┌─────────────────────────────────────┐
│                                     │
│           [⚠️ ícone]                │
│                                     │
│      Não foi possível conectar      │
│                                     │
│  Verifique sua conexão com a        │
│  internet e tente novamente.        │
│                                     │
│      [Tentar Novamente]             │
│                                     │
└─────────────────────────────────────┘
```

**Erro na Integração:**
- Banner vermelho no topo
- Detalhes do erro
- CTA para reconectar
- Link para documentação

**Erro de Permissão:**
- Ícone de cadeado
- "Você não tem permissão"
- Contatar administrador

#### 15.4 Estados de Sucesso

**Toast/Notificações:**
- Mensagem breve no canto
- Ícone de checkmark
- Auto-dismiss em 3-5s
- Ação de desfazer (quando aplicável)

**Confirmação em Modais:**
- Animação de checkmark
- Mensagem de confirmação
- Próximos passos sugeridos

#### 15.5 Estados de Confirmação

**Ações Destrutivas:**
- Modal de confirmação obrigatório
- Texto de confirmação (digitar DELETE)
- Lista de impactos
- Botão vermelho

**Ações Importantes:**
- Modal de confirmação
- Resumo do que será feito
- Checkbox de entendimento
- Botão primário

#### 15.6 Estados de Processamento

**Progresso em Andamento:**
- Barra de progresso
- Porcentagem
- ETA (tempo estimado)
- Cancelar (se aplicável)

**Fila de Processamento:**
- Posição na fila
- Itens à frente
- Tempo estimado de espera

### 16. Integrações

#### 16.1 Integração MEL ↔ Configurações

**Fluxos:**
1. MEL usa configurações de:
   - Perfil da empresa (nome, logo em mensagens)
   - Integrações (canais de envio)
   - Usuários (quem recebe notificações internas)
   - Permissões (quem pode ver/configurar MEL)

2. Configurações impactam MEL:
   - Integração WhatsApp habilita envio por WhatsApp
   - Configurações regionais afetam formato de data/moeda
   - Permissões controlam acesso às telas MEL

#### 16.2 Integração Métricas ↔ Módulos

**Fontes de Dados:**
- Vendas → Módulo Vendas/POS
- Clientes → Módulo Clientes
- Agendamentos → Módulo Agenda
- Financeiro → Módulo Financeiro
- Estoque → Módulo Produtos/Estoque
- Colaboradores → Módulo Colaboradores

**Atualização:**
- Tempo real (websockets) para dashboard
- Agendada para relatórios detalhados
- Cache para performance

#### 16.3 Integração MEL ↔ Métricas

**Fluxos:**
1. MEL gera dados para métricas:
   - Taxa de conversão de insights
   - Efetividade de cenários
   - Volume de automações
   - ROI da IA

2. Métricas alimentam MEL:
   - Dados históricos para análise preditiva
   - Padrões identificados
   - Sugestões de otimização

#### 16.4 Integração entre Módulos

**Configurações como Hub Central:**
- Todas as integrações configuradas em Configurações
- Dados da empresa usados em todos os módulos
- Permissões controlam acesso entre módulos
- Notificações configuradas afetam todos

**APIs e Webhooks:**
- Configurados em Configurações
- Disparados por eventos em todos os módulos
- Métricas podem ser exportadas via API
- MEL pode receber webhooks externos

---

## RESUMO EXECUTIVO

### Contagem Total

| Categoria | Quantidade |
|-----------|------------|
| **MEL - Telas** | 8 |
| **MEL - Formulários** | 4 |
| **MEL - Modais** | 8 |
| **MEL - Componentes** | 8 |
| **Config - Telas** | 10 |
| **Config - Formulários** | 7 |
| **Config - Modais** | 8 |
| **Config - Componentes** | 5 |
| **Métricas - Telas** | 10 |
| **Métricas - Formulários** | 6 |
| **Métricas - Componentes** | 10 |
| **Comuns - Estados** | 6 |

**Total: 90+ elementos de UI documentados**

### Priorização MVP

**Must Have (MVP):**
- ✅ Dashboard MEL
- ✅ Central de Insights
- ✅ Configurações MEL básicas
- ✅ Cenários de automação (simples)
- ✅ Histórico de notificações
- ✅ Templates de mensagens
- ✅ Perfil da empresa
- ✅ Configurações gerais
- ✅ Integrações (WhatsApp, Pagamentos)
- ✅ Gestão de usuários e permissões
- ✅ Dashboard de métricas
- ✅ Relatórios de vendas, financeiro, clientes
- ✅ Exportação básica

**Should Have (Pós-MVP):**
- 📋 Treinamento da IA
- 📋 Relatórios proativos agendados
- 📋 Personalização visual
- 📋 Backup e segurança
- 📋 Relatórios de colaboradores
- 📋 Análise de crescimento
- 📋 Metas e realizado

**Nice to Have (Futuro):**
- 🔮 Logs de auditoria completos
- 🔮 APIs avançadas
- 🔮 Machine learning customizado
- 🔮 Relatórios preditivos
- 🔮 Benchmarks com mercado

---

*Documento criado em: Março 2026*  
*Versão: 1.0*  
*Responsável: Arquitetura de UI - UNIQ*
