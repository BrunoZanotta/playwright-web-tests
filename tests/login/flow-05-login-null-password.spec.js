const { test } = require('@playwright/test');
const { LoginPage } = require('../../pages/login.page');
const { HomePage } = require('../../pages/home.page');

test.describe('FLOW-05', () => {
test('FLOW-05: Login with null password', async ({ page }) => {
  const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.loginPasswordNull();
  });
});