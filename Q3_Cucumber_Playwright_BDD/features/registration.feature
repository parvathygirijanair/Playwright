@Registration
Feature: User Registration

  Scenario: Register all users from the Registration worksheet
    Given I navigate to Demo Web Shop
    When I register users using Excel data
    Then I should see successful registration message
