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
| email | password |
| amanaaaaaaaaaaaaaaaaaaaaaaaaaa@knplabs.com | 12412312 |
| aman11111111111111111111111111@symfony.com | 1424214 |
| aman222222222222222222222222222@symfony.com | 1424214 |
| aman3333333333333333333333333333@symfony.com | 1424214 |