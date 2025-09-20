import { test, expect } from '@playwright/test';

test('theme toggle switches between light and dark', async ({ page }) => {
  await page.goto('/');
  const toggle = page.getByRole('button', { name: /activate dark mode/i });
  await toggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  const lightToggle = page.getByRole('button', { name: /activate light mode/i });
  await lightToggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});
