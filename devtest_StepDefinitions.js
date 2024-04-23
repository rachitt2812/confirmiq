const { Given, And, When, Then }= require('@cucumber/cucumber')

// Scenario: Viewing the list of available phones
Given('the app is loaded', function (dataTable) {
  //the app is loaded
  // Your test goes here ;
});

And('I am on the {string} page', function (str1) {
  //I am on the "Phone Selection" page
  // Your test goes here ;
});

When('I browse the phone catalog', function () {
  // Your test goes here ;
});

Then('I should see a list of available phones', function () {
  // Your test goes here ;
});


// Scenario: Selecting a phone from the list
Given('the app is loaded', function () {
  // Your test goes here ;
});

And('I am on the {string} page', function (str1, dataTable) {
  //I am on the "Phone Selection" page
  // Your test goes here ;
});

Given('I see a list of phones', function () {
  // Your test goes here ;
});

When('I select a phone', function () {
  // Your test goes here ;
});

Then('the phone\'s details page should be displayed', function () {
// Your test goes here ;
});

// Scenario: Filtering phones by brand
Given('the app is loaded', function () {
  // Your test goes here ;
});

And('I am on the {string} page', function (str1, dataTable) {
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
Given('the app is loaded', function () {
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

Then('a {string} message should be displayed', function (str1, dataTable) {
  //a "No results found" message should be displayed
  // Your test goes here ;
});