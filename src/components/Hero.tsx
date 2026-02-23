/*
 * PERF: fetchPriority="high" on hero bg img — ensures browser fetches it first.
 * The H1 text is the true LCP element (not the image) since the image is decorative overlay.
 * explicit width/height on img avoids CLS.
 */
import { useMemo } from 'react';
import { Phone, MessageSquare, Shield, CheckCircle } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { HeroForm } from '@/components/HeroForm';
import heroGateBg from '@/assets/hero-gate-bg.webp';

declare global {
  interface Window {dataLayer: Record<string, unknown>[];}
}

function getKeywordData(): {prefix: string; kw: string; headlineWord: string;} {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('kd') || params.get('utm_term') || params.get('keyword') || params.get('kw') || '';
  const kw = raw.toLowerCase().trim();

  if (!kw) return { prefix: '', kw, headlineWord: 'Gate' };

  if (/access|intercom|keypad|smart.?entry|buzzer|callbox|entry.?system/.test(kw)) return { prefix: 'Gate Access Control ', kw, headlineWord: 'Access Control' };
  if (/automatic|electric|opener|motor|liftmaster|operator|remote|battery/.test(kw)) return { prefix: 'Automatic ', kw, headlineWord: 'Automatic Gate' };
  if (/fence|fencing|railing|picket|vinyl fence|chain.?link|wrought iron/.test(kw)) return { prefix: 'Fence & Gate ', kw, headlineWord: 'Fence & Gate' };
  if (/driveway|driveway gate|residential gate/.test(kw)) return { prefix: 'Driveway ', kw, headlineWord: 'Driveway Gate' };
  if (/sliding|slide gate/.test(kw)) return { prefix: 'Sliding ', kw, headlineWord: 'Sliding Gate' };
  if (/swing|swing gate|pedestrian/.test(kw)) return { prefix: 'Swing ', kw, headlineWord: 'Swing Gate' };
  if (/commercial|industrial|warehouse|hoa|business/.test(kw)) return { prefix: 'Commercial ', kw, headlineWord: 'Commercial Gate' };
  if (/repair|broken|fix|stuck|maintenance|service|emergency/.test(kw)) return { prefix: '', kw, headlineWord: 'Gate Repair' };

  return { prefix: '', kw, headlineWord: 'Gate' };
}

export function Hero() {
  const { city, phoneLink, phoneFormatted } = useLocation2();
  const { prefix, kw, headlineWord } = useMemo(() => getKeywordData(), []);

  const handleCallClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_call_click', cta_location: 'hero', keyword: kw, modifier: prefix.trim() });
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
    <section className="relative pt-32 pb-16 lg:pb-24 overflow-hidden hero-min">
      {/* Background image with light overlay */}
      <div className="absolute inset-0">
        {/* PERF: fetchPriority=high + explicit w/h prevents LCP delay & CLS */}
        <img
          src={heroGateBg}
          alt=""
          role="presentation"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="sync"
        />

        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Subtle decorative shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Trust Row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              














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
              Expert <span className="text-primary">{headlineWord}</span> Solutions
            </h1>

            <p className="text-2xl md:text-3xl font-display font-semibold relative inline-block headline-underline mb-8 text-sidebar-border">
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