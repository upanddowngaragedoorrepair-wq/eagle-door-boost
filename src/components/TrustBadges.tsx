import { Shield, Clock, DollarSign, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully bonded professionals. LIC#1138855',
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Fast response when you need it most.',
  },
  {
    icon: Zap,
    title: '20+ Years Experience',
    description: "Thousands of gates repaired and installed.",
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    description: 'No hidden fees — detailed quote before work begins.',
  },
];

export function TrustBadges() {
  return (
    <section id="why-choose-us" className="py-16 md:py-20 bg-background">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight text-foreground">
            Why Choose <span className="gold-text">Eagle Gate</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Premium service backed by experience and integrity.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 md:p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 text-primary mx-auto mb-4">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-base md:text-lg text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
