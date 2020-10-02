/// <reference types="cypress" />

// check that 'explore our inventory' link takes user to correct page

context('Ships', () => {

  it('Visits homepage and clicks on Ships category', ()=> {
    cy.visit('/'); // we can omit the base url, it is in the cypress.json file
    cy.get('[data-cy=see-inventory-link]').click()

    // Click on Ship category 
    cy.get('[data-cy=inventory-filter-button]').eq(4).click() // selects the first element, which is Ships

    // Displays 8 mission items & 3 page links
    cy.get('[data-cy=item-title]').contains('American Champion')
    cy.get('[data-cy=item-title]').contains('American Islander')
    cy.get('[data-cy=item-title]').contains('GO Ms Chief')

    cy.get('[data-cy=pagination-link]').contains('1')
    cy.get('[data-cy=pagination-link]').contains('2')
    cy.wait(200)
    cy.get('[data-cy=pagination-link]').contains('3').should('exist')
    cy.get('[data-cy=pagination-link]').contains('4').should('not.exist')

    // Click ABS & display ABS name
    cy.get('[data-cy-link]').eq(0).click() // selects the first element, which is American Champion
    cy.get('[data-cy=item-name]').contains('American Champion')
    cy.get('[data-cy=close-modal]').click()

    // Returns to Ship inventory landing page
    cy.get('[data-cy=item-title]').contains('American Champion')
    cy.get('[data-cy=item-title]').contains('American Islander')
    cy.get('[data-cy=item-title]').contains('GO Ms Chief')

    cy.get('[data-cy=pagination-link]').contains('1')
    cy.wait(200)
    cy.get('[data-cy=pagination-link]').contains('3').should('exist')
    cy.get('[data-cy=pagination-link]').contains('4').should('not.exist')
  })
    
})
