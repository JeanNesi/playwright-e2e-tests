import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LoginPage from '../support/pages/LoginPage';

test.describe('Login', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let loginPage: LoginPage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(BASE_URL);
  });

  test('Acessa a tela de login e realiza login com dados válidos', async () => {
    await loginPage.accessSignInPage();
    await loginPage.signInForm();
  });
});
