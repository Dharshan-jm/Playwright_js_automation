const {test,expect} = require('@playwright/test')
const { log } = require('console')

test('DropDown 1',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //multiple ways to select drop down
    //first select the drop down
    //syntax : page.locator().selectOption({label: 'here we can pass the text name'})  : by using lable or visible text (highly used)
    // or
    //syntax : page.locator().selectOption('here we can pass the text name')  : by using lable or visible text(highly used)
    // or
    //syntax : page.locator().selectOption({value: 'here we can pass the text name'})  : by using value attribute
    // or page.selectOption(-----)
    //or
    //syntax : selectOption({index: pass index value})  : here we need to count index value manually
    // and there is not ' ' for index, just we need to pass the integer number directly


    await page.locator('id=country').selectOption({label:'Germany'})

    //Assertions on DropDown : important

    //1st  : to check total number of options in the drop down

    const count= await page.locator('#country option') //using css and we need to add 'option' keyword inside locator
    await expect(count).toHaveCount(10)

    //2nd   : to check to number of options present converting into array

    const countoption=await page.$$('#country option') //array convertion
    await console.log('number of options :'+countoption.length)
    await expect(countoption.length).toBe(10)

   
    //3rd  : to check the presense of value or text in the drop down
    const checkoption= await page.locator('id=country').textContent() // it will return all the options
    await expect(checkoption.includes('Germany')).toBeTruthy()


    //4th : using loop
    let status=false
    for(let textoption of countoption){
       const value= await textoption.textContent()
       if (value.includes('Germany')) {
        await console.log(" value is present"+value)
        status=true
        break;
       }
    }
    await expect(status).toBeTruthy()
    await page.waitForTimeout(3000)
})