const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("I clear session and cookies", () => {
  cy.window().then((win) => {
    win.sessionStorage.clear();
    win.localStorage.clear();
  });
  cy.clearCookies();
});

When("I visit the login page", () => {
  cy.visit("/", { timeout: 90000 });
  cy.get('#user-name').should('be.visible');
});

When("I login with credentials:", (datatable) => {
  const { username, password } = datatable.hashes()[0];
  cy.visit("/", { timeout: 90000 });
  cy.get('#user-name').should('be.visible').type(username);
  cy.get('#password').should('be.visible').type(password);
  cy.get('#login-button').click();
});

When("I type username {string} slowly", (username) => {
  cy.get('#user-name').should('be.visible').type(username, { delay: 200 });
});

When("I type password {string} slowly", (password) => {
  cy.get('#password').should('be.visible').type(password, { delay: 200 });
});

When("I wait {string} milliseconds", (ms) => {
  cy.wait(parseInt(ms));
});

When("I click login button", () => {
  cy.get('#login-button').click();
});

Then("I should see the products page", () => {
  cy.get('.title', { timeout: 90000 })
    .should('be.visible')
    .and('have.text', 'Products');
});

Then("I wait for products page to load", () => {
  cy.get('.title', { timeout: 90000 })
    .should('be.visible')
    .and('have.text', 'Products');
  cy.get('.inventory_item', { timeout: 90000 })
    .should('have.length.at.least', 1);
});

Then("I should see error message {string}", (message) => {
  cy.get('[data-test="error"]', { timeout: 30000 })
    .should('be.visible')
    .and('have.text', message);
});