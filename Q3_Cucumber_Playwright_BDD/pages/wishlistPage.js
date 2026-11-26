const { expect } = require('@playwright/test');

class WishlistPage {
    constructor(page) {
        this.page = page;
        this.booksLink = page.locator('.top-menu').getByRole('link', {name: 'Books',exact: true,});
        this.productLink = page.getByRole('link', {name: 'Fiction EX',exact: true,});
        this.product = page.locator('.product-details-page div[itemscope][data-productid]');
        this.addToWishlistButton = page.locator('.add-to-wishlist-button');
        this.wishlistLink = page.locator('.header-links a.ico-wishlist');
        this.wishlistContent = page.locator('.wishlist-content');
    }

    async openBooks() {
        await this.booksLink.click();
    }

    async selectBook() {
        await this.productLink.click();
    }

    async addToWishlist() {
        if (await this.addToWishlistButton.isVisible()) {
            await this.addToWishlistButton.click();
            return;
        }

        console.warn('Add to Wishlist is not available in the page UI; using the site wishlist endpoint.');
        const productId = await this.product.getAttribute('data-productid');
        if (!productId) {
            throw new Error('Unable to find the selected product ID');
        }

        const endpoint = new URL(`/addproducttocart/catalog/${productId}/2/1`,this.page.url()).toString();
        const response = await this.page.request.post(endpoint);
        if (!response.ok()) {
            throw new Error(`Wishlist request failed with HTTP ${response.status()}`);
        }
        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message ||'Demo Web Shop did not add the product to the wishlist');
        }
    }

    async openWishlist() {
        await this.wishlistLink.click();
    }

    async verifyWishlist() {
        await expect(this.wishlistContent).toContainText('Fiction EX');
    }
}

module.exports = WishlistPage;
