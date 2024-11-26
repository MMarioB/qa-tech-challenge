class ProductsPage {
    selectors = {
      pageTitle: '.title',
      productTitles: '.inventory_item_name',
      productImages: '.inventory_item_img'
    }
  
    verifyProductsPageIsVisible() {
      cy.get(this.selectors.pageTitle).should('contain.text', 'Products')
      cy.get(this.selectors.productTitles).should('be.visible')
    }
  
    selectFirstProduct() {
      cy.get(this.selectors.productTitles).first().click()
    }
  }
  
  export default ProductsPage