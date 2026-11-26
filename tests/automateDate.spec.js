
const { test, expect } = require('@playwright/test');
test('Automate Date Picker',async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.locator('#datepicker').click();
        await page.locator('#datepicker').fill('03/15/2026');
        await page.keyboard.press('Enter');
        console.log("-----------");
        // Open the date picker
    await page.locator('#txtDate').click();

    // Select the year
    await page.locator('.ui-datepicker-year').selectOption('2026');

    // Select March
    await page.locator('.ui-datepicker-month').selectOption('2');

    // Select March 14
    await page.locator(
        '.ui-datepicker-calendar td[data-month="2"][data-year="2026"] a[data-date="14"]'
    ).click();

    // Print the selected date
    console.log(await page.locator('#txtDate').inputValue());
})