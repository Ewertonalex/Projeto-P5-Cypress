# language: pt
Funcionalidade: Validar página de Calendário de Pagamento

Contexto:
Dado que eu acesse a página inicial

Cenario: Validar download de aquirvo PDF
Quando clicar no icone Calendário de Pagamento
Então deve ser realizado download de aquirvo PDF de pagamentos
