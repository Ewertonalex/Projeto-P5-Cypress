/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { calendarioPage } from '../../pages/calendarioDePagamento.page';


// Definindo os passos Cucumber
Given("que eu acesse a página inicial", () => {
    calendarioPage.acessarSite();
});

When("clicar no icone Calendário de Pagamento", () => {
    calendarioPage.iconeCalendario();
    
});

And("na de caledario clicar no botão de tela inicial", () => {
    calendarioPage.botaoTelaInicial();
    
});

Then("deve ser exibido a mensagem Calendário gerado com sucesso na tela de calendario", () => {
    calendarioPage.validarDonwload();
});

Then("deve retornar a tela inical", () => {
    calendarioPage.validarRetornoPagina();
});

