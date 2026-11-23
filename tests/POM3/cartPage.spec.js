
const { expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.cartIcon = page.locator('.cart');
        this.productName = page.getByRole('cell', { name: 'Benefit Bella Bamba' })
        this.productPrice = page.locator('.table tbody tr td:nth-child(4)');
        this.quantity = page.locator('input[name*="quantity"]');
        this.updateButton = page.locator('button[title="Update"]');
        this.checkoutButton = page.locator('#cart_checkout1');
    }

    // Navigate to Cart
    async goToCart() {
        await this.cartIcon.click();
    }

    // Verify product details
    async verifyProduct(productName) {
        await expect(this.productName).toContainText(productName);
    }

    // Update quantity
    async updateQuantity(qty) {
        await this.quantity.fill(String(qty));
        await this.updateButton.click();
    }

    // Proceed to checkout
    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = CartPage;
