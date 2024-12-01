const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: 'https://www.saucedemo.com',
    pageLoadTimeout: 90000,
    defaultCommandTimeout: 90000,
    supportFile: 'cypress/support/e2e.js',
    chromeWebSecurity: false,
    retries: {
      runMode: 2,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      
      on("file:preprocessor", bundler);
      addCucumberPreprocessorPlugin(on, config);
      
      on('task', {
        log(message) {
          console.log(message);
          return null;
        }
      });

      return config;
    },
  },
});