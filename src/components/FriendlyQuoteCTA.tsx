import { Phone, MessageCircle, ThumbsUp } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';

export function FriendlyQuoteCTA() {
  const { phoneLink, phoneFormatted } = useLocation2();

  return (
    <section className="py-8 md:py-12 bg-[hsl(var(--navy))] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-4 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-4 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-main relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left: text content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border shadow-md mb-4">
              <ThumbsUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-navy-light">No pressure, just honest pricing</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white mb-1">
              Got a Quote Already?
            </h2>
            <p className="text-xl md:text-2xl font-display font-bold text-white mb-1">
              Get A Competitive Quote From Us.{' '}
              <span className="gradient-text">You Won't Regret It 😊</span>
            </p>
            <p className="text-base text-white/60 mt-2">
              ★ Free estimates • No obligation • Friendly experts ready to help ★
            </p>
          </div>

          {/* Right: CTA */}
          <div className="flex-shrink-0 text-center md:text-right">
            <a href={phoneLink} className="btn-cta text-lg min-h-[60px] inline-flex">
              <Phone className="w-6 h-6" />
              Talk to a Technician: {phoneFormatted}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FriendlyQuoteCTA;
