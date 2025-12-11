const {test,expect}= require('@playwright/test')

test('element screenshot',async({page})=>{
  
    await page.goto('https://www.demoblaze.com/')

    await page.locator('//img[@src="imgs/Lumia_1520.jpg"]').screenshot({path :'tests/Screenshots/'+Date.now()+'elementSC.png'})
})