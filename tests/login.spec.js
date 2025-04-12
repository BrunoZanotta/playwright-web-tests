const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.login();
});