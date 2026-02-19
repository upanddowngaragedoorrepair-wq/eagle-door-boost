import { Phone, Shield, Clock, ArrowRight } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';

export function MidCTA() {
  const { phoneLink } = useLocation2();

  return (
    <section className="py-[72px] md:py-24 relative overflow-hidden border-t border-border" style={{ background: 'hsl(200, 45%, 13%)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-main relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/15 border border-primary/40 mb-10">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-base font-bold text-primary uppercase tracking-wide">Fast Response Guaranteed</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight text-white">
            Ready to Get Your Gate
            <br />
            <span className="gold-text">Working Perfectly?</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Skip the endless searching. Our certified technicians are standing by to provide expert gate repair, installation, and access control solutions.
          </p>

          <a href={phoneLink} className="btn-cta text-2xl px-14 py-6 min-h-[80px] mb-10">
            <Phone className="w-7 h-7" />
            Call for an Instant Quote
            <ArrowRight className="w-6 h-6" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-8 text-base text-white/70">
            <span className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              No obligation
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              Free estimates
            </span>
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              Technicians available now
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MidCTA;
