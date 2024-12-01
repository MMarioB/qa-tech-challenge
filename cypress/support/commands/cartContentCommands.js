Cypress.Commands.add("storeProductInfo", () => {
    return cy.get(".inventory_item").first().within(() => {
      cy.get(".inventory_item_name").invoke("text").then((text) => {
        productInfo.name = text;
      });
      cy.get(".inventory_item_desc").invoke("text").then((text) => {
        productInfo.description = text;
      });
      cy.get(".inventory_item_price").invoke("text").then((text) => {
        productInfo.price = text;
      });
    });
  });