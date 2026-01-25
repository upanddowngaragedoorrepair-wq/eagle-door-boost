import { Phone, MessageSquare, Clock, Shield, Star, BadgeCheck } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';

export function Hero() {
  const { city, phoneLink } = useUrlParams();

  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, hsl(222 47% 8%) 0%, hsl(222 50% 5%) 50%, hsl(222 47% 7%) 100%)' }}
      />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/40 mb-6 shadow-gold">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Serving {city}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] mb-6">
              <span className="text-foreground">Automatic Gate Repair,</span>
              <br />
              <span className="gradient-text">Driveway Gates</span>
              <br />
              <span className="text-foreground">& Access Control</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              Premium installation & expert repairs. Clean work, quality parts, and long-term reliability from certified technicians.
            </p>

            {/* Trust Line - Bob's Style */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 mb-6 text-sm">
              <span className="flex items-center gap-1.5 text-foreground">
                <BadgeCheck className="w-4 h-4 text-primary" />
                Licensed & Insured
              </span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-foreground">
                <Clock className="w-4 h-4 text-primary" />
                Same Day Service
              </span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-foreground">
                <Star className="w-4 h-4 fill-primary text-primary" />
                2,500+ 5-Star Reviews
              </span>
            </div>

            {/* Micro-copy above CTA */}
            <p className="text-sm text-muted-foreground mb-4">
              <Clock className="w-3.5 h-3.5 inline mr-1 text-primary" />
              Avg response time ~30 sec • No pressure
            </p>

            {/* CTAs - Bob's Style */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={phoneLink} className="btn-cta text-lg">
                <Phone className="w-5 h-5" />
                Speak With a Gate Specialist
              </a>
              <a href="#quote-form" className="btn-secondary text-base">
                <MessageSquare className="w-5 h-5" />
                Request a Quote
              </a>
            </div>
          </div>

          {/* Right Visual Card - Desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="card-premium p-6 rounded-3xl">
                {/* Hero Image Placeholder */}
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-navy-deep flex items-center justify-center overflow-hidden relative">
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0v60M0 30h60\' stroke=\'%23D4A853\' stroke-width=\'.5\' fill=\'none\' opacity=\'.3\'/%3E%3C/svg%3E")',
                      backgroundSize: '30px 30px',
                    }}
                  />
                  <div className="text-center p-8 relative z-10">
                    <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-primary/25 border border-primary/30 flex items-center justify-center shadow-gold">
                      <Shield className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                      Trusted Professionals
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Licensed, insured & background-checked technicians
                    </p>
                  </div>
                </div>

                {/* Stats row - Bob's style */}
                <div className="grid grid-cols-3 gap-3 mt-5">
                  <div className="text-center p-4 rounded-xl bg-background border border-border">
                    <div className="text-2xl font-display font-bold text-primary">20+</div>
                    <div className="text-xs text-muted-foreground">Years Exp</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-background border border-border">
                    <div className="text-2xl font-display font-bold text-primary">5K+</div>
                    <div className="text-xs text-muted-foreground">Gates Installed</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-background border border-border">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-2xl font-display font-bold text-primary">4.9</span>
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
