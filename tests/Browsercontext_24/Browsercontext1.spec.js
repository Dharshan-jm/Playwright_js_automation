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

    await page1.goto('https://demoblaze.com/')
    await expect(await page1).toHaveTitle('STORE')

    await page2.goto('https://testautomationpractice.blogspot.com/')
    await expect(await page2).toHaveTitle('Automation Testing Practice')
})