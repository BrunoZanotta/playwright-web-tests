require('dotenv').config()

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#user-name')
    this.passwordInput = page.locator('#password')
    this.submitButton = page.locator('#login-button')
  }

  async gotoLoginPage() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login() {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    await this.emailInput.fill(username)
    await this.emailInput.fill(password)
    await this.submitButton.click()
  }
}