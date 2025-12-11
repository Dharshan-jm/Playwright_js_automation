const {test,expect}=require('@playwright/test')


test('Full Page ScreenShot',async({page})=>{

    await page.goto('https://www.demoblaze.com/')

    await page.screenshot({path: 'tests/Screenshots/'+Date.now()+'fullpagesc.png',fullPage:true})
})