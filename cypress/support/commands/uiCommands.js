Cypress.Commands.add('logout', () => {
    // Open burger menu
    cy.get('[data-test="menu-button"]').click();

    // Click logout
    cy.get('[data-test="logout-sidebar-link"]')
        .should('be.visible')
        .click();
});