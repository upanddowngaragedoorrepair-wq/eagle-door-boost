import { Phone, MessageSquare, Clock, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUrlParams } from '@/hooks/useUrlParams';
import heroBg from '@/assets/hero-bg.webp';
import eagleLogo from '@/assets/eagle-logo.webp';
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
  const {
    city,
    phoneLink
  } = useUrlParams();
  return <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      {/* Multi-layer gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--background))_80%)]" />

      <div className="container-main relative">
        {/* Logo + Brand - Animated */}
        <div className="flex flex-col items-center mb-8 animate-on-load animate-fade-in-up">
          
          <div className="text-center">
            
            
          </div>
        </div>

        {/* Main Headline - Bob's centered style - Animated */}
        <div className="text-center max-w-4xl mx-auto mb-10 animate-on-load animate-fade-in-up animation-delay-200">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] mb-4">
            <span className="text-foreground">Fast, Reliable & </span>
            <span className="gradient-text">Affordable             </span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-foreground">
            Repair &   Installation
          </p>
        </div>

        {/* Service Cards Grid - Bob's exact 6-card layout - Staggered Animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-10">
          {serviceCards.map((service, index) => <Link key={index} to={service.link} className={`group relative aspect-square rounded-2xl overflow-hidden border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-load animate-fade-in-scale animation-delay-${(index + 3) * 100}`}>
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                <h3 className="font-display text-sm md:text-base font-bold text-foreground uppercase tracking-wide leading-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>
            </Link>)}
        </div>

        {/* Trust Badges Row - Bob's style - Animated */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6 animate-on-load animate-fade-in-up animation-delay-600">
          <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/80 border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:bg-secondary transition-all duration-300">​ <CheckCircle className="w-4 h-4 text-primary" />
            
            ​0$ Check-up Fee       
             
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/80 border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:bg-secondary transition-all duration-300">
            <Clock className="w-4 h-4 text-primary" />
            Same Day Service
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/80 border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:bg-secondary transition-all duration-300">
            <Star className="w-4 h-4 fill-primary text-primary" />
            189+ 5-Star Reviews
          </span>
        </div>

        {/* Veteran Badge - Animated */}
        <div className="text-center mb-8 animate-on-load animate-fade-in-up animation-delay-700">
          <p className="text-sm md:text-base font-semibold text-primary">
            ★ Proudly Family Owned & Operated — Serving Our Community with Honor ★
          </p>
        </div>

        {/* CTAs - Bob's Style - CENTERED & BIG - Animated */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-load animate-fade-in-up animation-delay-800">
          <a href={phoneLink} className="btn-cta text-lg min-h-[64px] w-full sm:w-auto">
            <Phone className="w-6 h-6" />
            Speak With a Gate Specialist
          </a>
          <a href="#quote-form" className="btn-secondary min-h-[60px] w-full sm:w-auto">
            <MessageSquare className="w-5 h-5" />
            Free Estimate
          </a>
        </div>
      </div>
    </section>;
}