// Teste de Carrinho de Compras
describe('Teste de Adicionar ao Carrinho', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.inventory_list').should('be.visible')
    })
    
    it('COMPRA_001 - Adicionar produto ao carrinho', () => {
        cy.get('.btn_inventory').first().click()
        
        cy.get('.shopping_cart_badge').should('contain', '1')
        
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_item').should('have.length', 1)
        
        cy.get('.inventory_item_name').should('exist')
    })
    
    it('COMPRA_002 - Adicionar varios produtos', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        
        cy.get('.shopping_cart_badge').should('contain', '3')
        
        cy.get('.btn_inventory').should('have.length.greaterThan', 0)
    })
    
})
