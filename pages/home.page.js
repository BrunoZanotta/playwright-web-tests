import { expect } from "@playwright/test";

export class HomePage {
  constructor(page) {
    this.page = page;
    this.logo = page.locator('.app_logo');
    this.title = page.locator('.title');
    this.cartButton = page.locator('#shopping_cart_container');
  }

  async verifyTitle() {
    await this.page.waitForSelector('.app_logo');
    await expect(this.logo).toHaveText('Swag Labs'); 
    await expect(this.title).toHaveText('Products');
    await expect(this.title).toBeVisible(); 
  } 

  async clickCartButton() {
    await this.cartButton.click();
  }
}
