import { Phone, MessageSquare, Clock, Shield, Star, BadgeCheck, CheckCircle } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';
import heroBg from '@/assets/hero-bg.webp';
import eagleLogo from '@/assets/eagle-logo.webp';

export function Hero() {
  const { city, phoneLink } = useUrlParams();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/90 to-background/70" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="container-main relative py-24 md:py-32">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Content - 60% */}
          <div className="lg:col-span-3 text-center lg:text-left">
            {/* Logo Badge */}
            <div className="inline-flex items-center gap-3 mb-6">
              <img src={eagleLogo} alt="Eagle Automatic Gate" className="w-16 h-16 md:w-20 md:h-20" />
              <div className="text-left">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground uppercase tracking-wide">
                  Eagle Automatic
                </h2>
                <p className="text-sm text-primary font-semibold uppercase tracking-wider">Gate & Door</p>
              </div>
            </div>

            {/* Headline - Bob's centered style */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.05] mb-4">
              <span className="text-foreground">Fast, Reliable &</span>
              <br />
              <span className="gradient-text">Professional</span>
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-foreground mb-4">
              Services in <span className="text-primary">{city}</span> & surrounding areas
            </p>

            {/* Value Proposition */}
            <p className="text-lg md:text-xl text-primary font-semibold uppercase tracking-wide mb-6">
              We Beat Any Price — Guaranteed!
            </p>

            {/* Trust Badges Row - Bob's style */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/80 border border-border text-sm font-medium text-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                Licensed & Insured
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/80 border border-border text-sm font-medium text-foreground">
                <Clock className="w-4 h-4 text-primary" />
                Same Day Service
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/80 border border-border text-sm font-medium text-foreground">
                <Star className="w-4 h-4 fill-primary text-primary" />
                2,500+ 5-Star Reviews
              </span>
            </div>

            {/* Micro-copy above CTA */}
            <p className="text-sm text-muted-foreground mb-4">
              <Clock className="w-3.5 h-3.5 inline mr-1 text-primary" />
              Avg response time ~30 sec • No pressure
            </p>

            {/* CTAs - Bob's Style - BIGGER BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={phoneLink} className="btn-cta text-lg min-h-[64px]">
                <Phone className="w-6 h-6" />
                Speak With a Gate Specialist
              </a>
              <a href="#quote-form" className="btn-secondary min-h-[60px]">
                <MessageSquare className="w-5 h-5" />
                Free Estimate
              </a>
            </div>
          </div>

          {/* Right Visual - Service Quick Cards - 40% */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '🔧', title: 'Gate Repair', subtitle: 'Same-Day' },
                { icon: '🚪', title: 'Driveway Gates', subtitle: 'Custom' },
                { icon: '🔐', title: 'Access Control', subtitle: 'Smart' },
                { icon: '⚙️', title: 'Openers', subtitle: 'All Brands' },
                { icon: '🏢', title: 'Commercial', subtitle: 'Industrial' },
                { icon: '🛠️', title: 'Maintenance', subtitle: 'Annual' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={phoneLink}
                  className="group p-4 rounded-2xl bg-card/90 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold text-center"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wide leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.subtitle}</p>
                </a>
              ))}
            </div>

            {/* Veteran/Family Badge */}
            <div className="mt-6 p-4 rounded-2xl bg-primary/10 border border-primary/30 text-center">
              <p className="text-sm font-semibold text-primary">
                ★ Proudly Veteran-Owned & Family-Operated — Serving Our Community with Honor ★
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
