describe('Example of navigating two different urls', () => {
  before(() => {
    cy.log('In before all');
  });
  beforeEach(() => {
    cy.log('In before each');
  });
  //please run each of these test each time alone with it.only and by openning cypress again from scratch.
  it('First Example', () => {
    cy.visit(''); 
    cy.visit('https://www.amazon.com/'); 
  });
  // in the above test if I executed these line like this it will navigate to amazon without restart all spec
  // if I will put line 9 cy.visit('');  in comments and just execute the navigation to amazon it will restart whole spec

  it('Second Example', () => {
    cy.visit('https://www.amazon.com/'); // if we use different url than base url it will restart the spec but I think it's ok here, does it?
  });
  it('Third Example', () => { // this is the best practice I think
    // using cy.origin
    cy.visit('');
    cy.origin('https://www.amazon.com', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('mixpanel is not defined')) {
          // Return false to prevent the test from failing
          return false;
        }
        // If the error is something else, let the test fail
        return true;
      });
      cy.visit('/');
    });
  });
});
