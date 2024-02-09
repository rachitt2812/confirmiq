Feature: Comparison Tool

  As a customer
  I want to compare different phone models
  So that I can choose the best phone for my needs

  Background: 
    Given the app is loaded
    And I am on the "Compare Phones" page

  Scenario: Comparing specific features of phones
    Given I have added the following phones to compare:
      | Phone Model    |
      | Phone Model X  |
      | Phone Model Y  |
      | Phone Model Z  |
    When I select features to compare:
      | Feature        |
      | Battery Life   |
      | Camera Quality |
      | Screen Size    |
    Then I should see a comparison of "Battery Life", "Camera Quality", and "Screen Size" for each model

  Scenario: Removing a phone from comparison
    Given I am comparing "Phone Model X" and "Phone Model Y"
    When I remove "Phone Model X" from the comparison
    Then only "Phone Model Y" should be displayed in the comparison

  Scenario: Viewing detailed specifications
    Given I am comparing "Phone Model X" and "Phone Model Y"
    When I select "View Detailed Specs"
    Then I should see a detailed list of specifications for both models