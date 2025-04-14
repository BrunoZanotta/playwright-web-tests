const { test } = require('@playwright/test');
const { LoginPage } = require ('../../pages/login.page');

test.describe('FLOW-02', () => {
  test('FLOW-02: Login with user locked', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.loginLocked();
  });
});
