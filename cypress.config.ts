import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:8888',
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quiet: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
})
