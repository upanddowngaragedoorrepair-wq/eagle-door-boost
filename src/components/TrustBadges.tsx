import { Shield, Clock, DollarSign } from 'lucide-react';

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
    <section id="why-choose-us" className="py-[72px] md:py-24 border-t border-border bg-background relative">
      <div className="container-main relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-5 tracking-tight">
            Why Choose <span className="gold-text">Eagle Gate</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium service backed by experience, integrity, and a commitment to quality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
          {/* Service Truck Photo */}
          <div className="order-2 lg:order-1">
            <img
              alt="Eagle Gate Service Truck"
              loading="lazy"
              decoding="async"
              width={600}
              height={400}
              className="w-full max-w-lg mx-auto lg:max-w-none rounded-3xl border border-border shadow-md"
              src="/lovable-uploads/58a20335-c903-4006-ae63-e2e175b9a7c2.png"
            />
          </div>

          {/* Benefit Cards */}
          <div className="order-1 lg:order-2 grid gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-7 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 flex-shrink-0">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xl text-foreground mb-2">
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
