exports.LoginPage=class LoginPage {

    constructor(page)
    {
     this.page=page;
     this.loginlink="id=login2";
     this.username="id=loginusername";
     this.password="id=loginpassword";
     this.loginbutton="//button[text()='Log in']";
    }

    async GoToLoginPage(){
        await this.page.goto("https://www.demoblaze.com/")
    }

    async login(username,password){
        await this.page.locator(this.loginlink).click()
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.loginbutton).click()
    }
}