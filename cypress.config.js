const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    baseUrl: "https://66d97dd34ad2f6b8ed54e30d.mockapi.io/component/testing",
    testIsolation: true
  },

  env: {
    BASE_URL: 'http://localhost:3000', // replace with your URL
  },
});
