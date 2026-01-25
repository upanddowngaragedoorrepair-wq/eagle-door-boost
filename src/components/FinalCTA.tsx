import { Phone, Shield, Clock } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';

export function FinalCTA() {
  const { phoneLink, phoneFormatted } = useUrlParams();

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Direct line • Available now</span>
          </div>

          <h2 className="section-heading mb-6">
            Talk Directly With a
            <br />
            <span className="gold-text">Field Technician</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Skip the call center. Get expert answers immediately from someone who's actually worked on thousands of gates.
          </p>

          <a href={phoneLink} className="btn-cta text-xl px-10 py-5 mb-6">
            <Phone className="w-6 h-6" />
            {phoneFormatted}
          </a>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              No obligation
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Free estimates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
