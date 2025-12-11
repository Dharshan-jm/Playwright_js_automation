const {test,expect} = require('@playwright/test')


test('Assertions 2',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/')

    //1) assertion : toHaveAttribute()
    // we can check wether element is having particular attribute or not

    const searchfield=await page.locator('id=small-searchterms')
    await expect(searchfield).toHaveAttribute('type','text')


    //2) assertion : toHaveText()
    //first lets capture the locator and save
    //then we can put assertion
    const textdataelement=await page.getByRole('link', { name: 'Electronics' }).first()
    await expect(textdataelement).toHaveText('Electronics ')

    //3) assertion : toContainText()
    //first lets capture the locator and save
    //then we can put assertion
    const textdataelement1=await page.getByRole('link', { name: 'Electronics' }).first()
    await expect(textdataelement1).toContainText('Elec') // same as toHaveText , but here we can just give partial text
  
    //4) assertion : toHaveValue() 
    // After passing the value, we can check do we have the enter value correct or not

    const searchtextfield=await page.locator('id=small-searchterms')
    await searchtextfield.fill('dharshan')
    await expect.soft(searchtextfield).toHaveValue('dharshan')

})