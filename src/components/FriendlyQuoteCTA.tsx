import { Phone, MessageCircle, ThumbsUp } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';

export function FriendlyQuoteCTA() {
  const { phoneLink, phoneFormatted } = useLocation2();

  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--navy))] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-main relative text-center max-w-3xl mx-auto">
        {/* Friendly icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/15 mb-6">
          <MessageCircle className="w-8 h-8 text-primary" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-card border border-border shadow-md mb-8">
          <ThumbsUp className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-navy-light">No pressure, just honest pricing</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4">
          <span className="text-white">Got a Quote Already?</span>
        </h2>

        <p className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
          Get A Competitive Quote From Us
        </p>

        <p className="text-2xl md:text-3xl font-display font-bold gradient-text mb-8">
          You Won't Regret It 😊
        </p>

        <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
          We believe in transparent pricing and quality work. Let us show you why thousands of homeowners trust us with their gates and fences.
        </p>

        {/* CTA */}
        <a href={phoneLink} className="btn-cta text-xl min-h-[68px] inline-flex">
          <Phone className="w-7 h-7" />
          Talk to a Technician: {phoneFormatted}
        </a>

        <p className="mt-6 text-sm text-white/60">
          ★ Free estimates • No obligation • Friendly experts ready to help ★
        </p>
      </div>
    </section>
  );
}

export default FriendlyQuoteCTA;
