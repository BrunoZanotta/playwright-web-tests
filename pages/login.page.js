require('dotenv').config()
import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page
    this.emailInput = page.locator('#user-name')
    this.passwordInput = page.locator('#password')
    this.submitButton = page.locator('#login-button')
    this.errorMessage = page.locator('[data-test="error"]')
  }

  async gotoLoginPage() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async loginSuccess() {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    await this.emailInput.fill(username)
    await this.passwordInput.fill(password)
    await this.submitButton.click()
  }

  async loginError() {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORDFAIL;

    await this.emailInput.fill(username)
    await this.passwordInput.fill(password)
    await this.submitButton.click()
  }

  async verifyErrorMessage() { 
    await expect(this.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
  }
}