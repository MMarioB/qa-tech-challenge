const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const USERS = {
  standard_user: 'secret_sauce',
  problem_user: 'secret_sauce',
  performance_glitch_user: 'secret_sauce',
  locked_out_user: 'secret_sauce'
};

beforeEach(() => {
  cy.clearSession();
});

Given("I am on the login page", () => {
  cy.visit("/", { timeout: 120000 }); // Increased timeout for performance_glitch_user
  cy.get('#user-name').should('be.visible');
  cy.get('#password').should('be.visible');
});

When("I login as {string}", (userType) => {
  // Special handling for performance_glitch_user
  if (userType === 'performance_glitch_user') {
    cy.get('#user-name', { timeout: 30000 }).type(userType, { delay: 100 });
    cy.get('#password', { timeout: 30000 }).type(USERS[userType], { delay: 100 });
    cy.get('#login-button').click();
    // Wait longer for response with performance_glitch_user
    cy.get('.inventory_container', { timeout: 90000 }).should('exist');
  } else {
    cy.get('#user-name').type(userType);
    cy.get('#password').type(USERS[userType]);
    cy.get('#login-button').click();
  }
});

Then("I should be logged in successfully", () => {
  // Different assertions for different user types
  cy.url().should("include", "/inventory.html");
  cy.get('.inventory_container', { timeout: 30000 }).should('exist');
});

Then("I should see the products page", () => {
  cy.get(".title", { timeout: 30000 })
    .should("be.visible")
    .and("have.text", "Products");
});

Then("I should see error message {string}", (message) => {
  // Specific handling for locked_out_user
  cy.get('[data-test="error"]', { timeout: 30000 })
    .should("be.visible")
    .and("have.text", message);
});