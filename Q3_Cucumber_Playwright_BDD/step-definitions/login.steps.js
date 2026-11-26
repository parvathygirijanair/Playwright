const { When, Then } = require('@cucumber/cucumber');
const { readExcel } = require('../support/excelUtils');

When('I click on Login link', async function () {
    await this.loginPage.clickLogin();
});

When('I enter the registered test account credentials', async function () {
    const loginData = await readExcel('Login');
    const loginUser = loginData[0];

    if (!loginUser || !loginUser.Password || !this.testAccount) {
        throw new Error('A registered test account and Login sheet password are required');
    }

    await this.loginPage.enterCredentials(
        this.testAccount.Email,
        loginUser.Password
    );
});

When('I click on Login button', async function () {
    await this.loginPage.clickLoginButton();
});

Then('I should see successful login', async function () {
    await this.loginPage.verifyLogin();
});
