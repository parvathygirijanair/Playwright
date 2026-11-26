const { Given } = require('@cucumber/cucumber');
const { createRegisteredTestAccount } = require('../support/testAccount');

Given('I navigate to Demo Web Shop', async function () {
    await this.registrationPage.navigate();
});

Given('I have a registered test account', async function () {
    this.testAccount = await createRegisteredTestAccount(this);
    await this.loginPage.logout();
});

Given('I am logged in to Demo Web Shop', async function () {
    this.testAccount = await createRegisteredTestAccount(this);
    await this.loginPage.logout();
    await this.loginPage.login(
        this.testAccount.Email,
        this.testAccount.Password
    );
});
