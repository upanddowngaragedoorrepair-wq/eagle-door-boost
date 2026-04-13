import { Wrench, FileCheck, Phone, Star, Clock, Shield, BadgeDollarSign, CalendarCheck } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { LucideIcon } from 'lucide-react';

interface TickerItem {
  Icon: LucideIcon;
  text: string;
}

const tickerItems: TickerItem[] = [
  { Icon: Wrench, text: 'SAME-DAY SERVICE' },
  { Icon: FileCheck, text: 'FREE ESTIMATE' },
  { Icon: Shield, text: 'LICENSED & INSURED' },
  { Icon: Phone, text: 'CALL NOW' },
  { Icon: Star, text: '5-STAR RATED' },
  { Icon: Clock, text: '30-MIN RESPONSE' },
  { Icon: BadgeDollarSign, text: 'BEST PRICE GUARANTEED' },
  { Icon: CalendarCheck, text: 'ALWAYS ON TIME' },
];

export function UrgencyTicker() {
  const { phoneLink } = useLocation2();
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] overflow-hidden bg-[hsl(var(--navy))]">
      <div className="flex whitespace-nowrap py-2 animate-ticker" style={{ willChange: 'transform' }}>
        {items.map((item, index) => (
          <a
            key={index}
            href={phoneLink}
            className="inline-flex items-center gap-1.5 px-6 text-xs font-bold text-white/80 hover:text-primary transition-colors"
          >
            <item.Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
            <span>{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
