
    const { expect } = require('@playwright/test');

    class GuestCheckoutPage {
        constructor(page) {
            this.page = page;
            // Guest Checkout
            this.guestCheckout = page.locator('input[value="guest"]');
            this.continueButton = page.locator('#accountFrm button');
            // Customer Details
            this.firstName = page.locator('#guestFrm_firstname');
            this.lastName = page.locator('#guestFrm_lastname');
            this.email = page.locator('#guestFrm_email');
            this.telephone = page.locator('#guestFrm_telephone');
            // Billing Address
            this.address = page.locator('#guestFrm_address_1');
            this.city = page.locator('#guestFrm_city');
            this.postcode = page.locator('#guestFrm_postcode');
            this.country = page.locator('#guestFrm_country_id');
            this.region = page.locator('#guestFrm_zone_id');
            this.billingContinueButton = this.page.locator('#guestFrm button');
        }

        // Select Guest Checkout
        async selectGuestCheckout() {
            await this.guestCheckout.check();
            await this.continueButton.click();
        }

        // Enter Customer Details
        async enterCustomerDetails() {
            await this.firstName.fill('Test');
            await this.lastName.fill('User');
            await this.email.fill('testuser@example.com');
            await this.telephone.fill('9876543210');
        }
        // Enter Billing Address
        async enterBillingAddress() {
            await this.address.fill('123 Test Street');
            await this.city.fill('Chennai');
            await this.postcode.fill('600001');
            await this.country.selectOption({ label: 'India' });
            await this.region.selectOption({ label: 'Tamil Nadu' });
        }
        async continueBillingAddress() {
            await this.billingContinueButton.click();
        }

    }

    module.exports = GuestCheckoutPage;
