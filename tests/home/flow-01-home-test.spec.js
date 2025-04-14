const { test } = require('@playwright/test');
const { LoginPage } = require ('../../pages/login.page');
const { HomePage } = require ('../../pages/home.page');


test.describe('FLOW-01', () => {
  test('FLOW-01: Home', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await test.step('Login with valid credentials', async () => {
      await loginPage.gotoLoginPage();
      await loginPage.loginSuccess();
    });

    await test.step('Verify home page elements', async () => {
      await homePage.verifyTitle();
      await homePage.verifyCartIsVisible();
      await homePage.verifyFilterIsVisible();
    });

    await test.step('Validate product details', async () => {
      await homePage.validateFirstProductsisVisible();
    });
  });
});