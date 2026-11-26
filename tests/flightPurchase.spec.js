const { test, expect } = require('@playwright/test');
test('Verify Flight Purchase', async ({ page }) => {
    await page.goto('https://blazedemo.com/');
    await page.locator('select[name="fromPort"]').selectOption('Boston');
    await expect(page.locator('select[name="fromPort"]')).toHaveValue('Boston');
    await page.locator('select[name="toPort"]').selectOption('New York');
    await expect(page.locator('select[name="toPort"]')).toHaveValue('New York')
    await page.getByRole('button', { name: 'Find Flights' }).click();
    const lufthansa = page.locator('tr').filter({ hasText: "Lufthansa" });
    await lufthansa.getByRole('button', { name: 'Choose This Flight' }).click();
    await expect(page).toHaveURL(/purchase/i);
    await expect(page).toHaveTitle(/purchase/i);
    const airline = page.locator('p').filter({ hasText: 'Airline:' });
    await expect(airline).toContainText('United');
    const flightNumber = page.locator('p').filter({ hasText: 'Flight Number' });
    await expect(flightNumber).toContainText('UA954');
    const Price = await page.locator('p').filter({ hasText: 'Price' });
    await expect(Price).toContainText('400');
    const Fees = page.locator('p').filter({ hasText: 'Arbitrary Fees and Taxes' });
    await expect(Fees).toContainText('514.76');
    const TotalCost = page.locator('p').filter({ hasText: 'Total Cost' });
    await expect(TotalCost).toContainText('914.76');
    await page.locator('#inputName').fill('Playwright JS');
    await page.locator('#address').fill('Bangalore');
    await page.locator('#state').fill('Karnataka');
    await page.locator('#cardType').selectOption({ index: 1 });
    await page.locator('#creditCardNumber').fill('556622337788');
    await page.locator('#creditCardYear').fill('2025');
    await page.locator('#nameOnCard').fill('Playwright By Microsoft');
    await page.locator('#rememberMe').click();
    await expect(page.locator('#rememberMe')).toBeChecked();
    await page.locator('.btn.btn-primary').click();
    await expect(page).toHaveURL(/confirmation/i);
    const orderId = await page.locator('tr').filter({ hasText: 'Id' }).locator('td').nth(1).innerText();
    expect(orderId).not.toBeNull();
    expect(orderId.trim()).not.toBe('');
    console.log('Generated Order ID:', orderId);

})
