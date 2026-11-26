const {test,expect}= require('@playwright/test');
import { readCSV } from '../Utils/csvReader';
import path from 'path';
// const testData= require('../TestData/testData');

const csvData= readCSV(path.join(__dirname,'../../TestDataCSV/formCSVData.csv'))
console.log(path.join(__dirname, '../TestDataCSV/formCSVData.csv'));
csvData.forEach((data)=>{
    test(`Home validation ${data.firstName}`,async({page})=>{
           await page.goto('https://automationpracticehubapp.netlify.app');
           await page.getByPlaceholder('Admin').fill('Admin');
                      await page.getByLabel('Password',{exact:true}).fill('Hello@123');
await page.getByRole('button',{name:'Sign In'}).click();
await page.getByPlaceholder('Enter your first name').fill(data.firstName);
    await page.getByPlaceholder('Enter your last name').fill(data.lastName);
    await page.getByPlaceholder('Enter your email').fill(data.email);
    await page.getByPlaceholder('Enter your password').fill(data.password);
    await page.getByPlaceholder('Enter your feedback here...').fill(data.feedback);
    await page.getByRole('button',{name:'Submit'}).first().click();

    })
})
// const csvData = readCSV(path.join(__dirname, '../../testDataCsv/formcsvData.csv'));
// ../TestDataCSV\formCSVData.csv