const { test, expect } = require('@playwright/test');
test("Online Grocery Order Placement", async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await page.getByPlaceholder("Search for Vegetables and Fruits").fill('Brocolli');
    await page.locator(".search-button").click();
    await page.getByRole("button", { name: "ADD TO CART" }).click();
    await page.getByAltText("Cart").click();
    await page.getByRole("button", { name: "PROCEED TO CHECKOUT" }).click();
    await page.getByText("Place Order").click();
    await page.locator('.wrapperTwo Select').selectOption({ value: 'India' });
    await page.locator(".chkAgree").click();
    await page.getByText("Proceed").click();
    await expect(page.locator('body')).toContainText("Thank you, your order has been placed successfully");
    let message = page.getByText("Thank you, your order has been placed successfully");
    await expect(message).toBeVisible();
    console.log(await message.innerText());
})