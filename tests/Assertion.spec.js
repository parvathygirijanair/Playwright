const{test,expect}=require('@playwright/test');
test.skip('Hard Assert',async({page})=>{
      await page.goto('https://www.saucedemo.com/v1/index.html');
await expect(page).toHaveTitle("Swag Labs");
await expect(page).toHaveURL("https://www.saucedemo.com/");
})
test.only('Soft Assert',async({page})=>{
      await page.goto('https://www.saucedemo.com/v1/index.html');
await expect.soft(page).toHaveTitle("Swag Labs12");
await expect.soft(page).toHaveURL("https://www.saucedemo.com/");
})