import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    projectId: 'wvjjpw',
    baseUrl: 'http://localhost:3000/en',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
