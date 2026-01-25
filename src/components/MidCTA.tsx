import { Phone, ArrowRight, Clock, Shield } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';

export function MidCTA() {
  const { phoneLink, phoneFormatted } = useUrlParams();

  return (
    <section className="py-16 md:py-20">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16">
          {/* Background */}
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(145deg, hsl(var(--card)) 0%, hsl(var(--secondary)) 50%, hsl(var(--card)) 100%)' }}
          />
          <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl" />
          
          {/* Accent glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative text-center">
            <div className="flex items-center justify-center gap-4 mb-6 text-sm">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                No obligation
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                Free estimates
              </span>
            </div>
            
            <h2 className="section-heading mb-6">
              Ready to Get <span className="gold-text">Started?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Our gate specialists are standing by to answer your questions and provide a free, no-pressure quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a href={phoneLink} className="btn-cta">
                <Phone className="w-5 h-5" />
                Call for a Quick Quote
              </a>
              <span className="text-muted-foreground hidden sm:block">or</span>
              <a 
                href="#quote-form" 
                className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors font-display uppercase tracking-wide"
              >
                Request a callback
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Call now: <a href={phoneLink} className="text-foreground font-bold hover:text-primary transition-colors">{phoneFormatted}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
