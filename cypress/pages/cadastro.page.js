class CadastroPage {
    // Pode ser feito por "fluxo": elementos + ações

    acessarHome() {
        cy.visit('https://www.escolavirtual.gov.br/cadastro');
        cy.get('div.panel-heading').should('be.visible').and('have.text', 'NOVO CADASTRO');
    }        

    digitarEmail() {        
        cy.get('input[type="email"]').should('be.visible').invoke('val', 'ewerton@example.com')    
    }   

    botaoEnviar() {
        cy.get('button[type="submit"]').should('be.visible').click({ force: true });
    }

    validarMensagem() {
        cy.get('.panel-title').should('be.visible').and('have.text', 'E-MAIL ENVIADO COM SUCESSO!');
    }

}

export const cadastroPage = new CadastroPage()