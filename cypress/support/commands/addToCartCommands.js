Cypress.Commands.add('addToCart', {
    prevSubject: 'optional'
  }, (subject, productName) => {
    // If a subject is passed (like a specific element), use it
    // Otherwise, search for the product on the page
    const productSelector = subject 
      ? subject 
      : cy.contains('.inventory_item_name', productName)
          .closest('.inventory_item');
  
    // Click add to cart button
    return productSelector
      .find('[data-test^="add-to-cart"]')
      .click();
  });
  
  Cypress.Commands.add('removeFromCart', {
    prevSubject: 'optional'
  }, (subject, productName) => {
    const productSelector = subject 
      ? subject 
      : cy.contains('.inventory_item_name', productName)
          .closest('.inventory_item');
  
    // Click remove button
    return productSelector
      .find('[data-test^="remove"]')
      .click();
  });
  
  Cypress.Commands.add('navigateToProductDetails', (productName) => {
    return cy.contains('.inventory_item_name', productName)
      .click();
  });
  
  Cypress.Commands.add('verifyProductAddedToCart', (productName) => {
    cy.contains('.inventory_item_name', productName)
      .closest('.inventory_item')
      .find('[data-test^="remove"]')
      .should('be.visible');
  });
  
  Cypress.Commands.add('verifyCartBadge', (expectedCount) => {
    if (expectedCount > 0) {
      cy.get('[data-test="shopping-cart-badge"]')
        .should('be.visible')
        .and('contain', expectedCount);
    } else {
      cy.get('[data-test="shopping-cart-badge"]')
        .should('not.exist');
    }
  });
  
  Cypress.Commands.add('openCart', () => {
    cy.get('[data-test="shopping-cart-link"]').click();
  });
  
  Cypress.Commands.add('verifyProductInCart', (productName) => {
    cy.openCart();
    cy.contains('.inventory_item_name', productName)
      .should('be.visible');
  });
  
  Cypress.Commands.add('clearCart', () => {
    cy.openCart();
    cy.get('[data-test^="remove"]').each(($removeButton) => {
      cy.wrap($removeButton).click();
    });
  });