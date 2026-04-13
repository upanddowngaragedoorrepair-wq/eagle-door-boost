import { Shield, Wrench, CheckCircle, Heart, Home, Cog, Key, Settings, Lock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
interface TrustCard {
  icon: React.ComponentType<{
    className?: string;
  }>;
  title: string;
  description: string;
}
interface RelatedService {
  icon: React.ComponentType<{
    className?: string;
  }>;
  label: string;
  href: string;
}
interface AuthoritySectionProps {
  headline: string;
  subheadline: string;
  images: string[];
  trustCards?: TrustCard[];
  relatedServices?: RelatedService[];
}
const defaultTrustCards: TrustCard[] = [{
  icon: Shield,
  title: 'Expert-Level Craftsmanship',
  description: 'Every installation and repair is performed by trained technicians with real field experience.'
}, {
  icon: CheckCircle,
  title: 'Clean & Code-Compliant Work',
  description: 'Proper wiring, correct hardware, and no shortcuts — ever.'
}, {
  icon: Wrench,
  title: 'Built for Long-Term Reliability',
  description: 'We use premium parts and industry-approved systems only.'
}, {
  icon: Heart,
  title: 'Honest Recommendations',
  description: "If it can be repaired, we'll repair it. If it needs replacement, we'll explain why."
}];
const defaultRelatedServices: RelatedService[] = [{
  icon: Wrench,
  label: 'Gate Repair',
  href: '/gate-repair'
}, {
  icon: Home,
  label: 'Driveway Gates',
  href: '/driveway-gates'
}, {
  icon: Key,
  label: 'Access Control',
  href: '/access-control'
}, {
  icon: Cog,
  label: 'Automatic Gates',
  href: '/automatic-gates'
}, {
  icon: Zap,
  label: 'Gate Openers',
  href: '/automatic-gates'
}, {
  icon: Settings,
  label: 'Maintenance',
  href: '/gate-repair'
}];
export function AuthoritySection({
  headline,
  subheadline,
  images,
  trustCards = defaultTrustCards,
  relatedServices = defaultRelatedServices
}: AuthoritySectionProps) {
  return <section className="py-24 md:py-32 bg-[hsl(220,35%,12%)] relative overflow-hidden">
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="container-main relative">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-5 tracking-tight text-white">
            {headline.split('[Service Name]')[0]}
            <span className="text-primary">{headline.includes('[Service Name]') ? 'This Service' : ''}</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-medium">
            {subheadline}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left: Images */}
          <div className="space-y-6 order-1">
            {images.map((img, index) => <div key={index} className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-xl rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <img src={img} alt={`Service showcase ${index + 1}`} className="relative w-full h-auto max-h-[400px] shadow-black/50 border border-white/10 object-fill shadow opacity-100 rounded-3xl" />
              </div>)}
          </div>

          {/* Right: Trust Cards */}
          <div className="space-y-5 order-2">
            {trustCards.map((card, index) => <div key={index} className="group p-7 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl shadow-black/30 hover:bg-white/10 hover:border-primary/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                    <card.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xl text-white mb-2 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-base">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Related Services Grid */}
        <div className="border-t border-white/10 pt-14">
          <h3 className="text-2xl md:text-3xl font-sans font-bold text-white text-center mb-10">
            Related <span className="text-primary">Services</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {relatedServices.map((service, index) => <Link key={index} to={service.href} className="group p-5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-primary/10 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                  {service.label}
                </span>
              </Link>)}
          </div>
        </div>
      </div>
    </section>;
}