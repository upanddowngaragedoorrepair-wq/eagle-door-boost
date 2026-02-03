import { Phone, Shield, Clock, ArrowRight } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';
export function FinalCTA() {
  const {
    phoneLink,
    phoneFormatted
  } = useUrlParams();
  return <section className="py-20 md:py-28 border-t border-border bg-gradient-to-b from-background to-secondary/30 text-destructive-foreground bg-secondary">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/40 mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-bold text-primary uppercase tracking-wide">Direct Line • Available Now</span>
          </div>

          <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            Talk Directly With a
            <br />
            <span className="gold-text">Field Technician</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Skip the call center. Get expert answers immediately from someone who's actually worked on thousands of gates.
          </p>

          <a href={phoneLink} className="btn-cta text-2xl px-14 py-6 min-h-[80px] mb-8">
            <Phone className="w-7 h-7" />
            {phoneFormatted}
            <ArrowRight className="w-6 h-6" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              No obligation
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Free estimates
            </span>
          </div>
        </div>
      </div>
    </section>;
}