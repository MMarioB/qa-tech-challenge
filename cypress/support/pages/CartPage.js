class CartPage {
    elements = {
      cartItems: () => cy.get('.cart_item'),
      cartItemNames: () => cy.get('.inventory_item_name'),
      cartItemPrices: () => cy.get('.inventory_item_price'),
      checkoutButton: () => cy.get('[data-test="checkout-button"]'),
      continueShoppingButton: () => cy.get('[data-test="continue-shopping"]'),
      removeButtons: () => cy.get('[data-test^="remove-"]')
    }
  
    visit() {
      cy.visit('/cart.html');
    }
  
    getCartItemCount() {
      return this.elements.cartItems().length;
    }
  
    verifyProductInCart(productName) {
      this.elements.cartItemNames()
        .should('contain', productName);
    }
  
    removeProduct(productName) {
      this.elements.cartItemNames()
        .contains(productName)
        .closest('.cart_item')
        .find('[data-test^="remove-"]')
        .click();
    }
  
    proceedToCheckout() {
      this.elements.checkoutButton().click();
    }
  
    continueShopping() {
      this.elements.continueShoppingButton().click();
    }
  
    verifyCartTotal() {
      let total = 0;
      this.elements.cartItemPrices().each(($price) => {
        total += parseFloat($price.text().replace('$', ''));
      });
      return total;
    }

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