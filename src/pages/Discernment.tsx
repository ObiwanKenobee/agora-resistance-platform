
import React from 'react';
import { Helmet } from 'react-helmet-async';
import DiscernmentEngine from '@/components/modules/DiscernmentEngine';

const Discernment = () => {
  // Article structured data
  const articleData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Discernment Engine",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered tool for detecting propaganda and misinformation in content and news."
  };

  return (
    <>
      <Helmet>
        <title>Discernment Engine | AI-Powered Propaganda Detection</title>
        <meta name="description" content="Use our AI-powered Discernment Engine to analyze content for propaganda techniques and historical parallels." />
        <meta name="keywords" content="propaganda detection, truth detection AI, misinformation analysis, fact-checking AI, discernment engine" />
        <link rel="canonical" href="https://exomind.ai/discernment" />
        <script type="application/ld+json">
          {JSON.stringify(articleData)}
        </script>
      </Helmet>
      <DiscernmentEngine />
    </>
  );
};

export default Discernment;
