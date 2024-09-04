// Visit URL custom command
Cypress.Commands.add("openTodoApp", () => {
  const now = new Date().toLocaleString(); 
  cy.log(`Custom Command actual time: ${now}`);
  cy.step('Visit Todo App');
  cy.visit("https://example.cypress.io/todo");
});
