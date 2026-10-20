import { Locator, Page } from "@playwright/test";
import { env } from "../utils/env";

export class loginPage {

  private userName: Locator;
  private password: Locator;
  private signInButton: Locator;
  public readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.userName = this.page.locator('#user-name');
    this.password = this.page.locator('#password');
    this.signInButton = this.page.locator('#login-button');
  }

  locator(selector: string, options?: Parameters<Page['locator']>[1]) {
    return this.page.locator(selector, options);
  }

  async goTo(): Promise<void> {
    await this.page.goto(env.baseUrl);
  }

  async login(username: string, password: string): Promise<void> {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.signInButton.click();
    await this.page.waitForURL('**/inventory.html');
    await this.page.waitForLoadState('networkidle');
  }
}