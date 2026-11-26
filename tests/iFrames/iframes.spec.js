const { test, expect } = require('@playwright/test');
test('Single File Upload', async ({ page }) => {
 await page.goto(' https://ui.vision/demo/webtest/frames/');
const allFrame=page.frames();
console.log('Number of frames', allFrame.length);
const framme1=page.frameLocator('frame[src="frame_1.html"]');
await framme1.locator('[name="mytext1"]').fill('Hello');
//mytext2
const framme2=page.frameLocator('frame[src="frame_2.html"]');

await framme2.locator('[name="mytext2"]').fill('Everyone');

});