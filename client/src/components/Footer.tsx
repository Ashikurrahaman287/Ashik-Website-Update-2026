import { Linkedin } from 'lucide-react';
import { SiX, SiGithub, SiFacebook, SiSubstack } from 'react-icons/si';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Projects', href: '#contract-projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: SiX, href: 'https://x.com/Ashikur_Rhm', label: 'X (Twitter)' },
  { icon: SiGithub, href: 'https://github.com/Ashikurrahaman287', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/ashik-the-knight', label: 'LinkedIn' },
  { icon: SiFacebook, href: 'https://www.facebook.com/Ashik.Spudblocks', label: 'Facebook' },
  { icon: SiSubstack, href: 'https://ashblog.substack.com/', label: 'Substack' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-[#1F2937] bg-[#0A0F1C]" data-testid="footer-main">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-lg font-bold text-white mb-2">
              Ashikur <span className="text-[#00D4FF]">Rahaman</span>
            </p>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Founder & CEO of SpudPay. Building institutional-grade blockchain infrastructure for global cross-border payments.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs text-[#64748B] font-semibold uppercase tracking-widest mb-3">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs text-[#64748B] font-semibold uppercase tracking-widest mb-3">Connect</p>
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#111827] border border-[#1F2937] flex items-center justify-center hover:border-[#00D4FF]/30 hover:bg-[#00D4FF]/5 transition-all"
                  aria-label={s.label}
                  data-testid={`link-footer-${s.label.toLowerCase().split(' ')[0]}`}
                >
                  <s.icon className="w-4 h-4 text-[#94A3B8]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#1F2937] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748B]">
            © 2018–2026 Ashikur Rahaman. All Rights Reserved.
          </p>
          <p className="text-sm text-[#64748B]">
            Building the Future of Web3 Payments
          </p>
        </div>
      </div>
    </footer>
  );
}
