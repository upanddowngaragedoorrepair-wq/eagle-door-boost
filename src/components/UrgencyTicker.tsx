/*
 * PERF: Ticker items duplicated only 2x — same seamless loop, half the DOM nodes.
 * GPU-accelerated via CSS. Proof points only — the phone number lives in the
 * header, the hero CTA and the sticky bar, so it isn't repeated here.
 */
import { useLocation2 } from '@/contexts/LocationContext';
import { Wrench, FileCheck, Ruler, Users, BadgeDollarSign, Clock, Award } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface TickerItem {
  Icon: LucideIcon;
  text: string;
}

const tickerItems: TickerItem[] = [
  { Icon: Award, text: 'OVER 300 GATES INSTALLED' },
  { Icon: Users, text: 'SMALL COMPANY, BIG ATTENTION TO DETAIL' },
  { Icon: Ruler, text: 'FREE DRAWING WITH EVERY ESTIMATE' },
  { Icon: Wrench, text: 'IN-HOUSE TECHS — NO SUBS' },
  { Icon: Clock, text: 'SAME-DAY SERVICE' },
  { Icon: FileCheck, text: 'FREE ESTIMATES' },
  { Icon: BadgeDollarSign, text: 'BEST PRICE GUARANTEED' },
];

export function UrgencyTicker() {
  const { phoneLink } = useLocation2();

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
            className="inline-flex items-center gap-1.5 px-6 text-sm font-bold text-white/90 transition-colors hover:text-[hsl(var(--gold-bright))]"
          >
            <item.Icon className="w-4 h-4 text-[hsl(var(--gold-bright))]" strokeWidth={2.5} />
            <span>{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
