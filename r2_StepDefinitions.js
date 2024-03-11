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