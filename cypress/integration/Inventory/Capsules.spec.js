/// <reference types="cypress" />

// check that 'explore our inventory' link takes user to correct page

context('Capsules Inventory List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=see-inventory-link]').click()
    cy.get('[data-cy=inventory-filter-button]').eq(0).click() // selects the first element, which is Capsules
  })

  describe('Inventory landing page', ()=> {
    it('should display 8 capsule items & 3 page links', () => {
      cy.get('[data-cy=item-title]').contains('C101')
      cy.get('[data-cy=item-title]').contains('C108')
      cy.get('[data-cy=pagination-link]').contains('1')
      cy.get('[data-cy=pagination-link]').contains('3')
      cy.get('[data-cy=pagination-link]').contains('4').should('not.exist')
    });
  })

  describe('Click C101 `learn more`', () => {
    it('displays C101 name, modal close button', () => {
      cy.get('[data-cy-link]').eq(0).click() // selects the first element, which is C101
      cy.get('[data-cy=item-name]').contains('C101')
      cy.get('[data-cy=close-modal]').contains('Close')
    });

    it('when modal close is clicked, it should display inventory landing page', () => {
      cy.get('[data-cy-link]').eq(0).click() // selects the first element, which is C101
      cy.get('[data-cy=item-name]').contains('C101')
      cy.get('[data-cy=close-modal]').contains('Close')

      cy.get('[data-cy=item-title]').contains('C101')
      cy.get('[data-cy=item-title]').contains('C108')
      cy.get('[data-cy=pagination-link]').contains('1')
      cy.get('[data-cy=pagination-link]').contains('3')
      cy.get('[data-cy=pagination-link]').contains('4').should('not.exist')
    });

  })

})
