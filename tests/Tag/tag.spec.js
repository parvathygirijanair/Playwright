const { test, expect } = require('@playwright/test');
test.describe('Sauce Demo Login Module', () => {
    test.beforeEach(async ({ page }) => {
        // Open the SauceDemo website
        await page.goto('https://www.saucedemo.com/');
    });
    test('@smoke @ loginwith valid crediantial should redirect to inventory page', async ({ page }) => {
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page).toHaveURL(/inventory/);

    });
    test('@regression Login with invalid credential to show error message', async ({ page }) => {

        await page.fill('#user-name', 'standardser');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page.locator("h3[role='alert']")).toContainText('Epic sadface: Username and password do not match any user in this service');
    })
    test('@sanity @login user see the validation error when username is missing', async ({ page }) => {
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page.locator("h3[role='alert']")).toContainText('Epic sadface: Username is required');

    })
})
