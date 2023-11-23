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
  

}

export const calendarioPage = new CalendarioPage()