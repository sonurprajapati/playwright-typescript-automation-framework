import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://webdriveruniversity.com/index.html', { waitUntil: 'domcontentloaded' });
  }

  async clickContactUs() {
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.getByText('CONTACT US').first().click()
    ]);
    await newPage.waitForLoadState('load');
    return newPage;
  }
  async clickToDoList() {
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.getByText('TO DO LIST').first().click()
    ]);
    await newPage.waitForLoadState('load');
    return newPage;
  }
}