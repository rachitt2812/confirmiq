@datatable
Feature: Login Feature

    Scenario: DataTable User successfully login
        Given DataTable Go to login page
        When DataTable Login with different different users
            | useremail                                    | password |
            | aaaaaaaaaaaaaaaaaaaaaaaaaa@knplabs.com   | 12412312 |
            | ama111111111111111111111111@symfony.com   | 1424214  |
            | am2222222222222222222222222@symfony.com  | 1424214  |
            | am33333333333333333333333333@symfony.com | 1424214  |

        Then a nu maan close the chrome
          Given Simple Go to login page
          When common function