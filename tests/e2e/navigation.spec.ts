import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('header links navigate', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await page.getByRole('link', { name: 'Pricing' }).click();
    await expect(page).toHaveURL(/\/pricing$/);
    await page.getByRole('link', { name: 'Blog' }).click();
    await expect(page).toHaveURL(/\/blog$/);
  });

  test('language switch opens Spanish home', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Ver en español' }).click();
    await expect(page).toHaveURL(/\/es$/);
    await expect(page.getByRole('heading', { name: /Software diseñado/ })).toBeVisible();
  });
});
