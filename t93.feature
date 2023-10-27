@example

Feature: Login Feature
    Background:
        Given Example Go to login page
        Given This is Background step
     @storykey=10003
    Scenario Outline: Example Kevin successfully  login
        When Example Enter user email "<email>" and password "<password>"
        Then Example Click on login button..
        Then Example Login ?
        Examples:
            | email                                               | password        |
            | kevin@gmail.com                            | kevin@12123     |
            | ben10@gmail.com                           | eleven@31212  |
            | neweleaaven@gmail.com             | newelevaen@31212  |