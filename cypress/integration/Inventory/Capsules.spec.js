/// <reference types="cypress" />

// check that 'explore our inventory' link takes user to correct page

context('Capsules', () => {
  
  it('visits homepage and selects Capsules category', ()=> {
    cy.visit('/'); // we can omit the base url, it is in the cypress.json file
    cy.get('[data-cy=see-inventory-link]').click()
    cy.get('[data-cy=inventory-filter-button]').eq(0).click() // selects the first element, which is Capsules

    // Display 8 capsule items & 3 page links
    cy.get('[data-cy=item-title]').contains('C101')
    cy.get('[data-cy=item-title]').contains('C108')
    cy.get('[data-cy=pagination-link]').contains('1')
    cy.wait(200)
    cy.get('[data-cy=pagination-link]').contains('3').should('exist')
    cy.get('[data-cy=pagination-link]').contains('4').should('not.exist')

    // Click C1010 and display name & modal close button
    cy.get('[data-cy-link]').eq(0).click() // selects the first element, which is C101
    cy.get('[data-cy=item-name]').contains('C101')
    cy.get('[data-cy=close-modal]').contains('Close')
    cy.get('[data-cy=close-modal]').click()

    // Displays Capsule inventory landing page
    cy.get('[data-cy=item-title]').contains('C101')
    cy.get('[data-cy=item-title]').contains('C108')

    cy.get('[data-cy=pagination-link]').contains('1')
    cy.wait(200)
    cy.get('[data-cy=pagination-link]').contains('3').should('exist')
    cy.get('[data-cy=pagination-link]').contains('4').should('not.exist')
  });

})
