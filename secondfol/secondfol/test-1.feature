@simple
Feature: Login Feature

    Scenario: Simple User successfully login
        Given Simple Go to login page
            | useremailNew                             | password |
            | hello  new change                        | 12412312 |
            | ama111111111111111111111111@symfony.com  | 1424214  |
            | am2222222222222222222222222@symfony.com  | 1424214  |
            | am33333333333333333333333333@symfony.com | 1424214  |

        When Simple Enter user email "user1@gmail" and password "pass@1234"
            | A            | B           | C              | D         |
            | Harrya Lion, | C.S. Lewis  | aaaaaaaaaaaaaa | casdcasdc |
            | In t         | Erik Larson | aaaaaaaaaaa    | casdcasdc |
        Then Simple Click on login button
        Then Simple Login successfullyaaaaaaa "userrrrrr@gmail.com"