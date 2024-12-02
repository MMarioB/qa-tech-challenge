// cypress/e2e/step_definitions/remove-products.steps.js
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// Background steps
Given('I visit the Swag Labs homepage', () => {
    cy.visit('/');
    cy.get('#user-name').should('be.visible');
});

Given('I log in as standard user', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
});

// First scenario steps
Given('I add first product to cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should('be.visible')
      .and('have.text', 'Add to cart')
      .click();
});

When('I click remove button', () => {
    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .should('be.visible')
      .and('have.text', 'Remove')
      .click();
});

Then('the cart badge should not be visible', () => {
    cy.get('.shopping_cart_badge')
      .should('not.exist');
});

Then('the product button shows {string}', (text) => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should('be.visible')
      .and('have.text', text);
});

// Remove multiple products from Products page scenario steps
When('I add multiple products to the cart', () => {
    // Add multiple products to the cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
});

When('I remove some products from the Products page', () => {
    // Remove specific products from the cart
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
});

Then('the cart badge should reflect the correct number of remaining products', () => {
    // Assert that the cart badge shows the correct count
    cy.get('.shopping_cart_badge')
      .should('have.text', '1');
});

Then('the removed products should not be in the cart', () => {
    // Navigate to the cart page
    cy.get('.shopping_cart_link').click();

    // Assert that the removed products are not present in the cart
    cy.get('.cart_item')
      .should('have.length', 1)
      .and('not.contain', 'Sauce Labs Backpack')
      .and('not.contain', 'Sauce Labs Bike Light');
});

// Remove product from Product Details page scenario steps
When('I navigate to a product details page', () => {
    // Click on the product name to navigate to its details page
    cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack').click();
});

When('I add the product to the cart', () => {
    // Click the "Add to cart" button on the product details page
    cy.get('[data-test="add-to-cart"]').click();
});

When('I remove the product from the Product Details page', () => {
    // Click the "Remove" button on the product details page
    cy.get('[data-test="remove"]').click();
});

Then('the cart badge should no longer exist', () => {
    // Assert that the cart badge does not exist
    cy.get('.shopping_cart_badge').should('not.exist');
});

Then('the product should be removed from the cart', () => {
    // Navigate to the cart page
    cy.get('.shopping_cart_link').click();

    // Assert that the cart is empty
    cy.get('.cart_item').should('not.exist');
});

// Remove products from Shopping Cart scenario steps
When('I navigate to the Shopping Cart', () => {
    // Click on the shopping cart link to navigate to the cart page
    cy.get('.shopping_cart_link').click();
});

When('I remove a single product from the Shopping Cart', () => {
    // Remove a specific product from the cart
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
});

Then('the removed product should not be in the cart', () => {
    // Assert that the removed product is not present in the cart
    cy.get('.cart_item')
      .should('have.length', 1)
      .and('not.contain', 'Sauce Labs Backpack');
});

// Remove all products from Shopping Cart scenario steps
When('I remove all products from the Shopping Cart', () => {
    // Remove all products from the cart
    cy.get('[data-test^="remove-"]').each(($removeButton) => {
        cy.wrap($removeButton).click();
    });
});

Then('the Shopping Cart should be empty', () => {
    // Assert that the cart is empty
    cy.get('.cart_item').should('not.exist');
});

Then('the cart badge should not exist', () => {
    // Assert that the cart badge does not exist
    cy.get('.shopping_cart_badge').should('not.exist');
});

// Attempt to remove product from empty cart scenario steps
Then('no remove buttons should be visible', () => {
    // Assert that no remove buttons are visible
    cy.get('[data-test^="remove-"]').should('not.exist');
});