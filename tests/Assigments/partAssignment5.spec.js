// const { test, expect } = require('@playwright/test');
// const empData = require('../../testData1.json')
// empData.forEach((data) => {
//     test('Test JSON Data', async ({ page }) => {
//         await page.goto('https://automationteststore.com/index.php?rt=account/create');
//         await page.locator('#AccountFrm_firstname').fill(data.firstName);
//         await page.locator('#AccountFrm_lastname').fill(data.lastName);
//         await page.locator('#AccountFrm_email').fill(data.email);
//         await page.locator('#AccountFrm_telephone').fill(data.telephone);
//         await page.locator('input[name="fax"]').fill(data.fax);
//         await page.locator('input[name="company"]').fill(data.company);
//         // Verify entered values
//         await expect(page.locator('#AccountFrm_firstname')).toHaveValue(data.firstName);
//         await expect(page.locator('#AccountFrm_lastname')).toHaveValue(data.lastName);
//         await expect(page.locator('#AccountFrm_email')).toHaveValue(data.email);
//         await expect(page.locator('#AccountFrm_telephone')).toHaveValue(data.telephone);
//         await expect(page.locator('input[name="fax"]')).toHaveValue(data.fax);
//         await expect(page.locator('input[name="company"]')).toHaveValue(data.company);
//     })
// })


//------------------------------------
// const { test, expect } = require('@playwright/test');
// test.describe('QA Brains Login Module', () => {
//     test.beforeEach(async ({ page }) => {
//         await page.goto('https://practice.qabrains.com/ecommerce/login');
//     })
//     test('@smoke @login with valid credentials', async ({ page }) => {
//         await page.fill('#email', 'test@qabrains.com');
//         await page.fill('#password', 'Password123');
//         await page.getByRole('button', { name: 'Login' }).click();
//         await expect(page.locator('body')).toContainText('Products')
//     })
//     test('(@regression @login invalid credentials', async ({ page }) => {
//         await page.fill('#email', 'test@qabrains.com');
//         await page.fill('#password', 'Password023');
//         await page.getByRole('button', { name: 'Login' }).click();
//         await expect(page.locator('body')).toContainText('Password is incorrect.')

//     })
//     test('(@sanity @login empty credentials', async ({ page }) => {
//         await page.fill('#password', 'Password123');
//         await page.getByRole('button', { name: 'Login' }).click();
//         await expect(page.locator('body')).toContainText('Email is a required field')

//     })

// })
//--------------------------------------------
const exceljs= require('exceljs');
async function readExcel(){
const workBook=new exceljs.Workbook();
await workBook.xlsx.readFile('C:/Users/ashgo/Downloads/Obsqura Testing.xlsx');
const workSheet=workBook.getWorksheet('Sheet1');
   workSheet.eachRow((row, rowNumber) => {
        console.log(`Row Number: ${rowNumber}`);

        row.eachCell((cell, colNumber) => {
            console.log(`Column ${colNumber}: ${cell.value}`);
        });
    });
}
readExcel();