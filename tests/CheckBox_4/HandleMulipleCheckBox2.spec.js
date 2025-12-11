const {test,expect}= require('@playwright/test')


test('Handle MultipleCheckBox',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //handle multiple check boxes

    //first we need to capture the locators of the checkbox and store inside arry

    const checkboxlocators=["//input[@type='checkbox' and @id='sunday']",
                            "//input[@type='checkbox' and @id='monday']",
                            "//input[@type='checkbox' and @id='tuesday']"
                           ]

    //can put enhanced loop for selecting/ check the checkbox

    for( const locators of checkboxlocators){
       await page.locator(locators).check()
    }
    await page.waitForTimeout(3000)


    // now we can also uncheck/ but first we need to make sure it is checked
     for( const locators of checkboxlocators){
        if(await page.locator(locators).isChecked())
        {
           await page.locator(locators).uncheck()
        }
    }

    await page.waitForTimeout(3000)

})