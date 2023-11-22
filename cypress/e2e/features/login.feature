#language: pt
Funcionalidade: Relizar Login

Contexto:
Dado que eu acesse a página inicial

Cenario: Login com sucesso
Quando clicar em Entrar
E e digitar um CPF válido
E clicar no botão ENTRAR COM LOGIN EV.G
E ao direcionado para página de senha, digitar senha válida
E clicar no botão ENTRAR
Então deve ser redirecionado para página de Perfil de usuário