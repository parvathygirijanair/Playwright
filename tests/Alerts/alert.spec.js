const { test, expect } = require('@playwright/test');
test.skip('Simple Alert', async ({ page }) => {
 await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
//  page.on("dialog",async (dia)=>{
     page.on("dialog", (dia)=>{

    expect(dia.message()).toBe('I am a JS Alert')
    //   expect(dia.message()).toBe('I am a JS Alert');
    //     await dia.accept();
 }
)
 await page.locator('button[onclick="jsAlert()"]').click();
 
await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

});


test.skip('confirm alert test', async ({ page }) => {
 await page.goto(' https://the-internet.herokuapp.com/javascript_alerts');
//  page.on("dialog",async (dia)=>{
     page.on("dialog", (dia)=>{

    expect(dia.message()).toBe('I am a JS Confirm')
    //   expect(dia.message()).toBe('I am a JS Alert');
    dia.accept();
 }
)
 await page.locator('button[onclick="jsConfirm()"]').click();
 
await expect(page.locator('#result')).toHaveText('You clicked: Ok');

});
test('Prompt Alert', async ({ page }) => {
 await page.goto(' https://the-internet.herokuapp.com/javascript_alerts');
//  page.on("dialog",async (dia)=>{
     page.on("dialog", (dia)=>{

    expect(dia.message()).toBe('I am a JS prompt')
    //   expect(dia.message()).toBe('I am a JS Alert');
    //     await dia.accept();
    dia.accept("Hello All");
 }
)
 await page.locator('button[onclick="jsPrompt()"]').click();
 
await expect(page.locator('#result')).toHaveText('Hello All');

});