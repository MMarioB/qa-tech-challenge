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