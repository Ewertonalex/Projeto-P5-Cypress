/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { buscarPage } from '../../pages/buscar.page';


// Definindo os passos Cucumber
Given("que eu acesse a página inicial", () => {
    buscarPage.acessarHome();
});

When("digitar {string}", (curso) => {
    buscarPage.preencherCampoDeBusca(curso);
});

When("digitar um curso inexistente {string}", (termo) => {
    buscarPage.buscarCursoInexistente(termo);
});

When("deixar o campo de busca em branco", () => {
    buscarPage.deixarCampoDeBuscaEmBranco();
});

And("clicar na botão de pesquisar", () => {
    buscarPage.clicarBotao();
});

Then("deve ser exibido o curso desejado", () => {
    buscarPage.validarCurso();
});

Then("não deve ser exibido nenhum resultado", () => {
    buscarPage.validarCursoInexistente();
});

Then("deve ser feito um reload na página inicial", () => {
    buscarPage.validarCursoEmBranco();
});