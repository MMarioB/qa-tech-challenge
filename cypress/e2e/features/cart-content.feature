Feature: Shopping Cart Contents Display
  As a Swag Labs standard user
  I want to see all products added to the shopping cart
  So that I can know what I am going to buy

  Background: 
    Given I am logged in as a standard user
    And I am on the Products page

  Scenario: View empty shopping cart
    When I navigate to the shopping cart
    Then I should see an empty cart message
    And the cart should be properly formatted

  Scenario: View single product in cart
    When I add a product to the cart
    And I navigate to the shopping cart
    Then I should see complete product information
    And the product quantity should be "1"
    And the product information should match the product page

  Scenario: View multiple products in cart
    When I add "3" different products to the cart
    And I navigate to the shopping cart
    Then I should see "3" products in the cart
    And each product should show complete information
    And all product information should be accurate

  Scenario Outline: Verify cart display on different devices
    Given I have added a product to the cart
    When I set viewport size to "<device>"
    And I navigate to the shopping cart
    Then the cart should be properly displayed
    And all information should be readable

    Examples:
      | device  |
      | mobile  |
      | tablet  |
      | desktop |