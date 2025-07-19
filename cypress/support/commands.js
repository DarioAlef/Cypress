
Cypress.Commands.add('fazerLogin', (usuario, senha) => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(usuario)
    cy.get('#password').type(senha)
    cy.get('#login-button').click()
})

Cypress.Commands.add('fazerLogin', (usuario, senha) => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(usuario)
    cy.get('#password').type(senha)
    cy.get('#login-button').click()
})

Cypress.Commands.add('limparCarrinho', () => {
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_button').click()
})