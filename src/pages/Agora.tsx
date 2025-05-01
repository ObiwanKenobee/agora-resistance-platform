
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AgoraHub from '@/components/modules/AgoraHub';

const Agora = () => {
  // Product structured data
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Decentralized Agora",
    "description": "A censorship-resistant public forum powered by IPFS and blockchain identity.",
    "brand": {
      "@type": "Brand",
      "name": "ExoMind"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Helmet>
        <title>Decentralized Agora | Censorship-Resistant Forum</title>
        <meta name="description" content="Join our censorship-resistant public forum powered by IPFS and blockchain identity. Share ideas freely and safely." />
        <meta name="keywords" content="censorship-resistant social network, decentralized forum, blockchain identity, IPFS, free speech platform" />
        <link rel="canonical" href="https://exomind.ai/agora" />
        <script type="application/ld+json">
          {JSON.stringify(productData)}
        </script>
      </Helmet>
      <AgoraHub />
    </>
  );
};

export default Agora;
