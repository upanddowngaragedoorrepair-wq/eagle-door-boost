import { Wrench, Home, ArrowRightLeft, Fingerprint, Cog, Building2 } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Automatic Gate Repair',
    description: 'Fast diagnosis and repair of all automatic gate systems, openers, and controls.',
  },
  {
    icon: Home,
    title: 'Driveway Gate Installation',
    description: 'Custom driveway gates designed and installed to match your property\'s style.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Sliding & Swing Gates',
    description: 'Expert installation of both sliding and swing gate systems for any property.',
  },
  {
    icon: Fingerprint,
    title: 'Access Control Systems',
    description: 'Keypads, intercoms, remote systems, and smart access solutions.',
  },
  {
    icon: Cog,
    title: 'Gate Openers & Motors',
    description: 'Sales, installation, and repair of all major gate opener brands.',
  },
  {
    icon: Building2,
    title: 'Residential & Commercial',
    description: 'Solutions for homes, businesses, HOAs, and industrial properties.',
  },
];

export function Services() {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-service group">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
