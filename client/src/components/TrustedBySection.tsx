import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const companies = [
  'AscendEx',
  'Tapbit Exchange',
  'Hotbit Exchange',
  'AGT Venture',
  'Arcane Group',
  'SpudBlocks',
  'Copx AI',
  'Goose Finance',
  'Kesef Finance',
  'Joker Manor',
  'Coinverse',
  'PlutusFi',
  'ERA7',
  'MEXC',
];

export default function TrustedBySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 px-6 border-y border-[#1F2937] overflow-hidden relative" data-testid="section-trusted-by" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-center text-xs text-[#64748B] font-semibold uppercase tracking-widest mb-8"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          Trusted By & Worked With
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-8 whitespace-nowrap">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-[#1F2937] bg-[#111827] text-[#94A3B8] text-sm font-medium flex-shrink-0 hover:border-[#00D4FF]/30 hover:text-white transition-all"
                data-testid={`badge-company-${company.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
          width: fit-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; flex-wrap: wrap; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
