import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    include: ['tests/unit/**/*.test.tsx', 'tests/unit/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  }
});
