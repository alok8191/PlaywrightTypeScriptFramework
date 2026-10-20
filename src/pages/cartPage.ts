import { Locator, Page } from "@playwright/test";

export class cartPage {

    private cartButton: Locator;
    private checkoutButton: Locator;
    public selectedProductName: Locator;
    public readonly page: Page;

    constructor(page: Page) {
        this.cartButton = page.locator(".shopping_cart_link");
        this.checkoutButton = page.locator("#checkout");
        this.selectedProductName = page.locator(".cart_item .inventory_item_name");
        this.page = page;
    }

    async goToCart(): Promise<void> {
        await this.cartButton.click();
    }

    async proceedToCheckout(): Promise<void> {
        await this.checkoutButton.click();
    }
}