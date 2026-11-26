const { When, Then } = require('@cucumber/cucumber');
const { readExcel } = require('../support/excelUtils');
const { registerTestAccount } = require('../support/testAccount');

When('I register users using Excel data', async function () {
    const users = await readExcel('Registration');

    if (users.length === 0) {
        throw new Error('Registration sheet must contain at least one user');
    }

    for (let index = 0; index < users.length; index += 1) {
        const account = await registerTestAccount(this, users[index]);
        console.log('Registration successful:', account.Email);

        if (index < users.length - 1) {
            await this.loginPage.logout();
        }
    }

    this.registrationCompleted = true;
});

Then('I should see successful registration message', async function () {
    if (!this.registrationCompleted) {
        throw new Error('Registration was not completed');
    }

    await this.registrationPage.verifySuccess();
});
