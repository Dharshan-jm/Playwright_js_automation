const {test,expect}=require('@playwright/test')


test('right click',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const alrtbutton=await page.locator('id=alertBtn')
    
    await alrtbutton.click({button :'right'})

    await page.waitForTimeout(3000)

})