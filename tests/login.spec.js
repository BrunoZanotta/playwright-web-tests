const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { HomePage } = require('../pages/home.page');

test('FLOW-01: Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.gotoLoginPage();
  await loginPage.loginSuccess();

  await homePage.verifyTitle();  
});

test('FLOW-02: Login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.loginError();

  await loginPage.verifyErrorMessage();
}); 
