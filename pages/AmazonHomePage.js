const { expect } = require("allure-playwright");

exports.AmazonHomePage=class AmazonHomePage{



    constructor(page){
     this.page=page;
     this.todaydealelement="//a[@href='/deals?ref_=nav_cs_gb']"
     this.url="https://www.amazon.in/ref=nav_logo";
    }

    async goToUrl(){
    await this.page.goto(this.url)
    }

    async clickOnTodaysDeal(){
        await this.page.locator(this.todaydealelement).click()
    }
}