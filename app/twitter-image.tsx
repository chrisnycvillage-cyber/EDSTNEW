/**
 * ═══════════════════════════════════════════════════════════════════
 * DYNAMIC TWITTER IMAGE GENERATOR
 * ───────────────────────────────────────────────────────────────────
 * Premium Twitter card image for social sharing
 * "The Marketing Ecosystem That Never Sleeps"
 * ═══════════════════════════════════════════════════════════════════
 */

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'EDST - The Marketing Ecosystem That Never Sleeps';
export const size = {
  width: 1200,
  height: 675, // Twitter aspect ratio
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
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gold gradient glow behind */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(250, 204, 83, 0.15) 0%, rgba(250, 204, 83, 0.05) 40%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        
        {/* Subtle grid pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(250, 204, 83, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(250, 204, 83, 0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Top gradient fade */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: 'linear-gradient(180deg, rgba(250, 204, 83, 0.08) 0%, transparent 100%)',
          }}
        />
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '60px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Always Online Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 24px',
              borderRadius: '50px',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                boxShadow: '0 0 12px rgba(34, 197, 94, 0.8)',
              }}
            />
            <span
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#22c55e',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              Always Online
            </span>
          </div>

          {/* Main Headline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '30px',
            }}
          >
            <span
              style={{
                fontSize: '72px',
                fontWeight: '800',
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: '-2px',
              }}
            >
              The Marketing Ecosystem
            </span>
            <span
              style={{
                fontSize: '72px',
                fontWeight: '800',
                color: '#facc53',
                lineHeight: 1.1,
                letterSpacing: '-2px',
              }}
            >
              That Never Sleeps.
            </span>
          </div>

          {/* Subline */}
          <span
            style={{
              fontSize: '24px',
              color: '#9ca3af',
              marginBottom: '40px',
            }}
          >
            Everything you need to blow up — under one roof.
          </span>

          {/* EDST Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 32px',
              borderRadius: '16px',
              backgroundColor: 'rgba(250, 204, 83, 0.1)',
              border: '1px solid rgba(250, 204, 83, 0.2)',
            }}
          >
            <span
              style={{
                fontSize: '48px',
                fontWeight: '800',
                color: '#facc53',
                letterSpacing: '-2px',
              }}
            >
              EDST
            </span>
            <div
              style={{
                width: '2px',
                height: '32px',
                backgroundColor: 'rgba(250, 204, 83, 0.3)',
              }}
            />
            <span
              style={{
                fontSize: '18px',
                color: '#9ca3af',
                fontWeight: '500',
              }}
            >
              edst.com
            </span>
          </div>
        </div>

        {/* Corner accents */}
        <div
          style={{
            position: 'absolute',
            top: '30px',
            left: '30px',
            width: '60px',
            height: '60px',
            borderLeft: '2px solid rgba(250, 204, 83, 0.3)',
            borderTop: '2px solid rgba(250, 204, 83, 0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '30px',
            right: '30px',
            width: '60px',
            height: '60px',
            borderRight: '2px solid rgba(250, 204, 83, 0.3)',
            borderTop: '2px solid rgba(250, 204, 83, 0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '30px',
            width: '60px',
            height: '60px',
            borderLeft: '2px solid rgba(250, 204, 83, 0.3)',
            borderBottom: '2px solid rgba(250, 204, 83, 0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '30px',
            width: '60px',
            height: '60px',
            borderRight: '2px solid rgba(250, 204, 83, 0.3)',
            borderBottom: '2px solid rgba(250, 204, 83, 0.3)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
