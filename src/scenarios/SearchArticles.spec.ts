import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LoginPage from '../support/pages/LoginPage';
import SearchArticlesPage from '../support/pages/SearchArticlesPage';

test.describe('Buscar artigos', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let searchArticlesPage: SearchArticlesPage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    searchArticlesPage = new SearchArticlesPage(page);
    await page.goto(BASE_URL);

    const login = new LoginPage(page);
    await login.accessSignInPage();
    await login.signInForm();
  });

  test('Acessa a tela de artigos e busca um artigo', async () => {
    await searchArticlesPage.accessSearchArticlesPage();
    await searchArticlesPage.searchArticlesForm();
    await searchArticlesPage.validateSuccessfulSearchArticle();
  });
});
