# language: pt
Funcionalidade: Encontrar Agencia

Contexto:
Dado que eu acesse a página inicial

Cenario: Encontrar Agencia por endereço
Quando clicar no ícone Encontre uma agencia
E selecionar a localização por endereço
Então deve ser exibido as agencias do local

Cenario: Encontrar Agencia por endereço com dados em branco
Quando clicar no ícone Encontre uma agencia
E selecionar a localização por endereço com dados em branco
Então deve ser exibido a mensagem de campo obrigatório

Cenario: Encontrar Agencia por CEP
Quando clicar no ícone Encontre uma agencia
E selecionar a localização por CEP
Então deve ser exibido as agencias do local

Cenario: Encontrar Agencia por CEP inválido
Quando clicar no ícone Encontre uma agencia
E selecionar a localização por CEP com CEP inválido
Então deve ser exibida a mensagem de CEP inválido

Cenario: Encontrar Agencia por CEP em branco
Quando clicar no ícone Encontre uma agencia
E selecionar a localização por CEP com CEP em branco
Então deve ser exibida a mensagem de CEP obrigatório
