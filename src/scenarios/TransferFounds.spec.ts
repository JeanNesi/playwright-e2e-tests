import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LoginPage from '../support/pages/LoginPage';
import TransferFoundsPage from '../support/pages/TransferFoundsPage';

test.describe('Transferências', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let transferFoundsPage: TransferFoundsPage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    transferFoundsPage = new TransferFoundsPage(page);
    await page.goto(BASE_URL);

    const login = new LoginPage(page);
    await login.accessSignInPage();
    await login.signInForm();
  });

  test('Acessa a tela de transferências e realiza uma transferência válida', async () => {
    await transferFoundsPage.accessTransferFoundsPage();
    await transferFoundsPage.tranferFoundsForm();
    await transferFoundsPage.validateSuccessfulTransfer();
  });
});
