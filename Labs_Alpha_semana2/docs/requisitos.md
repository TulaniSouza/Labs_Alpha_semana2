# Documento de Requisitos e Critérios - Sistema de Inscrição e Pagamento

---

## Requisitos Não Funcionais (RNFs)

1. **Desempenho**  
   A aplicação deve responder às interações do usuário em até **2 segundos** para ações comuns (ex: envio de formulário).

2. **Usabilidade**  
   Interface deve ser intuitiva, com fluxo claro de inscrição e pagamento, reduzindo erros do usuário.

3. **Acessibilidade (WCAG)**  
   O sistema deve atender ao nível **AA das diretrizes WCAG**, garantindo uso por pessoas com deficiência.

4. **Segurança**  
   Dados sensíveis (como e-mail e pagamento) devem ser protegidos e não expostos no frontend.

5. **Compatibilidade**  
   Deve funcionar corretamente nos principais navegadores modernos (Chrome, Edge, Firefox).

6. **Responsividade**  
   Interface deve se adaptar a diferentes tamanhos de tela (desktop, tablet e mobile).

7. **Manutenibilidade**  
   Código organizado em componentes React reutilizáveis e de fácil manutenção.

8. **Disponibilidade**  
   Sistema deve estar disponível continuamente, com tolerância a falhas simples.

---

## Critérios de Aceitação — Fluxo de Inscrição

### Cenário de Sucesso ✔
- Dado que o usuário preenche:
  - Nome com mínimo de 3 caracteres  
  - E-mail válido  
- Quando clicar em "Continuar"  
- Então:
  - Os dados devem ser salvos no estado global (`setDados`)
  - O sistema deve avançar para a etapa de pagamento
  - Nenhum erro deve ser exibido

### Cenários de Erro ❌

1. **Nome vazio ou inválido**
   - Exibir mensagem: "Nome deve ter pelo menos 3 caracteres"

2. **E-mail vazio**
   - Exibir mensagem: "E-mail é obrigatório"

3. **E-mail inválido**
   - Exibir mensagem: "Digite um e-mail válido"

4. **Campos vazios**
   - Impedir avanço de etapa
   - Destacar campos com erro

---

## Critérios de Aceitação — Fluxo de Pagamento

### ✔ Cenário de Sucesso
- Dado que o usuário inicia o pagamento  
- Quando o pagamento for aprovado  
- Então:
  - Atualizar `pagamentoStatus` para `"aprovado"`
  - Gerar `transacaoId`
  - Exibir confirmação ao usuário

### ❌ Cenários de Erro

1. **Pagamento recusado**
   - Atualizar status para `"recusado"`
   - Exibir mensagem de erro

2. **Falha de conexão**
   - Exibir mensagem: "Erro ao processar pagamento. Tente novamente."

3. **Timeout**
   - Permitir nova tentativa sem perda de dados

---

## Acessibilidade (WCAG)

A aplicação atende às diretrizes WCAG da seguinte forma:

### 1. Perceptível
- Uso de contraste adequado (amarelo, branco e fundo escuro)
- Textos legíveis e com hierarquia visual clara
- Labels associados aos inputs

### 2. Operável
- Navegação via teclado (tab entre inputs e botões)
- Botões com área de clique adequada
- Popovers com opção clara de fechamento (botão "X")

### 3. Compreensível
- Mensagens de erro claras e objetivas
- Feedback imediato após ações (validação e pagamento)

### 4. Robusto
- Uso de HTML semântico (form, button, input)
- Compatibilidade com leitores de tela

---

## 🧪 Critérios de Aceitação — Componentes React

### Inscricao.jsx
- Deve validar:
  - Nome (mín. 3 caracteres)
  - E-mail obrigatório
  - Formato de e-mail válido
- Deve impedir submit inválido
- Deve exibir mensagens de erro
- Deve atualizar estado global corretamente

### Pagamento.jsx (ou equivalente)
- Deve iniciar pagamento
- Deve tratar sucesso e erro
- Deve atualizar status corretamente
- Deve exibir feedback visual ao usuário

---

## 📌 Regras de Negócio

1. **Inscrição**
   - Usuário só pode avançar com dados válidos
   - Nome e e-mail são obrigatórios

2. **Pagamento**
   - Valor fixo: R$ 50
   - Status inicial: `"pendente"`
   - Só após pagamento aprovado:
     - Usuário é considerado inscrito

3. **Fluxo**
   - Etapa 1: Inscrição  
   - Etapa 2: Pagamento  
   - Não é possível pular etapas

4. **Erros**
   - Não permitir avanço em caso de erro
   - Sempre fornecer feedback ao usuário