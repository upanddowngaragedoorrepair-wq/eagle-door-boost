import { Shield, Clock, DollarSign } from 'lucide-react';
import serviceTruckImg from '@/assets/service-truck.webp';

const benefits = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully bonded professionals. LIC#1138855',
  },
  {
    icon: Clock,
    title: '20+ Years Experience',
    description: "We've solved every type of gate failure — nothing surprises us.",
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    description: 'No hidden fees — Always a detailed quote before work begins.',
  },
];

export function TrustBadges() {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 border-t border-border bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="container-main relative">
        <div className="text-center mb-16">
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
                width={600}
                height={400}
                className="relative w-full max-w-lg mx-auto lg:max-w-none rounded-3xl shadow-2xl shadow-black/40 border border-border"
                src="/lovable-uploads/58a20335-c903-4006-ae63-e2e175b9a7c2.png"
              />
            </div>
          </div>

          {/* Benefit Cards */}
          <div className="order-1 lg:order-2 grid gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-7 rounded-2xl bg-card border border-border shadow-xl shadow-black/20 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/15 text-primary group-hover:scale-110 group-hover:bg-primary/25 transition-all duration-300 flex-shrink-0">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
