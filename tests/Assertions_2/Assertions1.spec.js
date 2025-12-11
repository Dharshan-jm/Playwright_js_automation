const {test, expect} = require('@playwright/test')

test('Assertions 1',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/')

    //1st assertion : toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/')

    //2nd assertion : toHaveTitle()
    await expect(page).toHaveTitle('nopCommerce demo store. Home page title')

    //3rd assertion : toBeVisible()   works with locator
    await expect(await page.locator("//img[@alt='nopCommerce demo store']")).toBeVisible()

    //4th assertion : toBeEnabled()
   const searchbutton= await page.locator("//button[@type='submit']")
   await expect(searchbutton).toBeEnabled()

   //5th assertion : toBeChecked()
   //for check whether radio/checkbox is selected or not
   //but first we need to select then we can check whether it is checked or not
   const goodbutton=await page.locator('id=pollanswers-2')
   await goodbutton.click() //radio button
   await expect(goodbutton).toBeChecked()

})