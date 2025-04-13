import dotenv from 'dotenv';
dotenv.config();
import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page
    this.usernameInput = page.locator('[data-test="username"]')
    this.passwordInput = page.locator('[data-test="password"]')
    this.submitButton = page.locator('#login-button')
    this.errorMessage = page.locator('[data-test="error"]')
  }

  async gotoLoginPage() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async loginSuccess() {
    const credentialsText  = await this.page.locator('.login_credentials').innerText()
    const passwordText = await this.page.locator('.login_password').innerText()
    const username = credentialsText.split('\n')[1].trim()
    const password = passwordText.split('\n')[1].trim()

    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.submitButton.click()
  }

  async loginError() {
    await this.usernameInput.fill('tester') 
    await this.passwordInput.fill('tester')
    await this.submitButton.click()
  }

  async verifyErrorMessage() { 
    await expect(this.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
  }
}