@simple
Feature: Login Feature

    # The second example has three steps
    Scenario Outline: Breaker joins a game
        Given the Maker has started a game with the word "silky"

        When the Breaker joins the Maker's game
        Then the Breaker must guess a word with 5 characters

        Examples:
| useremailNew | password |
| me | this |
| HAR | cant |