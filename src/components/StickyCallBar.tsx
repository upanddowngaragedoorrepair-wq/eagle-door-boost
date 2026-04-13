import { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';

export function StickyCallBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { phoneLink } = useLocation2();

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
      <div className="bg-card/98 backdrop-blur-lg border-t-2 border-primary/40 p-3 shadow-lg">
        <a href={phoneLink} className="btn-cta w-full text-sm py-3 min-h-[52px]">
          <Phone className="w-5 h-5" />
          Talk To A Specialist
        </a>
      </div>
    </div>
  );
}

export default StickyCallBar;
