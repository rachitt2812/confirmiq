#write scenarior to login into google
Feature: write scenarior to login into google

    Scenario: Login to Google
        Given User has Google account

        When User enters correct credentials
        And User clicks on login button
        Then User is logged in to Google