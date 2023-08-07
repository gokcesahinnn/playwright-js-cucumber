Feature: Login Page

  @login_with_valid_credentials
  Scenario: Login with valid credentials
    Given I am on the login screen
    When I fill the login form with valid credentials
    Then I should be able to see the home screen