/// <reference types="cypress" />

// check that 'explore our inventory' link takes user to correct page

context('Missions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=see-inventory-link]').click()
    cy.get('[data-cy=inventory-filter-button]').eq(3).click() // selects the first element, which is Missions
  })

    it('should display 8 mission items & 2 page links', () => {
      cy.get('[data-cy=item-title]').contains('ABS')
      cy.get('[data-cy=item-title]').contains('AsiaSat')
      cy.get('[data-cy=item-title]').contains('Orbcomm OG2')

      cy.get('[data-cy=pagination-link]').contains('2')
      cy.get('[data-cy=pagination-link]').contains('3').should('not.exist')
    });

    it('click ABS & display ABS name, modal close button', () => {
      cy.get('[data-cy-link]').eq(0).click() // selects the first element, which is ABS
      cy.get('[data-cy=item-name]').contains('ABS')
      cy.get('[data-cy=close-modal]').contains('Close')


    it('when modal close is clicked, it should display inventory landing page', () => {
      cy.get('[data-cy-link]').eq(0).click() // selects the first element, which is ABS
      cy.get('[data-cy=item-name]').contains('ABS')
      cy.get('[data-cy=close-modal]').click()

      cy.get('[data-cy=item-title]').contains('ABS')
      cy.get('[data-cy=item-title]').contains('AsiaSat')
      cy.get('[data-cy=item-title]').contains('Orbcomm OG2')
      cy.get('[data-cy=pagination-link]').contains('1')
      cy.get('[data-cy=pagination-link]').contains('2')
      cy.get('[data-cy=pagination-link]').contains('3').should('not.exist')
    });

  })

})
