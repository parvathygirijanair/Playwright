
const { expect } = require("@playwright/test");

class HomePage {
    constructor(page) {
        this.page = page;
        // Locators
        this.searchIcon = page.getByPlaceholder('Search Keywords');
        this.item = page.locator('.bgnone');
        this.price = page.locator('.total-price');
        this.cartIcon = page.locator('.cart');
    }

    // Navigate to Home Page
    async goToHomePage() {
        await this.page.goto('https://automationteststore.com/');
        await expect(this.page).toHaveTitle(
            'A place to practice your automation skills!'
        );
    }

    // Search for a product
    async selectItem(itemname) {
        await this.searchIcon.fill(itemname);
        await this.searchIcon.press('Enter');
    }
}

module.exports = HomePage;
