const {test,expect}=require('@playwright/test')


test('Redbus ticket booking',async({page})=>{

    await page.goto('http://www.redbus.in/')

    await page.locator("//span[text()='Train tickets']").click()
  
    await expect(page).toHaveTitle("Train Ticket Booking, Book IRCTC Train Tickets Online")

    const fromfield=await page.locator("//label[text()='From']")
    await fromfield.click()
    await fromfield.fill('Bangalore')
    await page.locator("//div[@class='listHeader___29ad2b']").first().click()

    const tofield=await page.locator("//label[text()='To']")
    await tofield.click()
    await tofield.fill("Hyderabad")
    await page.locator("//div[@class='listHeader___29ad2b']").first().click()


    //--Date
    await page.locator("//span[text()='Date of Journey']").click()
    await page.locator("//span[text()='30']").click()
    await page.locator("//button[text()='Search Trains']").click()
    
    await expect(page).toHaveTitle("redRail | Search")
    const ccclick=await page.locator("//div//span[@class='journeyClass___bf55e0']")
    await ccclick.toBeVisible()
    ccclick.first().click()
    

    await expect(page).toHaveTitle("Train Booking | redRail")

    const mailtextfield=await page.getByPlaceholder("Enter Email")
    await expect(mailtextfield).toBeEmpty()
    await expect(mailtextfield).toBeEditable()
    await mailtextfield.fill("abcd@xyz.com")

    const contactnotextfield=await page.getByPlaceholder("Enter your phone no")
    await expect(contactnotextfield).toBeEmpty()
    await expect(contactnotextfield).toBeEditable()
    await contactnotextfield.fill("98766543")

})
