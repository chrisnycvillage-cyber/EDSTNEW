/**
 * ═══════════════════════════════════════════════════════════════════
 * DYNAMIC OG IMAGE GENERATOR
 * ───────────────────────────────────────────────────────────────────
 * Premium Open Graph image for social sharing
 * "The Marketing Ecosystem That Never Sleeps"
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
          backgroundImage: 'radial-gradient(ellipse at 50% 40%, rgba(250, 204, 83, 0.12) 0%, transparent 60%)',
        }}
      >
        {/* Always Online Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 28px',
            borderRadius: '50px',
            backgroundColor: 'rgba(34, 197, 94, 0.15)',
            border: '2px solid rgba(34, 197, 94, 0.4)',
            marginBottom: '50px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
            }}
          />
          <span
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#22c55e',
              letterSpacing: '3px',
            }}
          >
            ALWAYS ONLINE
          </span>
        </div>

        {/* Main Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <span
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
            }}
          >
            The Marketing Ecosystem
          </span>
          <span
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#facc53',
              lineHeight: 1.15,
            }}
          >
            That Never Sleeps.
          </span>
        </div>

        {/* Subline */}
        <span
          style={{
            fontSize: '26px',
            color: '#9ca3af',
            marginBottom: '50px',
          }}
        >
          Everything you need to blow up — under one roof.
        </span>

        {/* EDST Logo Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px 40px',
            borderRadius: '20px',
            backgroundColor: 'rgba(250, 204, 83, 0.1)',
            border: '2px solid rgba(250, 204, 83, 0.25)',
          }}
        >
          <span
            style={{
              fontSize: '52px',
              fontWeight: 800,
              color: '#facc53',
              letterSpacing: '-2px',
            }}
          >
            EDST
          </span>
          <div
            style={{
              width: '3px',
              height: '40px',
              backgroundColor: 'rgba(250, 204, 83, 0.4)',
              borderRadius: '2px',
            }}
          />
          <span
            style={{
              fontSize: '22px',
              color: '#9ca3af',
              fontWeight: 500,
            }}
          >
            edst.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
