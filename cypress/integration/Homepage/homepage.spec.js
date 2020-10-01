/// <reference types="cypress" />

// check that 'explore our inventory' link takes user to correct page

context('Homepage Quotes', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  describe('Clicking `explore inventory link`', () => {
    it('takes user to Inventory page & shows link `go to homepage` ', () => {
      cy.get('[data-cy=see-inventory-link').click()
      cy.get('[data-cy=see-homepage-link]').contains('Go to homepage')
    });
  })

})