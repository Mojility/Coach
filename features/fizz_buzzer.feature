Feature: FizzBuzzer
  As a user of FizzBuzzer
  I want it to give me the correct fizzbuzz answers
  because I want to be a happy fizzbuzzer too

  Scenario: Regular output
    Given I have a fizzbuzzer
    Then it should produce output like this
      | input | output   |
      | 1     | 1        |
      | 2     | 2        |
      | 3     | fizz     |
      | 4     | 4        |
      | 5     | buzz     |
      | 6     | fizz     |
      | 7     | 7        |
      | 8     | 8        |
      | 9     | fizz     |
      | 10    | buzz     |
      | 11    | 11       |
      | 12    | fizz     |
      | 13    | 13       |
      | 14    | 14       |
      | 15    | fizzbuzz |