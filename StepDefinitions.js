const { Given, When, Then }= require('@cucumber/cucumber')

// Scenario: Simple User successfully login
Given('Simple Go to login page', function () {
// Your test goes here ;
});
When('Simple Enter user email {string} and password {string}', function (str1, str2) {
  //Simple Enter user email "abc@gmail.com" and password "abc2@413251234e"
  // Your test goes here ;
});

Then('Simple Click on login button', function () {
// Your test goes here ;
});
Then('Simple Login succaaessfullly {string}', function (str1) {
//Simple Login succaaessfullly "ab2@gmail.co"
// Your test goes here ;a
});

const { Given, When, Then }= require('@cucumber/cucumber')

// Scenario: DataTable User successfully login
Given('DataTable Go to login page', function () {
  // Your test goes here ;
});

When('3DataTable Login with different different users', function (dataTable) {
  //3DataTable Login with different different users
  // Your test goes here ;
});

Then('DataTable close the chrome', function () {
  // Your test goes here ;
});

Given('Simple Go to login pagkea', function () {
  // Your test goes here ;
});


const { Given, When, Then }= require('@cucumber/cucumber')

// Scenario: User successfully login
Given('Go to login page', function () {
  // Your test goes here ;
});

When('Enter user email {string} and password {string}', function (email, password) {
  //Enter user email "<email>" and password "<password>"
  // Your test goes here ;
});

Then('Click on login button', function () {
  // Your test goes here ;
});

Then('Login successfully {string}', function (email) {
  //Login successfully "<email>"
  // Your test goes here ;
});


const { Given, When, Then }= require('@cucumber/cucumber')

// Scenario: Simple User successfully login
Given('Simple Go to login page', function () {
// Your test goes here ;
});
When('Simple Enter user email {string} and password {string}', function (str1, str2) {
  //Simple Enter user email "user1@gmail" and password "pass@1234"
  // Your test goes here ;
});

Then('Simple Click on login button', function () {
// Your test goes here ;
});
Then('Simple Login successfullyaaaaaaa {string}', function (str1) {
  //Simple Login successfullyaaaaaaa "userrrrrr@gmail.com"
  // Your test goes here ;
});


const { Given, When, And, Then }= require('@cucumber/cucumber')

// Scenario: Successful shopping
Given('hello has logged on successfully', function () {
  // Your test goes here ;
});

When('user adds 1 item *CO0003*', function () {
  // Your test goes here ;
});

And('user confirms the item', function () {
  // Your test goes here ;
});

Then('log in the userr', function () {
  // Your test goes here ;
});

Then('user returns to {string} shopping screen', function (eat) {
  //user returns to "<eat>" shopping screen
  // Your test goes here ;
});


const { Given, When, Then }= require('@cucumber/cucumber')

// Scenario: CQCash_Regression_Cancellation_CM
Given('I launch Commerce manager', function () {
  // Your test goes here ;
});

When('I login to Commerce Manager', function () {
  // Your test goes here ;
});

Then('I navigate to Purchase Orders for Today Order Management', function () {
  // Your test goes here ;
});

Then('I search and validate CQCash transaction status in Transaction Details', function () {
  // Your test goes here ;
});

When('I search CQCash transactions in Shipments and add them to PickList', function () {
  // Your test goes here ;
});

When('I navigate to PickLists', function () {
  // Your test goes here ;
});

Then('I complete shipment for CQCash <Login> <Password>', function () {
  // Your test goes here ;
});

Then('I validate Packing Slips for all FXC Transactions', function () {
  // Your test goes here ;
});

Then('I navigate to Purchase Orders for Today Order Management', function () {
  // Your test goes here ;
});

Then('I return transaction in Commerce Manager <Login>', function () {
  // Your test goes here ;
});

Then('I navigate to Purchase Orders for Today Order Management', function () {
  // Your test goes here ;
});

Then('I report order details for FXC <Password>', function () {
  // Your test goes here ;
});


// Scenario: CQCash_CQ_Post_CM
Given('I launch Commerce manager', function () {
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
  //Update the "CQ" minimum notional limit to "100.00"
  // Your test goes here ;
});

Then('Updates should be reflected on the record', function () {
  // Your test goes here ;
});


// Scenario: CQCash_CQ_Pre_CM
Given('I launch Commerce manager', function () {
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

Then('I launch url on {string} for CQCash, delivery method {string}', function (str1, str2) {
  //I launch url on "desktop" for CQCash, delivery method "GTAA"
  // Your test goes here ;
});

Then('I login with OLB Login details for FXC Desktop', function () {
  // Your test goes here ;
});

Then('I Verify Please Identify Yourself Screen', function () {
  // Your test goes here ;
});

Then('I navigate to Order Foreign Cash page', function () {
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


// Scenario: CQCash_Regression_OLB_English_Desktop_Branch
Given('I verify if notional limit is set for CQ OFC', function () {
  // Your test goes here ;
});

Then('I launch url on {string} for CQCash, delivery method {string}', function (str1, str2) {
  //I launch url on "desktop" for CQCash, delivery method "branch"
  // Your test goes here ;
});

Then('I login with OLB Login details for FXC Desktop', function () {
  // Your test goes here ;
});

Then('I Verify Please Identify Yourself Screen', function () {
  // Your test goes here ;
});

Then('I navigate to Order Foreign Cash page', function () {
  // Your test goes here ;
});

When('I choose the amount and the currency for the Order Foreign Currency', function () {
  // Your test goes here ;
});

When('I confirm exchange rate', function () {
  // Your test goes here ;
});

When('I select delivery/pick-up method {string}', function (str1) {
  //I select delivery/pick-up method "Branch Pick-Up"
  // Your test goes here ;
});

When('I select the account details', function () {
  // Your test goes here ;
});

Then('The order is successfully placed for {string}', function (str1) {
  //The order is successfully placed for "Desktop Branch"
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

Then('I login with OLB Login details for FXC Desktop', function () {
  // Your test goes here ;
});

Then('I Verify Please Identify Yourself Screen', function () {
  // Your test goes here ;
});

Then('I navigate to Order Foreign Cash page', function () {
  // Your test goes here ;
});

When('I choose the amount and the currency for the Order Foreign Currency', function () {
  // Your test goes here ;
});

When('I confirm exchange rate', function () {
  // Your test goes here ;
});

When('I select delivery/pick-up method {string}', function (str1) {
  //I select delivery/pick-up method "Home Delivery"
  // Your test goes here ;
});

Then('The order is successfully placed for {string}', function (str1) {
  //The order is successfully placed for "Desktop Home"
  // Your test goes here ;
});

When('I select the account details', function () {
  // Your test goes here ;
});


const { Given, When, Then }= require('@cucumber/cucumber')

// Scenario: Simple User successfully login
Given('Simple Go to login page', function () {
// Your test goes here ;
});
When('something is about to break', function () {
  // Your test goes here ;
});

When('Simple Enter user email {string} and password {string}', function (str1, str2) {
  //Simple Enter user email "ui@gmail.com" and password "uimatic@413251234e"
  // Your test goes here ;
});

Then('Simple Click on login button      onen   to one timemememememeiiiiiime', function () {
  // Your test goes here ;
});

Then('Simple Login successfully {string}', function (str1) {
  //Simple Login successfully "ui@gmail.com"
  // Your test goes here ;
});

Then('nothinga', function () {
  // Your test goes here ;
});


const { Given, When, Then }= require('@cucumber/cucumber')

// Scenario: Example Kevin successfully  login
Given('Example Go to login page', function () {
  // Your test goes here ;
});

Given('This is Background step', function () {
  // Your test goes here ;
});

When('Example Enter user email {string} and password {string}', function (email, password) {
  //Example Enter user email "<email>" and password "<password>"
  // Your test goes here ;
});

Then('Example Click on login button', function () {
  // Your test goes here ;
});

Then('Example Login successfully', function () {
  // Your test goes here ;
});