/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { taxaPage } from '../../pages/taxaEmprestimo.page';


// Definindo os passos Cucumber
Given("que eu acesse a página inicial", () => {
    taxaPage.acessarSite();
});

When("clicar no filtro Nome da Instituição", () => {
    taxaPage.iconeTaxa();
    taxaPage.filtroAlfabetica();
});

Then("deve ser exibido a lista agencias por ordem alfabética", () => {
    taxaPage.validarOrdemAlfabetica();
});

When("clicar no filtro por Taxa de juros", () => {
    taxaPage.iconeTaxa();
    taxaPage.filtroTaxa();
});

Then("deve ser exibido a lista agencias por taxa de juros", () => {
    taxaPage.validarOrdemTaxa();
});

When("digitar uma agência por nome {string}", (agencia) => {
    taxaPage.iconeTaxa();
    taxaPage.buscarAgencia(agencia);
});

Then("deve ser exibido a agencia pesquisada", () => {
    taxaPage.validarAgenciaPesquisa();
});

When("digitar uma agência por nome inexistente {string}", (termo) => {
    taxaPage.iconeTaxa();
    taxaPage.buscarAgenciaInexistente(termo);
});

Then("deve ser exibido a mensagem 0 instituições encontradas", () => {
    taxaPage.validarAgenciaInexistente();
});

When("clicar no botão Voltar", () => {
    taxaPage.iconeTaxa();
    taxaPage.botaoVoltar();
});

Then("deve retornar para a página inicial", () => {
    taxaPage.validarRetornoPagina();
});