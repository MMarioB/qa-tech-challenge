const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: 'https://www.saucedemo.com',
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 30000,
    numTestsKeptInMemory: 0,
    supportFile: 'cypress/support/e2e.js',
    retries: {
      runMode: 2,
      openMode: 0
    },
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      
      return config;
    },
  },
});