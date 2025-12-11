const {test,expect}=require('@playwright/test')


import { AmazonHomePage } from '../../pages/AmazonHomePage'
import { TodaysDealPage } from '../../pages/TodaysDealPage'
import { ProductPage } from '../../pages/ProductPage'

test('Amazon',async({page})=>{

 const homepage=new AmazonHomePage(page)
 const todayspage=new TodaysDealPage(page)
 const productpage=new ProductPage(page)

 console.log("Go to amazon home page..")
 await homepage.goToUrl()
 await expect(page).toHaveURL(homepage.url)

 console.log("Click on todays click option..")
 await homepage.clickOnTodaysDeal()
 
 console.log("Go to todays deal page..")
 await expect(page).toHaveURL(todayspage.url)

 console.log("Click on the first element..")
 await todayspage.clickFirstSelecteditem()

 await page.waitForTimeout(3000)

 console.log("Go to Product page buy..")
 await productpage.clickBuyButton()

 await page.waitForTimeout(3000)
})