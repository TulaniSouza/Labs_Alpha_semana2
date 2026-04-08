# Labs Alpha - Gestão de Eventos (Desafio 4)

Projeto desenvolvido em React + Vite focado em acessibilidade e processos ágeis.

## Documentação e Fluxos
A arquitetura foi desenhada no Whimsical para garantir a integridade dos processos:
* [Link: Fluxo 1 - Inscrição e Pagamento](LINK_https://whimsical.com/labs-alpha6/fluxo-1-inscricao-e-pagamento-KSg4ZE5rWzafGzmUdxTQAP)
* [Link: Fluxo 2 - Check-in e Certificado](LINK_https://whimsical.com/labs-alpha6/fluxo-2-chek-in-certificado-C2TU7vLQ3JLCZyWZZ7gGPw)

## Tecnologias
* React + Vite (JavaScript)
* CSS Moderno (Mobile-First)
* Acessibilidade (WCAG Compliant)

* ## Matriz de Permissões (RBAC)

A seguir, estão definidas as permissões de acesso com base nos perfis do sistema:

👤 Admin
Pode criar eventos
Pode editar eventos
Pode visualizar todos os eventos
Pode visualizar relatórios
Pode gerenciar usuários
Não realiza compra de ingressos
Não acessa a área de pagamento como usuário final
🧑‍💼 Organizador
Pode criar eventos
Pode editar eventos próprios
Pode visualizar eventos
Pode visualizar relatórios dos seus eventos
Não pode gerenciar usuários
Não realiza compra de ingressos
Não acessa a área de pagamento como usuário final
🎟️ Participante
Pode visualizar eventos
Pode realizar compra de ingressos
Pode acessar a área de pagamento
Não pode criar ou editar eventos
Não pode visualizar relatórios
Não pode gerenciar usuários
🔒 Regras de Acesso às Rotas
Rotas administrativas (/admin) são restritas ao perfil Admin
Rotas do organizador (/dashboard-organizador) são acessíveis por Organizador e Admin
Rotas de checkout (/checkout) são acessíveis apenas por Participantes autenticados

## Equipe e Funções
* **Tulani:** Arquitetura, Liderança Técnica e Segurança.
* **Isabela:** Requisitos, RNFs e Matriz de Permissões.
* **Guilherme:** Lógica de Simulação de Pagamento.
* **Stella:** Scrum Master e Validação de Dados.
