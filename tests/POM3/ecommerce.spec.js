
const { test, expect } = require('@playwright/test');
const HomePage = require('./homePage.spec');
const CartPage = require('./cartPage.spec');
const GuestCheckoutPage = require('./guestCheckOut.spec');
const OrderPage = require('./order.spec');
test('E-commerce shopping workflow', async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const orderPage = new OrderPage(page);
    const guestCheckoutPage = new GuestCheckoutPage(page);
    await homePage.goToHomePage();
    await homePage.selectItem('Benefit Bella Bamba');
    await cartPage.goToCart();
    // Step 5: Verify Product and Update Quantity
    await cartPage.verifyProduct('Benefit Bella Bamba');
    await cartPage.updateQuantity(2);

    // Step 6: Proceed to Checkout
    await cartPage.proceedToCheckout();

    // Step 7: Select Guest Checkout
    await guestCheckoutPage.selectGuestCheckout();

    // Step 8: Enter Customer Details
    await guestCheckoutPage.enterCustomerDetails();

    // Step 9: Enter Billing Address
    await guestCheckoutPage.enterBillingAddress();
    await guestCheckoutPage.continueBillingAddress();
    await orderPage.verifyOrderDetails();
    await orderPage.acceptTerms();
    await orderPage.confirmOrder();
    // After confirming the order
    await orderPage.verifyOrderConfirmation();
});
