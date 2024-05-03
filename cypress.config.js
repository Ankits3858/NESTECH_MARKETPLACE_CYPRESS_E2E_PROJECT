const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern : "cypress/integration/marketplace/*.js"
  },
  env :
  {
    url : "http://localhost:4200/"
  }
});
