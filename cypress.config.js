const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: 'q2yud3',
  e2e: {

    baseUrl: 'https://meu.inss.gov.br/',
    specPattern: "**/*.feature",

    //definir resolução da janela
    viewportWidth: 1440,
    viewportHeight: 900,

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    }
  },
});
