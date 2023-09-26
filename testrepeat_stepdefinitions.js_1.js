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
 
 //Login successfully "<email> yoyo"
 
 // Your test goes here ;
});