import { Star, Shield, Zap, Clock, DollarSign } from 'lucide-react';
import yelpLogo from '@/assets/yelp-logo.webp';
import homeAdvisorBadge from '@/assets/homeadvisor-badge.png';
import cslbBadge from '@/assets/cslb-badge.png';

const promises = [
{ icon: Zap, text: 'Same Day Service' },
{ icon: Shield, text: 'Free Estimates' },
{ icon: Star, text: '5-Star Rated' },
{ icon: Clock, text: '30-Min Response' },
{ icon: DollarSign, text: 'Best Price Guarantee' }];


export function TrustProofSection() {
  return (
    <section className="py-8 md:py-10 bg-[hsl(var(--navy))] relative overflow-hidden bg-primary-foreground">
      <div className="container-main relative">
        {/* Headline */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2 tracking-tight">
            Trusted & <span className="text-primary">Verified</span>
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Proudly trusted through the Google Guaranteed program.
          </p>
        </div>

        {/* Horizontal Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {/* Google Guaranteed Badge */}
          <div className="flex items-center justify-center px-2 py-2 md:px-3 md:py-3 rounded-xl bg-white/[0.07] border border-white/10 backdrop-blur-sm aspect-[2.8/1]">
            <img
              src={cslbBadge}
              alt="CSLB Contractors State License Board - LIC#1138855"
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Google Rating Card */}
          <div className="flex flex-row md:flex-col items-center gap-4 md:gap-2 p-4 rounded-xl bg-white/[0.07] border border-white/10 backdrop-blur-sm">
            <div className="shrink-0">
              <svg className="w-20 h-20 md:w-24 md:h-24" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) =>
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  )}
                </div>
                <span className="text-lg font-bold text-white">4.9</span>
              </div>
              <span className="text-sm text-white/60">Based on 189+ reviews</span>
            </div>
          </div>

          {/* HomeAdvisor Rating Card */}
          <div className="flex flex-row md:flex-col items-center gap-4 md:gap-2 p-4 rounded-xl bg-white/[0.07] border border-white/10 backdrop-blur-sm">
            <div className="shrink-0">
              <img
                src={homeAdvisorBadge}
                alt="HomeAdvisor Elite Service"
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
                loading="lazy"
                decoding="async" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) =>
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  )}
                </div>
                <span className="text-lg font-bold text-white">5.0</span>
              </div>
              <span className="text-sm text-white/60">Based on 64 local reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

export default TrustProofSection;