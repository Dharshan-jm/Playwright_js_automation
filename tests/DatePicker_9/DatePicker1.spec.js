const {test,expect}=require('@playwright/test')

//if date picker keeps changing in UI, we need to change the code accordingly
//depenfs on the design of date picker

test('date picker',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //select date text filed

    const date='26'
    const month= 'March'
    const year='2026'

    await page.locator('id=datepicker').click()

    //loop to select the particular year calender
    
    while(true){
     
        //extracting month and year data from calender
        const selectmonth=await page.locator('//span[@class="ui-datepicker-month"]').textContent()
        const selectyear=await page.locator('//span[@class="ui-datepicker-year"]').textContent()

        if(selectmonth==month && selectyear==year)
        {
            break;
        }
        await page.locator('//a[@title="Next"]').click()
    }

    //select date
      const dateselect=await page.$$('//a[@class="ui-state-default"]')

      for(const dt of dateselect){
            const actualdate= await dt.textContent()
        if(actualdate==date)
        {
            await dt.click()
        }
      }

    await page.waitForTimeout(3000)

})