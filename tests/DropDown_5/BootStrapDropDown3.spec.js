const {test,expect}=require('@playwright/test')


test('Boot Strap Drop Down',async({page})=>{

    //bootstrap drop down they dont consist of select tag in html
    // here we can select single or multple options as well

    await page.goto('https://coreui.io/bootstrap/docs/forms/multi-select/')

    // 1st lets count the no of options present in the dropdown
    // wee need to inspect first
    await page.locator('id=search-ms1').first().click()

    const count=await page.locator('//div[@id="ms1-listbox"]//div[@class="form-multi-select-option form-multi-select-option-with-checkbox"]').textContent()
    await console.log(count)
    await page.waitForTimeout(3000)
})