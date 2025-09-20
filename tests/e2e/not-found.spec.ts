import { test, expect } from '@playwright/test';

test('renders 404 page', async ({ page }) => {
  const response = await page.goto('/does-not-exist');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: /off the roadmap/i })).toBeVisible();
});
