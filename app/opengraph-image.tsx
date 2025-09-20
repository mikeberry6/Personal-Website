import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  const title = 'Acme';
  const tagline = 'Purpose-built software that ships';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0B1020 0%, #2563EB 70%)',
          color: '#FFFFFF',
          padding: '80px'
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700 }}>⚡ {title}</div>
        <div style={{ fontSize: 36, maxWidth: '720px', lineHeight: 1.3 }}>{tagline}</div>
        <div style={{ display: 'flex', gap: '16px', fontSize: 24, opacity: 0.8 }}>
          <span>Product Strategy</span>
          <span>•</span>
          <span>Delivery Automation</span>
          <span>•</span>
          <span>Enterprise Governance</span>
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height
    }
  );
}
