const { test, expect } = require('@playwright/test');
test('Sauce Demo login Test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html');
    const username = page.locator('#user-name');
   await username.fill('standard_user');
    const password =  page.locator('#password')
   await password.fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/inventory/i);
    await expect(page).toHaveURL(/inventory\.html/i);
    await page.locator('#react-burger-menu-btn').click();
    await page.getByRole('button', { name: 'Logout' }).click();
    console.log(page.url());
    // await expect(page).toHaveURL(/index\.html/i);
    await expect(page).toHaveURL('https://www.saucedemo.com');
    await expect(username).toBeVisible();
    await expect(password).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
})