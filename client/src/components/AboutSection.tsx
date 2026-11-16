import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Coins, Code2, Users } from 'lucide-react';

const highlights = [
  { icon: Building2, label: 'Founder & CEO', value: 'SpudPay', color: 'text-[#00D4FF]' },
  { icon: Coins, label: 'Board Member', value: 'AGT Venture', color: 'text-[#6366F1]' },
  { icon: Code2, label: 'Full-Stack', value: 'Blockchain Engineer', color: 'text-[#22C55E]' },
  { icon: Users, label: 'BD Executive', value: 'AscendEx', color: 'text-[#00D4FF]' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-24 px-6 bg-[#111827]/50" data-testid="section-about" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">About</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Web3 Founder & Builder
          </h2>
          <div className="w-16 h-0.5 bg-[#00D4FF] mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Bio */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
              I'm <span className="text-white font-semibold">Ashikur Rahaman</span>, a blockchain engineer and Web3 executive with 7+ years building institutional-grade products and strategic partnerships across global crypto markets.
            </p>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
              As <span className="text-[#00D4FF] font-semibold">Founder & CEO of SpudPay</span>, I'm building a cross-border blockchain payment infrastructure designed for real-world adoption. I also serve as CEO of SpudBlocks, Board Member of AGT Venture — backed by <span className="text-white font-semibold">$115.1M from Zhou Group</span> — and Advisor at Arcane Group.
            </p>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              My expertise spans Solidity smart contracts, DeFi protocols, full-stack dApp development, exchange business development, and community scaling. I've delivered 50+ blockchain projects and helped grow exchange communities to <span className="text-white font-semibold">220K+ members</span>.
            </p>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#0A0F1C] border border-[#1F2937] hover:border-[#00D4FF]/30 transition-all group"
                  data-testid={`card-about-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className={`mb-3 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-[#64748B] text-xs font-medium uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-white font-semibold text-sm">{item.value}</p>
                </div>
              );
            })}

            <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-[#00D4FF]/10 to-[#6366F1]/10 border border-[#00D4FF]/20">
              <p className="text-[#64748B] text-xs font-medium uppercase tracking-wider mb-2">Contact</p>
              <a
                href="mailto:Ashik@SpudBlocks.com"
                className="text-[#00D4FF] font-semibold text-lg hover:underline"
                data-testid="link-about-email"
              >
                Ashik@SpudBlocks.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
