const {test,expect} = require('@playwright/test')


test('Prompt consist ok cancel and text box',async({page})=>{

    page.goto('https://testautomationpractice.blogspot.com/')

    //enabling prompt dialog box

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')

        //input box we can inspect or handle
        expect(dialog.defaultValue()).toContain('Harry Potter')

        //suppose to pass value to input box
        await dialog.accept('dharshan')
    })
    
    await page.locator('id=promptBtn').click()

    //assertion on the message
    await expect(page.locator('id=demo')).toHaveText('Hello dharshan! How are you today?')

    await page.waitForTimeout(3000)
})