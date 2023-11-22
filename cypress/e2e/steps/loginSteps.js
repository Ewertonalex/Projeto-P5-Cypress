/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { loginPage } from '../../pages/login.page';


// Definindo os passos Cucumber
Given("que eu acesse a página inicial", () => {
    loginPage.acessarHome();
});

When("clicar em Entrar", () => {
    loginPage.botaoEntrar();
});

And("e digitar um CPF válido", () => {
    loginPage.validarCpfValido();
});

And("clicar no botão ENTRAR COM LOGIN EV.G", () => {
    loginPage.botaoLoginCpf();
});

And("ao direcionado para página de senha, digitar senha válida", () => {
    loginPage.validarSenha();
});

And("clicar no botão ENTRAR", () => {
    loginPage.botaoSenha();
});

Then("deve ser redirecionado para página de Perfil de usuário", () => {
    loginPage.validarPaginaPerfil();
});
