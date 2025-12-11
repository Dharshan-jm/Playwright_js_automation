const {test,expect}=require('@playwright/test')


test('Handle input box 1',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // playing with name input box
    // 1st putting assertion to check whether the name input box is empty or not
    await expect(await page.locator('id=name')).toBeEmpty()

    // 2nd one more assertion to check the name text field is visible to not
    await expect(await page.locator('id=name')).toBeVisible()

    // 3rd one more assertion to check the name text field is editable to not
    await expect(await page.locator('id=name')).toBeEditable()

    // 4th one more assertion to check the name text field is enabled to not
    await expect(await page.locator('id=name')).toBeEnabled()

    // if assertions are passed then we are going to fill some details
    await page.locator('id=name').fill('dharshan')
   

    await page.waitForTimeout(5000)

})