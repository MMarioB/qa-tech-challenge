Feature: Add Products to Cart
  As a Swag Labs standard user
  I want to add products to the cart
  So that I can prepare for purchasing items

  Background:
    Given I am logged in as a standard user
    And I am on the Products page

  Scenario: Add single product to cart from Products page
    When I add "Sauce Labs Backpack" to the cart
    Then the cart should show "1" item
    And the "Sauce Labs Backpack" product should be marked as added

  Scenario: Add multiple products to cart
    When I add the following products to cart:
      | Sauce Labs Backpack |
      | Sauce Labs Bike Light |
    Then the cart should show "2" items

  Scenario: Add product from Product Details page
    When I navigate to the details page for "Sauce Labs Backpack"
    And I add the product to cart from the details page
    Then the cart should show "1" item

  Scenario: Remove product from cart
    When I add "Sauce Labs Backpack" to the cart
    And I remove "Sauce Labs Backpack" from the cart
    Then the cart should show "0" items