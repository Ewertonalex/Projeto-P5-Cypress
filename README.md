<h1>PROJETO INTEGRADOR P5<br>QUALIDADE DE SOFTWARE - CYPRESS</h1>

<h2>Sumário</h2>

- [1 Apresentação](#1-apresentação)
  - [1.1 Vídeo de Apresentação do Projeto](#11-vídeo-de-apresentação-do-projeto)
- [2 Pré-requisitos](#2-pré-requisitos)
- [3 Dependências](#3-dependências)
- [4 Scripts](#4-scripts)
- [5 Estrutura do projeto](#5-estrutura-do-projeto)
  - [5.1 Pastas](#51-pastas)
  - [5.2 Arquivos](#52-arquivos)
- [6 Por onde seguir](#6-por-onde-seguir)
- [7 Grupo](#7-grupo)

## 1 Apresentação

_Seja bem-vindo ao projeto de automação de testes em Cypress, utilizando BDD (Behavior-Driven Development), Gherkin e Page Objects. Este sistema foi desenvolvido com o objetivo de aprimorar a eficiência e confiabilidade dos testes automatizados em grupo, seguindo as melhores práticas da indústria._

_O projeto concentra-se na construção de uma estrutura robusta de automação de testes em Cypress, adotando práticas de Desenvolvimento Orientado a Comportamento (BDD) e utilizando Gherkin para especificações. O escopo do teste abrange uma página governamental específica: o portal Meu INSS._

**baseURL:** https://meu.inss.gov.br/

**O Projeto tem como principais objetivos:**

- Implementar testes automatizados que garantam a integridade e funcionamento correto da página Meu INSS.
- Utilizar práticas de BDD e Gherkin para uma especificação clara e compreensível dos testes.
- Empregar o padrão Page Objects para facilitar a manutenção e escalabilidade dos testes.
- Promover a colaboração eficiente entre membros da equipe na execução e desenvolvimento de testes automatizados.

### 1.1 Vídeo de Apresentação do Projeto

* <strong>Apresentação:</strong><br>Clique para Assistir 👇 <br>
[<img src="https://1000logos.net/wp-content/uploads/2021/04/YouTube-logo.png" width=220><br>](https://git-scm.com/downloads)<br>



## 2 Pré-requisitos


- Node.js (preferencialmente LTS mais recente);
- NPM (instalado com Node.js);
- Dependências do projeto;
- Acesso à aplicação rodando;
- _Mocks_ habilitados;

## 3 Dependências


| Nome | Função | Documentação |
|----|----|----|
Cypress | Biblioteca de testes automatizados multicamada | [Link aqui](https://docs.cypress.io/guides/overview/why-cypress)
cypress cucumber preprocessor | Aplicação de Cucumber para Cypress permitindo utilização de arquivos _.feature_ contendo as instruções do teste em Gherkin | [Link aqui](https://www.npmjs.com/package/cypress-cucumber-preprocessor)
multiple cucumber html reporter | Gera reports em HTML contendo dados da execução dos testes e seus resultados | [Link aqui](https://www.npmjs.com/package/multiple-cucumber-html-reporter)

<div align="center">

<img src="https://uploaddeimagens.com.br/images/004/675/091/full/Captura_de_tela_de_2023-11-27_11-33-27.png?1701095880" width=480>

![-----------------------------------------------------](
https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png
)
  
</div>


## 4 Scripts


```
npm run {scriptName}
```

| Nome | Utilização |
|----|----|
**cy:open** | Abre o runner do Cypress com painel que permite analizar passo-a-passo a execussão dos testes e acessar os dados trafegados via browser e funcionalidade de time lapse dinâmico;
**cy:run** | Executa os testes em modo _headless_.
**report:gen** | Gera o relatório dos testes executados.

## 5 Estrutura do projeto



### 5.1 Pastas
| Nome | Função |
|----|----|
**cypress** | o que diz respeito ao projeto de testes deve estar localizado dentro da pasta _cypress_.
**support** | contém os arquivos de comandos personalizados cypress.
**e2e** | os testes devem estar situados dentro desta pasta. Na raíz dela uma subpasta **features** contendo arquivos _.feature_ com os cenários de teste em Gherkin. Em uma subpasta **steps** teremos os arquivos **step.js** com a implementação dos steps de testes.
**fixtures** | esta pasta contém as massas de dados fixas.
**pages** | seguindo o padrão de projeto PageObjects, nesta pasta constam os arquivos _page.js_ que serão classes com métodos de ação específicos de cada página além dos seletores de elementos usados ao longo dos testes (e métodos _getters_ retornando estes elementos em forma de _return cy.get(seletor)_, permitindo encadear ações e validações quando invocados).

### 5.2 Arquivos

| Sufixo | Função |
|----|----|
**.feature** | contém os cenários de teste escritos em Gherkin. O sistema deste framework usa este arquivo para organizar os steps, ordem e repetições que devem ser executadas podendo também conter aqui dados a serem passados para o código em forma de parâmetros, variáveis, tabelas e objetos. Ao executar o teste o sistema acessará estes arquivos e buscará a implementação de cada _step_ listado executando em ordem. Essa busca será realizada nos arquivos dentro da pasta _e2e > steps_. Caso não encontre, seguira a busca em direção à pasta e arquivo _spec_ nomeados de acordo com o arquivo _.feature_ correspondente.
**.spec.js** | implementação de cada step definido em arquivo _.feature_.Em casos de erro do tipo _missing step implementation_ o sistema possivelmente não encontrou uma implementação com o exato texto do step nas pastas adequadas durante a busca.
**cypress.config.js** | este é o arquivo de configuração geral do projeto Cypress. Aqui apontamos a _base URL_ alvo do teste, comportamentos do _runner_, uso de plugins como Cucumber e possíveis variáveis de ambiente entre outras opções.


## 6 Por onde seguir

- Defina e siga desde o início um padrão de escrita Gherkin (primeira ou terceira pessoa, verbos no infinitivo ou conjugados, granularidade das instruções);
- Procure manter as instruções (steps) concisas e independentes;
- Faça uso de instruções e commands para preparação de cenários de teste (pré-requisitos) de maneira mais otimizada e legível;
- **TESTES TAMBÉM GOSTAM DE CLEAN CODE!**
- Se o projeto está confuso demais, pode melhorar;
- Se ainda está confuso, você pode melhorar;
- Bons colegas nos ajudam a melhorar, mas isso depende do nosso esforço e disposição;
- **O TESTE É DO TIME!**
- Mantenha a organização das pastas;
- Gostamos de _mocks_ nos testes;
- Testes independentes são legais.
- Testes são feitos pra serem executados;
- Testes automatizados devem ser o mais automatizados possível;
- Testes instáveis (_flaky_) devem ser aprimorados;
- Se não der pra escrever testes para a aplicação, talvez ela tenha baixa testabilidade;
- Aplicações de baixa testabilidade devem melhorar;
- Um bom dev testa;
- Um bom QA planeja e testa;

______________________________________________________

## 7 Grupo

- Carlos Augusto Alves Bezerra de Santana
- Ewerton Alexander de Oliveira Batista
- Hugo Oliveira Facundo de Almeida
- Luan Antony Rocha de Aguiar
- Vinícius dos Reis Loch
- Wagner de Sousa Patrício Junior

### 👏  Projeto realizado por:

<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/ewerton-alexander-780869232/"><img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/D4D03AQHbWQZFgL5Vag/profile-displayphoto-shrink_200_200/0/1699361588739?e=1706745600&v=beta&t=8BxhrbL_m7nh_hUmDzFGBjGEezTCugm3x-inFz5jg40" width="100px;" alt=""/><br /><sub><b>Ewerton Alexander</b></sub></a><br />👨‍🚀</a></td>
  
  <td align="center"><a href="https://www.linkedin.com/in/hufacundo/"><img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/D5603AQHqDlbj98O9Sg/profile-displayphoto-shrink_200_200/0/1689174408364?e=1706745600&v=beta&t=yOV-D-5FhbNDtD6sjsyDff03p9T53lc7Jz9pC4_imb4" width="100px;" alt=""/><br /><sub><b>Hugo Facundo</b></sub></a><br />👨‍🚀</a></td>

  <td align="center"><a href="https://www.linkedin.com/in/luanantony/"><img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/C4D03AQFbCw_49MUJ8Q/profile-displayphoto-shrink_200_200/0/1542736117058?e=1706745600&v=beta&t=jkknGpzoSBBgU8G1_mi5DZTMBZGZMp93sF84idnszWo" width="100px;" alt=""/><br /><sub><b>Luan Antony</b></sub></a><br />👨‍🚀</a></td>
  
  <td align="center"><a href="https://www.linkedin.com/in/carlosaugustoabsantana/"><img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/D4D03AQF7KgkA26_5XQ/profile-displayphoto-shrink_200_200/0/1690397658916?e=1706745600&v=beta&t=xkTN4tDdpi-8md5qzUx4SCP1Bozmer691158hZATXaI" width="100px;" alt=""/><br /><sub><b>Carlos Augusto</b></sub></a><br />👨‍🚀</a></td>

  <td align="center"><a href="https://www.linkedin.com/in/vinicius-loch-a1159920a/"><img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/C5603AQH2n67faFFRUg/profile-displayphoto-shrink_200_200/0/1632398802958?e=1706745600&v=beta&t=Xi9niFj-9BxwJNM9lZXj3Vwh1j_qPAXIaEf1lzDoVZk" width="100px;" alt=""/><br /><sub><b>Vinícius Loch</b></sub></a><br />👨‍🚀</a></td>
  
  <td align="center"><a href="https://www.linkedin.com/in/wagner-patricio-7b4743219/"><img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/C4E03AQEuy2k-ajGG_w/profile-displayphoto-shrink_200_200/0/1653161927634?e=1706745600&v=beta&t=JzWy_taKlRowoYKLpLVHq-j9JfuzLP-hWhoXizXwtrM" width="100px;" alt=""/><br /><sub><b>Wagner Patricio</b></sub></a><br />👨‍🚀</a></td>
