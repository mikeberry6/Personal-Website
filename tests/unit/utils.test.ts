import { describe, expect, it } from 'vitest';

import { formatDate, readingTime, slugify } from '@/lib/utils';

describe('utils', () => {
  it('slugify converts text to kebab-case', () => {
    expect(slugify('Launch Readiness Checklist')).toBe('launch-readiness-checklist');
  });

  it('formatDate outputs formatted date', () => {
    expect(formatDate('2024-01-15')).toBe('Jan 15, 2024');
  });

  it('readingTime estimates minutes', () => {
    const text = 'word '.repeat(450);
    expect(readingTime(text)).toBe('2 min read');
  });
});
