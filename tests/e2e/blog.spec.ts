import { test, expect } from '@playwright/test';

test('blog article renders with table of contents', async ({ page }) => {
  await page.goto('/blog');
  const firstPost = page.getByRole('link', { name: /Read / }).first();
  const href = await firstPost.getAttribute('href');
  await firstPost.click();
  await expect(page).toHaveURL(href ?? '');
  await expect(page.getByRole('navigation', { name: 'Table of contents' })).toBeVisible();
});
