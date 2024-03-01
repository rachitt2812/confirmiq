@simple
Feature: Login Feature

    Scenario Outline: Simple User successfully login
        Given Simple Go to login page
|useremailNew | password |
|hello  new change | 12412312 |
|ama111111111111111111111111@symfony.com | 1424214 |
|am2222222222222222222222222@symfony.com | 1424214 |
|am33333333333333333333333333@symfony.com | 1424214 |


        When Simple Enter user email "aman@gmail" and password "aman@1234"
        Then Simple Click on login button
        Then Simple Login succesasfully "aman@gmail"

        Examples:
            | useremailNew                             | password |
            | hello  new change                        | 12412312 |
            | ama111111111111111111111111@symfony.com  | 1424214  |
            | am2222222222222222222222222@symfony.com  | 1424214  |
            | am33333333333333333333333333@symfony.com | 1424214  |