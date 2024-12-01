Feature: Product Sorting Functionality
  As a standard user
  I want to remove products from my cart
  So that I can manage my purchase items

  Background:
    Given I visit the Swag Labs homepage
    And I log in as standard user

  Scenario Outline: Sort products using different criteria
    When I select sort option "<sortOption>"
    Then the products should be sorted by "<sortCriteria>" in "<order>" order

    Examples:
      | sortOption          | sortCriteria | order      |
      | Name (A to Z)       | name         | ascending  |
      | Name (Z to A)       | name         | descending |
      | Price (low to high) | price        | ascending  |
      | Price (high to low) | price        | descending |