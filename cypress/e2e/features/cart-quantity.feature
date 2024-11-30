Feature: Shopping Cart Quantity Display
  As a Swag Labs standard user
  I want to see the shopping cart with the number of products added
  So that I can know the cart status

  Background: 
    Given I am logged in as a standard user
    And I am on the Products page

  Scenario: Verify initial cart state
    Then the shopping cart should be empty
    And no quantity badge should be visible

  Scenario: Add single product to cart
    When I add one product to the cart
    Then the cart badge should show "1"
    And the cart badge should be visible

  Scenario: Add multiple products to cart
    When I add "3" different products to the cart
    Then the cart badge should show "3"
    And navigating to the cart page should show 3 items

  Scenario: Verify cart quantity across pages
    When I add "2" products to the cart
    And I click on a product title
    Then I should be on the Product Details page
    And the cart badge should still show "2"
    When I navigate to the shopping cart
    Then I should see 2 items in the cart

  Scenario: Remove products from cart
    Given I have "3" products in the cart
    When I remove one product
    Then the cart badge should show "2"
    When I remove all products
    Then no quantity badge should be visible

  Scenario: Verify cart quantity persistence after refresh
    Given I have "2" products in the cart
    When I refresh the page
    Then the cart badge should still show "2"
