const {test,expect}=require('@playwright/test');



test('Verify URL contains signup', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/signup');
  const currentURL = page.url();
  console.log('Current URL:', currentURL);
  expect(currentURL).toContain('signup');
});

test('Page Title', async({page})=>{
await page.goto('https://freelance-learn-automation.vercel.app');
const currentTitle=await page.title();
expect(currentTitle).toContain('Automation');
})
test('Page Title Negative Scenario', async({page})=>{
await page.goto('https://freelance-learn-automation.vercel.app');
const currentTitle=await page.title();
expect(currentTitle).toContain('Classes');
})