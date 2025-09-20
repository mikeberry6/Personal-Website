import { describe, expect, it } from 'vitest';

import { contactSchema } from '@/lib/schemas';

describe('contactSchema', () => {
  it('validates a correct payload', () => {
    const result = contactSchema.safeParse({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      message: 'We would like to learn more about your enterprise offering.',
      hp: ''
    });
    expect(result.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const result = contactSchema.safeParse({
      name: 'Invalid',
      email: 'invalid-email',
      message: 'Please contact me',
      hp: ''
    });
    expect(result.success).toBe(false);
  });
});
