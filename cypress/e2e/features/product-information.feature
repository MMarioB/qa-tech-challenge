Feature: Swag Labs Product Information Display
  As a standard user
  I want to view product information
  So that I can make informed purchasing decisions

  Background: 
    Given I am a standard user
    And I am on the Swag Labs login page

  Scenario: View product information on Products page
    When I log in with valid credentials
    Then I should see the Products page
    And I should see product information for each item
    And each product should have an image
    And each product should have a title
    And each product should have a description
    And each product should have a price

  Scenario: View detailed product information
    Given I am logged in as a standard user
    When I click on a product title
    Then I should see the Product Details page
    And I should see detailed product information

  Scenario: Verify product information consistency
    Given I am logged in as a standard user
    When I note the product information on the Products page
    And I navigate to the Product Details page
    Then the product information should be consistent
    And all product details should be readable
    And the product image should be clearly visible

  Scenario Outline: Verify responsive design on different devices
    Given I am logged in as a standard user
    When I set viewport size to "<device>" dimensions
    Then the Products page should be responsive
    And all product information should be readable
    And product images should be properly scaled

    Examples:
      | device  |
      | mobile  |
      | tablet  |
      | desktop |