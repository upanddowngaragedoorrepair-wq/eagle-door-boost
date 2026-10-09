import { Phone, Check } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { ProgressGauge } from '@/components/ProgressGauge';

interface CallBandProps {
  /** Short line of context shown left of the button */
  headline: string;
  /** GTM cta_location value */
  location: string;
  /** Optional animated proof statistic; switches to the contained card layout */
  stat?: {
    percent: number;
    label: string;
    caption?: string;
  };
}

const CHECKLIST = [
  'Licensed & insured',
  'Free estimates',
  'Same-day service available',
  'Warranty on repairs',
];

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
      <section className="py-12 md:py-20 bg-[hsl(var(--surface-light))]">
        <div className="container-main">
          <div className="rounded-2xl bg-[hsl(var(--navy-section))] border border-[hsl(var(--gold-cta)/0.3)] shadow-[var(--shadow-lg)] p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-10 md:gap-14">
              {/* Left: proof gauge */}
              <div className="flex justify-center">
                <ProgressGauge
                  className="text-[hsl(var(--text-support))]"
                  label={stat.label}
                  caption={stat.caption}
                  value={stat.percent}
                  duration={3500}
                />
              </div>

              {/* Right: headline, checklist, call CTA */}
              <div className="text-center md:text-left">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight leading-tight">
                  {headline}
                </h2>
                <ul className="mt-6 space-y-2.5">
                  {CHECKLIST.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-center md:justify-start gap-3 text-[hsl(var(--text-support))] text-base md:text-lg"
                    >
                      <Check className="w-5 h-5 text-[hsl(var(--gold-cta))] shrink-0" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={phoneLink}
                  onClick={handleClick}
                  className="btn-cta w-full md:w-auto mt-8 md:mt-10"
                >
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
