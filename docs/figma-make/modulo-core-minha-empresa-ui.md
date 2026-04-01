# Módulo Core - Minha Empresa

> **Documentação de UI para Figma Make**  
> **Tela:** Configurações da Empresa  
> **Rota:** `/minha-empresa`  
> **Módulo:** Core (Configurações)  
> **Prioridade MVP:** ✅ Essencial

---

## 1. Metadados

| Campo | Valor |
|-------|-------|
| **Nome da Tela** | Minha Empresa |
| **Rota/URL** | `/minha-empresa` |
| **Objetivo Principal** | Permitir que o empreendedor configure os dados da empresa, personalize a identidade visual e visualize como sua loja virtual ficará para os clientes |
| **Permissões de Acesso** | Proprietário, Administrador |
| **Módulo/Pai** | Core - Configurações |
| **Prioridade MVP** | ✅ Essencial |

---

## 2. Contexto do Usuário

### 2.1 Quem Usa Esta Tela
- **Perfil:** Dono do negócio, MEI ou microempresário
- **Conhecimento técnico:** Baixo - não é familiarizado com configurações técnicas
- **Contexto de uso:** Usada no momento da configuração inicial da conta e ocasionalmente quando precisa atualizar dados da empresa ou personalizar a loja

### 2.2 Por Que Esta Tela Existe
- **Problema que resolve:** O empreendedor precisa de um lugar simples para cadastrar dados da empresa, endereço e personalizar a aparência da loja virtual sem precisar de ajuda técnica
- **Valor entregue:** Centralização de todas as configurações da empresa em um único lugar, com visualização em tempo real de como a loja ficará para os clientes
- **Frequência de uso:** Configuração inicial (obrigatória) e atualizações pontuais (mensal/ocasional)

### 2.3 User Stories Relacionadas
- "Como dono do negócio, quero cadastrar os dados da minha empresa para que meus clientes encontrem minha loja online"
- "Como empreendedor, quero fazer upload do logo da minha empresa para que minha loja virtual tenha identidade visual profissional"
- "Como usuário, quero que o endereço seja preenchido automaticamente ao digitar o CEP para não ter que digitar tudo manualmente"
- "Como lojista, quero escolher as cores da minha marca para que minha loja virtual tenha a cara do meu negócio"
- "Como empreendedor, quero ver uma prévia de como minha loja vai ficar para ter certeza que está do jeito que eu quero"

---

## 3. Elementos Obrigatórios (O Que DEVE Ter)

### 3.1 Dados a Exibir

#### Seção Dados da Empresa
- [ ] **Logo da empresa:** Imagem carregada pelo usuário ou ícone placeholder quando não houver logo
- [ ] **CNPJ:** Número formatado com máscara (XX.XXX.XXX/XXXX-XX) - campo bloqueado/não editável
- [ ] **Razão Social:** Nome formal da empresa cadastrada na Receita Federal
- [ ] **Nome Fantasia:** Nome comercial da empresa (como é conhecida)
- [ ] **Email da empresa:** Email principal para contato comercial
- [ ] **Telefone comercial:** Número de telefone/WhatsApp do negócio
- [ ] **Website:** URL do site da empresa (opcional)

#### Seção Preview da Loja (Card Lateral)
- [ ] **Logo da empresa:** Exibe o logo carregado ou placeholder
- [ ] **Nome da empresa:** Nome fantasia ou razão social
- [ ] **Status da loja:** Indicador visual "Aberto agora" (simulação)
- [ ] **Endereço formatado:** Logradouro, número, bairro, cidade/UF
- [ ] **Telefone comercial:** Formato clique para ligar
- [ ] **Link "Ver Loja":** Call-to-action para visualizar a loja completa

#### Seção Endereço
- [ ] **CEP:** Campo com máscara (XXXXX-XXX)
- [ ] **Logradouro:** Rua/Avenida/Travessa preenchido automaticamente
- [ ] **Número:** Número do endereço
- [ ] **Complemento:** Informações adicionais (sala, bloco, andar)
- [ ] **Bairro:** Bairro preenchido automaticamente
- [ ] **Cidade:** Cidade preenchida automaticamente
- [ ] **Estado:** UF preenchida automaticamente (dropdown selecionável)

#### Seção Cores da Marca
- [ ] **Cor Primária:** Cor principal da marca (usada em botões, destaques)
- [ ] **Cor Secundária:** Cor de apoio da marca (usada em elementos secundários)
- [ ] **Paleta sugerida atual:** Visualização das duas cores selecionadas
- [ ] **Chips de paletas predefinidas:** Sugestões rápidas de combinações (ex: "Azul + Verde", "Roxo + Laranja", "Preto + Dourado", "Vermelho + Cinza")

### 3.2 Funcionalidades Essenciais

#### Seção Dados da Empresa
- [ ] **Upload de logo:** Área de arrastar e soltar imagem (drag-and-drop) ou clicar para selecionar arquivo
- [ ] **Preview da imagem:** Exibição da logo carregada em tamanho reduzido
- [ ] **Remover logo:** Opção para remover a imagem e voltar ao estado vazio
- [ ] **Validação de formato:** Aceitar apenas imagens (JPG, PNG, SVG) com limite de tamanho (ex: 2MB)

#### Seção Preview da Loja
- [ ] **Atualização em tempo real:** Card se atualiza automaticamente conforme o usuário digita nos campos
- [ ] **Simulação de loja:** Mostra como a loja virtual aparecerá para clientes
- [ ] **Link para loja completa:** Botão que abre a loja virtual em nova aba

#### Seção Endereço
- [ ] **Busca automática por CEP:** Ao preencher o CEP válido, buscar endereço na API ViaCEP
- [ ] **Autopreenchimento:** Preencher automaticamente logradouro, bairro, cidade e estado
- [ ] **Edição manual:** Permitir que usuário edite campos preenchidos automaticamente se necessário
- [ ] **Indicador de carregamento:** Mostrar que está buscando dados durante a consulta do CEP

#### Seção Cores da Marca
- [ ] **Color picker:** Seletor visual de cores com controles intuitivos
- [ ] **Input HEX editável:** Campo de texto para digitar código hexadecimal diretamente
- [ ] **Preview ao vivo:** Mostrar imediatamente como as cores ficarão aplicadas no card de preview da loja
- [ ] **Sugestões de paletas:** Chips clicáveis que aplicam combinações de cores predefinidas
- [ ] **Validação de cor:** Aceitar apenas códigos HEX válidos

### 3.3 Campos de Formulário

| Campo | Tipo | Obrigatório | Validações |
|-------|------|-------------|------------|
| Logo da empresa | File upload | Não | Formatos: JPG, PNG, SVG. Tamanho máx: 2MB |
| CNPJ | Text (bloqueado) | Sim | Já preenchido no cadastro, não editável |
| Razão Social | Text | Sim | Mínimo 3 caracteres |
| Nome Fantasia | Text | Não | - |
| Email da empresa | Email | Sim | Formato de email válido |
| Telefone comercial | Tel | Sim | Mínimo 10 dígitos (com DDD) |
| Website | URL | Não | Formato de URL válido (se preenchido) |
| CEP | Text | Sim | Formato: XXXXX-XXX (8 dígitos) |
| Logradouro | Text | Sim | Preenchido automaticamente |
| Número | Text | Sim | - |
| Complemento | Text | Não | - |
| Bairro | Text | Sim | Preenchido automaticamente |
| Cidade | Text | Sim | Preenchido automaticamente |
| Estado | Select | Sim | Dropdown com UFs brasileiras |
| Cor Primária | Color + Text | Sim | Código HEX válido |
| Cor Secundária | Color + Text | Sim | Código HEX válido |

---

## 4. Elementos Opcionais (O Que PODE Ter)

### 4.1 Funcionalidades Adicionais
- [ ] **Crop de imagem:** Permitir ajustar/recortar o logo após upload
- [ ] **Múltiplos telefones:** Adicionar mais de um número de contato
- [ ] **Redes sociais:** Campos para Instagram, Facebook, LinkedIn da empresa
- [ ] **Descrição da empresa:** Texto curto sobre o negócio (para SEO da loja)
- [ ] **Horário de funcionamento:** Configurar dias e horários de atendimento
- [ ] **Salvar como rascunho:** Permitir salvar configurações incompletas

### 4.2 Dados Secundários
- [ ] **Data de criação da conta:** Quando a empresa foi cadastrada
- [ ] **Última atualização:** Quando os dados foram modificados pela última vez
- [ ] **Slug da loja:** Identificador único na URL da loja virtual

---

## 5. Ações Possíveis

### 5.1 Ações Primárias

1. **Salvar configurações:**
   - **Gatilho:** Botão principal visível na interface
   - **Resultado:** Valida todos os campos obrigatórios, salva os dados e exibe confirmação
   - **Confirmação:** Toast/mensagem "Dados salvos com sucesso!"
   - **Validação:** Bloqueia salvamento se houver campos obrigatórios vazios ou inválidos

2. **Fazer upload do logo:**
   - **Gatilho:** Clicar na área de dropzone ou botão "Selecionar arquivo"
   - **Resultado:** Abre seletor de arquivo do sistema, após seleção exibe preview
   - **Confirmação:** Preview da imagem aparece automaticamente
   - **Validação:** Verifica formato e tamanho do arquivo

3. **Buscar endereço por CEP:**
   - **Gatilho:** Botão "Buscar" ao lado do campo CEP ou automático ao sair do campo (blur)
   - **Resultado:** Consulta API ViaCEP e preenche campos de endereço
   - **Confirmação:** Campos preenchidos automaticamente
   - **Validação:** CEP deve ter 8 dígitos numéricos

4. **Alterar cores da marca:**
   - **Gatilho:** Interagir com color picker ou digitar código HEX
   - **Resultado:** Cor é aplicada imediatamente no preview da loja
   - **Confirmação:** Visual instantâneo no card de preview
   - **Validação:** Código HEX válido (#RRGGBB)

### 5.2 Ações Secundárias

1. **Remover logo:** Remove a imagem carregada e volta ao estado vazio
2. **Selecionar paleta sugerida:** Clica em um chip de cor para aplicar combinação predefinida
3. **Ver loja completa:** Abre a loja virtual em nova aba do navegador
4. **Cancelar alterações:** Descarta mudanças não salvas e restaura valores anteriores

### 5.3 Ações de Destruição

1. **Descartar alterações:**
   - **Gatilho:** Tentar sair da página com alterações não salvas
   - **Confirmação:** Modal de confirmação "Deseja sair sem salvar?"
   - **Mensagem:** "Você tem alterações não salvas. Deseja salvar antes de sair?"
   - **Opções:** "Salvar alterações", "Descartar", "Cancelar"

---

## 6. Estados da UI

### 6.1 Empty State - Sem Logo

**Quando aparece:** Empresa ainda não fez upload de nenhuma logo

**Visual:**
- Área de upload mostra ícone de imagem/câmera e texto instrutivo
- Card de preview da loja mostra placeholder genérico (ícone de loja ou avatar padrão)
- Texto amigável: "Adicione o logo da sua empresa"

**Call-to-Action:**
- "Arraste uma imagem ou clique para selecionar"
- "Formatos aceitos: JPG, PNG, SVG (máx. 2MB)"

**Mensagem de apoio:** "Uma logo profissional ajuda seus clientes a reconhecerem sua marca!"

### 6.2 Empty State - Endereço Incompleto

**Quando aparece:** Usuário ainda não preencheu o endereço

**Visual:**
- Campos de endereço vazios
- Card de preview mostra espaço reservado para endereço com texto "Endereço não informado"

**Call-to-Action:**
- Foco no campo CEP com mensagem "Digite seu CEP para preencher automaticamente"

### 6.3 Loading State - Buscando CEP

**Quando aparece:** Usuário digitou CEP válido e sistema está consultando ViaCEP

**Visual:**
- Campo CEP com indicador de carregamento (spinner leve ao lado do campo)
- Campos de endereço mostram skeleton ou ficam temporariamente desabilitados
- Mensagem sutil: "Buscando endereço..."

**Duração esperada:** 1-2 segundos

**Feedback:** Ao completar, campos preenchidos suavemente; em caso de erro, mensagem clara

### 6.4 Loading State - Salvando Dados

**Quando aparece:** Usuário clicou em "Salvar" e sistema está processando

**Visual:**
- Botão de salvar mostra estado de carregamento (spinner dentro do botão)
- Botão desabilitado durante o processo
- Overlay sutil ou indicador de progresso

**Mensagem:** "Salvando suas configurações..."

### 6.5 Error State - Validação de Campos

**Quando aparece:** Usuário tenta salvar com campos obrigatórios vazios ou inválidos

**Visual:**
- Campos com erro destacados visualmente (borda, ícone, mensagem)
- Mensagem de erro específica abaixo de cada campo inválido
- Lista consolidada de erros no topo do formulário (opcional)

**Mensagens de erro amigáveis:**
- "O nome da empresa é obrigatório"
- "Digite um email válido (ex: contato@empresa.com)"
- "Telefone inválido. Use o formato: (11) 99999-9999"
- "CEP não encontrado. Verifique o número digitado"
- "O arquivo deve ter no máximo 2MB"
- "Formato de imagem não suportado. Use JPG, PNG ou SVG"

**Ação de recuperação:**
- Foco automático no primeiro campo com erro
- Botão "Salvar" continua disponível após correções

### 6.6 Error State - Falha ao Salvar

**Quando aparece:** Erro de conexão ou servidor ao tentar salvar

**Visual:**
- Toast ou banner de erro no topo da tela
- Botão "Salvar" volta ao estado normal

**Mensagem:** "Não foi possível salvar. Verifique sua conexão e tente novamente."

**Ação de recuperação:**
- Botão "Tentar novamente" no toast/banner
- Manter dados preenchidos para nova tentativa

### 6.7 Error State - CEP Não Encontrado

**Quando aparece:** CEP digitado não existe na base ViaCEP

**Visual:**
- Campo CEP destacado com erro
- Mensagem específica abaixo do campo

**Mensagem:** "CEP não encontrado. Verifique o número ou preencha o endereço manualmente."

**Ação de recuperação:**
- Permitir que usuário preencha endereço manualmente
- Link "Preencher manualmente" que habilita todos os campos

### 6.8 Success State - Dados Salvos

**Quando aparece:** Configurações salvas com sucesso

**Visual:**
- Toast de sucesso no canto superior direito (ou centro inferior em mobile)
- Animação sutil de confirmação (checkmark)

**Mensagem:** "✅ Configurações salvas com sucesso!"

**Duração:** Desaparece automaticamente após 3-4 segundos

**Ação adicional:**
- Se for primeira configuração: "Parabéns! Sua loja está pronta. Ver como ficou →"

### 6.9 Success State - Logo Carregado

**Quando aparece:** Upload de logo concluído com sucesso

**Visual:**
- Preview da imagem aparece na área de upload
- Mensagem sutil: "Logo carregado!"
- Botão "Remover" disponível

**Comportamento:**
- Preview atualizado automaticamente no card lateral

---

## 7. Integrações

### 7.1 Com Outras Telas
- **Navega para:** Loja Virtual (/loja/:slug), Dashboard
- **Recebe de:** Onboarding (primeira configuração), Cadastro inicial (CNPJ pré-preenchido)

### 7.2 Com Outros Módulos
- **Módulo Loja Virtual:** Todas as configurações aqui afetam diretamente a aparência da loja pública
- **Módulo Vendas:** Endereço da empresa usado em documentos fiscais e recibos
- **Módulo Financeiro:** Dados da empresa para emissão de notas e relatórios
- **Módulo CRM:** Telefone e email para contato com clientes

### 7.3 APIs/Serviços
- **ViaCEP API:** Autocompletar endereço a partir do CEP (https://viacep.com.br/)
- **Upload Service:** Armazenamento de imagens do logo (S3 ou similar)
- **Validação de CNPJ:** Verificar formato e dígitos verificadores
- **Company Settings API:** CRUD de configurações da empresa

---

## 8. Regras de Negócio

1. **CNPJ imutável:** Uma vez cadastrado no onboarding, o CNPJ não pode ser alterado (bloquear campo)
2. **Razão Social obrigatória:** Campo obrigatório para identificação legal da empresa
3. **Email válido:** Deve seguir formato válido de email
4. **Telefone com DDD:** Mínimo 10 dígitos (fixo) ou 11 (celular)
5. **CEP brasileiro:** Deve ter exatamente 8 dígitos numéricos
6. **Logo - formato:** Aceitar apenas JPG, PNG e SVG
7. **Logo - tamanho:** Limite de 2MB por arquivo
8. **Logo - dimensões recomendadas:** Sugerir proporção quadrada ou horizontal para melhor exibição
9. **Cor HEX válida:** Deve seguir formato #RRGGBB ou #RGB
10. **Persistência de dados:** Todos os campos salvos devem ser recuperados ao recarregar a página
11. **Preview em tempo real:** Qualquer alteração em nome, logo ou cores deve refletir imediatamente no card de preview
12. **Endereço completo:** Se CEP for válido, campos obrigatórios (logradouro, bairro, cidade, estado) devem ser preenchidos automaticamente
13. **Número obrigatório:** Mesmo com autopreenchimento do CEP, número sempre requer input manual

---

## 9. Notas e Considerações

- **Mobile First:** 80% dos usuários acessarão via mobile. Garantir que upload de imagem funcione bem em celulares (acesso à galeria/câmera)
- **Tom de voz:** Usar linguagem simples e encorajadora. "Vamos configurar sua empresa!" em vez de "Preencha os dados obrigatórios"
- **Validação em tempo real:** Validar campos conforme o usuário digita (onde apropriado) para evitar erros ao salvar
- **Performance:** Carregamento da página deve ser rápido (< 3 segundos). Usar skeletons se necessário
- **Acessibilidade:** Garantir que color pickers sejam operáveis por teclado e tenham labels claros
- **Experiência de preview:** O card de preview é um diferencial importante - ele reduz ansiedade do usuário sobre como a loja ficará
- **CEP não encontrado:** Sempre permitir preenchimento manual caso a API ViaCEP falhe ou CEP seja recente
- **Undo:** Considerar funcionalidade de desfazer alterações antes de salvar (botão "Cancelar" ou "Restaurar padrões")
- **Backup visual:** Se logo for removido, voltar ao placeholder genérico imediatamente
- **Auto-save (futuro):** Considerar salvamento automático a cada X segundos ou ao mudar de campo

---

## 10. Fluxo de Experiência do Preview ao Vivo

O **Preview da Loja** é um dos principais diferenciais desta tela. Aqui está o comportamento esperado:

### 10.1 Comportamento do Preview

**O que atualiza automaticamente:**
- **Logo:** Assim que o upload é concluído, o preview mostra a nova imagem
- **Nome:** Conforme o usuário digita no campo "Nome Fantasia" (ou Razão Social se fantasia estiver vazio)
- **Cores:** Ao selecionar no color picker ou digitar HEX, o preview aplica as cores imediatamente
- **Endereço:** Quando o CEP é buscado e endereço preenchido, o card mostra o endereço formatado
- **Telefone:** Atualiza conforme digitado no campo telefone

**Frequência de atualização:**
- Campos de texto: Atualização em tempo real (debounce de 300ms para não sobrecarregar)
- Logo: Imediata após upload
- Cores: Imediata ao alterar
- Endereço: Após busca do CEP ser concluída

### 10.2 Valor para o Usuário

O preview ao vivo resolve uma dor real do empreendedor:
- **Ansiedade visual:** Ele vê imediatamente como a loja ficará, sem precisar salvar e navegar para outra tela
- **Confiança:** Pode testar diferentes cores e ver o resultado antes de confirmar
- **Profissionalismo:** Ao ver a prévia, entende o valor de ter uma loja virtual personalizada
- **Tomada de decisão:** Facilita escolher entre diferentes paletas de cores vendo o resultado imediato

### 10.3 Estados do Preview

| Estado | Descrição | Visual |
|--------|-----------|--------|
| **Vazio** | Nenhum dado preenchido | Placeholder "Sua loja virtual" + ícone genérico |
| **Parcial** | Alguns dados preenchidos | Mostra o que tem, oculta o que falta |
| **Completo** | Todos os dados principais preenchidos | Loja virtual simulada completa |
| **Atualizando** | Usuário está editando | Transição suave entre estados |

---

## 11. Checklist para Figma Make

Antes de enviar ao Figma Make, verifique:

- [ ] **Mobile First:** A tela funciona bem em celulares (touch targets grandes, scroll estratégico)
- [ ] **5 Segundos:** Usuário entende que pode configurar empresa e ver preview da loja
- [ ] **Simplicidade:** Sem jargões técnicos ("API", "Endpoint", "Slug")
- [ ] **Preview claro:** O card de preview da loja é visível e se atualiza conforme edições
- [ ] **Upload intuitivo:** Área de arrastar/soltar é clara e amigável
- [ ] **CEP automático:** Indicador visual de que campos serão preenchidos automaticamente
- [ ] **Color picker acessível:** Fácil de usar em mobile e desktop
- [ ] **Estados cobertos:** Empty, loading, error e success states estão contemplados
- [ ] **CTAs claros:** Botão salvar é óbvio, ações secundárias não competem visualmente
- [ ] **Tom acolhedor:** Mensagens encorajadoras, não autoritárias
- [ ] **Hierarquia visual:** Dados mais importantes (logo, nome, cores) têm destaque
- [ ] **Feedback visual:** Usuário sempre sabe quando algo está carregando, deu erro ou sucesso

---

## 12. Prompt para Figma Make

```
Crie um design de tela de configuração de empresa para o UNIQ Empresas.

CONTEXTO DO PRODUTO:
- Produto: UNIQ Empresas - Plataforma SaaS para pequenos empreendedores
- Tipo: Aplicação web responsiva (80% mobile)
- Público-alvo: Donos de MEI/microempresas, não técnicos, sempre com pressa
- Tom de voz: Simples, acolhedor, profissional mas não engessado

OBJETIVO DA TELA:
Permitir que o empreendedor configure os dados da empresa, personalize a identidade 
visual com logo e cores da marca, e visualize em tempo real como sua loja virtual 
ficará para os clientes.

ESTRUTURA DA TELA (4 seções principais):

1. SEÇÃO DADOS DA EMPRESA:
- Upload de logo com drag-and-drop, preview da imagem e opção de remover
- CNPJ (campo bloqueado, já preenchido)
- Razão Social (obrigatório)
- Nome Fantasia
- Email da empresa (obrigatório)
- Telefone comercial (obrigatório)
- Website (opcional)

2. SEÇÃO PREVIEW DA LOJA (card lateral destacado):
- Mostra como a loja virtual ficará com os dados atuais
- Exibe logo carregado (ou placeholder)
- Nome da empresa
- Status "Aberto agora" (simulação)
- Endereço formatado
- Telefone
- Botão "Ver Loja →"
- ATUALIZA EM TEMPO REAL conforme usuário edita campos

3. SEÇÃO ENDEREÇO:
- CEP com máscara e botão "Buscar"
- Logradouro (autocomplete ViaCEP)
- Número (obrigatório)
- Complemento (opcional)
- Bairro (autocomplete)
- Cidade (autocomplete)
- Estado (dropdown)
- Loading state durante busca do CEP

4. SEÇÃO CORES DA MARCA:
- Color picker para Cor Primária + input HEX editável
- Color picker para Cor Secundária + input HEX editável
- Chips de paletas sugeridas (ex: "Azul + Verde", "Roxo + Laranja")
- Preview atualiza automaticamente mostrando como ficará a loja

FUNCIONALIDADES NECESSÁRIAS:
- Upload de imagem com preview
- Busca automática de endereço por CEP
- Seletor de cores intuitivo
- Preview em tempo real da loja virtual
- Validação de campos obrigatórios
- Salvar todas as configurações

ESTADOS A CONSIDERAR:
- Empty state: Sem logo carregada (placeholder)
- Loading: Buscando CEP, salvando dados
- Error: CEP não encontrado, validação de campos, erro de conexão
- Success: Dados salvos, logo carregado com sucesso

ESTILO DESEJADO:
Crie um design moderno, limpo e acolhedor que transmita profissionalismo sem 
complexidade. Priorize a clareza visual - o empreendedor precisa entender rapidamente 
que pode configurar tudo em um só lugar. O card de preview da loja deve ser um destaque 
visual que mostra o valor da plataforma. Use sua criatividade para organizar as 4 seções 
de forma que o fluxo faça sentido naturalmente, com o preview sempre visível para 
gerar confiança no usuário.

IMPORTANTE:
- Mobile first: 80% dos acessos serão via celular
- Touch targets grandes e áreas de arrastar bem definidas
- Feedback visual claro em todas as interações
- Preview ao vivo é um diferencial - destaque essa funcionalidade
```

---

**Documento criado seguindo a Matriz de Documentação UI do UNIQ Empresas**  
**Data:** Março 2025  
**Status:** Pronto para Figma Make
