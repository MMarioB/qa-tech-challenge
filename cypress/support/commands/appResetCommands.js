Cypress.Commands.add('openBurgerMenu', () => {
    cy.get('#react-burger-menu-btn').click();
    // Wait for menu transition
    cy.get('.bm-menu-wrap').should('have.attr', 'aria-hidden', 'false');
  });
  
  Cypress.Commands.add('clickMenuItem', (itemName) => {
    cy.get('.bm-item-list').contains(itemName).click();
  });
  
  Cypress.Commands.add('verifyAppReset', () => {
    // Verify cart is empty
    cy.get('.shopping_cart_badge').should('not.exist');
    
    // Verify all items are available (no "Remove" buttons)
    cy.get('[data-test^="add-to-cart"]').should('exist');
    cy.get('[data-test^="remove"]').should('not.exist');
    
    // Verify menu is closed
    cy.get('.bm-menu-wrap').should('have.attr', 'aria-hidden', 'true');
  });