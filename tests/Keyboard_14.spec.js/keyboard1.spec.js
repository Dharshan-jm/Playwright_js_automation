const {test,expect}= require('@playwright/test')


test('keyboard',async({page})=>{
 
    await page.goto('https://gotranscript.com/text-compare')

    //first let fill the text box
    await page.locator("//textarea[@name='text1']").fill('playwright')

    //first select all ctrl+A
    await page.keyboard.press('Control+A')

    //second copy the text
    await page.keyboard.press('Control+C')

    //Click tab
    await page.keyboard.down('Tab') //click tab
    await page.keyboard.up('Tab') // release tab

    //paste ctrl+V
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(3000)
})