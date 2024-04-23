const { Given, When, Then }= require('@cucumber/cucumber')

// Scenario: CQCash_Regression_Cancellation_CM
Given('I launch Commerce manager', function () {
// Your test goes here ;
});
When('I login to Commerce Manager', function () {
// Your test goes here ;
});

// Scenario: CQCash_CQ_Post_CM
Given('I launch Commerce manager', function () {
// Your test goes here ;
});
When('I login to Commerce Manager', function () {
// Your test goes here ;
});

// Scenario: CQCash_CQ_Pre_CM
Given('I launch Commerce manager newqdqdaaaaaaaaaaaaaa', function () {
  // Your test goes here ;
});

When('I login to Commerce Manager', function () {
// Your test goes here ;
});
When('I navigate to customers type notional limits', function () {
// Your test goes here ;
});
When('I search and filter for the notional items', function () {
// Your test goes here ;
});
When('Update the {string} minimum notional limit to {string}', function (str1, str2) {
  //Update the "CQ" minimum notional limit to "2.00"
  // Your test goes here ;
});

Then('Updates should be reflected on the record', function () {
// Your test goes here ;
});
Then('i say hello aan', function () {
  // Your test goes here ;
});


// Scenario: CQ_OFC_OLB_HealthCheck
Given('I launch url on {string} for CQCash, delivery method {string}', function (str1, str2) {
  //I launch url on "desktop" for CQCash, delivery method "home"
  // Your test goes here ;
});

When('I login with OLB Login details for FXC Desktop Health Check', function () {
// Your test goes here ;
});
When('I Verify Please Identify Yourself Screen', function () {
// Your test goes here ;
});
When('I navigate to Order Foreign Cash page', function () {
// Your test goes here ;
});
When('For health check, I select country and calculate currency exchange rate', function () {
// Your test goes here ;
});
Then('I Logoff from CQ OFC OLB', function () {
// Your test goes here ;
});

// Scenario: CQCash_Regression_OLB_English_Desktop_GTAA
Given('I verify if notional limit is set for CQ OFC', function () {
// Your test goes here ;
});

// Scenario: CQCash_Regression_OLB_English_Desktop_Branch
Given('I verify if notional limit is set for CQ OFC', function () {
// Your test goes here ;
});

// Scenario: CQCash_Regression_OLB_English_Desktop_Home
Given('I verify if notional limit is set for CQ OFC', function () {
// Your test goes here ;
});
Then('I launch url on {string} for CQCash, delivery method {string}', function (str1, str2) {
  //I launch url on "desktop" for CQCash, delivery method "home"
  // Your test goes here ;
});

When('I login with OLB Login details for FXC Desktop Health Check', function () {
// Your test goes here ;
});
When('I Verify Please Identify Yourself Screen', function () {
// Your test goes here ;
});
When('I navigate to Order Foreign Cash page', function () {
// Your test goes here ;
});
When('I choose the amount and the currency for the Order Foreign Currency', function () {
// Your test goes here ;
});
When('I confirm exchange rate', function () {
// Your test goes here ;
});
When('I select delivery/pick-up method {string}', function (str1) {
//I select delivery/pick-up method "Toronto Pearson Airport Pick-Up"
// Your test goes here ;
});
When('I select the account details', function () {
// Your test goes here ;
});
Then('The order is successfully placed for {string}', function (str1) {
//The order is successfully placed for "Desktop GTAA"
// Your test goes here ;
});