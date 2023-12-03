class AutenticidadePage {
    

    acessarSite() {
        cy.visit('https://meu.inss.gov.br/')
        //cy.wait(5000) 
    }       

    iconeAutenticidade() {        
        cy.get('.jss51').click()       
    }

    validarCodigo() {        
        cy.contains('h1.MuiTypography-root.MuiTypography-h5', 'Autenticidade de Documentos').should('be.visible');
        cy.get('.MuiInputBase-root').dblclick(); 
        cy.get('.MuiInputBase-input').type('Código inválido'); 
              
    }

    validarCodigoEmBranco() {        
        cy.contains('h1.MuiTypography-root.MuiTypography-h5', 'Autenticidade de Documentos').should('be.visible');
        cy.get('.MuiInputBase-root').dblclick(); 
        cy.get('.MuiInputBase-input').clear();
              
    }

    botaoAutenticar() {        
        cy.contains('span.MuiButton-label', 'Autenticar').click();

       
    }
    
    botaoAutenticarextra() {        
        cy.contains('span.MuiButton-label', 'Autenticar').click();

       
    } 

    validarMensagemCodigoInvalido() {        
        cy.contains('.jss112', 'Favor resolver o Captcha.').should('be.visible');
             
    }

    validarMensagemCodigoEmBranco() {        
        cy.contains('.jss112', 'Favor preencher os campos obrigatórios.').should('be.visible');
             
    }

    botaoTelaInicial() {        
        cy.get('span[aria-label="menu"]').click();
       
    }

    validarRetornoPagina() {
        cy.url().should('eq', 'https://meu.inss.gov.br/#/login');

    }

 

}

export const autenticidadePage = new AutenticidadePage()