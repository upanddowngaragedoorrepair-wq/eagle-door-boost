import { useMemo } from 'react';
import { Phone, MessageSquare, Shield, CheckCircle } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { HeroForm } from '@/components/HeroForm';

declare global {
  interface Window { dataLayer: Record<string, unknown>[]; }
}

function getKeywordPrefix(): { prefix: string; kw: string } {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('utm_term') || params.get('keyword') || params.get('kw') || '';
  const kw = raw.toLowerCase().trim();

  if (!kw) return { prefix: '', kw };
  if (/access|intercom|keypad/.test(kw)) return { prefix: 'Gate Access Control ', kw };
  if (/automatic|electric|opener|motor/.test(kw)) return { prefix: 'Automatic ', kw };
  if (/fence/.test(kw)) return { prefix: 'Fence & Gate ', kw };
  return { prefix: '', kw };
}

export function Hero() {
  const { city, phoneLink, phoneFormatted } = useLocation2();
  const { prefix, kw } = useMemo(() => getKeywordPrefix(), []);

  const handleCallClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_call_click', cta_location: 'hero', keyword: kw, modifier: prefix.trim() });
  };

  const handleEstimateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_estimate_click', cta_location: 'hero', keyword: kw, modifier: prefix.trim() });
    document.querySelector('#quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-16 lg:pb-24 bg-background overflow-hidden">
      {/* Subtle decorative shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Trust Row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-card border border-border shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <span className="text-lg font-bold text-foreground">4.9</span>
                <span className="text-sm text-muted-foreground">(189+)</span>
              </div>
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-card border border-border shadow-sm">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-foreground">Licensed & Insured</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-green-50 border border-green-200 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-bold text-green-700">Technicians Available</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-4 tracking-tight text-foreground">
              {prefix}Gate Repair &amp; Installation
              {city && (
                <>
                  {' '}in <span className="gradient-text">{city}</span>
                </>
              )}
            </h1>

            <p className="text-2xl md:text-3xl font-display font-semibold text-muted-foreground relative inline-block headline-underline mb-8">
              Best Price Guarantee
            </p>

            {/* Bullet Promises */}
            <ul className="space-y-3 mb-8">
              {[
              'Licensed & Insured — LIC#1138855',
              'Same Day Service Available',
              'Free Estimates — No Obligation',
              '20+ Years of Experience',
              '$0 Check-up Fee'].
              map((item, i) =>
              <li key={i} className="flex items-center gap-3 text-lg text-foreground/90">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  {item}
                </li>
              )}
            </ul>

            {/* Family Owned */}
            <p className="text-base font-bold shine-text mb-8">
              ★ Proudly Family Owned & Operated — Serving Our Community with Honor ★
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={phoneLink} onClick={handleCallClick} className="btn-cta text-lg min-h-[64px] px-8">
                <Phone className="w-6 h-6" />
                Call Now: {phoneFormatted}
              </a>
              <a
                href="#quote-form"
                onClick={handleEstimateClick}
                className="btn-secondary min-h-[60px] px-8 text-lg">
                <MessageSquare className="w-5 h-5" />
                Free Estimate
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:sticky lg:top-32">
            <HeroForm />
          </div>
        </div>
      </div>
    </section>);
}
