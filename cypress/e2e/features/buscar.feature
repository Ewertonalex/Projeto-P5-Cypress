#language: pt
Funcionalidade: Buscar cursos

Contexto:
Dado que eu acesse a página inicial

Cenario: Buscar curso existente
Quando digitar "APRENDENDO COM PYTHON"
E clicar na botão de pesquisar
Então deve ser exibido o curso desejado

Cenario: Buscar curso inexistente
Quando digitar um curso inexistente "xxxxxxxxxxxx"
E clicar na botão de pesquisar
Então não deve ser exibido nenhum resultado

Cenario: Buscar curso com campo em branco
Quando deixar o campo de busca em branco
E clicar na botão de pesquisar
Então deve ser feito um reload na página inicial