import { execSync } from 'node:child_process';

if (process.env.CI) {
  console.log('Skipping Playwright installation in CI.');
  process.exit(0);
}

try {
  execSync('npx playwright install --with-deps', { stdio: 'inherit' });
} catch (error) {
  console.warn('Playwright installation skipped or failed:', error.message);
}
