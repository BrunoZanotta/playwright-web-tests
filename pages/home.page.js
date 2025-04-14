import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.logo = page.locator('.app_logo');
    this.title = page.locator('.title');
    this.cartButton = page.locator('#shopping_cart_container');
    this.filterButton = page.locator('[data-test="product-sort-container"]');

    this.name = page.locator('.inventory_item_name');
    this.description = page.locator('.inventory_item_desc');
    this.price = page.locator('.inventory_item_price');
    this.addToCartButton = page.locator('.btn_inventory');
  }

  async verifyTitle() {
    await expect(this.logo).toBeVisible();
    await expect(this.logo).toHaveText('Swag Labs');
    await expect(this.title).toHaveText('Products');
    await expect(this.title).toBeVisible();
  }

  async verifyCartIsVisible() {
    await expect(this.cartButton).toBeVisible();
  }

  async verifyFilterIsVisible() {
    await expect(this.filterButton).toBeVisible();
  }
  
  async validateFirstProductsisVisible() {
    await expect(this.name.first()).toBeVisible();
    await expect(this.description.first()).toBeVisible();
    await expect(this.price.first()).toBeVisible();
    await expect(this.addToCartButton.first()).toBeVisible();
  }
}


