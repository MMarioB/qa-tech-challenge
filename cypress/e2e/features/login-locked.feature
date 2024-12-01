Feature: Locked User Authentication
  Scenario: Login with locked out user
    Given I clear session and cookies
    When I login with credentials:
      | username        | password     |
      | locked_out_user | secret_sauce |
    Then I should see error message "Epic sadface: Sorry, this user has been locked out."