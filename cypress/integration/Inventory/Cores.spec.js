/// <reference types="cypress" />

// check that 'explore our inventory' link takes user to correct page

context('Cores', () => {

    it('Visits homepage and views Cores inventory', () => {
      cy.visit('/'); // we can omit the base url, it is in the cypress.json file
      cy.get('[data-cy=see-inventory-link]').click()
      cy.get('[data-cy=inventory-filter-button]').eq(1).click() // selects the first element, which is Cores

      // Displays 8 Cores items & 9 page links
      cy.get('[data-cy=item-title]').contains('B0003')
      cy.get('[data-cy=item-title]').contains('B1005')
      cy.get('[data-cy=pagination-link]').contains('1')
      cy.wait(200)
      cy.get('[data-cy=pagination-link]').contains('9').should('exist')
      cy.get('[data-cy=pagination-link]').contains('10').should('not.exist')

      // Click B0003 and displays name & modal close button
      cy.get('[data-cy-link]').eq(0).click() // selects the first element, which is B0003
      cy.get('[data-cy=item-name]').contains('B0003')
      cy.get('[data-cy=close-modal]').contains('Close')
      cy.get('[data-cy=close-modal]').click()

      // Display Cores inventory landing page
      cy.get('[data-cy=item-title]').contains('B0003')
      cy.get('[data-cy=item-title]').contains('B1005')
      cy.get('[data-cy=pagination-link]').contains('1')
      cy.wait(200)
      cy.get('[data-cy=pagination-link]').contains('9').should('exist')
      cy.get('[data-cy=pagination-link]').contains('10').should('not.exist')
    });

})
