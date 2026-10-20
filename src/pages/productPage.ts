import { Locator, Page } from "@playwright/test";

export class productPage {

    private productsImage: Locator;
    private productsDescription: Locator;
    public readonly page: Page;


    constructor(page: Page) {
        this.productsImage = page.locator(".inventory_item_img");
        this.productsDescription = page.locator(".inventory_item_description");
        this.page = page;
    }

    async addProductToCart(productName: string): Promise<void> {
        await this.productsImage.first().waitFor();
        const product = this.productsDescription.filter({
            has: this.page.locator(".inventory_item_name", { hasText: productName }),
        });
        if ((await product.count()) === 0) {
            throw new Error(`Product "${productName}" not found on the products page`);
        }
        await product.first().getByRole("button", { name: "Add to cart" }).click();
    }

}
