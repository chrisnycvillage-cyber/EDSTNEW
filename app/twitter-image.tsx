/**
 * ═══════════════════════════════════════════════════════════════════
 * DYNAMIC TWITTER IMAGE GENERATOR
 * ───────────────────────────────────────────────────────────────────
 * Generates Twitter card images for social sharing
 * ═══════════════════════════════════════════════════════════════════
 */

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'EDST - Social Media Growth & Viral Marketing Agency';
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
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(250, 204, 83, 0.1) 0%, transparent 70%)',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(180deg, rgba(250, 204, 83, 0.05) 0%, transparent 50%)',
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
            padding: '40px',
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
            }}
          >
            <span
              style={{
                fontSize: '80px',
                fontWeight: 'bold',
                color: '#facc53',
                letterSpacing: '-4px',
              }}
            >
              EDST
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '12px',
              }}
            >
              Social Media Growth Agency
            </span>
            <span
              style={{
                fontSize: '28px',
                color: '#9ca3af',
                marginBottom: '24px',
              }}
            >
              The Marketing Ecosystem That Never Sleeps
            </span>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              marginTop: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#facc53' }}>30K+</span>
              <span style={{ fontSize: '16px', color: '#9ca3af' }}>Clients</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#facc53' }}>20B+</span>
              <span style={{ fontSize: '16px', color: '#9ca3af' }}>Impressions</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#facc53' }}>37+</span>
              <span style={{ fontSize: '16px', color: '#9ca3af' }}>Countries</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ fontSize: '18px', color: '#6b7280' }}>edst.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}



