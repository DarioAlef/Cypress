describe('Testes de Login no Sauce Demo', () => {
    
    it('LOGIN_001 - Login com usuario valido', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        
        cy.url().should('contain', 'inventory')
        cy.get('.title').should('contain', 'Products')
    })
    
    it('LOGIN_002 - Login com usuario invalido', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('usuario_inexistente')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
    })
    
    it('LOGIN_003 - Login com senha invalida', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('senha_errada')
        cy.get('#login-button').click()
        
        cy.contains('Username and password do not match any user in this service').should('be.visible')
    })
    
})
