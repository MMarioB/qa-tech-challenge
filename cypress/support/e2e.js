import './commands/commands'; 
import '@cypress/code-coverage/support' // Make sure to include the .js extension

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});