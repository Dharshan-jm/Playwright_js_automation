const {test,expect}=require('@playwright/test')


test('frame inside frame',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.fill('//input[@name="mytext3"]','dharshan')

    // nested frame
    //first capture all the child frame
    const childFrame=await frame3.childFrames() //it will return the count of childframe in form of array
    //just printing
    console.log(childFrame.length)
    //so we have only 1 childframe its index will be zero
    //now perform some task on child frame

    await childFrame[0].locator('(//div[@class="AB7Lab Id5V1"])[1]').check()


    await page.waitForTimeout(3000)

})