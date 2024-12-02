import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I have products in my cart", () => {
  cy.get('.inventory_list', { timeout: 10000 }).should('be.visible');
  cy.get('.btn_inventory').first().click();
  cy.get('.btn_inventory').eq(1).click();
});

When("I navigate to the shopping cart", () => {
  cy.get(".shopping_cart_link").click();
});

When("I click the Checkout button", () => {
  cy.get('[data-test="checkout"]').click();
});

When("I fill in the following information:", (dataTable) => {
  const data = dataTable.hashes()[0];
  cy.get('[data-test="firstName"]').type(data.firstName);
  cy.get('[data-test="lastName"]').type(data.lastName);
  cy.get('[data-test="postalCode"]').type(data.postalCode);
});

When("I click Continue", () => {
  cy.get('[data-test="continue"]').click();
});

Then("I should see the checkout overview", () => {
  cy.url().should("include", "/checkout-step-two.html");
  cy.get('.checkout_summary_container').should('be.visible');
});

Then("the product information should be correct", () => {
  cy.get('.cart_item').should('have.length.at.least', 1);
});

Then("the financial summary should be accurate", () => {
  cy.get(".summary_subtotal_label").should("be.visible");
  cy.get(".summary_tax_label").should("be.visible");
  cy.get(".summary_total_label").should("be.visible");
});

When("I click Finish", () => {
  cy.get('[data-test="finish"]').click();
});

Then("I should see the order confirmation", () => {
  cy.url().should("include", "/checkout-complete.html");
  cy.get(".complete-header").should("be.visible");
});

Then("the cart should be empty", () => {
  cy.get(".shopping_cart_badge").should("not.exist");
});

Given("I am on the checkout information page", () => {
  cy.visit('/');
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
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

Given("I have {string} specific products in cart", (quantity) => {
  cy.visit('/');
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  cy.get('.inventory_list', { timeout: 10000 }).should('be.visible');
  cy.get('.btn_inventory').first().click();
  cy.get('.btn_inventory').eq(1).click();
});

When("I proceed to checkout", () => {
  cy.get(".shopping_cart_link").click();
  cy.get('[data-test="checkout"]').click();
  cy.url().should('include', '/checkout-step-one.html', { timeout: 5000 });
});

Then("I should see the following for each product:", (dataTable) => {
  dataTable.hashes().forEach((product, index) => {
    cy.get('.cart_item').eq(index).within(() => {
      cy.get('.inventory_item_name').should('contain', product.name);
      cy.get('.inventory_item_desc').should('contain', product.description);
      cy.get('.cart_quantity').should('contain', product.quantity);
      cy.get('.inventory_item_price').should('contain', product.price);
    });
  });
});

Then("I should see correct:", (dataTable) => {
  dataTable.hashes().forEach((row) => {
    switch (row.Label) {
      case "Item Total":
        cy.get(".summary_subtotal_label").should("contain", row.Value);
        break;
      case "Tax":
        cy.get(".summary_tax_label").should("contain", row.Value);
        break;
      case "Total":
        cy.get(".summary_total_label").should("contain", row.Value);
        break;
    }
  });
});

Then("payment information should be visible", () => {
  cy.contains("Payment Information").should("be.visible");
});

Then("shipping information should be visible", () => {
  cy.contains("Shipping Information").should("be.visible");
});

Then("I should be on the checkout information page", () => {
  cy.url().should("include", "/checkout-step-one.html");
});

When("I complete the information form", () => {
  cy.url().should('include', '/checkout-step-one.html');
  cy.get('[data-test="firstName"]').type("John");
  cy.get('[data-test="lastName"]').type("Doe");
  cy.get('[data-test="postalCode"]').type("12345");
  cy.get('[data-test="continue"]').click();
  cy.url().should('include', '/checkout-step-two.html');
});