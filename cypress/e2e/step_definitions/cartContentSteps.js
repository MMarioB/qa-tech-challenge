import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let productInfo = {};

// Empty cart verification
Then("I should see an empty cart message", () => {
  cy.get(".cart_item").should("not.exist");
});

Then("the cart should be properly formatted", () => {
  cy.get(".cart_list").should("be.visible");
  cy.get(".cart_desc_label").should("be.visible");
});

// Adding products
When("I add a product to the cart", () => {
  // Store product information for later comparison
  cy.get(".inventory_item").first().within(() => {
    cy.get(".inventory_item_name").invoke("text").then((text) => {
      productInfo.name = text;
    });
    cy.get(".inventory_item_desc").invoke("text").then((text) => {
      productInfo.description = text;
    });
    cy.get(".inventory_item_price").invoke("text").then((text) => {
      productInfo.price = text;
    });
    cy.get('[data-test^="add-to-cart"]').click();
  });
});

// Add the missing step
Given("I have added a product to the cart", () => {
  cy.get(".inventory_item").first().within(() => {
    cy.get('[data-test^="add-to-cart"]').click();
  });
});

// Product information verification
Then("I should see complete product information", () => {
  cy.get(".cart_item").within(() => {
    cy.get(".inventory_item_name").should("be.visible");
    cy.get(".inventory_item_desc").should("be.visible");
    cy.get(".inventory_item_price").should("be.visible");
  });
});

Then("the product quantity should be {string}", (quantity) => {
  cy.get(".cart_quantity").should("have.text", quantity);
});

Then("the product information should match the product page", () => {
  cy.get(".cart_item").within(() => {
    cy.get(".inventory_item_name").should("have.text", productInfo.name);
    cy.get(".inventory_item_desc").should("have.text", productInfo.description);
    cy.get(".inventory_item_price").should("have.text", productInfo.price);
  });
});

Then("I should see {string} products in the cart", (quantity) => {
  cy.get(".cart_item").should("have.length", parseInt(quantity));
});

Then("each product should show complete information", () => {
  cy.get(".cart_item").each(($item) => {
    cy.wrap($item).within(() => {
      cy.get(".inventory_item_name").should("be.visible").and("not.be.empty");
      cy.get(".inventory_item_desc").should("be.visible").and("not.be.empty");
      cy.get(".inventory_item_price").should("be.visible").and("contain", "$");
      cy.get(".cart_quantity").should("be.visible").and("not.be.empty");
    });
  });
});

Then("all product information should be accurate", () => {
  cy.get(".cart_item").each(($item) => {
    cy.wrap($item).within(() => {
      cy.get(".inventory_item_price").invoke("text").should("match", /\$\d+\.\d{2}/);
    });
  });
});

// Responsive design testing
When("I set viewport size to {string}", (device) => {
  const viewportSizes = {
    mobile: [375, 667],
    tablet: [768, 1024],
    desktop: [1280, 800]
  };
  const [width, height] = viewportSizes[device];
  cy.viewport(width, height);
});

Then("the cart should be properly displayed", () => {
  cy.get(".cart_list").should("be.visible");
  cy.get(".cart_item").should("be.visible");
});

Then("all information should be readable", () => {
  cy.get(".cart_item").within(() => {
    cy.get(".inventory_item_name")
      .should("be.visible")
      .and("have.css", "font-size")
      .and("not.eq", "0px");
    cy.get(".inventory_item_desc")
      .should("be.visible")
      .and("have.css", "font-size")
      .and("not.eq", "0px");
  });
});