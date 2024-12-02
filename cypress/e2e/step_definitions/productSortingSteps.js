const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

// Background steps
Given('the user opens sauce demo', () => {
  cy.visit('/');
  cy.get('#user-name').should('be.visible');
});

Given('the user performs login', () => {
  cy.loginToSwagLabs();
});

Then('I should be on the Products page', () => {
  cy.url().should('include', '/inventory.html');
  cy.get('.title').should('have.text', 'Products');
});

When('I select sort option {string}', (sortOption) => {
  cy.get('[data-test="product-sort-container"]').select(sortOption);
});

Then('the products should be sorted by {string} in {string} order', (sortCriteria, order) => {
  const expectedOrder = order === 'ascending' ? 'asc' : 'desc';

  if (sortCriteria === 'name') {
    cy.get('.inventory_item_name').then(($items) => {
      const actualNames = $items.map((_, item) => Cypress.$(item).text()).get();
      const expectedNames = [...actualNames].sort();
      if (expectedOrder === 'desc') {
        expectedNames.reverse();
      }
      expect(actualNames).to.deep.equal(expectedNames);
    });
  } else if (sortCriteria === 'price') {
    cy.get('.inventory_item_price').then(($items) => {
      const actualPrices = $items.map((_, item) => parseFloat(Cypress.$(item).text().replace('$', ''))).get();
      const expectedPrices = [...actualPrices].sort((a, b) => a - b);
      if (expectedOrder === 'desc') {
        expectedPrices.reverse();
      }
      expect(actualPrices).to.deep.equal(expectedPrices);
    });
  }
});