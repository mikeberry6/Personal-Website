import { test, expect } from '@playwright/test';

test.describe('Contact form', () => {
  test('submits successfully', async ({ page }) => {
    await page.goto('/contact');
    await page.getByLabel('Full name').fill('Jordan Client');
    await page.getByLabel('Work email').fill('jordan@example.com');
    await page.getByLabel('What should we know?').fill('We would like to explore a rollout this quarter.');
    await page.getByRole('button', { name: 'Send message' }).click();
    await expect(page.getByText('Thanks for reaching out')).toBeVisible();
  });

  test('shows validation errors', async ({ page }) => {
    await page.goto('/contact');
    await page.getByLabel('Full name').fill('Jordan Client');
    await page.getByRole('button', { name: 'Send message' }).click();
    await expect(page.getByText('Enter a valid email address')).toBeVisible();
  });
});
