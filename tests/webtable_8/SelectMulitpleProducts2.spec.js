const {test,expect}= require('@playwright/test')
 

// to learn select mulitple products using reuseable function.

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
   
    //calling the products to select multiple function
    await selectproduct(rows,page,'Smartphone')
    await selectproduct(rows,page,'Laptop')
    await selectproduct(rows,page,'Tablet')


    await page.waitForTimeout(3000)

    
})

//creating reusable function :

async function selectproduct(rows,page,name){   //to use await we need to add async function

    const matchedrow= await rows.filter({
        has : page.locator('td'),
        hasText: name
    })
   await matchedrow.locator('input').check()
}