/// <reference types="cypress" />

// check that 'explore our inventory' link takes user to correct page

context('Dragons', () => {

  it('Visits homepage and clicks on Dragons category', () => {
    cy.visit('/'); // we can omit the base url, it is in the cypress.json file
    cy.get('[data-cy=see-inventory-link]').click()

    // Display 2 dragon items & 1 page link
    cy.get('[data-cy=item-title]').contains('Dragon 1')
    cy.get('[data-cy=item-title]').contains('Dragon 2')

    cy.get('[data-cy=pagination-link]').contains('1')
    cy.get('[data-cy=pagination-link]').contains('2').should('not.exist')
  
    // Click `learn more` for Dragon 1
    // It displays Dragon1 name, modal close button
    cy.get('[data-cy-link]').eq(0).click() // selects the first element, which is Dragon 1
    cy.get('[data-cy=item-name]').contains('Dragon 1')
    cy.get('[data-cy=close-modal]').click()

    // When modal close is clicked, it should display Dragons inventory landing page
    cy.get('[data-cy=item-title]').contains('Dragon 1')
    cy.get('[data-cy=item-title]').contains('Dragon 2')
    cy.get('[data-cy=pagination-link]').contains('1')
    cy.get('[data-cy=pagination-link]').contains('2').should('not.exist')
  })

})
