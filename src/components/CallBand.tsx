import { Phone, Clock } from 'lucide-react';
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
            <div className="mt-4 w-full md:max-w-md">
              <div className="flex items-center justify-between text-sm font-semibold text-white mb-1.5">
                <span className="text-[hsl(var(--gold-bright))]">{progress.label}</span>
                <span className="text-white">{progress.percent}%</span>
              </div>
              <div className="h-3 w-full rounded-full bg-white/15 overflow-hidden border border-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--gold-bright))] to-[hsl(43,92%,62%)] shadow-[0_0_12px_hsl(38_84%_58%_/0.55)] progress-bar-fill"
                  style={{ width: `${progress.percent}%` }}
                />
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
