@start
Feature: Starting the customer app

Scenario: The user chooses to apply for a new EVW

  Given I start the "Start" app
  When I click "Apply"
  And I continue
  # Link sent page
  Then I should be on the "" page of the "Apply" app

Scenario: The user chooses to update an existing EVW

  Given I start the "Start" app
  When I click "Update"
  And I continue
  # Link sent page
  Then I should be on the "" page of the "Find your application" app
