const { test } = require('@playwright/test');
const { qase } = require('playwright-qase-reporter');
const { LoginPage } = require ('../../pages/login.page');

test.describe('FLOW-03', () => {
  qase(3, test('FLOW-03: Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.loginInvalid();
  }));
});
 