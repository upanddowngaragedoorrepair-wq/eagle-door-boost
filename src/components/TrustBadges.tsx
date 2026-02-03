import { Shield, Clock, MapPin, Sparkles, Users, DollarSign, CheckCircle } from 'lucide-react';

const badges = [{
  icon: Shield,
  title: 'Licensed & Insured',
  description: 'Fully bonded professionals',
  license: 'LIC#1138855'
}, {
  icon: Clock,
  title: '20+ Years Experience',
  description: "We've solved every type of gate failure — nothing surprises us."
}, {
  icon: MapPin,
  title: 'Local Technicians',
  description: 'Fast response times'
}, {
  icon: Sparkles,
  title: 'No Guess Work',
  description: 'We respect your property & Always Plan Ahead'
}, {
  icon: Users,
  title: '96% First Visit Fix',
  description: 'Our own trained team'
}, {
  icon: DollarSign,
  title: 'Upfront Pricing',
  description: 'No hidden fees - Always Detailed Quote'
}];

export function TrustBadges() {
  return (
    <section className="py-20 md:py-28 border-t border-b border-border bg-secondary/30 relative overflow-hidden">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container-main relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/30 mb-6">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wide">Why Choose Us</span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 tracking-tight">
            Why Choose <span className="gold-text">Eagle Gate</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium service backed by experience, integrity, and a commitment to quality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Service Truck Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-2xl rounded-3xl" />
              <img 
                alt="Eagle Gate Service Truck" 
                loading="lazy" 
                decoding="async" 
                className="relative w-full max-w-lg mx-auto lg:max-w-none rounded-3xl shadow-2xl shadow-black/40 border border-border" 
                src="/lovable-uploads/d9bd0eba-7cf9-43c4-a417-6d5067d76470.jpg" 
              />
            </div>
          </div>

          {/* Trust Badges Grid - Enhanced */}
          <div className="order-1 lg:order-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
            {badges.map((badge, index) => (
              <div 
                key={index} 
                className="group p-6 rounded-2xl text-center bg-card border border-border shadow-xl shadow-black/20 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center bg-primary/15 text-primary group-hover:scale-110 group-hover:bg-primary/25 transition-all duration-300">
                  <badge.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-base md:text-lg text-foreground leading-tight mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {badge.description}
                </p>
                {badge.license && (
                  <p className="text-xs text-primary/70 mt-2 font-semibold">{badge.license}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
