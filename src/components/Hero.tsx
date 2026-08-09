/*
 * PERF: fetchPriority="high" on hero bg img — ensures browser fetches it first.
 * The H1 text is the true LCP element (not the image) since the image is decorative overlay.
 * explicit width/height on img avoids CLS.
 *
 * CRO: one action above the fold — the phone call. On mobile the stack is
 * badge -> headline -> subhead -> rating strip -> big call button -> bullets.
 * The estimate form is secondary (collapsed strip on mobile).
 */
import { useMemo, useState } from 'react';
import { Phone, Scaling, CheckCircle, Star, ShieldCheck, MapPin } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { HeroForm } from '@/components/HeroForm';
import { getServiceMapping, getHeroHeadline } from '@/lib/serviceMapping';
import heroGateBg from '@/assets/hero-bg.webp';

declare global {
  interface Window {dataLayer: Record<string, unknown>[];}
}

function getKeywordData(): {kw: string; headlinePhrase: string;} {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('kd') || params.get('utm_term') || params.get('keyword') || params.get('kw') || '';
  const kw = raw.toLowerCase().trim();
  const mapping = getServiceMapping();
  return { kw, headlinePhrase: getHeroHeadline(mapping.label) };
}

export function Hero() {
  const { city, phoneLink, phoneFormatted } = useLocation2();
  const { kw, headlinePhrase } = useMemo(() => getKeywordData(), []);

  const handleCallClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_call_click', cta_location: 'hero', keyword: kw });
  };

  const handleEstimateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_estimate_click', cta_location: 'hero', keyword: kw });
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

  const bullets = [
    'Over 300 Gates Installed',
    'Small Company — Real Attention To Detail',
    'Free Drawing With Every Estimate',
    'In-House Techs — No Subcontractors',
    'Same Day Service Available',
  ];


  return (
    <section className="relative pt-28 md:pt-32 pb-12 lg:pb-20 overflow-hidden hero-min bg-[hsl(var(--navy))]">
      {/* Background image with warm dark overlay */}
      <div className="absolute inset-0">
        <img
          src={heroGateBg}
          alt=""
          role="presentation"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-30 md:opacity-30"
          fetchPriority="high"
          decoding="sync"
        />
        {/* Mobile: top-to-bottom gradient (dark top/text, lighter bottom/gate visible) */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[hsl(22_30%_10%/0.62)] via-[hsl(22_28%_13%/0.34)] to-[hsl(24_25%_16%/0.10)]" />
        {/* Desktop: left-to-right gradient (dark left/text, lighter right/gate visible) */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[hsl(22_30%_10%/0.62)] via-[hsl(22_28%_13%/0.40)] to-[hsl(24_25%_16%/0.12)]" />
      </div>

      {/* Subtle warm decorative glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Content */}
          <div>
            {/* Local badge */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15">
                <Scaling className="w-4 h-4 text-[hsl(var(--gold-bright))]" />
                <span className="text-sm font-bold text-white">No Job Is Too Small or Big To Us</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl font-display font-extrabold mb-3 tracking-tight text-white">
              Local <span className="text-[hsl(var(--gold-bright))]">{headlinePhrase}</span>
            </h1>


            <p className="text-xl md:text-2xl font-display font-semibold relative inline-block headline-underline mb-7 text-white/85">
              Best Price Guarantee
            </p>

            {/* Rating / trust strip — moved above the fold */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-6 text-white/85">
              <span className="flex items-center gap-1.5">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[hsl(var(--gold-bright))] fill-[hsl(var(--gold-bright))]" />
                  ))}
                </span>
                <span className="text-sm font-bold">4.9 Google • 189+ reviews</span>
              </span>
              <span className="flex items-center gap-1.5 text-sm font-bold">
                <ShieldCheck className="w-4 h-4 text-[hsl(var(--gold-bright))]" />
                Licensed & Insured — LIC#1138855
              </span>
            </div>


            {/* Primary action — the call */}
            <a
              href={phoneLink}
              onClick={handleCallClick}
              className="btn-cta w-full sm:w-auto text-xl md:text-2xl min-h-[72px] px-9"
            >
              <Phone className="w-7 h-7" />
              Call Now: {phoneFormatted}
            </a>
            <p className="flex items-center gap-2 text-sm font-semibold text-white/75 mt-3 mb-7">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Avg. answer under 30 sec • Open 7AM–8PM
            </p>

            {/* Bullet promises — below the CTA now */}
            <ul className="space-y-2.5 mb-5">
              {bullets.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base md:text-lg text-white/90">
                  <CheckCircle className="w-5 h-5 text-[hsl(var(--gold-bright))] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-sm font-bold shine-text mb-2">
              ★ Proudly Family Owned & Operated — Serving Our Community with Honor ★
            </p>

            {/* Secondary, quiet path */}
            <a
              href="#quote-form"
              onClick={handleEstimateClick}
              className="inline-block text-sm font-semibold text-white/70 underline decoration-primary/60 underline-offset-4 hover:text-primary transition-colors"
            >
              Prefer a written quote? Send your info instead →
            </a>
          </div>

          {/* Right: Form — subordinate to the call */}
          <div className="lg:sticky lg:top-32">
            <HeroForm />
          </div>
        </div>
      </div>
    </section>);
}
