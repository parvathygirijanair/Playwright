const { test, expect } = require('@playwright/test');
const Login = require('./login.spec');
const DashBoard=require('./dashboard.spec');
const Cart=require('./cart.spec');
const ShippingDEtails=require('./shippingDetails.spec');
const Summary=require('./summary.spec');
const OrderConfirmation=require('./orderconfirmation.spec');


test('Sauce demo POM testing', async ({ page }) => {
    const username = "standard_user";
    const password = "secret_sauce";
    const productname = 'Sauce Labs Backpack';
    //login
    const login = new Login(page);
    await login.goToNavigation();
    await login.validLogin(username, password);
//dashboard
const dashboard=new DashBoard(page);
await dashboard.printProducts();
await dashboard.selectProduct(productname);
//cart
const cart=new Cart(page);
await cart.getChecked();
await cart.checkOut();
//shipping
const firstname='PARVATHY';
const lastname='NAIR';
const postalcode='8798';
const shipping=new ShippingDEtails(page);
await shipping.shipment(firstname,lastname,postalcode);
await shipping.submitShipping();
//summary

const summary=new Summary(page);
await summary.summaryDetails();
await summary.clickFinish();
//orderconf

const orderconf=new OrderConfirmation(page);
await orderconf.verifyOrderConfirmation();

})