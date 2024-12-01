import './commands/commands';  // Make sure to include the .js extension

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});