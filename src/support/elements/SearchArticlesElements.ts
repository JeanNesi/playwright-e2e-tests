import { Locator, Page, expect } from '@playwright/test';
import BaseElements from './BaseElements';

export default class SearchArticlesElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getLinkToSearchArticles(): Locator {
    return this.page.locator('#MenuHyperLink4');
  }

  async validateSuccessfulRedirectToSearchArticles() {
    await this.page.waitForURL('https://demo.testfire.net/bank/queryxpath.jsp');
  }

  async fillSearchArticleForm() {
    const input = this.page.locator('input[name="query"]').nth(1);
    await input.focus();
    await input.fill('Jesus');

    await this.page.click('#Button1');
  }

  async validateSuccessfulSearchArticle() {
    const tForm = await this.page.locator('#QueryXpath').textContent();
    expect(tForm).toContain('Jesus was Born');
  }
}
