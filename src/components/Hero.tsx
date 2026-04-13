import { useMemo } from 'react';
import { Phone, MessageSquare, Shield, Star, Clock, CheckCircle } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { HeroForm } from '@/components/HeroForm';
import heroGateBg from '@/assets/hero-gate-bg.webp';

declare global {
  interface Window { dataLayer: Record<string, unknown>[]; }
}

function getKeywordData(): { prefix: string; kw: string; headlineWord: string; } {
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
  const { phoneLink, phoneFormatted } = useLocation2();
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
    <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Dark background with image */}
      <div className="absolute inset-0">
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
        <div className="absolute inset-0 bg-[hsl(222,47%,11%)]/90" />
      </div>

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Status badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-white">Licensed & Insured</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 border border-green-500/25">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-bold text-green-300">Available Now</span>
              </span>
            </div>

            {/* Headline — no city, safe broad wording */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.08] mb-5 tracking-tight text-white">
              Local{' '}
              <span className="text-primary">{headlineWord}</span>
              {' '}Repair & Installation
            </h1>

            <p className="text-xl md:text-2xl font-display font-semibold text-white/70 mb-8">
              Same-Day Service • Best Price Guarantee
            </p>

            {/* Bullet Promises */}
            <ul className="space-y-2.5 mb-8">
              {[
                'Licensed & Insured — LIC#1138855',
                'Same-Day Service Available',
                'Free Estimates — No Obligation',
                '20+ Years of Experience',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base text-white/80">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href={phoneLink} onClick={handleCallClick} className="btn-cta text-lg min-h-[60px] px-8">
                <Phone className="w-6 h-6" />
                Call Now: {phoneFormatted}
              </a>
              <a
                href="#quote-form"
                onClick={handleEstimateClick}
                className="btn-secondary min-h-[56px] px-8 text-lg"
              >
                <MessageSquare className="w-5 h-5" />
                Free Estimate
              </a>
            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="font-bold text-white/90">4.9</span> Rating
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                20+ Years
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary" />
                Licensed #1138855
              </span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:sticky lg:top-28">
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
}
