import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';

Given('I am logged in as a standard user', () => {
    LoginPage.visit();
    LoginPage.login('standard_user', 'secret_sauce');
    LoginPage.verifyLoginSuccess();
});

When('I add a single product to the cart', () => {
    ProductsPage.addProductToCart(0);
});

When('I add multiple products to the cart', () => {
    ProductsPage.addProductToCart(0);
    ProductsPage.addProductToCart(1);
    ProductsPage.addProductToCart(2);
});

When('I remove the product from the Products page', () => {
    ProductsPage.removeProductFromCart(0);
});

When('I remove some products from the Products page', () => {
    ProductsPage.removeProductFromCart(0);
    ProductsPage.removeProductFromCart(1);
});

When('I navigate to a product details page', () => {
    ProductsPage.navigateToProductDetails(0);
});

When('I add the product to the cart', () => {
    ProductDetailsPage.addToCart();
});

When('I remove the product from the Product Details page', () => {
    ProductDetailsPage.removeFromCart();
});

When('I navigate to the Shopping Cart', () => {
    ProductsPage.navigateToCart();
});

When('I remove a single product from the Shopping Cart', () => {
    CartPage.removeProduct(0);
});

When('I remove all products from the Shopping Cart', () => {
    CartPage.removeAllProducts();
});

Then('the cart badge should not exist', () => {
    ProductsPage.verifyCartBadgeNotExists();
});

Then('the product should be removed from the cart', () => {
    ProductsPage.verifyProductNotInCart();
});

Then('the cart badge should reflect the correct number of remaining products', () => {
    ProductsPage.verifyCartBadgeCount();
});

Then('the removed products should not be in the cart', () => {
    ProductsPage.verifyRemovedProductsNotInCart();
});

Then('the Shopping Cart should be empty', () => {
    CartPage.verifyCartIsEmpty();
});

Then('no remove buttons should be visible', () => {
    CartPage.verifyNoRemoveButtons();
});