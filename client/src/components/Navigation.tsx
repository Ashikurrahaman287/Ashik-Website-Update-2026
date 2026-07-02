import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#contract-projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = navItems.map((n) => n.href.slice(1));

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0F1C]/90 backdrop-blur-xl border-b border-[#1F2937]/80'
          : 'bg-transparent'
      }`}
      data-testid="navigation-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="text-base sm:text-lg font-bold text-white hover:text-[#00D4FF] transition-colors flex-shrink-0"
            data-testid="button-logo"
          >
            Ashikur <span className="text-[#00D4FF]">Rahaman</span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-[#94A3B8] hover:text-white hover:bg-[#ffffff08]'
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-px bg-[#00D4FF] rounded-full" />
                  )}
                </button>
              );
            })}
            <Button
              size="sm"
              className="ml-3 bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#0A0F1C] font-semibold text-sm px-5 hover:scale-[1.02] transition-all"
              onClick={() => scrollToSection('#contact')}
              data-testid="button-nav-cta"
            >
              Hire Me 
            </Button>
          </div>

          {/* Mobile hamburger */}
          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden text-white hover:bg-[#1F2937] w-9 h-9"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-3 space-y-0.5 border-t border-[#1F2937] pt-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-2 w-full text-left text-sm font-medium py-2.5 px-3 rounded-xl transition-all ${
                    isActive
                      ? 'text-[#00D4FF] bg-[#00D4FF]/8'
                      : 'text-[#94A3B8] hover:text-white hover:bg-[#111827]'
                  }`}
                  data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                >
                  {isActive && <span className="w-1 h-1 rounded-full bg-[#00D4FF] flex-shrink-0" />}
                  {item.label}
                </button>
              );
            })}
            <div className="pt-2">
              <Button
                className="w-full bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#0A0F1C] font-semibold"
                onClick={() => scrollToSection('#contact')}
              >
                Hire Me 
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
