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

Then('Simple Login successfully {string}', function (str1) {
  //Simple Login successfully "ab2@gmail.comma"
  // Your test goes here ;
});