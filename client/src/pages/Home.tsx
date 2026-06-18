import { useState, useCallback } from 'react';
import BlockchainBackground from '@/components/BlockchainBackground';
import TechParticles from '@/components/TechParticles';
import Navigation from '@/components/Navigation';
import LoaderAnimation from '@/components/LoaderAnimation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TrustedBySection from '@/components/TrustedBySection';
import SkillsSection from '@/components/SkillsSection';
import VenturesSection from '@/components/VenturesSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ContractProjectsSection from '@/components/ContractProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AwardsSection from '@/components/AwardsSection';
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
          <HeroSection />
          <TrustedBySection />
          <AboutSection />
          <VenturesSection />
          <ExperienceTimeline />
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
