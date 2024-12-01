import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the login page", () => {
  cy.visit("/");
  cy.get('#user-name').should('be.visible');
  cy.get('#password').should('be.visible');
});

When("I enter username {string} and password {string}", (username, password) => {
  // Using ID selectors for better reliability
  cy.get('#user-name')
    .should('have.attr', 'placeholder', 'Username')
    .type(username);
    
  cy.get('#password')
    .should('have.attr', 'placeholder', 'Password')
    .type(password);
    
  cy.get('#login-button')
    .should('have.attr', 'type', 'submit')
    .click();
});

Then("I should be logged in successfully", () => {
  cy.url().should("include", "/inventory.html");
});

Then("I should see the products page", () => {
  cy.get(".title").should("have.text", "Products");
  cy.get(".inventory_item").should("exist");
});

Then("I should see error message {string}", (message) => {
  cy.get('[data-test="error"]').should("have.text", message);
});