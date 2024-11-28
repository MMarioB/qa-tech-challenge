Feature: Remove Products from Cart

  Background:
    Given I am logged in as a standard user

  Scenario: Remove single product from Products page
    When I add a single product to the cart
    And I remove the product from the Products page
    Then the cart badge should not exist
    And the product should be removed from the cart

  Scenario: Remove multiple products from Products page
    When I add multiple products to the cart
    And I remove some products from the Products page
    Then the cart badge should reflect the correct number of remaining products
    And the removed products should not be in the cart

  Scenario: Remove product from Product Details page
    When I navigate to a product details page
    And I add the product to the cart
    And I remove the product from the Product Details page
    Then the cart badge should not exist
    And the product should be removed from the cart

  Scenario: Remove products from Shopping Cart
    When I add multiple products to the cart
    And I navigate to the Shopping Cart
    And I remove a single product from the Shopping Cart
    Then the cart badge should reflect the correct number of remaining products
    And the removed product should not be in the cart

  Scenario: Remove all products from Shopping Cart
    When I add multiple products to the cart
    And I navigate to the Shopping Cart
    And I remove all products from the Shopping Cart
    Then the Shopping Cart should be empty
    And the cart badge should not exist

  Scenario: Attempt to remove product from empty cart
    When I navigate to the Shopping Cart
    Then no remove buttons should be visible