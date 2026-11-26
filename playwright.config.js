// const { expect, chromium } = require("@playwright/test");
// // const { defineConfig, devices, expect, chromium } = require("@playwright/test");

// const config=({
//     testdir:'./test',
//     timeout:40*1000,
//     expect:{
//         timeout:5000,
//     },
//     // reporter:'html',
//     reporter: [
//     ['list'],
//     ['html'],
//     ['junit', { outputFile: 'results.xml' }],
//     ['json', { outputFile: 'results.json' }],
//     ['allure-playwright', { resultsDir: 'my-allure-results' }]
//   ],

//     use:{
//         browsername:'chromium',
//         headless:false,
//         launchOptions: {
//             slowMo: 1000
//         },
//         // video:'retain-on-failure',
//         // screenshot:'only-on-failure',
//         // trace: 'on-first-retry'
        
//     },
// //      projects: [
// //     {
// //       name: 'chromium',
// //       use: { ...devices['Desktop Chrome'] },
// //     },
// //     {
// //       name: 'firefox',
// //       use: { ...devices['Desktop Firefox'] },
// //     },
// //     {
// //       name: 'webkit',
// //       use: { ...devices['Desktop Safari'] },
// //     },
// //     {
// //       name: 'Mobile Chrome',
// //       use: { ...devices['Pixel 5'] },
// //     },
// //     {
// //       name: 'Mobile Safari',
// //       use: { ...devices['iPhone 12'] },
// //     },
// //     {
// //       name: 'Microsoft Edge',
// //       use: { ...devices['Desktop Edge'], channel: 'msedge' },
// //     },
// //     {
// //       name: 'Google Chrome',
// //       use: { ...devices['Desktop Chrome'], channel: 'chrome' },
// //     },
// //   ],
// })
// module.exports=config;

const { defineConfig } = require('@playwright/test');

const config = defineConfig({
    testDir: './tests',

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
