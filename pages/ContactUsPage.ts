import { expect, Locator, Page } from '@playwright/test';

export class ContactUsPage {

  constructor(private page: Page) {}

  async fillForm(
    firstName: string,
    lastName: string,
    email: string,
    comment: string
  ) {
    // await this.page.locator('.feedback-input').first().click({'button': 'right'});
    // await this.page.waitForTimeout(2000);
    // await this.page.keyboard.press('Escape');
    // await this.page.locator('body').click({ position: { x: 10, y: 10 } });
    // await this.page.waitForTimeout(2000);
    // await this.page.keyboard.press('Meta+v');
    await this.page.locator('.feedback-input').first().fill(firstName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    // await this.page.mouse.click(500, 500);
    // await this.page.locator('.feedback-input').first().click();
    await this.page.locator('.feedback-input').nth(2).fill(email);
    await this.page.locator('.feedback-input').nth(3).fill(comment);
  }

  async verifyForm() {
    await expect(this.page.locator('#form_buttons input[type="submit"]')).toHaveValue('SUBMIT');
    await expect(this.page.locator('.feedback-input').first()).toHaveAttribute('placeholder', 'First Name');
    await expect(this.page.getByPlaceholder('Last Name')).toBeEmpty();
    await expect(this.page.locator('.feedback-input').nth(2)).toHaveClass('feedback-input');
    await expect(this.page.locator('.feedback-input').nth(3)).toBeEditable();
  }

  async submit() {
    await this.page.locator('#form_buttons input[type="submit"]').click();
  }

  async goBackToHomepage() {
    await this.page.getByText('← Back to Homepage').click();
  }

  async close() {
    await this.page.close();
  }
}