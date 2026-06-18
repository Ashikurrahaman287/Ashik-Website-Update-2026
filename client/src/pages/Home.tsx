import { useState, useCallback } from 'react';
import BlockchainBackground from '@/components/BlockchainBackground';
import TechParticles from '@/components/TechParticles';
import Navigation from '@/components/Navigation';
import LoaderAnimation from '@/components/LoaderAnimation';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import BackToTop from '@/components/BackToTop';
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedBySection';
import AboutSection from '@/components/AboutSection';
import VenturesSection from '@/components/VenturesSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ServicesSection from '@/components/ServicesSection';
import SkillsSection from '@/components/SkillsSection';
import ContractProjectsSection from '@/components/ContractProjectsSection';
import AwardsSection from '@/components/AwardsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [countersReady, setCountersReady] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    // Step 1: fade in the hero page
    setHeroVisible(true);
    // Step 2: start counters after the hero's 500ms fade-in + a clear pause
    setTimeout(() => setCountersReady(true), 1000);
  }, []);

  return (
    <>
      <LoaderAnimation onComplete={handleLoaderComplete} />
      <ScrollProgressBar />
      <BackToTop />

      <div
        className="relative min-h-screen overflow-hidden"
        style={{
          opacity: heroVisible ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <BlockchainBackground />
        <TechParticles />
        <Navigation />

        <main className="relative z-10">
          <HeroSection loaderDone={countersReady} />
          <TrustedBySection />
          <AboutSection />
          <VenturesSection />
          <ExperienceTimeline />
          <ServicesSection />
          <SkillsSection />
          <ContractProjectsSection />
          <AwardsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
