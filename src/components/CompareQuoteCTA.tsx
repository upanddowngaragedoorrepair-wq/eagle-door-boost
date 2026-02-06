import { Phone } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import techWorking from '@/assets/tech-working.webp';

export function CompareQuoteCTA() {
  const { phoneLink } = useLocation2();

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#ebebe0] via-[#e3e3d5] to-[#ebebe0] relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background/10 pointer-events-none" />
      
      <div className="container-main relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small technician image */}
          <div className="mb-8 flex justify-center">
            <img 
              src={techWorking} 
              alt="Eagle technician working on gate installation" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary shadow-xl shadow-primary/30"
              loading="lazy"
            />
          </div>

          {/* Headline - Large, Bold, Authoritative */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight text-secondary leading-[1.1]">
            Before You Accept Another Quote, Call Us Now —{' '}
            <span className="gold-text">You Could Save More Than Money.</span>
          </h2>

          {/* Sub-headline - Trust-focused, not pushy */}
          <p className="text-xl md:text-2xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Compare pricing, workmanship, and experience before you decide.
          </p>

          {/* Primary CTA Button */}
          <a
            href={phoneLink}
            className="btn-cta text-xl md:text-2xl px-12 md:px-16 py-5 md:py-6 min-h-[72px] md:min-h-[80px] inline-flex shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-shadow duration-300"
          >
            <Phone className="w-7 h-7 md:w-8 md:h-8" />
            Call Now for a Free Estimate
          </a>

          {/* Trust Line */}
          <p className="mt-8 text-base md:text-lg text-muted/80 font-medium tracking-wide">
            Licensed &amp; Insured • 20+ Years Experience • Avg. response time ~30 sec
          </p>
        </div>
      </div>
    </section>
  );
}
