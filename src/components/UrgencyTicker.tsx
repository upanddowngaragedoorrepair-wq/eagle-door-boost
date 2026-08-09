/*
 * PERF: Ticker items duplicated only 2x — same seamless loop, half the DOM nodes.
 * GPU-accelerated via CSS. The tracking phone number is interleaved so the top
 * row always shows a number to call.
 */
import { useLocation2 } from '@/contexts/LocationContext';
import { Wrench, FileCheck, Phone, Star, Clock, Shield, BadgeDollarSign } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface TickerItem {
  Icon: LucideIcon;
  text: string;
  /** Renders the live tracking number instead of static text */
  isPhone?: boolean;
}

const tickerItems: TickerItem[] = [
  { Icon: Phone, text: 'CALL NOW', isPhone: true },
  { Icon: Wrench, text: 'SAME-DAY SERVICE' },
  { Icon: Phone, text: 'CALL NOW', isPhone: true },
  { Icon: FileCheck, text: 'FREE ESTIMATE' },
  { Icon: Phone, text: 'CALL NOW', isPhone: true },
  { Icon: Shield, text: 'LICENSED & INSURED' },
  { Icon: Phone, text: 'CALL NOW', isPhone: true },
  { Icon: Star, text: '5-STAR RATED' },
  { Icon: Phone, text: 'CALL NOW', isPhone: true },
  { Icon: Clock, text: '30-MIN RESPONSE' },
  { Icon: Phone, text: 'CALL NOW', isPhone: true },
  { Icon: BadgeDollarSign, text: 'BEST PRICE GUARANTEED' },
];

export function UrgencyTicker() {
  const { phoneLink, phoneFormatted } = useLocation2();

  // 2 copies is sufficient for a seamless infinite loop
  const items = [...tickerItems, ...tickerItems];

  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_call_click', cta_location: 'ticker' });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] overflow-hidden bg-[hsl(var(--navy-deep))]">
      {/* will-change:transform enables GPU compositing — avoids layout thrashing */}
      <div className="flex whitespace-nowrap py-2 animate-ticker" style={{ willChange: 'transform' }}>
        {items.map((item, index) => (
          <a
            key={index}
            href={phoneLink}
            onClick={handleClick}
            className={`inline-flex items-center gap-1.5 px-6 text-sm font-bold transition-colors ${
              item.isPhone ? 'text-primary hover:text-white' : 'text-white/90 hover:text-primary'
            }`}
          >
            <item.Icon className="w-4 h-4" strokeWidth={2.5} />
            <span>{item.isPhone ? `CALL NOW: ${phoneFormatted}` : item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
