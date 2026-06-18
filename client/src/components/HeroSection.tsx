import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

interface CounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
  started: boolean;
}

// Ease-in-out quad: starts slow, speeds up in the middle, slows to a stop
// This makes each individual tick visible at the start so the counter feels real
function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function AnimatedCounter({ end, prefix = '', suffix = '', duration = 2800, delay = 0, started }: CounterProps) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const rafRef = useRef<number>(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!started) return;
    if (shouldReduceMotion) { setCount(end); setDone(true); return; }

    const timeoutId = setTimeout(() => {
      let startTime: number | null = null;

      const tick = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = easeInOutQuad(progress);
        setCount(Math.floor(eased * end));
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setCount(end);
          setDone(true);
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafRef.current);
    };
  }, [started, end, duration, delay, shouldReduceMotion]);

  return (
    <span className={done ? 'animate-stat-done' : ''}>
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  { value: 87,  prefix: '$', suffix: 'M+',  label: 'Venture Capital Backing',  delay: 0 },
  { value: 15,  prefix: '',  suffix: 'M+',  label: 'Active Users Served',       delay: 200 },
  { value: 220, prefix: '',  suffix: 'K+',  label: 'Community Members',         delay: 400 },
  { value: 250, prefix: '',  suffix: '+',   label: 'Strategic Partnerships',    delay: 600 },
  { value: 50,  prefix: '',  suffix: '+',   label: 'Blockchain Projects',       delay: 800 },
  { value: 99,  prefix: '',  suffix: '.9%', label: 'Platform Uptime',           delay: 1000 },
];

interface HeroSectionProps {
  loaderDone?: boolean;
}

export default function HeroSection({ loaderDone = false }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 px-4 sm:px-6"
      data-testid="section-hero"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#0d1526] to-[#0A0F1C]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#00D4FF]/5 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-[#6366F1]/5 rounded-full blur-[60px] sm:blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Status badge */}
        <motion.div
          className="flex justify-center mb-6 sm:mb-8"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF] text-xs sm:text-sm font-medium">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#22C55E] animate-pulse flex-shrink-0" />
            Available for Strategic Partnerships
          </div>
        </motion.div>

        {/* Name & title */}
        <motion.div
          className="text-center mb-4 sm:mb-6"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-3 sm:mb-4"
            style={{ letterSpacing: '-0.02em', lineHeight: '1.1' }}
            data-testid="text-hero-title"
          >
            Ashikur Rahaman
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#00D4FF] mb-1.5 sm:mb-2">
            Founder & CEO of SpudPay
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#94A3B8] font-medium">
            Web3 Executive & Full-Stack Blockchain Engineer
          </p>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-[#94A3B8] text-center max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-testid="text-hero-subtitle"
        >
          Building institutional-grade blockchain infrastructure for global cross-border payments.
          7+ years scaling Web3 ventures with{' '}
          <span className="text-white font-semibold">$87M+ backing</span> and partnerships across{' '}
          <span className="text-white font-semibold">10+ tier-1 exchanges</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 md:mb-20"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#0A0F1C] font-semibold text-sm sm:text-base px-6 sm:px-8 hover:scale-[1.02] transition-all shadow-lg shadow-[#00D4FF]/20"
            onClick={() => scrollToSection('#contact')}
            data-testid="button-contact"
          >
            Work With Me
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-[#1F2937] text-white hover:border-[#00D4FF]/40 hover:bg-[#00D4FF]/5 text-sm sm:text-base px-6 sm:px-8 hover:scale-[1.02] transition-all"
            onClick={() => scrollToSection('#ventures')}
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
        </motion.div>

        {/* Power Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card text-center p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-[#111827] border border-[#1F2937] transition-all group"
              whileHover={shouldReduceMotion ? {} : {
                borderColor: 'rgba(0,212,255,0.35)',
                boxShadow: '0 0 18px rgba(0,212,255,0.12)',
                transition: { duration: 0.2 },
              }}
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#00D4FF] mb-0.5 sm:mb-1 tabular-nums group-hover:text-white transition-colors"
                style={{ letterSpacing: '-0.02em' }}
              >
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  delay={stat.delay}
                  started={loaderDone}
                />
              </div>
              <div className="text-[10px] sm:text-xs text-[#64748B] font-medium leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes stat-glow {
          0%   { text-shadow: 0 0 0px rgba(0,212,255,0); }
          40%  { text-shadow: 0 0 14px rgba(0,212,255,0.8); }
          100% { text-shadow: 0 0 0px rgba(0,212,255,0); }
        }
        .animate-stat-done {
          animation: stat-glow 0.9s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
