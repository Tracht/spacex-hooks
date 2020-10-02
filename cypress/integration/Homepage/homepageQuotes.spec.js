/// <reference types="cypress" />
// check that quotes are shown in the correct order

describe("Homepage Quotes", () => {
  
  beforeEach(() => {
    cy.visit('/'); // we can omit the base url, it is in the cypress.json file
  })

  it('On homepage, first quote displayed is: `Where are the aliens?`', () => {
    cy.get('[data-cy=elon-quote]').contains('Where are the aliens?')
  });

  it('On clicking `get Elons wisdom`, second quote displays: `You can either watch it happen or be a part of it.`', ()=> {
    cy.get('[data-cy=next-elon-quote]').click()
    cy.get('[data-cy=elon-quote]').contains('You can either watch it happen or be a part of it.')
  })

  it('Clicking `get Elons wisdom` 10 times, the first quote displays: `Where are the aliens?`', ()=> {
    for(let n = 0; n < 10; n ++){ 
      cy.get('[data-cy=next-elon-quote]').click()
    }
    cy.get('[data-cy=elon-quote]').contains('Where are the aliens?')
  })

})


 