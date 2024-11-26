class InventoryPage {
    // Selectors
    selectors = {
      pageTitle: '[data-test="title"]',
      productsList: '[data-test="inventory-list"]',
      inventoryItems: '[data-test="inventory-item"]'
    };
  
    validateInventoryPage() {
      cy.url().should('include', '/inventory.html');
      cy.get(this.selectors.productsList).should('be.visible');
      cy.get(this.selectors.inventoryItems).should('have.length.gt', 0);
    }
  
    validateProductsTitle() {
      cy.get(this.selectors.pageTitle)
        .should('be.visible')
        .and('contain', 'Products');
    }
  }
  
  export default new InventoryPage();