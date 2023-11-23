# language: pt
Funcionalidade: Validar página de Calendário de Pagamento

Contexto:
Dado que eu acesse a página inicial

Cenario: Validar download de aquirvo PDF
Quando clicar no icone Calendário de Pagamento
Então deve ser exibido a mensagem Calendário gerado com sucesso na tela de calendario

Cenario: Validar botão voltar a página inicial
Quando clicar no icone Calendário de Pagamento
E na de caledario clicar no botão de tela inicial
Então deve retornar a tela inical
