const {test,expect}= require('@playwright/test')


test('Alerts',async({page})=>{
  
  page.goto('https://testautomationpractice.blogspot.com/')
  
  //enabling the alert handling
  page.on('dialog',async dialog=>{

    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept()
    })

// click on alert popup button

await page.locator('id=alertBtn').click()

await page.waitForTimeout(3000)
})