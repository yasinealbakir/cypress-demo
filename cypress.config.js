const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "vvb4ks",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    experimentalRunAllSpecs: true,
    watchForFileChanges: false, //her değişiklikte testler otomatik çalışmaması için
    experimentalStudio: true, //Record-play özelliğini açmak için
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      preprod: 'https://dijitopp.ito.org.tr/',
      prod: 'https://dijito.ito.org.tr/',
      uat: 'https://dijitouat.ito.org.tr/'
    },
  },
});
