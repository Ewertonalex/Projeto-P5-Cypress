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
        cy.get('button[type="submit"]').should('be.visible').type('{enter}');

    }

    validarMensagem() {
        cy.get('.panel-body').should('be.visible').contains('Não foi localizado nenhum cadastro com o email informado.');
    }

}

export const cadastroPage = new CadastroPage()