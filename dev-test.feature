Feature: Phone Selection

    Scenario: Viewing the list of available phones
        Given the app is loaded
            | ama po |
        And I am on the "Phone Selection" page

        When I browse the phone catalog
        Then I should see a list of available phones

    Scenario: Selecting a phone from the list
        Given the app is loaded
        And I am on the "Phone Selection" page
            | suhas |

        Given I see a list of phones

        When I select a phone
        Then the phone's details page should be displayed

    Scenario: Filtering phones by brand
        Given the app is loaded
        And I am on the "Phone Selection" page
            | KPI | Measure | KPIOriginal | Name     | HeadingName | Value    | userinput_totalcorrect_incorrect |
            | K4  | M21     | KPI 9       | Archived | Period      | Sep-2023 | Incorrect                        |

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
            | dpv |
        And I am on the "Phone Selection" page

        When I search for a non-existent model
        Then a "No results found" message should be displayed
            | suhas |