Feature: To-Do App

  Scenario: Display two todo items by default
    Given I open the Cypress example to-do app
    Then It displays two todo items by default

  Scenario: Add new todo items
    Given I open the Cypress example to-do app
    When I add a new todo item "Feed the cat"
    Then It displays three todo items including the new one

  Scenario: Check off an item as completed
    Given I open the Cypress example to-do app
    When I check off the item "Pay electric bill"
    Then "Pay electric bill" should be marked as completed

  Scenario: Filter for uncompleted tasks
    Given I open the Cypress example to-do app
    And I have checked off "Pay electric bill"
    When I filter for active tasks
    Then Only the "Walk the dog" task should be visible

  Scenario: Filter for completed tasks
    Given I open the Cypress example to-do app
    And I have checked off "Pay electric bill"
    When I filter for completed tasks
    Then Only the "Pay electric bill" task should be visible in completed

  Scenario: Delete all completed tasks
    Given I open the Cypress example to-do app
    And I have checked off "Pay electric bill"
    When I delete all completed tasks
    Then There should be 1 task left and "Clear completed" should not be visible
