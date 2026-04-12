import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Mail, Phone, Linkedin } from 'lucide-react';

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="py-24 px-6 bg-accent/20 relative overflow-hidden" data-testid="section-contact" ref={sectionRef}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse -top-48 -right-48" />
        <div className="absolute w-96 h-96 bg-chart-2/5 rounded-full blur-3xl animate-pulse -bottom-48 -left-48" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 })}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>
        
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-16 rounded-full"
          initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
          animate={shouldReduceMotion ? { scaleX: 1 } : (isInView ? { scaleX: 1 } : { scaleX: 0 })}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
        />

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary to-chart-2 opacity-10 rounded-full blur-3xl" />
              
              <h3 className="text-2xl font-bold text-foreground mb-6 relative z-10">Contact Information</h3>
              
              <div className="space-y-6 relative z-10">
                <motion.a
                  href="mailto:ashikweb3.o@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover-elevate group reduced-motion-safe:hover-sparkle transition-all"
                  data-testid="link-email"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, x: 8 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
                >
                  <motion.div
                    className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors flex-shrink-0"
                    whileHover={shouldReduceMotion ? {} : { rotate: 360 }}
                    transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
                  >
                    <Mail className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">ashikweb3.o@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+8801619617036"
                  className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover-elevate group transition-all"
                  data-testid="link-phone"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, x: 8 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
                >
                  <motion.div
                    className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors flex-shrink-0"
                    whileHover={shouldReduceMotion ? {} : { rotate: -360 }}
                    transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
                  >
                    <Phone className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground">+880 1619-617036</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/ashik-the-knight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover-elevate group transition-all"
                  data-testid="link-linkedin"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, x: 8 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
                >
                  <motion.div
                    className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors flex-shrink-0"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.2 }}
                    transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
                  >
                    <Linkedin className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-semibold text-foreground">Ashikur Rahaman</p>
                  </div>
                </motion.a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
