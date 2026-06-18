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
  const [loaderDone, setLoaderDone] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaderDone(true);
  }, []);

  return (
    <>
      <LoaderAnimation onComplete={handleLoaderComplete} />
      <ScrollProgressBar />
      <BackToTop />

      <div
        className="relative min-h-screen overflow-hidden"
        style={{
          opacity: loaderDone ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <BlockchainBackground />
        <TechParticles />
        <Navigation />

        <main className="relative z-10">
          <HeroSection loaderDone={loaderDone} />
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
