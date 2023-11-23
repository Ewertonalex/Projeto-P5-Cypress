# language: pt
Funcionalidade: Validar página de Taxa de Empréstimo Consignado

Contexto:
Dado que eu acesse a página inicial

Cenario: Filtrar Bancos por ordem alfabética
Quando clicar no filtro Nome da Instituição
Então deve ser exibido a lista agencias por ordem alfabética

Cenario: Filtrar Bancos por Taxa de juros
Quando clicar no filtro por Taxa de juros
Então deve ser exibido a lista agencias por taxa de juros

Cenario: Buscar Agencia existente
Quando digitar uma agência por nome "SICOOB"
Então deve ser exibido a agencia pesquisada

Cenario: Buscar Agencia inexistente
Quando digitar uma agência por nome inexistente "xxxxx"
Então deve ser exibido a mensagem 0 instituições encontradas

Cenario: Validar botão Voltar
Quando clicar no botão Voltar
Então deve retornar para a página inicial
