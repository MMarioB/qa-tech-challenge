Cypress.Commands.add('clearSession', () => {
  cy.window().then((win) => {
    win.sessionStorage.clear();
    win.localStorage.clear();
  });
});

Cypress.Commands.add('loginUser', (username, password) => {
  cy.get('#user-name').clear().type(username);
  cy.get('#password').clear().type(password);
  cy.get('#login-button').click();
});

Cypress.Commands.add('loginAsStandardUser', () => {
  cy.visit('/');
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
});

Cypress.Commands.add('loginToSwagLabs', () => {
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
  cy.url().should('include', '/inventory.html');
});

Cypress.Commands.add('verifyProductDetails', (productName) => {
  cy.get('.inventory_details_name')
    .should('be.visible')
    .and('have.text', productName);

  cy.get('.inventory_details_desc')
    .should('be.visible');

  cy.get('.inventory_details_price')
    .should('be.visible');
});

Cypress.Commands.add('loginToSwagLabs', () => {
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
  cy.url().should('include', '/inventory.html');
  cy.get('.title').should('have.text', 'Products');
});