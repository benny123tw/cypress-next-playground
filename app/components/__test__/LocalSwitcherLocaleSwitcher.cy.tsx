import React from 'react'
import LocaleSwitcher from '@/components/LocalSwitcher'

describe('<LocaleSwitcher />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LocaleSwitcher lang="en" />)
  })
})
