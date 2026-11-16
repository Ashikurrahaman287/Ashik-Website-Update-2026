import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const contractProjects = [
  {
    name: 'Copx AI',
    role: 'Web Developer & Data Analyst',
    description:
      'COPX.AI is an AI-powered trading platform designed for cryptocurrency markets, utilizing machine learning and predictive analytics to help traders optimize entry/exit points and anticipate market shifts. It functions as a DAO (Decentralized Autonomous Organization) for community-driven governance and offers real-time data analytics from centralized exchanges via APIs.',
  },
  {
    name: 'MEXC Exchange',
    role: 'Price Bot Developer',
    description:
      'MEXC is a global cryptocurrency exchange established in 2018, known for its extensive selection of tokens, 0% maker fees, and high-performance trading engine. Serving over 30 million users across 170+ countries, it specializes in spot and futures trading. MEXC is often recognized for listing new and obscure projects.',
  },
  {
    name: 'Goose Finance',
    role: 'Web Developer',
    description:
      'Goose Finance is a decentralized finance (DeFi) application operating on the Binance Smart Chain (BSC) that aims to create a sustainable, high-yield environment using a perpetual deflationary token, the Golden Egg ($EGG). It functions similarly to PancakeSwap, focusing on high-APR yield farming.',
  },
  {
    name: 'ERA7',
    role: 'Project Manager',
    description:
      'Era7: Game of Truth is a Binance Smart Chain-based, anime-style Play-to-Earn (P2E) Trading Card Game (TCG) that blends NFT collecting with automated combat (auto-battler). Players build decks to fight in PVP/PVE, earning $ERA tokens and Game of Truth (GOT) tokens, which are used for governance and in-game economy.',
  },
  {
    name: 'Kesef Finance',
    role: 'Web Developer',
    description:
      'Kesef Finance (KSF) is a cross-chain DeFi project on the Ethereum platform launched in 2021, operating as a yield farming ecosystem where users can stake tokens and provide liquidity. It offers cryptocurrency trading, staking, and payment functionalities.',
  },
  {
    name: 'Joker Manor',
    role: 'dAPP Developer',
    description:
      'JokerManor is a GameFi Aggregator and Launchpad with value-added DeFi features that allows players to earn rewards and assets (NFTs) by playing their favorite games in the metaverse, as well as increase revenue via liquidity mining and yield farming.',
  },
  {
    name: 'Coinverse',
    role: 'Web Developer',
    description:
      'Coinverse is a specialized platform designed for Web3 creators and communities, focusing on turning followers into clients through a Social CRM, often associated with the 5ire chain ecosystem. It aims to support sustainable Web3 growth and reduce market fragmentation.',
  },
  {
    name: 'PlutusFi',
    role: 'Operation Manager & dApp Developer',
    description:
      'PlutusFi.io is a SocialFi SaaS automated trading platform designed to empower cryptocurrency communities with trading bots and social features. It aims to help users maximize profits through automated trading of over 300 crypto assets and features market sentiment analysis.',
  },
];

function ProjectCard({ project, index }: { project: typeof contractProjects[0]; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={cardRef}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion ? { opacity: 1 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate group overflow-hidden relative h-full"
        data-testid={`card-project-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-chart-2 opacity-10 rounded-full blur-3xl" />

        <div className="relative">
          <h3 className="text-2xl font-bold text-foreground mb-2">{project.name}</h3>

          <div className="mb-6">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
              {project.role}
            </span>
          </div>

          <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </Card>
    </motion.div>
  );
}

export default function ContractProjectsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  const firstRow = contractProjects.slice(0, 3);
  const secondRow = contractProjects.slice(3, 6);
  const thirdRow = contractProjects.slice(6, 8);

  return (
    <section
      id="contract-projects"
      className="py-24 px-6 bg-accent/20"
      data-testid="section-contract-projects"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 })}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
        >
          Contract Based Projects
        </motion.h2>

        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-16 rounded-full"
          initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
          animate={shouldReduceMotion ? { scaleX: 1 } : (isInView ? { scaleX: 1 } : { scaleX: 0 })}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
        />

        {/* First Row - 3 Projects */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {firstRow.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Second Row - 3 Projects */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {secondRow.map((project, index) => (
            <ProjectCard key={index + 3} project={project} index={index + 3} />
          ))}
        </div>

        {/* Third Row - 2 Projects */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {thirdRow.map((project, index) => (
            <ProjectCard key={index + 6} project={project} index={index + 6} />
          ))}
        </div>
      </div>
    </section>
  );
}
