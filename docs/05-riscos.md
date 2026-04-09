# 🛡️ Análise de Riscos e Segurança

| Risco | Impacto | Mitigação Implementada |
| :--- | :--- | :--- |
| **Injeção de Dados** | Alto | Validação rigorosa no Front-end via Regex para impedir scripts ou formatos inválidos nos campos de input. |
| **Exposição de Transação** | Médio | Geração de `transacaoId` único e dinâmico via `Date.now()`, simulando um identificador de backend. |
| **Falha de Fluxo** | Baixo | Controle de estado via React que impede o usuário de acessar o Certificado sem passar pelo Pagamento. |