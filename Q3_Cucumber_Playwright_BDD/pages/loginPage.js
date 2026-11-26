const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginLink = page.locator('.ico-login');
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.loginButton = page.locator('.login-button');
        this.logoutLink = page.locator('.ico-logout');
    }

    async clickLogin() {
        await this.loginLink.click();
    }

    async enterCredentials(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(email, password) {
        await this.clickLogin();
        await this.enterCredentials(email, password);
        await this.clickLoginButton();
        await this.verifyLogin();
    }

    async verifyLogin() {
        await expect(this.logoutLink).toBeVisible();
    }

    async logout() {
        await this.logoutLink.click();
    }
}

module.exports = LoginPage;
