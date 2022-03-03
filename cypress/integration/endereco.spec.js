/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page"
const dadosEndereco = require('../fixtures/endereco.json')
describe('Address functionality - Billing and Delivery', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Should register Billing Address successfully', () => {
        enderecoPage.editarEnderecoFaturamento('Jailson', 'Mendes', 'Google', 'Brasil', 'R. dos Bobos', '0', 'Vermelhandia', 'Parana', '89010010', '4169587870', 'celso@rothmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });

    it('Should register Billing Address successfully - using data file', () => {
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].numero,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email,
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });

});
