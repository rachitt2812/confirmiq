Feature: CQCash

Scenario: CQCash_Regression_Cancellation_CM
Given I launch Commerce manager
When I login to Commerce Manager

Scenario: CQCash_CQ_Post_CM
Given I launch Commerce manager
|KPI|Measure|KPIOriginal|Name|HeadingName|Value|userinput_totalcorrect_incorrect|
|K4|M21|KPI 9|Archived|Period|Sep-2023|Incorrect|
When I login to Commerce Manager

Scenario: CQCash_CQ_Pre_CM
Given I launch Commerce manager newqdqdaaaaaaaaaaaaaa
When I login to Commerce Manager
When I navigate to customers type notional limits
When I search and filter for the notional items
When Update the "CQ" minimum notional limit to "2.00"
Then Updates should be reflected on the record
Then i say hello aan

Scenario: CQ_OFC_OLB_HealthCheck
Given I launch url on "desktop" for CQCash, delivery method "home"
When I login with OLB Login details for FXC Desktop Health Check
When I Verify Please Identify Yourself Screen
When I navigate to Order Foreign Cash page
When For health check, I select country and calculate currency exchange rate
Then I Logoff from CQ OFC OLB

Scenario: CQCash_Regression_OLB_English_Desktop_GTAA
Given I verify if notional limit is set for CQ OFC

Scenario: CQCash_Regression_OLB_English_Desktop_Branch
Given I verify if notional limit is set for CQ OFC

Scenario: CQCash_Regression_OLB_English_Desktop_Home
Given I verify if notional limit is set for CQ OFC
Then I launch url on "desktop" for CQCash, delivery method "home"
Then I login with OLB Login details for FXC Desktop
Then I Verify Please Identify Yourself Screen
Then I navigate to Order Foreign Cash page
When I choose the amount and the currency for the Order Foreign Currency
When I confirm exchange rate
When I select delivery/pick-up method "Home Delivery"
When I select the account details
Then The order is successfully placed for "Desktop Home"