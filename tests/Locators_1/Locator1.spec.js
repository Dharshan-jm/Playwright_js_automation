var {test, expect}=require('@playwright/test')


test('locator 1',async({page})=>{

    await page.goto('https://demoblaze.com/')
    await page.click('id=login2')
    await page.locator('id=loginusername').fill('pavanol')
    await page.locator('id=loginpassword').fill('test@123')
    await page.click('//button[text()="Log in"]')
    
})