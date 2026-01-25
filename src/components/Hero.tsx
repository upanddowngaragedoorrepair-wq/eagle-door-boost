import { Phone, MessageSquare, Clock, Shield } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';

export function Hero() {
  const { city, phoneLink } = useUrlParams();

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Serving {city}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6">
              <span className="text-foreground">Automatic Gate Repair,</span>
              <br />
              <span className="gradient-text">Driveway Gates</span>
              <br />
              <span className="text-foreground">& Access Control</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Premium installation & expert repairs. Clean work, quality parts, and long-term reliability from certified technicians.
            </p>

            {/* Micro-copy */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                Avg response time ~30 sec
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary" />
                No pressure
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={phoneLink} className="btn-cta">
                <Phone className="w-5 h-5" />
                Speak With a Gate Specialist
              </a>
              <a href="#quote-form" className="btn-secondary">
                <MessageSquare className="w-5 h-5" />
                Request a Quote
              </a>
            </div>
          </div>

          {/* Right Visual Card - Desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="card-premium p-8 rounded-3xl">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy-light to-background flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Shield className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                      Trusted Professionals
                    </h3>
                    <p className="text-muted-foreground">
                      Licensed, insured & background-checked technicians
                    </p>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 rounded-xl bg-background/50">
                    <div className="text-2xl font-display font-bold text-primary">20+</div>
                    <div className="text-xs text-muted-foreground">Years Exp</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-background/50">
                    <div className="text-2xl font-display font-bold text-primary">5K+</div>
                    <div className="text-xs text-muted-foreground">Gates Installed</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-background/50">
                    <div className="text-2xl font-display font-bold text-primary">4.9★</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
