describe('Swag Labs Product Details', () => {
    beforeEach(() => {
      // Login before each test
      cy.loginByUserType('standard_user')
    })
  
    it('should navigate to product details page', () => {
      // Visit products page
      cy.get('.inventory_item_name').first().click()
  
      // Verify details page
      cy.url().should('include', '/inventory-item.html')
      cy.get('.inventory_details_name').should('be.visible')
      cy.get('.inventory_details_desc').should('be.visible')
      cy.get('.inventory_details_price').should('be.visible')
    })
  
    it('should allow returning to products page', () => {
      cy.get('.inventory_item_name').first().click()
      cy.get('[data-test="back-to-products"]').click()
      cy.get('.title').should('contain.text', 'Products')
    })
  })