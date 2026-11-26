const{test,expect}=require('@playwright/test');
test('Sauce DEmo Login',async({page})=>{
    await page.goto('https://practice.qabrains.com/ecommerce/login');
    await page.getByPlaceholder('eg. user@user.com').fill('test@qabrains.com');
    await page.locator('#password').fill('Password123');
    await page.getByRole('button', { name: /LOGIN/i }).click();
    // await expect(page.getByText('A sample description for the product').first()).toBeVisible();
    await expect(page.getByText('A sample description for the product').nth(0)).toBeVisible();

// await page.getByAltText('Sample Shirt Name').click();
})