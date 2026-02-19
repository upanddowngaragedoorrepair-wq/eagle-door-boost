import { Star, Shield, Zap, Clock, DollarSign } from 'lucide-react';
import yelpLogo from '@/assets/yelp-logo.webp';

const promises = [
  { icon: Zap, text: 'Same Day Service' },
  { icon: Shield, text: 'Free Estimates' },
  { icon: Star, text: '5-Star Rated' },
  { icon: Clock, text: '30-Min Response' },
  { icon: DollarSign, text: 'Best Price Guarantee' },
];

export function TrustProofSection() {
  return (
    <section className="py-14 md:py-20 bg-[hsl(var(--navy))] relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main relative">
        {/* Headline */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            Trusted & <span className="text-primary">Verified</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Proudly trusted through the Google Guaranteed program.
          </p>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto mb-10">
          {/* Google Guaranteed Badge */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.07] border border-white/10 backdrop-blur-sm">
            <img
              src="/assets/trust/google-guaranteed-service-provider.webp"
              alt="Google Guaranteed Service Provider"
              width={160}
              height={160}
              className="w-36 h-36 md:w-40 md:h-40 object-contain mb-3"
              loading="lazy"
              decoding="async"
            />
            <p className="text-xs text-white/50 text-center leading-snug mt-1">
              Certified contractors — so confident Google is willing to put its name behind our service.
            </p>
          </div>

          {/* Google Rating Card */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.07] border border-white/10 backdrop-blur-sm">
            <svg className="w-10 h-10 mb-3" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold text-white mb-1">4.9</span>
            <span className="text-sm text-white/60">Based on 189+ reviews</span>
          </div>

          {/* Yelp Rating Card */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.07] border border-white/10 backdrop-blur-sm">
            <img
              src={yelpLogo}
              alt="Yelp"
              className="w-10 h-10 rounded-lg mb-3"
              loading="lazy"
              decoding="async"
            />
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
              ))}
            </div>
            <span className="text-2xl font-bold text-white mb-1">5.0</span>
            <span className="text-sm text-white/60">Community rated</span>
          </div>
        </div>

        {/* Secondary promise pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {promises.map((p, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10">
              <p.icon className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-white/80 uppercase tracking-wide">{p.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustProofSection;
