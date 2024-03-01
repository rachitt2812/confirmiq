@example
Feature: Login Feature

    Scenario Outline: User successfully login
        Given nn Go to login page
            | useremailNew                             | password |
            | hello  new change                        | 12412312 |
            | ama111111111111111111111111@symfony.com  | 1424214  |
            | am2222222222222222222222222@symfony.com  | 1424214  |
            | am33333333333333333333333333@symfony.com | 1424214  |

        When nn Enter user email "<email>" and password "<password>"
        Then nn Click on login button
        Then xxxx Login successfully "<email>"

        Examples:
            | A            | B           | C              | D         |
            | Harrya Lion, | C.S. Lewis  | aaaaaaaaaaaaaa | casdcasdc |
            | In t         | Erik Larson | aaaaaaaaaaa    | casdcasdc |