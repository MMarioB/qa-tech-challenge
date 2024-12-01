import { Given } from "@badeball/cypress-cucumber-preprocessor";

// Common steps that are used across multiple features
Given("I am on the Products page", () => {
  cy.url().should("include", "/inventory.html");
  cy.get(".title").should("have.text", "Products");
});