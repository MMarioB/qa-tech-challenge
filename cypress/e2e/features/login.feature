Feature: Swag Labs User Authentication
  As a Swag Labs standard user
  I want to authenticate into the system
  So that I can access the platform

  Scenario Outline: Successful login for different user types
    Given I am on the login page
    When I enter username "<username>" and password "<password>"
    Then I should be logged in successfully
    And I should see the products page

    Examples:
      | username                | password     |
      | standard_user          | secret_sauce |
      | problem_user           | secret_sauce |
      | performance_glitch_user| secret_sauce |

  Scenario: Failed login for locked out user
    Given I am on the login page
    When I enter username "locked_out_user" and password "secret_sauce"
    Then I should see error message "Epic sadface: Sorry, this user has been locked out."