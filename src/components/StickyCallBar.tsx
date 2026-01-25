import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { useUrlParams } from '@/hooks/useUrlParams';
import { useScrollCTA } from '@/hooks/useScrollCTA';

export function StickyCallBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { phoneLink } = useUrlParams();
  const { text, subtext } = useScrollCTA();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 400px)
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden sticky-bar-enter">
      <div className="bg-card/95 backdrop-blur-lg border-t border-border p-4">
        <a
          href={phoneLink}
          className="btn-cta w-full text-base"
        >
          <Phone className="w-5 h-5" />
          {text}
        </a>
        <p className="text-center text-xs text-muted-foreground mt-2">
          {subtext}
        </p>
      </div>
    </div>
  );
}
