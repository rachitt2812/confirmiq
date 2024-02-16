@simple
Feature: Section Data Table

    Scenario Outline: Correct non-zero number of books found by author
        Given I have the following books in the store
            | The karan in the White City          | Erik Larson |
            | The Lion, the Witch and the Wardrobe | C.S. Lewis  |
            | In the Garden of Beasts              | Erik Larson |

        When I search for books by author Erik Larson
            | The karan in the White City          | Erik Larson |
            | The Lion, the Witch and the Wardrobe | C.S. Lewis  |
            | In the Garden of Beasts              | Erik Larson |
        Then I find 2 books
            | useremailNew                             | password |
            | hello  new change                        | 12412312 |
            | ama111111111111111111111111@symfony.com  | 1424214  |
            | am2222222222222222222222222@symfony.com  | 1424214  |
            | am33333333333333333333333333@symfony.com | 1424214  |

        Examples:
            | A         | B           |
            | The Lion, | C.S. Lewis  |
            | In t      | Erik Larson |