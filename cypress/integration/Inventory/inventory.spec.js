/// <reference types="cypress" />

// check that 'explore our inventory' link takes user to correct page

describe('User clicks to see inventory, and clicks to go back to homepage', () => {
  it('should display the first quote', () => {
    cy.visit('/');
    cy.get('[data-cy=see-inventory-link]').click()
    cy.get('[data-cy=see-homepage-link]').contains('Go to homepage')
    cy.get('[data-cy=see-homepage-link]').click()
    cy.get('[data-cy=elon-quote]').contains('Where are the aliens?')
    cy.get('[data-cy=see-inventory-link]').contains('Explore our inventory')
  });
});

describe('GET requests', ()=> {
  it('should have status 200 for dragons', () => {
    cy.request('https://api.spacexdata.com/v3/dragons').as('dragons')
    cy.get('@dragons').should('have.property', 'status', 200)
  })

  it('should have status 200 for capsules', () => {
    cy.request('https://api.spacexdata.com/v3/capsules').as('capsules')
    cy.get('@capsules').should('have.property', 'status', 200)
  })

  it('should have status 200 for cores', () => {
    cy.request('https://api.spacexdata.com/v3/cores').as('cores')
    cy.get('@cores').should('have.property', 'status', 200)
  })

  it('should have status 200 for missions', () => {
    cy.request('https://api.spacexdata.com/v3/missions').as('missions')
    cy.get('@missions').should('have.property', 'status', 200)
  })

  it('should have status 200 for ships', () => {
    cy.request('https://api.spacexdata.com/v3/ships').as('ships')
    cy.get('@ships').should('have.property', 'status', 200)
  })

}); 