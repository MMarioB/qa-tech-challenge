// Import custom commands
import './commands/loginCommands';
import './commands/uiCommands';
import './commands/productDetailsCommands';
import './commands/addToCartCommands';
import './commands/productSortingCommands';
import './commands/appResetCommands';

// Global configurations and setup
beforeEach(() => {
  // Optional: Add global setup for each test
  // For example, setting default viewport
  cy.viewport(1280, 720);
});

// Global error handling
Cypress.on('uncaught:exception', (err, runnable) => {
  // Returning false prevents Cypress from failing the test
  return false;
});