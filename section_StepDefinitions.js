const { When, And, Then }= require('@cucumber/cucumber')

// Scenario: Deliver car
When('Car is allocated is performed', function () {
// Your test goes here ;
});
And('I have key', function () {
  // Your test goes here ;
});

Then('Car is allocated completes', function () {
// Your test goes here ;
});
When('Platform Transportation is performed', function () {
// Your test goes here ;
});
Then('Platform Transportation completes new change', function () {
  // Your test goes here ;
});


// Scenario: Reject invalid requests
When('Review Request is performed where request is <request2>', function () {
// Your test goes here ;
});
Then('Review Request completes with outcome <outcome2>', function () {
// Your test goes here ;
});
When('Request Rejected is performed hello', function () {
// Your test goes here ;
});
And('Hello', function () {
  // Your test goes here ;
});

Then('Request Rejected completes', function () {
// Your test goes here ;
});