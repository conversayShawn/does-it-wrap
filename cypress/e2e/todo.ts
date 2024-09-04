import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Custom command to visit the correct URL
Given("I open the Cypress example to-do app", () => {
  cy.openTodoApp();
});

Then("It displays two todo items by default", () => {
  cy.step("verify length")
  cy.get(".todo-list li").should("have.length", 2);
  cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
  cy.get(".todo-list li").last().should("have.text", "Walk the dog");
});

When("I add a new todo item {string}", (newItem: string) => {
  cy.get("[data-test=new-todo]").type(`${newItem}{enter}`);
  cy.get(".todo-list li").should("have.length", 3);
  cy.get(".todo-list li").last().should("have.text", newItem);
});

Then("It displays three todo items including the new one", () => {
  cy.get(".todo-list li").should("have.length", 3);
});

When("I check off the item {string}", (item: string) => {
  cy.contains(item).parent().find("input[type=checkbox]").check();
});

Then("{string} should be marked as completed", (item: string) => {
  cy.contains(item).parents("li").should("have.class", "completed");
});

When("I filter for active tasks", () => {
  cy.contains("Active").click();
});

When("I filter for completed tasks", () => {
  cy.contains("Completed").click();
});

Then("Only the {string} task should be visible", (task: string) => {
  cy.get(".todo-list li").should("have.length", 1);
  cy.get(".todo-list li").first().should("have.text", task);
  cy.contains(task === "Walk the dog" ? "Pay electric bill" : "Walk the dog").should("not.exist");
});

Then("Only the {string} task should be visible in completed", (task: string) => {
  cy.get(".todo-list li").should("have.length", 1);
  cy.get(".todo-list li").first().should("have.text", task);
  cy.contains(task === "Walk the dog" ? "Pay electric bill" : "Walk the dog").should("not.exist");
});

When("I delete all completed tasks", () => {
  cy.contains("Clear completed").click();
});

Then("There should be 1 task left and {string} should not be visible", (task: string) => {
  cy.get(".todo-list li").should("have.length", 1);
  cy.get(".todo-list li").should("not.have.text", task);
  cy.contains("Clear completed").should("not.exist");
});

Given("I have checked off {string}", (item: string) => {
  cy.contains(item).parent().find("input[type=checkbox]").check();
});
