import { Page } from '@playwright/test';
import BasePage from './BasePage';
import AccountElements from '../elements/AccountElements';

export default class AccountPage extends BasePage {
  readonly accountElements: AccountElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.accountElements = new AccountElements(page);
  }

  async selectAccount(): Promise<void> {
    await this.accountElements.getAccountSelect().selectOption({
      value: '4539082039396288'
    });
  }

  async goToAccount(): Promise<void> {
    await this.accountElements.getGoToAccountButton().click();
    await this.accountElements.validateSuccessfulRedirectToAccountDetails();
  }
}
