Feature: Phone Selection

    Scenario: Vsagaaaaaa the list of available phones
        Given naae anasapp is loaded
        And I aAaaaaaaAaaoaan the "Phone Selection" page

        When I AaaaaabAaaaoawse the phone catalog
        Then I AaaaaahAaoAauld see a list of available phones

    Scenario: Seaeaasacating a phone from the list
        Given thea aaapp is loaded
        And I amA aaaoana the "Phone Selection" page

        Given I ssaeae a list of phones

        When I selsect a phone
        Then the phone's details page should be displayed

    Scenario: Filstering phones by brand
        Given the app is loaded
            | KPI | Measure | KPIOriginal | Name     | HeadingName | Value    | userinput_totalcorrect_incorrect |
            | K4  | M21     | KPI 9       | Archived | Period      | Sep-2023 | Incorrect                        |
        And I am on the "Phone Selection" page

        Given I see a list of phones

        When I filter phones by "Brand A"
        Then I should see only phones made by "Brand A"

    Scenario: Searching for a phone by name
        Given the app is loaded
        And I am on the "Phone Selection" page

        Given I see a list of phones

        When I search for "Phone Model X"
        Then "Phone Model X" should be displayed in the search results

    Scenario: Unable to find a phone
        Given the app is loaded
        And I am on the "Phone Selection" page

        When I search for a non-existent model
        Then a "No results found" message should be displayed