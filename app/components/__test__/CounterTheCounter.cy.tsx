import React from 'react'
import Counter from '@/components/Counter'

describe('<TheCounter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Counter />)
  })
})
