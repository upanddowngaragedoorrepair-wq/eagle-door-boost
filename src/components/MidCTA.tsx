import { Phone } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';

export function MidCTA() {
  const { phoneLink, phoneFormatted } = useLocation2();

  return (
    <section className="py-16 md:py-20 section-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

      <div className="container-main relative text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight text-white">
          Need Service <span className="text-primary">Today?</span>
        </h2>
        <p className="text-lg text-white/60 mb-8 max-w-lg mx-auto">
          Our certified technicians are standing by — call now for a same-day quote.
        </p>
        <a href={phoneLink} className="btn-cta text-xl px-10 py-5 min-h-[64px]">
          <Phone className="w-6 h-6" />
          Call Now: {phoneFormatted}
        </a>
      </div>
    </section>
  );
}

export default MidCTA;
