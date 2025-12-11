const {test,expect}=require('@playwright/test')

test('Hidden drop down',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //login to app
     await page.locator('//input[@name="username"]').fill('Admin')
     await page.locator('//input[@name="password"]').fill('admin123')
     await page.locator('//button[@type="submit"]').click()

    //select PIM from dashboard page
    await page.locator('//span[text()="PIM"]').click()

    //click on down arrow
    await page.locator('//div[6]//div//i[@class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').click()

    await page.waitForTimeout(3000) // waiting for options

    //print all the options
    const options=await page.$$('//div[@role="listbox"]//span') //convert to array

    for(const optionlist of options)
    {
        const capturedtext=await optionlist.textContent()
        await console.log(capturedtext)

        if(capturedtext.includes('Automaton Tester'))
        {
            await optionlist.click()
            break
        }
    }


     await page.waitForTimeout(3000)
})