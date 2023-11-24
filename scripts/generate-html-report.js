const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'cypress/reports/cucumber-json',
  reportPath: 'cypress/reports/html',
  metadata: {
    browser: {
      name: 'chrome',
      version: '94'
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10'
    }
  },
  customData: {
    title: 'Test Execution Report',
    data: [
      { label: 'Project', value: 'Your Project' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Cycle', value: 'B11221.34321' },
      { label: 'Execution Start Time', value: 'Nov 15th 2023, 02:31 PM EST' },
      { label: 'Execution End Time', value: 'Nov 15th 2023, 02:56 PM EST' }
    ]
  }
});
