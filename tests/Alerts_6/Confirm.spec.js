const {test,expect} =require('@playwright/test')


test('confirm consist ok and cancel',async({page})=>{

    page.goto('https://testautomationpractice.blogspot.com/')

    //confirm pop up
    page.on('dialog',async dialog=>{
     
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept()   // dialog.dismiss()

    })

    await page.locator('id=confirmBtn').click()
    
    // text validation
    await expect(page.locator('id=demo')).toHaveText('You pressed OK!')
    
    await page.waitForTimeout(3000)
})