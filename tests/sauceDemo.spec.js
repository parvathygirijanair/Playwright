// const{test,expect}=require('@playwright/test');
// test('Demo of Sauce Lab',async({page})=>{
//    await page.goto('https://www.saucedemo.com/');
//    await page.locator('input#user-name').fill('standard_user');
//       await page.locator('input[id="password"]').fill('secretsauce');//input[@id='password']
//    await page.locator('input#login-button').click();/////input[@id='login-button']
//    await page.pause();
// })

const {test,expect}=require('@playwright/test')
test ('Saucedemo test', async({page}) => {
     
    await page.goto('https://www.saucedemo.com/')
    await page.locator('input#user-name').fill('standarduser')
    await page.locator('input#password').fill('secret_sauce')
    await page.locator('input[type="submit"]').click()
    console.log(await page.locator("h3[role='alert']").textContent('Epic sadface: Username and password do not match any user in this service'))
//  await expect(page).locator("h3[role='alert']").toContainText('Epic sadface');
 await expect(page.locator("h3[role='alert']")).toContainText('Username and password');
    await page.pause()
})