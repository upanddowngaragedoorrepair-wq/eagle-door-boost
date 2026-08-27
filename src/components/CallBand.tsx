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
  const progressRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [displayPercent, setDisplayPercent] = useState(0);

  // Start the fill only when the bar scrolls into view (once).
  useEffect(() => {
    if (!progress) return;
    const el = progressRef.current;
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

  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_call_click', cta_location: location });
  };

  return (
    <section className="py-7 md:py-9 bg-[hsl(var(--navy))] border-b-4 border-[hsl(var(--gold-bright))]">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
        <div className="w-full md:w-auto">
          <p className="font-display font-bold text-xl md:text-2xl text-white uppercase tracking-wide leading-tight">
            {headline}
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-white/70 mt-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <Clock className="w-4 h-4 text-[hsl(var(--gold-bright))]" />
            {subline ?? `Same day service available in ${city}`}
          </p>

          {progress && (
            <div ref={progressRef} className="mt-4 w-full md:max-w-md">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-sm font-semibold text-[hsl(var(--gold-bright))]">
                  {progress.label}
                </span>
                <span
                  className="inline-flex items-center rounded-full bg-[hsl(var(--gold-bright))] text-[hsl(var(--navy))] text-xs font-extrabold px-2.5 py-1 leading-none shadow-[0_0_14px_hsl(38_84%_58%/0.5)] tabular-nums"
                  aria-label={`${progress.percent} percent`}
                >
                  {displayPercent}%
                </span>
              </div>
              <div className="relative h-4 w-full rounded-full bg-white/10 border border-white/15 shadow-[inset_0_1px_3px_hsl(0_0%_0%/0.35)]">
                <div
                  className={`relative h-full rounded-full bg-gradient-to-r from-[hsl(var(--gold-bright))] to-[hsl(43,92%,62%)] shadow-[0_0_16px_hsl(38_84%_58%/0.6)] progress-bar-fill${inView ? ' is-filled' : ''}`}
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
          className="btn-cta w-full md:w-auto text-lg min-h-[60px] px-8 shrink-0"
        >
          <Phone className="w-5 h-5" />
          {phoneFormatted}
        </a>
      </div>
    </section>
  );
}

export default CallBand;
