class LoginPage {
    // Selectors
    selectors = {
      usernameInput: '[data-test="username"]',
      passwordInput: '[data-test="password"]',
      loginButton: '[data-test="login-button"]',
      errorMessage: '[data-test="error"]'
    };
  
    // Methods
    visit() {
      cy.visit('/');
    }
  
    login(username, password) {
      cy.get(this.selectors.usernameInput).type(username);
      cy.get(this.selectors.passwordInput).type(password);
      cy.get(this.selectors.loginButton).click();
    }
  
    validateLoginPage() {
      cy.get(this.selectors.usernameInput).should('be.visible');
      cy.get(this.selectors.passwordInput).should('be.visible');
      cy.get(this.selectors.loginButton).should('be.visible');
    }
  
    getErrorMessage() {
      return cy.get(this.selectors.errorMessage);
    }
  }
  
  export default new LoginPage();