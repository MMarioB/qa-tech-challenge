Feature: Swag Labs User Logout
  As a Swag Labs user
  I want to be able to log out of the application
  So that I can securely exit the system

  Scenario Outline: Successful logout for different user types
    Given I am logged in as "<username>" with password "<password>"
    When I click the logout button
    Then I should be redirected to the login page

    Examples:
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |