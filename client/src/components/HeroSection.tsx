import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

function AnimatedCounter({ end, duration = 2000, prefix = '', suffix = '' }: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) { setCount(end); return; }
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration, shouldReduceMotion]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const stats = [
  { value: 87, prefix: '$', suffix: 'M+', label: 'Venture Capital Backing' },
  { value: 15, prefix: '', suffix: 'M+', label: 'Active Users Served' },
  { value: 220, prefix: '', suffix: 'K+', label: 'Community Members' },
  { value: 250, prefix: '', suffix: '+', label: 'Strategic Partnerships' },
  { value: 50, prefix: '', suffix: '+', label: 'Blockchain Projects' },
  { value: 99, prefix: '', suffix: '.9%', label: 'Platform Uptime' },
];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      data-testid="section-hero"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#0d1526] to-[#0A0F1C]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#6366F1]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF] text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            Available for Strategic Partnerships
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          className="text-center mb-6"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-4"
            style={{ letterSpacing: '-0.02em', lineHeight: '1.1' }}
            data-testid="text-hero-title"
          >
            Ashikur Rahaman
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#00D4FF] mb-2">
            Founder & CEO of SpudPay
          </p>
          <p className="text-base md:text-lg text-[#94A3B8] font-medium">
            Web3 Executive & Full-Stack Blockchain Engineer
          </p>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          className="text-base md:text-lg text-[#94A3B8] text-center max-w-3xl mx-auto mb-10 leading-relaxed"
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
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#0A0F1C] font-semibold text-base px-8 hover:scale-[1.02] transition-all shadow-lg shadow-[#00D4FF]/20"
            onClick={() => scrollToSection('#contact')}
            data-testid="button-contact"
          >
            Work With Me
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#1F2937] text-white hover:border-[#00D4FF]/40 hover:bg-[#00D4FF]/5 text-base px-8 hover:scale-[1.02] transition-all"
            onClick={() => scrollToSection('#ventures')}
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#1F2937] text-[#94A3B8] hover:border-[#6366F1]/40 hover:bg-[#6366F1]/5 text-base px-8 hover:scale-[1.02] transition-all"
            asChild
            data-testid="button-resume"
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 w-4 h-4" />
              Resume
            </a>
          </Button>
        </motion.div>

        {/* Power Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-5 rounded-2xl bg-[#111827] border border-[#1F2937] hover:border-[#00D4FF]/30 transition-all group"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#00D4FF] mb-1 group-hover:text-white transition-colors" style={{ letterSpacing: '-0.02em' }}>
                <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-[#64748B] font-medium leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
