import { test as base, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { env } from '../utils/env';

type loginFixture = {
  loginPage: LoginPage;
};

export const customTest = base.extend<loginFixture>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.login(env.username, env.password);
    await use(loginPage);
  },
});

export { expect };