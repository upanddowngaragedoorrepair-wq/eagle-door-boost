import { useUrlParams } from '@/hooks/useUrlParams';
import { Wrench, FileCheck, Phone, Star, Clock, Shield, BadgeDollarSign, CalendarCheck } from 'lucide-react';
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
  const { phoneLink } = useUrlParams();

  // Duplicate items for seamless loop
  const items = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[hsl(42,60%,58%)] overflow-hidden">
      <div className="flex whitespace-nowrap py-2 animate-ticker">
        {items.map((item, index) => (
          <a
            key={index}
            href={phoneLink}
            className="inline-flex items-center gap-1.5 px-6 text-sm font-bold text-[hsl(222,47%,7%)] hover:opacity-80 transition-opacity"
          >
            <item.Icon className="w-4 h-4" strokeWidth={2.5} />
            <span>{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}