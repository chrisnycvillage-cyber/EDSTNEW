/**
 * ═══════════════════════════════════════════════════════════════════
 * TWITTER IMAGE - MATCHES HOMEPAGE HERO STYLE
 * ───────────────────────────────────────────────────────────────────
 * Big headline across the screen, just like the homepage.
 * ═══════════════════════════════════════════════════════════════════
 */

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'EDST - The Marketing Ecosystem That Never Sleeps';
export const size = {
  width: 1200,
  height: 675,
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
        {/* Gold glow behind text */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '900px',
            height: '500px',
            background: 'radial-gradient(ellipse, rgba(250, 204, 83, 0.15) 0%, rgba(250, 204, 83, 0.05) 40%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Always Online Badge - matching homepage style */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '50px',
            backgroundColor: 'rgba(30, 30, 35, 0.6)',
            border: '1px solid rgba(100, 100, 110, 0.3)',
            marginBottom: '50px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
            }}
          />
          <span
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#a1a1aa',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
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
              fontSize: '82px',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              textAlign: 'center',
            }}
          >
            The Marketing Ecosystem
          </span>
          <span
            style={{
              fontSize: '82px',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #facc53 0%, #f5d78e 50%, #facc53 100%)',
              backgroundClip: 'text',
              color: '#facc53',
              lineHeight: 1.1,
              textAlign: 'center',
            }}
          >
            That Never Sleeps.
          </span>
        </div>

        {/* Subline */}
        <span
          style={{
            fontSize: '24px',
            color: '#71717a',
            marginTop: '40px',
            textAlign: 'center',
          }}
        >
          Everything you need to blow up — under one roof.
        </span>

        {/* Bottom URL */}
        <span
          style={{
            position: 'absolute',
            bottom: '30px',
            fontSize: '18px',
            color: '#52525b',
            letterSpacing: '1px',
          }}
        >
          edst.com
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
