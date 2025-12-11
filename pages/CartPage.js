exports.CartPage=class CartPage{

    constructor(page){
     
        this.page=page;
        this.productlist="//tbody[@id='tbodyid']//tr//td[2]"
    }

    async searchproductincart(searchproductname){
        
        const productnamelist=await this.page.$$(this.productlist)
        for(const product of productnamelist){
          const productname=await product.textContent()
          if(searchproductname==productname){
            return true;
           break;
          }

        }
    }
}