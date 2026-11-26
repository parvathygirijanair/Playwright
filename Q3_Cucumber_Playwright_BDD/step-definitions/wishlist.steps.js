const { When, Then } = require('@cucumber/cucumber');

When('I navigate to Books category', async function () {
    await this.wishlistPage.openBooks();
});

When('I select a book', async function () {
    await this.wishlistPage.selectBook();
});

When('I add the book to wishlist', async function () {
    await this.wishlistPage.addToWishlist();
});

When('I navigate to Wishlist page', async function () {
    await this.wishlistPage.openWishlist();
});

Then('I should see the selected book in wishlist', async function () {
    await this.wishlistPage.verifyWishlist();
});
