Feature: Payment Processing

    Background:
        Given the app is loaded
        And I have selected a phone to purchase
        And I am on the "Payment" page

    Scenario: Entering payment details
        When I enter my payment details
        And I submit the payment
        Then the payment should be processed
        And a confirmation message should be displayed

    Scenario: Payment with a credit card
        Given I choose to pay with a credit card

        When I enter valid credit card details
        And I submit the payment
        Then the payment should be processed successfully

    Scenario: Payment with invalid credit card details
        Given I choose to pay with a credit card

        When I enter invalid credit card details
        Then an error message should be displayed

    Scenario: Choosing an alternative payment method
        Given I choose an alternative payment method like PayPal

        When I enter my PayPal details
        And I submit the payment
        Then the payment should be processed using PayPal

    Scenario: Canceling the payment
        When I am entering payment details
        And I choose to cancel the payment
        Then the payment should not be processed
        And I should be redirected back to the phone selection page