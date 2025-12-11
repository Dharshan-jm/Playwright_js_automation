const {test,expect}=require('@playwright/test')

test('Handle Check Box',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //we are putting a check on sunday checkbox
    await page.locator("//input[@type='checkbox' and @id='sunday']").check()

    //post checked we can put assertions and check is checked or not
    await expect(await page.locator("//input[@type='checkbox' and @id='sunday']")).toBeChecked()
    await expect(await page.locator("//input[@type='checkbox' and @id='sunday']").isChecked()).toBeTruthy()

    await page.waitForTimeout(3000)
})