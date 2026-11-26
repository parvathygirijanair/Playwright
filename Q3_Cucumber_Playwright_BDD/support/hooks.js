const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

const RegistrationPage = require('../pages/registrationPage');
const LoginPage = require('../pages/loginPage');
const WishlistPage = require('../pages/wishlistPage');
const EmailFriendPage = require('../pages/emailFriendPage');

setDefaultTimeout(60_000);

Before(async function () {
    this.browser = await chromium.launch({
        headless: process.env.HEADLESS !== 'false',
    });

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.registrationPage = new RegistrationPage(this.page);
    this.loginPage = new LoginPage(this.page);
    this.wishlistPage = new WishlistPage(this.page);
    this.emailFriendPage = new EmailFriendPage(this.page);
});

After(async function (scenario) {
    try {
        if (
            scenario.result.status === 'FAILED' &&
            this.page &&
            !this.page.isClosed()
        ) {
            try {
                const screenshot = await this.page.screenshot({
                    timeout: 10_000,
                });
                await this.attach(screenshot, 'image/png');
            } catch (error) {
                console.error(
                    'Failed to capture or attach the failure screenshot:',
                    error
                );
            }
        }
    } finally {
        if (this.browser) {
            await this.browser.close();
        }
    }
});
