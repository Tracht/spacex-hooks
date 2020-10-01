/// <reference types="cypress" />
// check that all quotes are shown in the correct order

context('Homepage Quotes', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays `Where are the aliens?`', () => {
    cy.get('.HomepageText').contains('Where are the aliens?')
  });

})