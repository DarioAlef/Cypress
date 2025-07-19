describe('Teste Extra com Comando Customizado', () => {
    
    it('LOGIN_004 - Testando comando customizado', () => {
        cy.fazerLogin('standard_user', 'secret_sauce')
        
        cy.get('.title').should('be.visible')
        
        cy.wait(3000)
        cy.get('.title').should('contain', 'Products')
    })
    
    it('ERRO_001 - Teste que deve falhar', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        
        cy.get('.produto-inexistente').should('be.visible')
    })
})
