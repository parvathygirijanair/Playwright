const {test,expect}= require('@playwright/test')
class Summary{
     constructor(page){
this.page=page;
this.subtotal=page.locator('.summary_subtotal_label');
this.finishbutton=page.locator('#finish');
    }
   async summaryDetails(){
    const itemtotal=await this.subtotal.textContent();
    console.log("itemtotal",itemtotal);
    expect(itemtotal).toContain('Item total: $');
   }
   async clickFinish(){
    await this.finishbutton.click();
   }
}
module.exports=Summary;