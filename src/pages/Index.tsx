
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/modules/HeroSection';
import ModulesPreview from '@/components/modules/ModulesPreview';

const Index = () => {
  // Structured data for rich results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ExoMind",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Open-source AI tools for discernment, resistance, and creating a more truthful information ecosystem."
  };

  return (
    <>
      <Helmet>
        <title>ExoMind - Decentralized Intelligence Against Authoritarianism</title>
        <meta name="description" content="Open-source AI tools for discernment, resistance, and creating a more truthful information ecosystem. Fight misinformation with our decentralized platform." />
        <meta name="keywords" content="AI to fight fascism, resistance platform against authoritarianism, discernment engine, truth detection AI, decentralized fact-checking tool" />
        <link rel="canonical" href="https://exomind.ai" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="min-h-screen">
        <HeroSection />
        <ModulesPreview />
      </div>
    </>
  );
};

export default Index;
