import { useEffect, useRef } from 'react';
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
  const tickerRef = useRef<HTMLDivElement>(null);
  const { phoneLink } = useUrlParams();

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      if (position <= -50) {
        position = 0;
      }
      ticker.style.transform = `translateX(${position}%)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const items = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary overflow-hidden">
      <div
        ref={tickerRef}
        className="flex whitespace-nowrap py-2"
        style={{ width: '200%' }}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={phoneLink}
            className="inline-flex items-center gap-1.5 px-6 text-sm font-bold text-primary-foreground hover:opacity-80 transition-opacity"
          >
            <span>{item.emoji}</span>
            <span>{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
