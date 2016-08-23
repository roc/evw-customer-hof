@validation
Feature: Validation

Scenario: Neither option is selected

  Given I start the "Start" app
  And I continue
  Then the validation summary should contain
    """
    Select an option
    """
