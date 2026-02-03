import { ArrowRight, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
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
  return <section id="services" className="py-20 md:py-28 bg-[hsl(45,30%,95%)]">
      <div className="container-main">
        {/* Section Header - Bob's Style */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary border-2 border-primary mb-6">
            <Wrench className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-bold text-primary-foreground uppercase tracking-wide">Professional Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="text-background">Expert</span>{' '}
            <span className="text-primary">Gate</span>{' '}
            <span className="text-background">Solutions</span>
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            From emergency repairs to complete installations, our certified technicians deliver exceptional results every time.
          </p>
        </div>

        {/* Service Cards Grid - Bob's Style with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-display text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
              </div>
              
              {/* Content */}
              <div className="p-6 text-primary-foreground">
                <p className="text-background/70 leading-relaxed mb-5">
                  {service.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag, tagIndex) => <span key={tagIndex} className="text-xs font-medium text-background/60 bg-background/5 px-3 py-1.5 rounded-full border border-background/10">
                      {tag}
                    </span>)}
                </div>
                
                {/* CTA */}
                <Link to={service.link} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}