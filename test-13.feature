Feature: asadsf

    Scenario: CQCash_Regression_Cancellation_CM
        Given I launch Commerce manager

        When I login to Commerce Manager
        Then I navigate to Purchase Orders for Today Order Management
        Then I search and validate CQCash transaction status in Transaction Details

        When I search CQCash transactions in Shipments and add them to PickList

        When I navigate to PickLists
        Then I complete shipment for CQCash <Login> <Password>
        Then I validate Packing Slips for all FXC Transactions
        Then I navigate to Purchase Orders for Today Order Management
        Then I return transaction in Commerce Manager <Login>
        Then I navigate to Purchase Orders for Today Order Management
        Then I report order details for FXC <Password>

    Scenario: CQCash_CQ_Post_CM
        Given I launch Commerce manager
        When I login to Commerce Manager

        When I navigate to customers type notional limits

        When I search and filter for the notional items

        When Update the "CQ" minimum notional limit to "100.00"
        Then Updates should be reflected on the record

    Scenario: CQCash_CQ_Pre_CM
        Given I launch Commerce manager

        When I login to Commerce Manager

        When I navigate to customers type notional limits

        When I search and filter for the notional items

        When Update the "CQ" minimum notional limit to "2.00"
        Then Updates should be reflected on the record

    Scenario: CQ_OFC_OLB_HealthCheck
        Given I launch url on "desktop" for CQCash, delivery method "home"

        When I login with OLB Login details for FXC Desktop Health Check

        When I Verify Please Identify Yourself Screen

        When I navigate to Order Foreign Cash page

        When For health check, I select country and calculate currency exchange rate
        Then I Logoff from CQ OFC OLB

    Scenario: CQCash_Regression_OLB_English_Desktop_GTAA
        Given I verify if notional limit is set for CQ OFC
        Then I launch url on "desktop" for CQCash, delivery method "GTAA"
        Then I login with OLB Login details for FXC Desktop
        Then I Verify Please Identify Yourself Screen
        Then I navigate to Order Foreign Cash page

        When I choose the amount and the currency for the Order Foreign Currency

        When I confirm exchange rate

        When I select delivery/pick-up method "Toronto Pearson Airport Pick-Up"

        When I select the account details
        Then The order is successfully placed for "Desktop GTAA"

    Scenario: CQCash_Regression_OLB_English_Desktop_Branch
        Given I verify if notional limit is set for CQ OFC
        Then I launch url on "desktop" for CQCash, delivery method "branch"
        Then I login with OLB Login details for FXC Desktop
        Then I Verify Please Identify Yourself Screen
        Then I navigate to Order Foreign Cash page

        When I choose the amount and the currency for the Order Foreign Currency

        When I confirm exchange rate

        When I select delivery/pick-up method "Branch Pick-Up"

        When I select the account details
        Then The order is successfully placed for "Desktop Branch"

    Scenario: CQCash_Regression_OLB_English_Desktop_Home
        Given I verify if notional limit is set for CQ OFC
        Then I launch url on "desktop" for CQCash, delivery method "home"
        Then I login with OLB Login details for FXC Desktop
        Then I Verify Please Identify Yourself Screen
        Then I navigate to Order Foreign Cash page

        When I choose the amount and the currency for the Order Foreign Currency

        When I confirm exchange rate

        When I select delivery/pick-up method "Home Delivery"
        Then The order is successfully placed for "Desktop Home"

        When I select the account details