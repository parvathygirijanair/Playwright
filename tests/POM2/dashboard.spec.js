class DashBoard {
    constructor(page) {
        this.page = page;
        this.products = page.locator('.inventory_item');
        this.productnames = page.locator('.inventory_item_name');

    }
    async printProducts(){
        await this.productnames.first().waitFor();
        const names= await this.productnames.allTextContents();
        const count= await this.productnames.count();
        console.log('Productlisted',names,count);
    }
    async selectProduct(productName){
        const item= this.products.filter({hasText:productName});
        await item.getByRole('button',{name:'Add to cart'}).click();
    }
}
module.exports=DashBoard;