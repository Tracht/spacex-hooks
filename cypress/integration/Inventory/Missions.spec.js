/// <reference types="cypress" />

// check that 'explore our inventory' link takes user to correct page

context('Missions', () => {

  it('Visits homepage and clicks on Missions category', () => {
    cy.visit('/'); // we can omit the base url, it is in the cypress.json file
    cy.get('[data-cy=see-inventory-link]').click()
    cy.get('[data-cy=inventory-filter-button]').eq(3).click() // selects the first element, which is Missions
    
    // Display 8 mission items & 2 page links
    cy.get('[data-cy=item-title]').contains('ABS')
    cy.get('[data-cy=item-title]').contains('AsiaSat')
    cy.get('[data-cy=item-title]').contains('Orbcomm OG2')

    cy.get('[data-cy=pagination-link]').contains('1')
    cy.wait(200)
    cy.get('[data-cy=pagination-link]').contains('2').should('exist')
    cy.get('[data-cy=pagination-link]').contains('3').should('not.exist')

    // Click ABS & display ABS name, modal close button
    cy.get('[data-cy-link]').eq(0).click()
    cy.get('[data-cy=item-name]').contains('ABS')
    cy.get('[data-cy=close-modal]').contains('Close')
    cy.get('[data-cy=close-modal]').click()

    // Display Missions inventory landing page
    cy.get('[data-cy=item-title]').contains('ABS')
    cy.get('[data-cy=item-title]').contains('AsiaSat')
    cy.get('[data-cy=item-title]').contains('Orbcomm OG2')

    cy.get('[data-cy=pagination-link]').contains('1')
    cy.wait(200)
    cy.get('[data-cy=pagination-link]').contains('2').should('exist')
    cy.get('[data-cy=pagination-link]').contains('3').should('not.exist')
  })

})
