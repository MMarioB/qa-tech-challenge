import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../support/pages/LoginPage';
import ProductsPage from '../../support/pages/ProductPage';

Given('I am logged in as a standard user', () => {
  LoginPage.visit();
  LoginPage.login(
    Cypress.env('USERNAME'), 
    Cypress.env('PASSWORD')
  );
});

Given('I am on the Products page', () => {
  ProductsPage.visit();
});

When('I add {string} to the cart', (productName) => {
  ProductsPage.addProductToCart(productName);
});

When('I add the following products to cart:', (dataTable) => {
  dataTable.rawTable.forEach(row => {
    ProductsPage.addProductToCart(row[0]);
  });
});

When('I remove {string} from the cart', (productName) => {
  ProductsPage.getProductByName(productName)
    .find('[data-test^="remove"]')
    .click();
});

Then('the cart should show {string} items?', (count) => {
  ProductsPage.verifyCartCount(parseInt(count));
});

Then('the {string} product should be marked as added', (productName) => {
  ProductsPage.verifyProductAdded(productName);
});

When('I navigate to the details page for {string}', (productName) => {
  ProductsPage.getProductByName(productName)
    .find('.inventory_item_name')
    .click();
});

When('I add the product to cart from the details page', () => {
  cy.get('[data-test^="add-to-cart"]').first().click();
});