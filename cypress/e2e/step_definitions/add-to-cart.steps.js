const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('the user open the saucedemo', () => {
  cy.visit('/');
  cy.get('#user-name').should('be.visible');
});

Given('the user do the login', () => {
  cy.loginToSwagLabs();
});

When('the user adds the first product to cart', () => {
  cy.get('[data-test^="add-to-cart"]').first().click();
});

Then('the cart badge displays {string}', count => {
  cy.get('.shopping_cart_badge').should('be.visible').and('have.text', count);
});

Then('the product button displays {string}', text => {
  cy.get('[data-test^="add-to-cart"], [data-test^="remove"]').first().should('have.text', text);
});

When('the user clicks on first inventory item', () => {
  cy.get('[data-test="inventory-item-name"]').first().should('be.visible').click();
});

When('the user clicks add to cart on details page', () => {
  cy.get('[data-test="add-to-cart"]').should('be.visible').click();
});

Then('the remove button should be visible on details page', () => {
  cy.get('[data-test="remove"]').should('be.visible').and('have.text', 'Remove');
});

When('the user removes the product', () => {
  cy.get('[data-test^="remove"]').first().click();
});

Then('the cart badge is not visible', () => {
  cy.get('.shopping_cart_badge').should('not.exist');
});

When('the user is adding {string} products to cart', productCount => {
  for (let i = 0; i < parseInt(productCount); i++) {
    cy.get('[data-test^="add-to-cart"]').eq(i).click();
  }
});
Then('selected products to display the {string}', (buttonText) => {
  cy.get('[data-test^="add-to-cart"], [data-test^="remove"]')
    .should('have.length', 3)
    .each($btn => cy.wrap($btn).should('have.text', buttonText));
});