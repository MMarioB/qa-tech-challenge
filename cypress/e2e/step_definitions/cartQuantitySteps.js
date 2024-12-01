import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

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

// Generic method for adding multiple products
When("I add {string} products to the cart", (quantity) => {
  const count = parseInt(quantity);
  for (let i = 0; i < count; i++) {
    cy.get('[data-test^="add-to-cart"]').eq(i).click();
  }
});

When("I add {string} different products to the cart", (quantity) => {
  const count = parseInt(quantity);
  for (let i = 0; i < count; i++) {
    cy.get('[data-test^="add-to-cart"]').eq(i).click();
  }
});

Then("the cart badge should show {string}", (quantity) => {
  cy.get(".shopping_cart_badge").should("have.text", quantity);
});

Then("the cart badge should be visible", () => {
  cy.get(".shopping_cart_badge").should("be.visible");
});

Then("I should be on the Product Details page", () => {
  cy.url().should("include", "/inventory-item.html");
});

Then("the cart badge should still show {string}", (quantity) => {
  cy.get(".shopping_cart_badge").should("have.text", quantity);
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