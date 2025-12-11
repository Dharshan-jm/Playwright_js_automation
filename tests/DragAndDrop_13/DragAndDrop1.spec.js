const {test,expect} = require('@playwright/test')


test('drag and drop',async({page})=>{

    await page.goto('https://demo.automationtesting.in/Static.html')

    //first lets capture source element
    const source=await page.locator("id=angular")

    //second capture target element
    const target=await page.locator("id=droparea")

    //approach 1
    /*await source.hover()
    await page.mouse.down()

    await target.hover()
    await page.mouse.up()
    */

    //appoarch 2
    await source.dragTo(target)

    await page.waitForTimeout(5000)
})