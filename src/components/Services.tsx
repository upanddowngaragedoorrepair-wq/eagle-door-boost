import { Wrench, Home, ArrowRightLeft, Fingerprint, Cog, Building2, Phone } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';

const services = [
  {
    icon: Wrench,
    title: 'Gate Repair',
    description: 'Fast diagnosis and repair of all automatic gate systems, openers, and controls.',
    highlight: 'Same-Day Service',
  },
  {
    icon: Home,
    title: 'Driveway Gates',
    description: 'Custom driveway gates designed and installed to match your property\'s style.',
    highlight: 'Free Estimates',
  },
  {
    icon: ArrowRightLeft,
    title: 'Sliding & Swing',
    description: 'Expert installation of both sliding and swing gate systems for any property.',
    highlight: 'All Styles',
  },
  {
    icon: Fingerprint,
    title: 'Access Control',
    description: 'Keypads, intercoms, remotes, and smart phone-controlled access solutions.',
    highlight: 'Modern Tech',
  },
  {
    icon: Cog,
    title: 'Openers & Motors',
    description: 'Sales, installation, and repair of all major gate opener and motor brands.',
    highlight: 'All Brands',
  },
  {
    icon: Building2,
    title: 'Commercial',
    description: 'Solutions for businesses, HOAs, warehouses, and industrial properties.',
    highlight: 'Large Scale',
  },
];

export function Services() {
  const { phoneLink } = useUrlParams();

  return (
    <section className="py-16 md:py-24">
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">
            Our <span className="gold-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive gate and access control solutions for residential and commercial properties
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href={phoneLink}
              className="card-service group block"
            >
              {/* Header with icon and highlight */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center group-hover:bg-primary/25 group-hover:border-primary/40 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
                  {service.highlight}
                </span>
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                {service.description}
              </p>
              
              {/* Soft CTA */}
              <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Phone className="w-4 h-4" />
                <span>Call for Details</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
