import { Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLocation2 } from '@/contexts/LocationContext';

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
  const [displayPercent, setDisplayPercent] = useState(0);
  const [statDone, setStatDone] = useState(false);

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

  // Smooth ease-out count-up, ~1.35s, once.
  useEffect(() => {
    if (!inView || !stat) return;
    const target = stat.percent;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setDisplayPercent(target);
      setStatDone(true);
      return;
    }
    const duration = 1350;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setDisplayPercent(Math.round(target * eased));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setStatDone(true);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, stat]);

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
          ? 'py-9 md:py-12 bg-[hsl(var(--navy))] bg-gradient-to-b from-[hsl(213_70%_16%)] to-[hsl(var(--navy))] border-b border-white/10'
          : 'py-7 md:py-9 bg-gradient-to-br from-[hsl(var(--navy-light))] to-[hsl(var(--navy))] border-b border-white/10'
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
          <div className="w-full md:w-auto text-center md:text-left shrink-0">
            <div
              className={`font-display font-extrabold text-[4.25rem] md:text-[5.25rem] leading-[0.9] tracking-tight text-[hsl(var(--gold-bright))] tabular-nums reveal-up${
                inView ? ' is-revealed' : ''
              }${statDone ? ' stat-settle' : ''}`}
            >
              {displayPercent}%
            </div>
            <p
              className={`mt-2 text-[0.9375rem] md:text-base font-medium text-white/85 max-w-[16rem] mx-auto md:mx-0 reveal-up reveal-up-delay-1${
                inView ? ' is-revealed' : ''
              }`}
            >
              {stat.label}
            </p>
          </div>
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
