import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class AccountElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getAccountSelect(): Locator {
    return this.page.locator('#listAccounts');
  }

  getGoToAccountButton(): Locator {
    return this.page.locator('#btnGetAccount');
  }

  async validateSuccessfulRedirectToAccountDetails() {
    await this.page.waitForURL(
      'https://demo.testfire.net/bank/showAccount?listAccounts=4539082039396288'
    );
  }
}
