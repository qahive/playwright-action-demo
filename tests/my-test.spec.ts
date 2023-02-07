import { test, expect } from '@playwright/test';

test('add todo items', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  // create a new todo locator
  const newTodo = page.getByPlaceholder('What needs to be done?');

  // Create 1st todo.
  await newTodo.fill('Learn playwright');
  await newTodo.press('Enter');

  // Make sure the list only has one todo item.
  await expect(page.getByTestId('todo-title')).toHaveText([
    'Learn playwright'
  ]);
});

