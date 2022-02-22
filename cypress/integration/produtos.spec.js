/// <reference types="cypress" /> 

describe('Funcionality Products homepage', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });

    it('Must select a product from the list', () => {

        cy.get('[class="product-block grid"]').first().click()
        //.last() to select the last one
        //.eq(3) to select the fourth item (first = 0)
        //.contains('text-here') to select text (if it's a clickable link)

    });

    it.only('Must add a product to the cart', () => {
        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(3)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 3)

    });

});