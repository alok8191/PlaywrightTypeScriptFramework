import { expect, customTest } from '../../src/fixtures/loginFixture';

customTest("should login successfully with valid credentials", async ({ loginPage }) => {
    const productName = "Sauce Labs Backpack";

    await loginPage.locator(".inventory_item_img").first().waitFor();
    const products = loginPage.locator(".inventory_item_description");
    const counts = await products.count();

    for (let i = 0; i < counts; ++i) {
      if ((await products.nth(i).locator(".inventory_item_name").textContent()) === productName) {
        await products.nth(i).locator("text=Add to cart").click();
        break;
      }
    }

    await loginPage.locator(".shopping_cart_link").click();
    await expect(loginPage.locator(".inventory_item_name").first()).toHaveText(productName);
    await loginPage.locator("#checkout").click();
});