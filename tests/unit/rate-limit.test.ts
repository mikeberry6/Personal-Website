import { describe, expect, it } from 'vitest';

import { rateLimit, resetRateLimit } from '@/lib/rate-limit';

describe('rateLimit', () => {
  it('limits requests after threshold', () => {
    resetRateLimit();
    const ip = '1.1.1.1';
    for (let i = 0; i < 5; i += 1) {
      const result = rateLimit(ip);
      expect(result.success).toBe(true);
    }
    const blocked = rateLimit(ip);
    expect(blocked.success).toBe(false);
    expect(blocked.retryAfter).toBeGreaterThan(0);
  });
});
