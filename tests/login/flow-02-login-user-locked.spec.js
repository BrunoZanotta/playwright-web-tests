const { test } = require('@playwright/test');
const { qase } = require('playwright-qase-reporter');
const { LoginPage } = require ('../../pages/login.page');

test.describe('FLOW-02', () => {
  qase(2, test('FLOW-02: Login with user locked', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.loginLocked();
  }));
});
