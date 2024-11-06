import { Page } from '@playwright/test';
import BasePage from './BasePage';
import LoginElements from '../elements/LoginElements';

export default class LoginPage extends BasePage {
  readonly loginElements: LoginElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.loginElements = new LoginElements(page);
  }

  async accessSignInPage(): Promise<void> {
    await this.loginElements.getSignInButton().click();
  }

  async signInForm(): Promise<void> {
    await this.loginElements.fillValidLoginForm();
    await this.loginElements.validateSuccessfulLogin();
  }
}
