Feature: Add Products to Cart
  As a standard user
  I want to add and remove products from my cart
  So that I can manage my purchase items

  Background:
    Given the user opens Swag Labs
    And the user performs login

  Scenario: Add single product to cart from Products page
    When the user adds the first product to cart
    Then the cart badge displays "1"
    And the product button displays "Remove"

  Scenario: Add multiple products to cart
    When the user adds "3" products to cart
    Then the cart badge displays "3"
    And selected products display "Remove"

  Scenario: Add product from Product Details page
    When the user clicks on first inventory item
    And the user clicks add to cart on details page
    Then the cart badge displays "1"
    And the remove button should be visible on details page

  Scenario: Remove product from cart
    When the user adds the first product to cart
    And the user removes the product
    Then the cart badge is not visible
    And the product button displays "Add to cart"