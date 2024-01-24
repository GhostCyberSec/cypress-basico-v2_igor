/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('./src/index.html')
})


describe('Central de Atendimento ao Cliente TAT', function() {
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Igor')
        cy.get('#lastName').type('Carvalho')
        cy.get('#email').type('igor123@hotmail.com')
        cy.get('#open-text-area').type('Estou fazendo um teste do Cypress para o curso de Cypress básico', {delay: 0 })
        cy.get('button[type="submit"]').click()
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Igor')
        cy.get('#lastName').type('Carvalho')
        cy.get('#email').type('igor123hotmail.com')
        cy.get('#open-text-area').type('Estou fazendo um teste do Cypress para o curso de Cypress básico')
        cy.get('button[type="submit"').click()
        cy.get('span').should('have.class', 'error')
    })

    it('preenche campo telefone com um valor não-numérico', function() {
        cy.get('#firstName').type('Igor')
        cy.get('#lastName').type('Carvalho')
        cy.get('#email').type('igor123@hotmail.com')
        cy.get('#phone').type('igor@hotmail.com').should('be.empty')
    })
    
})