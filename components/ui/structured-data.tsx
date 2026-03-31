import { StructuredDataProps, renderSchemaScript } from "@/lib/schemas";

/**
 * Structured Data Component
 * Renders JSON-LD schema in the head of the page
 * Usage: <StructuredData schema={getOrganizationSchema()} />
 */
export function StructuredData({ schema }: { schema: StructuredDataProps }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: renderSchemaScript(schema),
      }}
    />
  );
}

export default StructuredData;
