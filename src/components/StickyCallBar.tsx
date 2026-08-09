import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';

/**
 * Floating call bar. Hidden over the hero (which already has a big call CTA) and
 * slides in once the visitor scrolls past roughly the first screen.
 * Scroll handling is passive + rAF-throttled to keep it off the main-thread budget.
 */
export function StickyCallBar() {
  const { phoneLink, phoneFormatted } = useLocation2();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const threshold = () => {
      const hero = document.querySelector('section.hero-min') as HTMLElement | null;
      return hero ? hero.offsetHeight * 0.75 : window.innerHeight * 0.7;
    };

    const update = () => {
      frame = 0;
      setVisible(window.scrollY > threshold());
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const handleClick = (place: string) => () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_call_click', cta_location: place });
  };

  if (!visible) return null;

  return (
    <>
      {/* Mobile: full-width bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden sticky-bar-enter">
        <div className="bg-[hsl(var(--navy))] border-t-2 border-primary/60 px-3 pt-2.5 pb-3 shadow-lg">
          <a
            href={phoneLink}
            onClick={handleClick('sticky')}
            className="btn-cta btn-pulse w-full text-lg py-3 min-h-[56px]"
          >
            <Phone className="w-5 h-5" />
            Call {phoneFormatted}
          </a>
          <p className="flex items-center justify-center gap-2 text-[11px] font-semibold text-white/70 mt-1.5 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open now — techs available
          </p>
        </div>
      </div>

      {/* Desktop: compact pill bottom-right */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50 sticky-bar-enter">
        <a
          href={phoneLink}
          onClick={handleClick('sticky_desktop')}
          className="btn-cta btn-pulse text-lg min-h-[60px] px-7 flex-col !gap-0 items-start"
        >
          <span className="flex items-center gap-2.5">
            <Phone className="w-5 h-5" />
            {phoneFormatted}
          </span>
          <span className="text-[10px] font-semibold tracking-widest opacity-80">
            Open now — tap to call
          </span>
        </a>
      </div>
    </>
  );
}

export default StickyCallBar;
