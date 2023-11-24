/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { autenticidadePage } from '../../pages/autenticidadeDoc.page';


// Definindo os passos Cucumber
Given("que eu acesse a página inicial", () => {
    autenticidadePage.acessarSite();
});

When("clicar no icone Verificar Autenticidade de Documentos", () => {
    autenticidadePage.iconeAutenticidade();
    
});

And("digitar um codigo inválido e não clicar no reCaptcha", () => {
    autenticidadePage.validarCodigo();
    
});

And("clicar no botão Autenticar", () => {
    autenticidadePage.botaoAutenticar();
    
});

Then("deve ser exibido a mensagem de Favor resolver o Captcha.", () => {
    autenticidadePage.validarMensagemCodigoInvalido();
});

And("não digitar um codigo e não clicar no reCaptcha", () => {
    autenticidadePage.validarCodigoEmBranco();
    
});


And("clicar no botão Autenticar sem preencher codigo", () => {
    autenticidadePage.botaoAutenticarextra();
    
});

Then("deve ser exibido a mensagem de Favor preencher os campos obrigatórios.", () => {
    autenticidadePage.validarMensagemCodigoEmBranco();
});

And("clicar no botão de retornar a tela inicial", () => {
    autenticidadePage.botaoTelaInicial();
    
});

Then("deve ser redirecionado a tela inicial", () => {
    autenticidadePage.validarRetornoPagina();
});

