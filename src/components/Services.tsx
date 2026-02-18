import { Phone, CheckCircle, Wrench } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import gateRepair from '@/assets/card-gate-repair.webp';
import gateDriveway from '@/assets/card-driveway-gate.webp';
import gateSliding from '@/assets/card-sliding-gate.webp';
import gateSwing from '@/assets/card-pedestrian-gate.webp';
import gateAccessControl from '@/assets/card-access-control.webp';
import gateCommercial from '@/assets/card-commercial-gate.webp';

const services = [
  {
    image: gateRepair,
    title: 'Gate Repair',
    bullets: [
      'Complete repair for noisy, stuck, or damaged automatic gates',
      'We fix motors, sensors, tracks, and more',
      'Same-day service',
      'All gate types',
      'Warranty included',
    ],
  },
  {
    image: gateDriveway,
    title: 'Driveway Gates',
    bullets: [
      'Custom driveway gate installation',
      'Professional-grade parts for smooth and secure operation',
      'Custom designs',
      'Premium materials',
      'Expert install',
    ],
  },
  {
    image: gateSliding,
    title: 'Sliding Gates',
    bullets: [
      'Install and repair sliding gate systems',
      'Professional-grade parts for smooth operation',
      'Space efficient',
      'Heavy duty',
      'Quiet motors',
    ],
  },
  {
    image: gateSwing,
    title: 'Swing Gates',
    bullets: [
      'Elegant solutions for residential and estate properties',
      'Classic style meets modern automation',
      'Classic design',
      'Dual systems',
      'Low maintenance',
    ],
  },
  {
    image: gateAccessControl,
    title: 'Access Control',
    bullets: [
      'Keypads, intercoms, remotes, and smartphone-controlled access',
      'Total property security',
      'Smart tech',
      'Remote access',
      'Secure entry',
    ],
  },
  {
    image: gateCommercial,
    title: 'Commercial Gates',
    bullets: [
      'Solutions for businesses, HOAs, warehouses, and industrial properties',
      'Heavy-duty security',
      'High traffic',
      'Industrial grade',
      '24/7 support',
    ],
  },
];

export function Services() {
  const { phoneLink, phoneFormatted } = useLocation2();

  return (
    <section id="services" className="py-24 md:py-32 bg-[hsl(45,30%,95%)] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background/10 pointer-events-none" />

      <div className="container-main relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary border-2 border-primary mb-8 shadow-lg shadow-primary/30">
            <Wrench className="w-5 h-5 text-primary-foreground" />
            <span className="text-sm font-bold text-primary-foreground uppercase tracking-wider">Professional Services</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            <span className="text-background">Expert</span>{' '}
            <span className="text-primary">Gate</span>{' '}
            <span className="text-background">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-background/70 max-w-3xl mx-auto">
            From emergency repairs to complete installations, our certified technicians deliver exceptional results every time.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 hover:-translate-y-3"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <h3 className="absolute bottom-4 left-6 font-display text-2xl md:text-3xl font-bold text-foreground">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-7">
                <ul className="space-y-2.5 mb-6">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-background/70 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={phoneLink}
                  className="inline-flex items-center gap-2 text-primary font-bold text-base hover:underline transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now: {phoneFormatted}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
