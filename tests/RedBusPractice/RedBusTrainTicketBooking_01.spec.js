const {test,expect}=require('@playwright/test')

test('RedBus Train ticket Booking',async({page})=>{

    await page.goto('https://www.redbus.in/')

    await page.locator("//span[text()='Train tickets']").click()
    
    //--From
    await page.getByText('From', { exact: true }).click();
    await page.locator("id=srcDest").fill('Bangalore')
    await page.waitForTimeout(2000)
    await page.locator("//div[contains(@class,'listHeader')]").first().click()
    
    //--wait statement
    await page.waitForTimeout(2000)
    //--To
    await page.getByRole('textbox', { name: 'To' }).fill('Tirupati');
    await page.waitForTimeout(2000)
    await page.locator("//div[contains(@class,'leftContent')]").first().click()
    
    //--date
    await page.locator('#date-picker-grid').getByText('Date of Journey').click();
    await page.waitForTimeout(3000)

    const todaydate=new Date()
    const requireddate=todaydate.getDate()+3
    console.log(requireddate)
 
    await page.locator(`//span[text()=${requireddate}]`).click()
    
    await page.waitForTimeout(3000)
    //--click search
    await page.getByRole('button',{name:'Search Trains'}).click()
    await page.waitForTimeout(3000)

  
    await page.locator("//span[contains(@class,'journeyClass')]").first().click()

    await page.getByPlaceholder("Enter Email").fill("abcs@xyz.com")
    await page.getByPlaceholder("Enter your phone no").fill("13343254")

    await page.waitForTimeout(3000)
    
})