/// <reference types="cypress" />

// check that 'explore our inventory' link takes user to correct page

context('Dragons Inventory List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=see-inventory-link]').click()
  })

  describe('Inventory landing page', ()=> {
    it('should display 2 dragon items & 1 page link', () => {
      cy.get('[data-cy=item-title]').contains('Dragon 1')
      cy.get('[data-cy=item-title]').contains('Dragon 2')

      cy.get('[data-cy=pagination-link]').contains('1')
      cy.get('[data-cy=pagination-link]').contains('2').should('not.exist')
    });
  })

  describe('Click Dragon 1 `learn more`', () => {
    it('displays Dragon1 name, modal close button', () => {
      cy.get('[data-cy-link]').eq(0).click() // selects the first element, which is Dragon 1
      cy.get('[data-cy=item-name]').contains('Dragon 1')
      cy.get('[data-cy=close-modal]').contains('Close')
    });

    it('when modal close is clicked, it should display inventory landing page', () => {
      cy.get('[data-cy-link]').eq(0).click() // selects the first element, which is Dragon 1
      cy.get('[data-cy=item-name]').contains('Dragon 1')
      cy.get('[data-cy=close-modal]').click()
      cy.get('[data-cy=item-title]').contains('Dragon 1')
      cy.get('[data-cy=item-title]').contains('Dragon 2')
      cy.get('[data-cy=pagination-link]').contains('1')
      cy.get('[data-cy=pagination-link]').contains('2').should('not.exist')
    });

  })

})
