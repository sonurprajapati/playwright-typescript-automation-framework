import { Page } from "@playwright/test";

export class TodoPage {
    constructor(private page: Page) {}

    async addTodo(todo: string) {
        await this.page.getByPlaceholder('Add new todo').fill(todo);
        await this.page.keyboard.press('Enter');
    }
    async deleteTodo() {
        await this.page.locator('#container ul li span i').last().hover();
        await this.page.locator('#container ul li span i').last().click();
    }
}