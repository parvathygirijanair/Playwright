const { test, expect } = require('@playwright/test');
test('Valid login test', async ({ page }) => {
 await page.goto('https://freelance-learn-automation.vercel.app/login')
 await page.getByPlaceholder("Enter Email").pressSequentially("admin@email.com",{delay:200});
  await page.getByPlaceholder("Enter Password").pressSequentially("admin@123",{delay:200});
await page.locator("button",{name:"Sign in"}).click()
await page.getByAltText("menu").click();
  await page.getByRole("button", {name : 'Sign out'}).click();
    await expect(page).toHaveURL(/login/);
}
);