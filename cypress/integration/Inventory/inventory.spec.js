/// <reference types="cypress" />

// check that 'explore our inventory' link takes user to correct page

  describe('User clicks to see inventory, and clicks to go back to homepage', () => {
    it('should display the first quote', () => {
      cy.visit('/'); // we can omit the base url, it is in the cypress.json file
      cy.get('[data-cy=see-inventory-link]').click()
      cy.get('[data-cy=see-homepage-link]').contains('Go to homepage')
      cy.get('[data-cy=see-homepage-link]').click()
      cy.get('[data-cy=elon-quote]').contains('Where are the aliens?')
      cy.get('[data-cy=see-inventory-link]').contains('Explore our inventory')
    });
  })