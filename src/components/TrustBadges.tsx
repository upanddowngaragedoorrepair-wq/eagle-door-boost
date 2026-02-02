import { Shield, Clock, MapPin, Sparkles, Users, DollarSign } from 'lucide-react';
import serviceTruck from '@/assets/service-truck.webp';
const badges = [{
  icon: Shield,
  title: 'Licensed & Insured',
  description: 'Fully bonded professionals'
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
  title: '96% Of The Repairs Done In The 1st Visit',
  description: 'Our own trained team'
}, {
  icon: DollarSign,
  title: 'Upfront Pricing',
  description: 'No hidden fees - Always Detailed Quote So You Know What You Getting'
}];
export function TrustBadges() {
  return <section className="py-16 md:py-20 border-t border-b border-border bg-card/50">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl">
            Why Choose <span className="gold-text">Eagle Gate</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium service backed by experience, integrity, and a commitment to quality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Service Truck Photo */}
          <div className="hidden lg:block">
            <img alt="Eagle Gate Service Truck" className="w-full rounded-2xl shadow-lg" src="/lovable-uploads/d9bd0eba-7cf9-43c4-a417-6d5067d76470.jpg" />
          </div>

          {/* Trust Badges Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
            {badges.map((badge, index) => <div key={index} className="trust-badge group hover:border-primary/40 hover:bg-card transition-all duration-300">
                <div className="trust-icon group-hover:scale-110 group-hover:bg-primary/25 transition-all duration-300">
                  <badge.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-sm md:text-base text-foreground leading-tight">
                  {badge.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {badge.description}
                </p>
                {badge.title === 'Licensed & Insured' && (
                  <p className="text-xs text-muted-foreground/70 mt-0.5">LIC#1138855</p>
                )}
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}