Feature: cucumberTable

  Scenario Outline: Login to the demo site using a table
    Given We have access to the demo site website
    And Can create a user using "<username>" and "<password>"
    When I use the "<username>" and "<password>" credentials to login
    Then I verify the <status> it works

    Examples: 
      | username  | password |
      | guest 		| guest    |
      | guest2 		| guest2   |
