const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// Background steps
Given('the user opens Swag Labs', () => {
  cy.visit('/');
  cy.get('#user-name').should('be.visible');
});

Given('the user performs login', () => {
  cy.loginToSwagLabs();
});

// Single product steps
When('the user adds the first product to cart', () => {
  cy.get('[data-test^="add-to-cart"]')
    .first()
    .click();
});

Then('the cart badge displays {string}', (count) => {
  cy.get('.shopping_cart_badge')
    .should('be.visible')
    .and('have.text', count);
});

Then('the product button displays {string}', (text) => {
  cy.get('[data-test^="add-to-cart"], [data-test^="remove"]')
    .first()
    .should('have.text', text);
});

// Multiple products steps
When('the user adds {string} products to cart', (count) => {
  const numProducts = parseInt(count);
  for (let i = 0; i < numProducts; i++) {
    cy.get('[data-test^="add-to-cart"]')
      .eq(i)
      .should('be.visible')
      .click();
  }
});

Then('selected products display {string}', (text) => {
  cy.get('[data-test^="remove"]')
    .each(($button) => {
      cy.wrap($button).should('have.text', text);
    });
});

// Product Details steps
When('the user clicks on first inventory item', () => {
  cy.get('[data-test="inventory-item-name"]')
    .first()
    .should('be.visible')
    .click();
});

When('the user clicks add to cart on details page', () => {
  cy.get('[data-test="add-to-cart"]')
    .should('be.visible')
    .click();
});

Then('the remove button should be visible on details page', () => {
  cy.get('[data-test="remove"]')
    .should('be.visible')
    .and('have.text', 'Remove');
});

// Remove product steps
When('the user removes the product', () => {
  cy.get('[data-test^="remove"]')
    .first()
    .click();
});

Then('the cart badge is not visible', () => {
  cy.get('.shopping_cart_badge').should('not.exist');
});