class BuscarPage {
    // Pode ser feito por "fluxo": elementos + ações

    acessarHome() {
        cy.visit('https://www.escolavirtual.gov.br/')
    }    

    preencherCampoDeBusca(curso) {
        cy.get('#buscar-cursos').type(curso);
    }

    clicarBotao() {
        cy.get('.fa-search').click();
    }

    validarCurso() {
        cy.get('a[href="https://www.escolavirtual.gov.br/curso/629"]:contains("Aprendendo com Python")').should('be.visible');
    }

    buscarCursoInexistente(termo) {
        cy.get('#buscar-cursos').type(termo);
    }

    deixarCampoDeBuscaEmBranco() {
        cy.get('#buscar-cursos').clear();
    }

    validarCursoInexistente() {
        cy.contains('.float-right', '0 de 0 resultados encontrados').should('be.visible');
    }

    validarCursoEmBranco() {
        cy.url().should('eq', 'https://www.escolavirtual.gov.br/?query=&carga_horaria=');
    }

    


}

export const buscarPage = new BuscarPage()