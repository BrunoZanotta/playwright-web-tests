import dotenv from 'dotenv';
dotenv.config();
import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page
    this.usernameInput = page.locator('#user-name')
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