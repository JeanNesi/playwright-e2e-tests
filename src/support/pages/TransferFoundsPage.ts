import { Page } from '@playwright/test';
import BasePage from './BasePage';
import TransferFoundsElements from '../elements/TransferFoundsElements';

export default class TransferFoundsPage extends BasePage {
  readonly transferFoundsElements: TransferFoundsElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.transferFoundsElements = new TransferFoundsElements(page);
  }

  async accessTransferFoundsPage(): Promise<void> {
    await this.transferFoundsElements.getLinkToTransferFounds().click();
    await this.transferFoundsElements.validateSuccessfulRedirectToTransferFounds();
  }

  async tranferFoundsForm(): Promise<void> {
    await this.transferFoundsElements.fillValidTransferForm();
  }

  async validateSuccessfulTransfer(): Promise<void> {
    await this.transferFoundsElements.validateSuccessfulTransfer();
  }
}
