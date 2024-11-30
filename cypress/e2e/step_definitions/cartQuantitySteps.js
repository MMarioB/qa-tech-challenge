import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Background steps
Given("I am logged in as a standard user", () => {
  cy.visit("/");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

Given("I am on the Products page", () => {
  cy.url().should("include", "/inventory.html");
  cy.get(".title").should("have.text", "Products");
});

// Cart state verification
Then("the shopping cart should be empty", () => {
  cy.get(".shopping_cart_link").should("exist");
  cy.get(".shopping_cart_badge").should("not.exist");
});

Then("no quantity badge should be visible", () => {
  cy.get(".shopping_cart_badge").should("not.exist");
});

// Adding products
When("I add one product to the cart", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').first().click();
});

Then("the cart badge should show {string}", (quantity) => {
  cy.get(".shopping_cart_badge").should("have.text", quantity);
});

Then("the cart badge should be visible", () => {
  cy.get(".shopping_cart_badge").should("be.visible");
});

When("I add {string} different products to the cart", (quantity) => {
  const count = parseInt(quantity);
  for (let i = 0; i < count; i++) {
    cy.get('[data-test^="add-to-cart"]').eq(i).click();
  }
});

// Navigation verification
When("I click on a product title", () => {
  cy.get(".inventory_item_name").first().click();
});

Then("I should be on the Product Details page", () => {
  cy.url().should("include", "/inventory-item.html");
});

Then("the cart badge should still show {string}", (quantity) => {
  cy.get(".shopping_cart_badge").should("have.text", quantity);
});

When("I navigate to the shopping cart", () => {
  cy.get(".shopping_cart_link").click();
});

Then("I should see {int} items in the cart", (quantity) => {
  cy.get(".cart_item").should("have.length", quantity);
});

// Cart manipulation
Given("I have {string} products in the cart", (quantity) => {
  const count = parseInt(quantity);
  for (let i = 0; i < count; i++) {
    cy.get('[data-test^="add-to-cart"]').eq(i).click();
  }
});

When("I remove one product", () => {
  cy.get('[data-test^="remove-"]').first().click();
});

When("I remove all products", () => {
  cy.get('[data-test^="remove-"]').each(($button) => {
    cy.wrap($button).click();
  });
});

When("I refresh the page", () => {
  cy.reload();
});

Then("navigating to the cart page should show {int} items", (quantity) => {
  cy.get(".shopping_cart_link").click();
  cy.get(".cart_item").should("have.length", quantity);
});