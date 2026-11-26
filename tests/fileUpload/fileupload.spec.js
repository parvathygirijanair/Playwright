const { test, expect } = require('@playwright/test');
test.skip('Single File Upload', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles("tests\\uploadFiles\\sample_640×426.jpg");
 await page.waitForTimeout(5000)
 ////tagname[@attribute='value']
 await expect(page.locator('//ul[@id="fileList"]')).toHaveText('sample_640×426.jpg')
    await page.close()

});
test('Multiple File Upload', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles(["tests\\uploadFiles\\sample_640×426.jpg","tests\\uploadFiles\\sample_1280×853.jpg"]);
 await page.waitForTimeout(5000);
 await expect(page.locator('//ul[@id="fileList"]/li[1]')).toHaveText('sample_640×426.jpg');
  await expect(page.locator('//ul[@id="fileList"]/li[2]')).toHaveText('sample_1280×853.jpg');
await page.locator('#filesToUpload').setInputFiles([]);
//ul[id='fileList'] li
await expect( page.locator('//ul[@id="fileList"]/li')).toHaveText('No Files Selected');

// await expect( page.locator("//li[normalize-space()='No Files Selected']")).toHaveText('No Files Selected');
    await page.close()

});