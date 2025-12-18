'use client';

/**
 * ═══════════════════════════════════════════════════════════════════
 * JSON-LD SCHEMA COMPONENT
 * ───────────────────────────────────────────────────────────────────
 * Inject JSON-LD structured data into pages
 * ═══════════════════════════════════════════════════════════════════
 */

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0),
      }}
    />
  );
}

/**
 * Multiple schemas wrapper
 */
export function JsonLdMultiple({ schemas }: { schemas: Record<string, unknown>[] }) {
  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
    </>
  );
}




