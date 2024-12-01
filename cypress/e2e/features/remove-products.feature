Feature: Remove Products from Cart
  As a standard user
  I want to remove products from my cart
  So that I can manage my purchase items

  Background:
    Given I visit the Swag Labs homepage
    And I log in as standard user

  Scenario: Remove single product from Products page
    Given I add first product to cart
    When I click remove button
    Then the cart badge should not be visible
    And the product button shows "Add to cart"
  
  Scenario: Remove multiple products from Products page
    When I add multiple products to the cart
    And I remove some products from the Products page
    Then the cart badge should reflect the correct number of remaining products
    And the removed products should not be in the cart
  
  Scenario: Remove product from Product Details page
    When I navigate to a product details page
    And I add the product to the cart
    And I remove the product from the Product Details page
    Then the cart badge should no longer exist
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