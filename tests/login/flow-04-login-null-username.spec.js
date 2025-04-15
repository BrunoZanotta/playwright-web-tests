const { test } = require('@playwright/test');
const { qase } = require('playwright-qase-reporter');
const { LoginPage } = require ('../../pages/login.page');

test.describe('FLOW-04', () => {
  qase(4, test('FLOW-04: Login with null username', async ({ page }) => {   
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.loginUsernameNull();
  }));
});
