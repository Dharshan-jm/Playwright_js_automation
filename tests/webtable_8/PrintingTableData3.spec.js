const {test,expect}=require('@playwright/test')

test('print table data',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //capture table
    const table=await page.locator("id=productTable") 

    //capture columns and rows
    const columns= await table.locator('//thead//tr//th')
    const rows= await table.locator('//tbody//tr')

    console.log('columns :'+await columns.count())
    console.log('rows :'+await rows.count())

    //assertion on columns and rows
    await expect(await columns.count()).toBe(4)
    await expect(await rows.count()).toBe(5)

    //printing the details of the table

    for(let i=0;i< await rows.count();i++)
    {
        //lets capture a particular row
        const row=await rows.nth(i)
        const tdtag=await row.locator('td')
         
        //loop for column
        for(let j=0;j<await columns.count();j++)
        {
            // to print value of each row
          console.log(await tdtag.nth(j).textContent())
        }

    }
    await page.waitForTimeout(3000)
})