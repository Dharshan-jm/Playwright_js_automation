const {test,expect}= require('@playwright/test')


test('multi select',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')


    //selecting multiple options
    await page.locator('id=colors').selectOption(['Red','Blue','Green'])

    // Assertions

    //1st to check total number of options.
    const countoption=await page.locator('#colors option')
    await expect(countoption).toHaveCount(7)

    //2nd suppose if we want to get the length and check : for that we can use array
    const countoption1=await page.$$('#colors option') //array
    await expect(countoption1.length).toBe(7)

    //3rd check presense of value in the drop down
    const countoption2= await page.locator('id=colors').textContent()
    await expect(countoption2.includes('Red')).toBeTruthy()
    await page.waitForTimeout(3000)

})