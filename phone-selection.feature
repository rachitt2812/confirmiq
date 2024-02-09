Feature: Phone Selection

  As a customer
  I want to select a phone from the store's catalog
  So that I can purchase it

  Background: 
    Given the app is loaded
    And I am on the "Phone Selection" page

  Scenario: Viewing the list of available phones
    When I browse the phone catalog
    Then I should see a list of available phones

  Scenario: Selecting a phone from the list
    Given I see a list of phones
    When I select a phone
    Then the phone's details page should be displayed

  Scenario: Filtering phones by brand
    Given I see a list of phones
    When I filter phones by "Brand A"
    Then I should see only phones made by "Brand A"

  Scenario: Searching for a phone by name
    Given I see a list of phones
    When I search for "Phone Model X"
    Then "Phone Model X" should be displayed in the search results

  Scenario: Unable to find a phone
    When I search for a non-existent model
    Then a "No results found" message should be displayed