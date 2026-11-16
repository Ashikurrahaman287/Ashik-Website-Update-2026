import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import spudBlocksLogo from '@assets/Spud Blocks Only Logo Color Full_1762234458919.png';
import spudpay from '../../../attached_assets/spudpay.jpg';
import arcaneLogo from '@assets/Black and White Modern Streetwear Sport Logo_1762234382168.png';
import agtLogo from '@assets/487989397_122221850360195791_7773183041984101712_n_1762234357260.jpg';

const ventures = [
  {
    name: 'SpudPay',
    role: 'Founder & CEO',
    period: '2025 – Present',
    tag: 'Active',
    description:
      'SpudPay is an innovative financial technology platform that leverages blockchain technology to facilitate seamless cross-border transactions. Designed to transform the way individuals and businesses conduct international payments, SpudPay aims to make these transactions faster, more transparent, and cost-effective. SpudPay is a blockchain-based Mobile Financial Service (MFS) that will redefine the way people handle money — from C2C, B2C, and B2B transactions to crypto gateways, remittances, and digital banking solutions.',
    logo: spudpay,
    accent: '#00D4FF',
  },
  {
    name: 'SpudBlocks',
    role: 'CEO',
    period: '2018 – Present',
    tag: 'Active',
    description:
      'SpudBlocks is a dynamic team of tech enthusiasts and seasoned professionals specializing in the blockchain and cryptocurrency sectors. Our mission is to facilitate the advancement of businesses, irrespective of their scale, by leveraging the potential of the Web3 landscape. By harnessing pioneering strategies and state-of-the-art technology, we are committed to delivering unparalleled solutions that empower our clients to surpass their objectives and foster continuous development.',
    logo: spudBlocksLogo,
    accent: '#6366F1',
  },
  {
    name: 'AGT Venture',
    role: 'Board Member',
    period: '2022 – Present',
    tag: 'Board',
    description:
      'Ash Group of Technology (AGT) is a forward-thinking and diversified joint venture, uniting a wide range of technology-driven businesses under one visionary umbrella. AGT is committed to innovation, collaboration, and excellence across multiple sectors of the tech industry, driving impactful solutions and shaping the future through cutting-edge advancements. Backed by $115.1M investment via Zhou Group.',
    logo: agtLogo,
    accent: '#22C55E',
  },
  {
    name: 'Arcane Group',
    role: 'Advisor',
    period: '2025 – Present',
    tag: 'Advisory',
    description:
      'An innovative investment firm dedicated to empowering and funding businesses that promote natural living, health, and overall well-being. The firm focuses on ventures that align with sustainable growth, organic products, eco-friendly innovation, and holistic health solutions.',
    logo: arcaneLogo,
    accent: '#94A3B8',
  },
];

const tagColors: Record<string, string> = {
  Active: 'bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/20',
  Board: 'bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/20',
  Advisory: 'bg-[#94A3B8]/10 text-[#94A3B8] border-[#94A3B8]/20',
};

function VentureCard({ venture, index }: { venture: typeof ventures[0]; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-80px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={cardRef}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
      data-testid={`card-venture-${venture.name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div
        className="p-6 sm:p-8 rounded-2xl bg-[#111827] border border-[#1F2937] hover:border-[#00D4FF]/20 transition-all group h-full"
        style={{ '--venture-accent': venture.accent } as React.CSSProperties}
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#0A0F1C] border border-[#1F2937] flex items-center justify-center p-2 flex-shrink-0 overflow-hidden">
            <img
              src={venture.logo}
              alt={`${venture.name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-lg sm:text-xl font-bold text-white">{venture.name}</h3>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${tagColors[venture.tag]}`}>
                {venture.tag}
              </span>
            </div>
            <p className="text-sm font-semibold" style={{ color: venture.accent }}>{venture.role}</p>
            <p className="text-xs text-[#64748B] mt-0.5">{venture.period}</p>
          </div>
        </div>

        <p className="text-sm text-[#94A3B8] leading-relaxed">{venture.description}</p>

        <div
          className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
          style={{ backgroundColor: venture.accent, opacity: 0.4 }}
        />
      </div>
    </motion.div>
  );
}

export default function VenturesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="ventures" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#111827]/50" data-testid="section-ventures" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
        >
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Leadership & Ventures
          </h2>
          <div className="w-16 h-0.5 bg-[#00D4FF] mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {ventures.map((venture, index) => (
            <VentureCard key={index} venture={venture} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
