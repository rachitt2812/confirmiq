const { Given, And, When, Then }= require('@cucumber/cucumber')

// Scenario: Vsagaaaaaa the list of available phones
Given('naae anasapp is loaded', function () {
// Your test goes here ;
});
And('I aAaaaaaaAaaoaan the {string} page', function (str1) {
  //I aAaaaaaaAaaoaan the "Phone Selection" page
  // Your test goes here ;
});

When('I AaaaaabAaaaoawse the phone catalog', function () {
// Your test goes here ;
});
Then('I AaaaaahAaoAauld see a list of available phones', function () {
// Your test goes here ;
});

// Scenario: Seaeaasacating a phone from the list
Given('thea aaapp is loaded', function () {
// Your test goes here ;
});
And('I amA aaaoana the {string} page', function (str1) {
  //I amA aaaoana the "Phone Selection" page
  // Your test goes here ;
});

Given('I ssaeae a list of phones', function () {
// Your test goes here ;
});
When('I selsect a phone', function () {
// Your test goes here ;
});
Then('the phone\'s details page should be displayed', function () {
// Your test goes here ;
});

// Scenario: Filstering phones by brand
Given('the app is loaded', function (dataTable) {
//the app is loaded
// Your test goes here ;
});
And('I am on the {string} page', function (str1) {
  //I am on the "Phone Selection" page
  // Your test goes here ;
});

Given('I see a list of phones', function () {
// Your test goes here ;
});
When('I filter phones by {string}', function (str1) {
//I filter phones by "Brand A"
// Your test goes here ;
});
Then('I should see only phones made by {string}', function (str1) {
//I should see only phones made by "Brand A"
// Your test goes here ;
});

// Scenario: Searching for a phone by name
Given('the app is loaded', function (dataTable) {
//the app is loaded
// Your test goes here ;
});
And('I am on the {string} page', function (str1) {
  //I am on the "Phone Selection" page
  // Your test goes here ;
});

Given('I see a list of phones', function () {
// Your test goes here ;
});
When('I search for {string}', function (str1) {
//I search for "Phone Model X"
// Your test goes here ;
});
Then('{string} should be displayed in the search results', function (str1) {
  //"Phone Model X" should be displayed in the search results
  // Your test goes here ;
});


// Scenario: Unable to find a phone
Given('the app is loaded', function (dataTable) {
//the app is loaded
// Your test goes here ;
});
And('I am on the {string} page', function (str1) {
  //I am on the "Phone Selection" page
  // Your test goes here ;
});

When('I search for a non-existent model', function () {
// Your test goes here ;
});
Then('a {string} message should be displayed', function (str1) {
  //a "No results found" message should be displayed
  // Your test goes here ;
});