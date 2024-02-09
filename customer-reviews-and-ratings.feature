Feature: Customer Reviews and Ratings

    Background:
        Given the app is loaded
        And I am on the phone details page for "Phone Model X"

    Scenario: Submitting multiple reviews
        Given I have purchased "Phone Model X"

        When I submit the following reviews:
            | Rating | Comment                           |
            | 5      | Excellent performance and camera. |
            | 3      | Good, but battery life is short.  |
            | 4      | Great value for the price.        |
        Then all the reviews should be added to "Phone Model X" reviews

    Scenario: Viewing reviews for a phone
        When I navigate to the "Reviews" section hello
        Then I should see a list of reviews for "Phone Model X"

    Scenario: Viewing average rating
        When I view the details of "Phone Model X"
        Then the average rating displayed should be an aggregation of all submitted ratings for "Phone Model X"

    Scenario: Filtering reviews by rating
        Given there are multiple reviews for "Phone Model X"

        When I filter reviews to show only "5 stars"
        Then only reviews with "5 stars" for "Phone Model X" should be displayed