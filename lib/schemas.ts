/**
 * Structured Data (JSON-LD) Schemas for SEO
 * Used for rich snippets and search engine optimization
 */

export interface StructuredDataProps {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

/**
 * Organization Schema
 * Helps Google understand your organization
 */
export function getOrganizationSchema(): StructuredDataProps {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GeoJogos",
    url: "https://www.geojogos.com.br",
    description:
      "Estúdio de jogos educacionais especializado em desenvolvimento de jogos personalizados para educação em Geografia",
    logo: "https://www.geojogos.com.br/images/geojogos-logo.png",
    // sameAs: [
    // //   "https://twitter.com/geojogos",
    // //   "https://instagram.com/geojogos",
    // //   "https://linkedin.com/company/geojogos",
    // ],
    contact: {
      "@type": "ContactPoint",
      //   telephone: "+55-00-0000-0000",
      contactType: "Customer Support",
      email: "fabio@geojogos.com",
    },
  };
}

/**
 * LocalBusiness Schema
 * For local SEO optimization
 */
export function getLocalBusinessSchema(): StructuredDataProps {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "GeoJogos",
    image: "https://www.geojogos.com.br/images/geojogos-logo.png",
    description:
      "Estúdio de jogos educacionais especializado em desenvolvimento de jogos personalizados para educação em Geografia",
    url: "https://www.geojogos.com.br",
    // telephone: "+55-00-0000-0000",
    email: "fabio@geojogos.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Online",
      addressLocality: "Campina Grande",
      addressRegion: "PB",
      //   postalCode: "00000-000",
      addressCountry: "BR",
    },
    areaServed: "BR",
    priceRange: "$$",
  };
}

/**
 * Service Schema
 * For educational services/games
 */
export function getServiceSchema(
  serviceName: string,
  description: string,
  serviceArea = "BR",
): StructuredDataProps {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "Organization",
      name: "GeoJogos",
      url: "https://www.geojogos.com.br",
    },
    serviceType: "Educational Game Development",
    areaServed: serviceArea,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://www.geojogos.com.br",
    },
  };
}

/**
 * Game/Product Schema
 * For individual game pages
 */
export function getGameSchema(
  gameName: string,
  description: string,
  image: string,
  rating: number = 4.8,
  reviewCount: number = 0,
): StructuredDataProps {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: gameName,
    description: description,
    image: image,
    brand: {
      "@type": "Brand",
      name: "GeoJogos",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      ratingCount: reviewCount || 1,
    },
    offers: {
      "@type": "Offer",
      url: "https://www.geojogos.com.br",
      priceCurrency: "BRL",
      price: "Sob consulta",
    },
  };
}

/**
 * WebPage Schema
 * For individual pages with breadcrumbs
 */
export function getWebPageSchema(
  pageTitle: string,
  pageDescription: string,
  pageUrl: string,
  breadcrumbs: Array<{ name: string; url: string }>,
): StructuredDataProps {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    },
  };
}

/**
 * EducationalOrganization Schema
 * For emphasizing educational focus
 */
export function getEducationalOrganizationSchema(): StructuredDataProps {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "GeoJogos",
    url: "https://www.geojogos.com.br",
    description:
      "Estúdio especializado em desenvolvimento de jogos educacionais para Geografia",
    image: "https://www.geojogos.com.br/images/geojogos-logo.png",
    // telephone: "+55-00-0000-0000",
    email: "fabio@geojogos.com",
    // sameAs: ["https://twitter.com/geojogos", "https://instagram.com/geojogos"],
    logo: {
      "@type": "ImageObject",
      url: "https://www.geojogos.com.br/images/geojogos-logo.png",
    },
  };
}

/**
 * FAQPage Schema
 * For FAQ sections
 */
export function getFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
): StructuredDataProps {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Render schema as JSON-LD script
 */
export function renderSchemaScript(schema: StructuredDataProps): string {
  return JSON.stringify(schema);
}
