Feature: Login New Feature

    Scenario: DataTaable User successfully login
        Given DataTabale Go to login page
        When DataTabale Login with different different users
            | email                                        | password |
            | amanaaaaaaaaaaaaaaaaaaaaaaaaaa@knplabs.com   | 12412312 |
            | aman11111111111111111111111111@symfony.com   | 1424214  |
            | aman222222222222222222222222222@symfony.com  | 1424214  |
            | aman3333333333333333333333333333@symfony.com | 1424214  |
        Then DataTablae close the chrome