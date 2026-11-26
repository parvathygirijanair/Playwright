@EmailFriend
Feature: Email a Friend

  Scenario: Send a book recommendation
    Given I am logged in to Demo Web Shop
    When I navigate to Books category
    And I select a book
    And I click on Email a Friend
    And I enter friend's email and message
    And I submit the email form
    Then I should see email sent confirmation
