
export class MenuPage {
  constructor(page) {
    this.page = page
    this.burgerMenu = page.locator('#react-burger-menu-btn')
    this.closeMenu = page.locator('#react-burger-cross-btn')
    this.allItems = page.locator('#inventory_sidebar_link')
    this.about = page.locator('#about_sidebar_link')
    this.logout = page.locator('#logout_sidebar_link')
    this.resetAppState = page.locator('#reset_sidebar_link')
  }

    async openMenu() {
        await expect(this.burgerMenu).toBeVisible()
        await this.burgerMenu.click()
        await expect(this.closeMenu).toBeVisible()
        await expect(this.allItems).toBeVisible()
        await expect(this.about).toBeVisible()
        await expect(this.logout).toBeVisible()
        await expect(this.resetAppState).toBeVisible()
    }
}
