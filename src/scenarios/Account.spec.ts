import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import AccountPage from '../support/pages/AccountPage';
import LoginPage from '../support/pages/LoginPage';

test.describe('Visualização de detalhes da conta', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let accountPage: AccountPage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    accountPage = new AccountPage(page);
    await page.goto(BASE_URL);

    const login = new LoginPage(page);
    await login.accessSignInPage();
    await login.signInForm();
  });

  test('Seleciona cartão de crédito e Redireciona para a tela de detalhes da conta', async () => {
    await accountPage.selectAccount();
    await accountPage.goToAccount();
  });
});
