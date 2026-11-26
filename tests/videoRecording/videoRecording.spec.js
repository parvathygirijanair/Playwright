const { test, expect } = require('@playwright/test');

test.skip('SauceDemo Video', async ({ page }) => {

    // Open the SauceDemo website
    await page.goto('https://www.saucedemo.com/');
    await page.locator("input#user-name").fill('standarduser')
    await page.locator("input#password").fill('secret_sauce')
    await page.locator("input[type='submit']").click();
    await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
    await page.close()

});
test('SauceDemo Screenshot', async ({ page }) => {

    // Open the SauceDemo website
    await page.goto('https://www.saucedemo.com/');
    // await page.locator("input#user-name").fill('standarduser')
    // await page.locator("input#password").fill('secret_sauce')
    
    await expect(page.locator('h3[data-test="error"]')).toBeHidden;
    await page.locator("input[type='submit']").click();
    await page.locator('h3[data-test="error"]').screenshot({path:"error.png"});
await expect (page.locator('h3[data-test="error"]')).toBeVisible();
await page.screenshot({path:'error1.png'});
});
