import { Phone, Shield, Clock, ArrowRight, Zap } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';

export function FinalCTA() {
  const { phoneLink, phoneFormatted } = useLocation2();

  return (
    <section className="py-24 md:py-32 border-t border-border bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />
      
      <div className="container-main relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 mb-10 shadow-lg">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            <span className="text-base font-bold text-green-400 uppercase tracking-wide">Direct Line • Available Now</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight">
            Talk Directly With a
            <br />
            <span className="gold-text">Field Technician</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Skip the call center. Get expert answers immediately from someone who's actually worked on thousands of gates.
          </p>

          <a href={phoneLink} className="btn-cta text-2xl md:text-3xl px-16 py-7 min-h-[88px] mb-10">
            <Phone className="w-8 h-8" />
            {phoneFormatted}
            <ArrowRight className="w-7 h-7" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-10 text-base text-muted-foreground">
            <span className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              No obligation
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              Free estimates
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              Same day service
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
