const { expect } = require("@playwright/test");

class OrderConfirmation {
    constructor(page) {
        this.page = page;

        this.confirmationMessage =
            page.locator(".complete-header");
    }

    async verifyOrderConfirmation() {

        await expect(this.confirmationMessage)
            .toHaveText("Thank you for your order!");

        console.log("The order is placed successfully");
    }
}

module.exports =  OrderConfirmation;