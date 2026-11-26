const { test, expect } = require('@playwright/test');
test('demo of webtable', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const mytable = await page.locator("//table[@name='BookTable']")
    // print number of rows and columns
    const rows = await mytable.locator('tbody tr')
    const rows_count = await rows.count()
    const cols = mytable.locator('tbody tr th')
    const cols_count = await cols.count()
    console.log(rows_count,cols_count)
//print specific row data
const selenium_row = rows.filter({
    hasText : "Master In Selenium"
})
const all_tds = await selenium_row.locator("td")
const bookname = await all_tds.nth(0).textContent()
console.log(bookname);
})