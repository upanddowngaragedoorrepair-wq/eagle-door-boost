import { Phone } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { ProgressGauge } from '@/components/ProgressGauge';

interface CallBandProps {
  /** Short line of context shown left of the button */
  headline: string;
  /** Optional small supporting line under the headline */
  subline?: string;
  /** GTM cta_location value */
  location: string;
  /** Optional animated proof statistic; switches to the contained card layout */
  stat?: {
    percent: number;
    label: string;
    caption?: string;
  };
}


/**
 * Two layouts:
 *  - stat variant: a contained navy card on a light background — gauge left,
 *    headline + checklist + call button right (stacks on mobile, gauge first).
 *  - default: slim, repeated call ask — one line of context + phone button.
 * Reuses the existing cta_call_click event with a distinct cta_location.
 */
export function CallBand({ headline, location, stat }: CallBandProps) {
  const { phoneLink, phoneFormatted } = useLocation2();

  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_call_click', cta_location: location });
  };

  if (stat) {
    return (
      <section className="py-14 md:py-20 bg-[hsl(var(--surface-light))] overflow-hidden">
        <div className="container-main">
          <div className="relative overflow-hidden rounded-2xl border border-[hsl(var(--gold-cta)/0.3)] shadow-[var(--shadow-lg)] bg-[linear-gradient(135deg,hsl(var(--navy-section))_0%,hsl(215_75%_10%)_100%)] px-6 py-10 md:p-12 lg:p-14">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px] bg-[hsl(var(--gold-cta))]" />
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-6 md:gap-12">
              <div className="flex justify-center">
                <ProgressGauge label={stat.label} caption={stat.caption} value={stat.percent} duration={2500} />
              </div>
              <div className="flex flex-col gap-6 text-center md:text-left">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-white tracking-tight leading-tight text-balance max-w-[14ch] mx-auto md:max-w-none md:mx-0 lg:whitespace-nowrap">
                  {headline}
                </h2>
                <a href={phoneLink} onClick={handleClick} className="btn-cta w-full">
                  <Phone className="w-5 h-5" />
                  {phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-7 md:py-9 bg-[hsl(var(--navy-section))]">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
        <p className="font-display font-bold text-xl md:text-2xl text-white uppercase tracking-wide leading-tight">
          {headline}
        </p>
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
