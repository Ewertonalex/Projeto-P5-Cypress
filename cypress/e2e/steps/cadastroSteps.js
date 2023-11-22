/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { cadastroPage } from '../../pages/cadastro.page';


// Definindo os passos Cucumber
Given("que acesse a página de cadastro", () => {
    cadastroPage.acessarHome();
});

When("digitar um e-mail válido", () => {
    cadastroPage.digitarEmail();
});

And("clicar no botão Enviar", () => {
    cadastroPage.botaoEnviar(); 
    
});

Then("deve exibir mensagem de E-mail enviado com sucesso", () => {
    cadastroPage.validarMensagem(); 
});