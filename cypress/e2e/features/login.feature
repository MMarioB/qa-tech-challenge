Feature: Swag Labs User Authentication
  As a Swag Labs standard user
  I want to authenticate into the system
  So that I can access the platform

  @standard_user
  Scenario: Login with standard user
    Given I am on the login page
    When I login as "standard_user"
    Then I should be logged in successfully
    And I should see the products page

  @problem_user
  Scenario: Login with problem user
    Given I am on the login page
    When I login as "problem_user"
    Then I should be logged in successfully
    And I should see the products page

  @performance_glitch
  Scenario: Login with performance glitch user
    Given I am on the login page
    When I login as "performance_glitch_user"
    Then I should be logged in successfully
    And I should see the products page

  @locked_user
  Scenario: Login with locked out user
    Given I am on the login page
    When I login as "locked_out_user"
    Then I should see error message "Epic sadface: Sorry, this user has been locked out."