import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'

const loginPage = new LoginPage()
const productsPage = new ProductsPage()
const productDetailsPage = new ProductDetailsPage()

Given('I am logged in as a standard user', () => {
  cy.visit('/')
  loginPage.login('standard_user', 'secret_sauce')
})

When('I navigate to the Products page', () => {
  productsPage.verifyProductsPageIsVisible()
})

When('I select a product', () => {
  productsPage.selectFirstProduct()
})

Then('I should see the product details page', () => {
  productDetailsPage.verifyProductDetailsPageIsVisible()
})

Then('the page should display product information', () => {
  productDetailsPage.verifyProductDetails()
})