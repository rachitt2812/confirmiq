using TechTalk.SpecFlow
namespace TempNameSpace.Steps
{
    [Binding]
    public class UserRegistrationSteps
    {
        [Given(@"I am on the registration page")]
        public void GivenIAmOnTheRegistrationPage() {
            // Your test goes here ;
        }
        [When(@"I fill in the registration form with valid details")]
        public void WhenIFillInTheRegistrationFormWithValidDetails(Table table) {
            // Your test goes here ;
        }
        [And(@"I submit the registration form")]
        public void AndISubmitTheRegistrationForm() {
            // Your test goes here ;
        }
        [Then(@"I shoulad see a success message")]
        public void ThenIShouladSeeASuccessMessage() {
            // Your test goes here ;
        }
        [And(@"I should be logged in")]
        public void AndIShouldBeLoggedIn() {
            // Your test goes here ;
        }
    }
}