describe('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('dynamic route', () => {
    cy.url().should('eq', 'http://localhost:3000/en')

    cy.getByTestId('name-input').type('Benny{enter}')

    cy.url().should('eq', 'http://localhost:3000/en/hi/Benny')
  })

  it('about', () => {
    cy.getByTestId('footer-about').click()

    cy.url().should('eq', 'http://localhost:3000/en/about')

    cy.getByTestId('footer-home').click()

    cy.url().should('eq', 'http://localhost:3000/en')
  })

  it('counter', () => {
    cy.getByTestId('count').should('have.text', '0')
    cy.getByTestId('warn-text').should('have.class', 'hidden')

    cy.getByTestId('btn-inc-1').click()
    cy.getByTestId('count').should('have.text', '1')

    cy.getByTestId('btn-dec-1').click()
    cy.getByTestId('count').should('have.text', '0')

    cy.getByTestId('btn-inc-5').click()
    cy.getByTestId('count').should('have.text', '5')

    cy.getByTestId('btn-dec-5').click()
    cy.getByTestId('count').should('have.text', '0')

    // should reached max and not greater than 10
    cy.getByTestId('btn-inc-5').click()
    cy.getByTestId('btn-inc-5').click()
    cy.getByTestId('btn-inc-5').click()
    cy.getByTestId('count').should('have.text', '10')
    cy.getByTestId('warn-text').should('have.text', 'The value reached max')

    cy.getByTestId('btn-reset').click()
    cy.getByTestId('count').should('have.text', '0')

    // should reached min and not lower than -10
    cy.getByTestId('btn-dec-5').click()
    cy.getByTestId('btn-dec-5').click()
    cy.getByTestId('btn-dec-5').click()
    cy.getByTestId('count').should('have.text', '-10')
    cy.getByTestId('warn-text').should('have.text', 'The value reached min')
  })
})
