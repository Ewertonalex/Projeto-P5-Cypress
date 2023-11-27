const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",

    //definir resolução da janela
    viewportWidth: 1440,
    viewportHeight: 900,
    
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
  "screenshotOnRunFailure": false
});
