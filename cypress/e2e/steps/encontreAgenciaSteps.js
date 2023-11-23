/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { agenciaPage } from '../../pages/encontrarAgencia.page';


// Definindo os passos Cucumber
Given("que eu acesse a página inicial", () => {
    agenciaPage.acessarSite();
});

When("clicar no ícone Encontre uma agencia", () => {
    agenciaPage.iconeAgencia();
});

And("selecionar a localização", () => {
    agenciaPage.validarEndereco();
});

And("selecionar a localização por CEP", () => {
    agenciaPage.validarCEP();
});

Then("deve ser exibido as agencias do local", () => {
    agenciaPage.validarAgencias();
});
