class LoginPage {
    // Pode ser feito por "fluxo": elementos + ações

    acessarHome() {
        cy.visit('https://www.escolavirtual.gov.br/')
    }       

    botaoEntrar() {        
        cy.get('.call-to-action').click();
          
    }   

    validarCpfValido() {
        cy.get('#usrCpfEmail').type('05479875442')

    }

    botaoLoginCpf() {
        cy.get('button[type="submit"]').click();
    }

    validarSenha() {
        cy.get('#password').type('notrewe11')

    }

    botaoSenha() {
        cy.get('.btn.btn-lg.btn-primary.btn-block').click();
    }

    validarPaginaPerfil() {
        cy.get('.title-aluno').should('be.visible');

    }

}

export const loginPage = new LoginPage()