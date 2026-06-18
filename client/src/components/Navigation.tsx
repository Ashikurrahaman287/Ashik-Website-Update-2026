import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Projects', href: '#contract-projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          ? 'bg-[#0A0F1C]/90 backdrop-blur-xl border-b border-[#1F2937]'
          : 'bg-transparent'
      }`}
      data-testid="navigation-main"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('#hero')}
            className="text-lg font-bold text-white hover:text-[#00D4FF] transition-colors"
            data-testid="button-logo"
          >
            Ashikur <span className="text-[#00D4FF]">Rahaman</span>
          </button>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors"
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#0A0F1C] font-semibold text-sm px-5 ml-2 hover:scale-[1.02] transition-all"
              onClick={() => scrollToSection('#contact')}
              data-testid="button-nav-cta"
            >
              Work With Me
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden text-white hover:bg-[#1F2937]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-1 border-t border-[#1F2937] pt-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-sm font-medium text-[#94A3B8] hover:text-white transition-colors py-2 px-2 rounded-lg hover:bg-[#111827]"
                data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              className="w-full mt-3 bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#0A0F1C] font-semibold"
              onClick={() => scrollToSection('#contact')}
            >
              Work With Me
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
