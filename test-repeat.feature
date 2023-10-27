@example
Feature: Login Feature

  Scenario Outline: User successfully login
    Given nn Go to login page
    When nn Enter user email "<email>" and password "<password>"
    Then nn Click on login button
    Then xxxx Login successfully "<email>"
    Examples:
      | email                                        | password |
      | aaaaaaaaaaaaaaaaaaaaa@knplabs.com   | 12412312 |
      | am111111111111111111111@symfony.com   | 1424214  |
      | a222222222222222222222222@symfony.com  | 1424214  |
      | am3333333333333333333333333@symfony.com | 1424214  |
      | am4444444444444@symfony.com           | 1424214  |
      | am55555555555@symfony.com          | 1424214  |
      | am666666666666666@symfony.com            | 1424214  |
      | am77777777777777776@symfony.com        | 1424214  |