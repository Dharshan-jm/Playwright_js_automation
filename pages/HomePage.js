exports.HomePage=class HomePage{

    constructor(page){
        this.page=page;
        this.productlist="//div//h4//a[@class='hrefch']";
        this.addtocart="//a[text()='Add to cart']";
        this.cart="id=cartur";
    }


    async addproducttocart(productname){
    
    const product=await this.page.$$(this.productlist);

    for(let prod of product){
       if (productname==await prod.textContent()) {
        prod.click()
        break;
       }
    }

    await this.page.on('dialog',async dialog=>{
    if(dialog.message().includes('Product added.')){
        await dialog.accept()
    }
    })

    await this.page.locator(this.addtocart).click()
    }

    async gotocart(){
        await this.page.locator(this.cart).click()
    }
}