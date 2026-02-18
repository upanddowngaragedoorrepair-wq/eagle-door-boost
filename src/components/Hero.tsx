import { Phone, MessageSquare, Star, Shield, CheckCircle } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';
import { HeroForm } from '@/components/HeroForm';
import heroBg from '@/assets/hero-bg.webp';

export function Hero() {
  const { phoneLink, phoneFormatted } = useLocation2();

  return (
    <section className="relative flex items-center overflow-hidden pt-32 pb-16 lg:min-h-screen">
      {/* Background */}
      <img
        src={heroBg}
        alt=""
        fetchPriority="high"
        decoding="sync"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Trust Row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-card/90 border border-primary/40 shadow-lg backdrop-blur-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-lg font-bold text-foreground">4.9</span>
                <span className="text-sm text-muted-foreground">(189+)</span>
              </div>
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-card/80 border border-border shadow-lg backdrop-blur-sm">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-foreground">Licensed & Insured</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-green-500/10 border border-green-500/30 shadow-lg backdrop-blur-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-bold text-green-400">Technicians Available</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-4 tracking-tight">
              <span className="text-foreground">Fast & Reliable</span>
              <br />
              <span className="text-foreground">Gate </span>
              <span className="gradient-text">Experts</span>
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
                '$0 Check-up Fee',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-foreground/90">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Family Owned */}
            <p className="text-base font-bold shine-text mb-8">
              ★ Proudly Family Owned & Operated — Serving Our Community with Honor ★
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={phoneLink} className="btn-cta text-lg min-h-[64px] px-8">
                <Phone className="w-6 h-6" />
                Call Now: {phoneFormatted}
              </a>
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary min-h-[60px] px-8 text-lg"
              >
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
    </section>
  );
}
