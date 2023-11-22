#language: pt
Funcionalidade: Realziar cadastro de usuário

Contexto:
Dado que acesse a página de cadastro

Cenario: Validar cadastro de usuário com sucesso
Quando digitar um e-mail válido
E clicar no botão Enviar
Então deve exibir mensagem  sucesso
