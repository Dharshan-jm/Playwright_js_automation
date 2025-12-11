const {test,expect}= require('@playwright/test')

test('frames',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    //to check total number of frames
    const allframes=await page.frames() //it will return array of frames
    console.log('total number of frames :'+allframes.length)

    //for first frame
    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})

    //passing value for frame1 text box
    await frame1.fill("//input[@name='mytext1']",'dharshan')

    //for second frame(using different method) //we cannot use url here
    const inputbox=await page.frameLocator('//frame[@src="frame_2.html"]').locator("//input[@name='mytext2']")
    await inputbox.fill('dharshan')

    await page.waitForTimeout(3000)


})