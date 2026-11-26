
import { test, expect} from '@playwright/test';
// const { defineConfig, devices, expect, chromium } = require("@playwright/test");
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(15000);
  //await expect(page).toHaveTitle(/Playwright/);
});