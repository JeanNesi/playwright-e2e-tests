import { Page } from '@playwright/test';
import BasePage from './BasePage';
import SearchArticlesElements from '../elements/SearchArticlesElements';

export default class SearchArticlesPage extends BasePage {
  readonly searchArticlesElements: SearchArticlesElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.searchArticlesElements = new SearchArticlesElements(page);
  }

  async accessSearchArticlesPage(): Promise<void> {
    await this.searchArticlesElements.getLinkToSearchArticles().click();
    await this.searchArticlesElements.validateSuccessfulRedirectToSearchArticles();
  }

  async searchArticlesForm(): Promise<void> {
    await this.searchArticlesElements.fillSearchArticleForm();
  }

  async validateSuccessfulSearchArticle(): Promise<void> {
    await this.searchArticlesElements.validateSuccessfulSearchArticle();
  }
}
