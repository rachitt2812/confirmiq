const { Given, When, Then }= require('@cucumber/cucumber')

// Scenario: Simple User successfully login
Given('Simple Go to login page', function () {
// Your test goes here ;
});
When('Simple Enter user email {string} and password {string}', function (str1, str2, dataTable) {
  //Simple Enter user email "aman@gmail" and password "aman@1234"
  // Your test goes here ;
});

Then('Simple Click on login button', function () {
// Your test goes aa ;
});
Then('Simple Login succesasfully {string}', function (str1) {
//Simple Login succesasfully "aman@gmail"
// Your test goes here ;
});