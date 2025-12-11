
exports.TodaysDealPage=class TodaysDealPage{

    constructor(page){
        this.page=page;
        this.productlist="//div[@class='dcl-product-image-container']/..";
        this.url="https://www.amazon.in/deals?ref_=nav_cs_gb"
    }


    async clickFirstSelecteditem(){
        await this.page.locator(this.productlist).first().click()
    }
}