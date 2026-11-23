const {test,expect}= require('@playwright/test');
test('Bank login Test',async({page})=>{
    await page.goto("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
await page.getByRole("button",{name:"Bank Manager Login"}).click();
await expect(page).toHaveURL(/manager/);
await page.getByRole("button",{name:"Add Customer"}).click();
await page.getByPlaceholder("First Name").fill('John');
await page.getByPlaceholder("Last Name").fill('Kennedy');
await page.getByPlaceholder("Post Code").fill('682001');
page.once('dialog',async dialog=>{
    console.log(dialog.message());
   expect(dialog.message()).toContain("Customer added successfully with customer id")
    await dialog.accept();
})
await page.getByRole("button",{name:"Add Customer"}).nth(1).click();
await page.getByRole("button",{name:"Open Account"}).click();
await page.locator('#userSelect').selectOption({label:"John Kennedy"});
await page.locator('#currency').selectOption({value:"Dollar"});

page.once('dialog',async dialog=>{
    console.log(dialog.message());
   expect(dialog.message()).toContain("Account created successfully with account Number")
    await dialog.accept();
})
await page.getByRole("button",{name:"Process"}).click();
await page.getByRole("button",{name:"Customers"}).click();
await page.getByPlaceholder("Search Customer").fill('Kennedy');
const customerRow = page.locator('tbody tr').filter({
    hasText: 'Kennedy'
});
await expect(customerRow).toHaveCount(1);
console.log(await customerRow.innerText());
await customerRow.getByRole("button", { name: "Delete" }).click();
await expect(customerRow).toHaveCount(0);
console.log("Customer Kennedy deleted successfully");
})