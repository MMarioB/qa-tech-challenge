const { When, Then } = require('@badeball/cypress-cucumber-preprocessor');

const viewportSizes = {
  mobile: [375, 667],
  tablet: [768, 1024],
  desktop: [1280, 800]
};

let productInfo = {};

// Products page steps
Then('I should see the Products page', () => {
  cy.url().should('include', '/inventory.html');
  cy.get('.title').should('have.text', 'Products');
});

Then('I should see product information for each item', () => {
  cy.get('.inventory_item').should('have.length.gt', 0);
});

Then('each product should have an image', () => {
  cy.get('img.inventory_item_img').each(($img) => {
    cy.wrap($img)
      .should('be.visible')
      .and('have.attr', 'src')
      .and('include', '.jpg');
  });
});

Then('each product should have a title', () => {
  cy.get('[data-test="inventory-item-name"]').each(($title) => {
    cy.wrap($title)
      .should('be.visible')
      .and('not.be.empty');
  });
});

Then('each product should have a description', () => {
  cy.get('[data-test="inventory-item-desc"]').each(($desc) => {
    cy.wrap($desc)
      .should('be.visible')
      .and('not.be.empty');
  });
});

Then('each product should have a price', () => {
  cy.get('[data-test="inventory-item-price"]').each(($price) => {
    cy.wrap($price)
      .should('be.visible')
      .and('contain', '$');
  });
});

// Product details steps
When('I click on a product title', () => {
  cy.get('[data-test="inventory-item-name"]').first().click();
});

Then('I should see the Product Details page', () => {
  cy.url().should('include', '/inventory-item.html');
});

Then('I should see detailed product information', () => {
  cy.get('[data-test="inventory-item-name"]').should('be.visible');
  cy.get('[data-test="inventory-item-desc"]').should('be.visible');
  cy.get('[data-test="inventory-item-price"]').should('be.visible');
  cy.get('.inventory_details_img').should('be.visible');
});

When('I note the product information on the Products page', () => {
  cy.get('.inventory_item').first().within(() => {
    cy.get('[data-test="inventory-item-name"]').invoke('text').then((text) => {
      productInfo.title = text;
    });
    cy.get('[data-test="inventory-item-desc"]').invoke('text').then((text) => {
      productInfo.description = text;
    });
    cy.get('[data-test="inventory-item-price"]').invoke('text').then((text) => {
      productInfo.price = text;
    });
  });
});

When('I navigate to the Product Details page', () => {
  cy.get('[data-test="inventory-item-name"]').first().click();
});

Then('the product information should be consistent', () => {
  cy.get('[data-test="inventory-item-name"]').should('have.text', productInfo.title);
  cy.get('[data-test="inventory-item-desc"]').should('have.text', productInfo.description);
  cy.get('[data-test="inventory-item-price"]').should('have.text', productInfo.price);
});

Then('all product details should be readable', () => {
  cy.get('[data-test="inventory-item-desc"]')
    .should('be.visible')
    .invoke('css', 'font-size')
    .should('not.eq', '0px');
});

Then('the product image should be clearly visible', () => {
  cy.get('.inventory_details_img')
    .should('be.visible')
    .and('have.attr', 'src')
    .and('include', '.jpg');
});

// Responsive design steps
When('I set viewport size to {string} dimensions', (device) => {
  const [width, height] = viewportSizes[device];
  cy.viewport(width, height);
});

Then('the Products page should be responsive', () => {
  cy.get('.inventory_list').should('be.visible');
  cy.get('.inventory_item').should('be.visible');
});

Then('all product information should be readable', () => {
  cy.get('[data-test="inventory-item-name"]').should('be.visible');
  cy.get('[data-test="inventory-item-desc"]')
    .should('be.visible')
    .invoke('css', 'font-size')
    .should('not.eq', '0px');
  cy.get('[data-test="inventory-item-price"]').should('be.visible');
});

Then('product images should be properly scaled', () => {
  cy.get('img.inventory_item_img')
    .should('be.visible')
    .and('have.attr', 'src')
    .and('include', '.jpg');
});