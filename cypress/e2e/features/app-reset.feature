Feature: App Reset Functionality
  As a standard user
  I want to remove products from my cart
  So that I can manage my purchase items

  Scenario: Reset app state through menu
    Given I am logged in as a standard user
    When I click on the burger menu button
    And I click on the "Reset App State" menu item
    Then the app state should be reset to default
    And the menu should be closed
    And the cart should be empty
    And all items should be available for purchase