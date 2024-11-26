import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../support/pages/LoginPage';
import MenuPage from '../../support/pages/MenuPage';

Given('I am logged in as {string} with password {string}', (username, password) => {
  LoginPage.visit();
  LoginPage.login(username, password);
});

When('I click the logout button', () => {
  MenuPage.logout();
});

Then('I should be redirected to the login page', () => {
  LoginPage.validateLoginPage();
});