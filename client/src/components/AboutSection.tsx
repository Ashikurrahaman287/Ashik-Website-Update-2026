import { Card } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6" data-testid="section-about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-12 rounded-full" />

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-card-border hover-elevate">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            <span className="text-foreground font-semibold">Web3 Business Development Executive</span> with{' '}
            <span className="text-primary font-semibold">10+ years of experience</span> in cryptocurrency exchanges, blockchain
            ecosystems, and digital asset markets. Proven track record in exchange listings, strategic partnerships, and
            ecosystem expansion. Experienced in operations management, team leadership, and cross-functional coordination to
            scale business growth in fast-moving Web3 environments. Skilled at identifying high-potential blockchain projects,
            negotiating strategic collaborations, and driving adoption through global partnerships. Adept at leading teams,
            optimizing operational workflows, and supporting exchange growth within the evolving digital asset landscape.
          </p>
        </Card>
      </div>
    </section>
  );
}
