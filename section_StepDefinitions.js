const { Given, When, Then }= require('@cucumber/cucumber')

// Scenario: Simple User successfully login
Given('Simple Go to login new page', function () {
  // Your test goes here ;
});

When('Simple Enter user email {string} and password {string}', function (str1, str2) {
  //Simple Enter user email "aman@gmail" and password "aman@1234"
  // Your test goes here ;
});

Then('Simple Click on login button', function () {
// Your test goes here ;
});
Then('Simple Login successfully {string}', function (str1) {
//Simple Login successfully "uimatic@gmail.com"
// Your test goes here ;
});