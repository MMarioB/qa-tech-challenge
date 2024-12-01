const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const USER = {
  username: 'standard_user',
  password: 'secret_sauce'
};

let productInfo = {};

Given('I am on the login page', () => {
  cy.visit('/', { timeout: 90000 });
  cy.get('#user-name').should('be.visible');
});

When('I login as standard user', () => {
  cy.get('#user-name').type(USER.username);
  cy.get('#password').type(USER.password);
  cy.get('#login-button').click();
});

Then('I should be on the products page', () => {
  cy.url().should('include', '/inventory.html');
  cy.get('.title')
    .should('be.visible')
    .and('have.text', 'Products');
});

When('I click on a product', () => {
  // Store product information for later comparison
  cy.get('.inventory_item').first().within(() => {
    cy.get('.inventory_item_name').invoke('text').then(text => {
      productInfo.name = text;
    });
    cy.get('.inventory_item_desc').invoke('text').then(text => {
      productInfo.description = text;
    });
    cy.get('.inventory_item_price').invoke('text').then(text => {
      productInfo.price = text;
    });
    cy.get('.inventory_item_name').click();
  });
});

Then('I should see the product details', () => {
  cy.url().should('include', '/inventory-item.html');
  cy.get('.inventory_details')
    .should('be.visible');
});

Then('the product information should be complete', () => {
  // Verify all product details match
  cy.get('.inventory_details_name')
    .should('have.text', productInfo.name);
    
  cy.get('.inventory_details_desc')
    .should('have.text', productInfo.description);
    
  cy.get('.inventory_details_price')
    .should('have.text', productInfo.price);
    
  // Verify image is present
  cy.get('.inventory_details_img')
    .should('be.visible')
    .and('have.attr', 'src')
    .and('not.be.empty');
});