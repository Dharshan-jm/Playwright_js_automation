let {test,expect}= require('@playwright/test')

//To Locate multiple elements 
test('LocatorMultipleelement',async({page})=>{
   
    await page.goto('https://demoblaze.com/index.html')
    await page.click('id=login2')
    await page.fill('id=loginusername','pavanol')
    await page.fill('id=loginpassword','test@123')
    await page.click("//button[text()='Log in']")
   
  // let links=await page.$$('a')  // 'a' is a tag name

  // list of the product name
  let  links= await page.$$("//div[@id='tbodyid']//div//h4//a") // navigate back to parent element

   for (const element of links) {
      let textlist=await element.textContent()   // it will return the  text of the element
      console.log(textlist)
   }

})