const {test,expect} = require('@playwright/test')


test('Handle radio button 2',async({page})=>{

    // radio buttons we can select only one at a time

    await page.goto('https://testautomationpractice.blogspot.com/')

    //select the radio button using check() method
    await page.locator('id=male').check()

    //after checking the button. now we can put assertions are check
    //whether it is actually checked or not
    //if its already checkec assertion will pass, if not it will be failed
    await expect(await page.locator('id=male')).toBeChecked()

    //one more way if checked it will return TRUE, and then we can check its true or not
    await expect(await page.locator('id=male').isChecked()).toBeTruthy()  //important(see the syntax carefully)


    //one more suppose if we have not checked the radio button/or not selected
    //if not selected it that case it will return false, we can verify that using below method
    await expect(await page.locator('id=female').isChecked()).toBeFalsy()

    await page.waitForTimeout(3000)
})