const { test } = require('@playwright/test');
const { LoginPage } = require('../../pages/login.page');
const { HomePage } = require('../../pages/home.page');

test.describe('FLOW-01', () => {
  
  test('FLOW-01: Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.gotoLoginPage();
    await loginPage.loginSuccess();

    await homePage.verifyTitle();  
  });
});