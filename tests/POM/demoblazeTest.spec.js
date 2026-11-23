import {test,expect} from '@playwright/test';
import { LoginPage } from './loginPage';
import { HomePage } from './HomePage';
import { CartPage } from './CartPage'; 
import { PlaceOrderPage } from './PlaceOrderPage';
test("Demoblaze test in POM",async({page})=>{
    const login= new LoginPage(page);
    await login.gotoLoginPage();
    await login.loginForm('sibivarughese', 'test@123');
       //Home
const home = new HomePage(page);
await home.addProductToCart("Nexus 6");
await page.waitForTimeout(3000)
await home.gotoCart();
//Cart
const cart = new CartPage(page);
await page.waitForTimeout(3000);
const status = await cart.checkProductInCart('Nexus 6');


// Place Order / Checkout
    const order = new PlaceOrderPage(page);
    await order.clickOnPlaceOrder();
    await order.fillCustomerDetails('Sibi Varughese', 'India', 'Kerala', '1234567890123456', '12', '2026');
    await order.clickOnPurchase();
})
