Feature: Product Sorting Functionality
  As a Swag Labs standard_user
  I want to sort products on the Products page
  So that I can find items more easily

  Background:
    Given I am on the Swag Labs login page
    When I login as "standard_user" with password "secret_sauce"
    Then I should be on the Products page

  Scenario Outline: Sort products using different criteria
    When I select sort option "<sortOption>"
    Then the products should be sorted by "<sortCriteria>" in "<order>" order

    Examples:
      | sortOption                | sortCriteria | order       |
      | Name (A to Z)             | name         | ascending   |
      | Name (Z to A)             | name         | descending  |
      | Price (low to high)       | price        | ascending   |
      | Price (high to low)       | price        | descending  |