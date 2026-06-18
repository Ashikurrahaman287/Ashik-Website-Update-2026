import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { SiX, SiGithub } from 'react-icons/si';
import { Button } from '@/components/ui/button';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Ashik@Spudblocks.com',
    href: 'mailto:Ashik@Spudblocks.com',
    testId: 'link-email',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1619-617036',
    href: 'tel:+8801619617036',
    testId: 'link-phone',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'ashik-the-knight',
    href: 'https://linkedin.com/in/ashik-the-knight',
    testId: 'link-linkedin',
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="py-24 px-6 bg-[#111827]/50 relative overflow-hidden" data-testid="section-contact" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D4FF]/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6366F1]/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Let's Build the Future of Web3
          </h2>
          <div className="w-16 h-0.5 bg-[#00D4FF] mx-auto mb-4" />
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Whether you're a startup, investor, or fellow innovator — I'm open to partnerships, advisory work, and new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            className="space-y-4"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.testId}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0A0F1C] border border-[#1F2937] hover:border-[#00D4FF]/30 transition-all group"
                  data-testid={contact.testId}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D4FF]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748B] font-medium uppercase tracking-wider">{contact.label}</p>
                    <p className="text-white font-semibold text-sm">{contact.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Social links */}
            <div className="pt-4">
              <p className="text-xs text-[#64748B] font-medium uppercase tracking-wider mb-3">Social</p>
              <div className="flex gap-3">
                {[
                  { icon: SiX, href: 'https://x.com/Ashikur_Rhm', label: 'X' },
                  { icon: SiGithub, href: 'https://github.com/Ashikurrahaman287', label: 'GitHub' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#0A0F1C] border border-[#1F2937] flex items-center justify-center hover:border-[#00D4FF]/30 hover:bg-[#00D4FF]/5 transition-all"
                    aria-label={s.label}
                  >
                    <s.icon className="w-4 h-4 text-[#94A3B8]" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#00D4FF]/10 to-[#6366F1]/10 border border-[#00D4FF]/20 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Open to Opportunities</h3>
                <p className="text-[#94A3B8] leading-relaxed mb-6">
                  Looking for a strategic Web3 partner, blockchain engineer, or executive advisor? I'm actively building partnerships in the DeFi, payments, and exchange space.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    'Strategic Partnerships & Listings',
                    'Blockchain Product Development',
                    'Web3 Advisory & Investment',
                    'Cross-border Payment Solutions',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                className="w-full bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#0A0F1C] font-semibold"
                asChild
              >
                <a href="mailto:Ashik@Spudblocks.com" data-testid="button-send-email">
                  <Send className="w-4 h-4 mr-2" />
                  Send a Message
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
