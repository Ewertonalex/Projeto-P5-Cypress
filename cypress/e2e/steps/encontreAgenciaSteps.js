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

And("selecionar a localização por endereço", () => {
    agenciaPage.validarEndereco();
});

And("selecionar a localização por endereço com dados em branco", () => {
    agenciaPage.validarEnderecoEmBranco();
});

And("selecionar a localização por CEP", () => {
    agenciaPage.validarCEP();
});

And("selecionar a localização por CEP com CEP inválido", () => {
    agenciaPage.validarCEPInvalido();
});

And("selecionar a localização por CEP com CEP em branco", () => {
    agenciaPage.validarCEPemBranco();
});


Then("deve ser exibido as agencias do local", () => {
    agenciaPage.validarAgencias();
});

Then("deve ser exibida a mensagem de CEP inválido", () => {
    agenciaPage.validarMensagemCEPInvalido();
});

Then("deve ser exibida a mensagem de CEP obrigatório", () => {
    agenciaPage.validarMensagemCEPemBranco();
});

Then("deve ser exibido a mensagem de campo obrigatório", () => {
    agenciaPage.validarMensagemEnderecoEmBranco();
});

