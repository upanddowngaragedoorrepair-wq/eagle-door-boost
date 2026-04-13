import { Star } from 'lucide-react';
import yelpLogo from '@/assets/yelp-logo.webp';

export function TrustProofSection() {
  return (
    <section className="py-10 md:py-14 bg-card border-b border-border">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Google Guaranteed */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/trust/google-guaranteed-service-provider.webp"
              alt="Google Guaranteed"
              width={56}
              height={56}
              className="w-14 h-14 object-contain"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="text-sm font-bold text-foreground">Google Guaranteed</p>
              <p className="text-xs text-muted-foreground">Backed by Google</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-border" />

          {/* Google Rating */}
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold text-foreground">4.9</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">189+ Google Reviews</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-border" />

          {/* Yelp Rating */}
          <div className="flex items-center gap-3">
            <img src={yelpLogo} alt="Yelp" className="w-8 h-8 rounded-lg shrink-0" loading="lazy" decoding="async" />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold text-foreground">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Yelp Reviews</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-border" />

          {/* BBB */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-green-600 flex items-center justify-center text-white text-xs font-bold">A+</div>
            <div>
              <p className="text-sm font-bold text-foreground">A+ Rating</p>
              <p className="text-xs text-muted-foreground">BBB Accredited</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustProofSection;
