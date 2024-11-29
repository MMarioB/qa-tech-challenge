import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the Swag Labs login page', () => {
  cy.visit('https://www.saucedemo.com/');
});

When('I login as {string} with password {string}', (username, password) => {
  cy.login(username, password);
});

Then('I should be on the Products page', () => {
  cy.verifyProductsPage();
});

When('I select sort option {string}', (sortOption) => {
  cy.sortProducts(sortOption);
});

Then('the products should be sorted by {string} in {string} order', (sortCriteria, order) => {
  cy.verifyProductSorting(sortCriteria, order);
});