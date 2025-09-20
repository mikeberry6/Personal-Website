const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const store = new Map<string, number[]>();

export function rateLimit(ip: string): { success: boolean; retryAfter?: number } {
  const now = Date.now();
  const timestamps = store.get(ip)?.filter((timestamp) => now - timestamp < WINDOW_MS) ?? [];

  if (timestamps.length >= MAX_REQUESTS) {
    const retryAfter = WINDOW_MS - (now - timestamps[0]);
    store.set(ip, timestamps);
    return { success: false, retryAfter: Math.ceil(retryAfter / 1000) };
  }

  timestamps.push(now);
  store.set(ip, timestamps);

  return { success: true };
}

export function resetRateLimit() {
  store.clear();
}
