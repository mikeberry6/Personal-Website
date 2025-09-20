import { headers } from 'next/headers';
import Script from 'next/script';

declare global {
  interface Window {
    acmeAnalytics?: {
      track: (event: string, payload?: Record<string, unknown>) => void;
    };
    __ACME_ANALYTICS_ID__?: string;
  }
}

const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export function Analytics() {
  if (!analyticsId) {
    return null;
  }

  const nonce = headers().get('x-csp-nonce') ?? undefined;

  return (
    <Script id="analytics-stub" strategy="afterInteractive" nonce={nonce}>
      {`window.__ACME_ANALYTICS_ID__ = ${JSON.stringify(analyticsId)};
if (!window.acmeAnalytics) {
  window.acmeAnalytics = {
    track: (event, payload) => {
      if (process.env.NODE_ENV !== 'production') {
        console.debug('analytics event', event, payload);
      }
    }
  };
}`}
    </Script>
  );
}
