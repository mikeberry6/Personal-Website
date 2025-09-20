import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 256, height: 256 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2563EB',
          borderRadius: '48px',
          fontSize: 160
        }}
      >
        ⚡
      </div>
    ),
    {
      width: size.width,
      height: size.height
    }
  );
}
