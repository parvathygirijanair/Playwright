
class Cart{
constructor(page){
    this.page=page;
    this.carticon= page.locator('.shopping_cart_link');
    this.cart=page.locator('cart.item .inventory_item_name'); 
    this.checkoutButton=page.locator('#checkout')
}
async getChecked(){
    await this.carticon.click();
}
async checkOut(){
    await this.checkoutButton.click();
}
}
module.exports=Cart;