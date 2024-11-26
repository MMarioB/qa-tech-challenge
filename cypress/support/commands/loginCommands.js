Cypress.Commands.add('loginByUserType', (userType) => {
    // Load users from fixture
    cy.fixture('users.json').then((users) => {
      const user = users[userType];
      
      // Visit login page
      cy.visit('/');
      
      // Perform login
      cy.get('[data-test="username"]').type(user.username);
      cy.get('[data-test="password"]').type(user.password);
      cy.get('[data-test="login-button"]').click();
    });
  });