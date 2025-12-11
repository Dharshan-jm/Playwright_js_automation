const {test,expect}= require('@playwright/test')

test('webTable 1',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //first select the table
    const table=await page.locator("id=productTable")

    //columns
    const columns=await table.locator('//thead//tr//th')
    
    //rows
    const rows=await table.locator('//tbody//tr')

    //count rows and columns
    console.log('number of columns '+ await columns.count())
    console.log('number of rows '+await rows.count())

    //putting assertions on rows and columns
    await expect(await columns.count()).toBe(4)
    await expect(await rows.count()).toBe(5)

    //filtering the rows // by using filter function
   
   const matchedrow=await rows.filter({
         has: page.locator('td'),
         hasText: 'Smartphone'
    })

    await matchedrow.locator('//input').check()

    await page.waitForTimeout(3000)

    
})
