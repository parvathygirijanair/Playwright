const { test, expect } = require('@playwright/test');
test('Single File Upload', async ({ page }) => {
    await page.goto('https://www.onlinenotepad.io/');
    await page.keyboard.type("WWelcome");
    await page.keyboard.press('Control+A');
        await page.keyboard.press('Control+C');
                await page.keyboard.press('ArrowRight');
await page.keyboard.press('Enter');
await page.keyboard.press('Control+V');


})