import { Shield, Clock, MapPin, Sparkles, Users, DollarSign } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully bonded professionals',
  },
  {
    icon: Clock,
    title: '20+ Years Experience',
    description: 'Trusted expertise',
  },
  {
    icon: MapPin,
    title: 'Local Technicians',
    description: 'Fast response times',
  },
  {
    icon: Sparkles,
    title: 'Clean Installations',
    description: 'We respect your property',
  },
  {
    icon: Users,
    title: 'No Subcontractors',
    description: 'Our own trained team',
  },
  {
    icon: DollarSign,
    title: 'Clear Pricing',
    description: 'Upfront before work',
  },
];

export function TrustBadges() {
  return (
    <section className="py-14 md:py-20 border-t border-b border-border bg-card/30">
      <div className="container-main">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="section-heading">
            Why Choose <span className="gold-text">Eagle Gate</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium service backed by experience, integrity, and a commitment to quality
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="trust-badge group hover:border-primary/40 hover:bg-card transition-all duration-300"
            >
              <div className="trust-icon group-hover:scale-110 group-hover:bg-primary/25 transition-all duration-300">
                <badge.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-sm md:text-base text-foreground leading-tight">
                {badge.title}
              </h3>
              <p className="text-xs text-muted-foreground hidden md:block">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
