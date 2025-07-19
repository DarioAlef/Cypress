describe('Teste de Carrinho no Sauce Demo', () => {
    
    it('COMPRA_001 - Adicionar produto no carrinho', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce') 
        cy.get('#login-button').click()
        
        cy.wait(1000)
        cy.get('.inventory_list').should('be.visible')
        
        cy.get('.btn_inventory').first().click()
        
        cy.get('.shopping_cart_badge').should('be.visible')
        cy.get('.shopping_cart_badge').should('contain', '1')
        
        cy.get('.shopping_cart_link').click()
        
        cy.get('.cart_item').should('exist')
        cy.get('.inventory_item_name').should('be.visible')
    })
    
    it('COMPRA_002 - Ver carrinho vazio inicialmente', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        
        cy.get('.shopping_cart_link').click()
        
        cy.get('.cart_list').should('exist')
        cy.get('.cart_item').should('not.exist') 
    })
})
