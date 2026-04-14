/*
 * PERF: fetchPriority="high" on hero bg img — ensures browser fetches it first.
 * The H1 text is the true LCP element (not the image) since the image is decorative overlay.
 * explicit width/height on img avoids CLS.
 */
import { useMemo, useState } from 'react';
import { Phone, MessageSquare, Scaling, CheckCircle } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { HeroForm } from '@/components/HeroForm';
import { getServiceMapping } from '@/lib/serviceMapping';
import heroGateBg from '@/assets/hero-bg.webp';

declare global {
  interface Window {dataLayer: Record<string, unknown>[];}
}

function getKeywordData(): {kw: string; headlineWord: string;} {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('kd') || params.get('utm_term') || params.get('keyword') || params.get('kw') || '';
  const kw = raw.toLowerCase().trim();
  const mapping = getServiceMapping();
  return { kw, headlineWord: mapping.label || 'Gate & Access Control' };
}

export function Hero() {
  const { city, phoneLink, phoneFormatted } = useLocation2();
  const { kw, headlineWord } = useMemo(() => getKeywordData(), []);
  const [arrivalMin] = useState(() => Math.floor(Math.random() * 21) + 70);

  const handleCallClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_call_click', cta_location: 'hero', keyword: kw });
  };

  const handleEstimateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_estimate_click', cta_location: 'hero', keyword: kw, modifier: prefix.trim() });
    const target = document.querySelector('#quote-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    // Section not yet rendered (lazy-loaded) — scroll to bottom to trigger loading, then retry
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    const retryInterval = setInterval(() => {
      const el = document.querySelector('#quote-form');
      if (el) {
        clearInterval(retryInterval);
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
    setTimeout(() => clearInterval(retryInterval), 3000);
  };

  return (
    <section className="relative pt-32 pb-16 lg:pb-24 overflow-hidden hero-min bg-[hsl(var(--navy))]">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={heroGateBg}
          alt=""
          role="presentation"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-50 md:opacity-50"
          fetchPriority="high"
          decoding="sync"
        />
        {/* Mobile: top-to-bottom gradient (dark top/text, lighter bottom/gate visible) */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[hsl(200_45%_10%/0.93)] via-[hsl(200_45%_12%/0.75)] to-[hsl(200_45%_14%/0.55)]" />
        {/* Desktop: left-to-right gradient (dark left/text, lighter right/gate visible) */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[hsl(200_45%_10%/0.95)] via-[hsl(200_45%_12%/0.88)] to-[hsl(200_45%_14%/0.65)]" />
        {/* Extra top/bottom fade for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(200_45%_10%/0.4)] via-transparent to-[hsl(200_45%_10%/0.5)]" />
      </div>

      {/* Subtle decorative glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Trust Row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm shadow-lg">
                <Scaling className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-white">No Job Is Too Small or Big To Us</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05] mb-4 tracking-tight text-white">
              Local <span className="text-primary">{headlineWord}</span> Experts
            </h1>

            <p className="text-2xl md:text-3xl font-display font-semibold relative inline-block headline-underline mb-8 text-white/80">
              Best Price Guarantee
            </p>

            {/* Bullet Promises */}
            <ul className="space-y-3 mb-8">
              {[
              'Licensed & Insured — LIC#1138855',
              'Same Day Service Available',
              'Free Estimates — No Obligation',
              '20+ Years of Experience',
              'Residential & Commercial'].
              map((item, i) =>
              <li key={i} className="flex items-center gap-3 text-lg text-white/90">
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
              <a href={phoneLink} onClick={handleCallClick} className="btn-cta text-lg min-h-[64px] px-8 shadow-[0_4px_30px_-4px_hsl(42_74%_46%/0.5)]">
                <Phone className="w-6 h-6" />
                Call Now: {phoneFormatted}
              </a>
              <a
                href="#quote-form"
                onClick={handleEstimateClick}
                className="inline-flex items-center justify-center gap-2.5 px-8 text-lg min-h-[60px] font-semibold rounded-2xl transition-all duration-300 bg-white/10 text-white border-2 border-white/25 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5"
                style={{ fontFamily: "'Oswald', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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