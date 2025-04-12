const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://example.com/login');
  await loginPage.login('myUsername', 'myPassword');

  // Verifique se você foi redirecionado para a página de dashboard
  await expect(page).toHaveURL('https://example.com/dashboard');
});