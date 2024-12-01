Feature: Performance User Authentication
  Scenario: Login with performance glitch user
    Given I clear session and cookies
    When I visit the login page
    And I type username "performance_glitch_user" slowly
    And I type password "secret_sauce" slowly
    And I wait "2000" milliseconds
    And I click login button
    Then I wait for products page to load