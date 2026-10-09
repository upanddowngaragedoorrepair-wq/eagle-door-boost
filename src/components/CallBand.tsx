import { Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLocation2 } from '@/contexts/LocationContext';
import { ProgressGauge } from '@/components/ProgressGauge';

interface CallBandProps {
  /** Short line of context shown left of the button */
  headline: string;
  /** GTM cta_location value */
  location: string;
  subline?: string;
  /** Optional animated proof statistic shown above the CTA copy */
  stat?: {
    percent: number;
    label: string;
    caption?: string;
  };
}

/**
 * Slim, repeated call ask. Not another hero — one line of context + phone button.
 * Reuses the existing cta_call_click event with a distinct cta_location.
 */
export function CallBand({ headline, location, subline, stat }: CallBandProps) {
  const { phoneLink, phoneFormatted, city } = useLocation2();
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // Trigger once, when ~35% of the band is visible.
  useEffect(() => {
    if (!stat) return;
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stat]);

  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_call_click', cta_location: location });
  };

  const revealed = !stat || inView;

  return (
    <section
      ref={sectionRef}
      className={
        stat
          ? 'py-9 md:py-12 bg-[hsl(var(--navy-section))]'
          : 'py-7 md:py-9 bg-[hsl(var(--navy-section))]'
      }
    >
      <div
        className={
          stat
            ? 'container-main flex flex-col md:flex-row items-center justify-center md:justify-between gap-7 md:gap-10 text-center md:text-left'
            : 'container-main flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left'
        }
      >
        {stat && (
          <ProgressGauge
            className={`shrink-0 text-[hsl(var(--text-support))] reveal-up reveal-up-delay-1${
              inView ? ' is-revealed' : ''
            }`}
            label={stat.label}
            value={stat.percent}
            caption={stat.caption}
            duration={3500}
            start={inView}
          />
        )}

        <div
          className={`w-full md:w-auto reveal-up${stat ? ' reveal-up-delay-2' : ''}${
            revealed ? ' is-revealed' : ''
          }`}
        >
          <p className="font-display font-bold text-xl md:text-2xl text-white uppercase tracking-wide leading-tight">
            {headline}
          </p>
        </div>

        <a
          href={phoneLink}
          onClick={handleClick}
          className={`btn-cta w-full md:w-auto text-lg min-h-[60px] px-8 shrink-0 reveal-up${
            stat ? ' reveal-up-delay-3' : ''
          }${revealed ? ' is-revealed' : ''}`}
        >
          <Phone className="w-5 h-5" />
          {phoneFormatted}
        </a>
      </div>
    </section>
  );
}

export default CallBand;
