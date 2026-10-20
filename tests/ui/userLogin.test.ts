import { expect, test } from '../../src/fixtures/loginFixture';
import { productPage } from '../../src/pages/productPage';
import { cartPage } from '../../src/pages/cartPage';

test("end to end complete order flow", async ({ uiLogin }) => {
  const productName = "Sauce Labs Backpack";

  const productsPage = new productPage(uiLogin.page);
  await productsPage.addProductToCart(productName);

  const cart = new cartPage(uiLogin.page);
  await cart.goToCart();
  await expect(cart.selectedProductName).toHaveText(productName);
  await cart.proceedToCheckout();
  await uiLogin.page.pause();
});