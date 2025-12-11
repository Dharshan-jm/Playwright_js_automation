const {test,expect}=require('@playwright/test')


test('video record',async({page})=>{

    await page.goto('https://www.demoblaze.com/')

    await page.locator("//a[text()='Log in']").click()

    await page.locator("id=loginusername").fill('pavanol')
    await page.locator("id=loginpassword").fill('test@12')  // test will get failed as i have made mistake in the locator

    await expect(await page.locator("//button[text()='Log in']")).toBeVisible()
    await page.locator("//button[text()='Log in']").click()
})