import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I click on the burger menu button', () => {
  cy.openBurgerMenu();
});

When('I click on the {string} menu item', (menuItem) => {
  cy.clickMenuItem(menuItem);
});

Then('the app state should be reset to default', () => {
  cy.verifyAppReset();
});

Then('the menu should be closed', () => {
  cy.get('.bm-menu-wrap').should('have.attr', 'aria-hidden', 'true');
});

Then('the cart should be empty', () => {
  cy.get('.shopping_cart_badge').should('not.exist');
});

Then('all items should be available for purchase', () => {
  cy.get('[data-test^="add-to-cart"]').should('exist');
  cy.get('[data-test^="remove"]').should('not.exist');
});