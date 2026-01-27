import { useUrlParams } from '@/hooks/useUrlParams';

const tickerItems = [
  { emoji: '🔧', text: 'SAME-DAY SERVICE' },
  { emoji: '🆓', text: 'FREE ESTIMATE' },
  { emoji: '💵', text: '$50 OFF TODAY' },
  { emoji: '⚡', text: '24/7 EMERGENCY' },
  { emoji: '📞', text: 'CALL NOW' },
  { emoji: '⭐', text: '5-STAR RATED' },
  { emoji: '⏰', text: '30-MIN RESPONSE' },
];

export function UrgencyTicker() {
  const { phoneLink } = useUrlParams();

  // Duplicate items for seamless loop
  const items = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[hsl(42,60%,58%)] overflow-hidden">
      <div
        className="flex whitespace-nowrap py-2 animate-ticker"
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={phoneLink}
            className="inline-flex items-center gap-1.5 px-6 text-sm font-bold text-[hsl(222,47%,7%)] hover:opacity-80 transition-opacity"
          >
            <span>{item.emoji}</span>
            <span>{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
