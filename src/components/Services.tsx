import { Phone, CheckCircle, Wrench } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import gateRepair from '@/assets/card-gate-repair.webp';
import gateDriveway from '@/assets/card-driveway-gate.webp';
import gateSliding from '@/assets/card-sliding-gate.webp';
import gateSwing from '@/assets/card-pedestrian-gate.webp';
import gateAccessControl from '@/assets/card-access-control.webp';
import gateCommercial from '@/assets/card-commercial-gate.webp';
import cardFences from '@/assets/card-fences-new.webp';

const services = [
{
  image: gateRepair,
  title: 'Gate Repair',
  bullets: [
  'Complete repair for noisy, stuck, or damaged automatic gates',
  'We fix motors, sensors, tracks, and more',
  'Same-day service',
  'All gate types',
  'Warranty included']

},
{
  image: gateDriveway,
  title: 'Driveway Gates',
  bullets: [
  'Custom driveway gate installation',
  'Professional-grade parts for smooth and secure operation',
  'Custom designs',
  'Premium materials',
  'Expert install']

},
{
  image: gateSwing,
  title: 'Pedestrian Gates',
  bullets: [
  'Custom pedestrian gate installation for walkways and side entries',
  'Secure access for foot traffic without opening the main gate',
  'Self-closing options',
  'ADA compliant',
  'Keypad & intercom ready']

},
{
  image: gateAccessControl,
  title: 'Access Control',
  bullets: [
  'Keypads, intercoms, remotes, and smartphone-controlled access',
  'Total property security',
  'Smart tech',
  'Remote access',
  'Secure entry']

},
{
  image: gateCommercial,
  title: 'Commercial Gates',
  bullets: [
  'Solutions for businesses, HOAs, warehouses, and industrial properties',
  'Heavy-duty security',
  'High traffic',
  'Industrial grade',
  '24/7 support']

},
{
  image: cardFences,
  title: 'Fences & Pillars',
  bullets: [
  'Wood, vinyl, chain-link, wrought iron & aluminum fencing',
    'Custom concrete & steel pillars for a premium entrance look',
    'Permit handling — we manage applications & inspections',
    'Gate integration — fencing matched to your existing gate system',
    'Residential & commercial, HOA compliant installations']

}];


export function Services() {
  const { phoneLink, phoneFormatted } = useLocation2();

  return (
    <section id="services" className="py-[72px] md:py-24 bg-background relative">
      <div className="container-main relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <Wrench className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Professional Services</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            <span className="text-foreground">Expert </span>
            <span className="gold-text">Gate</span>{' '}
            <span className="text-foreground">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From emergency repairs to complete installations, our certified technicians deliver exceptional results every time.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) =>
          <div
            key={index}
            className="group bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2">

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                decoding="async"
                width={400}
                height={192}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                
                <h3 className="absolute bottom-4 left-6 font-display text-2xl md:text-3xl font-bold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-7">
                <ul className="space-y-2.5 mb-6">
                  {service.bullets.map((bullet, i) =>
                <li key={i} className="flex items-start gap-2.5 text-muted-foreground text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                )}
                </ul>

                <a
                href={phoneLink}
                className="inline-flex items-center gap-2 text-primary font-bold text-base hover:underline transition-colors">

                  <Phone className="w-4 h-4" />
                  Call Now: {phoneFormatted}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}