

const { defineConfig } = require('@playwright/test');

const config = defineConfig({
    testDir: './tests',
workers:3,
retries:1,
// fullyParallel: true,
    timeout: 40 * 1000,

    expect: {
        timeout: 5000,
    },

    reporter: [
        ['list'],
        ['html'],
        ['junit', { outputFile: 'results.xml' }],
        ['json', { outputFile: 'results.json' }],
        ['allure-playwright', { resultsDir: 'my-allure-results' }]
    ],

    use: {
        browserName: 'chromium',
        headless: false,

        launchOptions: {
            slowMo: 1000
        },
    },
});

module.exports = config;
