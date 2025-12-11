const {test,expect}= require('@playwright/test')

test('Auto suggest dropdown',async({page})=>{
    
    //pending video - 14
    await page.goto('https://www.redbus.in/')

     await page.getByRole('button', { name: ' From' }).click(); // faced issue finding Xpath so used code gen
     await page.getByRole('textbox', { name: 'From' }).fill('Delhi'); // ---- ""------

    await page.waitForTimeout(3000)
})