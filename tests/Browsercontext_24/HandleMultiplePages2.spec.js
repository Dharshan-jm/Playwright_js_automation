const {test,expect,chromium}=require('@playwright/test')


test('browser context',async()=>{

    const browser=await chromium.launch()
    const context=await browser.newContext()

    //creating page
    const page1=await context.newPage()
    const page2=await context.newPage()

    //printing number of pages created
    const pages=await context.pages()
    console.log('pages  '+pages.length)

    //example to check the title of 2 different pages

    await page1.goto('https://www.orangehrm.com/')
    await expect(await page1).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')

    //wait till it loads the other page
    const newpage=await context.waitForEvent('page')

    await page1.locator("//a[text()='Site Map']").click()
    
})