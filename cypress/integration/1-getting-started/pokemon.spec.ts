/// <reference types="cypress" />

describe('example pokemon app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays input by default', () => {
    cy.get('input').should('have.length', 1)
    cy.get("input[placeholder=\"Search...\"]").type(">3")
  })

  it('displays two buttons by default', () => {
    cy.get('button').should('have.length', 2)
    cy.get('button').first()
        .should('have.text', 'Apply')
        .should('be.visible')

    cy.get('button').last().should('have.text', 'Clear')
  })

})
