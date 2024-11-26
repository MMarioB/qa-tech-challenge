class MenuPage {
    // Selectors
    selectors = {
      menuButton: '[data-test="menu-button"]',
      logoutLink: '[data-test="logout-sidebar-link"]'
    };
  
    logout() {
      // Open burger menu
      cy.get(this.selectors.menuButton).click();
      
      // Wait for menu to open and click logout
      cy.get(this.selectors.logoutLink)
        .should('be.visible')
        .click();
    }
  }
  
  export default new MenuPage();