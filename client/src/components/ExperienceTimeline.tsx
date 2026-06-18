import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: 'SpudPay',
    role: 'Founder & CEO',
    period: '2025 – Present',
    tag: 'Current',
    color: '#00D4FF',
    achievements: [
      'Building institutional-grade blockchain infrastructure for global cross-border payments',
      'Leading product architecture for a blockchain-based Mobile Financial Service (MFS)',
      'Developing C2C, B2C, and B2B transaction protocols with crypto gateway integration',
      'Overseeing full-stack engineering, partnerships, and fundraising strategy',
    ],
  },
  {
    company: 'AscendEx Exchange',
    role: 'Business Executive',
    period: 'Aug 2025 – Apr 2026',
    tag: 'Exchange',
    color: '#6366F1',
    achievements: [
      'Developed strategic partnerships with crypto projects for exchange listings',
      'Managed outreach to new blockchain startups and token teams',
      'Conducted market research to identify potential listing candidates',
      'Generated new business opportunities and partnership leads in the Web3 ecosystem',
    ],
  },
  {
    company: 'Tapbit Exchange',
    role: 'Community & Business Development Manager',
    period: 'Jun 2023 – Aug 2025',
    tag: 'Exchange',
    color: '#6366F1',
    achievements: [
      'Managed global crypto communities with 220K+ users across Telegram, Discord, and Twitter',
      'Built strategic partnerships with blockchain founders, contributing to listing pipeline growth',
      'Organized marketing campaigns and listing promotions for upcoming projects',
      'Supported token listing negotiations and project onboarding',
    ],
  },
  {
    company: 'Hotbit Exchange',
    role: 'Customer Support Manager',
    period: 'Apr 2019 – May 2023',
    tag: 'Exchange',
    color: '#6366F1',
    achievements: [
      'Led customer support operations for global crypto exchange users',
      'Resolved complex trading, deposit, and withdrawal issues',
      'Managed support team workflows and response efficiency',
      'Maintained high customer satisfaction through fast issue resolution',
    ],
  },
  {
    company: 'AGT Venture',
    role: 'Board Member',
    period: '2022 – Present',
    tag: 'Board',
    color: '#22C55E',
    achievements: [
      'Serving on the board of AGT — Ash Group of Technology, backed by $115.1M from Zhou Group',
      'Advising on strategic direction, technology partnerships, and investment decisions',
      'Supporting cross-sector technology innovation and governance',
    ],
  },
  {
    company: 'Arcane Group',
    role: 'Advisor',
    period: '2025 – Present',
    tag: 'Advisory',
    color: '#94A3B8',
    achievements: [
      'Advising an innovative investment firm focused on sustainable growth and natural living ventures',
      'Providing Web3 and blockchain product strategy guidance',
      'Supporting portfolio companies on go-to-market and partnership development',
    ],
  },
];

const tagColors: Record<string, string> = {
  Current: 'bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/20',
  Exchange: 'bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/20',
  Board: 'bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/20',
  Advisory: 'bg-[#94A3B8]/10 text-[#94A3B8] border-[#94A3B8]/20',
};

function TimelineItem({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="relative pl-8 pb-12 last:pb-0"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      data-testid={`timeline-item-${index}`}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1 w-3 h-3 rounded-full border-2 border-[#0A0F1C]"
        style={{ backgroundColor: exp.color, boxShadow: `0 0 8px ${exp.color}40` }}
      />
      {/* Timeline line */}
      {index < experiences.length - 1 && (
        <div className="absolute left-[5px] top-5 bottom-0 w-px bg-[#1F2937]" />
      )}

      <div className="p-6 rounded-2xl bg-[#111827] border border-[#1F2937] hover:border-[#00D4FF]/20 transition-all group">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white mb-0.5">{exp.company}</h3>
            <p className="text-sm font-semibold" style={{ color: exp.color }}>{exp.role}</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${tagColors[exp.tag]}`}>
              {exp.tag}
            </span>
            <span className="text-xs text-[#64748B] bg-[#1F2937] px-3 py-1 rounded-full">
              {exp.period}
            </span>
          </div>
        </div>

        <ul className="space-y-1.5">
          {exp.achievements.map((item, i) => (
            <li key={i} className="flex gap-2 items-start">
              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: exp.color }} />
              <span className="text-sm text-[#94A3B8]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-24 px-6" data-testid="section-experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Track Record
          </h2>
          <div className="w-16 h-0.5 bg-[#00D4FF] mx-auto mb-4" />
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            7+ years of progressive leadership across top-tier exchanges, founding ventures, and advisory roles.
          </p>
        </motion.div>

        <div>
          {experiences.map((exp, index) => (
            <TimelineItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
