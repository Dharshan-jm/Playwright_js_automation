const {test, expect } = require('@playwright/test')

test('Other remaining locators',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //   1)get by alt attribute
   const altattributelogo=await page.getByAltText('company-branding') // pass the value of alt attribute
   // putting assertion
   await expect(altattributelogo).toBeVisible()
  
   //    2)get  by placeholder ex: placeholder="username"  
   await page.getByPlaceholder('Username').fill('Admin')
   await page.getByPlaceholder('Password').fill('admin123')

   //   3) get by role ( we can locate any type of attribute using this )
   await page.getByRole('button',{type :"submit"}).click()

   
   //  4) get by text
   // let capture the text first and then put assertion
   await expect(await page.getByText('rachid benmbark')).toBeVisible()

   // or to capture and check we dont have any specific method, but we can use by locator
   const textdata=await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
   await console.log(textdata)
   await expect(await page.getByText(textdata)).toBeVisible()

})