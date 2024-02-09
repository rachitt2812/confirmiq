Feature: Accessory Selection

    Background:
        Given the app is loaded
        And I have selected "Phone Model X" to purchase

    Scenario: Selecting multiple accessories
        Given I am on the "Accessories" section for "Phone Model X"

        When I add the following accessories to my cart:
            | Accessory Type   | Model        |  |
            | Case             | Case Model A |  |
            | Earphones        | Earphones B  |  |
            | Screen Protector | Protector C  |  |
        Then my cart should contain "Case Model A", "Earphones B", and "Protector C"

    Scenario: Filtering accessories by type
        Given I see a list of accessories for "Phone Model X"

        When I filter accessories by "Cases"
        Then only cases compatible with "Phone Model X" should be displayed
        When i say hello 

    Scenario: Accessory details
        Given I see a list of accessories

        When I select "Earphones Model B"
        Then the details page for "Earphones Model B" should be displayed with price and specifications