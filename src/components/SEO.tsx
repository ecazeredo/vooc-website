import { Helmet } from 'react-helmet-async';
import { STORE_INFO } from '../data/websiteData';

export const SEO = ({ title, description, path = "" }: { title: string, description: string, path?: string }) => {
  const fullTitle = `${title} | Vancouver Olive Oil Company`;
  const url = `https://vooc.ca${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vancouver Olive Oil Company",
    "image": "https://vooc.ca/logo.png",
    "@id": "https://vooc.ca",
    "url": "https://vooc.ca",
    "telephone": STORE_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2571 West Broadway",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "postalCode": "V6K 2E9",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.2641737,
      "longitude": -123.164057
    },
    "openingHoursSpecification": STORE_INFO.hours.map(h => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": h.days.includes("–") ? ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] : [],
      "opens": "11:00",
      "closes": "17:00"
    })),
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};
