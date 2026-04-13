import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';

export function StickyCallBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { phoneLink, phoneFormatted } = useLocation2();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden sticky-bar-enter">
      <div className="bg-[hsl(222,47%,11%)]/98 backdrop-blur-md border-t border-white/10 p-3">
        <a href={phoneLink} className="btn-cta w-full text-base py-3.5 min-h-[52px]">
          <Phone className="w-5 h-5" />
          Call Now: {phoneFormatted}
        </a>
      </div>
    </div>
  );
}

export default StickyCallBar;
