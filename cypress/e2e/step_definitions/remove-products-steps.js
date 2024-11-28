import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../support/pages/LoginPage';
import ProductPage from '../../support/pages/ProductPage';
import ProductDetailsPage from '../../support/pages/ProductDetailsPage';
import CartPage from '../../support/pages/CartPage';

Given('I am logged in as a standard user', () => {
    LoginPage.visit();
    LoginPage.login('standard_user', 'secret_sauce');
    LoginPage.verifyLoginSuccess();
});

When('I add a single product to the cart', () => {
    ProductPage.addProductToCart(0);
});

When('I add multiple products to the cart', () => {
    ProductPage.addProductToCart(0);
    ProductPage.addProductToCart(1);
    ProductPage.addProductToCart(2);
});

When('I remove the product from the Products page', () => {
    ProductPage.removeProductFromCart(0);
});

When('I remove some products from the Products page', () => {
    ProductPage.removeProductFromCart(0);
    ProductPage.removeProductFromCart(1);
});

When('I navigate to a product details page', () => {
    ProductPage.navigateToProductDetails(0);
});

When('I add the product to the cart', () => {
    ProductDetailsPage.addToCart();
});

When('I remove the product from the Product Details page', () => {
    ProductDetailsPage.removeFromCart();
});

When('I navigate to the Shopping Cart', () => {
    ProductPage.navigateToCart();
});

When('I remove a single product from the Shopping Cart', () => {
    CartPage.removeProduct(0);
});

When('I remove all products from the Shopping Cart', () => {
    CartPage.removeAllProducts();
});

Then('the cart badge should not exist', () => {
    ProductPage.verifyCartBadgeNotExists();
});

Then('the product should be removed from the cart', () => {
    ProductPage.verifyProductNotInCart();
});

Then('the cart badge should reflect the correct number of remaining products', () => {
    ProductPage.verifyCartBadgeCount();
});

Then('the removed products should not be in the cart', () => {
    ProductPage.verifyRemovedProductsNotInCart();
});

Then('the Shopping Cart should be empty', () => {
    CartPage.verifyCartIsEmpty();
});

Then('no remove buttons should be visible', () => {
    CartPage.verifyNoRemoveButtons();
});