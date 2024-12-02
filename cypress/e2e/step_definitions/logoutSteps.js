import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am logged in as {string} with password {string}", (username, password) => {
  cy.visit("/");
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

When("I click the logout button", () => {
  cy.get("#react-burger-menu-btn").click();
  cy.get("#logout_sidebar_link").click();
});

Then("I should be redirected to the login page", () => {
  cy.url().should("include", "/");
  cy.get('[data-test="username"]').should("be.visible");
  cy.get('[data-test="password"]').should("be.visible");
  cy.get('[data-test="login-button"]').should("be.visible");
});