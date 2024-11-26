class ProductDetailsPage {
    selectors = {
      productTitle: '.inventory_details_name',
      productDescription: '.inventory_details_desc',
      productPrice: '.inventory_details_price',
      backToProductsButton: '[data-test="back-to-products"]'
    }
  
    verifyProductDetailsPageIsVisible() {
      cy.url().should('include', '/inventory-item.html')
      cy.get(this.selectors.productTitle).should('be.visible')
    }
  
    verifyProductDetails() {
      cy.get(this.selectors.productTitle).should('be.visible')
      cy.get(this.selectors.productDescription).should('be.visible')
      cy.get(this.selectors.productPrice).should('be.visible')
    }
  }
  
  export default ProductDetailsPage