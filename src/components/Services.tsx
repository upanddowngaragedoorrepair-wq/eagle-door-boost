import { ArrowRight, Wrench } from 'lucide-react';
import { ParamLink } from '@/components/NavLink';
import gateRepair from '@/assets/gate-repair.webp';
import gateDriveway from '@/assets/gate-driveway.jpg';
import gateSliding from '@/assets/gate-sliding.jpg';
import gateAccessControl from '@/assets/gate-access-control.webp';
import gateSwing from '@/assets/gate-swing.webp';
import gateCommercial from '@/assets/gate-commercial.jpg';

const services = [{
  image: gateRepair,
  title: 'Gate Repair',
  description: 'Complete repair for noisy, stuck, or damaged automatic gates. We fix motors, sensors, tracks, and more.',
  tags: ['Same-day service', 'All gate types', 'Warranty included'],
  link: '/gate-repair'
}, {
  image: gateDriveway,
  title: 'Driveway Gates',
  description: 'Custom driveway gate installation with professional-grade parts for smooth and secure operation.',
  tags: ['Custom designs', 'Premium materials', 'Expert install'],
  link: '/driveway-gates'
}, {
  image: gateSliding,
  title: 'Sliding Gates',
  description: 'We install and repair sliding gate systems with professional-grade parts for smooth operation.',
  tags: ['Space efficient', 'Heavy duty', 'Quiet motors'],
  link: '/automatic-gates'
}, {
  image: gateSwing,
  title: 'Swing Gates',
  description: 'Elegant swing gate solutions for residential and estate properties. Classic style meets modern automation.',
  tags: ['Classic design', 'Dual systems', 'Low maintenance'],
  link: '/automatic-gates'
}, {
  image: gateAccessControl,
  title: 'Access Control',
  description: 'Keypads, intercoms, remotes, and smartphone-controlled access for total property security.',
  tags: ['Smart tech', 'Remote access', 'Secure entry'],
  link: '/access-control'
}, {
  image: gateCommercial,
  title: 'Commercial Gates',
  description: 'Solutions for businesses, HOAs, warehouses, and industrial properties requiring heavy-duty security.',
  tags: ['High traffic', 'Industrial grade', '24/7 support'],
  link: '/fences'
}];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[hsl(45,30%,95%)] relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background/10 pointer-events-none" />
      
      <div className="container-main relative">
        {/* Section Header - Bob's Style - BIGGER */}
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

        {/* Service Cards Grid - Enhanced shadows & hover */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 hover:-translate-y-3"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  loading="lazy" 
                  decoding="async" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <h3 className="absolute bottom-4 left-6 font-display text-2xl md:text-3xl font-bold text-foreground">
                  {service.title}
                </h3>
              </div>
              
              {/* Content */}
              <div className="p-7 text-primary-foreground">
                <p className="text-background/70 leading-relaxed mb-6 text-base">
                  {service.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs font-semibold text-background/60 bg-background/5 px-4 py-2 rounded-full border border-background/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* CTA */}
                <ParamLink 
                  to={service.link} 
                  className="inline-flex items-center gap-2 text-base font-bold text-primary hover:gap-4 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </ParamLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
