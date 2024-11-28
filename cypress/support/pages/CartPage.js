class CartPage {
  // Existing selectors
  cartItems = '.cart_item';
  removeButtons = '.btn_secondary';
  continueShoppingButton = '[data-test="continue-shopping"]';
  checkoutButton = '[data-test="checkout"]';

  removeProduct(index = 0) {
      cy.get(this.cartItems).eq(index)
          .find(this.removeButtons)
          .click();
  }

  removeAllProducts() {
      cy.get(this.cartItems).each(($item) => {
          cy.wrap($item).find(this.removeButtons).click();
      });
  }

  verifyCartIsEmpty() {
      cy.get(this.cartItems).should('not.exist');
  }

  verifyNoRemoveButtons() {
      cy.get(this.removeButtons).should('not.exist');
  }

  continueShopping() {
      cy.get(this.continueShoppingButton).click();
  }
}

export default new CartPage();