import React from 'react'
import BottomNav from '../BottomNav'
import en from '@/locales/en.json'

describe('<BottomNav />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BottomNav dict={en.navigation} lang="en" />)
  })
})
