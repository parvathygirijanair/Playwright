
const { expect } = require('@playwright/test');

class OrderPage {
    constructor(page) {
        this.page = page;
        this.productName = page.locator('a.checkout_heading');
        this.quantity = this.page.locator('td').filter({ hasText: /^2$/ }).nth(1);
        this.orderTotal = this.page.locator('span.totalamout').filter({ hasText: '$58.00' });
        // Order Confirmation
        this.confirmOrderButton = page.locator('#checkout_btn');
        this.termsCheckbox = page.locator('#agree');
        // Confirmation Message
        this.confirmationMessage = page.locator('p').filter({
            hasText: 'Your order has been successfully processed!'
        });
    }

    // Verify Order Details
    async verifyOrderDetails() {
        await expect(this.productName).toContainText('Benefit Bella Bamba');
        await expect(this.quantity).toHaveText('2');
        await expect(this.orderTotal).toHaveText('$58.00');
    }
    // Accept Terms and Conditions
    async acceptTerms() {
        if (await this.termsCheckbox.isVisible()) {
            await this.termsCheckbox.check();
        }
    }
    // Confirm Order
    async confirmOrder() {
        await this.confirmOrderButton.click();
    }
    // Verify Order Confirmation
    async verifyOrderConfirmation() {
        await expect(this.confirmationMessage).toHaveText('Your order has been successfully processed!');
    }
}

module.exports = OrderPage;
