export default class ProductPage {
  // Existing selectors
  inventoryItems = '.inventory_item';
  addToCartButtons = '.btn_inventory';
  removeFromCartButtons = '.btn_secondary';
  cartBadge = '.shopping_cart_badge';
  cartIcon = '.shopping_cart_link';
  productNames = '.inventory_item_name';

  addProductToCart(index = 0) {
      cy.get(this.inventoryItems).eq(index)
          .find(this.addToCartButtons)
          .click();
  }

  removeProductFromCart(index = 0) {
      cy.get(this.inventoryItems).eq(index)
          .find(this.removeFromCartButtons)
          .click();
  }

  verifyCartBadgeNotExists() {
      cy.get(this.cartBadge).should('not.exist');
  }

  verifyProductNotInCart() {
      // Verify the specific product is not in cart
      cy.get(this.inventoryItems)
          .find(this.removeFromCartButtons)
          .should('have.length', 0);
  }

  verifyRemovedProductsNotInCart() {
      // Verify reduced number of cart items
      cy.get(this.removeFromCartButtons).should('have.length.lessThan', 3);
  }

  verifyCartBadgeCount() {
      // Verify cart badge reflects correct number of items
      cy.get(this.cartBadge)
          .should('be.visible')
          .and('have.text', '1'); // Assuming 1 product remains
  }

  navigateToProductDetails(index = 0) {
      cy.get(this.productNames).eq(index).click();
  }

  navigateToCart() {
      cy.get(this.cartIcon).click();
  }
}