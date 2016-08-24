@validation
Feature: Validation

Scenario: Neither option is selected

  Given I start the "Start" app
  And I continue
  Then the "Validation message" should contain "Select an option"
