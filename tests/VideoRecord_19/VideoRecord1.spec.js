const {test,expect}=require('@playwright/test')


test('video record',async({page})=>{

    await page.goto('https://www.demoblaze.com/')

    await page.locator("//a[text()='Log in']").click()

    await page.locator("id=loginusername").fill('pavanol')
    await page.locator("id=loginpasswor").fill('test@12')  // test will get failed as i have made mistake in the locator

    await page.locator("//button[text()='Log in']").click()
})