'use client';

import Head from 'next/head';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import BridgeSection from '@/components/BridgeSection';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ProgramsSection from '@/components/ProgramsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ReachSection from '@/components/ReachSection';
import OptionsSection from '@/components/OptionsSection';
import BridgeSectionFAQ from '@/components/BridgeSectionFAQ';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cendes-landing-page.vercel.app';
  const title = 'CENDES - Prevención de Violencia Sexual y Bullying en Escuelas | México 2026';
  const description = 'Protege a tu comunidad escolar con programas especializados de prevención de violencia sexual, bullying y acoso. 10 años de experiencia, +500,000 personas impactadas, +1,500 escuelas transformadas. Programas educativos a través del arte para CDMX y toda la República Mexicana.';
  const keywords = 'prevención violencia sexual, prevención bullying, programas escolares México, educación sexual infantil, prevención acoso escolar, CENDES, seguridad escolar, violencia de género, educación emocional, talleres escolares México, prevención abuso infantil, programas educativos arte, CDMX escuelas, capacitación docentes';
  
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="CENDES - Centro de Desarrollo y Educación Social" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="MX" />
        <meta name="geo.placename" content="México" />
        <meta name="geo.position" content="19.4326;-99.1332" />
        <meta name="ICBM" content="19.4326, -99.1332" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}/images/cendes-og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="CENDES" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${siteUrl}/images/cendes-og-image.jpg`} />
        
        {/* Additional SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CENDES - Centro de Desarrollo y Educación Social',
              url: siteUrl,
              logo: `${siteUrl}/images/CENDES.svg`,
              description: 'Organización especializada en prevención de violencia sexual, bullying y acoso en escuelas de México',
              foundingDate: '2016',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'MX',
                addressRegion: 'CDMX'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+52-55-2788-2274',
                contactType: 'Customer Service',
                availableLanguage: ['Spanish']
              },
              sameAs: [
                'https://www.facebook.com/fundacioncendes',
                'https://www.instagram.com/fundacioncendes',
                'https://www.cendes.com.mx'
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'CENDES',
              url: siteUrl,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteUrl}/?s={search_term_string}`,
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: '¿Cuánto cuesta contratar un programa de CENDES?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Los costos varían según el programa, número de alumnos y ubicación de tu escuela. Contáctanos para una cotización personalizada sin compromiso.'
                  }
                },
                {
                  '@type': 'Question',
                  name: '¿Los programas están avalados oficialmente?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Sí, CENDES trabaja de la mano con instancias como SIPINNA y DIF Nacional. Nuestros programas cumplen con los lineamientos de la SEP.'
                  }
                },
                {
                  '@type': 'Question',
                  name: '¿Cuánto tiempo dura cada programa?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Depende del formato elegido. Desde una sesión de 60-90 minutos (cine educativo) hasta talleres de varias sesiones. Todo se adapta a tus necesidades.'
                  }
                }
              ]
            })
          }}
        />
      </Head>
      
      <div className="overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <BridgeSection />
        <SolutionSection />
        <HowItWorksSection />
        <ProgramsSection />
        <TestimonialsSection />
        <ReachSection />
        <OptionsSection />
        <BridgeSectionFAQ />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </div>
    </>
  );
}
