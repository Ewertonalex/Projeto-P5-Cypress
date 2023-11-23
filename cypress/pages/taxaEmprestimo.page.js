class TaxaPage {
    

    acessarSite() {
        cy.visit('https://meu.inss.gov.br/')             
    }
    
    iconeTaxa() {        
        cy.get('.jss62').click();         
    }  

    filtroAlfabetica() {
        cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiButton-label').click(); 
    }

    filtroTaxa() {
        cy.get(':nth-child(4) > .MuiButtonBase-root > .MuiButton-label').click(); 
    }

    validarOrdemAlfabetica() {
        cy.contains('.jss174', 'AGIBANK FINANCEIRA S A').should('be.visible');
    }

    validarOrdemTaxa() {
        cy.contains('.jss174', 'BANCO ARBI S A').should('be.visible');
    }

    buscarAgencia(agencia) {
        cy.get('#instituicao').type(agencia);
    }

    buscarAgenciaInexistente(termo) {
        cy.get('#instituicao').type(termo);
    }

    validarAgenciaPesquisa() {
        cy.contains('.jss269', 'SICOOB COOPERNAPI').should('be.visible');
    }

    validarAgenciaInexistente() {
        cy.contains('.jss80', '0 instituições encontradas').should('be.visible');
    }

}

export const taxaPage = new TaxaPage()