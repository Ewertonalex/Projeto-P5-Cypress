class AgenciaPage {
    

    acessarSite() {
        cy.visit('https://meu.inss.gov.br/')
    }       

    iconeAgencia() {        
        cy.get('.jss49').click();          
    }   

    validarEndereco() {
        cy.get('span.MuiTab-wrapper:contains("Endereço")').click();
        cy.get('#standard-select-ufs').select('PB');
        cy.get('#standard-select-municipio').select('JOAO PESSOA');
        cy.get('[style="text-align: center; margin-top: 20px;"] > .MuiButtonBase-root').click();

    }

    validarCEP() {
        cy.get('span.MuiTab-wrapper:contains("CEP")').click();
        cy.get('#cep').type('58051120');
        cy.get('.MuiGrid-grid-xs-5 > .MuiButtonBase-root').click();

    }

    validarCEPInvalido() {
        cy.get('span.MuiTab-wrapper:contains("CEP")').click();
        cy.get('#cep').type('00000000');
        cy.get('.MuiGrid-grid-xs-5 > .MuiButtonBase-root').click();

    }

    validarAgencias() {
        cy.get('span.MuiTypography-root').should('be.visible')
    }

    validarAgenciaCEP() {
        cy.get('h2.MuiTypography-root.MuiTypography-body1')
            .should('be.visible')
            .and('contain', 'AGÊNCIA DA PREVIDÊNCIA SOCIAL JOÃO PESSOA - SUL');

    }

    validarMensagemCEPInvalido() {
        cy.get('.jss119')
            .should('be.visible')
            .and('contain', 'Não foi possível encontrar uma agência próxima ao CEP informado.');
    }

}

export const agenciaPage = new AgenciaPage()