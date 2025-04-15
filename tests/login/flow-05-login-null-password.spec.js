const { test } = require('@playwright/test');
const { qase } = require('playwright-qase-reporter');
const { LoginPage } = require ('../../pages/login.page');

test.describe('FLOW-05', () => {
  qase(5, test('FLOW-05: Login with null password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.loginPasswordNull();
  }));
});
