import Head from 'next/head';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { HowItWorks } from '@/components/HowItWorks';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>DocGuard - Documentos Jurídicos em 5 Minutos</title>
      </Head>

      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <HowItWorks />
      <CtaSection />
      <Footer />
    </div>
  );
}