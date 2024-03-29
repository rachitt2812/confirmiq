const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
require("chromedriver");
const { afterAll } = require('mocha');

var driver = '';
var capabilities = '';


// Scenario: DataTable User successfully login
Given('DataTable Go to login page', function () {
    // driver setup
    capabilities = Capabilities.chrome();
    capabilities.set('chromeOptions', { "w3c": false });
    driver = new Builder().withCapabilities(capabilities).build();
    await driver.get('http://localhost:3000/');
});
When('DataTable Login with different different users', function (dataTable) {
//DataTable Login with different different users
const data = dataTable.hashes(); // Get the data as an object with the header values as keys
//  Iterate over each row of the DataTable
for (const row of data) {
const email = row.email;
const password = row.password;
const usernameElement = await driver.findElement(By.name('username'));
usernameElement.sendKeys(email);
const passwordElement = await driver.findElement(By.name('password'));
passwordElement.sendKeys(password);
const loginBtn = await driver.findElement(By.name('submitBtn'));
loginBtn.click();
const anchorElement = await driver.wait(
until.elementLocated(By.id('logoutbtn')),
5000 // Maximum wait time in milliseconds
);
await anchorElement.click();
}
});
Then('DataTable close the chrome', function () {
driver.quit();
});