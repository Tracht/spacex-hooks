/// <reference types="cypress" />

// check that 'explore our inventory' link takes user to correct page

  describe('Clicking `explore inventory link`', () => {
    it('takes user to Inventory page & shows link `go to homepage` ', () => {
      cy.visit('/'); // we can omit the base url, it is in the cypress.json file
      cy.get('[data-cy=see-inventory-link]').click()
      cy.get('[data-cy=see-homepage-link]').contains('Go to homepage')
    });
  })