const { Given, When, Then }= require('@cucumber/cucumber')

// Scenario: User successfully login
Given('nn Go to login page', function () {
// Your test goes here ;
});
When('nn Enter user email {string} and password {string}', function (email, password) {
  //nn Enter user email "<email>" and password "<password>"
  // Your test goes here ;
});

Then('nn Click on login button', function () {
// Your test goes here ;
});
Then('xxxx Login successfully {string}', function (email) {
//xxxx Login successfully "<email>"
// Your test goes here ;
});