import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('admin@email.com');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('admin@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('heading', { name: 'Learn Automation Courses' })).toBeVisible();
  await page.getByRole('button', { name: 'Add to Cart right arrow' }).nth(1).click();
  await page.getByRole('button', { name: 'Cart 1' }).click();
  await page.getByRole('button', { name: 'Remove from Cart right arrow' }).click();
  await page.getByText('₹').click();
});


test.skip('test signup', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await page.getByRole('link', { name: 'New user? Signup' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('paru');
  await page.getByRole('textbox', { name: 'Email' }).fill('paru@email.com');
  await page.getByRole('textbox', { name: 'Password must be atleast 6' }).fill('paru@12');
  await page.getByRole('checkbox', { name: 'PlaywrightTests' }).check();
  await page.locator('#gender2').check();
  await page.locator('#state').selectOption('Kerala');
  await page.locator('#hobbies').selectOption('Singing');
  await page.getByRole('button', { name: 'Sign up' }).click();
});


test('test rahulshetty site', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio').check();
  await page.getByRole('textbox', { name: 'Type to Select Countries' }).fill('india');
await page.getByText('India', { exact: true }).click();
  await page.locator('#dropdown-class-example').selectOption('option3');
  await page.locator('#checkBoxOption3').check();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('hi');
  await page.getByRole('textbox', { name: 'Enter Your Name' }).press('Enter');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Alert' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('hello');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect(page.getByRole('cell', { name: 'Ivory' })).toBeVisible();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Open Window' }).click();
  const page1 = await page1Promise;
  await expect(page1.locator('h1')).toContainText('Invalid SSL certificate');
  await page1.locator('span').nth(2).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Open Tab' }).click();
  const page2 = await page2Promise;
  await page2.locator('span').nth(3).click();
  await page.getByRole('button', { name: 'Home' }).click();
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.getByRole('button', { name: 'Practice' }).click();
  await page.getByRole('cell', { name: 'WebServices / REST API' }).click();
  await page.getByText('Mouse Hover Example').click();
  await page.getByText('iFrame Example').click();
  await page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('link', { name: '30% OFF on Silver and' }).click();
  await page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('link').nth(1).click();
});