import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Background steps
Given("I have products in my cart", () => {
  cy.get('[data-test^="add-to-cart"]').first().click();
  cy.get('[data-test^="add-to-cart"]').eq(1).click();
});

// Navigation steps
When("I navigate to the shopping cart", () => {
  cy.get(".shopping_cart_link").click();
});

When("I click the Checkout button", () => {
  cy.get('[data-test="checkout"]').click();
});

Then("I should be on the checkout information page", () => {
  cy.url().should("include", "/checkout-step-one.html");
});

// Form handling
When("I fill in the following information:", (dataTable) => {
  const data = dataTable.hashes()[0];
  cy.get('[data-test="firstName"]').type(data.firstName);
  cy.get('[data-test="lastName"]').type(data.lastName);
  cy.get('[data-test="postalCode"]').type(data.postalCode);
});

When("I click Continue", () => {
  cy.get('[data-test="continue"]').click();
});

// Overview page verification
Then("I should see the checkout overview", () => {
  cy.url().should("include", "/checkout-step-two.html");
});

Then("the product information should be correct", () => {
  cy.get(".cart_item").each(($item) => {
    cy.wrap($item).within(() => {
      cy.get(".inventory_item_name").should("be.visible");
      cy.get(".inventory_item_desc").should("be.visible");
      cy.get(".inventory_item_price").should("be.visible");
      cy.get(".cart_quantity").should("be.visible");
    });
  });
});

Then("the financial summary should be accurate", () => {
  cy.get(".summary_subtotal_label").should("be.visible")
    .and("contain", "$");
  cy.get(".summary_tax_label").should("be.visible")
    .and("contain", "$");
  cy.get(".summary_total_label").should("be.visible")
    .and("contain", "$");
});

// Completion steps
When("I click Finish", () => {
  cy.get('[data-test="finish"]').click();
});

Then("I should see the order confirmation", () => {
  cy.url().should("include", "/checkout-complete.html");
  cy.get(".complete-header").should("be.visible");
  cy.get(".complete-text").should("be.visible");
});

Then("the cart should be empty", () => {
  cy.get(".shopping_cart_badge").should("not.exist");
});

// Form validation
Given("I am on the checkout information page", () => {
  cy.get(".shopping_cart_link").click();
  cy.get('[data-test="checkout"]').click();
});

When("I fill in the form with:", (dataTable) => {
  const data = dataTable.hashes()[0];
  if (data.firstName) cy.get('[data-test="firstName"]').type(data.firstName);
  if (data.lastName) cy.get('[data-test="lastName"]').type(data.lastName);
  if (data.postalCode) cy.get('[data-test="postalCode"]').type(data.postalCode);
});

Then("I should see the error message {string}", (errorMessage) => {
  cy.get('[data-test="error"]').should("have.text", errorMessage);
});

// Order details verification
Given("I have {string} specific products in cart", (quantity) => {
  for (let i = 0; i < parseInt(quantity); i++) {
    cy.get('[data-test^="add-to-cart"]').eq(i).click();
  }
});

When("I proceed to checkout", () => {
  cy.get(".shopping_cart_link").click();
  cy.get('[data-test="checkout"]').click();
});

When("I complete the information form", () => {
  cy.get('[data-test="firstName"]').type("John");
  cy.get('[data-test="lastName"]').type("Doe");
  cy.get('[data-test="postalCode"]').type("12345");
  cy.get('[data-test="continue"]').click();
});

Then("I should see correct:", (dataTable) => {
  dataTable.raw().forEach(([label]) => {
    cy.get(`.summary_${label.toLowerCase()}_label`).should("be.visible")
      .and("contain", "$");
  });
});

Then("payment information should be visible", () => {
  cy.contains("Payment Information").should("be.visible");
});

Then("shipping information should be visible", () => {
  cy.contains("Shipping Information").should("be.visible");
});