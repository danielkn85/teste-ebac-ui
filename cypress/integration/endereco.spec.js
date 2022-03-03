/// <reference types="cypress" />

describe('Address functionality - Billing and Delivery', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
       
    });

it('Should register Billing Address successfully', () => {
    
    //cadastro de endereço
});
    
});
