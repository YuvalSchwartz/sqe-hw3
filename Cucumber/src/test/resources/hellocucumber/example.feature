Feature: Extra time for students in tests

  Scenario: Teacher removes student from extra-time group
    Given Teacher is logged in
    When Teacher navigates to enrolled-users page
    And Teacher removes student from extra-time group
    Then Student is no longer in extra-time group

  Scenario: Student moves to the next page in a quiz
    Given Student is logged in
    And Student attempts a quiz
    And Quiz having more than one page
    When Student moves to the next page
    Then The quiz continues from the next page

  Scenario: Student starts a quiz, teacher removes him from extra-time group, student moves to the next page in a quiz
    Given Student is logged in
    And Teacher is logged in
    And Student attempts a quiz
    And Teacher navigates to enrolled-users page
    And Teacher removes student from extra-time group
    And Quiz having more than one page
    When Student moves to the next page
    Then The quiz continues from the next page