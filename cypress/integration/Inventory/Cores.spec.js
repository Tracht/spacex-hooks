/// <reference types="cypress" />

// check that 'explore our inventory' link takes user to correct page

context('Cores', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=see-inventory-link]').click()
    cy.get('[data-cy=inventory-filter-button]').eq(1).click() // selects the first element, which is Cores
  })

    it('should display 8 capsule items & 3 page links', () => {
      cy.get('[data-cy=item-title]').contains('B0003')
      cy.get('[data-cy=item-title]').contains('B1005')
      cy.get('[data-cy=pagination-link]').contains('1')
      cy.get('[data-cy=pagination-link]').contains('9')
      cy.get('[data-cy=pagination-link]').contains('10').should('not.exist')
    });


    it('click B0003 and displays name & modal close button', () => {
      cy.get('[data-cy-link]').eq(0).click() // selects the first element, which is B0003
      cy.get('[data-cy=item-name]').contains('B0003')
      cy.get('[data-cy=close-modal]').contains('Close')
    });

    it('when modal close is clicked, it should display inventory landing page', () => {
      cy.get('[data-cy-link]').eq(0).click() // selects the first element, which is B0003
      cy.get('[data-cy=item-name]').contains('B0003')
      cy.get('[data-cy=close-modal]').click()

      cy.get('[data-cy=item-title]').contains('B0003')
      cy.get('[data-cy=item-title]').contains('B1005')
      cy.get('[data-cy=pagination-link]').contains('1')
      cy.get('[data-cy=pagination-link]').contains('9')
      cy.get('[data-cy=pagination-link]').contains('10').should('not.exist')
    });

})
