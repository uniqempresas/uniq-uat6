# SPEC - Módulo Chatbot (Sprint 12)

## 1. Visão Geral do Módulo
Módulo de gerenciamento de conversas e configurações do chatbot para o painel administrativo da UNIQ Empresas. O módulo apresenta uma interface estilo WhatsApp Web para visualização e interação com conversas de clientes, além de painéis para configuração de respostas automáticas, FAQ e palavras-chave.

## 2. Stack Tecnológico
- **Frontend**: React 19 + TypeScript
- **Build**: Vite
- **Estilização**: Tailwind CSS + shadcn/ui
- **Roteamento**: React Router v7
- **Ícones**: Lucide React
- **Datas**: date-fns

## 3. Estrutura de Arquivos
Todos os arquivos devem ser criados dentro de `src/app/`.

### 3.1 Diretórios
```
src/app/
├── components/
│   └── chatbot/
│       ├── ChatbotLayout.tsx        (Layout com menu lateral e área de chat)
│       ├── ChatList.tsx              (Lista de conversas)
│       ├── ChatWindow.tsx            (Área de mensagens)
│       ├── MessageBubble.tsx         (Bolha individual)
│       ├── ChatInput.tsx             (Campo de envio)
│       ├── ChatbotStats.tsx          (Dashboard de estatísticas)
│       ├── RespostasAutoList.tsx     (Lista de respostas)
│       ├── RespostaAutoForm.tsx      (Formulário de edição/criação)
│       ├── FAQEditor.tsx             (Gerenciador de FAQ)
│       └── PalavrasChaveEditor.tsx   (Gerenciador de palavras-chave)
├── hooks/
│   └── useChatbot.ts                 (Lógica de gerenciamento de conversas)
├── types/
│   └── chatbot.ts                    (Definições de tipos)
├── lib/
│   └── mocks/
│       └── chatbot.ts                (Dados de exemplo)
└── pages/
    └── chatbot/
        ├── ChatbotDashboardPage.tsx  (Visão geral / Stats)
        ├── ConversasPage.tsx          (Lista de conversas)
        ├── ConversaDetalhePage.tsx    (Chat específico)
        ├── ConfiguracoesPage.tsx     (Configurações gerais do bot)
        ├── RespostasAutoPage.tsx      (Gerenciar respostas)
        ├── FAQPage.tsx                (Gerenciar FAQ)
        └── EstatisticasPage.tsx       (Estatísticas detalhadas)
```

## 4. Tipos e Interfaces (TypeScript)

### `src/app/types/chatbot.ts`

```typescript
export type TipoMensagem = 'texto' | 'imagem' | 'arquivo';

export type StatusBot = 'online' | 'offline' | 'ocupado';

export interface Mensagem {
  id: string;
  conversaId: string;
  conteudo: string;
  tipo: TipoMensagem;
  isBot: boolean;
  timestamp: Date;
  lida: boolean;
  arquivoUrl?: string;
}

export interface Conversa {
  id: string;
  clienteNome: string;
  clienteAvatar?: string;
  ultimaMensagem: string;
  timestamp: Date;
  naoLidas: number;
  status: 'ativa' | 'encerrada';
}

export interface RespostaAuto {
  id: string;
  gatilho: string; // Texto que ativa
  resposta: string;
  ativa: boolean;
  delayMs: number; // Simulação de digitação
}

export interface FAQItem {
  id: string;
  pergunta: string;
  resposta: string;
  ordem: number;
}

export interface PalavraChave {
  id: string;
  palavra: string;
  acao: 'responder' | 'encaminhar' | 'silenciar';
  resposta?: string;
}

export interface ChatbotConfig {
  status: StatusBot;
  horarioFuncionamento: { inicio: string; fim: string };
  responderForaHorario: boolean;
  msgForaHorario: string;
}
```

## 5. Dados Mock (Mock Data)

### `src/app/lib/mocks/chatbot.ts`
Gerar 5 conversas de exemplo com históricos de mensagens variados (cliente e bot).
Gerar 10 respostas automáticas padrão.
Gerar 5 itens de FAQ.
Gerar 5 palavras-chave de exemplo.

## 6. Componentes Detalhados

### 6.1 ChatbotLayout
- Layout em duas colunas:
  - **Esquerda (30-35%)**: Barra de busca, abas (Conversas / Estatísticas), lista de conversas.
  - **Direita (65-70%)**: Área de chat (header com cliente, lista de mensagens, input).
- Responsividade: Empilha em mobile (listagem -> clique -> chat).

### 6.2 ChatList
- Busca por nome do cliente.
- Lista de `ConversaItem` (Avatar, Nome, Prévia da última mensagem, Timestamp, Badge de não lidas).
- Scroll虚拟izado se muitas conversas.

### 6.3 ChatWindow
- **Header**: Info do cliente, status, botão de opções (encaminhar, encerrar).
- **MessageArea**: Lista de `MessageBubble`.
  - Bolhas do cliente: Alinhamento direito, cor secundária.
  - Bolhas do bot: Alinhamento esquerdo, cor primary, ícone de robô.
- **ChatInput**: Campo de texto, botão de enviar, ícone de arquivo (simulado).

### 6.4 MessageBubble
- Suporte a texto simples.
- Exibição de timestamp (ex: "14:32").
- Status de "lida" (duplo check cinza/verde).

### 6.5 ChatbotStats
- Cards com: Conversas hoje, Mensagens hoje, Taxa de resolução自动.
- Gráfico simples de mensagens por dia (semanas).

### 6.6 RespostasAutoList
- Tabela ou lista de cartões.
- Colunas: Gatilho, Resposta, Ações (Editar, Deletar, Toggle Ativo).
- Botão flutuante "Nova Resposta".

### 6.7 FAQEditor
- Listagem de perguntas e respostas.
- Drag-and-drop para reordenar (opcional).
- Formulário inline ou modal para editar.

### 6.8 PalavrasChaveEditor
- Input de palavra-chave.
- Select de ação (responder automaticamente / marcar para revisão).
- Lista de regras ativas.

## 7. Hooks

### `useChatbot`
Gerencia o estado global do módulo.
- `conversas`: Lista de conversas.
- `conversaAtiva`: A conversa selecionada.
- `mensagens`: Mensagens da conversa ativa.
- `enviarMensagem(conteudo)`: Adiciona msg do admin.
- `marcarComoLida(conversaId)`: Remove badge.
- `buscarConversas(query)`: Filtro local.

### `useChatbotConfig`
Gerencia configurações.
- `config`: Objeto de configuração.
- `setStatus(status)`: Altera status do bot.
- `respostasAuto`: Lista de regras.
- `adicionarResposta(regra)`, `atualizarResposta(id, regra)`, `removerResposta(id)`.

## 8. Rotas

Adicionar ao `src/app/routes.tsx`:

```typescript
// Chatbot
{ path: "/chatbot", element: <Navigate to="/chatbot/dashboard" replace /> },
{ path: "/chatbot/dashboard", Component: ChatbotDashboardPage },
{ path: "/chatbot/conversas", Component: ConversasPage },
{ path: "/chatbot/conversas/:id", Component: ConversaDetalhePage },
{ path: "/chatbot/configuracoes", Component: ConfiguracoesPage },
{ path: "/chatbot/respostas", Component: RespostasAutoPage },
{ path: "/chatbot/faq", Component: FAQPage },
{ path: "/chatbot/estatisticas", Component: EstatisticasPage },
```

## 9. Regras de Negócio e Comportamento

1.  **Visual Estilo WhatsApp Web**:
    - Fundo de padrão leve (opcional).
    - Cores de bolha: Verde (enviada), Cinza (recebida), Branco (bot).
    - Tipografia clara e timestamps discretos.

2.  **Simulação de "Bot"**:
    - Quando o cliente envia uma mensagem, o sistema deve verificar se há resposta automática correspondente (por palavra-chave ou resposta rápida).
    - Se houver, exibir indicador de "digitando..." por `delayMs` configurado na regra, e então inserir a mensagem do bot.

3.  **Status do Bot**:
    - Indicador visual no header (Online: Verde, Offline: Cinza, Ocupado: Vermelho).
    - Configurável via `/chatbot/configuracoes`.

4.  **Navegação**:
    - Sidebar deve persistir (se usado) ou menu superior com abas.
    - Ao selecionar uma conversa na lista, redireciona para `/chatbot/conversas/:id` (ou atualiza estado se layout master-detail).

## 10. Critérios de Aceite
- [ ] Interface responsiva estilo WhatsApp Web.
- [ ] Lista de conversas atualiza em tempo real (mock).
- [ ]Envio de mensagens funciona e exibe no chat.
- [ ] Respostas automáticas funcionam com delay simulado.
- [ ] Página de configurações altera status visual.
- [ ] CRUD de Respostas Automáticas e FAQ é funcional.
- [ ] Tipos TypeScript estão strict e completos.
- [ ] Renderização sem erros no console.