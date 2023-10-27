Feature: Section

Background:
   Given hello has logged on successfully
   When user adds 1 item *CO0003*
   And user confirms the item
   Then log in the userr
   
   
 Scenario Outline: Successful shopping
         Then user returns to "<eat>" shopping screen
         Examples:
            | eat                   | password   |
            | user@gmail.com   | user@12123 |