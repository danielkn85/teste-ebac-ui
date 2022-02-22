/// <reference types="cypress" />
var faker = require('faker');

describe('Pre-Register Funcionality', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Must complete the pre-registration successfully', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('Palmeiras@q1w2e3!!')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });



});

