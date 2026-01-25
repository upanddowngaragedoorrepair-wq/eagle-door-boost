import { useEffect, useRef } from 'react';

const tickerItems = [
  { emoji: '⚡', text: 'SAME-DAY SERVICE' },
  { emoji: '🆓', text: 'FREE ESTIMATES' },
  { emoji: '⭐', text: '5-STAR RATED' },
  { emoji: '📞', text: 'CALL NOW' },
  { emoji: '🔧', text: 'EXPERT TECHNICIANS' },
  { emoji: '✓', text: 'LICENSED & INSURED' },
];

export function UrgencyTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

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
          <span
            key={index}
            className="inline-flex items-center gap-1.5 px-6 text-sm font-bold text-primary-foreground"
          >
            <span>{item.emoji}</span>
            <span>{item.text}</span>
            <span className="mx-4 text-primary-foreground/50">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
