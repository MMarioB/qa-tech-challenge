const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

// Given step for login
Given('I am an standard user', () => {
  cy.visit('/');
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
});

When('I click on the burger menu button', () => {
  cy.get('#react-burger-menu-btn').click();
  // Wait for menu animation
  cy.wait(1000);
});

When('I click on the {string} menu item', (menuItem) => {
  cy.get('#reset_sidebar_link').click();
  // Wait for reset action
  cy.wait(1000);
  // Close the menu explicitly
  cy.get('#react-burger-cross-btn').click();
  // Wait for menu closing animation
  cy.wait(1000);
});

Then('the app state should be reset to default', () => {
  cy.get('.inventory_item').should('have.length', 6);
  
  const expectedProducts = [
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Fleece Jacket',
    'Sauce Labs Onesie',
    'Test.allTheThings() T-Shirt (Red)'
  ];

  cy.get('.inventory_item_name').each(($item, index) => {
    expect($item.text()).to.equal(expectedProducts[index]);
  });
});

Then('the menu should be closed', () => {
  cy.get('.bm-menu').should('not.be.visible');
  cy.get('.bm-menu-wrap').should('have.attr', 'aria-hidden', 'true');
});

Then('all items should be available for purchase', () => {
  cy.get('.inventory_item').each(($item) => {
    cy.wrap($item)
      .find('.btn_inventory')
      .should('be.visible')
      .and('contain.text', 'Add to cart');
  });
});