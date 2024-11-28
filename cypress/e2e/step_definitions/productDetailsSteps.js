import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../support/pages/LoginPage'
import ProductPage from '../../support/pages/ProductPage'
import ProductDetailsPage from '../../support/pages/ProductDetailsPage'

const loginPage = new LoginPage()
const productPage = new ProductPage()
const productDetailsPage = new ProductDetailsPage()

Given('I am logged in as a standard user', () => {
  cy.visit('/')
  loginPage.login('standard_user', 'secret_sauce')
})

When('I navigate to the Products page', () => {
  productPage.verifyProductsPageIsVisible()
})

When('I select a product', () => {
  productPage.selectFirstProduct()
})

Then('I should see the product details page', () => {
  productDetailsPage.verifyProductDetailsPageIsVisible()
})

Then('the page should display product information', () => {
  productDetailsPage.verifyProductDetails()
})