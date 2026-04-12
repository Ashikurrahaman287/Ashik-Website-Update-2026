import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    company: 'Ascendex Exchange',
    role: 'Business Executive',
    period: 'Aug 2025 - Apr 2026',
    achievements: [
      'Developed strategic partnerships with crypto projects for exchange listings',
      'Managed outreach to new blockchain startups and token teams',
      'Conducted market research to identify potential listing candidates',
      'Coordinated with marketing and listing teams to onboard new projects',
      'Generated new business opportunities and partnership leads in the Web3 ecosystem',
    ],
  },
  {
    company: 'Tapbit Exchange',
    role: 'Community & Business Development Manager',
    period: 'Jun 2023 - Aug 2025',
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
    period: 'Apr 2019 - May 2023',
    achievements: [
      'Led customer support operations for global crypto exchange users',
      'Resolved complex trading, deposit, and withdrawal issues',
      'Managed support team workflows and response efficiency',
      'Maintained high customer satisfaction through fast issue resolution',
    ],
  },
];

function TimelineItem({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();
  
  const isLeft = index % 2 === 0;
  
  return (
    <motion.div
      ref={cardRef}
      className={`flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
      data-testid={`timeline-item-${index}`}
    >
      <motion.div
        className="flex-1 w-full"
        initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
        animate={shouldReduceMotion ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 })}
        transition={shouldReduceMotion ? { duration: 0 } : { 
          duration: 0.6, 
          delay: index * 0.15,
          type: "spring",
          bounce: 0.3
        }}
      >
        <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate relative overflow-visible">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1">{exp.company}</h3>
                <p className="text-base text-primary font-semibold">{exp.role}</p>
              </div>
              <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-2">
              {exp.achievements.map((achievement, achIndex) => (
                <motion.li 
                  key={achIndex} 
                  className="flex gap-2"
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  animate={shouldReduceMotion ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 })}
                  transition={shouldReduceMotion ? { duration: 0 } : { 
                    duration: 0.4, 
                    delay: (index * 0.15) + 0.4 + (achIndex * 0.1)
                  }}
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </Card>
      </motion.div>

      <div className="hidden md:flex relative z-10">
        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-24 px-6 bg-accent/20" data-testid="section-experience">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Professional Journey
        </h2>
        
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-16 rounded-full" />

        <div className="relative" ref={timelineRef}>
          <motion.div 
            className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary to-chart-2 origin-top hidden md:block"
            initial={shouldReduceMotion ? { height: "100%" } : { height: 0 }}
            animate={shouldReduceMotion ? { height: "100%" } : (isTimelineInView ? { height: "100%" } : { height: 0 })}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.5, ease: "easeOut" }}
            style={{ transform: 'translateX(-50%)' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
