import { Phone, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLocation2 } from '@/contexts/LocationContext';

interface CallBandProps {
  /** Short line of context shown left of the button */
  headline: string;
  /** GTM cta_location value */
  location: string;
  subline?: string;
  /** Optional animated progress bar between text and CTA */
  progress?: {
    percent: number;
    label: string;
  };
}

/**
 * Slim, repeated call ask. Not another hero — one line of context + phone button.
 * Reuses the existing cta_call_click event with a distinct cta_location.
 */
export function CallBand({ headline, location, subline, progress }: CallBandProps) {
  const { phoneLink, phoneFormatted, city } = useLocation2();
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [displayPercent, setDisplayPercent] = useState(0);
  const [emphasize, setEmphasize] = useState(false);


  // Start the fill only when the bar scrolls into view (once).
  useEffect(() => {
    if (!progress) return;
    const el = progressRef.current ?? sectionRef.current;
    if (!el) return;


    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [progress]);

  // Count the percentage number up in sync with the bar fill (~1.8s).
  useEffect(() => {
    if (!inView || !progress) return;
    const target = progress.percent;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setDisplayPercent(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, progress]);

  // One soft emphasis on the phone button once the bar finishes filling.
  useEffect(() => {
    if (!inView || !progress) return;
    const t = setTimeout(() => setEmphasize(true), 2100);
    return () => clearTimeout(t);
  }, [inView, progress]);

  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_call_click', cta_location: location });
  };

  const revealed = !progress || inView;

  return (
    <section
      ref={sectionRef}
      className={
        progress
          ? 'py-8 md:py-10 bg-[hsl(var(--navy))] bg-gradient-to-b from-[hsl(213_70%_16%)] to-[hsl(var(--navy))] border-b border-white/10'
          : 'py-7 md:py-9 bg-gradient-to-br from-[hsl(var(--navy-light))] to-[hsl(var(--navy))] border-b border-white/10'
      }
    >
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
        <div className={`w-full md:w-auto reveal-up${revealed ? ' is-revealed' : ''}`}>
          <p className="font-display font-bold text-xl md:text-2xl text-white uppercase tracking-wide leading-tight">
            {headline}
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base font-medium text-white/90 mt-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <Clock className="w-4 h-4 text-[hsl(var(--gold-bright))]" />
            {subline ?? `Same day service available in ${city}`}
          </p>

          {progress && (
            <div
              className={`mt-4 w-full md:max-w-md reveal-up reveal-up-delay-1${inView ? ' is-revealed' : ''}`}
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-sm font-semibold text-white">
                  {progress.label}
                </span>
                <span
                  className="inline-flex items-center rounded-full bg-[hsl(var(--gold-bright))] text-[hsl(var(--gold-ink))] text-xs font-extrabold px-2.5 py-1 leading-none shadow-[0_4px_14px_-4px_hsl(43_89%_40%/0.6)] tabular-nums"
                  aria-label={`${progress.percent} percent`}
                >
                  {displayPercent}%
                </span>
              </div>
              <div className="relative h-4 w-full rounded-full bg-white/12 border border-white/20 shadow-[inset_0_1px_3px_hsl(0_0%_0%/0.35)]">
                <div
                  className={`relative h-full rounded-full bg-gradient-to-r from-[hsl(45_92%_58%)] to-[hsl(38_90%_47%)] shadow-[0_2px_10px_-2px_hsl(43_89%_45%/0.55)] progress-bar-fill${inView ? ' is-filled' : ''}`}
                  style={{ '--progress-target': `${progress.percent}%` } as React.CSSProperties}
                >
                  <span className="progress-shimmer" aria-hidden="true" />
                </div>
              </div>
            </div>
          )}
        </div>

        <a
          href={phoneLink}
          onClick={handleClick}
          className={`btn-cta w-full md:w-auto text-lg min-h-[60px] px-8 shrink-0${emphasize ? ' btn-emphasis' : ''}`}
        >
          <Phone className="w-5 h-5" />
          {phoneFormatted}
        </a>
      </div>
    </section>
  );
}


export default CallBand;
