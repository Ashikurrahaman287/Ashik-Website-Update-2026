import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Handshake,
  Code2,
  BarChart3,
  Users,
  Lightbulb,
  Globe,
} from 'lucide-react';

const services = [
  {
    icon: Handshake,
    title: 'Web3 Business Development',
    description:
      'End-to-end BD strategy for blockchain projects — from exchange listing negotiations and token launch partnerships to investor relations and ecosystem growth.',
    tags: ['Listing Strategy', 'Token Launches', 'Investor Relations'],
    accent: '#00D4FF',
  },
  {
    icon: Code2,
    title: 'Blockchain Product Engineering',
    description:
      'Full-stack dApp and smart contract development. From DeFi protocols and NFT platforms to cross-border payment rails built on EVM-compatible chains.',
    tags: ['Solidity', 'dApps', 'Smart Contracts', 'DeFi'],
    accent: '#6366F1',
  },
  {
    icon: BarChart3,
    title: 'Exchange Partnerships & Listings',
    description:
      'Tier-1 exchange partnerships, listing pipeline management, and market-maker introductions. Direct networks across AscendEx, Tapbit, MEXC, and more.',
    tags: ['CEX Listings', 'Market Making', 'Pipeline Growth'],
    accent: '#22C55E',
  },
  {
    icon: Users,
    title: 'Community Building & Management',
    description:
      'Growing and managing high-quality Web3 communities at scale. Proven playbook for Telegram, Discord, and Twitter communities exceeding 220K+ active members.',
    tags: ['Telegram', 'Discord', 'Community Strategy'],
    accent: '#00D4FF',
  },
  {
    icon: Lightbulb,
    title: 'Web3 Advisory & Investment',
    description:
      'Strategic advisory for early-stage Web3 startups — go-to-market strategy, tokenomics review, partnership brokering, and introductions to institutional capital.',
    tags: ['Tokenomics', 'GTM Strategy', 'Capital Introductions'],
    accent: '#6366F1',
  },
  {
    icon: Globe,
    title: 'Cross-border Payment Solutions',
    description:
      'Designing and implementing blockchain-powered payment infrastructure for remittances, B2B settlements, and crypto-to-fiat corridors across emerging markets.',
    tags: ['MFS', 'Remittance', 'Crypto Gateway', 'B2B Payments'],
    accent: '#22C55E',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6" data-testid="section-services" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
            How I Can Help
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Services & Expertise
          </h2>
          <div className="w-16 h-0.5 bg-[#00D4FF] mx-auto mb-4" />
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto">
            Whether you need a strategic partner, a technical co-founder, or an advisor — here's how I bring value.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.08 }}
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="group h-full p-6 sm:p-7 rounded-2xl bg-[#111827] border border-[#1F2937] hover:border-[#00D4FF]/25 transition-all duration-300 flex flex-col">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-colors duration-300"
                    style={{
                      backgroundColor: `${service.accent}12`,
                      border: `1px solid ${service.accent}25`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: service.accent }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: `${service.accent}10`,
                          color: service.accent,
                          border: `1px solid ${service.accent}20`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{ backgroundColor: service.accent, opacity: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA row */}
        <motion.div
          className="mt-12 text-center"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-[#64748B] text-sm mb-4">
            Ready to collaborate? Let's talk about your project.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF] text-sm font-semibold hover:bg-[#00D4FF]/15 transition-all"
            data-testid="link-services-contact"
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
