class ShippingDEtails{
    constructor(page){
        this.page=page;
        this.firstname=page.locator('#first-name');
                this.postalcode=page.locator('#postal-code')
        this.lastname=page.locator('#last-name');
                this.continueButton=page.locator('#continue')


    }
    async shipment(firstname,lastname,postalcode){
        await this.firstname.fill(firstname)
                await this.lastname.fill(lastname)
                        await this.postalcode.fill(postalcode)

    }
    async submitShipping(){
        await this.continueButton.click();
    }
}
module.exports=ShippingDEtails;