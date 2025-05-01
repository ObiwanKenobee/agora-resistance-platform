
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutSection from '@/components/modules/AboutSection';

const About = () => {
  // FAQ structured data
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ExoMind?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ExoMind is an open-source platform providing AI tools for discernment, resistance, and creating a more truthful information ecosystem. Our tools help users detect misinformation and propaganda."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Discernment Engine work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Discernment Engine uses advanced AI to analyze content for propaganda techniques and historical parallels, identifying manipulation tactics and providing contextual information."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>About ExoMind | Our Mission Against Misinformation</title>
        <meta name="description" content="Learn about ExoMind's mission to fight authoritarianism with open-source AI tools for discernment, resistance, and truth-telling." />
        <meta name="keywords" content="digital resistance tools, AI for truth, fight authoritarianism online, decentralized fact-checking" />
        <link rel="canonical" href="https://exomind.ai/about" />
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>
      </Helmet>
      <AboutSection />
    </>
  );
};

export default About;
