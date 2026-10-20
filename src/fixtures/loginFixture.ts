import { test as base, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { env } from '../utils/env';

type loginFixture = {
  uiLogin: loginPage;
};

export const test = base.extend<loginFixture>({
  uiLogin: async ({ page }, use) => {
    const uiLogin = new loginPage(page);
    await uiLogin.goTo();
    await uiLogin.login(env.username, env.password);
    await use(uiLogin);
  },
});

export { expect };