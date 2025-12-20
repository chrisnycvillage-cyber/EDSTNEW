/**
 * ═══════════════════════════════════════════════════════════════════
 * OG IMAGE - MAXIMIZED AESTHETIC
 * ───────────────────────────────────────────────────────────────────
 * Clean, bold, premium. Big headline + prominent Always Online.
 * ═══════════════════════════════════════════════════════════════════
 */

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'EDST - The Marketing Ecosystem That Never Sleeps';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          position: 'relative',
        }}
      >
        {/* Gold glow behind text - larger and more prominent */}
        <div
          style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '1000px',
            height: '600px',
            background: 'radial-gradient(ellipse, rgba(250, 204, 83, 0.18) 0%, rgba(250, 204, 83, 0.06) 35%, transparent 65%)',
            borderRadius: '50%',
          }}
        />

        {/* Always Online Badge - BIGGER and more prominent */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 28px',
            borderRadius: '50px',
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            border: '1.5px solid rgba(34, 197, 94, 0.4)',
            marginBottom: '45px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              boxShadow: '0 0 12px rgba(34, 197, 94, 0.6)',
            }}
          />
          <span
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#22c55e',
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            Always Online
          </span>
        </div>

        {/* Main Headline - BIG across the screen */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0px',
          }}
        >
          <span
            style={{
              fontSize: '86px',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            The Marketing Ecosystem
          </span>
          <span
            style={{
              fontSize: '86px',
              fontWeight: 700,
              color: '#facc53',
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            That Never Sleeps.
          </span>
        </div>

        {/* Subline - clean and subtle */}
        <span
          style={{
            fontSize: '26px',
            color: '#71717a',
            marginTop: '45px',
            textAlign: 'center',
          }}
        >
          Everything you need to blow up — under one roof.
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
