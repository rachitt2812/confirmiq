#write scenarior to login into google
Feature: write scenaarior to login into google

    Scenario: Login to Google
        Given User has Google account

        When User enters correct credentials
        And User cliacks on login button
        Then User is loagged in to Google