import { ArrowRight, Wrench, Phone } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';
import gateRepair from '@/assets/gate-repair.webp';
import gateDriveway from '@/assets/gate-driveway.webp';
import gateSliding from '@/assets/gate-sliding.webp';
import gateAccessControl from '@/assets/gate-access-control.webp';
import gateSwing from '@/assets/gate-swing.webp';
import gateCommercial from '@/assets/gate-commercial.webp';

const services = [
  {
    image: gateRepair,
    title: 'Gate Repair',
    description: 'Complete repair for noisy, stuck, or damaged automatic gates. We fix motors, sensors, tracks, and more.',
    features: ['Same-day service', 'All gate types', 'Warranty included'],
  },
  {
    image: gateDriveway,
    title: 'Driveway Gates',
    description: 'Custom driveway gate installation with professional-grade parts for smooth and secure operation.',
    features: ['Custom designs', 'Premium materials', 'Expert install'],
  },
  {
    image: gateSliding,
    title: 'Sliding Gates',
    description: 'Space-efficient sliding gate systems perfect for driveways with limited swing room.',
    features: ['Space efficient', 'Heavy duty', 'Quiet motors'],
  },
  {
    image: gateSwing,
    title: 'Swing Gates',
    description: 'Elegant swing gate solutions for residential and estate properties. Classic style meets modern automation.',
    features: ['Classic design', 'Dual systems', 'Low maintenance'],
  },
  {
    image: gateAccessControl,
    title: 'Access Control',
    description: 'Keypads, intercoms, remotes, and smartphone-controlled access for total property security.',
    features: ['Smart tech', 'Remote access', 'Secure entry'],
  },
  {
    image: gateCommercial,
    title: 'Commercial Gates',
    description: 'Solutions for businesses, HOAs, warehouses, and industrial properties requiring heavy-duty security.',
    features: ['High traffic', 'Industrial grade', '24/7 support'],
  },
];

export function Services() {
  const { phoneLink } = useUrlParams();

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/30">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/40 mb-6">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wide">Professional Services</span>
          </div>
          
          <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="text-foreground">Expert</span>{' '}
            <span className="gold-text">Gate</span>{' '}
            <span className="text-foreground">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From emergency repairs to complete installations, our certified technicians deliver exceptional results every time.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-premium rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-display text-xl font-bold text-foreground">
                  {service.title}
                </h3>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1.5 rounded-full border border-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* CTA */}
                <a 
                  href={phoneLink}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
