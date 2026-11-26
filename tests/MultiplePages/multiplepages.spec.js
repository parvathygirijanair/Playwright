const {test,expect, chromium}=require('@playwright/test');
test.skip('Test Multiple Pages',async({page})=>{
    const browse= await chromium.launch({headless:false})
    const context=await browse.newContext();
    const page1=await context.newPage();
        const page2=await context.newPage();
        const allPages = context.pages();
    console.log("No Of Pages created:", allPages.length);
await page1.goto("https://www.demoblaze.com/");
await expect (page1).toHaveTitle("STORE");
await page2.goto("https://formy-project.herokuapp.com/");
await expect (page2).toHaveTitle("Formy");
})
test('Handle Multiple Pages',async({page})=>{
    const browse= await chromium.launch({headless:false})
    const context=await browse.newContext();
    const page1=await context.newPage();
await page1.goto("https://opensource-demo.orangehrmlive.com/");
await expect (page1).toHaveTitle("OrangeHRM");
const pagePromise=context.waitForEvent('page');
await page1.locator('a[href="http://www.orangehrm.com"]').click();
const newPage=await pagePromise;
await expect (newPage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM");
await page1.waitForTimeout(3000);
await newPage.waitForTimeout(3000);
})