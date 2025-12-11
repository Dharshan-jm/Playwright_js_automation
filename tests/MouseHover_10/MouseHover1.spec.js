const {test,expect}=require('@playwright/test')


test('mouse hover',async({page})=>{

    await page.goto("https://www.goibibo.com/")
    
    await page.locator('//span[text()="Fashion"]').hover()


    await page.waitForTimeout(3000)
})