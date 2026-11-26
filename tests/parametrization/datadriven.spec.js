const { test, expect } = require('@playwright/test');
const testdata = require("../../testData2.json");
test('Login To Application', async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.locator("//input[@id='email1']").fill(testdata.address.area);
    await page.locator("//input[@id='password1']").fill(testdata.password);
    await page.pause();
});
