describe('Routes', () => {
  it('should match about page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test-id="about"]').click({ force: true })

    cy.url().should('eq', 'http://localhost:3000/about')
  })

  it('should match dashboard page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test-id="dashboard"]').click({ force: true })

    cy.url().should('eq', 'http://localhost:3000/dashboard')
  })

  it('should match settings page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test-id="settings"]').click({ force: true })

    cy.url().should('eq', 'http://localhost:3000/dashboard/settings')
  })

  it('dynamic route should match', () => {
    cy.visit('http://localhost:3000')
    cy.getByTestId('name-input').type('Benny')

    cy.getByTestId('submit-btn').click()

    cy.url().should('eq', 'http://localhost:3000/hi/Benny')
  })
})