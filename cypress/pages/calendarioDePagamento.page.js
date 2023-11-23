class CalendarioPage {
    

    acessarSite() {
        cy.visit('https://meu.inss.gov.br/')
    }       

    iconeCalendario() {        
        cy.get('.jss48').click()       
    }

    validarDonwload() {        
        cy.contains('.jss85', 'Calendário gerado com sucesso').should('be.visible');
        
    }

    botaoTelaInicial() {        
        cy.get('span[aria-label="menu"]').click();
       
    }

    validarRetornoPagina() {
        cy.url().should('eq', 'https://meu.inss.gov.br/#/login');

    }


  

}

export const calendarioPage = new CalendarioPage()