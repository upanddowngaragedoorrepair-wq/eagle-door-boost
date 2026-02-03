import { Phone, Shield, Clock, ArrowRight } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';
import midCtaBg from '@/assets/mid-cta-bg.jpeg';

export function MidCTA() {
  const { phoneLink } = useUrlParams();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${midCtaBg})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/85" />
      
      <div className="container-main relative">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 bg-card/80 backdrop-blur-sm border border-border">
          {/* Glow effects */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          
          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/40 mb-8">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wide">Fast Response Guaranteed</span>
            </div>

            <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl mb-6">
              Ready to Get Your Gate
              <br />
              <span className="gold-text">Working Perfectly?</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skip the endless searching. Our certified technicians are standing by to provide expert gate repair, installation, and access control solutions.
            </p>

            <a href={phoneLink} className="btn-cta text-xl px-12 py-5 min-h-[72px] mb-8">
              <Phone className="w-6 h-6" />
              Call for a Quick Quote
              <ArrowRight className="w-5 h-5" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                No obligation
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Free estimates
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Technicians available now
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
