Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  });
  
  Cypress.Commands.add('sortProducts', (sortOption) => {
    cy.get('[data-test="product_sort_container"]').select(sortOption);
  });
  
  Cypress.Commands.add('verifyProductSorting', (sortCriteria, order) => {
    cy.get('.inventory_item').then(($items) => {
      const getProductData = ($el) => {
        const name = $el.find('.inventory_item_name').text();
        const price = parseFloat($el.find('.inventory_item_price').text().replace('$', ''));
        return { name, price };
      };
  
      const products = Array.from($items).map((item) => getProductData(Cypress.$(item)));
  
      const isSorted = products.every((product, index) => {
        if (index === 0) return true;
        const prev = products[index - 1];
        const current = product;
  
        if (sortCriteria === 'name') {
          return order === 'ascending' 
            ? prev.name <= current.name
            : prev.name >= current.name;
        } else if (sortCriteria === 'price') {
          return order === 'ascending'
            ? prev.price <= current.price
            : prev.price >= current.price;
        }
      });
  
      expect(isSorted).to.be.true;
    });
  });
  
  // Verify if we're on the products page
  Cypress.Commands.add('verifyProductsPage', () => {
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });