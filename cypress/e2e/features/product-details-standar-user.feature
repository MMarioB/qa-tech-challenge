Feature: Swag Labs Product Details
  As a standard user
  I want to view product details
  So that I can know more about the products

  Scenario: View Product Details
    Given I am on the login page
    When I login as standard user
    Then I should be on the products page
    When I click on a product
    Then I should see the product details
    And the product information should be complete