/**
 * ═══════════════════════════════════════════════════════════════════
 * DYNAMIC OG IMAGE - MINIMAL & IMPACTFUL
 * ───────────────────────────────────────────────────────────────────
 * Clean, bold, sexy. Just the essentials.
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
          backgroundColor: '#020309',
          backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(250, 204, 83, 0.08) 0%, transparent 50%)',
        }}
      >
        {/* Always Online Badge - small, top */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
            }}
          />
          <span
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#22c55e',
              letterSpacing: '2px',
            }}
          >
            ALWAYS ONLINE
          </span>
        </div>

        {/* EDST Logo - Big & Bold */}
        <span
          style={{
            fontSize: '140px',
            fontWeight: 800,
            color: '#facc53',
            letterSpacing: '-6px',
            marginBottom: '30px',
          }}
        >
          EDST
        </span>

        {/* Main Headline - Clean */}
        <span
          style={{
            fontSize: '48px',
            fontWeight: 700,
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          The Marketing Ecosystem
        </span>
        <span
          style={{
            fontSize: '48px',
            fontWeight: 700,
            color: 'rgba(255, 255, 255, 0.6)',
            textAlign: 'center',
          }}
        >
          That Never Sleeps.
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
