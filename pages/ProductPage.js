exports.ProductPage=class ProductPage{

    constructor(page){
        this.page=page
        this.buybutton="//input[@id='buy-now-button']"
    }

    async clickBuyButton(){
        await this.page.locator(this.buybutton).click()
    }
}