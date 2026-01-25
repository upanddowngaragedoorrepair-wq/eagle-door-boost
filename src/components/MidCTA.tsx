import { Phone, ArrowRight } from 'lucide-react';
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
            style={{ background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--secondary)) 100%)' }}
          />
          <div className="absolute inset-0 border border-primary/20 rounded-3xl" />
          
          {/* Accent glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative text-center">
            <p className="micro-copy mb-4">No obligation • Free estimates</p>
            
            <h2 className="section-heading mb-6">
              Ready to Get <span className="gold-text">Started?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Our gate specialists are standing by to answer your questions and provide a free, no-pressure quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={phoneLink} className="btn-cta">
                <Phone className="w-5 h-5" />
                Call for a Quick Quote
              </a>
              <span className="text-muted-foreground hidden sm:block">or</span>
              <a 
                href="#quote-form" 
                className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Request a callback
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Call now: <span className="text-foreground font-semibold">{phoneFormatted}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
