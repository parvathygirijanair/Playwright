@Wishlist
Feature: Add Product to Wishlist

  Scenario: Add a book to the wishlist
    Given I am logged in to Demo Web Shop
    When I navigate to Books category
    And I select a book
    And I add the book to wishlist
    And I navigate to Wishlist page
    Then I should see the selected book in wishlist
