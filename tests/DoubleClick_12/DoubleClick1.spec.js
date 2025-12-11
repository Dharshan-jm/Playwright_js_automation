const {test,expect}=require('@playwright/test')


test('double click',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const doubleclickbutton=await page.locator("//button[text()='Copy Text']")

    await doubleclickbutton.dblclick()

    await expect(await page.locator('id=field2')).toHaveValue('Hello World!')

    await page.waitForTimeout(3000)
})