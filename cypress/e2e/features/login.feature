Feature: Standard User Authentication
  Scenario: Login with standard user
    When I login with credentials:
      | username      | password     |
      | standard_user | secret_sauce |
    Then I should see the products page

  Scenario: Login with problem user
    When I login with credentials:
      | username     | password     |
      | problem_user | secret_sauce |
    Then I should see the products page