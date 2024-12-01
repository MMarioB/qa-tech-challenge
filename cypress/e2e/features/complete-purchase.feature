Feature: Complete Purchase Workflow
  As a Swag Labs standard user
  I want to complete the purchase of products in my cart
  So that I can receive my ordered items

  Background: 
    Given I am logged in as a standard user
    And I have products in my cart

  Scenario: Complete checkout with valid information
    When I navigate to the shopping cart
    And I click the Checkout button
    Then I should be on the checkout information page
    When I fill in the following information:
      | firstName | lastName | postalCode |
      | John      | Doe      | 12345      |
    And I click Continue
    Then I should see the checkout overview
    And the product information should be correct
    And the financial summary should be accurate
    When I click Finish
    Then I should see the order confirmation
    And the cart should be empty

  Scenario Outline: Validate checkout form errors
    Given I am on the checkout information page
    When I fill in the form with:
      | firstName   | lastName   | postalCode   |
      | <firstName> | <lastName> | <postalCode> |
    And I click Continue
    Then I should see the error message "<errorMessage>"

    Examples:
      | firstName | lastName | postalCode | errorMessage                     |
      |           | Doe      | 12345      | Error: First Name is required    |
      | John      |          | 12345      | Error: Last Name is required     |
      | John      | Doe      |            | Error: Postal Code is required   |

  Scenario: Verify order overview details
    Given I have "2" specific products in cart
    When I proceed to checkout
    And I complete the information form
    Then I should see the following for each product:
      | name        | description | quantity | price  |
    And I should see correct:
      | Item Total |
      | Tax        |
      | Total      |
    And payment information should be visible
    And shipping information should be visible