import dotenv from 'dotenv';
dotenv.config();
import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async gotoLoginPage() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async loginSuccess() {
    const userInfoText = await this.page.locator('.login_credentials').innerText();
    const passwordInfoText = await this.page.locator('.login_password').innerText();
    const username = userInfoText.split('\n')[1].trim();
    const password = passwordInfoText.split('\n')[1].trim();

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async loginLocked() {
    const userInfoText = await this.page.locator('.login_credentials').innerText();
    const passwordInfoText = await this.page.locator('.login_password').innerText();
    const username = userInfoText.split('\n')[2].trim();
    const password = passwordInfoText.split('\n')[1].trim();

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
    await expect(this.errorMessage).toHaveText(
      'Epic sadface: Sorry, this user has been locked out.',
    );
  }

  async loginInvalid() {
    await this.usernameInput.fill('tester');
    await this.passwordInput.fill('tester');
    await this.submitButton.click();
    await expect(this.errorMessage).toHaveText(
      'Epic sadface: Username and password do not match any user in this service',
    );
  }

  async loginUsernameNull() {
    await this.usernameInput.fill('');
    await this.passwordInput.fill('tester');
    await this.submitButton.click();
    await expect(this.errorMessage).toHaveText('Epic sadface: Username is required');
  }

  async loginPasswordNull() {
    await this.usernameInput.fill('tester');
    await this.passwordInput.fill('');
    await this.submitButton.click();
    await expect(this.errorMessage).toHaveText('Epic sadface: Password is required');
  }
}
