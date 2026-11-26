const{test,expect}= require('@playwright/test');
test('Verify Single input fields', async({page})=>{
   await page.goto('https://selenium.qabible.in/simple-form-demo.php');
   const singleInputField=await page.locator('#single-input-field');
   await singleInputField.fill('Hello All');
   await page.getByRole('button',{name:'Show Message'}).click();
   await expect (page.locator('#message-one')).toContainText('Hello All');
})
test('Handleing Radio Button',async({page})=>{
    await page.goto('https://selenium.qabible.in/radio-button-demo.php');
    await page.getByRole('radio').click();//check()
    await page.locator('#button-one').click();
    await expect (page.getByRole('radio')).toBeChecked();

})
test('Handling check box',async({page})=>{
    await page.goto('https://selenium.qabible.in/check-box-demo.php');
const checkbox=await page.getByRole('checkbox');//Multiple Checkbox Demo
await checkbox.nth(1).check();
await checkbox.nth(2).check();
await checkbox.nth(3).check();
await checkbox.nth(4).check();

await  expect(checkbox.nth(1)).toBeChecked();
await expect(checkbox.nth(2)).toBeChecked();
await expect(checkbox.nth(3)).toBeChecked();
await expect(checkbox.nth(4)).toBeChecked();
})