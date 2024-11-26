import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../support/pages/LoginPage';
import InventoryPage from '../../support/pages/InventoryPage';

Given('I am on the login page', () => {
  LoginPage.visit();
});

When('I login with {string} and {string}', (username, password) => {
  LoginPage.login(username, password);
});

Then('I should be redirected to the inventory page', () => {
  InventoryPage.validateInventoryPage();
});

Then('I should see the products title', () => {
  InventoryPage.validateProductsTitle();
});

Then('I should see an error message indicating the account is locked', () => {
  LoginPage.getErrorMessage()
    .should('be.visible')
    .and('contain', 'Sorry, this user has been locked out');
});