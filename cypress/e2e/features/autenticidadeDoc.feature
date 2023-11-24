# language: pt
Funcionalidade: Validar página de Autenticação de documentos

Contexto:
Dado que eu acesse a página inicial

Cenario: Validar autenticação de documentos sem reCaptcha
Quando clicar no icone Verificar Autenticidade de Documentos
E digitar um codigo inválido e não clicar no reCaptcha
E clicar no botão Autenticar
Então deve ser exibido a mensagem de Favor resolver o Captcha.

Cenario: Validar autenticação de documentos com campo em branco
Quando clicar no icone Verificar Autenticidade de Documentos
E não digitar um codigo e não clicar no reCaptcha
E clicar no botão Autenticar sem preencher codigo
Então deve ser exibido a mensagem de Favor preencher os campos obrigatórios.

Cenario: Validar botão de retornar a tela Inicial
Quando clicar no icone Verificar Autenticidade de Documentos
E não digitar um codigo e não clicar no reCaptcha
E clicar no botão de retornar a tela inicial
Então deve ser redirecionado a tela inicial

