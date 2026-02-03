import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { useScrollCTA } from '@/hooks/useScrollCTA';

export function StickyCallBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { phoneLink, phoneFormatted } = useLocation2();
  const { text, subtext } = useScrollCTA();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden sticky-bar-enter">
      <div className="bg-background/98 backdrop-blur-lg border-t-2 border-primary/40 p-4 shadow-2xl">
        <a
          href={phoneLink}
          className="btn-cta w-full text-base py-4 min-h-[64px]"
        >
          <Phone className="w-6 h-6" />
          {text}
        </a>
        <p className="text-center text-xs text-muted-foreground mt-2.5 font-medium">
          {subtext}
        </p>
      </div>
    </div>
  );
}
