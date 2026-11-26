const { expect } = require('@playwright/test');

class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.registerLink = page.locator('.ico-register');
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');
        this.registerButton = page.locator('#register-button');
        this.successMessage = page.locator('.result');
    }

    async navigate() {
        await this.page.goto('https://demowebshop.tricentis.com/', {
            waitUntil: 'domcontentloaded',
        });
    }

    async clickRegister() {
        await this.registerLink.click();
    }

    async selectGender(gender) {
        const normalizedGender = String(gender ?? '').trim().toLowerCase();
        if (!['female', 'male'].includes(normalizedGender)) {
            throw new Error(`Unsupported gender "${gender}". Expected Female or Male.`);
        }
        await this.page.locator(`#gender-${normalizedGender}`).check();
    }

    async enterDetails(user) {
        await this.firstName.fill(user.FirstName);
        await this.lastName.fill(user.LastName);
        await this.email.fill(user.Email);
        await this.password.fill(user.Password);
        await this.confirmPassword.fill(user.Password);
    }

    async submitRegistration() {
        await this.registerButton.click();
    }

    async verifySuccess() {
        await expect(this.successMessage).toContainText('Your registration completed');
    }
}

module.exports = RegistrationPage;
