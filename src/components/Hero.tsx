import { Phone, MessageSquare, Clock, CheckCircle, Star, Shield, Zap } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { ParamLink } from '@/components/NavLink';
import heroBg from '@/assets/hero-bg.webp';
import cardGateRepair from '@/assets/card-gate-repair.jpeg';
import cardDrivewayGate from '@/assets/card-driveway-gate.jpg';
import cardPedestrianGate from '@/assets/card-pedestrian-gate.webp';
import cardAccessControl from '@/assets/card-access-control.jpeg';
import cardAutomaticGate from '@/assets/card-automatic-gate.jpeg';
import cardFences from '@/assets/card-fences.png';

const serviceCards = [{
  image: cardGateRepair,
  title: 'Gate Repair',
  link: '/gate-repair'
}, {
  image: cardDrivewayGate,
  title: 'Driveway Gates',
  link: '/driveway-gates'
}, {
  image: cardPedestrianGate,
  title: 'Pedestrian Gates',
  link: '/automatic-gates'
}, {
  image: cardAccessControl,
  title: 'Access Control',
  link: '/access-control'
}, {
  image: cardAutomaticGate,
  title: 'Automatic Gates',
  link: '/automatic-gates'
}, {
  image: cardFences,
  title: 'Fences',
  link: '/fences'
}];

export function Hero() {
  const { city, phoneLink } = useLocation2();
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-16">
      {/* Background Image with Overlay - LCP optimized */}
      <img 
        src={heroBg} 
        alt="" 
        fetchPriority="high"
        decoding="sync"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Multi-layer gradient overlay for depth - ENHANCED */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--background)/0.8)_70%)]" />
      {/* Subtle gold accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="container-main relative">
        {/* Trust Badges Row - ABOVE THE FOLD - Bob's authority style */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8 animate-on-load animate-fade-in-up">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-card/90 border border-primary/40 shadow-lg shadow-primary/10 backdrop-blur-sm">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-lg font-bold text-foreground">4.9</span>
            <span className="text-sm text-muted-foreground">(189+ Reviews)</span>
          </div>
          
          <span className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-card/80 border border-border shadow-lg backdrop-blur-sm">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-foreground">Licensed & Insured</span>
          </span>
          
          <span className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-card/80 border border-border shadow-lg backdrop-blur-sm">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-foreground">20+ Years Experience</span>
          </span>
          
          <span className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-green-500/10 border border-green-500/30 shadow-lg backdrop-blur-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-bold text-green-400">Technicians Available Now</span>
          </span>
        </div>

        {/* Main Headline - Bob's centered style - BIGGER & BOLDER */}
        <div className="text-center max-w-5xl mx-auto mb-12 animate-on-load animate-fade-in-up animation-delay-200">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.05] mb-6 tracking-tight">
            <span className="text-foreground">{city}</span>
            <br />
            <span className="text-foreground">Gate </span>
            <span className="gradient-text">Experts</span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-muted-foreground">
            Repair & Installation
          </p>
        </div>

        {/* Service Cards Grid - Bob's exact 6-card layout - Enhanced shadows */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 mb-12">
          {serviceCards.map((service, index) => (
            <ParamLink 
              key={index} 
              to={service.link} 
              className={`group relative aspect-square rounded-2xl overflow-hidden border-2 border-border hover:border-primary/60 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 animate-on-load animate-fade-in-scale animation-delay-${(index + 3) * 100}`}
            >
              <img src={service.image} alt={service.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h3 className="font-display text-sm md:text-base lg:text-lg font-bold text-foreground uppercase tracking-wide leading-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>
            </ParamLink>
          ))}
        </div>

        {/* Secondary Trust Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 animate-on-load animate-fade-in-up animation-delay-600">
          <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-secondary/80 border border-border text-base font-semibold text-foreground hover:border-primary/50 hover:bg-secondary transition-all duration-300">
            <CheckCircle className="w-5 h-5 text-primary" />
            $0 Check-up Fee
          </span>
          <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-secondary/80 border border-border text-base font-semibold text-foreground hover:border-primary/50 hover:bg-secondary transition-all duration-300">
            <Zap className="w-5 h-5 text-primary" />
            Same Day Service
          </span>
          <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-secondary/80 border border-border text-base font-semibold text-foreground hover:border-primary/50 hover:bg-secondary transition-all duration-300">
            <Star className="w-5 h-5 fill-primary text-primary" />
            96% First Visit Fix Rate
          </span>
        </div>

        {/* Veteran Badge */}
        <div className="text-center mb-10 animate-on-load animate-fade-in-up animation-delay-700">
          <p className="text-base md:text-lg font-bold shine-text">
            ★ Proudly Family Owned & Operated — Serving Our Community with Honor ★
          </p>
        </div>

        {/* CTAs - Bob's Style - BIGGER 15% */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-on-load animate-fade-in-up animation-delay-800">
          <a href={phoneLink} className="btn-cta text-xl min-h-[72px] px-10 w-full sm:w-auto">
            <Phone className="w-7 h-7" />
            Speak With a Gate Specialist
          </a>
          <a href="#quote-form" className="btn-secondary min-h-[68px] px-10 text-lg w-full sm:w-auto">
            <MessageSquare className="w-6 h-6" />
            Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
