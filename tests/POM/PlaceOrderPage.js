exports.PlaceOrderPage = class PlaceOrderPage {

    constructor(page) {
        this.page = page;
        this.placeOrderButton = 'button[data-target="#orderModal"]';
        this.nameInput = '#name';
        this.countryInput = '#country';
        this.cityInput = '#city';
        this.creditCardInput = '#card';
        this.monthInput = '#month';
        this.yearInput = '#year';
        this.purchaseButton = 'button[onclick="purchaseOrder()"]';
        this.successMessage = '.sweet-alert.showSweetAlert.visible';
        this.okButton = 'button.confirm.btn.btn-lg.btn-primary';
    }

    async clickOnPlaceOrder() {
        await this.page.locator(this.placeOrderButton).click();
    }

    async fillCustomerDetails(name, country, city, creditCard, month, year) {
        await this.page.locator(this.nameInput).fill(name);
        await this.page.locator(this.countryInput).fill(country);
        await this.page.locator(this.cityInput).fill(city);
        await this.page.locator(this.creditCardInput).fill(creditCard);
        await this.page.locator(this.monthInput).fill(month);
        await this.page.locator(this.yearInput).fill(year);
    }

    async clickOnPurchase() {
        await this.page.locator(this.purchaseButton).click();
    }
}
