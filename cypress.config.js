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
    
    // Screenshots and videos configuration
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    video: true,
    trashAssetsBeforeRuns: true,

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

  // Mochawesome reporter configuration
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: 'Cypress Cucumber Test Results',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    code: false,
    autoOpen: false,
    reportFilename: 'mochawesome-[datetime]',
    timestamp: true
  },

  // Viewport configuration
  viewportWidth: 1280,
  viewportHeight: 720
});