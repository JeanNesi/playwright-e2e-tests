import { Locator, Page, expect } from '@playwright/test';
import BaseElements from './BaseElements';

export default class TransferFoundsElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getLinkToTransferFounds(): Locator {
    return this.page.locator('#MenuHyperLink3');
  }

  async validateSuccessfulRedirectToTransferFounds() {
    await this.page.waitForURL('https://demo.testfire.net/bank/transfer.jsp');
  }

  async fillValidTransferForm() {
    await this.page.locator('#fromAccount').selectOption({
      value: '800003'
    });
    await this.page.locator('#toAccount').selectOption({
      value: '4539082039396288'
    });
    await this.page.fill('input[name="transferAmount"]', '100');

    await this.page.click('input[name="transfer"]');
  }

  async validateSuccessfulTransfer() {
    const tForm = await this.page.locator('#tForm').textContent();
    expect(tForm).toContain(
      '100.0 was successfully transferred from Account 800003 into Account 4539082039396288'
    );
  }
}
