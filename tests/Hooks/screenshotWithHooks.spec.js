const { test, expect } = require('@playwright/test');
test.describe('SauceDemo Test', () => {
test.beforeEach(async ({page})=>{
  // Open the SauceDemo website
    await page.goto('https://www.saucedemo.com/');
})
  
test ('Saucedemo test', async({page}) => {
    await page.locator('input#user-name').fill('standard_user')
    await page.locator('input#password').fill('secret_sauce')
    await page.locator('input[type="submit"]').click();
     await expect(page).toHaveURL(/inventory/);
});
test.afterEach(async ({page})=>{
    page.screenshot({path:`screenshot/${Date.now()}.png`})
})   
});