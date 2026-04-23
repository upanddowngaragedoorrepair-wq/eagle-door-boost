import { Star } from 'lucide-react';
import homeAdvisorBadge from '@/assets/homeadvisor-badge.png';
import cslbBadge from '@/assets/cslb-badge.png';
import bbbBadge from '@/assets/bbb-badge.webp';


export function TrustProofSection() {
  return (
    <section className="py-5 md:py-7 bg-[#f8fafc] relative overflow-hidden border-b-2 border-primary">
      <div className="container-main relative">
        {/* Headline */}
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-[hsl(var(--navy))] mb-1.5 tracking-tight">
            Trusted & <span className="text-primary">Verified</span>
          </h2>
          <p className="text-sm md:text-base text-[hsl(var(--navy))]/70 max-w-2xl mx-auto">
            Proudly trusted through the Google Guaranteed program.
          </p>
        </div>

        {/* Cards Row - 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {/* CSLB Badge */}
          <div
            className="flex flex-col items-center justify-center text-center p-3 md:p-4 rounded-xl bg-white border border-border/60 h-[140px] md:h-[160px]"
            style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}
          >
            <img
              src={cslbBadge}
              alt="CSLB Contractors State License Board - LIC#1138855"
              className="max-h-[80px] md:max-h-[100px] w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* BBB Badge */}
          <div
            className="flex flex-col items-center justify-center text-center p-3 md:p-4 rounded-xl bg-white border border-border/60 h-[140px] md:h-[160px]"
            style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}
          >
            <img
              src={bbbBadge}
              alt="BBB Accredited Business"
              className="max-h-[60px] md:max-h-[75px] w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
            <span className="mt-1.5 text-[11px] md:text-xs font-semibold text-[hsl(var(--navy))]/70 uppercase tracking-wide">
              Accredited Business
            </span>
          </div>

          {/* Google Rating Card */}
          <div
            className="flex flex-col items-center justify-center text-center gap-1.5 p-3 md:p-4 rounded-xl bg-white border border-border/60 h-[140px] md:h-[160px]"
            style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}
          >
            <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div className="flex items-center gap-1">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) =>
                  <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-primary text-primary" />
                )}
              </div>
              <span className="text-sm md:text-base font-bold text-[hsl(var(--navy))]">4.9</span>
            </div>
            <span className="text-[11px] md:text-xs text-muted-foreground leading-tight">Based on 189+ reviews</span>
          </div>

          {/* HomeAdvisor Rating Card */}
          <div
            className="flex flex-col items-center justify-center text-center gap-1.5 p-3 md:p-4 rounded-xl bg-white border border-border/60 h-[140px] md:h-[160px]"
            style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}
          >
            <img
              src={homeAdvisorBadge}
              alt="HomeAdvisor Elite Service"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
              loading="lazy"
              decoding="async"
            />
            <div className="flex items-center gap-1">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) =>
                  <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-primary text-primary" />
                )}
              </div>
              <span className="text-sm md:text-base font-bold text-[hsl(var(--navy))]">5.0</span>
            </div>
            <span className="text-[11px] md:text-xs text-muted-foreground leading-tight">Based on 64 local reviews</span>
          </div>
        </div>
      </div>
    </section>);

}

export default TrustProofSection;
