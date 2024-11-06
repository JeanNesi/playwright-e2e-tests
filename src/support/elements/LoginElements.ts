import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class LoginElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getSignInButton(): Locator {
    return this.page.locator('#LoginLink');
  }

  async fillValidLoginForm() {
    await this.page.fill('input[name="uid"]', 'jsmith');
    await this.page.fill('input[name="passw"]', 'Demo1234');
    await this.page.click('input[name="btnSubmit"]');
  }

  async validateSuccessfulLogin() {
    await this.page.waitForURL('https://demo.testfire.net/bank/main.jsp');
  }
}
