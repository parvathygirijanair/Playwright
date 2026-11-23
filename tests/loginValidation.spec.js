const{test,expect}=require('@playwright/test');
test('Empty Login Attempt',async({page})=>{
await page.goto('https://freelance-learn-automation.vercel.app/login');
await page.getByRole('button',{name:'Sign in'}).click();
await expect(page.locator('.errorMessage')).toContainText('Email and Password is required');
})
test('Login with Email Only',async({page})=>{
await page.goto('https://freelance-learn-automation.vercel.app/login');
await page.locator('#email1').fill('sibi@gmail.com');
await page.getByRole('button',{name:'Sign in'}).click();
await expect(page.locator('.errorMessage')).toContainText('Password is required');
})

test('Login with Password Only',async({page})=>{
await page.goto('https://freelance-learn-automation.vercel.app/login');
await page.locator('#password1').fill('sibi@gmail.com');
await page.getByRole('button',{name:'Sign in'}).click();
await expect(page.locator('.errorMessage')).toContainText('Email is required');
})

test('Login with Invalid Credentials',async({page})=>{
await page.goto('https://freelance-learn-automation.vercel.app/login');
await page.locator('#email1').fill('sibi@gmail.com');
await page.locator('#password1').fill('sibi@gmail.com');
await page.getByRole('button',{name:'Sign in'}).click();
await expect(page.locator('.errorMessage')).toContainText("USER Email Doesn't Exist");
})