Cypress.Commands.add("login", (username, password) => {
    cy.visit("/");
    
    // Using ID selectors with additional validations
    cy.get('#user-name')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Username')
      .should('have.class', 'input_error')
      .type(username);
      
    cy.get('#password')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Password')
      .should('have.class', 'input_error')
      .type(password);
      
    cy.get('#login-button')
      .should('be.visible')
      .should('have.class', 'submit-button')
      .should('have.attr', 'type', 'submit')
      .click();
  });