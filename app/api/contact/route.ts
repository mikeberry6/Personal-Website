import { NextResponse } from 'next/server';

import { logger } from '@/lib/logger';
import { rateLimit } from '@/lib/rate-limit';
import { contactSchema } from '@/lib/schemas';

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '0.0.0.0';

  const rateResult = rateLimit(ip);
  if (!rateResult.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(rateResult.retryAfter ?? 600)
        }
      }
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const result = contactSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
  }

  const { hp, ...data } = result.data;

  if (hp && hp.trim().length > 0) {
    logger.warn('Honeypot triggered', { ip });
    return NextResponse.json({ error: 'Invalid submission.' }, { status: 400 });
  }

  logger.info('Contact request received', { ip, email: data.email });

  return NextResponse.json({ ok: true });
}
