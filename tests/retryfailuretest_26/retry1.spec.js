const {test,expect}=require('@playwright/test')


test('retry',async({page})=>{
  await page.goto('https://www.orangehrm.com/')
  await expect(page).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')
})
