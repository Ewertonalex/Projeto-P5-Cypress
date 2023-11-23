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

Then("deve ser realizado download de aquirvo PDF de pagamentos", () => {
    calendarioPage.validarDonwload();
});

