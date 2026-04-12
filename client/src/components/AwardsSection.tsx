import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Trophy, Handshake, Lightbulb, TrendingUp } from 'lucide-react';

const awards = [
  {
    title: 'Community Leadership Excellence',
    organization: 'Tapbit Exchange',
    date: 'Aug 2025',
    description: 'Successfully managed 220K+ active users across global crypto communities',
    icon: Trophy,
    color: 'from-chart-3 to-chart-4',
  },
  {
    title: 'Strategic Partnership Growth',
    organization: 'Tapbit Exchange',
    date: 'Jul 2024',
    description: 'Built strategic partnerships contributing to listing pipeline growth',
    icon: Handshake,
    color: 'from-chart-2 to-chart-3',
  },
  {
    title: 'Customer Support Excellence',
    organization: 'Hotbit Exchange',
    date: 'May 2023',
    description: 'Maintained high customer satisfaction through fast issue resolution',
    icon: TrendingUp,
    color: 'from-primary to-chart-2',
  },
  {
    title: 'Blockchain Innovation Recognition',
    organization: 'Copx AI',
    date: 'Apr 2024',
    description: 'Recognized for AI-powered trading platform development and data analytics',
    icon: Lightbulb,
    color: 'from-chart-4 to-chart-5',
  },
  {
    title: 'GameFi Ecosystem Contribution',
    organization: 'JokerManor',
    date: 'Feb 2024',
    description: 'Contributed to GameFi aggregator and launchpad platform development',
    icon: Trophy,
    color: 'from-chart-5 to-primary',
  },
  {
    title: 'Web3 Creator Platform Success',
    organization: 'Coinverse',
    date: 'Mar 2024',
    description: 'Helped develop Web3 creator platform supporting sustainable ecosystem growth',
    icon: Lightbulb,
    color: 'from-primary to-chart-4',
  },
];

const staggerClasses = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5', 'stagger-6'];

export default function AwardsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="py-24 px-6 relative overflow-hidden" data-testid="section-awards">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 })}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Awards & Recognition
          </h2>
          
          <motion.div
            className="h-1.5 w-32 bg-gradient-to-r from-primary via-chart-2 to-primary mx-auto rounded-full"
            initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            animate={shouldReduceMotion ? { scaleX: 1 } : (isInView ? { scaleX: 1 } : { scaleX: 0 })}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
          />
          
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Celebrating excellence and innovation in blockchain and business development
          </p>
        </motion.div>

        <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="relative p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate group overflow-hidden h-full"
                  data-testid={`card-award-${award.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${award.color} opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity`} />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.div
                      className={`p-5 rounded-2xl bg-gradient-to-br ${award.color} mb-6 shadow-lg`}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
                      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
                    >
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </motion.div>

                    <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">{award.title}</h3>
                    
                    <div className="mb-4">
                      <p className="text-sm font-bold text-primary mb-1">{award.organization}</p>
                      <p className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full inline-block">{award.date}</p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
