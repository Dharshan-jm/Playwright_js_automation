const {test,expect}=require('@playwright/test')


test('print all table data',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //select table
     const table=await page.locator('id=productTable')

     //select rows and columns
    const columns=await table.locator('//thead//tr//th')
    const rows=await table.locator('//tbody//tr')
    
    //first indentify pagination in table and add a loop to select each and every table

     const pagination=await page.locator('id=pagination')
     const pages=await pagination.locator('//li//a')

    for(let p=0; p<await pages.count();p++){

        if (p>0) {
            await pages.nth(p).click()
        }

          //loop for selecting row
          for(let r=0;r<await rows.count();r++){
            
            //select a particular row
           const row=await rows.nth(r)
           const tdtag=await row.locator('//td')
            
            //loop for column to extract data from each column
             for(let c=0;c<await columns.count();c++){
               console.log(await tdtag.nth(c).textContent())
             }
          }

    }
})