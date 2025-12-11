const {test,expect}=require('@playwright/test')

//first need to import the pom classes
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { CartPage } from '../../pages/CartPage';

test('pom 1',async({page})=>{

//create object for login page and store in a variable
//Login Page
const login=new LoginPage(page)

await login.GoToLoginPage()

await login.login('pavanol','test@123')

await page.waitForTimeout(3000)

//----------------------------------------------------------------------------------------------

//Homepage
const homepage=new HomePage(page)
await homepage.addproducttocart('Nokia lumia 1520')
await page.waitForTimeout(3000)


await homepage.gotocart()

//CartPage
await page.waitForTimeout(3000)

const cartpage=new CartPage(page)

const returndata=await cartpage.searchproductincart('Nokia lumia 1520')
expect(await returndata).toBe(true)

await page.waitForTimeout(3000)

})