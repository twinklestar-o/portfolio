import React from 'react';
import { portfolioData } from '../data/portfolio';

const JsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": portfolioData.name,
    "jobTitle": "Software Developer",
    "url": portfolioData.contact.portfolio,
    "sameAs": [
      portfolioData.contact.github,
      portfolioData.contact.linkedin
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Laguboti",
      "addressCountry": "Indonesia"
    },
    "description": portfolioData.about,
    "alumniOf": "Institut Teknologi Del"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLd;
