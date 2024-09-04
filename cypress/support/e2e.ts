import './commands'
import 'cypress-plugin-steps'

declare global {
    namespace Cypress {
      interface Chainable {
        openTodoApp(): Chainable<void>;
      }
    }
  }

// 2 Global before hooks
before(() => {
  const now = new Date().toLocaleString(); 
  cy.log(`1st Global Before Hook actual time: ${now}`);
});

before(() => {
  const now = new Date().toLocaleString(); 
  cy.log(`2nd Global Before Hook actual time: ${now}`);
});

// Global beforeEach hook to run before each test case
beforeEach(() => {
  const now = new Date().toLocaleString(); 
  cy.step('Log Time Before Each Test');
  cy.log(`Global BeforeEach Hook actual time: ${now}`);
  // cy.visit("https://example.cypress.io/todo");
});  