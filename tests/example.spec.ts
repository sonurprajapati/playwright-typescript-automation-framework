import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactUsPage } from '../pages/ContactUsPage';
import { ToDoPage } from '../pages/ToDoPage';

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
});

test.only('Contact Us Form', async ({ page }) => {
  const homePage = new HomePage(page);
  const newPage = await homePage.clickContactUs();
  const contactUsPage = new ContactUsPage(newPage);
  await contactUsPage.verifyForm();
  await contactUsPage.fillForm('Sonu', 'Prajapati', 'sonurprajapati1112@gmail.com', 'Test Comment');
  await contactUsPage.submit();
  await contactUsPage.goBackToHomepage();
});

test('todo list', async ({ page }) => {
  const homePage = new HomePage(page);
  const todoPage = await homePage.clickToDoList();
  const toDoPageFunction = new ToDoPage(todoPage);
  await toDoPageFunction.addTodo('Home Notes');
  await toDoPageFunction.deleteTodo();
  await todoPage.close();
});

test('date picker', async ({ page }) => {
  const [datePage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByText('DATEPICKER').first().click()
  ]);
  await datePage.waitForLoadState('load');
  await datePage.locator('#datepicker').click();
  await datePage.locator('.datepicker-switch').first().click();
  await datePage.locator('.datepicker-switch + .next').nth(1).click();
  await datePage.getByText('Dec').click();
  await datePage.locator(".datepicker .table-condensed td[class='day']").getByText('29').click();
  await datePage.close();
});

test('dropdowns, checkboxes & radios', async ({ page }) => {
  const [dropdownPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByText('DROPDOWNS, CHECKBOXES & RADIOS').first().click()
  ]);
  await dropdownPage.waitForLoadState('load');
  await dropdownPage.locator('#dropdowm-menu-1').selectOption('python');
  await dropdownPage.getByLabel('Option 2').check();
  await dropdownPage.getByLabel('Option 3').uncheck();
  await dropdownPage.locator("input[value='green']").click();
  await expect(dropdownPage.locator("input[value='cabbage']")).toBeDisabled();
  await expect(dropdownPage.locator('#fruit-selects option[value="orange"]')).toBeDisabled();
  await dropdownPage.close();
});

test('drag, drop, hover, double click', async ({ page }) => {
  const [dropdownPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByText('Drag, Drop, Hover, Double Click').first().click()
  ]);
  await dropdownPage.waitForLoadState('load');
  await dropdownPage.locator('#draggable').dragTo(dropdownPage.locator('#droppable'))
  await dropdownPage.locator('#double-click').dblclick();
  await dropdownPage.locator('#click-box').hover();
  await dropdownPage.mouse.down();
  await dropdownPage.mouse.up();
  await dropdownPage.getByText('Hover Over Me First!').hover();
  await dropdownPage.close();
});

test('iframe', async ({ page }) => {
  const [framePage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByText('IFRAME').first().click()
  ]);
  await framePage.waitForLoadState('load');
  const frame = framePage.frameLocator('#frame');
  await frame.getByText('Our Products').click();
  await framePage.waitForTimeout(1000);
  await framePage.close();
});

test('file upload', async ({ page }) => {
  const [filePage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByText('FILE UPLOAD').first().click()
  ]);
  await filePage.waitForLoadState('load');
  await filePage.locator('#myFile').setInputFiles('assets/file.txt');
  filePage.once('dialog', async dialog => {
    await dialog.accept();
  });
  await filePage.getByRole('button', {name: 'submit'}).click();
  await filePage.close();
});
