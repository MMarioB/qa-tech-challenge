Feature: Swag Labs User Authentication
  As a Swag Labs admin
  I want to log in and log out with different user types
  So that I can verify the authentication functionality

  Scenario Outline: Successful login for different user types
    Given I am on the login page
    When I login with "<username>" and "<password>"
    Then I should be redirected to the inventory page
    And I should see the products title

    Examples:
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |

  Scenario: Failed login for locked out user
    Given I am on the login page
    When I login with "locked_out_user" and "secret_sauce"
    Then I should see an error message indicating the account is locked