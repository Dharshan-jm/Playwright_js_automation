const {test,expect}=require('@playwright/test')


test('Single file',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

   
    await page.waitForSelector('id=singleFileInput') // it will wait till the button is enable to click

    await page.locator('id=singleFileInput').click()

    await page.setInputFiles('#file-upload','tests\dummyfiles\Form 1.pdf')

    await page.waitForTimeout(5000)
})