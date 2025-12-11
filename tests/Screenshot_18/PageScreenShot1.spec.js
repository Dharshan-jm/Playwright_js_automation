const {test,expect}=require('@playwright/test')


test('page screenshot',async({page})=>{
    
    await page.goto('https://www.demoblaze.com/')
    
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Homepage.png'})

    await page.waitForTimeout(3000)
})