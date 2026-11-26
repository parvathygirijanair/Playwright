@Login
Feature: User Login

  Scenario: Log in with a newly registered test account
    Given I navigate to Demo Web Shop
    And I have a registered test account
    When I click on Login link
    And I enter the registered test account credentials
    And I click on Login button
    Then I should see successful login
