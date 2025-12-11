const {test,expect}=require('@playwright/test')

let page;
//beforeeach test
test.beforeEach(async ({browser})=>{
 
    page=await browser.newPage();

  await page.goto('https://www.demoblaze.com/')

  await page.locator('id=login2').click()

  await page.locator('id=loginusername').fill('pavanol')
  await page.locator('id=loginpassword').fill('test@123')

  await page.locator('//button[text()="Log in"]').click()
    
})

// after each test
test.afterEach(async()=>{

 //logout
  await page.locator('//a[text()="Log out"]').click()
})

test('hooks1',async()=>{                                         //remove page or else it will create multiple instance
//capturee the name of total number of product

  const products=await page.$$('//div//h4//a')
  console.log(await products.length)
  //assertion on length
  await expect(products).toHaveLength(9)

  for(const pro of products)
  {
    console.log(await pro.textContent())
  }

})

test('Hooks2',async()=>{                                   //remove page or else it will create multiple instance
 
  //click on product
  await page.locator("//a[text()='Samsung galaxy s6']").click()

  //click add to cart
  await page.locator("//a[text()='Add to cart']").click()

  //after clicking we will get a dailog box( we need to handle it)
  page.on('dialog',async dialog=>{
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
  })
})