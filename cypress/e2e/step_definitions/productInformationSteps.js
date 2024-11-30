import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Constants
const USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce';
let productInfo = {};

const viewportSizes = {
  mobile: [375, 667],
  tablet: [768, 1024],
  desktop: [1280, 800]
};

// Background steps
Given('I am a standard user', () => {
  cy.wrap(USERNAME).as('username');
});

Given('I am on the Swag Labs login page', () => {
  cy.visit('/');
});

// Login steps
When('I log in with valid credentials', () => {
  cy.get('[data-test="username"]').type(USERNAME);
  cy.get('[data-test="password"]').type(PASSWORD);
  cy.get('[data-test="login-button"]').click();
});

Given('I am logged in as a standard user', () => {
  cy.loginAsStandardUser();
});

// Products page steps
Then('I should see the Products page', () => {
  cy.get('.title').should('have.text', 'Products');
  cy.url().should('include', '/inventory.html');
});

Then('I should see product information for each item', () => {
  cy.get('.inventory_item').should('have.length.gt', 0);
});

Then('each product should have an image', () => {
  cy.get('.inventory_item_img').each(($img) => {
    cy.wrap($img)
      .should('be.visible')
      .and('have.attr', 'src')
      .and('not.be.empty');
  });
});

Then('each product should have a title', () => {
  cy.get('.inventory_item_name').each(($title) => {
    cy.wrap($title)
      .should('be.visible')
      .and('not.be.empty');
  });
});

Then('each product should have a description', () => {
  cy.get('.inventory_item_desc').each(($desc) => {
    cy.wrap($desc)
      .should('be.visible')
      .and('not.be.empty');
  });
});

Then('each product should have a price', () => {
  cy.get('.inventory_item_price').each(($price) => {
    cy.wrap($price)
      .should('be.visible')
      .and('contain', '$');
  });
});

// Product details steps
When('I click on a product title', () => {
  cy.get('.inventory_item_name').first().then(($title) => {
    const titleText = $title.text();
    cy.wrap(titleText).as('selectedProductTitle');
    cy.wrap($title).click();
  });
});

Then('I should see the Product Details page', () => {
  cy.url().should('include', '/inventory-item.html');
});

Then('I should see detailed product information', () => {
  cy.get('.inventory_details_name').should('be.visible');
  cy.get('.inventory_details_desc').should('be.visible');
  cy.get('.inventory_details_price').should('be.visible');
  cy.get('.inventory_details_img').should('be.visible');
});

// Product consistency steps
When('I note the product information on the Products page', () => {
  cy.get('.inventory_item').first().within(() => {
    cy.get('.inventory_item_name').invoke('text').then((text) => {
      productInfo.title = text;
    });
    cy.get('.inventory_item_desc').invoke('text').then((text) => {
      productInfo.description = text;
    });
    cy.get('.inventory_item_price').invoke('text').then((text) => {
      productInfo.price = text;
    });
  });
});

When('I navigate to the Product Details page', () => {
  cy.get('.inventory_item_name').first().click();
});

Then('the product information should be consistent', () => {
  cy.get('.inventory_details_name').should('have.text', productInfo.title);
  cy.get('.inventory_details_desc').should('have.text', productInfo.description);
  cy.get('.inventory_details_price').should('have.text', productInfo.price);
});

Then('all product details should be readable', () => {
  cy.get('.inventory_details_desc')
    .should('be.visible')
    .and('have.css', 'font-size')
    .and('not.eq', '0px');
});

Then('the product image should be clearly visible', () => {
  cy.get('.inventory_details_img')
    .should('be.visible')
    .and('have.prop', 'naturalWidth')
    .should('be.gt', 0);
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
  cy.get('.inventory_item_name').should('be.visible');
  cy.get('.inventory_item_desc')
    .should('be.visible')
    .and('have.css', 'font-size')
    .and('not.eq', '0px');
  cy.get('.inventory_item_price').should('be.visible');
});

Then('product images should be properly scaled', () => {
  cy.get('.inventory_item_img')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
      expect($img[0].width).to.be.lessThan($img[0].naturalWidth);
    });
});