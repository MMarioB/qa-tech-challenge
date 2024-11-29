Feature: App Reset Functionality
  As a Swag Labs standard_user
  I want to reset the app state
  So that I can return the application to its initial settings

  Background:
    Given I am on the Swag Labs login page
    When I login as "standard_user" with password "secret_sauce"
    Then I should be on the Products page

  Scenario: Reset app state through menu
    When I click on the burger menu button
    And I click on the "Reset App State" menu item
    Then the app state should be reset to default
    And the menu should be closed
    And the cart should be empty
    And all items should be available for purchase